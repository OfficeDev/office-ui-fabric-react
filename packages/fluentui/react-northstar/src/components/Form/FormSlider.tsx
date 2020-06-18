import { compose } from '@fluentui/react-bindings';
import { commonPropTypes } from '../../utils';
import _FormFieldBase, { FormFieldBaseProps } from './utils/formFieldCustom';
import Slider, { SliderProps } from '../Slider/Slider';

interface FormSliderOwnProps extends SliderProps {}
export type SelectedFormFieldCustomProps = Omit<
  FormFieldBaseProps,
  'control' | 'styles' | 'accessibility' | 'design' | 'variables'
>;
export interface FormSliderProps extends SelectedFormFieldCustomProps, FormSliderOwnProps {}
export type FormSliderStylesProps = never;
export const FormSliderClassName = 'ui-form-slider';

const FormSlider = compose<'div', FormSliderProps, FormSliderStylesProps, SelectedFormFieldCustomProps, {}>(
  _FormFieldBase,
  {
    className: FormSliderClassName,
    displayName: 'FormSlider',
    overrideStyles: true,
    shorthandConfig: {},
    slotProps: () => ({
      control: {
        as: Slider,
      },
    }),
  },
);

FormSlider.propTypes = {
  ...commonPropTypes.createCommon({
    content: 'shorthand',
  }),
};

export default FormSlider;
