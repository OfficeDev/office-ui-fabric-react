import * as React from 'react';
import { SplitButton } from '@fluentui/react-button';
import { ContextualMenu } from '@fluentui/react';

const alertClicked = (): void => {
  console.log('Clicked');
};

const menuProps = {
  items: [
    {
      key: 'emailMessage',
      text: 'Email message',
      iconProps: { iconName: 'Mail' },
    },
    {
      key: 'calendarEvent',
      text: 'Calendar event',
      iconProps: { iconName: 'Calendar' },
    },
  ],
};

const Scenario = () => (
  <SplitButton text="I am a button" onClick={alertClicked} menu={<ContextualMenu {...menuProps} />} />
);

export default Scenario;
