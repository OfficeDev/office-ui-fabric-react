import * as React from 'react';
import { IStyle } from '@uifabric/styling';
import { IComponentStyles, IPropsWithChildren } from './IComponent';

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
export type ISlottableReactType<TProps extends ValidProps, TShorthandProp extends ValidShorthand> = React.ElementType<TProps> &
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
export type ISlotDefinition<TSlots> = { [slot in keyof TSlots]: React.ElementType<ExtractProps<TSlots[slot]>> };

/**
 * Created Slot structure used for rendering by components.
 */
export interface ISlot<TProps> {
  (componentProps: IPropsWithChildren<TProps> | undefined | null): ReturnType<React.FunctionComponent>;
  isSlot?: boolean;
}

/**
 * Interface for a slot factory that consumes both component and user slot prop and generates rendered output.
 */
export type ISlotFactory<TProps extends ValidProps, TShorthandProp extends ValidShorthand> = (
  componentProps: TProps & IProcessedSlotProps,
  userProps: ISlotProp<TProps, TShorthandProp>,
  slotOptions: ISlotOptions<TProps> | undefined,
  defaultStyles: IStyle
) => ReturnType<React.FunctionComponent<TProps>>;

/**
 * Defines valid shorthand prop types. These should match the defaultProp type provided to createComponent.
 */
export type ValidShorthand = string | number | boolean;

/**
 * Defines valid prop types.
 */
// We can constrain TProps more clearly (notably also exclude Functions) once this TS PR is merged:
// https://github.com/Microsoft/TypeScript/pull/29317
export type ValidProps = object;

/**
 * Extracts props type from ISlotProp definition.
 */
export type ExtractProps<TUnion> = TUnion extends ISlotProp<infer TProps> ? TProps : never;

/**
 * Extracts shorthand type from union of ValidShorthand types.
 */
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

/**
 * Automatically defines 'slots' prop based on TSlots props.
 */
export type ISlottableProps<TSlots> = TSlots & {
  slots?: { [key in keyof TSlots]+?: ISlotOptions<ExtractProps<TSlots[key]>> };
};

/**
 * Defines user properties that are automatically applied by Slot utilities using slot name.
 */
export interface IDefaultSlotProps<TSlots> {
  _defaultStyles: IComponentStyles<TSlots>;
}

/**
 * Defines the primary slot prop interface components should use to define their slot props.
 */
// TODO: Constrain TProps more clearly (notably also exclude Functions) once this TS PR is merged:
// https://github.com/Microsoft/TypeScript/pull/29317
export type ISlotProp<TProps extends ValidProps, TShorthandProp extends ValidShorthand = never> = TShorthandProp | TProps;

/**
 * Defines the slot options object for all slot props:
 *    1. ISlotRender function.
 *    2. React component with TProps interface.
 */

// TODO: create mutually exclusive type for component & render, but only if it's a readable error for users.
export interface ISlotOptions<TProps> {
  component?: React.ElementType<TProps>;
  render?: ISlotRender<TProps>;
}

/**
 * Content rendering provided by component.
 */
export type ISlotRender<TProps> = (
  props: IPropsWithChildren<TProps>,
  defaultComponent: React.ComponentType<TProps>
) => ReturnType<React.FunctionComponent<TProps>>;
