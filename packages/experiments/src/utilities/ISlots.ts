import { IStyle } from '@uifabric/styling';
import { IComponentStyles } from './IComponent';

/**
 * Signature of components that have component factories.
 */
export interface ISlotCreator<TProps> {
  create?: ISlotFactory<TProps>;
}

/**
 * Slottable version of React.ComponentType.
 */
export type ISlottableComponentType<TProps> = React.ComponentType<TProps> & ISlotCreator<TProps>;

/**
 * Slottable version of React.ReactType.
 */
export type ISlottableReactType<TProps> = React.ReactType<TProps> & ISlotCreator<TProps>;

/**
 * Props generated by Foundation.
 */
export interface IProcessedSlotProps {
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
 * An interface for defining slots. Each key in TSlot must point to an ISlottableType.
 */
export type ISlotDefinition<TSlots> = { [prop in keyof TSlots]: ISlottableReactType<TSlots[prop]> };

/**
 * Created Slot structure used for rendering by components.
 */
export type ISlot<TProps> = ((componentProps: IPropsWithChildren<TProps> | undefined | null) => JSX.Element) & { isSlot?: boolean };

/**
 * Interface for a slot factory that consumes both componnent and user slot prop and generates rendered output.
 */
export type ISlotFactory<TProps> = (
  componentProps: TProps & IProcessedSlotProps,
  userProps: ISlotPropRenderFunction<TProps> | (ISlotPropValue<TProps> & IProcessedSlotProps) | undefined,
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
 * Slot type used for defining Slot props. This interface defines the following slot properties:
 *    1. ISlotPropValue.
 *    2. ISlotRender function.
 */
export type ISlotProp<TProps, TShorthandPropType = never> =
  | ISlotPropValue<TProps, TShorthandPropType>
  | ISlotPropRenderFunction<TProps, TShorthandPropType>;

/**
 * Slot type used for defining Slot props. This interface defines the following slot properties:
 *    1. Component props object (defined by TProps.)
 *    2. ISlotRender function.
 *    3. Optional shorthand prop type, defined by TShorthandPropType.
 * The conditional type check automatically applies 'children' prop to TProps if TShorthandPropType is ReactNode.
 */
export type ISlotPropValue<TProps, TShorthandPropType = never> =
  | TShorthandPropType
  | TProps
  | (TShorthandPropType extends React.ReactNode ? IPropsWithChildren<TProps> : never);

/**
 * Render function interface used by Slot props.
 */
export type ISlotPropRenderFunction<TProps, TShorthandPropType = never> = (
  render: ISlotRenderer<TProps, TShorthandPropType>
) => JSX.Element;

/**
 * Render function interface used by Slot props.
 */
export type ISlotRenderer<TProps, TShorthandPropType = never> = (
  renderContent: ISlotRender<TProps>,
  props?: ISlotPropValue<TProps, TShorthandPropType>
) => JSX.Element;

/**
 * Content rendering provided by component.
 */
export type ISlotRender<TProps> = (componentType: React.ReactType<TProps>, props: TProps) => JSX.Element;
