import { compose, ComponentWithAs } from '@fluentui/react-bindings';
import * as customPropTypes from '@fluentui/react-proptypes';

import { commonPropTypes, ShorthandConfig, SizeValue } from '../../utils';
import Box, { BoxProps } from '../Box/Box';
import { ButtonStylesProps } from 'src/components/Button/Button';

interface ButtonContentOwnProps {
  size?: SizeValue;
}

export interface ButtonContentProps extends BoxProps, ButtonContentOwnProps {}
export type ButtonContentStylesProps = Pick<ButtonContentProps, 'size'>;

export const buttonContentClassName = 'ui-button__content';

/**
 * A ButtonContent allows a user to have a dedicated component that can be targeted from the theme.
 */
const ButtonContent = compose<'div', ButtonContentProps, ButtonStylesProps, BoxProps, {}>(Box, {
  className: buttonContentClassName,
  displayName: 'ButtonContent',
  mapPropsToStylesProps: props => ({ size: props.size }),
  handledProps: ['size'],

  overrideStyles: true,
}) as ComponentWithAs<'div', ButtonContentProps> & { shorthandConfig: ShorthandConfig<ButtonContentProps> };

ButtonContent.propTypes = {
  ...commonPropTypes.createCommon(),
  size: customPropTypes.size,
};
ButtonContent.shorthandConfig = {
  mappedProp: 'content',
};

export default ButtonContent;
