import * as React from 'react';
import {
  css,
  BaseComponent,
  createRef,
  IKeySequence,
  getNativeProps,
  divProperties,
  focusFirstChild
} from '../../Utilities';
import { mergeStyles } from '../../Styling';
import { IOverflowSet, IOverflowSetProps, IOverflowSetItemProps } from './OverflowSet.types';
import { FocusZone, FocusZoneDirection } from '../../FocusZone';
import { KeytipManager } from '../../utilities/keytips';
import { IKeytipProps } from '../../Keytip';
import * as stylesImport from './OverflowSet.scss';

const styles: any = stylesImport;

export class OverflowSet extends BaseComponent<IOverflowSetProps, {}> implements IOverflowSet {

  private _focusZone = createRef<FocusZone>();
  private _persistedKeytips: { [uniqueID: string]: IKeytipProps } = {};
  private _keytipManager: KeytipManager = KeytipManager.getInstance();
  private _divContainer = createRef<HTMLDivElement>();

  constructor(props: IOverflowSetProps) {
    super(props);

    if (props.doNotContainWithinFocusZone) {
      this._warnMutuallyExclusive({
        'doNotContainWithinFocusZone': 'focusZoneProps'
      });
    }
  }

  public render() {
    this._unregisterPersistedKeytips();

    const {
      items,
      overflowItems,
      className,
      focusZoneProps,
      vertical = false,
      role = 'menubar',
      doNotContainWithinFocusZone
    } = this.props;

    let Tag;
    let uniqueComponentProps;

    if (doNotContainWithinFocusZone) {
      Tag = 'div';
      uniqueComponentProps = {
        ...getNativeProps(this.props, divProperties),
        ref: this._divContainer
      };
    } else {
      Tag = FocusZone;
      uniqueComponentProps = {
        ...focusZoneProps,
        componentRef: this._focusZone,
        direction: vertical ? FocusZoneDirection.vertical : FocusZoneDirection.horizontal
      };
    }

    return (
      <Tag
        { ...uniqueComponentProps }
        className={ mergeStyles(
          'ms-OverflowSet',
          styles.root,
          vertical && styles.rootVertical,
          className
        ) }
        role={ role }
      >
        { items && this._onRenderItems(items) }
        { overflowItems && overflowItems.length > 0 && this._onRenderOverflowButtonWrapper(overflowItems) }
      </Tag>
    );
  }

  public focus() {
    if (this.props.doNotContainWithinFocusZone) {
      if (this._divContainer.value) {
        focusFirstChild(this._divContainer.value);
      }

      return;
    }

    if (this._focusZone.value) {
      this._focusZone.value.focus();
    }
  }

  public componentDidMount() {
    this._registerPersistedKeytips();
  }

  public componentDidUpdate() {
    this._registerPersistedKeytips();
  }

  public componentWillUnmount() {
    this._unregisterPersistedKeytips();
  }

  private _registerPersistedKeytips() {
    Object.keys(this._persistedKeytips).forEach((key: string) => {
      const keytip = this._persistedKeytips[key];
      // TODO: use helper
      const uniqueID = this._keytipManager.registerPersistedKeytip(keytip);
      // Update map
      this._persistedKeytips[uniqueID] = keytip;
      delete this._persistedKeytips[key];
    });
  }

  private _unregisterPersistedKeytips() {
    // Delete all persisted keytips saved
    Object.keys(this._persistedKeytips).forEach((uniqueID: string) => {
      // TODO: use helper
      this._keytipManager.unregisterPersistedKeytip(this._persistedKeytips[uniqueID], uniqueID);
    });
    this._persistedKeytips = {};
  }

  private _onRenderItems = (items: IOverflowSetItemProps[]): JSX.Element[] => {
    const overflowKeytipSequences = this.props.keytipSequences;

    return items.map((item, i) => {
      const wrapperDivProps: React.HTMLProps<HTMLDivElement> = { className: css('ms-OverflowSet-item', styles.item) };

      // Remove overflowSetSequence from all regular items
      if (overflowKeytipSequences && item.keytipProps) {
        this._removeOverflowSequence(item);
      }

      return (
        <div key={ item.key } { ...wrapperDivProps }>
          { this.props.onRenderItem(item) }
        </div>
      );
    });
  }

  private _onRenderOverflowButtonWrapper = (items: any[]): JSX.Element => {
    const wrapperDivProps: React.HTMLProps<HTMLDivElement> = { className: css('ms-OverflowSet-overflowButton', styles.item) };
    const overflowKeytipSequences = this.props.keytipSequences;

    // Register all persisted keytips and save
    if (overflowKeytipSequences) {
      items.forEach((overflowItem) => {
        const keytip = (overflowItem as IOverflowSetItemProps).keytipProps;
        if (keytip) {
          // Create persisted keytip
          const persistedKeytip: IKeytipProps = {
            content: keytip.content,
            keySequences: keytip.keySequences,
            hasChildrenNodes: false,
            disabled: keytip.disabled
          };

          if (keytip.hasChildrenNodes || overflowItem.subMenuProps) {
            // If the keytip has a submenu, change onExecute to persistedKeytipExecute
            // TODO: use helper
            persistedKeytip.onExecute = this._keytipManager.persistedKeytipExecute.bind(this._keytipManager, overflowKeytipSequences, overflowItem.keytipProps.keySequences);
          } else {
            // If the keytip doesn't have a submenu, just execute the original function
            persistedKeytip.onExecute = (el: HTMLElement | null) => {
              keytip.onExecute && keytip.onExecute(el);
            };
          }

          // Add this persisted keytip to our internal list, use a temporary uniqueID (its content)
          // uniqueID will get updated on register
          this._persistedKeytips[persistedKeytip.content] = persistedKeytip;

          // Add the overflow sequence to this item and its subMenu items
          this._addOverflowSequence(overflowKeytipSequences, overflowItem);
        }
      });
    }
    return (
      <div { ...wrapperDivProps }>
        { this.props.onRenderOverflowButton(items) }
      </div>
    );
  }

  /**
   * Unsets overflowSetSequence on item and its subMenu items
   */
  private _removeOverflowSequence(item: any): void {
    item.keytipProps.overflowSetSequence = undefined;

    if (item.subMenuProps) {
      item.subMenuProps.items.forEach((subMenuItem: any) => {
        if (subMenuItem.keytipProps) {
          this._removeOverflowSequence(subMenuItem);
        }
      });
    }
  }

  /**
   * Sets overflowSetSequence on item and its subMenu items
   */
  private _addOverflowSequence(overflowSequence: IKeySequence[], overflowItem: any): void {
    overflowItem.keytipProps.overflowSetSequence = overflowSequence;

    if (overflowItem.subMenuProps) {
      overflowItem.subMenuProps.items.forEach((subMenuItem: any) => {
        if (subMenuItem.keytipProps) {
          this._addOverflowSequence(overflowSequence, subMenuItem);
        }
      });
    }
  }

}