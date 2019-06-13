import { ITextSlot } from 'office-ui-fabric-react';
import { IComponent, IComponentStyles, ISlottableProps, ISlotProp, IStyleableComponentProps } from '../../Foundation';
import { IIconSlot } from '../../utilities/factoryComponents.types';
import { IBaseProps, Omit } from '../../Utilities';
import { IActionable, IActionableProps, IActionableSlots, IActionableTokens, IActionableViewProps } from './Actionable/Actionable.types';

/**
 * {@docCategory Button}
 */
export type IButtonComponent = IComponent<IButtonProps, IButtonTokens, IButtonStyles, IButtonViewProps>;

// These types are redundant with IButtonComponent but are needed until TS function return widening issue is resolved:
// https://github.com/Microsoft/TypeScript/issues/241
// For now, these helper types can be used to provide return type safety when specifying tokens and styles functions.
/**
 * {@docCategory Button}
 */
export type IButtonTokenReturnType = ReturnType<Extract<IButtonComponent['tokens'], Function>>;
/**
 * {@docCategory Button}
 */
export type IButtonStylesReturnType = ReturnType<Extract<IButtonComponent['styles'], Function>>;

/**
 * {@docCategory Button}
 */
export type IButtonSlot = ISlotProp<IButtonProps>;

/**
 * {@docCategory Button}
 */
export interface IButtonSlots extends IActionableSlots {
  /**
   * Defines the text that is displayed inside the Button.
   */
  content?: ITextSlot;

  /**
   * Defines the icon that is displayed next to the text inside the Button.
   */
  icon?: IIconSlot;
}

/**
 * {@docCategory Button}
 */
export interface IButton extends IActionable {}

export type INativeButtonProps = Omit<React.AllHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>, 'content'>;

/**
 * {@docCategory Button}
 */
export interface IButtonProps
  extends ISlottableProps<IButtonSlots>,
    Pick<
      IActionableProps,
      'href' | 'primary' | 'circular' | 'disabled' | 'checked' | 'allowDisabledFocus' | 'ariaLabel' | 'keytipProps' | 'uniqueId'
    >,
    IStyleableComponentProps<IButtonProps, IButtonTokens, IButtonStyles>,
    IBaseProps<IButton>,
    INativeButtonProps {}

/**
 * {@docCategory Button}
 */
export interface IButtonViewProps extends Pick<IActionableViewProps, 'buttonRef'>, IButtonProps {}

/**
 * {@docCategory Button}
 */
export interface IButtonTokens extends IActionableTokens {
  /**
   * Defines the icon color of the Button when in high contrast mode.
   */
  highContrastIconColor?: string;

  /**
   * Defines the icon color of the Button when it is in a hovered state and in high contrast mode.
   */
  highContrastIconColorHovered?: string;

  /**
   * Defines the icon color of the Button when it is in an active state and in high contrast mode.
   */
  highContrastIconColorPressed?: string;

  /**
   * Defines the icon color of the Button.
   */
  iconColor?: string;

  /**
   * Defines the icon color of the Button when it is in a hovered state.
   */
  iconColorHovered?: string;

  /**
   * Defines the icon color of the Button when it is in an active state.
   */
  iconColorPressed?: string;

  /**
   * Defines the size of the icon inside the Button.
   */
  iconSize?: number | string;

  /**
   * Defines the font weight of the icon inside the Button.
   */
  iconWeight?: number;
}

/**
 * {@docCategory Button}
 */
export type IButtonStyles = IComponentStyles<IButtonSlots>;
