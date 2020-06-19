import { compose } from '@fluentui/react-bindings';
import { commonPropTypes } from '../../utils';
import _FormFieldBase, { FormFieldBaseProps } from './utils/formFieldBase';
import RadioGroup, { RadioGroupProps } from '../RadioGroup/RadioGroup';

interface FormRadioGroupOwnProps extends RadioGroupProps {}
type SelectedFormFieldCustomProps = Omit<
  FormFieldBaseProps,
  'control' | 'styles' | 'accessibility' | 'design' | 'variables'
>;
export interface FormRadioGroupProps extends SelectedFormFieldCustomProps, FormRadioGroupOwnProps {}
export type FormRadioGroupStylesProps = never;

export const FormRadioGroupClassName = 'ui-form-radio_group';

/**
 * An FormRadioGroup renders a RadioGroup wrapped by FormField.
 */
const FormRadioGroup = compose<'div', FormRadioGroupProps, FormRadioGroupStylesProps, SelectedFormFieldCustomProps, {}>(
  _FormFieldBase,
  {
    className: FormRadioGroupClassName,
    displayName: 'FormRadioGroup',
    overrideStyles: true,
    shorthandConfig: {},
    slots: {
      control: RadioGroup,
    },
  },
);

FormRadioGroup.propTypes = {
  ...commonPropTypes.createCommon({
    content: 'shorthand',
  }),
};

export default FormRadioGroup;
