import * as React from 'react';

const MenuGroupContext = React.createContext<MenuGroupContext>({ headerId: '' });

export interface MenuGroupContext {
  headerId: string;
}

export const MenuGroupContextProvider = MenuGroupContext.Provider;
export const useMenuGroupContext = () => React.useContext(MenuGroupContext);
