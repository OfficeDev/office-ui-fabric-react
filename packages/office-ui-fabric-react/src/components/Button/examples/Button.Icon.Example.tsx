import * as React from 'react';
import { IconButton, IIconProps, IContextualMenuProps, Stack, Link } from 'office-ui-fabric-react';

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

const emojiIcon: IIconProps = { iconName: 'Emoji2' };

const menuProps: IContextualMenuProps = {
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
  directionalHintFixed: true,
};

export const ButtonIconExample: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked } = props;

  return (
    <div>
      <Stack tokens={{ childrenGap: 8 }} horizontal>
        <IconButton iconProps={emojiIcon} title="Emoji" ariaLabel="Emoji" disabled={disabled} checked={checked} />
        <IconButton
          menuProps={menuProps}
          iconProps={emojiIcon}
          title="Emoji"
          ariaLabel="Emoji"
          disabled={disabled}
          checked={checked}
        />
      </Stack>
      <p>
        For a list of Icons, visit our{' '}
        <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/icons">Icon documentation</Link>.
      </p>
    </div>
  );
};
