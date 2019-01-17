import { IStyle, IFontWeight } from '@uifabric/styling';
import { IComponent, IHTMLDivSlot, IStyleableComponentProps } from '../../../Foundation';
import { ITextSlot } from '../../../Text';
import { IPersonaCoinSlot } from '../../PersonaCoin/PersonaCoin.types';

export type IVerticalPersonaComponent = IComponent<IVerticalPersonaProps, IVerticalPersonaTokens, IVerticalPersonaStyles>;

// These types are redundant with IVerticalPersonaComponent but are needed until TS function return widening issue is resolved:
// https://github.com/Microsoft/TypeScript/issues/241
// For now, these helper types can be used to provide return type safety when specifying tokens and styles functions.
export type IVerticalPersonaTokenReturnType = ReturnType<Extract<IVerticalPersonaComponent['tokens'], Function>>;
export type IVerticalPersonaStylesReturnType = ReturnType<Extract<IVerticalPersonaComponent['styles'], Function>>;

export interface IVerticalPersonaSlots {
  root?: IHTMLDivSlot;
  primaryText?: ITextSlot;
  secondaryText?: ITextSlot;
  coin?: IPersonaCoinSlot;
}

// Extending IStyleableComponentProps will automatically add stylable props for you, such as styles and theme.
// If you don't want these props to be included in your component, just remove this extension.
export interface IVerticalPersonaProps
  extends IVerticalPersonaSlots,
    IStyleableComponentProps<IVerticalPersonaProps, IVerticalPersonaTokens, IVerticalPersonaStyles> {
  vertical: true;
  text: string;
  styleVariables?: IVerticalPersonaStyleVariableTypes;
}

export interface IVerticalPersonaTokens {}

export interface IVerticalPersonaStyles {
  root?: IStyle;
  primaryText?: IStyle;
  secondaryText?: IStyle;
  coin?: IStyle; // TODO: Check if this works after Jason his PR
}

// TODO: convert this to tokens
export interface IVerticalPersonaStyleVariableTypes {
  verticalPersonaWidth: number;
  text: ITextStyleVariables;
  primaryText: IPrimaryTextStyleVariables;
  secondaryText: ISecondaryTextStyleVariables;
}

export interface ITextStyleVariables {
  height: number;
  fontFamily: string;
  textPaddingLeftAndRight: number;
}

export interface IPrimaryTextStyleVariables {
  paddingTop: string;
  fontSize: string;
  fontWeight: IFontWeight;
}

export interface ISecondaryTextStyleVariables {
  paddingTop: string;
  fontSize: string;
}
