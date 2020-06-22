import { compose } from '@fluentui/react-bindings';
import { commonPropTypes } from '../../utils';
import _FormFieldBase, { FormFieldBaseProps } from './utils/formFieldBase';
import Slider, { SliderProps } from '../Slider/Slider';

interface FormSliderOwnProps extends SliderProps {}
type SelectedFormFieldCustomProps = Omit<
  FormFieldBaseProps,
  'control' | 'styles' | 'accessibility' | 'design' | 'variables'
>;
export interface FormSliderProps extends SelectedFormFieldCustomProps, FormSliderOwnProps {}
export type FormSliderStylesProps = never;
export const formSliderClassName = 'ui-form__slider';

/**
 * An FormSlider renders a Slider wrapped by FormField.
 */
const FormSlider = compose<'div', FormSliderProps, FormSliderStylesProps, SelectedFormFieldCustomProps, {}>(
  _FormFieldBase,
  {
    className: formSliderClassName,
    displayName: 'FormSlider',
    overrideStyles: true,
    slots: {
      control: Slider,
    },
  },
);

FormSlider.propTypes = {
  ...commonPropTypes.createCommon({
    as: false,
    accessibility: false,
    children: false,
    className: false,
    content: false,
  }),
};

export default FormSlider;
