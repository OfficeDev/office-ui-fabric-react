import { ButtonProps, ButtonState, ButtonTokens, ButtonVariants } from '../Button/Button.types';

/**
 * {@docCategory Button}
 */
export interface ToggleButtonProps extends ButtonProps {
  /**
   * Defines the controlled checked state of the `ToggleButton`.
   * Mutually exclusive to `defaultChecked`.
   * This should only be used if the checked state is to be controlled at a higher level and there is a plan to pass the
   * correct value based on handling `onClick` events and re-rendering.
   */
  checked?: boolean;

  /**
   * Defines whether the `ToggleButton` is inititally in a checked state or not when rendered.
   * Mutually exclusive to `checked`.
   */
  defaultChecked?: boolean;
}

/**
 * {@docCategory Button}
 */
export interface ToggleButtonState extends ToggleButtonProps, ButtonState {}

export type ToggleButtonTokens = ButtonTokens;

export type ToggleButtonVariants = ButtonVariants<ToggleButtonTokens>;
