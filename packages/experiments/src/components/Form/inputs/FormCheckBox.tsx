import * as React from 'react';

// Components
import { Checkbox, ICheckboxProps } from 'office-ui-fabric-react/lib/Checkbox';
import { FormBaseInput, IFormBaseInputProps, IFormBaseInputState } from '../FormBaseInput';
import { IFormContext } from '../Form';

// Utilities
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

export { ICheckboxProps };

/**
 * Any additional props for the Checkbox input. Currently none
 */
export interface IFormCheckBoxProps extends IFormBaseInputProps<boolean> {
  checkboxProps?: ICheckboxProps;
}

/**
 * Any additional state for the Checkbox input. Currently none
 */
export interface IFormCheckBoxState extends IFormBaseInputState<boolean> {

}

/**
 * Checkbox input for the Form. Displays a boolean value as a checkbox
 */
export class FormCheckBox extends FormBaseInput<boolean, IFormCheckBoxProps, IFormCheckBoxState> {

  constructor(props: IFormCheckBoxProps, context: IFormContext) {
    super(props, context);
    this.state = {
      isValid: true,
      currentValue: this.props.value || false,
      currentError: undefined
    };

    this._validateCheckboxProps(props.checkboxProps);
  }

  /**
   * Render a checkbox
   */
  public render(): JSX.Element {
    return (
      <Checkbox
        {...this.props.checkboxProps}
        key={ this.props.inputKey }
        onChange={ this._onChange }
        checked={ this.state.currentValue }
      />
    );
  }

  @autobind
  private _onChange(event: React.FormEvent<HTMLElement>, isChecked: boolean): void {
    this.setValue(isChecked);
  }

  private _validateCheckboxProps(props?: ICheckboxProps): void {
    if (props) {
      if (props.checked !== null && props.checked !== undefined) {
        console.warn(`FormCheckBox: 'checked' prop was specified and will be ignored`);
      }

      if (props.onChange) {
        console.warn(`FormCheckBox: 'onChange' prop was specified and will be ignored`);
      }
    }
  }
}
