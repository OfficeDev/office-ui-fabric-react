import * as React from 'react';
import { Button } from '../index';
import { Stack, Text } from '@uifabric/experiments';
import { ContextualMenu, IContextualMenuProps, Icon, CommandBar } from 'office-ui-fabric-react';

const menuItems = [{ key: 'a', name: 'Item a' }, { key: 'b', name: 'Item b' }];
const buttonMenu = (props: IContextualMenuProps) => <ContextualMenu {...props} items={menuItems} />;

const sectionGap = 32;
const headingGap = 16;
const buttonGap = 12;

const ButtonStack = (props: { children: JSX.Element[] }) => (
  <Stack horizontal gap={buttonGap}>
    {props.children}
  </Stack>
);

const ButtonSet = () => (
  <Stack gap={headingGap} padding={8}>
    <div>
      <Stack gap={buttonGap}>
        <ButtonStack>
          <Button text="Default button" />
          <Button disabled text="Disabled default button" />
          <Button primary text="Primary button" />
          <Button disabled primary text="Primary disabled button" />
        </ButtonStack>
        <ButtonStack>
          <Button icon="PeopleAdd" circular />
          <Button icon="Phone" circular disabled />
          <Button icon="FontSize" circular primary />
          <Button icon="Attach" circular primary disabled />
        </ButtonStack>
        <ButtonStack>
          <Button icon="Upload" text="Button with string icon" />
          <Button icon={{ iconName: 'Share' }} text="Button with iconProps" />
          <Button icon={<Icon iconName="Download" />} text="Button with custom icon" />
        </ButtonStack>
        <ButtonStack>
          <Button>
            <Icon iconName="Upload" />
            <Text>With custom text/icon</Text>
          </Button>
          <Button primary>
            <Text>With custom text/icon right aligned</Text>
            <Icon iconName="Upload" />
          </Button>
        </ButtonStack>
        <ButtonStack>
          <Button text="Menu button" menu={buttonMenu} />
          <Button disabled text="Menu disabled button" menu={buttonMenu} />
          <Button expanded text="Menu expanded button" />
          <Button expanded primary text="Menu expanded primary button" />
        </ButtonStack>
        <ButtonStack>
          <Button icon="Share" menu={buttonMenu}>
            <Stack padding="8px 0" as="span" gap={4} horizontalAlignment="start">
              <Text>I am a compound multiline button.</Text>
              <Text variant="caption">I can have a caption.</Text>
            </Stack>
          </Button>
          <Button disabled text="Menu disabled button" />
          <Button expanded text="Menu expanded button" />
        </ButtonStack>
        <CommandBar items={[{ key: '0', text: 'Button 1', iconProps: { iconName: 'Upload' } }]} />
      </Stack>
    </div>
  </Stack>
);

export class ButtonExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Stack gap={sectionGap}>
        <ButtonSet />
      </Stack>
    );
  }
}
