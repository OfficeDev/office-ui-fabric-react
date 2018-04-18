import * as React from 'react';
import { IKeytipLayerProps, IKeytipLayerStyles, IKeytipLayerStyleProps } from './KeytipLayer.types';
import { getLayerStyles } from './KeytipLayer.styles';
import { Keytip, IKeytipProps } from '../../Keytip';
import { Layer } from '../../Layer';
import {
  BaseComponent,
  KeyCodes,
  KeytipTransitionModifier,
  IKeytipTransitionKey,
  ktpLayerId,
  ktpAriaSeparator,
  ktpAriaSeparatorId,
  classNamesFunction,
  convertSequencesToKeytipID
} from '../../Utilities';
import { KeytipManager } from '../../utilities/keytips';

export interface IKeytipLayerState {
  inKeytipMode: boolean;
  keytips: IKeytipProps[];
  visibleKeytips: IKeytipProps[];
}

const defaultStartSequence: IKeytipTransitionKey = {
  key: 'Meta', modifierKeys: [KeytipTransitionModifier.alt]
};

const defaultExitSequence: IKeytipTransitionKey = {
  key: 'Meta', modifierKeys: [KeytipTransitionModifier.alt]
};

const defaultReturnSequence: IKeytipTransitionKey = {
  key: 'Escape'
};
const getClassNames = classNamesFunction<IKeytipLayerStyleProps, IKeytipLayerStyles>();

/**
 * A layer that holds all keytip items
 *
 * @export
 * @class KeytipLayer
 * @extends {BaseComponent<IKeytipLayerProps>}
 */
export class KeytipLayerBase extends BaseComponent<IKeytipLayerProps, IKeytipLayerState> {
  public static defaultProps: IKeytipLayerProps = {
    keytipStartSequences: [defaultStartSequence],
    keytipExitSequences: [defaultExitSequence],
    keytipReturnSequences: [defaultReturnSequence],
    content: 'Alt Windows'
  };

  private _keytipManager: KeytipManager = KeytipManager.getInstance();
  private _classNames: { [key in keyof IKeytipLayerStyles]: string };

  // tslint:disable-next-line:no-any
  constructor(props: IKeytipLayerProps, context: any) {
    super(props, context);

    const managerKeytips = [...this._keytipManager.getKeytips()];
    this.state = {
      inKeytipMode: false,
      // Get the initial set of keytips
      keytips: managerKeytips,
      visibleKeytips: this._getVisibleKeytips(managerKeytips)
    };

    this._keytipManager.init(this);
  }

  /**
   * Sets the keytips state property
   *
   * @param keytipProps - Keytips to set in this layer
   */
  public setKeytips(keytipProps: IKeytipProps[]) {
    this.setState({ keytips: keytipProps, visibleKeytips: this._getVisibleKeytips(keytipProps) });
  }

  public render(): JSX.Element {
    const {
      content,
      getStyles
    } = this.props;

    const {
      keytips,
      visibleKeytips
    } = this.state;

    this._classNames = getClassNames(
      getStyles!
    );

    return (
      <Layer getStyles={ getLayerStyles }>
        <span id={ ktpLayerId } className={ this._classNames.innerContent }>{ content }</span>
        <span id={ ktpAriaSeparatorId } className={ this._classNames.innerContent }>{ ktpAriaSeparator }</span>
        { keytips && keytips.map((keytipProps: IKeytipProps, index: number) => {
          return (
            <span
              key={ index }
              id={ convertSequencesToKeytipID(keytipProps.keySequences) }
              className={ this._classNames.innerContent }
            >
              { keytipProps.keySequences.join(', ') }
            </span>
          );
        }) }
        { visibleKeytips && visibleKeytips.map((visibleKeytipProps: IKeytipProps) => {
          return <Keytip key={ convertSequencesToKeytipID(visibleKeytipProps.keySequences) } { ...visibleKeytipProps } />;
        }) }
      </Layer>
    );
  }

  public componentDidMount(): void {
    // Add window listeners
    this._events.on(window, 'mouseup', this._onDismiss, true /* useCapture */);
    this._events.on(window, 'resize', this._onDismiss);
    this._events.on(window, 'keydown', this._onKeyDown, true /* useCapture */);
    this._events.on(window, 'keypress', this._onKeyPress, true /* useCapture */);
    this._events.on(window, 'scroll', this._onDismiss, true /* useCapture */);
  }

  public componentWillUnmount(): void {
    // Remove window listeners
    this._events.off(window, 'mouseup', this._onDismiss, true /* useCapture */);
    this._events.off(window, 'resize', this._onDismiss);
    this._events.off(window, 'keydown', this._onKeyDown, true /* useCapture */);
    this._events.off(window, 'keypress', this._onKeyPress, true /* useCapture */);
    this._events.off(window, 'scroll', this._onDismiss, true /* useCapture */);
  }

  /**
   * Exits keytip mode for this layer
   */
  public exitKeytipMode(): void {
    if (this.props.onExitKeytipMode) {
      this.props.onExitKeytipMode();
    }
    this.setState({ inKeytipMode: false });
  }

  /**
   * Enters keytip mode for this layer
   */
  public enterKeytipMode(): void {
    if (this.props.onEnterKeytipMode) {
      this.props.onEnterKeytipMode();
    }
    this.setState({ inKeytipMode: true });
  }

  private _getVisibleKeytips(keytips: IKeytipProps[]): IKeytipProps[] {
    return keytips.filter((keytip: IKeytipProps) => {
      return keytip.visible;
    });
  }

  private _onDismiss = (ev?: React.MouseEvent<HTMLElement>): void => {
    // if we are in keytip mode, then exit keytip mode
    if (this.state.inKeytipMode) {
      this._keytipManager.exitKeytipMode();
    }
  }

  private _onKeyDown = (ev: React.KeyboardEvent<HTMLElement>): void => {
    switch (ev.which) {
      case KeyCodes.alt:
        // ALT puts focus in the browser bar, so it should not be used as a key for keytips.
        // It can be used as a modifier
        break;
      case KeyCodes.tab:
      case KeyCodes.enter:
      case KeyCodes.space:
        if (this.state.inKeytipMode) {
          this._keytipManager.exitKeytipMode();
          ev.preventDefault();
          ev.stopPropagation();
        }
        break;
      default:
        let key = ev.key;
        // Special cases for browser-specific keys that are not at standard
        // (according to http://www.w3.org/TR/uievents-key/#keys-navigation)
        if (key === 'Esc') {
          // Edge: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/5290772/
          key = 'Escape';
        } else if (key === 'OS' || key === 'Win') {
          // Firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=1232918
          // Edge: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8860571/
          // and https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/16424492/
          key = 'Meta';
        }
        const transitionKey: IKeytipTransitionKey = { key };
        transitionKey.modifierKeys = this._getModifierKey(key, ev);
        this._keytipManager.processTransitionInput(transitionKey);
        break;
    }
  }

  /**
   * Gets the ModifierKeyCodes based on the keyboard event
   *
   * @param ev - React.KeyboardEvent
   * @returns List of ModifierKeyCodes that were pressed
   */
  private _getModifierKey(key: string, ev: React.KeyboardEvent<HTMLElement>): KeytipTransitionModifier[] | undefined {
    const modifierKeys = [];
    if (ev.altKey && key !== 'Alt') {
      modifierKeys.push(KeytipTransitionModifier.alt);
    }
    if (ev.ctrlKey && key !== 'Control') {
      modifierKeys.push(KeytipTransitionModifier.ctrl);
    }
    if (ev.shiftKey && key !== 'Shift') {
      modifierKeys.push(KeytipTransitionModifier.shift);
    }
    if (ev.metaKey && key !== 'Meta') {
      modifierKeys.push(KeytipTransitionModifier.meta);
    }
    return modifierKeys.length ? modifierKeys : undefined;
  }

  private _onKeyPress = (ev: React.KeyboardEvent<HTMLElement>): void => {
    if (this.state.inKeytipMode) {
      // Call processInput
      this._keytipManager.processInput(ev.key.toLocaleLowerCase());
      ev.preventDefault();
      ev.stopPropagation();
    }
  }
}