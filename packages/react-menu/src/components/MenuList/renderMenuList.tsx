import * as React from 'react';
import { getSlots } from '@fluentui/react-utils';
import { MenuListState } from './MenuList.types';
import { MenuListProvider } from '../../menuListContext';

/**
 * Function that renders the final JSX of the component
 */
export const renderMenuList = (state: MenuListState) => {
  const { slots, slotProps } = getSlots(state);
  const { onCheckedValuesChange, checkedValues } = state;

  return (
    <MenuListProvider value={{ onCheckedValuesChange, checkedValues }}>
      <slots.root {...slotProps.root}>{state.children}</slots.root>
    </MenuListProvider>
  );
};
