import {
  ComponentAnimationProp,
  getUnhandledProps,
  unstable_createAnimationStyles as createAnimationStyles,
  unstable_calculateAnimationTimeout as calculateAnimationTimeout,
  unstable_getStyles as getStyles,
  useTelemetry
} from '@fluentui/react-bindings';
import cx from 'classnames';
import * as _ from 'lodash';
import * as PropTypes from 'prop-types';
import * as React from 'react';
// @ts-ignore
import { ThemeContext } from 'react-fela';
import { Transition } from 'react-transition-group';

import { childrenExist, StyledComponentProps, commonPropTypes, ChildrenComponentProps } from '../../utils';
import { ComponentEventHandler, ProviderContextPrepared } from '../../types';

export type AnimationChildrenProp = (props: { classes: string }) => React.ReactNode;

export interface AnimationProps extends StyledComponentProps, ChildrenComponentProps<AnimationChildrenProp | React.ReactChild> {
  /** Additional CSS class name(s) to apply.  */
  className?: string;

  /** The name for the animation that should be applied, defined in the theme. */
  name?: string;

  /** Specifies a delay for the start of an animation. Negative values are
   * also allowed. If using negative values, the animation will start as if it had already been
   * playing for that amount of time.
   */
  delay?: string;

  /** Specifies whether an animation should be played forwards, backwards or in alternate cycles.
   * It can have the following values:
   * - normal (default) - The animation is played as normal (forwards)
   * - reverse - The animation is played in reverse direction (backwards)
   * - alternate - The animation is played forwards first, then backwards
   * - alternate-reverse - The animation is played backwards first, then forwards
   */
  direction?: string;

  /** Specifies how long an animation should take to complete. */
  duration?: string;

  /**
   * Specifies a style for the target element when the animation is not playing (i.e. before it starts, after it ends, or both).
   * It can have the following values:
   * - none (default) - Animation will not apply any styles to the element before or after it is executing
   * - forwards - The element will retain the style values that is set by the last keyframe (depends on animation-direction and animation-iteration-count)
   * - backwards - The element will get the style values that is set by the first keyframe (depends on animation-direction), and retain this during the animation-delay period
   * - both - The animation will follow the rules for both forwards and backwards, extending the animation properties in both directions
   * */
  fillMode?: string;

  /** Specifies the number of times an animation should run. */
  iterationCount?: string;

  /** Custom parameters for the keyframe defined for the animation. */
  keyframeParams?: object;

  /**
   * Specifies whether the animation is running or paused. It can have the following values:
   * - paused - Specifies that the animation is paused
   * - running - Default value. Specifies that the animation is running
   * - initial - Sets this property to its default value.
   * - inherit - Inherits this property from its parent element.
   * */
  playState?: string;

  /**
   * Specifies the speed curve of the animation. It can have the following values:
   * - ease - Specifies an animation with a slow start, then fast, then end slowly (this is default)
   * - linear - Specifies an animation with the same speed from start to end
   * - ease-in - Specifies an animation with a slow start
   * - ease-out - Specifies an animation with a slow end
   * - ease-in-out - Specifies an animation with a slow start and end
   * - cubic-bezier(n,n,n,n) - Lets you define your own values in a cubic-bezier function
   */
  timingFunction?: string;

  /** Show the component; triggers the enter or exit animation. */
  visible?: boolean;

  /** Run the enter animation when the component mounts, if it is initially shown. */
  appear?: boolean;

  /** Wait until the first "enter" transition to mount the component (add it to the DOM). */
  mountOnEnter?: boolean;

  /** Unmount the component (remove it from the DOM) when it is not shown. */
  unmountOnExit?: boolean;

  /** The duration of the transition, in milliseconds. */
  timeout?: number | { enter?: number; exit?: number; appear?: number };

  /**
   * Callback fired before the "entering" status is applied.
   * @param event - React's original SyntheticEvent.
   * @param data - All props.
   */
  onEnter?: ComponentEventHandler<AnimationProps>;

  /**
   * Callback fired after the "entering" status is applied.
   * @param event - React's original SyntheticEvent.
   * @param data - All props.
   */
  onEntering?: ComponentEventHandler<AnimationProps>;

  /**
   * Callback fired after the "entered" status is applied.
   * @param event - React's original SyntheticEvent.
   * @param data - All props.
   */
  onEntered?: ComponentEventHandler<AnimationProps>;

  /**
   * Callback fired before the "exiting" status is applied.
   * @param event - React's original SyntheticEvent.
   * @param data - All props.
   */
  onExit?: ComponentEventHandler<AnimationProps>;

  /**
   * Callback fired after the "exiting" status is applied.
   * @param event - React's original SyntheticEvent.
   * @param data - All props.
   */
  onExiting?: ComponentEventHandler<AnimationProps>;

  /**
   * Callback fired after the "exited" status is applied.
   * @param event - React's original SyntheticEvent.
   * @param data - All props.
   */
  onExited?: ComponentEventHandler<AnimationProps>;
}

/**
 * An Animation provides animation effects to rendered elements.
 */
const Animation: React.FC<AnimationProps> & {
  className: string;
  handledProps: (keyof AnimationProps)[];
} = props => {
  const context: ProviderContextPrepared = React.useContext(ThemeContext);
  const { setStart, setEnd } = useTelemetry(Animation.displayName, context.telemetry);
  setStart();

  const {
    appear,
    children,
    className,
    delay,
    direction,
    duration,
    fillMode,
    iterationCount,
    keyframeParams,
    mountOnEnter,
    name,
    playState,
    timeout,
    timingFunction,
    visible,
    unmountOnExit
  } = props;

  const handleAnimationEvent = (event: 'onEnter' | 'onEntering' | 'onEntered' | 'onExit' | 'onExiting' | 'onExited') => () => {
    _.invoke(props, event, null, props);
  };

  const { classes, styles: animationStyles } = React.useMemo(() => {
    const animation: ComponentAnimationProp = {
      name,
      keyframeParams,
      duration,
      delay,
      iterationCount,
      direction,
      fillMode,
      playState,
      timingFunction
    };

    return getStyles({
      className: Animation.className,
      displayName: Animation.displayName,
      props: {
        className,
        styles: createAnimationStyles(animation, context.theme)
      },

      disableAnimations: context.disableAnimations,
      renderer: context.renderer,
      rtl: context.rtl,
      performance: {
        enableSanitizeCssPlugin: false,
        enableStylesCaching: false,
        enableVariablesCaching: false,
        enableHardVariablesCaching: false
      },
      saveDebug: _.noop,
      theme: context.theme
    });
  }, [className, context, name, delay, direction, duration, fillMode, iterationCount, keyframeParams, playState, timingFunction]);

  if (_.isNil(children)) {
    setEnd();
    return null;
  }

  const { animationDuration, animationDelay } = animationStyles.root;
  const timeoutResult = timeout || calculateAnimationTimeout(animationDuration, animationDelay) || 0;

  const unhandledProps = getUnhandledProps(Animation.handledProps, props);

  const isChildrenFunction = typeof children === 'function';
  const child = childrenExist(children) && !isChildrenFunction && (React.Children.only(children) as React.ReactElement);

  const element = (
    <Transition
      in={visible}
      appear={appear}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
      timeout={timeoutResult}
      onEnter={handleAnimationEvent('onEnter')}
      onEntering={handleAnimationEvent('onEntering')}
      onEntered={handleAnimationEvent('onEntered')}
      onExit={handleAnimationEvent('onExit')}
      onExiting={handleAnimationEvent('onExiting')}
      onExited={handleAnimationEvent('onExited')}
      {...unhandledProps}
      className={!isChildrenFunction ? cx(classes.root, (child as any)?.props?.className) : ''}
    >
      {isChildrenFunction ? () => (children as AnimationChildrenProp)({ classes: classes.root }) : child}
    </Transition>
  );
  setEnd();

  return element;
};

Animation.className = 'ui-animation';
Animation.displayName = 'Animation';

Animation.propTypes = {
  ...commonPropTypes.createCommon({
    accessibility: false,
    as: false,
    content: false,
    children: false
  }),
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  name: PropTypes.string,
  delay: PropTypes.string,
  direction: PropTypes.string,
  duration: PropTypes.string,
  fillMode: PropTypes.string,
  iterationCount: PropTypes.string,
  keyframeParams: PropTypes.object,
  playState: PropTypes.string,
  timingFunction: PropTypes.string,
  visible: PropTypes.bool,
  appear: PropTypes.bool,
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      appear: PropTypes.number,
      enter: PropTypes.number,
      exit: PropTypes.number
    })
  ]),
  onEnter: PropTypes.func,
  onEntering: PropTypes.func,
  onEntered: PropTypes.func,
  onExit: PropTypes.func,
  onExiting: PropTypes.func,
  onExited: PropTypes.func
};
Animation.handledProps = Object.keys(Animation.propTypes) as any;

export default Animation;
