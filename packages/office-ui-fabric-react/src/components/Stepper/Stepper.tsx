import * as React from 'react';
import {
  IconButton,
  Label
} from '../../../lib/';
import {
  BaseComponent,
  css,
  getId,
  KeyCodes,
  assign
} from '../../Utilities';
import {
  IStepper,
  IStepperProps
} from './Stepper.Props';
import './Stepper.scss';

export interface IStepperState {
  /**
   * the value of the stepper
   */
  value?: string;

  /**
   * Are we spinning? Used in case we are spinning
   * and the text field gets focus (we should stop spinning)
   */
  spinning?: boolean;
}

export class Stepper extends BaseComponent<IStepperProps, IStepperState> implements IStepper {
  private _input: HTMLInputElement;
  private _inputId: string;
  private _labelId: string;
  private _lastValidValue: string;

  private _onBlur?: (value: string, state: IStepperState, props: IStepperProps) => string;
  private _onIncrement?: (value: string) => string;
  private _onDecrement?: (value: string) => string;
  private _defaultOnBlur = (value: string, state: IStepperState, props: IStepperProps) => {
    if (isNaN(+value)) {
      return this._lastValidValue;
    }
    const newValue = Math.min(this.props.max, Math.max(this.props.min, +value));
    return String(newValue);
  }
  private _defaultOnIncrement = (value: string) => {
    let newValue = Math.min(+value + this.props.step, this.props.max);
    return String(newValue);
  };
  private _defaultOnDecrement = (value: string) => {
    let newValue = Math.max(+value - this.props.step, this.props.min);
    return String(newValue);
  };

  public static defaultProps: IStepperProps = {
    step: 1,
    min: 0,
    max: 100,
    disabled: false,
    defaultValue: '0'
  };

  private _currentStepFunctionHandle: number;
  private _stepDelay = 100;

  private _formattedValidUnitOptions: string[] = [];

  constructor(props?: IStepperProps) {
    super(props);

    let value = props.value || props.defaultValue || String(props.min);
    this._lastValidValue = value;

    this.state = {
      value: value,
      spinning: false,
    };

    this._labelId = getId('Label');
    this._inputId = getId('input');

    if (props.onBlur) {
      this._onBlur = props.onBlur;
    } else {
      this._onBlur = this._defaultOnBlur;
    }

    if (props.onIncrement) {
      this._onIncrement = props.onIncrement;
      this._onIncrement = this._onIncrement.bind(this);
    } else {
      this._onIncrement = this._defaultOnIncrement;
    }

    if (props.onDecrement) {
      this._onDecrement = props.onDecrement;
      this._onDecrement = this._onDecrement.bind(this);
    } else {
      this._onDecrement = this._defaultOnDecrement;
    }

    // bind this (for this class) to all the methods
    this._blur = this._blur.bind(this);
    this._increment = this._increment.bind(this);
    this._decrement = this._decrement.bind(this);
    this._stop = this._stop.bind(this);
    this.focus = this.focus.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleKeyUp = this._handleKeyUp.bind(this);
    this._onInputChange = this._onInputChange.bind(this);
  }

  /**
  * Invoked when a component is receiving new props. This method is not called for the initial render.
  */
  public componentWillReceiveProps(newProps: IStepperProps): void {
    if (newProps.value !== undefined) {
      let value = Math.max(newProps.min, Math.min(newProps.max, +newProps.value));

      this.setState({
        value: String(value)
      });
    }
  }

  public render() {
    const {
      className,
      disabled,
      label
    } = this.props;

    const {
      value
    } = this.state;

    return (
      <div className='stepperContainer' >
        aria-valuemin={ String(this.props.min) }
        aria-valuemax={ String(this.props.max) }
        { label && <Label id={ this._labelId } htmlFor={ this._inputId }>{ label }</Label> }
        <input
          value={ value }
          id={ this._inputId }
          onChange={ this._onChange }
          onInput={ this._onInputChange }
          className='spinButton-input'
          role='spinbutton'
          aria-labelledby={ label && this._labelId }
          aria-valuenow={ value }
          aria-valuemin={ String(this.props.min) }
          aria-valuemax={ String(this.props.max) }
          onBlur={ this._blur }
          ref={ this._resolveRef('_input') }
          onFocus={ this.focus }
          onKeyDown={ this._handleKeyDown }
          onKeyUp={ this._handleKeyUp }
        />
        <span className='arrowBox'>
          <IconButton
            className='upButton'
            disabled={ disabled }
            icon='CaretUpSolid8'
            title='Increase'
            aria-hidden='true'
            onMouseDown={ () => { this._increment() } }
            onMouseLeave={ this._stop }
            onMouseUp={ this._stop }
            onBlur={ this._stop }
            tabIndex={ -1 }
          />
          <IconButton
            className='downButton'
            disabled={ disabled }
            icon='CaretDownSolid8'
            title='Decrease'
            aria-hidden='true'
            onMouseDown={ () => { this._decrement() } }
            onMouseLeave={ this._stop }
            onMouseUp={ this._stop }
            onBlur={ this._stop }
            tabIndex={ -1 }
          />
        </span >
      </ div >
    ) as React.ReactElement<{}>;
  }

  private _onChange() {
    /**
     * A noop input change handler.
     * https://github.com/facebook/react/issues/7027.
     * Using the native onInput handler fixes the issue but onChange
     * still need to be wired to avoid React console errors
     * TODO: Check if issue is resolved when React 16 is available.
     */
  }

  /**
   * OnFocus select the contents of the input
   */
  public focus() {
    if (this.state.spinning) {
      this._stop();
    }

    this._input.focus();
    this._input.select();
  }

  /**
   * This is used when validating text entry
   * in the text field (not when changed via the buttons)
   * @param newValue - the pending value to check if it is valid
   * @returns an error message to display to the user, empty string if no error
   */
  private _blur(event: React.FocusEvent<HTMLInputElement>) {
    const element: HTMLInputElement = event.target as HTMLInputElement;
    const value: string = element.value;
    if (this.state.value) {
      var newValue = this._onBlur(value, this.state, this.props);
      this._lastValidValue = newValue;
      this.setState({ value: newValue });
    }
  }

  private _onInputChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;
    const value: string = element.value;

    this.setState({
      value: value,
    });
  }

  /**
   * Used to increment the current value by the provided step count
   * @param shouldSpin - Should we continue to increment?
   * True by default and useful if we get here from a mousedown event
   * on one of the buttons. False if this fired from a keydown event
   */
  _increment(shouldSpin: boolean = true) {
    var newValue = this._onIncrement(this.state.value);
    this._lastValidValue = newValue;
    this.setState({ value: newValue });
  }

  /**
   * Used to decrement the current value by the provided step count
   * @param shouldSpin - Should we continue to decrement?
   * True by default and useful if we get here from a mousedown event
   * on one of the buttons. False if this fired from a keydown event
   */
  _decrement(shouldSpin: boolean = true) {
    var newValue = this._onDecrement(this.state.value);
    this._lastValidValue = newValue;
    this.setState({ value: newValue });
  }

  /**
   * Stop spinning (clear any currently pending update and set spinning to false)
   */
  private _stop() {
    if (this._currentStepFunctionHandle != null) {
      window.clearTimeout(this._currentStepFunctionHandle);
      this._currentStepFunctionHandle == 0;
    }

    if (this.state.spinning) {
      this.setState({ spinning: false });
    }
  }

  /**
   * Handle keydown on the text field. We need to update
   * the value when up or down arrow are depressed
   * @param event - the keyboardEvent that was fired
   */
  private _handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (this.props.disabled) {
      this._stop();
      return;
    }

    if (event.which === KeyCodes.up) {
      this._increment(false /* shouldSpin */);
    }
    else if (event.which === KeyCodes.down) {
      this._decrement(false /* shouldSpin */);
    }

    else if (event.which === KeyCodes.enter) {
      event.currentTarget.blur();
      this.focus();
    }
  }

  /**
   * Make sure that we have stopped spinning on keyUp
   * if the up or down arrow fired this event
   * @param event stop spinning if we
   */
  private _handleKeyUp(event: React.KeyboardEvent<HTMLElement>) {
    if (this.props.disabled) {
      this._stop();
      return;
    }

    if (event.which === KeyCodes.up || event.which === KeyCodes.down) {
      this._stop();
    }
  }
}