import * as React from 'react';
// @ts-ignore
import { ThemeContext } from 'react-fela';

import { StylesContextValue } from '../styles/types';
import useStyles from '../hooks/useStyles';
import getUnhandledProps from '../utils/getUnhandledProps';
import { SvgIconCreateFnParams, SvgIconProps } from './types';

export const SvgIconClassName = 'ui-icon';
export const SvgIconDisplayName = 'SvgIcon';

export const SvgIconHandledProps: (keyof SvgIconProps)[] = [
  'alt',
  'aria-label',
  'bordered',
  'className',
  'circular',
  'children',
  'design',
  'disabled',
  'outline',
  'size',
  'rotate',
  'styles',
  'variables',
  'xSpacing',
];

const createSvgIcon = <TProps extends SvgIconProps>({
  svg,
  displayName,
  handledProps = SvgIconHandledProps,
}: SvgIconCreateFnParams<TProps>) => {
  const Component: React.FC<React.HTMLAttributes<HTMLSpanElement> & TProps> & {
    handledProps: (keyof TProps)[];
  } = props => {
    const context: StylesContextValue = React.useContext(ThemeContext);

    const {
      alt,
      'aria-label': ariaLabel,
      bordered,
      circular,
      className,
      design,
      disabled,
      outline,
      rotate = 0,
      size = 'medium',
      styles,
      variables,
      xSpacing,
    } = props;

    const { classes } = useStyles(SvgIconDisplayName, {
      className: SvgIconClassName,
      mapPropsToStyles: () => ({
        bordered,
        circular,
        disabled,
        outline,
        rotate,
        size,
        xSpacing,
      }),
      mapPropsToInlineStyles: () => ({ className, design, styles, variables }),
      rtl: context.rtl,
    });

    const unhandledProps = getUnhandledProps(handledProps, props);

    return (
      <span
        role="img"
        aria-hidden={alt || ariaLabel ? undefined : 'true'}
        aria-label={ariaLabel}
        className={classes.root}
        {...unhandledProps}
      >
        {svg({ classes, rtl: context.rtl, props })}
      </span>
    );
  };

  Component.displayName = displayName;
  Component.handledProps = handledProps;

  return Component;
};

export default createSvgIcon;
