import * as React from 'react';
import { ComponentProps, ComponentState } from '@fluentui/react-utilities';
import { ButtonProps, ButtonShorthands, ButtonState } from '../Button/Button.types';

export type CompoundButtonShorthands = ButtonShorthands & {
  /**
   * Second line of text that describes the action this button takes.
   */
  secondaryContent: React.HTMLAttributes<HTMLElement>;

  /**
   * Container that wraps the children and secondaryContent slots.
   */
  contentContainer: React.HTMLAttributes<HTMLElement>;
};
/**
 * {@docCategory Button}
 */
export interface CompoundButtonProps extends ButtonProps, ComponentProps<Partial<CompoundButtonShorthands>> {}

/**
 * {@docCategory Button}
 */
export interface CompoundButtonState
  extends Omit<ButtonState, 'components'>,
    ComponentState<CompoundButtonShorthands> {}
