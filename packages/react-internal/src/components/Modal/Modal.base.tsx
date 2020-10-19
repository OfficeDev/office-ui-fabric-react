import * as React from 'react';
import {
  classNamesFunction,
  allowScrollOnElement,
  allowOverscrollOnElement,
  KeyCodes,
  elementContains,
  EventGroup,
} from '../../Utilities';
import { FocusTrapZone, IFocusTrapZone } from '../../FocusTrapZone';
import { animationDuration } from './Modal.styles';
import { IModalProps, IModalStyleProps, IModalStyles } from './Modal.types';
import { Overlay } from '../../Overlay';
import { ILayerProps, Layer } from '../../Layer';
import { Popup } from '../../Popup';
import { ResponsiveMode } from '../../utilities/decorators/withResponsiveMode';
import { DirectionalHint } from '../../common/DirectionalHint';
import { Icon } from '../../Icon';
import { DraggableZone, IDragData } from '../../utilities/DraggableZone/index';
import { useResponsiveMode } from '../../utilities/hooks/useResponsiveMode';
import { getWindow, getDocument } from '@uifabric/utilities';
import { useBoolean, useMergedRefs, useWarnings, useConst, useSetTimeout, useId } from '@uifabric/react-hooks';

// @TODO - need to change this to a panel whenever the breakpoint is under medium (verify the spec)

const DefaultLayerProps: ILayerProps = {
  eventBubblingEnabled: false,
};

const COMPONENT_NAME = 'Modal';

interface IModalInternalState {
  onModalCloseTimer: number;
  allowTouchBodyScroll: boolean;
  hasRegisteredKeyUp: boolean;
  scrollableContent: HTMLDivElement | null;
  lastSetXCoordinate: number;
  lastSetYCoordinate: number;
  events: EventGroup;
}

const getClassNames = classNamesFunction<IModalStyleProps, IModalStyles>();

const useComponentRef = (props: IModalProps, focusTrapZone: React.RefObject<IFocusTrapZone>) => {
  React.useImperativeHandle(
    props.componentRef,
    () => ({
      focus() {
        if (focusTrapZone.current) {
          focusTrapZone.current.focus();
        }
      },
    }),
    [focusTrapZone],
  );
};

export const ModalBase: React.FunctionComponent<IModalProps> = React.forwardRef<HTMLDivElement, IModalProps>(
  (props, ref) => {
    const {
      className = '',
      children,
      containerClassName = '',
      scrollableContentClassName,
      elementToFocusOnDismiss,
      firstFocusableSelector,
      forceFocusInsideTrap,
      ignoreExternalFocusing,
      isBlocking = false,
      isClickableOutsideFocusTrap,
      isDarkOverlay = true,
      onDismiss,
      layerProps,
      overlay,
      isOpen = false,
      titleAriaId,
      styles,
      subtitleAriaId,
      theme,
      topOffsetFixed,
      responsiveMode,
      // eslint-disable-next-line deprecation/deprecation
      onLayerDidMount,
      isModeless,
      dragOptions,
      onDismissed,
    } = props;

    const rootRef = React.useRef<HTMLDivElement>(null);
    const focusTrapZone = React.useRef<IFocusTrapZone>(null);
    const mergedRef = useMergedRefs(rootRef, ref);

    const modalResponsiveMode = useResponsiveMode(mergedRef);

    const FocusTrapZoneId = useId();

    const doc = getDocument();
    const win = getWindow();

    const { setTimeout, clearTimeout } = useSetTimeout();

    const [isModalOpen, setIsModalOpen] = React.useState(isOpen);
    const [hasBeenOpened, setHasBeenOpened] = React.useState(isOpen);
    const [isVisible, setIsVisible] = React.useState(isOpen);
    const [xCoordinate, setXCoordinate] = React.useState<number>(0);
    const [yCoordinate, setYCoordinate] = React.useState<number>(0);
    const [modalRectangleTop, setModalRectangleTop] = React.useState<number | undefined>();

    const [isModalMenuOpen, { toggle: toggleModalMenuOpen, setFalse: setModalMenuClose }] = useBoolean(false);
    const [isInKeyboardMoveMode, { setFalse: setKeyboardMoveModeFalse, setTrue: setKeyboardMoveModeTrue }] = useBoolean(
      isOpen,
    );

    const internalState = useConst<IModalInternalState>(() => ({
      onModalCloseTimer: 0,
      allowTouchBodyScroll: false,
      hasRegisteredKeyUp: false,
      scrollableContent: null,
      lastSetXCoordinate: 0,
      lastSetYCoordinate: 0,
      events: new EventGroup({}),
    }));

    const layerClassName = layerProps === undefined ? '' : layerProps.className;
    const classNames = getClassNames(styles, {
      theme: theme!,
      className,
      containerClassName,
      scrollableContentClassName,
      isOpen,
      isVisible,
      hasBeenOpened,
      modalRectangleTop,
      topOffsetFixed,
      isModeless,
      layerClassName,
      isDefaultDragHandle: dragOptions && !dragOptions.dragHandleSelector,
    });

    const mergedLayerProps = {
      ...DefaultLayerProps,
      ...layerProps,
      onLayerDidMount: layerProps && layerProps.onLayerDidMount ? layerProps.onLayerDidMount : onLayerDidMount,
      insertFirst: isModeless,
      className: classNames.layer,
    };

    // Allow the user to scroll within the modal but not on the body
    const allowScrollOnModal = React.useCallback(
      (elt: HTMLDivElement | null): void => {
        if (elt) {
          if (internalState.allowTouchBodyScroll) {
            allowOverscrollOnElement(elt, internalState.events);
          } else {
            allowScrollOnElement(elt, internalState.events);
          }
        } else {
          internalState.events.off(internalState.scrollableContent);
        }
        internalState.scrollableContent = elt;
      },
      [internalState],
    );

    const handleKeyUp = React.useCallback(
      (ev: React.KeyboardEvent<HTMLElement>): void => {
        // Need to handle the CTRL + ALT + SPACE key during keyup due to FireFox bug:
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
        // Otherwise it would continue to fire a click even if the event was cancelled
        // during mouseDown.
        if (ev.altKey && ev.ctrlKey && ev.keyCode === KeyCodes.space) {
          // Since this is a global handler, we should make sure the target is within the dialog
          // before opening the dropdown
          if (elementContains(internalState.scrollableContent, ev.target as HTMLElement)) {
            toggleModalMenuOpen();
            ev.preventDefault();
            ev.stopPropagation();
          }
        }
      },
      [internalState, toggleModalMenuOpen],
    );

    const handleModalClose = React.useCallback((): void => {
      internalState.lastSetXCoordinate = 0;
      internalState.lastSetYCoordinate = 0;

      setXCoordinate(0);
      setYCoordinate(0);
      setModalMenuClose();
      setIsModalOpen(false);
      setKeyboardMoveModeFalse();

      if (dragOptions && internalState.hasRegisteredKeyUp) {
        internalState.events.off(win, 'keyup', handleKeyUp, true /* useCapture */);
      }

      onDismissed?.();
    }, [dragOptions, handleKeyUp, internalState, onDismissed, setKeyboardMoveModeFalse, setModalMenuClose, win]);

    const handleDragStart = React.useCallback((): void => {
      setModalMenuClose();
      setKeyboardMoveModeFalse();
    }, [setKeyboardMoveModeFalse, setModalMenuClose]);

    const handleDrag = React.useCallback(
      (ev: React.MouseEvent<HTMLElement> & React.TouchEvent<HTMLElement>, ui: IDragData): void => {
        setXCoordinate(xCoordinate + ui.delta.x);
        setYCoordinate(yCoordinate + ui.delta.y);
      },
      [xCoordinate, yCoordinate],
    );

    const handleDragStop = React.useCallback((): void => {
      if (focusTrapZone.current) {
        focusTrapZone.current.focus();
      }
    }, []);

    // We need a global handleKeyDown event when we are in the move mode so that we can
    // handle the key presses and the components inside the modal do not get the events
    const handleKeyDown = React.useCallback(
      (ev: React.KeyboardEvent<HTMLElement>): void => {
        if (ev.altKey && ev.ctrlKey && ev.keyCode === KeyCodes.space) {
          // CTRL + ALT + SPACE is handled during keyUp
          ev.preventDefault();
          ev.stopPropagation();
          return;
        }

        if (isModalMenuOpen && (ev.altKey || ev.keyCode === KeyCodes.escape)) {
          setModalMenuClose();
        }

        if (isInKeyboardMoveMode && (ev.keyCode === KeyCodes.escape || ev.keyCode === KeyCodes.enter)) {
          setKeyboardMoveModeFalse();
          ev.preventDefault();
          ev.stopPropagation();
        }

        if (isInKeyboardMoveMode) {
          let handledEvent = true;
          const delta = getMoveDelta(ev);

          switch (ev.keyCode) {
            /* eslint-disable no-fallthrough */
            case KeyCodes.escape:
              setXCoordinate(internalState.lastSetXCoordinate);
              setYCoordinate(internalState.lastSetYCoordinate);
            case KeyCodes.enter: {
              // TODO: determine if fallthrough was intentional
              /* eslint-enable no-fallthrough */
              internalState.lastSetXCoordinate = 0;
              internalState.lastSetYCoordinate = 0;
              setKeyboardMoveModeFalse();
              break;
            }
            case KeyCodes.up: {
              setYCoordinate(yCoordinate - delta);
              break;
            }
            case KeyCodes.down: {
              setYCoordinate(yCoordinate + delta);
              break;
            }
            case KeyCodes.left: {
              setXCoordinate(xCoordinate - delta);
              break;
            }
            case KeyCodes.right: {
              setXCoordinate(xCoordinate + delta);
              break;
            }
            default: {
              handledEvent = false;
            }
          }

          if (handledEvent) {
            ev.preventDefault();
            ev.stopPropagation();
          }
        }
      },
      [
        internalState,
        isInKeyboardMoveMode,
        isModalMenuOpen,
        setKeyboardMoveModeFalse,
        setModalMenuClose,
        xCoordinate,
        yCoordinate,
      ],
    );

    const getMoveDelta = (event: React.KeyboardEvent<HTMLElement>): number => {
      let delta = 10;
      if (event.shiftKey) {
        if (!event.ctrlKey) {
          delta = 50;
        }
      } else if (event.ctrlKey) {
        delta = 1;
      }

      return delta;
    };

    const handleEnterKeyboardMoveMode = () => {
      internalState.lastSetXCoordinate = xCoordinate;
      internalState.lastSetYCoordinate = yCoordinate;
      setKeyboardMoveModeTrue();
      setModalMenuClose();
      internalState.events.on(win, 'keydown', handleKeyDown, true /* useCapture */);
    };

    const handleExitKeyboardMoveMode = React.useCallback(() => {
      internalState.lastSetXCoordinate = 0;
      internalState.lastSetYCoordinate = 0;
      setKeyboardMoveModeFalse();
      internalState.events.off(win, 'keydown', handleKeyDown, true /* useCapture */);
    }, [handleKeyDown, internalState, setKeyboardMoveModeFalse, win]);

    const registerForKeyUp = React.useCallback((): void => {
      if (!internalState.hasRegisteredKeyUp) {
        internalState.events.on(win, 'keyup', handleKeyUp, true /* useCapture */);
        internalState.hasRegisteredKeyUp = true;
      }
    }, [handleKeyUp, internalState, win]);

    const modalContent = (
      <FocusTrapZone
        data-id={FocusTrapZoneId}
        componentRef={focusTrapZone}
        className={classNames.main}
        elementToFocusOnDismiss={elementToFocusOnDismiss}
        isClickableOutsideFocusTrap={isModeless || isClickableOutsideFocusTrap || !isBlocking}
        ignoreExternalFocusing={ignoreExternalFocusing}
        forceFocusInsideTrap={isModeless ? !isModeless : forceFocusInsideTrap}
        firstFocusableSelector={firstFocusableSelector}
        focusPreviouslyFocusedInnerElement
        onBlur={isInKeyboardMoveMode ? handleExitKeyboardMoveMode : undefined}
      >
        {dragOptions && isInKeyboardMoveMode && (
          <div className={classNames.keyboardMoveIconContainer}>
            {dragOptions.keyboardMoveIconProps ? (
              <Icon {...dragOptions.keyboardMoveIconProps} />
            ) : (
              <Icon iconName="move" className={classNames.keyboardMoveIcon} />
            )}
          </div>
        )}
        <div ref={allowScrollOnModal} className={classNames.scrollableContent} data-is-scrollable>
          {dragOptions && isModalMenuOpen && (
            <dragOptions.menu
              items={[
                { key: 'move', text: dragOptions.moveMenuItemText, onClick: handleEnterKeyboardMoveMode },
                { key: 'close', text: dragOptions.closeMenuItemText, onClick: handleModalClose },
              ]}
              onDismiss={toggleModalMenuOpen}
              alignTargetEdge
              coverTarget
              directionalHint={DirectionalHint.topLeftEdge}
              directionalHintFixed
              shouldFocusOnMount
              target={internalState.scrollableContent}
            />
          )}
          {children}
        </div>
      </FocusTrapZone>
    );

    React.useEffect(() => {
      clearTimeout(internalState.onModalCloseTimer);
      // Opening the dialog
      if (isOpen) {
        // Add a keyUp handler for all key up events when the dialog is open
        if (dragOptions) {
          registerForKeyUp();
        }

        setIsModalOpen(true);
        setHasBeenOpened(true);
        setIsVisible(true);

        if (topOffsetFixed) {
          const dialogMain = doc?.getElementsByClassName('ms-Dialog-main');
          let modalRectangle;
          if (dialogMain && dialogMain.length > 0) {
            modalRectangle = dialogMain[0].getBoundingClientRect();
            setModalRectangleTop(modalRectangle.top);
          }
        }
      }
      // Closing the dialog
      if (!isOpen && isModalOpen) {
        internalState.onModalCloseTimer = setTimeout(handleModalClose, parseFloat(animationDuration) * 1000);
        setIsVisible(false);
      }
      return () => {
        internalState.events.dispose();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run if isModalOpen or isOpen mutates.
    }, [isModalOpen, isOpen]);

    if (isOpen && isVisible) {
      registerForKeyUp();
    }

    useComponentRef(props, focusTrapZone);
    useDebugWarnings(props);

    return (
      (isModalOpen && modalResponsiveMode! >= (responsiveMode || ResponsiveMode.small) && (
        <Layer ref={mergedRef} {...mergedLayerProps}>
          <Popup
            role={isModeless || !isBlocking ? 'dialog' : 'alertdialog'}
            aria-modal={!isModeless}
            ariaLabelledBy={titleAriaId}
            ariaDescribedBy={subtitleAriaId}
            onDismiss={onDismiss}
            shouldRestoreFocus={!ignoreExternalFocusing}
          >
            <div role={!isModeless ? 'document' : undefined} className={classNames.root}>
              {!isModeless && (
                <Overlay
                  isDarkThemed={isDarkOverlay}
                  onClick={isBlocking ? undefined : onDismiss}
                  allowTouchBodyScroll={internalState.allowTouchBodyScroll}
                  {...overlay}
                />
              )}
              {dragOptions ? (
                <DraggableZone
                  handleSelector={dragOptions.dragHandleSelector || `.${classNames.main.split(' ')[0]}`}
                  preventDragSelector="button"
                  onStart={handleDragStart}
                  onDragChange={handleDrag}
                  onStop={handleDragStop}
                  position={{ x: xCoordinate, y: yCoordinate }}
                >
                  {modalContent}
                </DraggableZone>
              ) : (
                modalContent
              )}
            </div>
          </Popup>
        </Layer>
      )) ||
      null
    );
  },
);
ModalBase.displayName = COMPONENT_NAME;

function useDebugWarnings(props: IModalProps) {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- build-time conditional
    useWarnings({
      name: COMPONENT_NAME,
      props,
      deprecations: { onLayerDidMount: 'layerProps.onLayerDidMount' },
    });
  }
}
