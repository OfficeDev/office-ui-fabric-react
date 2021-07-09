import * as React from 'react';
import { MenuButtonProps } from './MenuButton.types';
import { renderMenuButton } from './renderMenuButton';
import { useMenuButton } from './useMenuButton';
import { useMenuButtonStyles } from './useMenuButtonStyles';

/**
 * Define a styled MenuButton, using the `useMenuButton` hook.
 * {@docCategory Button}
 */
export const MenuButton: React.FunctionComponent<MenuButtonProps & React.RefAttributes<HTMLElement>> = React.forwardRef<
  HTMLElement,
  MenuButtonProps
>((props, ref) => {
  const state = useMenuButton(props, ref);

  useMenuButtonStyles(state);

  return renderMenuButton(state);
});

MenuButton.displayName = 'MenuButton';
