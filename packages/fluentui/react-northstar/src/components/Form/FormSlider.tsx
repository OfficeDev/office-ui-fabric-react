import { compose, ComponentWithAs, ShorthandConfig } from '@fluentui/react-bindings';
import { commonPropTypes } from '../../utils';
import * as customPropTypes from '@fluentui/react-proptypes';
import FormFieldCustom, { FormFieldCustomProps, FormFieldCustomStylesProps } from './FormFieldCustom';
import Slider, { SliderProps } from '../Slider/Slider';

interface FormSliderOwnProps extends Omit<SliderProps, 'accessibility'> {}

export interface FormSliderProps extends FormFieldCustomProps, FormSliderOwnProps {}
export type FormSliderStylesProps = never;

export const FormSliderClassName = 'ui-form-radio_group';

const FormSlider = compose<
  'div',
  FormSliderProps,
  FormSliderStylesProps,
  FormFieldCustomProps,
  FormFieldCustomStylesProps
>(FormFieldCustom, {
  className: FormSliderClassName,
  displayName: 'FormSlider',
  overrideStyles: true,
  shorthandConfig: {},
  slotProps: _ => ({
    control: {
      as: Slider,
    },
  }),
}) as ComponentWithAs<'div', FormSliderProps> & { shorthandConfig: ShorthandConfig<FormSliderProps> };

FormSlider.defaultProps = {};

FormSlider.propTypes = {
  ...commonPropTypes.createCommon({
    content: 'shorthand',
  }),
  control: customPropTypes.shorthandAllowingChildren,
};

export default FormSlider;
