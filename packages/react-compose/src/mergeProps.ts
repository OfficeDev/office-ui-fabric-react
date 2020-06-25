import { ComposePreparedOptions, MergePropsResult, GenericDictionary } from './types';
import { resolveClasses } from './resolveClasses';
import { resolveSlotProps } from './resolveSlotProps';

/**
 * Merge props takes in state and compose options, and resolves slots and slotProps.
 * It's expected that the component will call mergeProps(state, options) from within
 * render; after resolving state and before rendering slots and slotProps.
 */
export function mergeProps<
  TProps,
  TState = TProps,
  TSlots = GenericDictionary,
  // tslint:disable-next-line:no-any
  TSlotProps = { [key in keyof TSlots]: any }
>(state: TState, options: ComposePreparedOptions<TProps, TState>): MergePropsResult<TState, TSlots, TSlotProps> {
  const result: MergePropsResult<TState> = {
    state: state,
    slots: {
      ...options.slots,
      // tslint:disable-next-line:no-any
      root: (state as any).as || options.slots.root || 'div',
    },
    slotProps: {},
  };

  // Resolve classes.
  resolveClasses(result, options.classes);

  // Resolve slotProps/slots from state.
  resolveSlotProps(result, options);

  // TODO: Resolve inline styles.

  return result as MergePropsResult<TState, TSlots, TSlotProps>;
}
