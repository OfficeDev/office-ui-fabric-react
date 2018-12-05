import * as React from 'react';
import { Button, IButtonComponent } from '../index';
import { HorizontalStack, Text, VerticalStack } from '@uifabric/experiments';
import { CommandBar, ContextualMenu, Customizer, Icon, IContextualMenuProps, Spinner } from 'office-ui-fabric-react';

const menuItems = [{ key: 'a', name: 'Item a' }, { key: 'b', name: 'Item b' }];
const buttonMenu = (props: IContextualMenuProps) => <ContextualMenu {...props} items={menuItems} />;

const sectionGap = 32;
const headingGap = 16;
const buttonGap = 12;

const ButtonStack = (props: { children: JSX.Element | JSX.Element[] }) => (
  <HorizontalStack gap={buttonGap}>{props.children}</HorizontalStack>
);

const ButtonTheme = {
  scopedSettings: {
    Icon: {
      styles: {
        root: {
          fontSize: 24,
          color: 'purple'
        }
      }
    },
    HorizontalStack: {
      styles: {
        root: {
          background: 'lightblue'
        }
      }
    },
    Text: {
      styles: {
        root: {
          color: 'purple'
        }
      }
    }
  }
};

const TestComponent: React.SFC<{}> = () => {
  return <p>Test SFC</p>;
};

const getButtonStyles: IButtonComponent['styles'] = {
  icon: ButtonTheme.scopedSettings.Icon.styles.root,
  stack: ButtonTheme.scopedSettings.HorizontalStack.styles.root,
  content: ButtonTheme.scopedSettings.Text.styles.root
};

// tslint:disable:jsx-no-lambda
// tslint:disable:jsx-key
const ButtonSet = () => (
  <VerticalStack gap={headingGap} padding={8}>
    <div>
      <VerticalStack gap={buttonGap} maxWidth={600}>
        {/*/////////////////////////////////////////////////////////////////////////////////////////*/}

        {/* TODO: make sure invalid cases still cause TS errors, add invalid cases as typing tests */}

        <VerticalStack gap={buttonGap}>
          <h2>Test SFC</h2>
          <Button content={<TestComponent />} />
        </VerticalStack>

        <VerticalStack gap={buttonGap}>
          <h2>Root Slot</h2>
          <Button icon="share" href="https://developer.microsoft.com/en-us/fabric" content="Root: Implicit 'a' via href prop" />
          {/* <Button icon="share" root='test string (INVALID USE CASE)' content="Root: String (INVALID USE CASE)" />
          <Button icon="share" root={{ testKey: 'test value' }} content="Root: Object (INVALID USE CASE)" /> */}
          <Button icon="share" root={(rootProps, RootType) => <RootType {...rootProps} />} content="Root: Function" />
          <Button
            icon="share"
            root={(rootProps, RootType) => <RootType {...rootProps} />}
            content="Root: Function with Test Children"
            enableTestChildren={true}
          />
        </VerticalStack>

        <VerticalStack gap={buttonGap}>
          <h2>Stack Slot</h2>
          <Button icon="share" content="Stack: Props, as: 'div'" stack={{ as: 'div' }} />
          {/* <Button icon="share" stack='test string (INVALID USE CASE)' content="Stack: String (INVALID USE CASE)" /> */}
          <Button icon="share" stack={{ horizontalAlign: 'left' }} content="Stack: Object, horizontalAlign: left" />
          <Button icon="share" stack={(stackProps, StackType) => <StackType {...stackProps} />} content="Stack: Function" />
          <Button
            icon="share"
            content="Stack: Function, VerticalStack"
            stack={(stackProps, StackType) => <VerticalStack {...stackProps as any} />}
          />
          <Button
            icon="share"
            stack={(stackProps, StackType) => <StackType {...stackProps} />}
            content="Stack: Function with Test Children"
            enableTestChildren={true}
          />
        </VerticalStack>

        <VerticalStack gap={buttonGap}>
          <h2>Icon Slot</h2>
          <Button icon="share" content="Icon: String" />
          <Button icon={{ iconName: 'share' }} content="Icon: Props, iconName: 'share'" />
          <Button
            icon={(iconProps, IconType) => (
              <b>
                Icon: <IconType {...iconProps} iconName="upload" />
              </b>
            )}
            content="Icon: Function, Text + Icon"
          />
          <Button icon={() => <Spinner />} content="Icon: Function, Spinner" />
          <Button icon={<Spinner />} content="Icon: JSX Element, Spinner" />
        </VerticalStack>

        <VerticalStack gap={buttonGap}>
          <h2>Content Slot</h2>
          <Button content={true}>
            <p>Content: Boolean</p>
          </Button>
          <Button content={1}>
            <p>Content: Integer</p>
          </Button>
          <Button content="Content: String" />
          <Button content={{ weight: 'bold', children: 'Content: Props, weight: bold' }} />
          <Button content={() => <Spinner />}>
            <p>Content: Function, Spinner</p>
          </Button>
          <Button
            content={(contentProps, ContentType) => (
              <b>
                Content: <ContentType {...contentProps}>TextType</ContentType>
              </b>
            )}
          >
            <p>Content: Function, Text + ContentType</p>
          </Button>
          <Button content={{ children: 'Content: Child String' }} />
          <Button content={{ children: ['Content: Child 1,', ' Child 2'] }} />
          <Button content={<Text>Content: JSX Element</Text>} />
          <Button content="Content: With Children">
            <p>Button Child 1</p>
            <p>Button Child 2</p>
          </Button>
        </VerticalStack>

        <VerticalStack gap={buttonGap}>
          <h2>Test Slots</h2>
          <Button content="Component Slot children: " enableTestChildren={true} />
          <Button
            content="User Slot children:"
            test1={{ children: ['User Child 1,', ' Child 2'] }}
            test2={{ children: ['User Child 1,', ' Child 2'] }}
          />
          <Button
            content={{
              children: ['User and Component Slot children:', <br />, "User's Children should ", <br />, "replace Component's Children"]
            }}
            test1={{ children: ['User Child 1,', ' Child 2'] }}
            test2={{ children: ['User Child 1,', ' Child 2'] }}
            enableTestChildren={true}
          />
          <Button
            content="User Slot function with children:"
            test1={() => <Text>Function Child</Text>}
            test2={() => <Text>Function Child</Text>}
            enableTestChildren={true}
          />
          <Button
            content="User Slot JSX Element with children:"
            test1={<Text>JSX Child</Text>}
            test2={<Text>JSX Child</Text>}
            enableTestChildren={true}
          />
        </VerticalStack>

        <VerticalStack gap={buttonGap}>
          <h2>Styled Buttons</h2>
          <Button icon={{ iconName: 'share', styles: ButtonTheme.scopedSettings.Icon.styles }} content="Icon as IIconProps with styles" />
          <Button icon="share" content={{ children: 'Text as ITextProps with styles', styles: ButtonTheme.scopedSettings.Text.styles }} />
          <Button icon={{ iconName: 'share', styles: { root: { color: 'red' } } }} styles={getButtonStyles} content="Button styles prop" />
          <Customizer {...ButtonTheme}>
            <Button icon={{ iconName: 'share' }} content="Button scopedSettings" />
          </Customizer>
        </VerticalStack>

        {/*/////////////////////////////////////////////////////////////////////////////////////////*/}

        {/*/////////////////////////////////////////////////////////////////////////////////////////*/}

        <ButtonStack>
          <Button content="Default button" />
          <Button disabled content="Disabled default button" />
          <Button primary content="Primary button" />
          <Button disabled primary content="Primary disabled button" styles={{}} />
        </ButtonStack>
        <ButtonStack>
          <Button icon="PeopleAdd" circular />
          <Button icon="Phone" circular disabled />
          <Button icon="FontSize" circular primary />
          <Button icon="Attach" circular primary disabled />
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
            <VerticalStack padding="8px 0" as="span" gap={4} horizontalAlign="left">
              <Text>I am a compound multiline button.</Text>
              <Text variant="caption">I can have a caption.</Text>
            </VerticalStack>
          </Button>
          <Button disabled content="Menu disabled button" />
          <Button expanded content="Menu expanded button" />
        </ButtonStack>
        <CommandBar items={[{ key: '0', text: 'Button 1', iconProps: { iconName: 'Upload' } }]} />
      </VerticalStack>
    </div>
  </VerticalStack>
);

export class ButtonExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <VerticalStack gap={sectionGap}>
        <ButtonSet />
      </VerticalStack>
    );
  }
}
