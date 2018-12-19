import * as React from 'react';
import { Button as ButtonOld, IButtonProps } from '../index';
import { Button as ButtonNew } from '../Button.new';
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

// TODO: remove useNewSlots everywhere
export class ButtonExample extends React.Component<{ useNewSlots?: boolean }, {}> {
  public render(): JSX.Element {
    const { useNewSlots } = this.props
    const Button: React.SFC<IButtonProps> = (props) => { return useNewSlots ? <ButtonNew useNewSlots {...props} /> : <ButtonOld {...props} /> };

    return (
      <Stack gap={sectionGap}>
        <Stack gap={headingGap} padding={8}>
          <div>
            <Stack gap={buttonGap}>
              <ButtonStack>
                <Button content="Default button" />
                <Button disabled content="Disabled default button" />
              </ButtonStack>
              <ButtonStack>
                <Button primary content="Primary button" />
                <Button disabled primary content="Primary disabled button" />
              </ButtonStack>
              <ButtonStack>
                <Button secondary content="Secondary button" />
                <Button disabled secondary content="Secondary disabled button" />
              </ButtonStack>
              <ButtonStack>
                <Button icon="PeopleAdd" circular styles={{ icon: { color: 'pink ' } }} />
                <Button icon="Phone" circular disabled />
                <Button icon="FontSize" circular primary />
                <Button icon="Attach" circular primary disabled />
                <Button icon="FontSize" circular secondary />
                <Button icon="Attach" circular secondary disabled />
              </ButtonStack>
              <ButtonStack>
                <Button icon="Upload" content="Button with string icon" />
                <Button icon={{ iconName: 'Share' }} content="Button with iconProps" />
                <Button icon={<Icon iconName="Download" />} content="Button with custom icon" />
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
                <Button content="Menu button" menu={buttonMenu} />
                <Button disabled content="Menu disabled button" menu={buttonMenu} />
                <Button expanded content="Menu expanded button" />
                <Button expanded primary content="Menu expanded primary button" />
              </ButtonStack>
              <ButtonStack>
                <Button icon="Share" menu={buttonMenu}>
                  <Stack padding="8px 0" as="span" horizontalAlign="start">
                    <Text>I am a compound multiline button.</Text>
                    <Text variant="small">I can have a caption.</Text>
                  </Stack>
                </Button>
                <Button disabled content="Menu disabled button" />
                <Button expanded content="Menu expanded button" />
              </ButtonStack>
              <CommandBar items={[{ key: '0', text: 'Button 1', iconProps: { iconName: 'Upload' } }]} />
            </Stack>
          </div>
        </Stack>
      </Stack>
    );
  }
}
