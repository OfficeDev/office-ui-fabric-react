import * as React from 'react';
import { Menu, MenuTrigger, MenuList, MenuItem, MenuProps, MenuPopover } from '../index';

export const TabOrder = (props: Partial<MenuProps>) => (
  <Menu {...props}>
    <MenuTrigger>
      <button>FOOBAR</button>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuItem>New </MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>Open File</MenuItem>
        <MenuItem>Open Folder</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);

export default {
  title: 'Components/Menu',
  component: Menu,
};
