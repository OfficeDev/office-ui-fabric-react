import * as React from 'react';
import { ComponentProps, ComponentState } from '@fluentui/react-utilities';
import { ButtonProps, ButtonSlots, ButtonState } from '../Button/Button.types';

export type CompoundButtonSlots = ButtonSlots & {
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
export interface CompoundButtonProps extends ButtonProps, ComponentProps<Partial<CompoundButtonSlots>> {}

/**
 * {@docCategory Button}
 */
export interface CompoundButtonState extends Omit<ButtonState, 'components'>, ComponentState<CompoundButtonSlots> {}
