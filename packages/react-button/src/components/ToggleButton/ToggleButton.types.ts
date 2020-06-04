import { ComposeStandardStatics } from '../../utils/tempTypes';
import { ComposeOptions } from '@fluentui/react-compose';
import { ButtonProps, ButtonSlots } from '../Button/Button.types';

export type SizeValue = 'smallest' | 'smaller' | 'small' | 'medium' | 'large' | 'larger' | 'largest';

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

export interface ToggleButtonSlots extends ButtonSlots {}

export type ToggleButtonSlotProps = {
  [key in keyof ToggleButtonSlots]: ToggleButtonProps[key];
};

export interface ToggleButtonOptions
  extends ComposeOptions<ToggleButtonProps, ToggleButtonSlots, ToggleButtonSlotProps, ComposeStandardStatics> {}
