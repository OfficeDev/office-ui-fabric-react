import { Dropdown } from '@fluentui/react-northstar';

const selectors = {
  triggerButton: `.${Dropdown.slotClassNames.triggerButton}`,
  item: (itemIndex: number) => `.${Dropdown.slotClassNames.itemsList} li:nth-child(${itemIndex})`,
};

const config: ScreenerTestsConfig = {
  themes: ['teams', 'teamsDark', 'teamsHighContrast'],
  steps: [
    builder => builder.click(selectors.triggerButton).snapshot('Shows list'),
    builder =>
      builder
        .click(selectors.triggerButton)
        .click(selectors.item(3))
        .snapshot('Selects an item')
        .click(selectors.triggerButton)
        .snapshot('Opens with selected item highlighted')
        .hover(selectors.item(2))
        .snapshot('Highlights another item')
        .click(selectors.triggerButton)
        .snapshot('Closes the list'),
    (builder, keys) =>
      builder
        .keys('body', keys.tab)
        .snapshot('Focuses trigger')
        .keys(selectors.triggerButton, keys.downArrow)
        .snapshot('Focuses first item')
        .keys(selectors.triggerButton, keys.downArrow)
        .snapshot('Focuses second item'),
  ],
};

export default config;
