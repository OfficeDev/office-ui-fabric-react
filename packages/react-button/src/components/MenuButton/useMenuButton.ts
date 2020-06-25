import * as React from 'react';
import { getCode, ArrowDownKey } from '@fluentui/keyboard-key';
import { ComposePreparedOptions } from '@fluentui/react-compose';
import { useControllableValue, useMergedRefs } from '@uifabric/react-hooks';
import { DirectionalHint } from 'office-ui-fabric-react';
import { useButton } from '../Button/useButton';
import { MenuButtonProps, MenuButtonState } from './MenuButton.types';

/**
 * The useMenuButton hook processes the MenuButton component props and returns state.
 * @param props - MenuButton props to derive state from.
 */
export const useMenuButton = (
  props: MenuButtonProps,
  ref: React.Ref<HTMLElement>,
  options: ComposePreparedOptions,
): MenuButtonState => {
  const {
    defaultExpanded = false,
    expanded: controlledExpanded,
    menu,
    onClick,
    onKeyDown,
    onMenuDismiss,
    ...rest
  } = props;
  const [expanded, setExpanded] = useControllableValue(controlledExpanded, defaultExpanded);
  const buttonRef = React.useRef(null);

  const _onClick = React.useCallback(
    (ev: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(ev);

        if (ev.defaultPrevented) {
          return;
        }
      }

      setExpanded(!expanded);
    },
    [expanded, onClick],
  );

  const onDismiss = React.useCallback(() => {
    if (onMenuDismiss) {
      onMenuDismiss();
    }

    setExpanded(false);
  }, [onMenuDismiss]);

  const _onKeyDown = React.useCallback(
    (ev: React.KeyboardEvent<HTMLButtonElement>) => {
      if (onKeyDown) {
        onKeyDown(ev);

        if (ev.defaultPrevented) {
          return;
        }
      }

      if ((ev.altKey || ev.metaKey) && getCode(ev) === ArrowDownKey) {
        setExpanded(true);
      }
    },
    [expanded, onKeyDown],
  );

  const state: MenuButtonState = {
    ...rest,
    'aria-expanded': expanded,
    expanded,
    onClick: _onClick,
    onKeyDown: _onKeyDown,
    ref: useMergedRefs(ref, buttonRef),

    // Menu slot props.
    menu: {
      ...(menu as object),
      directionalHint: DirectionalHint.bottomRightEdge,
      onDismiss,
      target: buttonRef && buttonRef.current,
    },
  };

  return useButton(state, ref, options) as MenuButtonState;
};
