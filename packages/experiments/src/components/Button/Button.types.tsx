import { IComponent, ISlotProp, IStyleableComponentProps } from '../../Foundation';
import { IStyle } from '../../Styling';
import { IFontWeight, IRefObject } from 'office-ui-fabric-react';
import { IContextualMenuSlot, IHTMLButtonSlot, IHorizontalStackSlot, IIconSlot, ITextSlot } from '../../utilities/factoryComponents.types';

export type IButtonComponent = IComponent<IButtonProps, IButtonViewProps, IButtonTokens, IButtonStyles>;

// States should only be javascript evaluated states. (Not css states.)
// TODO: remove
export type IButtonStates = 'baseState' | 'enabled' | 'disabled' | 'expanded';

export type IButtonVariants = 'baseVariant' | 'primary' | 'circular';

export type IButtonSlot = ISlotProp<IButtonProps>;

export interface IButtonSlots {
  root?: IHTMLButtonSlot;
  stack?: IHorizontalStackSlot;
  content?: ITextSlot;
  icon?: IIconSlot;
  menu?: IContextualMenuSlot;
  menuIcon?: IIconSlot;
  // TODO: remove, for testing nested Slot components using new createComponent
  button?: IButtonSlot;
}

export interface IButton { }

export interface IButtonProps extends IButtonSlots, IStyleableComponentProps<IButtonProps, IButtonTokens, IButtonStyles> {
  componentRef?: IRefObject<IButton>;
  className?: string;
  href?: string;

  primary?: boolean;
  secondary?: boolean;
  circular?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  defaultExpanded?: boolean;

  // remove
  renderTestButton?: boolean;

  // 'variant' prop vs. boolean for each variant (primary, secondary, circular, etc.)
  // TODO: remove variant prop. make sure new way isn't using
  variant?: IButtonVariants;
  tokens?: IButtonStyleVariablesTypes;

  onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
}

export interface IButtonStyleVariablesTypes {
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

  // TODO: Call this out in PR.
  // TODO: How do we simulate David's "baseState" from the styleVariables approach?
  //        Without that, any theme base tokens will override ALL tokened styles in the component.
  //        The only way around that is to:
  //          1. Assume consumers "safely" apply tokens by guarding against all prop variants
  //          2. Require re-applying component default tokens to each variant.
  //        Both are bad, fragile (will break if tokens are added), uninituitive, and expose implementation.
  //        Other solutions?:
  //          3. Go back to 'variant' prop with `baseState` value?
  //          4. Provide helper to functions such as isBaseVariant()?
  //          5. Some other override token method? Would also need to allow user to override AGAIN for circular and could be messy.
  //          6. Expand tokens as needed? contentPadding and circularContentPadding.. also requires (width, height, minWidth, etc.)
  //              Need to get with Jason Morse about this approach. There are some good arguments to defining a "common" set of tokens
  //              across all component types and variants and claims that Layer provides that ability.
  //        Going with approach 6 for now as it's the easiest to implement and pull out.
  circularBorderRadius?: number | string;
  circularBorderWidth?: number | string;
  circularContentPadding?: number | string;
  circularHeight?: number | string;
  circularWidth?: number | string;
  circularMinHeight?: number | string;
  circularMinWidth?: number | string;
}

// TODO: collapse after old impl is removed
// export type IButtonTokenTypes = IButtonStyleVariablesTypes;
export type IButtonTokens = IButtonStyleVariablesTypes;

export type IButtonStyleVariables = { [PVariant in IButtonVariants]?: { [PState in IButtonStates]?: IButtonStyleVariablesTypes } };
// export type IButtonTokens = Partial<IButtonTokenTypes>;

// TODO: Call this out in PR.
// TODO: How will this approach affect subcomponentStyles?
//        If styles functions have access to slot component's props, is subcomponentStyles still needed?
//        If subcomponentStyles is still needed, the Slots functions won't be looking up styles for it and would need to be modified.
//        Is the IStyle typing correct? In new createComponent, are we merging IStyles or styles of each slot's type?
//        New createComponent changes seem to mixin subcomponent styles objects, which means targeting a subcomponents style sections
//          is now possible:
//          <Button icon="PeopleAdd" circular styles={{ icon: { color: 'pink ' } }} />
//        And this also means the definition of IStyle may not be correct. Should possibly be a lookup on slot's component styles type.
// TODO: centralize these types where possible. for example, this could be:
//        export type IButtonStyles = ISlotComponentStyles<IButtonSlots>;
export type IButtonStyles = { [key in keyof IButtonSlots]: IStyle };

export type IButtonViewProps = IButtonProps & {
  onMenuDismiss: () => void;
  menuTarget: HTMLElement | undefined;
};
