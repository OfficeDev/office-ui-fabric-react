import * as React from 'react';
import { IRenderFunction } from '../../Utilities';
import { IIconProps } from '../../Icon';

export interface ITextField {
  /** Gets the current value of the input. */
  value: string | undefined;

  /** Sets focus to the input. */
  focus: () => void;

  /** Select the value of the text field. */
  select: () => void;

  /** Sets the selection start of the text field to a specified value. */
  setSelectionStart: (value: number) => void;

  /** Sets the selection end of the text field to a specified value. */
  setSelectionEnd: (value: number) => void;

  /**
   * Sets the start and end positions of a selection in a text field.
   * @param start Index of the start of the selection.
   * @param end Index of the end of the selection.
   */
  setSelectionRange: (start: number, end: number) => void;

  /** Gets the selection start of the text field. Returns -1 if there is no selection. */
  selectionStart: number | null;

  /** Gets the selection end of the text field. Returns -1 if there is no selection. */
  selectionEnd: number | null;
}

/**
 * TextField component props.
 */
export interface ITextFieldProps extends React.AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  /**
   * Optional callback to access the ITextField interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: (component: ITextField | null) => void;

  /**
   * Whether or not the textfield is a multiline textfield.
   * @default false
   */
  multiline?: boolean;

  /**
   * Whether or not the multiline textfield is resizable.
   * @default true
   */
  resizable?: boolean;

  /**
   * Whether or not to auto adjust textField height. Applies only to multiline textfield.
   * @default false
   */
  autoAdjustHeight?: boolean;

  /**
   * Whether or not the textfield is underlined.
   * @default false
   */
  underlined?: boolean;

  /**
   * Whether or not the textfield is borderless.
   * @default false
   */
  borderless?: boolean;

  /**
   * Label for the textfield.
   */
  label?: string;

  /**
   * Optional custom renderer for the label.
   */
  onRenderLabel?: IRenderFunction<ITextFieldProps>;

  /**
   * The textfield input description
   */
  description?: string;

  /**
   * Optional custom renderer for the description.
   */
  onRenderDescription?: IRenderFunction<ITextFieldProps>;

  /**
   * @deprecated
   * Deprecated; use prefix instead.
   */
  addonString?: string;

  /**
   * String for prefix
   */
  prefix?: string;

  /**
   * String for suffix
   */
  suffix?: string;

  /**
   * @deprecated
   * Deprecated; use onRenderPrefix instead.
   */
  onRenderAddon?: IRenderFunction<ITextFieldProps>;

  /**
   * Custom render function for prefix.
   */
  onRenderPrefix?: IRenderFunction<ITextFieldProps>;

  /**
   * Custom render function for suffix.
   */
  onRenderSuffix?: IRenderFunction<ITextFieldProps>;

  /**
   * Optional icon props for an icon.
   */
  iconProps?: IIconProps;

  /**
   * Default value of the textfield, if any. Only provide this if the textfield is an uncontrolled component;
   * otherwise, use the "value" property.
   */
  defaultValue?: string;

  /**
   * Current value of the textfield. Only provide this if the textfield is a controlled component where you
   * are maintaining its current state; otherwise, use the "defaultValue" property.
   */
  value?: string;

  /**
   * Disabled state of the textfield.
   * @default false
   */
  disabled?: boolean;

  /**
   * ReadOnly state of the textfield.
   * @default false
   */
  readOnly?: boolean;

  /**
   * If set, this will display an error message for the text field.
   */
  errorMessage?: string;

  /**
   * Callback for the onChanged event.
   */
  onChanged?: (newValue: any) => void;

  /**
   * Callback for the onBeforeChange event.
   */
  onBeforeChange?: (newValue: any) => void;

  /**
   * Callback for the onNotifyValidationResult event.
   */
  onNotifyValidationResult?: (errorMessage: string, value: string | undefined) => void;

  /**
   * The method is used to get the validation error message and determine whether the input value is valid or not.
   *
   *   When it returns string:
   *   - If valid, it returns empty string.
   *   - If invalid, it returns the error message string and the text field will
   *     show a red border and show an error message below the text field.
   *
   *   When it returns Promise<string>:
   *   - The resolved value is display as error message.
   *   - The rejected, the value is thrown away.
   *
   */
  onGetErrorMessage?: (value: string) => string | PromiseLike<string> | undefined;

  /**
   * Text field will start to validate after users stop typing for `deferredValidationTime` milliseconds.
   * @default 200
   */
  deferredValidationTime?: number;

  /**
   * Optional class name that is added to the container of the component.
   */
  className?: string;

  /**
   * Optional class name that is added specifically to the input/textarea element.
   */
  inputClassName?: string;

  /**
   * Aria Label for textfield, if any.
   */
  ariaLabel?: string;

  /**
   * Run validation only on input focus
   * @default false
   */
  validateOnFocusIn?: boolean;

  /**
   * Run validation only on input focus out
   * @default false
   */
  validateOnFocusOut?: boolean;

  /**
   * Optional flag to disable onload validation
   * @default true
   */
  validateOnLoad?: boolean;

  /**
   * @deprecated
   * Deprecated; use iconProps instead.
   */
  iconClass?: string;

  /**
   * Whether the input field should have autocomplete enabled.
   * This tells the browser to display options based on earlier typed values.
   */
  autoComplete?: 'on' | 'off';

  /**
   * The masking string that defines the mask's behavior.
   * A backslash will escape any character.
   * Special format characters are:
   * '9': [0-9]
   * 'a': [a-zA-Z]
   * '*': [a-zA-Z0-9]
   */
  mask?: string;

  /**
   * The character to show in place of unfilled characters of the mask.
   * @default '_'
   */
  maskChar?: string;

  /**
   * An object defining the format characters and corresponding regexp values.
   * Default format characters: {
   *  '9': /[0-9]/,
   *  'a': /[a-zA-Z]/,
   *  '*': /[a-zA-Z0-9]/
   * }
   */
  maskFormat?: { [key: string]: RegExp };

  /**
   * Deprecated property. Serves no function.
   * @deprecated
   */
  componentId?: string;
}
