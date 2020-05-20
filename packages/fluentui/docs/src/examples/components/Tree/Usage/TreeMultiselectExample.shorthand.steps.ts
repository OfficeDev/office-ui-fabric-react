import { treeItemClassName, treeTitleClassName, treeTitleSlotClassNames } from '@fluentui/react-northstar';

const selectors = {
  treeTitle: (itemIndex: number) => `.${treeItemClassName}:nth-of-type(${itemIndex}) .${treeTitleClassName}`,
  treeItem: (itemIndex: number) => `.${treeItemClassName}:nth-of-type(${itemIndex})`,
  selectionIndicator: (itemIndex: number) =>
    `.${treeItemClassName}:nth-of-type(${itemIndex}) .${treeTitleSlotClassNames.indicator}`,
};

const config: ScreenerTestsConfig = {
  themes: ['teams', 'teamsDark', 'teamsHighContrast'],
  steps: [
    (builder, keys) =>
      builder
        .click(selectors.treeTitle(1))
        .snapshot('first expanded, not custom checkbox visible')
        .click(selectors.treeTitle(2))
        .click(selectors.treeTitle(6))
        .snapshot('default selected states')
        .click(selectors.treeTitle(10))
        .click(selectors.treeTitle(11))
        .click(selectors.selectionIndicator(12))
        .snapshot('selected, when clicked on selection indicator')
        .click(selectors.treeTitle(13))
        .snapshot('selected, when clicked on selection indicator')
        .click(selectors.treeTitle(4))
        .snapshot('selected, when group partially selected')
        .click(selectors.selectionIndicator(2))
        .snapshot('all children selected')
        .keys(selectors.treeTitle(7), keys.space)
        .snapshot('selected, when space pressed')
        .click(selectors.treeTitle(15))
        .keys(selectors.treeTitle(16), keys.space)
        .keys(selectors.treeTitle(17), keys.space)
        .snapshot('selected, when group has non selectable item')
        .keys(selectors.treeItem(15), keys.space)
        .snapshot('toggle group selected'),
  ],
};

export default config;
