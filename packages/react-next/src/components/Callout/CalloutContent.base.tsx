import * as React from 'react';
import { ICalloutProps, ICalloutContentStyleProps, ICalloutContentStyles } from './Callout.types';
import { DirectionalHint } from '../../common/DirectionalHint';
import {
  Point,
  IRectangle,
  css,
  divProperties,
  elementContains,
  focusFirstChild,
  getDocument,
  getNativeProps,
  getWindow,
  on,
  shallowCompare,
  getPropsWithDefaults,
} from '../../Utilities';
import {
  positionCallout,
  ICalloutPositionedInfo,
  IPositionProps,
  getMaxHeight,
  IPosition,
  RectangleEdge,
  positionCard,
  getBoundsFromTargetWindow,
} from 'office-ui-fabric-react/lib/utilities/positioning';
import { Popup } from '../../Popup';
import { classNamesFunction } from '../../Utilities';
import { AnimationClassNames } from '../../Styling';
import { useMergedRefs, useAsync } from '@uifabric/react-hooks';

const ANIMATIONS: { [key: number]: string | undefined } = {
  [RectangleEdge.top]: AnimationClassNames.slideUpIn10,
  [RectangleEdge.bottom]: AnimationClassNames.slideDownIn10,
  [RectangleEdge.left]: AnimationClassNames.slideLeftIn10,
  [RectangleEdge.right]: AnimationClassNames.slideRightIn10,
};

const getClassNames = classNamesFunction<ICalloutContentStyleProps, ICalloutContentStyles>({
  disableCaching: true, // disabling caching because stylesProp.position mutates often
});

const BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
// Microsoft Edge will overwrite inline styles if there is an animation pertaining to that style.
// To help ensure that edge will respect the offscreen style opacity
// filter needs to be added as an additional way to set opacity.
const OFF_SCREEN_STYLE = { opacity: 0, filter: 'opacity(0)' };
// role and role description go hand-in-hand. Both would be included by spreading getNativeProps for a basic element
// This constant array can be used to filter these out of native props spread on callout root and apply them together on
// calloutMain (the Popup component within the callout)
const ARIA_ROLE_ATTRIBUTES = ['role', 'aria-roledescription'];

const DEFAULT_PROPS = {
  preventDismissOnLostFocus: false,
  preventDismissOnScroll: false,
  preventDismissOnResize: false,
  isBeakVisible: true,
  beakWidth: 16,
  gapSpace: 0,
  minPagePadding: 8,
  directionalHint: DirectionalHint.bottomAutoEdge,
} as const;

function useTargets({ target }: ICalloutProps, calloutElement: React.RefObject<HTMLDivElement | null>) {
  const previousTargetProp = React.useRef<
    Element | string | MouseEvent | Point | React.RefObject<Element> | null | undefined
  >();

  const targetRef = React.useRef<Element | MouseEvent | Point | null>(null);
  /**
   * Stores an instance of Window, used to check
   * for server side rendering and if focus was lost.
   */
  const targetWindowRef = React.useRef<Window>();

  // If the target element changed, find the new one. If we are tracking
  // target with class name, always find element because we do not know if
  // fabric has rendered a new element and disposed the old element.
  if (target !== previousTargetProp.current || typeof target === 'string') {
    const currentElement = calloutElement.current;

    if (target) {
      if (typeof target === 'string') {
        const currentDoc: Document = getDocument(currentElement)!;
        targetRef.current = currentDoc ? currentDoc.querySelector(target) : null;
        targetWindowRef.current = getWindow(currentElement)!;
      } else if ('stopPropagation' in target) {
        targetWindowRef.current = getWindow(target.target as Element)!;
        targetRef.current = target;
      } else if ('getBoundingClientRect' in target) {
        targetWindowRef.current = getWindow(currentElement)!;
        targetRef.current = target;
      } else if ('current' in target && target.current !== undefined) {
        targetRef.current = target.current;
        targetWindowRef.current = getWindow(target.current)!;
      } else {
        targetWindowRef.current = getWindow(currentElement)!;
        targetRef.current = target as Point;
      }
    } else {
      targetWindowRef.current = getWindow(currentElement)!;
    }
    previousTargetProp.current = target;
  }

  return [targetRef, targetWindowRef] as const;
}

function useBounds(
  { bounds, minPagePadding = DEFAULT_PROPS.minPagePadding, target }: ICalloutProps,
  targetRef: React.RefObject<Element | MouseEvent | Point | null>,
  targetWindowRef: React.RefObject<Window | undefined>,
) {
  const cachedBounds = React.useRef<IRectangle | undefined>();

  const getBounds = React.useCallback((): IRectangle | undefined => {
    if (!cachedBounds.current) {
      let currentBounds =
        typeof bounds === 'function'
          ? targetWindowRef.current
            ? bounds(target, targetWindowRef.current)
            : undefined
          : bounds;

      if (!currentBounds && targetWindowRef.current) {
        currentBounds = getBoundsFromTargetWindow(targetRef.current, targetWindowRef.current);
        currentBounds = {
          top: currentBounds.top + minPagePadding,
          left: currentBounds.left + minPagePadding,
          right: currentBounds.right! - minPagePadding,
          bottom: currentBounds.bottom! - minPagePadding,
          width: currentBounds.width - minPagePadding * 2,
          height: currentBounds.height - minPagePadding * 2,
        };
      }
      cachedBounds.current = currentBounds;
    }
    return cachedBounds.current;
  }, [bounds, minPagePadding, target]);

  return getBounds;
}

function useMaxHeight(
  { beakWidth, coverTarget, directionalHint, directionalHintFixed, gapSpace, isBeakVisible, hidden }: ICalloutProps,
  targetRef: React.RefObject<Element | MouseEvent | Point | null>,
  getBounds: () => IRectangle | undefined,
) {
  const [maxHeight, setMaxHeight] = React.useState<number | undefined>();
  const async = useAsync();

  React.useEffect(() => {
    if (!maxHeight && !hidden) {
      if (directionalHintFixed && targetRef.current) {
        // Since the callout cannot measure it's border size it must be taken into account here. Otherwise it will
        // overlap with the target.
        const totalGap: number = (gapSpace ?? 0) + (isBeakVisible && beakWidth ? beakWidth : 0);
        async.requestAnimationFrame(() => {
          if (targetRef.current) {
            setMaxHeight(getMaxHeight(targetRef.current, directionalHint!, totalGap, getBounds(), coverTarget));
          } else {
            setMaxHeight(getBounds()?.height);
          }
        });
      }
    } else if (hidden) {
      setMaxHeight(undefined);
    }
  }, [targetRef.current, gapSpace, beakWidth, directionalHint, getBounds, hidden]);

  return maxHeight;
}

function useHeightOffset({ finalHeight, hidden }: ICalloutProps, calloutElement: React.RefObject<HTMLDivElement>) {
  const [heightOffset, setHeightOffset] = React.useState<number>(0);
  const async = useAsync();
  const setHeightOffsetTimer = React.useRef<number | undefined>();

  const setHeightOffsetEveryFrame = (): void => {
    if (calloutElement.current && finalHeight) {
      setHeightOffsetTimer.current = async.requestAnimationFrame(() => {
        const calloutMainElem = calloutElement.current?.lastChild as HTMLElement;

        if (!calloutMainElem) {
          return;
        }

        const cardScrollHeight: number = calloutMainElem.scrollHeight;
        const cardCurrHeight: number = calloutMainElem.offsetHeight;
        const scrollDiff: number = cardScrollHeight - cardCurrHeight;

        setHeightOffset(currentHeightOffset => (currentHeightOffset = scrollDiff));

        if (calloutMainElem.offsetHeight < finalHeight) {
          setHeightOffsetEveryFrame();
        } else {
          async.cancelAnimationFrame(setHeightOffsetTimer.current!, calloutElement.current);
        }
      }, calloutElement.current);
    }
  };

  React.useEffect(() => {
    if (!hidden) {
      setHeightOffsetEveryFrame();
    }
  }, [finalHeight, hidden]);

  return heightOffset;
}

function usePositions(
  this: unknown,
  props: ICalloutProps,
  hostElement: React.RefObject<HTMLDivElement>,
  calloutElement: React.RefObject<HTMLDivElement>,
  targetRef: React.RefObject<Element | MouseEvent | Point | null>,
  getBounds: () => IRectangle | undefined,
) {
  const [positions, setPositions] = React.useState<ICalloutPositionedInfo>();
  const positionAttempts = React.useRef(0);
  const async = useAsync();
  const { hidden, target, finalHeight, onPositioned, directionalHint } = props;

  React.useEffect(() => {
    if (!hidden) {
      const timerId = async.requestAnimationFrame(() => {
        // If we expect a target element to position against, we need to wait until `targetRef.current`
        // is resolved. Otherwise we can try to position.
        const expectsTarget = !!target;

        if (hostElement.current && calloutElement.current && (!expectsTarget || targetRef.current)) {
          const currentProps: IPositionProps = {
            ...props,
            target: targetRef.current!,
            bounds: getBounds(),
          };
          // If there is a finalHeight given then we assume that the user knows and will handle
          // additional positioning adjustments so we should call positionCard
          const newPositions: ICalloutPositionedInfo = finalHeight
            ? positionCard(currentProps, hostElement.current, calloutElement.current, positions)
            : positionCallout(currentProps, hostElement.current, calloutElement.current, positions);

          // Set the new position only when the positions are not exists or one of the new callout positions
          // are different. The position should not change if the position is within 2 decimal places.
          if (
            (!positions && newPositions) ||
            (positions && newPositions && !arePositionsEqual(positions, newPositions) && positionAttempts.current < 5)
          ) {
            // We should not reposition the callout more than a few times, if it is then the content is likely resizing
            // and we should stop trying to reposition to prevent a stack overflow.
            positionAttempts.current++;
            setPositions(newPositions);
          } else if (positionAttempts.current > 0) {
            // Only call the onPositioned callback if the callout has been re-positioned at least once.
            positionAttempts.current = 0;
            onPositioned?.(positions);
          }
        }
      }, calloutElement.current);

      return () => async.cancelAnimationFrame(timerId);
    }
  }, [hidden, directionalHint]);

  return positions;
}

function useAutoFocus(
  { hidden, setInitialFocus }: ICalloutProps,
  positions: ICalloutPositionedInfo | undefined,
  calloutElement: React.RefObject<HTMLDivElement>,
) {
  const async = useAsync();
  React.useEffect(() => {
    if (!hidden && setInitialFocus && positions && calloutElement.current) {
      const timerId = async.requestAnimationFrame(
        () => focusFirstChild(calloutElement.current!),
        calloutElement.current,
      );

      return () => async.cancelAnimationFrame(timerId);
    }
  }, [hidden, !!positions]);
}

function useDismissHandlers(
  this: unknown,
  { hidden, onDismiss, preventDismissOnScroll, preventDismissOnResize, preventDismissOnLostFocus }: ICalloutProps,
  positions: ICalloutPositionedInfo | undefined,
  hostElement: React.RefObject<HTMLDivElement>,
  targetRef: React.RefObject<Element | MouseEvent | Point | null>,
  targetWindowRef: React.RefObject<Window | undefined>,
) {
  const isMouseDownOnPopup = React.useRef(false);
  const async = useAsync();

  const mouseDownOnPopup = () => {
    isMouseDownOnPopup.current = true;
  };

  const mouseUpOnPopup = () => {
    isMouseDownOnPopup.current = false;
  };

  const dismissOnScroll = (ev: Event) => {
    if (positions && !preventDismissOnScroll) {
      dismissOnClickOrScroll(ev);
    }
  };

  const dismissOnResize = (ev: Event) => {
    if (!preventDismissOnResize) {
      onDismiss?.(ev);
    }
  };

  const dismissOnLostFocus = (ev: Event) => {
    if (!preventDismissOnLostFocus) {
      dismissOnClickOrScroll(ev);
    }
  };

  const dismissOnClickOrScroll = (ev: Event) => {
    const target = ev.target as HTMLElement;
    const isEventTargetOutsideCallout = hostElement.current && !elementContains(hostElement.current, target);

    // If mouse is pressed down on callout but moved outside then released, don't dismiss the callout.
    if (isEventTargetOutsideCallout && isMouseDownOnPopup.current) {
      isMouseDownOnPopup.current = false;
      return;
    }

    if (
      (!targetRef.current && isEventTargetOutsideCallout) ||
      (ev.target !== targetWindowRef.current &&
        isEventTargetOutsideCallout &&
        (!targetRef.current ||
          'stopPropagation' in targetRef.current ||
          (target !== targetRef.current && !elementContains(targetRef.current as HTMLElement, target))))
    ) {
      onDismiss?.(ev);
    }
  };

  React.useEffect(() => {
    // This is added so the callout will dismiss when the window is scrolled
    // but not when something inside the callout is scrolled. The delay seems
    // to be required to avoid React firing an async focus event in IE from
    // the target changing focus quickly prior to rendering the callout.
    async.setTimeout(() => {
      if (!hidden && targetWindowRef.current) {
        const disposables = [
          on(targetWindowRef.current, 'scroll', dismissOnScroll, true),
          on(targetWindowRef.current, 'resize', dismissOnResize, true),
          on(targetWindowRef.current.document.documentElement, 'focus', dismissOnLostFocus, true),
          on(targetWindowRef.current.document.documentElement, 'click', dismissOnLostFocus, true),
        ];

        return () => {
          disposables.forEach(dispose => dispose());
        };
      }
    }, 0);
  }, [hidden]);

  return [mouseDownOnPopup, mouseUpOnPopup] as const;
}

export const CalloutContentBase = React.memo(
  React.forwardRef((propsWithoutDefaults: ICalloutProps, forwardedRef: React.Ref<HTMLDivElement>) => {
    const props = getPropsWithDefaults(DEFAULT_PROPS, propsWithoutDefaults);

    const hostElement = React.useRef<HTMLDivElement>(null);
    const calloutElement = React.useRef<HTMLDivElement>(null);
    const rootRef = useMergedRefs(hostElement, forwardedRef);

    const [targetRef, targetWindowRef] = useTargets(props, calloutElement);
    const getBounds = useBounds(props, targetRef, targetWindowRef);
    const maxHeight = useMaxHeight(props, targetRef, getBounds);
    const heightOffset = useHeightOffset(props, calloutElement);
    const positions = usePositions(props, hostElement, calloutElement, targetRef, getBounds);
    const [mouseDownOnPopup, mouseUpOnPopup] = useDismissHandlers(
      props,
      positions,
      hostElement,
      targetRef,
      targetWindowRef,
    );

    useAutoFocus(props, positions, calloutElement);

    React.useEffect(() => {
      if (!props.hidden) {
        props.onLayerMounted?.();
      }
    }, [props.hidden]);

    return (
      <CalloutContentBaseClass
        {...props}
        hoisted={{
          rootRef,
          hostElement,
          calloutElement,
          targetRef,
          targetWindowRef,
          getBounds,
          maxHeight,
          heightOffset,
          positions,
          mouseDownOnPopup,
          mouseUpOnPopup,
        }}
      />
    );
  }),
  (previousProps: ICalloutProps, nextProps: ICalloutProps) => {
    if (!nextProps.shouldUpdateWhenHidden && previousProps.hidden && nextProps.hidden) {
      // Do not update when hidden.
      return true;
    }

    return shallowCompare(previousProps, nextProps);
  },
);
CalloutContentBase.displayName = 'CalloutContentBase';

interface ICalloutClassProps extends ICalloutProps {
  hoisted: {
    rootRef: React.Ref<HTMLDivElement>;
    hostElement: React.RefObject<HTMLDivElement>;
    calloutElement: React.RefObject<HTMLDivElement>;
    targetRef: React.RefObject<Element | MouseEvent | Point | null>;
    targetWindowRef: React.RefObject<Window | undefined>;
    maxHeight: number | undefined;
    heightOffset: number;
    positions?: ICalloutPositionedInfo;
    getBounds(): IRectangle | undefined;
    mouseDownOnPopup(): void;
    mouseUpOnPopup(): void;
  };
}

class CalloutContentBaseClass extends React.Component<ICalloutClassProps, never> {
  public render(): JSX.Element | null {
    // If there is no target window then we are likely in server side rendering and we should not render anything.
    if (!this.props.hoisted.targetWindowRef.current) {
      return null;
    }
    const {
      styles,
      style,
      ariaLabel,
      ariaDescribedBy,
      ariaLabelledBy,
      className,
      isBeakVisible,
      children,
      beakWidth,
      calloutWidth,
      calloutMaxWidth,
      finalHeight,
      hideOverflow = !!finalHeight,
      backgroundColor,
      calloutMaxHeight,
      onScroll,
      // eslint-disable-next-line deprecation/deprecation
      shouldRestoreFocus = true,
      hoisted: { maxHeight, positions },
      target,
    } = this.props;

    const getContentMaxHeight: number | undefined = maxHeight ? maxHeight + this.props.hoisted.heightOffset : undefined;
    const contentMaxHeight: number | undefined =
      calloutMaxHeight! && getContentMaxHeight && calloutMaxHeight! < getContentMaxHeight
        ? calloutMaxHeight!
        : getContentMaxHeight!;
    const overflowYHidden = hideOverflow;

    const beakVisible = isBeakVisible && !!target;
    const classNames = getClassNames(styles!, {
      theme: this.props.theme!,
      className,
      overflowYHidden: overflowYHidden,
      calloutWidth,
      positions,
      beakWidth,
      backgroundColor,
      calloutMaxWidth,
    });

    const overflowStyle: React.CSSProperties = {
      ...style,
      maxHeight: contentMaxHeight,
      ...(overflowYHidden && { overflowY: 'hidden' }),
    };

    const visibilityStyle: React.CSSProperties | undefined = this.props.hidden ? { visibility: 'hidden' } : undefined;
    // React.CSSProperties does not understand IRawStyle, so the inline animations will need to be cast as any for now.
    const content = (
      <div ref={this.props.hoisted.rootRef} className={classNames.container} style={visibilityStyle}>
        <div
          {...getNativeProps(this.props, divProperties, ARIA_ROLE_ATTRIBUTES)}
          className={css(classNames.root, positions && positions.targetEdge && ANIMATIONS[positions.targetEdge!])}
          style={positions ? positions.elementPosition : OFF_SCREEN_STYLE}
          // Safari and Firefox on Mac OS requires this to back-stop click events so focus remains in the Callout.
          // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
          tabIndex={-1}
          ref={this.props.hoisted.calloutElement}
        >
          {beakVisible && <div className={classNames.beak} style={getBeakPosition(this.props.hoisted.positions)} />}
          {beakVisible && <div className={classNames.beakCurtain} />}
          <Popup
            {...getNativeProps(this.props, ARIA_ROLE_ATTRIBUTES)}
            ariaLabel={ariaLabel}
            onRestoreFocus={this.props.onRestoreFocus}
            ariaDescribedBy={ariaDescribedBy}
            ariaLabelledBy={ariaLabelledBy}
            className={classNames.calloutMain}
            onDismiss={this.props.onDismiss}
            onScroll={onScroll}
            shouldRestoreFocus={shouldRestoreFocus}
            style={overflowStyle}
            onMouseDown={this.props.hoisted.mouseDownOnPopup}
            onMouseUp={this.props.hoisted.mouseUpOnPopup}
          >
            {children}
          </Popup>
        </div>
      </div>
    );

    return content;
  }
}

function getBeakPosition(positions?: ICalloutPositionedInfo): React.CSSProperties {
  const beakPostionStyle: React.CSSProperties = {
    ...positions?.beakPosition?.elementPosition,
  };

  if (!beakPostionStyle.top && !beakPostionStyle.bottom && !beakPostionStyle.left && !beakPostionStyle.right) {
    beakPostionStyle.left = BEAK_ORIGIN_POSITION.left;
    beakPostionStyle.top = BEAK_ORIGIN_POSITION.top;
  }

  return beakPostionStyle;
}

function arePositionsEqual(positions: ICalloutPositionedInfo, newPosition: ICalloutPositionedInfo): boolean {
  return (
    comparePositions(positions.elementPosition, newPosition.elementPosition) &&
    comparePositions(positions.beakPosition.elementPosition, newPosition.beakPosition.elementPosition)
  );
}

function comparePositions(oldPositions: IPosition, newPositions: IPosition): boolean {
  for (const key in newPositions) {
    if (newPositions.hasOwnProperty(key)) {
      const oldPositionEdge = oldPositions[key];
      const newPositionEdge = newPositions[key];

      if (oldPositionEdge !== undefined && newPositionEdge !== undefined) {
        if (oldPositionEdge.toFixed(2) !== newPositionEdge.toFixed(2)) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
}
