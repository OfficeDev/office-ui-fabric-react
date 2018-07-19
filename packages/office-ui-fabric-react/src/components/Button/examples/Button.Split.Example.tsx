import * as React from 'react';
import { css, classNamesFunction } from '../../../Utilities';
import { getStyles, IButtonBasicExampleStyleProps, IButtonBasicExampleStyles } from './Button.Basic.Example.styles';
import { DefaultButton, IconButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { getCustomSplitButtonStyles } from './Button.Split.Example.styles';

const alertClicked = (): void => {
  alert('Clicked');
};

export class ButtonSplitExample extends React.Component<IButtonProps> {
  public render(): JSX.Element {
    const { disabled, checked } = this.props;

    const getClassNames = classNamesFunction<IButtonBasicExampleStyleProps, IButtonBasicExampleStyles>();
    const classNames = getClassNames(getStyles, {});

    return (
      <div className={css(classNames.twoup)}>
        <div>
          <Label>Standard</Label>
          <DefaultButton
            data-automation-id="test"
            disabled={disabled}
            checked={checked}
            text="Create account"
            onClick={alertClicked}
            split={true}
            splitButtonAriaLabel={'See 2 sample options'}
            aria-roledescription={'split button'}
            style={{ height: '35px' }}
            menuProps={{
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
            }}
          />
        </div>
        <div>
          <Label>Primary</Label>
          <DefaultButton
            primary
            data-automation-id="test"
            disabled={disabled}
            checked={checked}
            text="Create account"
            onClick={alertClicked}
            split={true}
            aria-roledescription={'split button'}
            style={{ height: '35px' }}
            menuProps={{
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
            }}
          />
        </div>
        <div>
          <Label>Primary Action Disabled</Label>
          <DefaultButton
            primary
            data-automation-id="test"
            disabled={disabled}
            primaryDisabled={true}
            checked={checked}
            text="Create account"
            onClick={alertClicked}
            split={true}
            aria-roledescription={'split button'}
            style={{ height: '35px' }}
            menuProps={{
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
            }}
          />
        </div>
        <div>
          <Label>Button Disabled</Label>
          <DefaultButton
            primary
            data-automation-id="test"
            disabled={true}
            allowDisabledFocus={true}
            checked={checked}
            text="Create account"
            onClick={alertClicked}
            onKeyPress={alertClicked}
            onKeyDown={alertClicked}
            onKeyUp={alertClicked}
            onMouseDown={alertClicked}
            onMouseUp={alertClicked}
            split={true}
            aria-roledescription={'split button'}
            style={{ height: '35px' }}
            menuProps={{
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
            }}
          />
        </div>
      </div>
    );
  }
}

export class ButtonSplitCustomExample extends React.Component<IButtonProps> {
  public render(): JSX.Element {
    const { disabled, checked } = this.props;
    const customSplitButtonStyles = getCustomSplitButtonStyles();

    return (
      <div>
        <Label>Split button with icon and custom styles</Label>
        <IconButton
          data-automation-id="test"
          disabled={disabled}
          checked={checked}
          iconProps={{ iconName: 'Upload' }}
          text="Create account"
          onClick={alertClicked}
          split={true}
          aria-roledescription={'split button'}
          styles={customSplitButtonStyles}
          menuProps={{
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
          }}
        />
      </div>
    );
  }
}
