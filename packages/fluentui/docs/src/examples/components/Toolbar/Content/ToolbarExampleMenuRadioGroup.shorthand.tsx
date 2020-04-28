import { Toolbar, ShorthandValue, BoxProps } from '@fluentui/react-northstar';
import * as React from 'react';
import { MoreIcon, UnderlineIcon, FontColorIcon } from '@fluentui/react-icons-northstar';

const ToolbarExampleMenuRadioGroup = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [menuOpen, setMenuOpen] = React.useState();

  const toolbarItem = (itemName: string, itemIcon: ShorthandValue<BoxProps>) => ({
    key: itemName,
    content: itemName,
    icon: itemIcon,
    title: itemName,
  });

  return (
    <Toolbar
      aria-label="Toolbar can contain a radio group in a menu"
      items={[
        toolbarItem('underline', <UnderlineIcon />),
        toolbarItem('font color', <FontColorIcon />),
        {
          icon: <MoreIcon />,
          key: 'more',
          active: menuOpen,
          title: 'More',
          menu: [
            {
              key: 'group',
              activeIndex,
              kind: 'group',
              items: [
                { key: 'left', content: 'Left' },
                { key: 'center', content: 'Center' },
                { key: 'right', content: 'Right' },
                { key: 'justify', content: 'Justify' },
              ],
              onItemClick: (e, data) => setActiveIndex(data.index),
            },
            { key: 'divider', kind: 'divider' },
            'About...',
          ],
          menuOpen,
          onMenuOpenChange: (e, { menuOpen }) => {
            setMenuOpen(menuOpen);
          },
        },
      ]}
    />
  );
};

export default ToolbarExampleMenuRadioGroup;
