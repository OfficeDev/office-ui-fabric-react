import * as React from 'react';
import { IContextualMenuItem, ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import './ContextualMenuExample.scss';

export class ContextualMenuBasicExample extends React.Component {

  constructor(props: {}) {
    super(props);
    this.state = {
      showCallout: false
    };
  }

  public render() {
    return (
      <div>
        <DefaultButton
          id='ContextualMenuButton1'
          text='Click for ContextualMenu'
          menuProps={ {
            shouldFocusOnMount: true,
            items: [
              _createItem('New'),
              {
                key: 'divider_1',
                itemType: ContextualMenuItemType.Divider
              },
              {
                key: 'rename',
                name: 'Rename',
                onClick: () => console.log('Rename clicked')
              },
              {
                key: 'edit',
                name: 'Edit',
                onClick: () => console.log('Edit clicked')
              },
              {
                key: 'properties',
                name: 'Properties',
                onClick: () => console.log('Properties clicked')
              },
              {
                key: 'linkNoTarget',
                name: 'Link same window',
                href: 'http://bing.com'
              },
              {
                key: 'linkWithTarget',
                name: 'Link new window',
                href: 'http://bing.com',
                target: '_blank'
              },
              {
                key: 'disabled',
                name: 'Disabled item',
                disabled: true,
                onClick: () => console.error('Disabled item should not be clickable.')
              }
            ]
          } }
        />
      </div>
    );
  }

}

function _createItem(name: string): IContextualMenuItem {
  const item: IContextualMenuItem = {
    key: name,
    name,
    onClick: () => {
      console.log(`${name} clicked`);
    }
  };

  return item;
}