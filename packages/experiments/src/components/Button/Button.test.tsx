import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { CommandBar, Icon, Text } from 'office-ui-fabric-react';
import { Button } from './Button';

describe('Button', () => {
  it('renders a default Button with content correctly', () => {
    const component = renderer.create(<Button content="Default button" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a disabled default Button with content correctly', () => {
    const component = renderer.create(<Button disabled content="Disabled default button" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot;
  });

  it('renders a primary Button with content correctly', () => {
    const component = renderer.create(<Button primary content="Primary button" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a disabled primary Button with content correctly', () => {
    const component = renderer.create(<Button primary disabled content="Disabled primary button" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a default Button with content and an icon correctly', () => {
    const component = renderer.create(<Button icon="Upload" content="Button with string icon" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot;
  });

  it('renders a primary Button with custom content and icon right-aligned correctly', () => {
    const component = renderer.create(
      <Button primary>
        <Text>With custom text/icon right aligned</Text>
        <Icon iconName="Upload" />
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot;
  });

  it('renders a default circular Button with an icon correctly', () => {
    const component = renderer.create(<Button icon="PeopleAdd" circular />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot;
  });

  it('renders a disabled default circular Button with an icon correctly', () => {
    const component = renderer.create(<Button icon="Phone" circular disabled />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot;
  });

  it('renders a primary circular Button with an icon correctly', () => {
    const component = renderer.create(<Button icon="FontSize" circular primary />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot;
  });

  it('renders a disabled primary circular Button with an icon correctly', () => {
    const component = renderer.create(<Button icon="Attach" circular primary disabled />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot;
  });

  it('renders a Button inside a CommandBar correctly', () => {
    const component = renderer.create(<CommandBar items={[{ key: '0', text: 'Button 1', iconProps: { iconName: 'Upload' } }]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot;
  });

  it('renders a default checked Button correctly', () => {
    const component = renderer.create(<Button checked content="Button" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot;
  });

  it('renders a primary checked Button correctly', () => {
    const component = renderer.create(<Button primary checked content="Button" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot;
  });

  it('renders a default circular checked Button correctly', () => {
    const component = renderer.create(<Button checked circular icon="Volume3" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot;
  });

  it('renders a primary circular checked Button correctly', () => {
    const component = renderer.create(<Button primary checked circular icon="Volume3" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot;
  });

  it('focuses correctly when focus is triggered via IButton interface', () => {
    const wrapper = mount(
      <div>
        <Button content="Button 1" />
        <Button content="Button 2" />
        <Button content="Button 3" />
      </div>
    );

    const buttons = wrapper.getDOMNode().querySelectorAll('button.ms-Button') as NodeListOf<HTMLButtonElement>;
    expect(buttons.length).toEqual(3);

    buttons[0].focus();
    expect(document.activeElement!.textContent).toEqual('Button 1');

    buttons[1].focus();
    expect(document.activeElement!.textContent).toEqual('Button 2');

    buttons[2].focus();
    expect(document.activeElement!.textContent).toEqual('Button 3');
  });
});
