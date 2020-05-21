import * as faker from 'faker';
import * as React from 'react';
import * as keyboardKey from 'keyboard-key';

import { ReactWrapper } from 'enzyme';
import { mountWithProvider as mount } from 'test/utils';
import { isConformant, implementsShorthandProp, implementsWrapperProp } from 'test/specs/commonTests';

import Input, { inputSlotClassNames } from 'src/components/Input/Input';
import Box from 'src/components/Box/Box';

const testValue = 'test value';
const htmlInputAttrs = ['id', 'name', 'pattern', 'placeholder', 'type', 'value'];

const getInputAttrsObject = (value: string) =>
  htmlInputAttrs.reduce((acc, attr) => {
    acc[attr] = value;
    return acc;
  }, {});

const getInputDomNode = (inputComp: ReactWrapper): HTMLInputElement =>
  inputComp.find('input').getDOMNode() as HTMLInputElement;

const setUserInputValue = (inputComp: ReactWrapper, value: string) => {
  inputComp.find('input').simulate('change', { target: { value } });
};

describe('Input', () => {
  isConformant(Input, {
    constructorName: 'Input',
    eventTargets: {
      onChange: 'input',
      onKeyDown: 'input',
      onKeyPress: 'input',
      onKeyUp: 'input',
    },
    autoControlledProps: ['value'],
  });
  implementsShorthandProp(Input)('input', Box, { mapsValueToProp: 'type' });
  describe('wrapper', () => {
    implementsShorthandProp(Input)('wrapper', Box, { mapsValueToProp: 'children' });
    implementsWrapperProp(Input, { wrapppedComponentSelector: 'input' });
  });
  it('renders a text <input> by default', () => {
    const inputComp = mount(<Input />);
    expect(inputComp.find('input[type="text"]').length).toBeGreaterThan(0);
  });
  describe('input related HTML attribute', () => {
    const inputAttrsObject = getInputAttrsObject(testValue);
    const domNode = getInputDomNode(mount(<Input {...inputAttrsObject} />));
    htmlInputAttrs.forEach(attr => {
      it(`'${attr}' is set correctly to '${testValue}'`, () => {
        expect(domNode[attr]).toEqual(testValue);
      });
    });
  });
  describe('clearable', () => {
    it('calls onChange on Clearable icon click with an `empty` value', () => {
      const onChange = jest.fn();
      const wrapper = mount(<Input clearable defaultValue={faker.lorem.word()} onChange={onChange} />);
      wrapper
        .find(`.${inputSlotClassNames.icon}`)
        .first()
        .simulate('click');
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'click' }),
        expect.objectContaining({ value: '' }),
      );
    });
    it('calls onChange on Escape key with an `empty` value and stops propagation when has content', () => {
      const onChange = jest.fn();
      const stopPropagation = jest.fn();
      const nativeEventStopPropagation = jest.fn();
      const wrapper = mount(<Input clearable defaultValue={faker.lorem.word()} onChange={onChange} />);
      wrapper.find('input').simulate('keydown', {
        keyCode: keyboardKey.Escape,
        key: 'Escape',
        stopPropagation,
        nativeEvent: { stopPropagation: nativeEventStopPropagation },
      });
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'keydown' }),
        expect.objectContaining({ value: '' }),
      );
      expect(stopPropagation).toHaveBeenCalledTimes(1);
      expect(nativeEventStopPropagation).toHaveBeenCalledTimes(1);
    });
    it('does not call onChange and does not stop propagation if is already empty', () => {
      const onChange = jest.fn();
      const stopPropagation = jest.fn();
      const nativeEventStopPropagation = jest.fn();
      const wrapper = mount(<Input clearable defaultValue={''} onChange={onChange} />);
      wrapper.find('input').simulate('keydown', {
        keyCode: keyboardKey.Escape,
        key: 'Escape',
        stopPropagation,
        nativeEvent: { stopPropagation: nativeEventStopPropagation },
      });
      expect(onChange).not.toBeCalled();
      expect(stopPropagation).not.toBeCalled();
      expect(nativeEventStopPropagation).not.toBeCalled();
    });
  });
  describe('icon', () => {
    const SearchIcon = () => <span />;
    it('creates the Icon component when the icon shorthand is provided', () => {
      const inputComp = mount(<Input icon={<SearchIcon />} />);
      expect(inputComp.find('SearchIcon').length).toBeGreaterThan(0);
    });
    it('creates an empty Icon component when the clearable prop is provided and the input has content, removes the icon and value when the icon is clicked', () => {
      const inputComp = mount(<Input clearable />);
      const domNode = getInputDomNode(inputComp);
      setUserInputValue(inputComp, testValue); // user types into the input
      const iconComp = inputComp.find(`Box[className~="${inputSlotClassNames.icon}"]`);
      expect(domNode.value).toEqual(testValue); // input value is the one typed by the user
      expect(iconComp.length).toBeGreaterThan(0); // the 'x' icon appears
      iconComp.simulate('click'); // user clicks on 'x' icon
      expect(domNode.value).toEqual(''); // input value gets cleared
      expect(inputComp.find(`Box[className~="${inputSlotClassNames.icon}"]`).length).toEqual(0); // the 'x' icon disappears
    });
  });
  it('disabled prop makes the input un-actionable', () => {
    const inputComp = mount(<Input disabled />);
    const domNode = getInputDomNode(inputComp);
    expect(domNode).toHaveAttribute('disabled');
    setUserInputValue(inputComp, testValue); // user types into the input
    expect(domNode.value).toEqual(''); // but nothing happens
    domNode.focus();
    expect(domNode).not.toHaveFocus();
    domNode.click();
    expect(domNode).not.toHaveFocus();
  });
});
