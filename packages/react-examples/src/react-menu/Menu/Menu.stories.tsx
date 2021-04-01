import * as React from 'react';
import {
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuItemRadio,
  MenuItemCheckbox,
  MenuGroup,
  MenuDivider,
  MenuGroupHeader,
  MenuProps,
} from '@fluentui/react-menu';
import { CutIcon, PasteIcon, EditIcon, AcceptIcon } from '@fluentui/react-icons-mdl2';
import { boolean } from '@storybook/addon-knobs';

export const TextOnly = (props: Pick<MenuProps, 'onHover' | 'onContext' | 'defaultOpen'>) => (
  <Menu onHover={props.onHover} onContext={props.onContext} defaultOpen={props.defaultOpen}>
    <MenuTrigger>
      <button>Toggle menu</button>
    </MenuTrigger>

    <MenuList>
      <MenuItem>New </MenuItem>
      <MenuItem>New Window</MenuItem>
      <MenuItem disabled>Open File</MenuItem>
      <MenuItem>Open Folder</MenuItem>
    </MenuList>
  </Menu>
);

export const AligningWithIcons = () => (
  <Menu hasIcons hasCheckmarks>
    <MenuTrigger>
      <button>Toggle menu</button>
    </MenuTrigger>
    <MenuList>
      <MenuItem>Cut</MenuItem>
      <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
      <MenuItem>Edit</MenuItem>
    </MenuList>
  </Menu>
);

export const AligningWithSelectableItems = () => (
  <Menu hasIcons hasCheckmarks>
    <MenuTrigger>
      <button>Toggle menu</button>
    </MenuTrigger>
    <MenuList>
      <MenuItemCheckbox icon={<CutIcon />} name="edit" value="cut">
        Checkbox item
      </MenuItemCheckbox>
      <MenuItem>Menu item</MenuItem>
      <MenuItem>Menu item</MenuItem>
    </MenuList>
  </Menu>
);

export const DefaultOpen = () => <TextOnly defaultOpen />;

export const ControlledPopup = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Menu open={open}>
      <MenuTrigger>
        <button onClick={() => setOpen(s => !s)}>Toggle menu</button>
      </MenuTrigger>

      <MenuList>
        <MenuItem>New </MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>Open File</MenuItem>
        <MenuItem>Open Folder</MenuItem>
      </MenuList>
    </Menu>
  );
};

export const MenuTriggerInteractions = () => {
  const context = boolean('context', false);
  const hover = boolean('hover', false);

  return <TextOnly onContext={context} onHover={hover} />;
};

export const NestedSubmenus = () => (
  <Menu>
    <MenuTrigger>
      <button>Toggle menu</button>
    </MenuTrigger>

    <MenuList>
      <MenuItem>New </MenuItem>
      <MenuItem>New Window</MenuItem>
      <MenuItem disabled>Open File</MenuItem>
      <MenuItem>Open Folder</MenuItem>
      <Menu>
        <MenuTrigger>
          <MenuItem>Preferences</MenuItem>
        </MenuTrigger>

        <MenuList>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Online Services Settings</MenuItem>
          <MenuItem>Extensions</MenuItem>
          <Menu>
            <MenuTrigger>
              <MenuItem>Appearance</MenuItem>
            </MenuTrigger>

            <MenuList>
              <MenuItem>Centered Layout</MenuItem>
              <MenuItem>Zen</MenuItem>
              <MenuItem disabled>Zoom In</MenuItem>
              <MenuItem>Zoom Out</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuTrigger>
              <MenuItem>Editor Layout</MenuItem>
            </MenuTrigger>

            <MenuList>
              <MenuItem>Split Up</MenuItem>
              <MenuItem>Split Down</MenuItem>
              <MenuItem>Single</MenuItem>
            </MenuList>
          </Menu>
        </MenuList>
      </Menu>
    </MenuList>
  </Menu>
);

export const SelectionGroup = () => (
  <Menu>
    <MenuTrigger>
      <button>Toggle menu</button>
    </MenuTrigger>

    <MenuList>
      <MenuGroup>
        <MenuGroupHeader>Checkbox group</MenuGroupHeader>
        <MenuItemCheckbox
          secondaryContent="Ctrl+N"
          icon={<CutIcon />}
          name="edit"
          value="cut"
          checkmark={<AcceptIcon />}
        >
          Show Menu Bar
        </MenuItemCheckbox>
        <MenuItemCheckbox
          secondaryContent="Ctrl+Shift+N"
          icon={<PasteIcon />}
          name="edit"
          value="paste"
          checkmark={<AcceptIcon />}
        >
          Show Side Bar
        </MenuItemCheckbox>
        <MenuItemCheckbox
          secondaryContent="Ctrl+Shift+O"
          icon={<EditIcon />}
          name="edit"
          value="edit"
          checkmark={<AcceptIcon />}
        >
          Show Status Bar
        </MenuItemCheckbox>
        <MenuItemCheckbox disabled icon={<EditIcon />} name="disabled" value="disabled" checkmark={<AcceptIcon />}>
          Show Debug Panel
        </MenuItemCheckbox>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup>
        <MenuGroupHeader>Radio group</MenuGroupHeader>
        <MenuItemRadio
          secondaryContent="Ctrl+N"
          icon={<CutIcon />}
          name="font"
          value="segoe"
          checkmark={<AcceptIcon />}
        >
          Segoe
        </MenuItemRadio>
        <MenuItemRadio
          secondaryContent="Ctrl+Shift+N"
          icon={<PasteIcon />}
          name="font"
          value="calibri"
          checkmark={<AcceptIcon />}
        >
          Caliri
        </MenuItemRadio>
        <MenuItemRadio
          secondaryContent="Ctrl+Shift+N"
          icon={<EditIcon />}
          name="font"
          value="arial"
          checkmark={<AcceptIcon />}
        >
          Arial
        </MenuItemRadio>
      </MenuGroup>
    </MenuList>
  </Menu>
);
