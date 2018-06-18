import * as React from 'react';
import { ITextField, ITextFieldProps } from './TextField.types';
import { Label } from '../../Label';
import { Icon } from '../../Icon';
import {
  DelayedRender,
  BaseComponent,
  getId,
  css,
  customizable,
  getNativeProps,
  inputProperties,
  textAreaProperties,
  createRef,
  classNamesFunction
} from '../../Utilities';
import { ITextFieldStyleProps, ITextFieldStyles } from './TextField.types';
import { getLabelStyles } from './TextField.styles';

const getClassNames = classNamesFunction<ITextFieldStyleProps, ITextFieldStyles>();

export interface ITextFieldState {
  value?: string;

  /** Is true when the control has focus. */
  isFocused: boolean;

  /**
   * The validation error message.
   *
   * - If there is no validation error or we have not validated the input value, errorMessage is an empty string.
   * - If we have done the validation and there is validation error, errorMessage is the validation error message.
   */
  errorMessage: string;
}

@customizable('TextField', ['theme', 'styles'])
export class TextFieldBase extends BaseComponent<ITextFieldProps, ITextFieldState> implements ITextField {
  public static defaultProps: ITextFieldProps = {
    multiline: false,
    resizable: true,
    autoAdjustHeight: false,
    underlined: false,
    borderless: false,
    onChanged: () => {
      /* noop */
    },
    onBeforeChange: () => {
      /* noop */
    },
    onNotifyValidationResult: () => {
      /* noop */
    },
    onGetErrorMessage: () => undefined,
    deferredValidationTime: 200,
    errorMessage: '',
    validateOnFocusIn: false,
    validateOnFocusOut: false,
    validateOnLoad: true
  };

  private _id: string;
  private _descriptionId: string;
  private _delayedValidate: (value: string | undefined) => void;
  private _isMounted: boolean;
  private _lastValidation: number;
  private _latestValue: string | undefined;
  private _latestValidateValue: string | undefined;
  private _isDescriptionAvailable: boolean;
  private _textElement = createRef<HTMLTextAreaElement | HTMLInputElement | null>();
  private _classNames: { [key in keyof ITextFieldStyles]: string };

  public constructor(props: ITextFieldProps) {
    super(props);

    this._warnDeprecations({
      iconClass: 'iconProps',
      addonString: 'prefix',
      onRenderAddon: 'onRenderPrefix'
    });

    this._warnMutuallyExclusive({
      value: 'defaultValue'
    });

    this._id = getId('TextField');
    this._descriptionId = getId('TextFieldDescription');

    if (props.value !== undefined) {
      this._latestValue = props.value;
    } else if (props.defaultValue !== undefined) {
      this._latestValue = props.defaultValue;
    } else {
      this._latestValue = '';
    }

    this.state = {
      value: this._latestValue,
      isFocused: false,
      errorMessage: ''
    };

    this._onInputChange = this._onInputChange.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);

    this._delayedValidate = this._async.debounce(this._validate, this.props.deferredValidationTime);
    this._lastValidation = 0;
    this._isDescriptionAvailable = false;
  }

  /**
   * Gets the current value of the text field.
   */
  public get value(): string | undefined {
    return this.state.value;
  }

  public componentDidMount(): void {
    this._isMounted = true;
    this._adjustInputHeight();

    if (this.props.validateOnLoad) {
      this._validate(this.state.value);
    }
  }

  public componentWillReceiveProps(newProps: ITextFieldProps): void {
    const { onBeforeChange } = this.props;

    if (newProps.value !== undefined && newProps.value !== this.state.value) {
      if (onBeforeChange) {
        onBeforeChange(newProps.value);
      }

      this._latestValue = newProps.value;
      this.setState(
        {
          value: newProps.value,
          errorMessage: ''
        } as ITextFieldState,
        () => {
          this._adjustInputHeight();
        }
      );

      this._delayedValidate(newProps.value);
    }
  }

  public componentWillUnmount(): void {
    this._isMounted = false;
  }

  public render(): JSX.Element {
    const {
      borderless,
      className,
      description,
      disabled,
      iconClass,
      iconProps,
      multiline,
      required,
      underlined,
      addonString, // @deprecated
      prefix,
      resizable,
      suffix,
      theme,
      styles,
      onRenderAddon = this._onRenderAddon, // @deprecated
      onRenderPrefix = this._onRenderPrefix,
      onRenderSuffix = this._onRenderSuffix,
      onRenderLabel = this._onRenderLabel,
      onRenderDescription = this._onRenderDescription
    } = this.props;
    const { isFocused } = this.state;
    const errorMessage = this._errorMessage;

    this._classNames = getClassNames(styles!, {
      theme: theme!,
      className,
      disabled,
      focused: isFocused,
      required,
      multiline,
      hasLabel: !!this.props.label,
      hasErrorMessage: !!errorMessage,
      borderless,
      resizable,
      hasIcon: !!iconProps,
      underlined
    });

    // If a custom description render function is supplied then treat description as always available.
    // Otherwise defer to the presence of description or error message text.
    this._isDescriptionAvailable = Boolean(this.props.onRenderDescription || description || errorMessage);

    return (
      <div className={this._classNames.root}>
        <div className={this._classNames.wrapper}>
          {onRenderLabel(this.props, this._onRenderLabel)}
          <div className={this._classNames.fieldGroup}>
            {(addonString !== undefined || this.props.onRenderAddon) && (
              <div className={this._classNames.prefix}>{onRenderAddon(this.props, this._onRenderAddon)}</div>
            )}
            {(prefix !== undefined || this.props.onRenderPrefix) && (
              <div className={this._classNames.prefix}>{onRenderPrefix(this.props, this._onRenderPrefix)}</div>
            )}
            {multiline ? this._renderTextArea() : this._renderInput()}
            {(iconClass || iconProps) && <Icon className={css(iconClass, this._classNames.icon)} {...iconProps} />}
            {(suffix !== undefined || this.props.onRenderSuffix) && (
              <div className={this._classNames.suffix}>{onRenderSuffix(this.props, this._onRenderSuffix)}</div>
            )}
          </div>
        </div>
        {this._isDescriptionAvailable && (
          <span id={this._descriptionId}>
            {onRenderDescription(this.props, this._onRenderDescription)}
            {errorMessage && (
              <div aria-live="assertive">
                <DelayedRender>
                  <p className={this._classNames.errorMessage}>
                    <span data-automation-id="error-message">{errorMessage}</span>
                  </p>
                </DelayedRender>
              </div>
            )}
          </span>
        )}
      </div>
    );
  }

  /**
   * Sets focus on the text field
   */
  public focus() {
    if (this._textElement.current) {
      this._textElement.current.focus();
    }
  }

  /**
   * Selects the text field
   */
  public select() {
    if (this._textElement.current) {
      this._textElement.current.select();
    }
  }

  /**
   * Sets the selection start of the text field to a specified value
   */
  public setSelectionStart(value: number): void {
    if (this._textElement.current) {
      this._textElement.current.selectionStart = value;
    }
  }

  /**
   * Sets the selection end of the text field to a specified value
   */
  public setSelectionEnd(value: number): void {
    if (this._textElement.current) {
      this._textElement.current.selectionEnd = value;
    }
  }

  /**
   * Gets the selection start of the text field
   */
  public get selectionStart(): number | null {
    return this._textElement.current ? this._textElement.current.selectionStart : -1;
  }

  /**
   * Gets the selection end of the text field
   */
  public get selectionEnd(): number | null {
    return this._textElement.current ? this._textElement.current.selectionEnd : -1;
  }

  /**
   * Sets the start and end positions of a selection in a text field.
   * @param start Index of the start of the selection.
   * @param end Index of the end of the selection.
   */
  public setSelectionRange(start: number, end: number): void {
    if (this._textElement.current) {
      (this._textElement.current as HTMLInputElement).setSelectionRange(start, end);
    }
  }

  private _onFocus(ev: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    if (this.props.onFocus) {
      this.props.onFocus(ev);
    }

    this.setState({ isFocused: true });
    if (this.props.validateOnFocusIn) {
      this._validate(this.state.value);
    }
  }

  private _onBlur(ev: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    if (this.props.onBlur) {
      this.props.onBlur(ev);
    }

    this.setState({ isFocused: false });
    if (this.props.validateOnFocusOut) {
      this._validate(this.state.value);
    }
  }

  private _onRenderLabel = (props: ITextFieldProps): JSX.Element | null => {
    if (props.label) {
      // TODO: how will consumer labelStyles be defined?
      // TODO: right way to do this? how to mix in consumer label style prop when defined as object and function?
      // TODO: use styled function to mixin consumer labelStyles with TextField's getLabelStyles?
      // return null;
      // return <Label htmlFor={this._id}>{props.label}</Label>;
      // return <Label htmlFor={this._id} styles={this._classNames.label}>{props.label}</Label>;
      return (
        <Label htmlFor={this._id} styles={getLabelStyles(props)}>
          {props.label}
        </Label>
      );
    }
    return null;
  };

  // TODO: is this needed?
  // private _onRenderLabel(props: ITextFieldProps): JSX.Element | null {
  //   const {
  //     theme,
  //     underlined,
  //     getLabelStyles,
  //     label,
  //     componentId,
  //     required,
  //     disabled
  //   } = props;

  //   const labelProps: ILabelProps = {
  //     required,
  //     htmlFor: componentId,
  //     getStyles: getLabelStyles ? () => getLabelStyles({ theme: theme!, underlined, disabled }) : undefined
  //   };

  //   if (label) {
  //     return (
  //       <Label { ...labelProps } >
  //         { label }
  //       </Label>);
  //   }
  //   return null;
  // }

  private _onRenderDescription = (props: ITextFieldProps): JSX.Element | null => {
    if (props.description) {
      return <span className={this._classNames.description}>{props.description}</span>;
    }
    return null;
  };

  // @deprecated
  private _onRenderAddon(props: ITextFieldProps): JSX.Element {
    const { addonString } = props;
    return <span style={{ paddingBottom: '1px' }}>{addonString}</span>;
  }

  private _onRenderPrefix(props: ITextFieldProps): JSX.Element {
    const { prefix } = props;
    return <span style={{ paddingBottom: '1px' }}>{prefix}</span>;
  }

  private _onRenderSuffix(props: ITextFieldProps): JSX.Element {
    const { suffix } = props;
    return <span style={{ paddingBottom: '1px' }}>{suffix}</span>;
  }

  private get _errorMessage(): string | undefined {
    let { errorMessage } = this.state;
    if (!errorMessage) {
      errorMessage = this.props.errorMessage;
    }

    return errorMessage;
  }

  private _renderTextArea(): React.ReactElement<React.HTMLAttributes<HTMLAreaElement>> {
    const textAreaProps = getNativeProps(this.props, textAreaProperties, ['defaultValue']);

    return (
      <textarea
        id={this._id}
        {...textAreaProps}
        ref={this._textElement}
        value={this.state.value}
        onInput={this._onInputChange}
        onChange={this._onInputChange}
        className={this._classNames.field}
        aria-describedby={this._isDescriptionAvailable ? this._descriptionId : this.props['aria-describedby']}
        aria-invalid={!!this.state.errorMessage}
        aria-label={this.props.ariaLabel}
        onFocus={this._onFocus}
        onBlur={this._onBlur}
      />
    );
  }

  private _renderInput(): React.ReactElement<React.HTMLAttributes<HTMLInputElement>> {
    const inputProps = getNativeProps<React.HTMLAttributes<HTMLInputElement>>(this.props, inputProperties, [
      'defaultValue'
    ]);

    return (
      <input
        type={'text'}
        id={this._id}
        {...inputProps}
        ref={this._textElement}
        value={this.state.value}
        onInput={this._onInputChange}
        onChange={this._onInputChange}
        className={this._classNames.field}
        aria-label={this.props.ariaLabel}
        aria-describedby={this._isDescriptionAvailable ? this._descriptionId : this.props['aria-describedby']}
        aria-invalid={!!this.state.errorMessage}
        onFocus={this._onFocus}
        onBlur={this._onBlur}
      />
    );
  }

  private _onInputChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;
    const value: string = element.value;

    // Avoid doing unnecessary work when the value has not changed.
    if (value === this._latestValue) {
      return;
    }
    this._latestValue = value;

    this.setState(
      {
        value: value
      } as ITextFieldState,
      () => {
        this._adjustInputHeight();

        if (this.props.onChanged) {
          this.props.onChanged(value);
        }
      }
    );

    const { validateOnFocusIn, validateOnFocusOut } = this.props;
    if (!(validateOnFocusIn || validateOnFocusOut)) {
      this._delayedValidate(value);
    }

    const onBeforeChange = this.props.onBeforeChange as (newValue: any) => void;
    onBeforeChange(value);
  }

  private _validate(value: string | undefined): void {
    const { validateOnFocusIn, validateOnFocusOut } = this.props;

    // In case of _validate called multi-times during executing validate logic with promise return.
    if (this._latestValidateValue === value && !(validateOnFocusIn || validateOnFocusOut)) {
      return;
    }

    this._latestValidateValue = value;
    const onGetErrorMessage = this.props.onGetErrorMessage as (
      value: string
    ) => string | PromiseLike<string> | undefined;
    const result = onGetErrorMessage(value || '');

    if (result !== undefined) {
      if (typeof result === 'string') {
        this.setState({
          errorMessage: result
        } as ITextFieldState);
        this._notifyAfterValidate(value, result);
      } else {
        const currentValidation: number = ++this._lastValidation;

        result.then((errorMessage: string) => {
          if (this._isMounted && currentValidation === this._lastValidation) {
            this.setState({ errorMessage } as ITextFieldState);
          }
          this._notifyAfterValidate(value, errorMessage);
        });
      }
    } else {
      this._notifyAfterValidate(value, '');
    }
  }

  private _notifyAfterValidate(value: string | undefined, errorMessage: string): void {
    if (this._isMounted && value === this.state.value && this.props.onNotifyValidationResult) {
      this.props.onNotifyValidationResult(errorMessage, value);
    }
  }

  private _adjustInputHeight(): void {
    if (this._textElement.current && this.props.autoAdjustHeight && this.props.multiline) {
      const textField = this._textElement.current;
      textField.style.height = '';
      const scrollHeight = textField.scrollHeight + 2; // +2 to avoid vertical scroll bars
      textField.style.height = scrollHeight + 'px';
    }
  }
}
