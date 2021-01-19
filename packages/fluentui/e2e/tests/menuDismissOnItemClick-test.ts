import { menuItemClassName } from '@fluentui/react-northstar';

const menuItem = `.${menuItemClassName}`;

const firstSubmenuItem = '#first';
const secondSubmenuItem = '#second';

const firstSubmenu = '#firstSubmenu';
const secondSubmenu = '#secondSubmenu';

describe('Dismiss Menu on Item Click', () => {
  beforeEach(async () => {
    await e2e.gotoTestCase(__filename, menuItem);
  });

  describe('Mouse interactions', () => {
    it('Should close submenu on click', async () => {
      await e2e.expectHidden(firstSubmenu);

      await e2e.clickOn(menuItem);
      await e2e.exists(firstSubmenu);

      await e2e.clickOn(firstSubmenuItem);
      await e2e.expectHidden(firstSubmenu);
    });

    it('Should keep open on click of item with submenu', async () => {
      await e2e.expectHidden(secondSubmenu);
      await e2e.expectHidden(firstSubmenu);

      await e2e.clickOn(menuItem);
      await e2e.exists(firstSubmenu);
      await e2e.expectHidden(secondSubmenu);

      await e2e.clickOn(secondSubmenuItem);
      await e2e.exists(firstSubmenu);
      await e2e.exists(secondSubmenu);
    });
  });

  describe('Keyboard interactions', () => {
    it('Should close on click', async () => {
      await e2e.expectHidden(firstSubmenu);
      await e2e.focusOn(menuItem);
      await e2e.waitForSelectorAndPressKey(menuItem, 'Enter');
      await e2e.exists(firstSubmenu);
      await e2e.waitForSelectorAndPressKey(firstSubmenuItem, 'Enter');
      await e2e.expectHidden(firstSubmenu);
    });

    it('Should keep open on click of item with submenu', async () => {
      await e2e.expectHidden(secondSubmenu);
      await e2e.expectHidden(firstSubmenu);
      await e2e.focusOn(menuItem);
      await e2e.waitForSelectorAndPressKey(menuItem, 'Enter');
      await e2e.exists(firstSubmenu);
      await e2e.focusOn(secondSubmenuItem);
      await e2e.waitForSelectorAndPressKey(secondSubmenuItem, 'Enter');
      await e2e.exists(secondSubmenu);
    });
  });
});
