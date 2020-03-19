import {
  getElementType,
  getUnhandledProps,
  useStyles,
  useTelemetry,
  SvgIconProps,
  SvgIconClassName,
  SvgIconDisplayName,
  SvgIconHandledProps,
} from '@fluentui/react-bindings';
import { callable } from '@fluentui/styles';
import * as React from 'react';
// @ts-ignore
import { ThemeContext } from 'react-fela';

import { ProviderContextPrepared, WithAsProp, withSafeTypeForAs } from '../../types';

const SvgIcon: React.FC<WithAsProp<SvgIconProps>> & {
  className: string;
  handledProps: (keyof SvgIconProps)[];
} = props => {
  const context: ProviderContextPrepared = React.useContext(ThemeContext);

  const { setStart, setEnd } = useTelemetry(SvgIcon.displayName, context.telemetry);
  setStart();

  const {
    alt,
    'aria-label': ariaLabel,
    bordered,
    circular,
    className,
    design,
    disabled,
    children,
    outline,
    rotate,
    size,
    styles,
    variables,
    xSpacing,
  } = props;

  const { classes } = useStyles(SvgIcon.displayName, {
    className: SvgIcon.className,
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

  const ElementType = getElementType(props);
  const unhandledProps = getUnhandledProps(SvgIcon.handledProps, props);

  const element = (
    <ElementType
      role="img"
      aria-hidden={alt || ariaLabel ? undefined : 'true'}
      aria-label={ariaLabel}
      className={classes.root}
      {...unhandledProps}
    >
      {callable(children)({ classes, rtl: context.rtl, props })}
    </ElementType>
  );
  setEnd();

  return element;
};

SvgIcon.className = SvgIconClassName;
SvgIcon.displayName = SvgIconDisplayName;
SvgIcon.handledProps = SvgIconHandledProps;
SvgIcon.defaultProps = {
  as: 'span',
  size: 'medium',
  rotate: 0,
};

/**
 * An SvgIcon displays a pictogram with semantic meaning.
 */
export default withSafeTypeForAs<typeof SvgIcon, SvgIconProps, 'span'>(SvgIcon);
