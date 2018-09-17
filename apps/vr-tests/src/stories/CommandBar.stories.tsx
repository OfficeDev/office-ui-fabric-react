/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Screener, { Steps } from 'screener-storybook/src/screener';
import { FabricDecoratorTall, runStories } from '../utilities';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react';

const items: ICommandBarItemProps[] = [
  {
    key: 'newItem',
    text: 'New',
    iconProps: {
      iconName: 'Add'
    },
    subMenuProps: {
      items: [
        {
          key: 'emailMessage',
          text: 'Email message',
          iconProps: {
            iconName: 'Mail'
          }
        },
        {
          key: 'calendarEvent',
          text: 'Calendar event',
          iconProps: {
            iconName: 'Calendar'
          }
        }
      ]
    }
  },
  {
    key: 'upload',
    text: 'Upload',
    iconProps: {
      iconName: 'Upload'
    }
  },
  {
    key: 'share',
    text: 'Share',
    iconProps: {
      iconName: 'Share'
    }
  },
  {
    key: 'download',
    text: 'Download',
    iconProps: {
      iconName: 'Download'
    }
  },
  {
    key: 'disabled',
    text: 'Disabled...',
    iconProps: {
      iconName: 'Cancel'
    },
    disabled: true
  }
];

const farItems: ICommandBarItemProps[] = [
  {
    key: 'sort',
    text: 'Sort',
    iconProps: {
      iconName: 'SortLines'
    }
  },
  {
    key: 'tile',
    text: 'Grid view',
    iconProps: {
      iconName: 'Tiles'
    }
  },
  {
    key: 'info',
    text: 'Info',
    iconProps: {
      iconName: 'Info'
    }
  }
];

const ScreenerDecorator = story => (
  <Screener
    steps={new Screener.Steps()
      .snapshot('default', { cropTo: '.testWrapper' })
      .hover('.ms-CommandBarItem-link')
      .snapshot('hover', { cropTo: '.testWrapper' })
      .click('.ms-CommandBarItem-link')
      .hover('.ms-CommandBarItem-link')
      .snapshot('click', { cropTo: '.testWrapper' })
      .end()}
  >
    {story()}
  </Screener>
);

const allStories = [
  {
    decorators: [FabricDecoratorTall, ScreenerDecorator],
    stories: {
      'Root test': () => <CommandBar items={items} farItems={farItems} />,
      'Text only test': () => (
        <CommandBar
          items={items.map(item => ({ ...item, iconProps: undefined }))}
          farItems={farItems.map(item => ({ ...item, iconProps: undefined }))}
        />
      ),
      'Icons only test': () => (
        <CommandBar
          items={items.map(item => ({ ...item, text: undefined }))}
          farItems={farItems.map(item => ({ ...item, iconOnly: true }))}
        />
      )
    }
  }
];

runStories('CommandBar', allStories);
