import * as React from 'react';
import { Accessibility } from '@fluentui/accessibility';
import {
  ComponentWithAs,
  getElementType,
  useUnhandledProps,
  useAccessibility,
  useFluentContext,
  useStyles,
  useTelemetry,
} from '@fluentui/react-bindings';
import {
  childrenExist,
  UIComponentProps,
  ChildrenComponentProps,
  ContentComponentProps,
  commonPropTypes,
  rtlTextContainer,
  SizeValue,
} from '../../utils';
import { FluentComponentStaticProps } from '../../types';

export interface PillIconProps extends UIComponentProps, ChildrenComponentProps, ContentComponentProps {
  /**
   * Accessibility behavior if overridden by the user.
   */
  accessibility?: Accessibility<never>;

  /**
   * A Pill Icon can be sized.
   */
  size?: Extract<SizeValue, 'smaller' | 'small' | 'medium'>;
}

export type PillIconStylesProps = Required<Pick<PillIconProps, 'size'>>;
export const pillIconClassName = 'ui-pill__icon';

/**
 * A PillIcon allows user set an icon.
 */
export const PillIcon: ComponentWithAs<'div', PillIconProps> & FluentComponentStaticProps<PillIconProps> = props => {
  const context = useFluentContext();
  const { setStart, setEnd } = useTelemetry(PillIcon.displayName, context.telemetry);
  setStart();

  const { accessibility, children, className, content, design, styles, variables, size } = props;

  const getA11Props = useAccessibility(accessibility, {
    debugName: PillIcon.displayName,
    rtl: context.rtl,
  });

  const { classes } = useStyles<PillIconStylesProps>(PillIcon.displayName, {
    className: pillIconClassName,
    mapPropsToStyles: () => ({ size }),
    mapPropsToInlineStyles: () => ({ className, design, styles, variables }),
    rtl: context.rtl,
  });

  const ElementType = getElementType(props);
  const unhandledProps = useUnhandledProps(PillIcon.handledProps, props);

  const element = (
    <ElementType
      {...getA11Props('root', {
        className: classes.root,
        ...rtlTextContainer.getAttributes({ forElements: [children] }),
        ...unhandledProps,
      })}
    >
      {childrenExist(children) ? children : content}
    </ElementType>
  );

  setEnd();

  return element;
};

PillIcon.displayName = 'PillIcon';

PillIcon.propTypes = {
  ...commonPropTypes.createCommon(),
};

PillIcon.handledProps = Object.keys(PillIcon.propTypes) as any;

PillIcon.shorthandConfig = {
  mappedProp: 'content',
};
