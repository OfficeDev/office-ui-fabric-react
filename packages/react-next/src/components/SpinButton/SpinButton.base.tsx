import * as React from 'react';
import { IconButton } from '../../Button';
import { Label } from '../../Label';
import { Icon } from '../../Icon';
import {
  getId,
  KeyCodes,
  calculatePrecision,
  classNamesFunction,
  precisionRound,
  mergeAriaAttributeValues,
  getNativeProps,
  divProperties,
} from '../../Utilities';
import { getArrowButtonStyles } from './SpinButton.styles';
import { ISpinButtonProps, KeyboardSpinDirection, ISpinButtonStyleProps } from './SpinButton.types';
import { Position } from 'office-ui-fabric-react/lib/utilities/positioning';
import { KeytipData } from '../../KeytipData';
import { useBoolean, useSetTimeout } from '@uifabric/react-hooks';
import { ISpinButtonStyles } from 'office-ui-fabric-react';

export interface ISpinButtonState {
  inputId: string;
  labelId: string;
  lastValidValue: string;
  spinningByMouse: boolean;
  valueToValidate: string | undefined;
  precision: number;
  currentStepFunctionHandle: number;
  initialStepDelay: number;
  stepDelay: number;
}

const getClassNames = classNamesFunction<ISpinButtonStyleProps, ISpinButtonStyles>();

const useComponentRef = (
  props: ISpinButtonProps,
  input: React.RefObject<HTMLDivElement>,
  value: string | undefined,
) => {
  React.useImperativeHandle(
    props.componentRef,
    () => ({
      get value() {
        return props.value === undefined ? value : props.value;
      },
      focus() {
        if (input.current) {
          input.current.focus();
        }
      },
    }),
    [value],
  );
};

export const SpinButtonBase = (props: ISpinButtonProps) => {
  const input = React.useRef<HTMLInputElement>(null);
  // Is true when the control has focus
  const [isFocused, { toggle: toggleIsFocused }] = useBoolean(false);
  // The value of the spin button
  const [value, setValue] = React.useState(props.value || props.defaultValue || String(props.min) || '0');
  // keyboard spin direction, used to style the up or down button
  // as active when up/down arrow is pressed
  const [keyboardSpinDirection, setKeyboardSpinDirection] = React.useState(KeyboardSpinDirection.notSpinning);

  const callCalculatePrecision = (calculatePrecisionProps: ISpinButtonProps) => {
    const { precision = Math.max(calculatePrecision(calculatePrecisionProps.step!), 0) } = calculatePrecisionProps;
    return precision;
  };

  const [state] = React.useState<ISpinButtonState>({
    inputId: getId('input'),
    labelId: getId('Label'),
    lastValidValue: '',
    spinningByMouse: false,
    valueToValidate: undefined,
    precision: callCalculatePrecision(props as ISpinButtonProps),
    currentStepFunctionHandle: -1,
    initialStepDelay: 400,
    stepDelay: 75,
  });

  const {
    disabled = false,
    label = '',
    min = 0,
    max = 100,
    step = 1,
    labelPosition = Position.start,
    iconProps,
    incrementButtonIcon = { iconName: 'ChevronUpSmall' },
    incrementButtonAriaLabel,
    decrementButtonIcon = { iconName: 'ChevronDownSmall' },
    decrementButtonAriaLabel,
    ariaLabel,
    ariaDescribedBy,
    upArrowButtonStyles: customUpArrowButtonStyles,
    downArrowButtonStyles: customDownArrowButtonStyles,
    theme,
    ariaPositionInSet,
    ariaSetSize,
    ariaValueNow,
    ariaValueText,
    keytipProps,
    className,
    inputProps,
    iconButtonProps,
    styles,
  } = props as ISpinButtonProps;

  const classNames = getClassNames(styles, {
    theme: theme!,
    disabled,
    isFocused,
    keyboardSpinDirection,
    labelPosition,
    className,
  });

  const nativeProps = getNativeProps<React.HTMLAttributes<HTMLDivElement>>(props, divProperties, [
    'onBlur',
    'onFocus',
    'className',
  ]);

  let currentValue: string = props.value !== undefined ? props.value : String(props.min);

  state.lastValidValue = value;

  if (props.defaultValue) {
    currentValue = String(Math.max(props.min as number, Math.min(props.max as number, Number(props.defaultValue))));
  }

  React.useEffect(() => {
    if (props.value !== undefined) {
      state.lastValidValue = props.value;
      setValue(currentValue);
    }
    state.precision = callCalculatePrecision(props as ISpinButtonProps);
  }, [props.value]);

  // Validate function to use if one is not passed in
  const defaultOnValidate = (valueProp: string) => {
    if (valueProp === null || valueProp.trim().length === 0 || isNaN(Number(valueProp))) {
      return state.lastValidValue;
    }
    const newValue = Math.min(props.max as number, Math.max(props.min as number, Number(valueProp)));
    return String(newValue);
  };

  // Increment function to use if one is not passed in
  const defaultOnIncrement = (valueProp: string): string | void => {
    let newValue: number = Math.min(Number(valueProp) + Number(step), max);
    newValue = precisionRound(newValue, state.precision);
    return String(newValue);
  };

  // Increment function to use if one is not passed in
  const defaultOnDecrement = (valueProp: string): string | void => {
    let newValue: number = Math.max(Number(valueProp) - Number(step), min);
    newValue = precisionRound(newValue, state.precision);
    return String(newValue);
  };

  const validate = (ev: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>): void => {
    if (value !== undefined && state.valueToValidate !== undefined && state.valueToValidate !== state.lastValidValue) {
      const newValue = onValidate!(state.valueToValidate, ev);
      if (newValue) {
        state.lastValidValue = newValue;
        state.valueToValidate = undefined;
        setValue(newValue);
      }
    }
  };

  const onIncrement = (valueProp: string): string | void => {
    if (props.onIncrement) {
      return props.onIncrement(valueProp);
    } else {
      return defaultOnIncrement(valueProp);
    }
  };

  const onDecrement = (valueProp: string): string | void => {
    if (props.onDecrement) {
      return props.onDecrement(valueProp);
    } else {
      return defaultOnDecrement(valueProp);
    }
  };

  const onValidate = (valueProp: string, ev?: React.SyntheticEvent<HTMLElement>): string | void => {
    if (props.onValidate) {
      return props.onValidate(valueProp, ev);
    } else {
      return defaultOnValidate(valueProp);
    }
  };

  const onChange = (): void => {
    /**
     * A noop input change handler. Using onInput instead of onChange was meant to address an issue
     * which apparently has been resolved in React 16 (https://github.com/facebook/react/issues/7027).
     * The no-op onChange handler was still needed because React gives console errors if an input
     * doesn't have onChange.
     *
     * TODO (Fabric 8?) - switch to just calling onChange (this is a breaking change for any tests,
     * ours or 3rd-party, which simulate entering text in a SpinButton)
     */
  };

  //  The method is needed to ensure we are updating the actual input value.
  //  without this our value will never change (and validation will not have the correct number)
  //  @param event - the event that was fired
  const onInputChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const element: HTMLInputElement = event.target as HTMLInputElement;
    const elementValue: string = element.value;
    state.valueToValidate = elementValue;
    setValue(elementValue);
  };

  const onFocus = (ev: React.FocusEvent<HTMLInputElement>): void => {
    // We can't set focus on a non-existing element
    if (!input.current) {
      return;
    }
    if (state.spinningByMouse || keyboardSpinDirection !== KeyboardSpinDirection.notSpinning) {
      stop();
    }
    input.current.select();
    toggleIsFocused();
    if (props.onFocus) {
      props.onFocus(ev);
    }
  };

  const onBlur = (ev: React.FocusEvent<HTMLInputElement>): void => {
    validate(ev);
    toggleIsFocused();
    if (props.onBlur) {
      props.onBlur(ev);
    }
  };

  // Update the value with the given stepFunction
  // @param shouldSpin - should we fire off another updateValue when we are done here? This should be true
  // when spinning in response to a mouseDown
  // @param stepFunction - function to use to step by
  const updateValue = (
    shouldSpin: boolean,
    stepDelay: number,
    stepFunction: (value: string) => string | void,
  ): void => {
    const safeSetTimeout = useSetTimeout();
    const newValue: string | void = stepFunction(value || '');
    if (newValue !== undefined) {
      state.lastValidValue = newValue;
      setValue(newValue);
    }

    if (state.spinningByMouse !== shouldSpin) {
      state.spinningByMouse = shouldSpin;
    }

    if (shouldSpin) {
      safeSetTimeout(() => {
        updateValue(shouldSpin, stepDelay, stepFunction);
      }, stepDelay);
    }
  };

  // Stop spinning (clear any currently pending update and set spinning to false)
  const stop = (): void => {
    if (state.currentStepFunctionHandle >= 0) {
      clearTimeout(state.currentStepFunctionHandle);
      state.currentStepFunctionHandle = -1;
    }
    if (state.spinningByMouse || keyboardSpinDirection !== KeyboardSpinDirection.notSpinning) {
      state.spinningByMouse = false;
      setKeyboardSpinDirection(KeyboardSpinDirection.notSpinning);
    }
  };

  //  Handle keydown on the text field. We need to update
  //  the value when up or down arrow are depressed
  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>): void => {
    // eat the up and down arrow keys to keep focus in the spinButton
    // (especially when a spinButton is inside of a FocusZone)
    if (ev.which === KeyCodes.up || ev.which === KeyCodes.down || ev.which === KeyCodes.enter) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    if (props.disabled) {
      stop();
      return;
    }

    let spinDirection = KeyboardSpinDirection.notSpinning;

    switch (ev.which) {
      case KeyCodes.up:
        spinDirection = KeyboardSpinDirection.up;
        updateValue(false /* shouldSpin */, state.initialStepDelay, onIncrement!);
        break;
      case KeyCodes.down:
        spinDirection = KeyboardSpinDirection.down;
        updateValue(false /* shouldSpin */, state.initialStepDelay, onDecrement!);
        break;
      case KeyCodes.enter:
        validate(ev);
        break;
      case KeyCodes.escape:
        if (value !== state.lastValidValue) {
          setValue(state.lastValidValue);
        }
        break;
      default:
        break;
    }
    // style the increment/decrement button to look active
    // when the corresponding up/down arrow keys trigger a step
    if (keyboardSpinDirection !== spinDirection) {
      setKeyboardSpinDirection(spinDirection);
    }
  };

  // Make sure that we have stopped spinning on keyUp
  // if the up or down arrow fired this event
  // @param event - keyboard event
  const handleKeyUp = (event: React.KeyboardEvent<HTMLElement>): void => {
    if (props.disabled || event.which === KeyCodes.up || event.which === KeyCodes.down) {
      stop();
      return;
    }
  };

  const onIncrementMouseDown = (): void => {
    updateValue(true /* shouldSpin */, state.initialStepDelay, onIncrement!);
  };

  const onDecrementMouseDown = (): void => {
    updateValue(true /* shouldSpin */, state.initialStepDelay, onDecrement!);
  };

  useComponentRef(props, input, value);

  return (
    <div className={classNames.root}>
      {labelPosition !== Position.bottom && (iconProps || label) && (
        <div className={classNames.labelWrapper}>
          {iconProps && <Icon {...iconProps} className={classNames.icon} aria-hidden="true" />}
          {label && (
            <Label id={state.labelId} htmlFor={state.inputId} className={classNames.label} disabled={disabled}>
              {label}
            </Label>
          )}
        </div>
      )}
      <KeytipData keytipProps={keytipProps} disabled={disabled}>
        {// tslint:disable-next-line:no-any
        (keytipAttributes: any): JSX.Element => (
          <div
            {...nativeProps}
            className={classNames.spinButtonWrapper}
            aria-label={ariaLabel && ariaLabel}
            aria-posinset={ariaPositionInSet}
            aria-setsize={ariaSetSize}
            data-ktp-target={keytipAttributes['data-ktp-target']}
          >
            <input
              value={value}
              id={state.inputId}
              onChange={onChange}
              onInput={onInputChange}
              className={classNames.input}
              type="text"
              autoComplete="off"
              role="spinbutton"
              aria-labelledby={label && state.labelId}
              aria-valuenow={
                !isNaN(Number(ariaValueNow)) ? ariaValueNow : !isNaN(Number(value)) ? Number(value) : undefined
              }
              aria-valuetext={ariaValueText ? ariaValueText : isNaN(Number(value)) ? value : undefined}
              aria-valuemin={min}
              aria-valuemax={max}
              aria-describedby={mergeAriaAttributeValues(ariaDescribedBy, keytipAttributes['aria-describedby'])}
              onBlur={onBlur}
              ref={input}
              onFocus={onFocus}
              onKeyDown={handleKeyDown}
              onKeyUp={handleKeyUp}
              disabled={disabled}
              aria-disabled={disabled}
              data-lpignore
              data-ktp-execute-target={keytipAttributes['data-ktp-execute-target']}
              {...inputProps}
            />
            <span className={classNames.arrowButtonsContainer}>
              <IconButton
                styles={getArrowButtonStyles(theme!, true, customUpArrowButtonStyles)}
                className={'ms-UpButton'}
                checked={keyboardSpinDirection === KeyboardSpinDirection.up}
                disabled={disabled}
                iconProps={incrementButtonIcon}
                onMouseDown={onIncrementMouseDown}
                onMouseLeave={stop}
                onMouseUp={stop}
                tabIndex={-1}
                ariaLabel={incrementButtonAriaLabel}
                data-is-focusable={false}
                {...iconButtonProps}
              />
              <IconButton
                styles={getArrowButtonStyles(theme!, false, customDownArrowButtonStyles)}
                className={'ms-DownButton'}
                checked={keyboardSpinDirection === KeyboardSpinDirection.down}
                disabled={disabled}
                iconProps={decrementButtonIcon}
                onMouseDown={onDecrementMouseDown}
                onMouseLeave={stop}
                onMouseUp={stop}
                tabIndex={-1}
                ariaLabel={decrementButtonAriaLabel}
                data-is-focusable={false}
                {...iconButtonProps}
              />
            </span>
          </div>
        )}
      </KeytipData>
      {labelPosition === Position.bottom && (iconProps || label) && (
        <div className={classNames.labelWrapper}>
          {iconProps && <Icon iconName={iconProps.iconName} className={classNames.icon} aria-hidden="true" />}
          {label && (
            <Label id={state.labelId} htmlFor={state.inputId} className={classNames.label} disabled={disabled}>
              {label}
            </Label>
          )}
        </div>
      )}
    </div>
  );
};
