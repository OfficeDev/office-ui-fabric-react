import * as React from 'react';
import { IKeytipLayerProps } from './KeytipLayer.types';
import { KeytipWrapper, IKeytipProps } from '../../Keytip';
import { Layer } from '../../Layer';
import {
  autobind,
  BaseComponent,
  KeyCodes,
  find,
  findIndex,
  replaceElement,
  KeytipTransitionModifier,
  convertSequencesToKeytipID,
  fullKeySequencesAreEqual,
  IKeytipTransitionKey,
  ktpFullPrefix,
  ktpSeparator,
  ktpLayerId
} from '../../Utilities';
import { KeytipManager } from '../../utilities/keytips';

export interface IKeytipLayerState {
  inKeytipMode: boolean;
  keytips: IKeytipProps[];
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

/**
 * A layer that holds all keytip items
 *
 * @export
 * @class KeytipLayer
 * @extends {BaseComponent<IKeytipLayerProps>}
 */
export class KeytipLayer extends BaseComponent<IKeytipLayerProps, IKeytipLayerState> {
  public static defaultProps: IKeytipLayerProps = {
    keytipStartSequences: [defaultStartSequence],
    keytipExitSequences: [defaultExitSequence],
    keytipReturnSequences: [defaultReturnSequence],
    content: 'Alt Windows'
  };

  private _keytipManager: KeytipManager = KeytipManager.getInstance();

  // tslint:disable-next-line:no-any
  constructor(props: IKeytipLayerProps, context: any) {
    super(props, context);

    this.state = {
      inKeytipMode: false,
      // Get the initial set of keytips
      keytips: [...this._keytipManager.keytips],
    };

    this._keytipManager.init(this);
  }

  /*
  public addOrUpdateKeytip(keytip: IKeytipProps) {
    this.setState((previousState: IKeytipLayerState, currentProps: IKeytipLayerState) => {
      let currentKeytips: IKeytipProps[] = [...previousState.keytips];
      const keytipIndex = findIndex(currentKeytips, (currentKeytip: IKeytipProps) => {
        return fullKeySequencesAreEqual(currentKeytip.keySequences, keytip.keySequences);
      });
      if (keytipIndex >= 0) {
        currentKeytips = replaceElement(currentKeytips, keytip, keytipIndex);
      } else {
        currentKeytips.push(keytip);
      }
      return { ...previousState, activeKeytips: currentKeytips };
    });
  }

  public removeKeytip(keytip: IKeytipProps) {
    this.setState((previousState: IKeytipLayerState, currentProps: IKeytipLayerState) => {
      let currentKeytips: IKeytipProps[] = [...previousState.keytips];
      // Filter out 'keytip'
      currentKeytips = currentKeytips.filter((currentKeytip: IKeytipProps) => {
        return !fullKeySequencesAreEqual(keytip.keySequences, currentKeytip.keySequences);
      });
      return { ...previousState, activeKeytips: currentKeytips };
    });
  }
  */

  /**
   *
   * @param keytipProps
   */
  public setKeytips(keytipProps: IKeytipProps[]) {
    this.setState({ keytips: keytipProps });
  }

  public render(): JSX.Element {
    const {
      content
    } = this.props;

    const {
      keytips
    } = this.state;

    return (
      <Layer>
        <span id={ ktpLayerId } style={ { visibility: 'hidden' } }>{ content }</span>
        { keytips && keytips.map((keytipProps: IKeytipProps, index: number) => {
          return <KeytipWrapper key={ index } { ...keytipProps } />;
        }) }
      </Layer>
    );
  }

  public componentDidMount(): void {
    this._events.on(window, 'mousedown', this._onDismiss);
    this._events.on(window, 'resize', this._onDismiss);
    this._events.on(window, 'keydown', this._onKeyDown, true /* useCapture */);
    this._events.on(window, 'keypress', this._onKeyPress, true /* useCapture */);

    // Add handler to remove Keytips when we scroll the page
    window.addEventListener('scroll', (): void => {
      if (this.state.inKeytipMode) {
        this._keytipManager.exitKeytipMode();
      }
    }, { capture: true });
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

  @autobind
  private _onDismiss(ev?: React.MouseEvent<HTMLElement>): void {
    // if we are in keytip mode, then exit keytip mode
    if (this.state.inKeytipMode) {
      this._keytipManager.exitKeytipMode();
    }
  }

  @autobind
  private _onKeyDown(ev: React.KeyboardEvent<HTMLElement>): void {
    switch (ev.which) {
      case KeyCodes.alt:
        // ALT puts focus in the browser bar, so it should not be used as a key for keytips.
        // It can be used as a modifier
        break;
      case KeyCodes.tab:
      case KeyCodes.enter:
      case KeyCodes.space:
        this._keytipManager.exitKeytipMode();
        break;
      default:
        let key = ev.key;
        if (key === 'OS' || key === 'Win') {
          // Special cases for browser-specific changes that will be fixed in the future
          // TODO: add bug numbers for Edge and Firefox
          key = 'Meta';
        }
        const transitionKey: IKeytipTransitionKey = { key };
        transitionKey.modifierKeys = this._getModifierKey(ev);
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
  private _getModifierKey(ev: React.KeyboardEvent<HTMLElement>): KeytipTransitionModifier[] | undefined {
    const modifierKeys = [];
    if (ev.altKey) {
      modifierKeys.push(KeytipTransitionModifier.alt);
    }
    if (ev.ctrlKey) {
      modifierKeys.push(KeytipTransitionModifier.ctrl);
    }
    if (ev.shiftKey) {
      modifierKeys.push(KeytipTransitionModifier.shift);
    }
    // TODO: include windows key or option for MAC
    return modifierKeys.length ? modifierKeys : undefined;
  }

  @autobind
  private _onKeyPress(ev: React.KeyboardEvent<HTMLElement>): void {
    // Call processInput
    this._keytipManager.processInput(ev.key);
  }
}