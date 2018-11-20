import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { IContextualMenuItem } from '../ContextualMenu.types';
import { IMenuItemClassNames } from '../ContextualMenu.classNames';
import { ContextualMenuAnchor } from './ContextualMenuAnchor';

describe('ContextualMenuButton', () => {
  describe('creates a normal button', () => {
    let menuItem: IContextualMenuItem;
    let menuClassNames: IMenuItemClassNames;

    beforeEach(() => {
      menuItem = { key: '123' };
      menuClassNames = getMenuItemClassNames();
    });

    it('renders the contextual menu split button correctly', () => {
      const component = renderer.create(
        <ContextualMenuAnchor item={menuItem} classNames={menuClassNames} index={0} focusableElementIndex={0} totalItemCount={1} />
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('invokes optional onItemClick on anchor node "click"', () => {
      const onClickMock = jest.fn();
      const component = mount(
        <ContextualMenuAnchor
          item={menuItem}
          classNames={menuClassNames}
          index={0}
          focusableElementIndex={0}
          totalItemCount={1}
          hasCheckmarks={true}
          onItemClick={onClickMock}
        />
      );
      component.find('a').simulate('click');
      expect(onClickMock).toHaveBeenCalledTimes(1);
      expect(onClickMock).toBeCalledWith(menuItem, expect.anything());
    });

    it('invokes optional onItemClick on checkmark node "click"', () => {
      const onClickMock = jest.fn();
      const component = mount(
        <ContextualMenuAnchor
          item={menuItem}
          classNames={menuClassNames}
          index={0}
          focusableElementIndex={0}
          totalItemCount={1}
          hasCheckmarks={true}
          onItemClick={onClickMock}
        />
      );
      component
        .find('.checkmarkIcon')
        .at(0)
        .simulate('click');
      expect(onClickMock).toHaveBeenCalledTimes(2);
      expect(onClickMock).toBeCalledWith(menuItem, expect.anything());
    });
  });
});

function getMenuItemClassNames(): IMenuItemClassNames {
  return {
    item: 'item',
    divider: '---',
    root: 'root',
    linkContent: 'linkContent',
    icon: 'icon',
    checkmarkIcon: 'checkmarkIcon',
    subMenuIcon: 'subMenuIcon',
    label: 'label',
    secondaryText: 'secondaryText',
    splitContainer: 'splitContainer',
    splitPrimary: 'splitPrimary',
    splitMenu: 'splitMenu',
    linkContentMenu: 'linkContentMenu'
  };
}
