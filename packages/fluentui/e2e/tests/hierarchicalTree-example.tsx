import * as React from 'react';
import { HierarchicalTree, HierarchicalTreeItem, HierarchicalTreeTitle } from '@fluentui/react-future';

const items = [
  {
    key: '1',
    title: 'House Lannister',
    items: [
      {
        key: '11',
        title: 'Tywin',
        items: [
          {
            key: '111',
            title: 'Jaime'
          },
          {
            key: '112',
            title: 'Cersei'
          },
          {
            key: '113',
            title: 'Tyrion'
          }
        ]
      },
      {
        key: '21',
        title: 'Kevan',
        items: [
          {
            key: '211',
            title: 'Lancel'
          },
          {
            key: '212',
            title: 'Willem'
          },
          {
            key: '213',
            title: 'Martyn'
          }
        ]
      }
    ]
  },
  {
    key: '2',
    title: 'House Targaryen',
    items: [
      {
        key: '21',
        title: 'Aerys',
        items: [
          {
            key: '211',
            title: 'Rhaegar'
          },
          {
            key: '212',
            title: 'Viserys'
          },
          {
            key: '213',
            title: 'Daenerys'
          }
        ]
      }
    ]
  }
];

export const selectors = {
  treeClass: HierarchicalTree.className,
  treeItemClass: HierarchicalTreeItem.className,
  treeTitleClass: HierarchicalTreeTitle.className
};

const TreeExample = () => <HierarchicalTree items={items} />;

export default TreeExample;
