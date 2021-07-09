import { ButtonProps, ButtonSlots, ButtonState } from '../Button/Button.types';

export interface ToggleButtonCommons {
  /**
   * Defines the controlled checked state of the `ToggleButton`.
   * Mutually exclusive to `defaultChecked`.
   * This should only be used if the checked state is to be controlled at a higher level and there is a plan to pass the
   * correct value based on handling `onClick` events and re-rendering.
   * @default false
   */
  checked?: boolean;

  /**
   * Defines whether the `ToggleButton` is initially in a checked state or not when rendered.
   * Mutually exclusive to `checked`.
   * @default false
   */
  defaultChecked?: boolean;
}

/**
 * {@docCategory Button}
 */
export interface ToggleButtonProps extends ButtonProps, ToggleButtonCommons {}

export type ToggleButtonShorthands = ButtonSlots;

/**
 * {@docCategory Button}
 */
export interface ToggleButtonState extends ButtonState, ToggleButtonCommons {}
