import * as React from 'react';
import { resolveShorthand } from '@fluentui/react-utilities';
import { CompoundButtonProps, CompoundButtonShorthands, CompoundButtonState } from './CompoundButton.types';
import { useButton } from '../Button/useButton';

/**
 * Consts listing which props are shorthand props.
 */
export const compoundButtonShorthandProps: Array<keyof CompoundButtonShorthands> = [
  'children',
  'contentContainer',
  'icon',
  'secondaryContent',
];

/**
 * Given user props, returns state and render function for a Button.
 */
export const useCompoundButton = (props: CompoundButtonProps, ref: React.Ref<HTMLElement>): CompoundButtonState => ({
  ...useButton(props, ref),
  secondaryContent: resolveShorthand(props.secondaryContent),
  contentContainer: resolveShorthand(props.contentContainer, {
    children: React.Fragment,
  }),
});
