import { IComponent, IComponentStyles, IHTMLElementSlot, ISlotProp, IStyleableComponentProps } from '../../Foundation';
import { IFontWeight } from 'office-ui-fabric-react';
import { IContextualMenuSlot, IIconSlot } from '../../utilities/factoryComponents.types';
import { IStackSlot } from '../../Stack';
import { ITextSlot } from '../../Text';
import { IBaseProps } from '../../Utilities';

export type IButtonComponent = IComponent<IButtonProps, IButtonTokens, IButtonStyles, IButtonViewProps>;

// These types are redundant with IButtonComponent but are needed until TS function return widening issue is resolved:
// https://github.com/Microsoft/TypeScript/issues/241
// For now, these helper types can be used to provide return type safety when specifying tokens and styles functions.
export type IButtonTokenReturnType = ReturnType<Extract<IButtonComponent['tokens'], Function>>;
export type IButtonStylesReturnType = ReturnType<Extract<IButtonComponent['styles'], Function>>;

export type IButtonSlot = ISlotProp<IButtonProps>;

export interface IButtonSlots {
  /**
   * Defines the root slot of the component.
   */
  root?: IHTMLElementSlot<'button'>;

  /**
   * Defines the horizontal stack used for specifying inner layout of Button.
   */
  stack?: IStackSlot;

  /**
   * Defines the text that is displayed inside the Button.
   */
  content?: ITextSlot;

  /**
   * Defines the icon that is displayed next to the text inside the Button.
   */
  icon?: IIconSlot;

  /**
   * Defines the contextual menu that appears when you click on the Button.
   */
  menu?: IContextualMenuSlot;

  /**
   * Defines the menu chevron icon that is displayed insisde the Button.
   */
  menuIcon?: IIconSlot;

  // The following slots are specific to Split Button and aren't used if the split property is not present.
  /**
   * Defines the root container for Split Buttons.
   */
  splitRoot?: IStackSlot;

  /**
   * Defines the root slot for the right part of the Split Button that contains the menu chevron.
   */
  splitMenuButton?: IHTMLElementSlot<'button'>;

  /**
   * Defines the horizontal stack used for specifying inner layour of the right part of the Split Button.
   */
  splitStack?: IStackSlot;

  /**
   * Defines the divider that separates the left and right parts of a Split Button.
   */
  splitDivider?: IHTMLElementSlot<'span'>;
}

export interface IButton {}

export interface IButtonProps
  extends IButtonSlots,
    IStyleableComponentProps<IButtonProps, IButtonTokens, IButtonStyles>,
    IBaseProps<IButton> {
  /**
   * Defines an href reference that, if provided, will make this component render as an anchor.
   */
  href?: string;

  /**
   * Defines whether the visual representation of the Button should be emphasized.
   * @defaultvalue false
   */
  primary?: boolean;

  /**
   * Defines whether the Button should be circular.
   * In general, circular Buttons should not specify the menu and container slots.
   * @defaultvalue false
   */
  circular?: boolean;

  /**
   * Defines whether the Button is disabled.
   * @defaultvalue false
   */
  disabled?: boolean;

  /**
   * Defines the inital expanded state of the Button. If you want the Button to maintain its own state, use this.
   * Otherwise refer to `expanded`.
   */
  defaultExpanded?: boolean;

  /**
   * Defines whether the Button is in an expanded state (i.e. a contextual menu is open).
   * @defaultvalue defaultExpanded
   */
  expanded?: boolean;

  /**
   * Defines whether the button is rendered as a Split Button.
   * @defaultvalue false
   */
  split?: boolean;

  /**
   * Split Buttons only - Defines whether the first action of the Split Button is disabled.
   * @defaultvalue false
   */
  firstActionDisabled?: boolean;

  /**
   * Defines an event callback that is triggered when the Button is clicked.
   */
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
}

export interface IButtonViewProps extends IButtonProps {
  /**
   * Defines a callback that runs after the Button's contextual menu has been closed (removed from the DOM).
   */
  onMenuDismiss: () => void;

  /**
   * Defines the target that the contextual menu uses to position itself.
   */
  menuTarget: HTMLElement | undefined;

  /**
   * Defines an event callback that is triggered when the secondary action of a Split Button is clicked.
   */
  onSplitClick?: (ev: React.MouseEvent<HTMLElement>) => void;
}

export interface IButtonTokens {
  backgroundColor?: string;
  backgroundColorHovered?: string;
  backgroundColorPressed?: string;
  color?: string;
  colorHovered?: string;
  colorPressed?: string;
  borderColor?: string;
  borderColorHovered?: string;
  borderColorPressed?: string;
  iconColor?: string;
  iconColorHovered?: string;
  iconColorPressed?: string;
  borderRadius?: number | string;
  borderWidth?: number | string;
  contentPadding?: number | string;
  textFamily?: string;
  textSize?: number | string;
  textWeight?: IFontWeight;
  width?: number | string;
  height?: number | string;
  iconSize?: number | string;
  iconWeight?: number;
  lineHeight?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;

  // The following slots are specific to Split Button and aren't used if the split property is not present.
  splitContentPadding?: number | string;
  splitBackgroundColor?: string;
  splitBackgroundColorHovered?: string;
  splitBackgroundColorPressed?: string;
  splitColor?: string;
  splitColorHovered?: string;
  splitColorPressed?: string;
}

export type IButtonStyles = IComponentStyles<IButtonSlots>;
