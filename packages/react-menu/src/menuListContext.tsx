import * as React from 'react';

const MenuListContext = React.createContext<MenuListContext>({
  checkedValues: {},
  onCheckedValueChange: () => null,
});

export interface MenuListContext {
  checkedValues?: Record<string, string[]>;
  onCheckedValueChange?: (name: string, items: string[]) => void;
}

export const MenuListProvider = MenuListContext.Provider;

export const useMenuListContext = () => React.useContext(MenuListContext);
