import * as React from 'react';
import { makeMergeProps, resolveShorthandProps } from '@fluentui/react-utilities';
import { PresenceBadgeProps, PresenceBadgeState } from './PresenceBadge.types';
import { useBadge } from '../Badge/index';

/**
 * Consts listing which props are shorthand props.
 */
export const presenceBadgeShorthandProps: (keyof PresenceBadgeProps)[] = ['icon'];

const mergeProps = makeMergeProps<PresenceBadgeState>({ deepMerge: presenceBadgeShorthandProps });

/**
 * Returns the props and state required to render the component
 */
export const usePresenceBadge = (
  props: PresenceBadgeProps,
  ref: React.Ref<HTMLElement>,
  defaultProps?: PresenceBadgeProps,
): PresenceBadgeState => {
  const state = mergeProps(
    useBadge(props, ref),
    {
      size: 'small',
      status: 'available',
      outOfOffice: false,
    },
    defaultProps,
    resolveShorthandProps(props, presenceBadgeShorthandProps),
  );

  return state;
};
