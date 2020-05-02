import * as React from 'react';
import {
  KeyCodes,
  css,
  getId,
  getRTL,
  getRTLSafeKeyCode,
  warnMutuallyExclusive,
  initializeComponentRef,
  Async,
  on,
  FocusRects,
} from '../../Utilities';
import { ISliderProps, ISlider, ISliderStyleProps, ISliderStyles } from './Slider.types';
import { classNamesFunction, getNativeProps, divProperties } from '../../Utilities';
import { Label } from '../../Label';
import { useId, useControllableValue, useMergedRefs } from '@uifabric/react-hooks';

export interface ISliderState {
  value?: number;
  renderedValue?: number;
}

const getClassNames = classNamesFunction<ISliderStyleProps, ISliderStyles>();
const COMPONENT_NAME = 'SliderBase';
export const ONKEYDOWN_TIMEOUT_DURATION = 1000;

export const SliderBase: React.FunctionComponent = (props: ISliderProps) => {
  const initialValue =
    props.value !== undefined ? props.value : props.defaultValue !== undefined ? props.defaultValue : props.min;
  const [value, setValue] = React.useState(initialValue);
  const [renderedValue, setRenderedValue] = React.useState(undefined);
  let disposables: (() => void)[] = [];
  const sliderLine = React.useRef<HTMLDivElement>(null);
  const thumb = React.useRef<HTMLSpanElement>(null);
  const onKeyDownTimer = -1;
  const id: string = useId('Slider');
  const {
    step = 1,
    ariaLabel,
    className,
    disabled = false,
    label,
    max = 0,
    min = 10,
    showValue = true,
    buttonProps = {},
    vertical = false,
    valueFormat,
    styles,
    theme,
    originFromZero = false,
  } = props;
  const thumbOffsetPercent: number = min === max ? 0 : ((renderedValue! - min!) / (max! - min!)) * 100;
  const zeroOffsetPercent: number = min! >= 0 ? 0 : (-min! / (max! - min!)) * 100;
  const lengthString = vertical ? 'height' : 'width';
  const classNames = getClassNames(styles, {
    className,
    disabled,
    vertical,
    showTransitions: renderedValue === value,
    showValue,
    theme: theme!,
  });
  const divButtonProps = buttonProps
    ? getNativeProps<React.HTMLAttributes<HTMLDivElement>>(buttonProps, divProperties)
    : undefined;
  warnMutuallyExclusive(COMPONENT_NAME, props, {
    value: 'defaultValue',
  });

  const getAriaValueText = (valueProp: number | undefined): string | undefined => {
    const { ariaValueText } = props;
    if (valueProp !== undefined) {
      return ariaValueText ? ariaValueText(valueProp) : valueProp.toString();
    }
    return undefined;
  };

  const getStyleUsingOffsetPercent = (verticalProp: boolean | undefined, thumbOffsetPercentProp: number): any => {
    const direction: string = verticalProp ? 'bottom' : getRTL(props.theme) ? 'right' : 'left';
    return {
      [direction]: thumbOffsetPercentProp + '%',
    };
  };

  const onMouseDownOrTouchStart = (event: MouseEvent | TouchEvent): void => {
    if (event.type === 'mousedown') {
      disposables.push(
        on(window, 'mousemove', onMouseMoveOrTouchMove, true),
        on(window, 'mouseup', onMouseUpOrTouchEnd, true),
      );
    } else if (event.type === 'touchstart') {
      disposables.push(
        on(window, 'touchmove', onMouseMoveOrTouchMove, true),
        on(window, 'touchend', onMouseUpOrTouchEnd, true),
      );
    }
    onMouseMoveOrTouchMove(event, true);
  };

  const onMouseMoveOrTouchMove = (event: MouseEvent | TouchEvent, suppressEventCancelation?: boolean): void => {
    if (!sliderLine.current) {
      return;
    }
    const steps: number = (max! - min!) / step!;
    const sliderPositionRect: ClientRect = sliderLine.current.getBoundingClientRect();
    const sliderLength: number = !props.vertical ? sliderPositionRect.width : sliderPositionRect.height;
    const stepLength: number = sliderLength / steps;
    let currentSteps: number | undefined;
    let distance: number | undefined;

    if (!props.vertical) {
      const left: number | undefined = getPosition(event, props.vertical);
      distance = getRTL(props.theme) ? sliderPositionRect.right - left! : left! - sliderPositionRect.left;
      currentSteps = distance / stepLength;
    } else {
      const bottom: number | undefined = getPosition(event, props.vertical);
      distance = sliderPositionRect.bottom - bottom!;
      currentSteps = distance / stepLength;
    }
    let currentValue: number | undefined;
    let currentRenderedValue: number | undefined;

    // The value shouldn't be bigger than max or be smaller than min.
    if (currentSteps! > Math.floor(steps)) {
      currentRenderedValue = currentValue = max as number;
    } else if (currentSteps! < 0) {
      currentRenderedValue = currentValue = min as number;
    } else {
      currentRenderedValue = min! + step! * currentSteps!;
      currentValue = min! + step! * Math.round(currentSteps!);
    }
    updateValue(currentValue, currentRenderedValue);
    if (!suppressEventCancelation) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const getPosition = (event: MouseEvent | TouchEvent, verticalProp: boolean | undefined): number | undefined => {
    let currentPosition: number | undefined;
    switch (event.type) {
      case 'mousedown':
      case 'mousemove':
        currentPosition = !verticalProp ? (event as MouseEvent).clientX : (event as MouseEvent).clientY;
        break;
      case 'touchstart':
      case 'touchmove':
        currentPosition = !verticalProp
          ? (event as TouchEvent).touches[0].clientX
          : (event as TouchEvent).touches[0].clientY;
        break;
    }
    return currentPosition;
  };

  // private _updateValue(valueProp: number, renderedValue: number): void {
  //   const { step, snapToStep } = this.props;
  //   let numDec = 0;
  //   if (isFinite(step!)) {
  //     while (Math.round(step! * Math.pow(10, numDec)) / Math.pow(10, numDec) !== step!) {
  //       numDec++;
  //     }
  //   }

  //   // Make sure value has correct number of decimal places based on number of decimals in step
  //   const roundedValue = parseFloat(valueProp.toFixed(numDec));
  //   const valueChanged = roundedValue !== value;

  //   if (snapToStep) {
  //     renderedValue = roundedValue;
  //   }
  //   setValue(roundedValue)
  //   renderedValue()

  //   this.setState(
  //     {
  //       value: roundedValue,
  //       renderedValue,
  //     },
  //     () => {
  //       if (valueChanged && this.props.onChange) {
  //         this.props.onChange(this.state.value as number);
  //       }
  //     },
  //   );
  // }

  const onMouseUpOrTouchEnd = (event: MouseEvent | TouchEvent): void => {
    // Disable renderedValue override.
    setRenderedValue(undefined);
    if (props.onChanged) {
      props.onChanged(event, value as number);
    }
    disposeListeners();
  };

  const disposeListeners = (): void => {
    disposables.forEach(dispose => dispose());
    disposables = [];
  };

  const onKeyDown = (event: KeyboardEvent): void => {
    let currentValue: number | undefined = value;
    let diff: number | undefined = 0;
    // tslint:disable-next-line:deprecation
    switch (event.which) {
      case getRTLSafeKeyCode(KeyCodes.left, props.theme):
      case KeyCodes.down:
        diff = -(step as number);

        clearOnKeyDownTimer();
        setOnKeyDownTimer(event);
        break;
      case getRTLSafeKeyCode(KeyCodes.right, props.theme):
      case KeyCodes.up:
        diff = step;
        clearOnKeyDownTimer();
        setOnKeyDownTimer(event);
        break;
      case KeyCodes.home:
        currentValue = min;
        break;
      case KeyCodes.end:
        currentValue = max;
        break;
      default:
        return;
    }

    const newValue: number = Math.min(max as number, Math.max(min as number, value! + diff!));
    updateValue(newValue, newValue);
    event.preventDefault();
    event.stopPropagation();
  };

  const clearOnKeyDownTimer = (): void => {
    // this._async.clearTimeout(this._onKeyDownTimer);
  };

  const setOnKeyDownTimer = (event: KeyboardEvent): void => {
    // onKeyDownTimer = async.setTimeout(() => {
    //   if (props.onChanged) {
    //     props.onChanged(event, value as number);
    //   }
    // }, ONKEYDOWN_TIMEOUT_DURATION);
  };
  const onMouseDownProp: {} = disabled ? {} : { onMouseDown: onMouseDownOrTouchStart };
  const onTouchStartProp: {} = disabled ? {} : { onTouchStart: onMouseDownOrTouchStart };
  const onKeyDownProp: {} = disabled ? {} : { onKeyDown: onKeyDown };

  return (
    <div className={classNames.root}>
      {label && (
        <Label className={classNames.titleLabel} {...(ariaLabel ? {} : { htmlFor: id })} disabled={disabled}>
          {label}
        </Label>
      )}
      <div className={classNames.container}>
        <div
          id={id}
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuetext={getAriaValueText(value)}
          aria-label={ariaLabel || label}
          aria-disabled={disabled}
          {...onMouseDownProp}
          {...onTouchStartProp}
          {...onKeyDownProp}
          {...divButtonProps}
          className={css(classNames.slideBox, buttonProps!.className)}
          role="slider"
          tabIndex={disabled ? undefined : 0}
          data-is-focusable={!disabled}
        >
          <div ref={sliderLine} className={classNames.line}>
            {originFromZero && (
              <span
                className={css(classNames.zeroTick)}
                style={getStyleUsingOffsetPercent(vertical, zeroOffsetPercent)}
              />
            )}
            <span
              ref={thumb}
              className={classNames.thumb}
              style={getStyleUsingOffsetPercent(vertical, thumbOffsetPercent)}
            />
            {originFromZero ? (
              <>
                <span
                  className={css(classNames.lineContainer, classNames.inactiveSection)}
                  style={{ [lengthString]: Math.min(thumbOffsetPercent, zeroOffsetPercent) + '%' }}
                />
                <span
                  className={css(classNames.lineContainer, classNames.activeSection)}
                  style={{ [lengthString]: Math.abs(zeroOffsetPercent - thumbOffsetPercent) + '%' }}
                />
                <span
                  className={css(classNames.lineContainer, classNames.inactiveSection)}
                  style={{ [lengthString]: Math.min(100 - thumbOffsetPercent, 100 - zeroOffsetPercent) + '%' }}
                />
              </>
            ) : (
              <>
                <span
                  className={css(classNames.lineContainer, classNames.activeSection)}
                  style={{ [lengthString]: thumbOffsetPercent + '%' }}
                />
                <span
                  className={css(classNames.lineContainer, classNames.inactiveSection)}
                  style={{ [lengthString]: 100 - thumbOffsetPercent + '%' }}
                />
              </>
            )}
          </div>
        </div>
        {showValue && (
          <Label className={classNames.valueLabel} disabled={disabled}>
            {valueFormat ? valueFormat(value!) : value}
          </Label>
        )}
      </div>
      <FocusRects />
    </div>
  ) as React.ReactElement<{}>;
};

export class SliderBase extends React.Component<ISliderProps, ISliderState> implements ISlider {
  public static defaultProps: ISliderProps = {
    step: 1,
    min: 0,
    max: 10,
    showValue: true,
    disabled: false,
    vertical: false,
    buttonProps: {},
    originFromZero: false,
  };

  private _async: Async;
  private _disposables: (() => void)[] = [];
  private _sliderLine = React.createRef<HTMLDivElement>();
  private _thumb = React.createRef<HTMLSpanElement>();
  private _id: string;
  private _onKeyDownTimer = -1;

  constructor(props: ISliderProps) {
    super(props);

    this._async = new Async(this);
    initializeComponentRef(this);

    warnMutuallyExclusive(COMPONENT_NAME, this.props, {
      value: 'defaultValue',
    });

    this._id = getId('Slider');

    const value =
      props.value !== undefined ? props.value : props.defaultValue !== undefined ? props.defaultValue : props.min;

    this.state = {
      value: value,
      renderedValue: undefined,
    };
  }

  public componentWillUnmount() {
    this._async.dispose();
    this._disposeListeners();
  }

  public render(): React.ReactElement<{}> {
    const {
      ariaLabel,
      className,
      disabled,
      label,
      max,
      min,
      showValue,
      buttonProps,
      vertical,
      valueFormat,
      styles,
      theme,
      originFromZero,
    } = this.props;
    const value = this.value;
    const renderedValue = this.renderedValue;
    const thumbOffsetPercent: number = min === max ? 0 : ((renderedValue! - min!) / (max! - min!)) * 100;
    const zeroOffsetPercent: number = min! >= 0 ? 0 : (-min! / (max! - min!)) * 100;
    const lengthString = vertical ? 'height' : 'width';
    const onMouseDownProp: {} = disabled ? {} : { onMouseDown: this._onMouseDownOrTouchStart };
    const onTouchStartProp: {} = disabled ? {} : { onTouchStart: this._onMouseDownOrTouchStart };
    const onKeyDownProp: {} = disabled ? {} : { onKeyDown: this._onKeyDown };
    const classNames = getClassNames(styles, {
      className,
      disabled,
      vertical,
      showTransitions: renderedValue === value,
      showValue,
      theme: theme!,
    });
    const divButtonProps = buttonProps
      ? getNativeProps<React.HTMLAttributes<HTMLDivElement>>(buttonProps, divProperties)
      : undefined;

    return (
      <div className={classNames.root}>
        {label && (
          <Label className={classNames.titleLabel} {...(ariaLabel ? {} : { htmlFor: this._id })} disabled={disabled}>
            {label}
          </Label>
        )}
        <div className={classNames.container}>
          <div
            id={this._id}
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuetext={this._getAriaValueText(value)}
            aria-label={ariaLabel || label}
            aria-disabled={disabled}
            {...onMouseDownProp}
            {...onTouchStartProp}
            {...onKeyDownProp}
            {...divButtonProps}
            className={css(classNames.slideBox, buttonProps!.className)}
            role="slider"
            tabIndex={disabled ? undefined : 0}
            data-is-focusable={!disabled}
          >
            <div ref={this._sliderLine} className={classNames.line}>
              {originFromZero && (
                <span
                  className={css(classNames.zeroTick)}
                  style={this._getStyleUsingOffsetPercent(vertical, zeroOffsetPercent)}
                />
              )}
              <span
                ref={this._thumb}
                className={classNames.thumb}
                style={this._getStyleUsingOffsetPercent(vertical, thumbOffsetPercent)}
              />
              {originFromZero ? (
                <>
                  <span
                    className={css(classNames.lineContainer, classNames.inactiveSection)}
                    style={{ [lengthString]: Math.min(thumbOffsetPercent, zeroOffsetPercent) + '%' }}
                  />
                  <span
                    className={css(classNames.lineContainer, classNames.activeSection)}
                    style={{ [lengthString]: Math.abs(zeroOffsetPercent - thumbOffsetPercent) + '%' }}
                  />
                  <span
                    className={css(classNames.lineContainer, classNames.inactiveSection)}
                    style={{ [lengthString]: Math.min(100 - thumbOffsetPercent, 100 - zeroOffsetPercent) + '%' }}
                  />
                </>
              ) : (
                <>
                  <span
                    className={css(classNames.lineContainer, classNames.activeSection)}
                    style={{ [lengthString]: thumbOffsetPercent + '%' }}
                  />
                  <span
                    className={css(classNames.lineContainer, classNames.inactiveSection)}
                    style={{ [lengthString]: 100 - thumbOffsetPercent + '%' }}
                  />
                </>
              )}
            </div>
          </div>
          {showValue && (
            <Label className={classNames.valueLabel} disabled={disabled}>
              {valueFormat ? valueFormat(value!) : value}
            </Label>
          )}
        </div>
        <FocusRects />
      </div>
    ) as React.ReactElement<{}>;
  }

  public focus(): void {
    if (this._thumb.current) {
      this._thumb.current.focus();
    }
  }

  public get value(): number | undefined {
    const { value = this.state.value } = this.props;
    if (this.props.min === undefined || this.props.max === undefined || value === undefined) {
      return undefined;
    } else {
      return Math.max(this.props.min, Math.min(this.props.max, value));
    }
  }

  private get renderedValue(): number | undefined {
    // renderedValue is expected to be defined while user is interacting with control, otherwise `undefined`.
    // Fall back to `value`.
    const { renderedValue = this.value } = this.state;
    return renderedValue;
  }

  private _getAriaValueText = (value: number | undefined): string | undefined => {
    const { ariaValueText } = this.props;
    if (value !== undefined) {
      return ariaValueText ? ariaValueText(value) : value.toString();
    }
    return undefined;
  };

  private _getStyleUsingOffsetPercent(vertical: boolean | undefined, thumbOffsetPercent: number): any {
    const direction: string = vertical ? 'bottom' : getRTL(this.props.theme) ? 'right' : 'left';
    return {
      [direction]: thumbOffsetPercent + '%',
    };
  }

  private _onMouseDownOrTouchStart = (event: MouseEvent | TouchEvent): void => {
    if (event.type === 'mousedown') {
      this._disposables.push(
        on(window, 'mousemove', this._onMouseMoveOrTouchMove, true),
        on(window, 'mouseup', this._onMouseUpOrTouchEnd, true),
      );
    } else if (event.type === 'touchstart') {
      this._disposables.push(
        on(window, 'touchmove', this._onMouseMoveOrTouchMove, true),
        on(window, 'touchend', this._onMouseUpOrTouchEnd, true),
      );
    }
    this._onMouseMoveOrTouchMove(event, true);
  };

  private _onMouseMoveOrTouchMove = (event: MouseEvent | TouchEvent, suppressEventCancelation?: boolean): void => {
    if (!this._sliderLine.current) {
      return;
    }

    const { max, min, step } = this.props;
    const steps: number = (max! - min!) / step!;
    const sliderPositionRect: ClientRect = this._sliderLine.current.getBoundingClientRect();
    const sliderLength: number = !this.props.vertical ? sliderPositionRect.width : sliderPositionRect.height;
    const stepLength: number = sliderLength / steps;
    let currentSteps: number | undefined;
    let distance: number | undefined;

    if (!this.props.vertical) {
      const left: number | undefined = this._getPosition(event, this.props.vertical);
      distance = getRTL(this.props.theme) ? sliderPositionRect.right - left! : left! - sliderPositionRect.left;
      currentSteps = distance / stepLength;
    } else {
      const bottom: number | undefined = this._getPosition(event, this.props.vertical);
      distance = sliderPositionRect.bottom - bottom!;
      currentSteps = distance / stepLength;
    }

    let currentValue: number | undefined;
    let renderedValue: number | undefined;

    // The value shouldn't be bigger than max or be smaller than min.
    if (currentSteps! > Math.floor(steps)) {
      renderedValue = currentValue = max as number;
    } else if (currentSteps! < 0) {
      renderedValue = currentValue = min as number;
    } else {
      renderedValue = min! + step! * currentSteps!;
      currentValue = min! + step! * Math.round(currentSteps!);
    }

    this._updateValue(currentValue, renderedValue);

    if (!suppressEventCancelation) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  private _getPosition(event: MouseEvent | TouchEvent, vertical: boolean | undefined): number | undefined {
    let currentPosition: number | undefined;
    switch (event.type) {
      case 'mousedown':
      case 'mousemove':
        currentPosition = !vertical ? (event as MouseEvent).clientX : (event as MouseEvent).clientY;
        break;
      case 'touchstart':
      case 'touchmove':
        currentPosition = !vertical
          ? (event as TouchEvent).touches[0].clientX
          : (event as TouchEvent).touches[0].clientY;
        break;
    }
    return currentPosition;
  }
  private _updateValue(value: number, renderedValue: number): void {
    const { step, snapToStep } = this.props;
    let numDec = 0;
    if (isFinite(step!)) {
      while (Math.round(step! * Math.pow(10, numDec)) / Math.pow(10, numDec) !== step!) {
        numDec++;
      }
    }

    // Make sure value has correct number of decimal places based on number of decimals in step
    const roundedValue = parseFloat(value.toFixed(numDec));
    const valueChanged = roundedValue !== this.state.value;

    if (snapToStep) {
      renderedValue = roundedValue;
    }

    this.setState(
      {
        value: roundedValue,
        renderedValue,
      },
      () => {
        if (valueChanged && this.props.onChange) {
          this.props.onChange(this.state.value as number);
        }
      },
    );
  }

  private _onMouseUpOrTouchEnd = (event: MouseEvent | TouchEvent): void => {
    // Disable renderedValue override.
    this.setState({
      renderedValue: undefined,
    });

    if (this.props.onChanged) {
      this.props.onChanged(event, this.state.value as number);
    }

    this._disposeListeners();
  };

  private _disposeListeners = (): void => {
    this._disposables.forEach(dispose => dispose());
    this._disposables = [];
  };

  private _onKeyDown = (event: KeyboardEvent): void => {
    let value: number | undefined = this.state.value;
    const { max, min, step } = this.props;

    let diff: number | undefined = 0;

    // tslint:disable-next-line:deprecation
    switch (event.which) {
      case getRTLSafeKeyCode(KeyCodes.left, this.props.theme):
      case KeyCodes.down:
        diff = -(step as number);

        this._clearOnKeyDownTimer();
        this._setOnKeyDownTimer(event);

        break;
      case getRTLSafeKeyCode(KeyCodes.right, this.props.theme):
      case KeyCodes.up:
        diff = step;

        this._clearOnKeyDownTimer();
        this._setOnKeyDownTimer(event);

        break;

      case KeyCodes.home:
        value = min;
        break;

      case KeyCodes.end:
        value = max;
        break;

      default:
        return;
    }

    const newValue: number = Math.min(max as number, Math.max(min as number, value! + diff!));

    this._updateValue(newValue, newValue);

    event.preventDefault();
    event.stopPropagation();
  };

  private _clearOnKeyDownTimer = (): void => {
    this._async.clearTimeout(this._onKeyDownTimer);
  };

  private _setOnKeyDownTimer = (event: KeyboardEvent): void => {
    this._onKeyDownTimer = this._async.setTimeout(() => {
      if (this.props.onChanged) {
        this.props.onChanged(event, this.state.value as number);
      }
    }, ONKEYDOWN_TIMEOUT_DURATION);
  };
}
