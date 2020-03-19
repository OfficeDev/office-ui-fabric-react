import * as React from 'react';
import { WithAsProp, withSafeTypeForAs, FluentComponentStaticProps, ProviderContextPrepared } from '../../types';
import { Accessibility, cardBodyBehavior, CardBodyBehaviorProps } from '@fluentui/accessibility';
import { UIComponentProps, ChildrenComponentProps, commonPropTypes, createShorthandFactory } from '../../utils';
import { useTelemetry, useStyles, getElementType, getUnhandledProps, useAccessibility } from '@fluentui/react-bindings';
import * as PropTypes from 'prop-types';
import * as _ from 'lodash';
// @ts-ignore
import { ThemeContext } from 'react-fela';

export interface CardBodyProps extends UIComponentProps, ChildrenComponentProps {
  /**
   * Accessibility behavior if overridden by the user.
   * */
  accessibility?: Accessibility<CardBodyBehaviorProps>;

  /**
   * A body can be fitted, without any space above or below it.
   */
  fitted?: boolean;
}

export type CardBodyStylesProps = Pick<CardBodyProps, 'fitted'>;

const CardBody: React.FC<WithAsProp<CardBodyProps>> & FluentComponentStaticProps<CardBodyProps> = props => {
  const context: ProviderContextPrepared = React.useContext(ThemeContext);
  const { setStart, setEnd } = useTelemetry(CardBody.displayName, context.telemetry);
  setStart();

  const { className, design, styles, variables, children, fitted } = props;
  const ElementType = getElementType(props);
  const unhandledProps = getUnhandledProps(CardBody.handledProps, props);
  const getA11yProps = useAccessibility(props.accessibility, {
    debugName: CardBody.displayName,
    rtl: context.rtl
  });

  const { classes } = useStyles<CardBodyStylesProps>(CardBody.displayName, {
    className: CardBody.className,
    mapPropsToStyles: () => ({ fitted }),
    mapPropsToInlineStyles: () => ({
      className,
      design,
      styles,
      variables
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

CardBody.displayName = 'CardBody';
CardBody.className = 'ui-card__body';

CardBody.propTypes = {
  ...commonPropTypes.createCommon(),
  fitted: PropTypes.bool
};

CardBody.defaultProps = {
  accessibility: cardBodyBehavior
};

CardBody.handledProps = Object.keys(CardBody.propTypes) as any;

CardBody.create = createShorthandFactory({ Component: CardBody });

/**
 * A Card is used to display data in sematically grouped way
 */
export default withSafeTypeForAs<typeof CardBody, CardBodyProps, 'div'>(CardBody);
