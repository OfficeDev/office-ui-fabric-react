import * as React from 'react';
import { MenuButton } from 'office-ui-fabric-react/lib/MenuButton';

const menuProps = {
  items: [
    {
      key: 'emailMessage',
      text: 'Email message',
      iconProps: { iconName: 'Mail' }
    },
    {
      key: 'calendarEvent',
      text: 'Calendar event',
      iconProps: { iconName: 'Calendar' }
    }
  ]
};

const scenario = <MenuButton content="I am a button" menu={menuProps} />;

export default scenario;
