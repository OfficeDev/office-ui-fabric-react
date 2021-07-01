import * as React from 'react';
import { ComponentProps, ComponentState } from '@fluentui/react-utilities';
import { ButtonProps, ButtonShorthands, ButtonState } from '../Button/Button.types';

export type MenuButtonShorthands = ButtonShorthands & {
  /**
   * Menu icon that indicates that this button has a menu that can be expanded.
   */
  menuIcon: React.HTMLAttributes<HTMLElement>;
};

/**
 * {@docCategory Button}
 */
export type MenuButtonProps = Omit<ButtonProps, 'iconPosition'> & ComponentProps<Partial<MenuButtonShorthands>>;

/**
 * {@docCategory Button}
 */
export type MenuButtonState = Omit<ButtonState, 'iconPosition'> & ComponentState<MenuButtonShorthands>;
