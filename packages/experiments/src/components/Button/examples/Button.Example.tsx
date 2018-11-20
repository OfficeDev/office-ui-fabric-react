import * as React from 'react';
import { Button, IButtonComponent } from '../index';
import { HorizontalStack, Text, VerticalStack } from '@uifabric/experiments';
import { ContextualMenu, Customizer, IContextualMenuProps, Icon, CommandBar } from 'office-ui-fabric-react';

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

const getButtonStyles: IButtonComponent['styles'] = {
  icon: ButtonTheme.scopedSettings.Icon.styles.root,
  stack: ButtonTheme.scopedSettings.HorizontalStack.styles.root,
  text: ButtonTheme.scopedSettings.Text.styles.root
};

// TODO: when using a VerticalStack, Buttons fill whole screen horizontally. this seems unexpected.
//        is Button filling space intentional? if not, what is causing this? Button? Stack?
const ButtonSet = () => (
  <VerticalStack gap={headingGap} padding={8}>
    <div>
      <VerticalStack gap={buttonGap} maxWidth={300}>
        {/* <ButtonStack>
          <Button text="Default button" />
          <Button disabled text="Disabled default button" />
          <Button primary text="Primary button" />
          <Button disabled primary text="Primary disabled button" styles={{}} />
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
        </ButtonStack> */}
        <VerticalStack gap={buttonGap}>
          <Button icon="share" text="Icon prop = string" />
          <Button icon={<Icon iconName="share" />} text="Icon prop = element" />
          <Button icon={{ iconName: 'share' }} text="Icon prop = props" />

          <Button icon={{ iconName: 'share' }} styles={getButtonStyles} text="Button styles prop" />
          <Button
            icon={{ iconName: 'share' }}
            text={{ content: 'Text as ITextProps with styles', styles: ButtonTheme.scopedSettings.Text.styles }}
          />
          <Button
            icon={{ iconName: 'share' }}
            stack={{ styles: ButtonTheme.scopedSettings.HorizontalStack.styles }}
            text="Stack as IStackProps with styles"
          />
          <Button icon={{ iconName: 'share', styles: ButtonTheme.scopedSettings.Icon.styles }} text="Icon as IIconProps with styles" />
          <Customizer {...ButtonTheme}>
            <Button icon={{ iconName: 'share' }} text="Button scopedSettings" />
          </Customizer>
        </VerticalStack>
        {/* <ButtonStack>
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
            <VerticalStack padding="8px 0" as="span" gap={4} horizontalAlign="left">
              <Text>I am a compound multiline button.</Text>
              <Text variant="caption">I can have a caption.</Text>
            </VerticalStack>
          </Button>
          <Button disabled text="Menu disabled button" />
          <Button expanded text="Menu expanded button" />
        </ButtonStack>
        <CommandBar items={[{ key: '0', text: 'Button 1', iconProps: { iconName: 'Upload' } }]} /> */}
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
