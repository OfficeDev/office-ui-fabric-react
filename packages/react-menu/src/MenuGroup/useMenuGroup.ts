import * as React from 'react';
import { makeMergeProps, resolveShorthandProps } from '@fluentui/react-utils';
import { MenuGroupProps, MenuGroupState } from './MenuGroup.types';

const mergeProps = makeMergeProps<MenuGroupProps>();
let count = 0;

/** Returns the props and state required to render the component */
export const useMenuGroup = (
  props: MenuGroupProps,
  ref: React.Ref<HTMLElement>,
  defaultProps?: MenuGroupProps,
): MenuGroupState => {
  // Ensure that the `ref` prop can be used by other things (like useFocusRects) to refer to the root.
  // NOTE: We are assuming refs should not mutate to undefined. Either they are passed or not.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const resolvedRef = ref || React.useRef();
  // TODO better way to generate IDs
  const headerId = React.useRef<string>(`menu-group-${count++}`);
  const mergedProps = mergeProps(
    {
      ref: resolvedRef,
      as: 'div',
      'aria-labelledby': headerId.current,
      role: 'group',
    },
    defaultProps,
    resolveShorthandProps(props, []),
  );

  return mergedProps;
};
