import * as React from 'react';
import { CommandBarButton } from 'office-ui-fabric-react/lib/Button';
import { IOverflowSetItemProps, OverflowSet } from 'office-ui-fabric-react/lib/OverflowSet';

const noOp = () => undefined;

const onRenderItem = (item: IOverflowSetItemProps): JSX.Element => {
  return (
    <CommandBarButton
      role="menuitem"
      aria-label={item.name}
      styles={{ root: { padding: '10px' } }}
      iconProps={{ iconName: item.icon }}
      onClick={item.onClick}
    />
  );
};

const onRenderOverflowButton = (overflowItems: any[] | undefined): JSX.Element => {
  return (
    <CommandBarButton
      role="menuitem"
      title="More items"
      styles={{ root: { padding: '10px' }, menuIcon: { fontSize: '16px' } }}
      menuIconProps={{ iconName: 'More' }}
      menuProps={{ items: overflowItems! }}
    />
  );
};

export const OverflowSetVerticalExample: React.FC = () => (
  <OverflowSet
    aria-label="Vertical Example"
    role="menubar"
    vertical
    items={[
      {
        key: 'item1',
        icon: 'Add',
        name: 'Link 1',
        ariaLabel: 'New. Use left and right arrow keys to navigate',
        onClick: noOp,
      },
      {
        key: 'item2',
        icon: 'Upload',
        name: 'Link 2',
        onClick: noOp,
      },
      {
        key: 'item3',
        icon: 'Share',
        name: 'Link 3',
        onClick: noOp,
      },
    ]}
    overflowItems={[
      {
        key: 'item4',
        icon: 'Mail',
        name: 'Overflow Link 1',
        onClick: noOp,
      },
      {
        key: 'item5',
        icon: 'Calendar',
        name: 'Overflow Link 2',
        onClick: noOp,
      },
    ]}
    onRenderOverflowButton={onRenderOverflowButton}
    onRenderItem={onRenderItem}
  />
);
