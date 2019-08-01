import * as React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import {
  Actionable,
  ActionButton,
  CommandBarButton,
  CompoundButton,
  DefaultButton,
  IconButton,
  MenuButton,
  MessageBarButton,
  PrimaryButton,
  SplitButton,
  ISplitButtonProps
} from 'office-ui-fabric-react/lib/Button.next';

const tokens = {
  sectionStack: {
    childrenGap: 32
  },
  buttonStack: {
    childrenGap: 12
  }
};

const ButtonStack = (props: { children: JSX.Element[] | JSX.Element }) => (
  <Stack horizontal disableShrink tokens={tokens.buttonStack}>
    {props.children}
  </Stack>
);

// tslint:disable:jsx-no-lambda
export class ButtonVariantsExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    const menuProps: ISplitButtonProps['menu'] = {
      items: [
        {
          key: 'a',
          name: 'Item a'
        },
        {
          key: 'b',
          name: 'Item b'
        }
      ]
    };

    return (
      <Stack tokens={tokens.sectionStack}>
        <Stack tokens={tokens.buttonStack}>
          <ButtonStack>
            <Actionable content="Actionable" />
            <Actionable disabled content="Disabled Actionable" />
          </ButtonStack>
          <ButtonStack>
            <DefaultButton content="Default button" />
            <DefaultButton disabled content="Disabled default button" />
            <PrimaryButton content="Primary button" />
            <PrimaryButton disabled content="Disabled primary button" />
          </ButtonStack>
          <ButtonStack>
            <ActionButton content="Action button" />
            <ActionButton disabled content="Disabled action button" />
          </ButtonStack>
          <ButtonStack>
            <CommandBarButton content="Command bar button" />
            <CommandBarButton disabled content="Disabled command bar button" />
          </ButtonStack>
          <ButtonStack>
            <CompoundButton content="Compound button" secondaryText="Enabled" />
            <CompoundButton primary content="Compound button" secondaryText="Primary Enabled" />
            <CompoundButton disabled content="Compound button" secondaryText="Disabled" />
            <CompoundButton primary disabled content="Compound button" secondaryText="Primary Disabled" />
          </ButtonStack>
          <ButtonStack>
            <Stack horizontal verticalAlign="center">
              <Text>Icon Button:</Text>
              <IconButton icon={{ iconName: 'Emoji2' }} ariaLabel="Icon button" />
              <IconButton disabled icon={{ iconName: 'Emoji2' }} ariaLabel="Disabled icon button" />
            </Stack>
          </ButtonStack>
          <ButtonStack>
            <MessageBarButton content="Default" />
            <MessageBarButton primary content="Primary" />
            <MessageBarButton disabled content="Disabled" />
            <MessageBarButton primary disabled content="P Disabled" />
          </ButtonStack>
          <ButtonStack>
            <MenuButton content="Button" menu={menuProps} />
            <MenuButton primary content="Button" menu={menuProps} />
            <MenuButton disabled content="Button" menu={menuProps} />
            <MenuButton primary disabled content="Button" menu={menuProps} />
          </ButtonStack>
          <ButtonStack>
            <SplitButton content="Button" menu={menuProps} />
            <SplitButton disabled content="Button" menu={menuProps} />
            <SplitButton primary content="Button" menu={menuProps} />
            <SplitButton disabled primary content="Button" menu={menuProps} />
            <SplitButton primaryActionDisabled content="Button" menu={menuProps} />
            <SplitButton primaryActionDisabled primary content="Button" menu={menuProps} />
          </ButtonStack>
        </Stack>
      </Stack>
    );
  }
}
