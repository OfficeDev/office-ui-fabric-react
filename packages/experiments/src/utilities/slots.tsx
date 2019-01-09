import * as React from 'react';
import { IStyle, mergeStyles } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import {
  IFactoryComponent,
  IFactoryOptions,
  ISlot,
  ISlots,
  ISlotDefinition,
  ISlotFactory,
  ISlotProps,
  ISlotRenderFunction,
  IDefaultSlotProps
} from './ISlots';

/**
 * This function removes Slots from the React hierarchy by wrapping React.createElement and bypassing it for Slot components.
 *
 * To use this function on a per-file basis, put the following in a comment block: @jsx createElementWrapper
 * As of writing, this line must be the FIRST LINE in the file to work correctly.
 *
 * Usage of this pragma also requires an import statement of SlotModule such as: import { createElementWrapper } from '<path>/slots';
 *
 * @see React.createElement
 */
// Can't use typeof on React.createElement since it's overloaded. Approximate createElement's signature for now and widen as needed.
export function createElementWrapper<P>(
  type: ISlot<P> | React.SFC<P> | string,
  props?: React.Attributes & P | null,
  // tslint:disable-next-line:missing-optional-annotation
  ...children: React.ReactNode[]
): React.ReactElement<P> | JSX.Element | null {
  const slotType = type as ISlot<P>;
  if (slotType.isSlot) {
    const numChildren = React.Children.count(children);
    if (numChildren === 0) {
      return slotType(props);
    }

    // Since we are bypassing createElement, use React.Children.toArray to make sure children are properly assigned keys.
    // TODO: should this be mutating? does React mutate children subprop with createElement?
    // TODO: will toArray clobber existing keys?
    children = React.Children.toArray(children);

    return slotType({ ...(props as any), children });
  } else {
    // TODO: Are there some cases where children should NOT be spread? Also, spreading reraises perf question.
    //        Children had to be spread to avoid breaking KeytipData in Toggle.view:
    //        react-dom.development.js:18931 Uncaught TypeError: children is not a function
    //        Without spread, function child is a child array of one element
    return React.createElement(type, props, ...children);
  }
}

/**
 * This function creates factories that render ouput depending on the user ISlotProp props passed in.
 * @param ComponentType Base component to render when not overridden by user props.
 * @param options Factory options, including defaultProp value for shorthand prop mapping.
 * @returns ISlotFactory function used for rendering slots.
 */
export function createFactory<TProps>(
  ComponentType: React.ComponentType<TProps>,
  options: IFactoryOptions<TProps> = { defaultProp: 'children' }
): ISlotFactory<TProps> {
  const result: ISlotFactory<TProps> = (componentProps, userProps, defaultStyles) => {
    const propType = typeof userProps;

    // If they passed in raw JSX, just return that.
    if (React.isValidElement(userProps)) {
      return userProps;
    }

    switch (propType) {
      case 'string':
      case 'number':
      case 'boolean':
        userProps = {
          [options.defaultProp]: userProps as any
        } as TProps;
        break;
    }

    // Construct the final props for the component by merging component props, user props, and the
    // generated class name.
    const finalClassName = mergeStyles(defaultStyles, componentProps && componentProps.className, userProps && userProps.className);

    const finalProps = {
      ...(componentProps as any),
      ...(typeof userProps === 'object' && (userProps as any)),
      className: finalClassName
    };

    // If we're rendering a function, let the user resolve how to render given the original component
    // and final args.
    if (typeof userProps === 'function') {
      return (userProps as ISlotRenderFunction<TProps>)(finalProps, ComponentType);
    }

    return <ComponentType {...finalProps} />;
  };

  return result;
}

/**
 * Default factory for components without explicit factories.
 */
const defaultFactory = memoizeFunction(type => createFactory(type));

/**
 * Render a slot given component and user props. Uses component factory if available, otherwise falls back
 * to default factory.
 * @param ComponentType Factory component type.
 * @param componentProps The properties passed into slot from within the component.
 * @param userProps The user properties passed in from outside of the component.
 */
function renderSlot<TComponent extends IFactoryComponent<TProps>, TProps, TSlots>(
  ComponentType: TComponent,
  componentProps: TProps,
  userProps: TProps,
  defaultStyles: IStyle
): JSX.Element {
  if (ComponentType.create !== undefined) {
    return ComponentType.create(componentProps, userProps, defaultStyles);
  } else {
    return defaultFactory(ComponentType)(componentProps, userProps, defaultStyles);
  }
}

/**
 * This function generates slots that can be used in JSX given a definition of Slots and their corresponding types.
 * @param userProps Props as pass to component.
 * @param slots Slot definition object defining the default slot component for each slot.
 * @returns An set of created slots that components can render in JSX.
 */
export function getSlots<TProps extends TSlots, TSlots extends ISlotProps<TProps, TSlots>>(
  userProps: TProps,
  slots: ISlotDefinition<Required<TSlots>>
): ISlots<Required<TSlots>> {
  const result: ISlots<Required<TSlots>> = {} as ISlots<Required<TSlots>>;
  const processedProps = userProps as TProps & IDefaultSlotProps<TSlots>;

  for (const name in slots) {
    if (slots.hasOwnProperty(name)) {
      if (processedProps && processedProps[name] && React.Children.count(processedProps[name].children) > 0) {
        // TODO: verify this toArray call is needed. explain why in comment, if so
        // TODO: should this be mutating? does React mutate children subprop with createElement?
        // TODO: will toArray clobber existing keys?
        processedProps[name].children = React.Children.toArray(processedProps[name].children);
      }

      const slot: ISlot<keyof TSlots> = componentProps => {
        return renderSlot(
          slots[name],
          // TODO: this cast to any is hiding a relationship issue between the first two args
          componentProps as any,
          processedProps[name],
          processedProps._defaultStyles[name]
        );
      };
      slot.isSlot = true;
      result[name] = slot;
    }
  }

  return result;
}
