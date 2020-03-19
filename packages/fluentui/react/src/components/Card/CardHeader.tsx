import { Accessibility, cardHeaderBehavior, CardHeaderBehaviorProps } from '@fluentui/accessibility';
import { getElementType, getUnhandledProps, useAccessibility, useStyles, useTelemetry } from '@fluentui/react-bindings';
import * as PropTypes from 'prop-types';
import * as React from 'react';
// @ts-ignore
import { ThemeContext } from 'react-fela';
import { FluentComponentStaticProps, ProviderContextPrepared, WithAsProp, withSafeTypeForAs } from '../../types';
import { ChildrenComponentProps, commonPropTypes, createShorthandFactory, UIComponentProps } from '../../utils';

export interface CardHeaderProps extends UIComponentProps, ChildrenComponentProps {
  /**
   * Accessibility behavior if overridden by the user.
   * */
  accessibility?: Accessibility<CardHeaderBehaviorProps>;

  /**
   * Do not add margin after the header
   */
  noMarginAfter?: boolean;
}

export type CardHeaderStylesProps = Pick<CardHeaderProps, 'noMarginAfter'>;

const CardHeader: React.FC<WithAsProp<CardHeaderProps>> & FluentComponentStaticProps<CardHeaderProps> = props => {
  const context: ProviderContextPrepared = React.useContext(ThemeContext);
  const { setStart, setEnd } = useTelemetry(CardHeader.displayName, context.telemetry);
  setStart();

  const { className, design, styles, variables, children, noMarginAfter } = props;
  const ElementType = getElementType(props);
  const unhandledProps = getUnhandledProps(CardHeader.handledProps, props);
  const getA11yProps = useAccessibility(props.accessibility, {
    debugName: CardHeader.displayName,
    rtl: context.rtl
  });

  const { classes } = useStyles<CardHeaderStylesProps>(CardHeader.displayName, {
    className: CardHeader.className,
    mapPropsToInlineStyles: () => ({
      className,
      design,
      styles,
      variables,
      noMarginAfter
    }),
    rtl: context.rtl
  });

  const element = (
    <ElementType
      {...getA11yProps('root', {
        className: classes.root,
        ...unhandledProps
      })}
    >
      {children}
    </ElementType>
  );
  setEnd();
  return element;
};

CardHeader.displayName = 'CardHeader';
CardHeader.className = 'ui-card__header';

CardHeader.propTypes = {
  ...commonPropTypes.createCommon(),
  noMarginAfter: PropTypes.bool
};

CardHeader.defaultProps = {
  as: 'div',
  accessibility: cardHeaderBehavior,
};

CardHeader.handledProps = Object.keys(CardHeader.propTypes) as any;

CardHeader.create = createShorthandFactory({ Component: CardHeader });

/**
 * A Card is used to display data in sematically grouped way
 */
export default withSafeTypeForAs<typeof CardHeader, CardHeaderProps, 'div'>(CardHeader);
