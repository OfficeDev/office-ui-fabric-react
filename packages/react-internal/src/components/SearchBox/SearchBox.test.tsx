import * as React from 'react';
import { ReactTestRenderer } from 'react-test-renderer';
import { create } from '@fluentui/utilities/lib/test';
import { mount, ReactWrapper } from 'enzyme';
import { SearchBox } from './SearchBox';
import { KeyCodes, resetIds } from '../../Utilities';
import { ISearchBoxProps } from './SearchBox.types';
import { isConformant } from '../../common/isConformant';

describe('SearchBox', () => {
  let component: ReactTestRenderer | undefined;
  let wrapper: ReactWrapper<ISearchBoxProps> | undefined;

  beforeEach(() => {
    resetIds();
  });

  afterEach(() => {
    if (component) {
      component.unmount();
      component = undefined;
    }
    if (wrapper) {
      wrapper.unmount();
      wrapper = undefined;
    }
  });

  isConformant({
    Component: SearchBox,
    displayName: 'SearchBox',
  });

  it('renders SearchBox correctly', () => {
    component = create(<SearchBox />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders SearchBox role on the container div', () => {
    wrapper = mount(<SearchBox role="search" />);

    expect(wrapper.getDOMNode().getAttribute('role')).toEqual('search');
  });

  it('can execute an onClick on clear button', () => {
    let clickExecuted = false;
    wrapper = mount(
      <SearchBox
        clearButtonProps={{
          onClick: () => (clickExecuted = true),
        }}
      />,
    );

    expect(wrapper.find('input').prop('value')).toEqual('');

    wrapper.find('input').simulate('change', { target: { value: 'New value' } });

    expect(wrapper.find('input').prop('value')).toEqual('New value');

    wrapper.find('button').simulate('click');

    expect(clickExecuted).toEqual(true);

    expect(wrapper.find('input').prop('value')).toEqual('');
  });

  it('renders SearchBox without animation correctly', () => {
    component = create(<SearchBox disableAnimation={true} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('can execute search when SearchBox is empty', () => {
    let searchExecuted = false;
    wrapper = mount(<SearchBox onSearch={() => (searchExecuted = true)} />);

    wrapper.find('input').simulate('keydown', { which: KeyCodes.enter });
    expect(searchExecuted).toEqual(true);
  });

  it('has a default icon with empty iconProps', () => {
    wrapper = mount(<SearchBox iconProps={{}} />);
    const searchIcon = '';
    expect(wrapper.find('i').text()).toEqual(searchIcon);
  });

  it('supports overriding the icon iconName', () => {
    wrapper = mount(
      <SearchBox
        iconProps={{
          iconName: 'Filter',
        }}
      />,
    );

    const filterIcon = '';
    expect(wrapper.find('i').text()).toEqual(filterIcon);
  });

  it('supports native props on inner input', () => {
    wrapper = mount(<SearchBox autoComplete="on" />);
    const inputEl = wrapper.find('input').getDOMNode();
    const autocompleteVal = inputEl.getAttribute('autocomplete');

    expect(autocompleteVal).toBe('on');
  });

  it('supports setting a placeholder value', () => {
    const placeholder = 'Search';
    wrapper = mount(<SearchBox placeholder={placeholder} />);
    const inputEl = wrapper.find('input').getDOMNode();
    const placeholderVal = inputEl.getAttribute('placeholder');

    expect(placeholderVal).toBe(placeholder);
  });

  it('supports setting id on input', () => {
    wrapper = mount(<SearchBox id="foo" />);
    expect(wrapper.find('input').prop('id')).toBe('foo');
  });

  it('generates id for input if none passed in', () => {
    wrapper = mount(<SearchBox />);
    expect(wrapper.find('input').prop('id')).toBeTruthy();
  });

  it('only invokes onFocus callback once per focus event', () => {
    const onFocus = jest.fn();
    wrapper = mount(<SearchBox onFocus={onFocus} />);
    wrapper.simulate('focus');

    expect(onFocus.mock.calls.length).toBe(1);
  });

  it('can be disabled via props', () => {
    wrapper = mount(<SearchBox disabled />);
    const inputEl = wrapper.find('input').getDOMNode();
    const disabledVal = inputEl.getAttribute('disabled');

    expect(disabledVal).toBe('');
  });

  it('is not disabled by default', () => {
    wrapper = mount(<SearchBox />);
    const inputEl = wrapper.find('input').getDOMNode();
    const disabledVal = inputEl.getAttribute('disabled');

    expect(disabledVal).toBeFalsy();
  });

  it('handles setting value', () => {
    wrapper = mount(<SearchBox value="test" />);
    expect(wrapper.find('input').prop('value')).toBe('test');
  });

  it('handles updating value to empty string', () => {
    wrapper = mount(<SearchBox value="test" />);
    wrapper.setProps({ value: '' });
    expect(wrapper.find('input').prop('value')).toBe('');
  });

  it('handles setting null value', () => {
    // this is not allowed per typings, but users might do it anyway
    wrapper = mount(<SearchBox value={null as any} />);
    expect(wrapper.find('input').prop('value')).toBe(`null`);
  });

  it('handles rendering 0', () => {
    wrapper = mount(<SearchBox value={0 as any} />);
    // this is not allowed per typings, but users might do it anyway
    expect(
      wrapper
        .find('input')
        .getDOMNode()
        .getAttribute('value'),
    ).toBe('0');
  });

  it('invokes escape and clear callbacks on escape keydown', () => {
    const onEscape = jest.fn();
    const onClear = jest.fn();
    const keyDownEvent = new CustomEvent('keydown');
    (keyDownEvent as any).which = KeyCodes.escape;

    wrapper = mount(<SearchBox onEscape={onEscape} onClear={onClear} />);
    wrapper.find('input').simulate('keydown', keyDownEvent);

    expect(onEscape.mock.calls.length).toBe(1);
    expect(onClear.mock.calls.length).toBe(1);
  });

  it('invokes search callback on enter keydown', () => {
    const onSearch = jest.fn();
    const keyDownEvent = new CustomEvent('keydown');
    (keyDownEvent as any).which = KeyCodes.enter;

    wrapper = mount(<SearchBox onSearch={onSearch} />);
    wrapper.find('input').simulate('keydown', keyDownEvent);

    expect(onSearch.mock.calls.length).toBe(1);
  });

  it('invokes keydown callback on keydown', () => {
    const onKeyDown = jest.fn();
    const keyDownEvent = new CustomEvent('keydown');

    wrapper = mount(<SearchBox onKeyDown={onKeyDown} />);
    wrapper.find('input').simulate('keydown', keyDownEvent);

    expect(onKeyDown.mock.calls.length).toBe(1);
  });
});
