import { IStyle } from '@uifabric/styling';
import { IComponentStyles, IPropsWithChildren } from './IComponent';

// TODO: replace JSX.Element with ReturnType
// TODO: update comments
/**
 * Signature of components that have component factories.
 */
export interface ISlotCreator<TProps extends ValidProps, TShorthandProp extends ValidShorthand> {
  create?: ISlotFactory<TProps, TShorthandProp>;
}

/**
 * Slottable version of React.ComponentType.
 */
export type ISlottableComponentType<TProps extends ValidProps, TShorthandProp extends ValidShorthand> = React.ComponentType<TProps> &
  ISlotCreator<TProps, TShorthandProp>;

/**
 * Slottable version of React.ReactType.
 */
export type ISlottableReactType<TProps extends ValidProps, TShorthandProp extends ValidShorthand> = React.ReactType<TProps> &
  ISlotCreator<TProps, TShorthandProp>;

/**
 * Props generated by Foundation.
 */
export interface IProcessedSlotProps {
  className?: string;
}

/**
 * An interface for defining slots. Each key in TSlot must point to an ISlottableType.
 */
export type ISlotDefinition<TSlots> = { [slot in keyof TSlots]: React.ReactType<ExtractProps<TSlots[slot]>> };

/**
 * Created Slot structure used for rendering by components.
 */
export type ISlot<TProps> = ((componentProps: IPropsWithChildren<TProps> | undefined | null) => JSX.Element) & { isSlot?: boolean };

/**
 * Interface for a slot factory that consumes both component and user slot prop and generates rendered output.
 */
export type ISlotFactory<TProps extends ValidProps, TShorthandProp extends ValidShorthand> = (
  componentProps: TProps & IProcessedSlotProps,
  userProps: ISlotProp<TProps, TShorthandProp>,
  defaultStyles: IStyle
) => JSX.Element;

export type ValidShorthand = string | number | boolean;

// We can constrain TProps more clearly (notably also exclude Functions) once this TS PR is merged:
// https://github.com/Microsoft/TypeScript/pull/29317
export type ValidProps = object;

export type ExtractProps<TUnion> = TUnion extends ISlotProp<infer TProps> ? TProps : never;

export type ExtractShorthand<TUnion> = TUnion extends boolean
  ? boolean
  : TUnion extends number
  ? number
  : TUnion extends string
  ? string
  : never;

/**
 * Interface for aggregated slots objects used internally by components. Extract the TProps type passed
 * into ISlotProp<TProps> to define the ISlot using TProps.
 */

export type ISlots<TSlots> = { [slot in keyof TSlots]: ISlot<ExtractProps<TSlots[slot]>> };

// TODO: Make note that excess property checks (mistyped prop names) will NOT error due to union of shorthand and functions.
//       Increased type safety can be accomplished by declaring props objects separately before assigning to "props" in options bag.
//       This should get fixed in TS3.5 with merge of https://github.com/Microsoft/TypeScript/pull/30853

export type ISlotProps<TSlots> = { [key in keyof TSlots]: ISlotProp<ExtractProps<TSlots[key]>, ExtractShorthand<TSlots[key]>> };

/**
 * User properties that are automatically applied by Slot utilities using slot name.
 */
export interface IDefaultSlotProps<TSlots> {
  _defaultStyles: IComponentStyles<TSlots>;
}

/**
 * Slot type used for defining Slot props. This interface defines the following slot properties:
 *    1. Shorthand (optional)
 *    2. ISlotOptions object.
 */
// TODO: Constrain TProps more clearly (notably also exclude Functions) once this TS PR is merged:
// https://github.com/Microsoft/TypeScript/pull/29317
export type ISlotProp<TProps extends ValidProps, TShorthandProp extends ValidShorthand = never> = TShorthandProp | ISlotOptions<TProps>;

/**
 * Slot type used for defining Slot props. This interface defines the following slot properties:
 *    1. Component props object (defined by TProps.)
 *    2. ISlotRender function.
 *    3. Optional shorthand prop type, defined by TShorthandProp.
 * The conditional type check automatically applies 'children' prop to TProps if TShorthandProp is ReactNode.
 */

// TODO: create mutually exclusive type for component & render, but only if it's a readable error for users.
export interface ISlotOptions<TProps> {
  // TODO: Really want this to work but it completely breaks TS's ability to infer TProps.
  //       Infer ends up resolving to {} | TProps, which allows anything. May be a TS bug that should be isolated.
  // props?: TProps | TShorthandProp;
  props?: TProps;
  component?: React.ReactType<TProps>;
  render?: ISlotRender<TProps>;
}

/**
 * Content rendering provided by component.
 */
// TODO: remove use of JSX.Element and use ReturnType all over. should support returning nulls.
export type ISlotRender<TProps> = (props: IPropsWithChildren<TProps>, defaultComponent: React.ComponentType<TProps>) => JSX.Element;
