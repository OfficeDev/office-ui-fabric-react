import * as React from 'react';
import { getNativeElementProps } from '@uifabric/utilities';
import { GenericDictionary } from './types';
import { nullRender } from './nullRender';

/**
 * Tiny helper to do the minimal amount of work in duplicating an object but omitting some
 * props. This ends up faster than using object ...rest or reduce to filter.
 *
 * https://jsperf.com/omit-vs-rest-vs-reduce/1
 */
const _omit = <TObj>(obj: TObj, exclusions: GenericDictionary) => {
  const result = {};

  for (const key of Object.keys(obj)) {
    if (!exclusions[key]) {
      (result as GenericDictionary)[key] = (obj as GenericDictionary)[key];
    }
  }

  return result as TObj;
};

/**
 * Given the state and an array of slot names, will break out `slots` and `slotProps`
 * collections.
 *
 * The root is always derived from the `as` prop.
 *
 * Slots will render as null if they are rendered as primitives with undefined children.
 *
 * The slotProps will always omit the `as` prop within them, and for slots that are string
 * primitives, the props will be filtered according the the slot type. For example, if the
 * slot is rendered `as: 'a'`, the props will be filtered for acceptable anchor props.
 *
 * @param state - State including slot definitions
 * @param slotNames - Name of which props are slots
 * @returns An object containing the `slots` map and `slotProps` map.
 */
export const getSlots = (state: GenericDictionary, slotNames?: string[] | undefined) => {
  const slots: GenericDictionary = {
    root: state.as || nullRender,
  };
  const slotProps: GenericDictionary = {
    root: typeof state.as === 'string' ? getNativeElementProps(state.as, state) : _omit(state, { as: 1 }),
  };

  if (slotNames) {
    for (const name of slotNames!) {
      const slotDefinition = state[name];
      const { as: slotAs, children } = slotDefinition;
      const isSlotPrimitive = typeof slotAs === 'string';

      slots[name] = slotDefinition.children !== undefined || !isSlotPrimitive ? slotAs : nullRender;

      if (slots[name] !== nullRender) {
        slotProps[name] = isSlotPrimitive
          ? getNativeElementProps(slotAs, slotDefinition)
          : _omit(slotDefinition, { as: 1 });
      }

      if (children === 'function') {
        slotProps[name].children = children(slots[name], slotDefinition);
        slots[name] = React.Fragment;
      }
    }
  }

  return { slots, slotProps };
};
