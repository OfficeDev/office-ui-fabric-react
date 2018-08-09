import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { IContextualMenuItemStyles, IContextualMenuItem } from '../ContextualMenuItem.types';
import { ContextualMenuSplitButton } from './ContextualMenuSplitButton';
import { IProcessedStyleSet } from '@uifabric/styling/lib/MergeStyles';

describe('ContextualMenuSplitButton', () => {
  describe('creates a normal split button', () => {
    let menuItem: IContextualMenuItem;
    let menuClassNames: IProcessedStyleSet<IContextualMenuItemStyles>;

    beforeEach(() => {
      menuItem = { key: '123' };
      menuClassNames = getMenuItemClassNames();
    });

    it('renders the contextual menu split button correctly', () => {
      const component = renderer.create(
        <ContextualMenuSplitButton
          item={menuItem}
          classNames={menuClassNames}
          index={0}
          focusableElementIndex={0}
          totalItemCount={1}
        />
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

function getMenuItemClassNames(): IProcessedStyleSet<IContextualMenuItemStyles> {
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
    linkContentMenu: 'linkContentMenu',
    anchorLink: 'anchorLink',
    iconColor: 'iconColor',
    subComponentStyles: {}
  };
}
