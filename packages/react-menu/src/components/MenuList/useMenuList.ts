import * as React from 'react';
import {
  makeMergeProps,
  resolveShorthandProps,
  useMergedRefs,
  useEventCallback,
  useControllableValue,
} from '@fluentui/react-utilities';
import { MenuListProps, MenuListState } from './MenuList.types';

const mergeProps = makeMergeProps<MenuListState>();

/**
 * Returns the props and state required to render the component
 */
export const useMenuList = (
  props: MenuListProps,
  ref: React.Ref<HTMLElement>,
  defaultProps?: MenuListProps,
): MenuListState => {
  const state = mergeProps(
    {
      ref: useMergedRefs(ref, React.useRef(null)),
      role: 'menu',
    },
    defaultProps,
    resolveShorthandProps(props, []),
  );

  const [checkedValues, setCheckedValues] = useControllableValue(state.checkedValues, {});
  state.checkedValues = checkedValues;
  const { onCheckedValueChange } = state;
  state.toggleCheckbox = useEventCallback(
    (e: React.MouseEvent | React.KeyboardEvent, name: string, value: string, checked: boolean) => {
      const checkedItems = checkedValues?.[name] || [];
      const newCheckedItems = [...checkedItems];
      if (checked) {
        newCheckedItems.splice(newCheckedItems.indexOf(value), 1);
      } else {
        newCheckedItems.push(value);
      }

      onCheckedValueChange?.(e, name, newCheckedItems);
      setCheckedValues(s => ({ ...s, [name]: newCheckedItems }));
    },
  );

  state.selectRadio = useEventCallback((e: React.MouseEvent | React.KeyboardEvent, name: string, value: string) => {
    const newCheckedItems = [value];
    onCheckedValueChange?.(e, name, newCheckedItems);
  });

  return state;
};
