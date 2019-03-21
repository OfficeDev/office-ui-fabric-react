import { IModalStyleProps, IModalStyles } from './Modal.types';
import { AnimationVariables, getGlobalClassNames, ZIndexes, IStyle } from '../../Styling';
import { memoizeFunction } from '../../Utilities';

export const animationDuration = AnimationVariables.durationValue2;

const globalClassNames = {
  root: 'ms-Modal',
  main: 'ms-Dialog-main',
  scrollableContent: 'ms-Modal-scrollableContent',
  isOpen: 'is-open',
  layer: 'ms-Modal-Layer'
};

export const getStyles = (props: IModalStyleProps): IModalStyles => {
  const {
    className,
    containerClassName,
    scrollableContentClassName,
    isOpen,
    isVisible,
    hasBeenOpened,
    modalRectangleTop,
    theme,
    topOffsetFixed,
    isModeless,
    isDefaultDragHandle
  } = props;
  const { palette } = theme;

  const classNames = getGlobalClassNames(globalClassNames, theme);

  return {
    root: [
      classNames.root,
      theme.fonts.medium,
      {
        backgroundColor: 'transparent',
        position: isModeless ? 'absolute' : 'fixed',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        pointerEvents: 'none',
        transition: `opacity ${animationDuration}`
      },
      topOffsetFixed &&
        hasBeenOpened && {
          alignItems: 'flex-start'
        },
      isOpen && classNames.isOpen,
      isVisible && {
        opacity: 1,
        pointerEvents: 'auto'
      },
      className
    ],
    main: [
      classNames.main,
      {
        boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: palette.white,
        boxSizing: 'border-box',
        position: 'relative',
        textAlign: 'left',
        outline: '3px solid transparent',
        maxHeight: '100%',
        overflowY: 'auto',
        zIndex: isModeless ? ZIndexes.Layer : undefined
      },
      topOffsetFixed &&
        hasBeenOpened && {
          top: modalRectangleTop
        },
      isDefaultDragHandle && {
        cursor: 'move'
      },
      containerClassName
    ],
    scrollableContent: [
      classNames.scrollableContent,
      {
        overflowY: 'auto',
        flexGrow: 1
      },
      scrollableContentClassName
    ],
    layer: isModeless && [
      classNames.layer,
      {
        position: 'static',
        width: 'unset',
        height: 'unset'
      }
    ],
    keyboardMoveIconContainer: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      padding: '3px 0px'
    },
    keyboardMoveIcon: {
      fontSize: '24px',
      width: '24px'
    }
  };
};
