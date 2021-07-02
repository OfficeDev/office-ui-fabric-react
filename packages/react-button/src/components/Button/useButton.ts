import * as React from 'react';
import { resolveShorthand } from '@fluentui/react-utilities';
import { ButtonProps, ButtonSlots, ButtonState } from './Button.types';
import { useButtonState } from './useButtonState';

/**
 * Consts listing which props are shorthand props.
 */
export const buttonShorthandProps: Array<keyof ButtonSlots> = ['children', 'icon'];

/**
 * Given user props, returns state and render function for a Button.
 */
export const useButton = (props: ButtonProps, ref: React.Ref<HTMLElement>): ButtonState => {
  const state: ButtonState = {
    ref,
    ...props,
    size: props.size ?? 'medium',
    components: {
      root: 'button',
      icon: 'span',
    },
    children: resolveShorthand(props.children),
    icon: resolveShorthand(props.icon),
  };
  useButtonState(state);

  return state;
};
