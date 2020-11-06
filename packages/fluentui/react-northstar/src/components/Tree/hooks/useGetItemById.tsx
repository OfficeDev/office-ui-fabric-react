import * as React from 'react';
import { BaseFlatTree, BaseFlatTreeItem } from './flattenTree';

type GetyItemById = (id: string) => BaseFlatTreeItem;

/**
 * This hook returns a stable `getItemById()` function that will lookup in latest `flatTree`.
 * This is used used to have stable callbacks that can be passed to React's Context.
 */
export function useGetItemById(flatTree: BaseFlatTree): GetyItemById {
  // An exception is thrown there to ensure that a proper callback will assigned to ref
  const callbackRef = React.useRef<GetyItemById>(() => {
    throw new Error('Callback is not assigned yet');
  });
  // We are assigning a callback during render as it can be used during render and in event handlers
  callbackRef.current = itemId => {
    return flatTree[itemId];
  };
  return React.useCallback<GetyItemById>((...args) => {
    return callbackRef.current(...args);
  }, []);
}
