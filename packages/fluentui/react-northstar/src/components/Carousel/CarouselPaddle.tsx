import { Accessibility, buttonBehavior } from '@fluentui/accessibility';
import * as customPropTypes from '@fluentui/react-proptypes';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as _ from 'lodash';

import {
  childrenExist,
  createShorthandFactory,
  UIComponentProps,
  ChildrenComponentProps,
  commonPropTypes,
  rtlTextContainer,
  ContentComponentProps,
} from '../../utils';

import {
  ComponentEventHandler,
  WithAsProp,
  withSafeTypeForAs,
  FluentComponentStaticProps,
  ProviderContextPrepared,
  ShorthandValue,
} from '../../types';
import { getElementType, useAccessibility, useStyles, useTelemetry, useUnhandledProps } from '@fluentui/react-bindings';
import Box, { BoxProps } from '../Box/Box';
// @ts-ignore
import { ThemeContext } from 'react-fela';

export interface CarouselPaddleProps
  extends UIComponentProps,
    ContentComponentProps<ShorthandValue<BoxProps>>,
    ChildrenComponentProps {
  /** Accessibility behavior if overridden by the user. */
  accessibility?: Accessibility;

  /** A paddle can show that it cannot be interacted with. */
  disabled?: boolean;

  /**
   * Called after a user clicks the button.
   * @param event - React's original SyntheticEvent.
   * @param data - All props.
   */
  onClick?: ComponentEventHandler<CarouselPaddleProps>;

  /**
   * Called after a user focuses the button.
   * @param event - React's original SyntheticEvent.
   * @param data - All props.
   */
  onFocus?: ComponentEventHandler<CarouselPaddleProps>;

  /** A paddle can indicate that it slides to the next item. */
  next?: boolean;

  /** A paddle can indicate that it slides to the previous item. */
  previous?: boolean;
}

export type CarouselPaddleSlotClassNames = {
  content: string;
};

export type CarouselPaddleStylesProps = Pick<CarouselPaddleProps, 'disabled' | 'next' | 'previous'>;

const CarouselPaddle: React.FC<WithAsProp<CarouselPaddleProps>> &
  FluentComponentStaticProps<CarouselPaddleProps> & { slotClassNames: CarouselPaddleSlotClassNames } = props => {
  const context: ProviderContextPrepared = React.useContext(ThemeContext);
  const { setStart, setEnd } = useTelemetry(CarouselPaddle.displayName, context.telemetry);
  setStart();

  const {
    accessibility,
    // @ts-ignore
    active,
    as,
    children,
    content,
    disabled,
    className,
    next,
    previous,
    styles,
    variables,
    design,
  } = props;

  const hasChildren = childrenExist(children);

  const getA11Props = useAccessibility(accessibility, {
    debugName: CarouselPaddle.displayName,
    mapPropsToBehavior: () => ({
      as,
      active,
      disabled,
    }),
    actionHandlers: {
      performClick: event => {
        event.preventDefault();
        handleClick(event);
      },
    },
    rtl: context.rtl,
  });
  const { classes, styles: resolvedStyles } = useStyles<CarouselPaddleStylesProps>(CarouselPaddle.displayName, {
    className: CarouselPaddle.className,
    mapPropsToStyles: () => ({
      disabled,
      next,
      previous,
    }),
    mapPropsToInlineStyles: () => ({
      className,
      design,
      styles,
      variables,
    }),
    rtl: context.rtl,
  });

  const unhandledProps = useUnhandledProps(CarouselPaddle.handledProps, props);
  const ElementType = getElementType(props);

  const handleClick = (e: React.SyntheticEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    _.invoke(props, 'onClick', e, props);
  };

  const handleFocus = (e: React.SyntheticEvent) => {
    _.invoke(props, 'onFocus', e, props);
  };

  const result = (
    <ElementType
      {...rtlTextContainer.getAttributes({ forElements: [children] })}
      {...getA11Props('root', {
        onClick: handleClick,
        disabled,
        className: classes.root,
        onFocus: handleFocus,
        ...unhandledProps,
      })}
    >
      {hasChildren
        ? children
        : Box.create(content, {
            defaultProps: () =>
              getA11Props('content', {
                as: 'span',
                className: CarouselPaddle.slotClassNames.content,
                styles: resolvedStyles.content,
              }),
          })}
    </ElementType>
  );

  setEnd();

  return result;
};

CarouselPaddle.defaultProps = {
  as: 'button',
  accessibility: buttonBehavior,
  content: {},
};

CarouselPaddle.displayName = 'CarouselPaddle';
CarouselPaddle.className = 'ui-carousel__paddle';

CarouselPaddle.propTypes = {
  ...commonPropTypes.createCommon({}),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  next: customPropTypes.every([customPropTypes.disallow(['previous']), PropTypes.bool]),
  previous: customPropTypes.every([customPropTypes.disallow(['next']), PropTypes.bool]),
};

CarouselPaddle.handledProps = Object.keys(CarouselPaddle.propTypes) as any;

CarouselPaddle.create = createShorthandFactory({ Component: CarouselPaddle, mappedProp: 'children' });

CarouselPaddle.slotClassNames = {
  content: `${CarouselPaddle.className}__content`,
};

/**
 * A CarouselPaddle allows users to customize the paddles inside the Carousel component.
 *
 * @accessibility
 * Implements [ARIA Button](https://www.w3.org/TR/wai-aria-practices-1.1/#button) design pattern.
 */
export default withSafeTypeForAs<typeof CarouselPaddle, CarouselPaddleProps, 'button'>(CarouselPaddle);
