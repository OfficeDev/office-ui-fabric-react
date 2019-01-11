import { IStyle } from '@uifabric/styling';
import { IComponentStyles } from './IComponent';

/**
 * Signature of components that have component factories.
 */
export type IFactoryComponent<TProps> = React.ReactType<TProps> & {
  create?: ISlotFactory<TProps>;
};

export interface IFactoryProps {
  className?: string;
}

/**
 * Factory options for creating component.
 */
export interface IFactoryOptions<TProps> {
  /** Default prop for which to map primitive values. */
  defaultProp: keyof TProps | 'children';
}

/**
 * Helper interface for accessing user props children.
 */
export type IPropsWithChildren<TProps> = TProps & { children?: React.ReactNode };

/**
 * An interface for defining slots. Each key in TSlot must point to an IFactoryComponent.
 */
export type ISlotDefinition<TSlots> = { [prop in keyof TSlots]: IFactoryComponent<TSlots[prop]> };

/**
 * Created Slot structure used for rendering by components.
 */
export type ISlot<TProps> = ((componentProps: IPropsWithChildren<TProps> | undefined | null) => JSX.Element) & { isSlot?: boolean };

/**
 * Interface for a slot factory that consumes both componnent and user slot prop and generates rendered output.
 */
export type ISlotFactory<TProps> = (
  componentProps: TProps & IFactoryProps,
  userProps: (ISlotProp<TProps> & IFactoryProps) | undefined,
  defaultStyles: IStyle
) => JSX.Element;

/**
 * Interface for aggregated slots objects used internally by components.
 */
export type ISlots<TSlots> = { [slot in keyof TSlots]: ISlot<TSlots[slot]> };
export type ISlotProps<TProps extends TSlots, TSlots> = { [key in keyof TSlots]: ISlotProp<TProps[key]> };

/**
 * User properties that are automatically applied by Slot utilities using slot name.
 */
export interface IDefaultSlotProps<TSlots> {
  _defaultStyles: IComponentStyles<TSlots>;
}

/**
 * Helper interface components can use for defining Slot properties. This interface defines the following slot properties:
 *    1. Component props object (defined by TProps.)
 *    2. ISlotRender function.
 *    3. JSX Elements.
 *    4. Optional shorthand prop, defined by TShorthandProp.
 * The conditional type check looks up prop type in TProps if TShorthandProp is a key of TProps, otherwise it treats
 * TShorthandProp as React children. If TShorthandProp is excluded, there is no default prop and no children are allowed.
 */
export type ISlotProp<TProps, TShorthandProp extends keyof TProps | 'children' = never> =
  | TProps
  | JSX.Element
  | ISlotRenderFunction<TProps>
  | (TShorthandProp extends keyof TProps ? TProps[TShorthandProp] : React.ReactNode);

/**
 * Render function interface used by Slot props.
 */
export type ISlotRenderFunction<TProps> = (props: TProps, componentType: React.ReactType<TProps>) => JSX.Element;
