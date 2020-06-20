import { compose } from '@fluentui/react-bindings';
import { commonPropTypes } from '../../utils';
import Checkbox, { CheckboxProps } from '../Checkbox/Checkbox';
import _FormFieldBase, { FormFieldBaseProps } from './utils/formFieldBase';
import * as PropTypes from 'prop-types';

interface FormCheckboxOwnProps extends CheckboxProps {}
type SelectedFormFieldCustomProps = Omit<
  FormFieldBaseProps,
  'control' | 'styles' | 'accessibility' | 'design' | 'variables' | 'label'
>;
export interface FormCheckboxProps extends SelectedFormFieldCustomProps, FormCheckboxOwnProps {}
export type FormCheckboxStylesProps = never;

export const formCheckboxClassName = 'ui-form__checkbox';

/**
 * An FormCheckbox renders a Checkbox wrapped by FormField.
 */
const FormCheckbox = compose<'div', FormCheckboxProps, FormCheckboxStylesProps, SelectedFormFieldCustomProps, {}>(
  _FormFieldBase,
  {
    className: formCheckboxClassName,
    displayName: 'FormCheckbox',
    overrideStyles: true,
    handledProps: ['label', 'onChange', 'onClick'],
    slots: {
      label: () => null,
      control: Checkbox,
    },
    slotProps: ({ label, onChange, onClick }) => ({
      control: {
        label,
        onChange,
        onClick,
      },
    }),
  },
);

FormCheckbox.propTypes = {
  ...commonPropTypes.createCommon({
    as: false,
    accessibility: false,
    children: false,
    className: false,
    content: false,
  }),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default FormCheckbox;
