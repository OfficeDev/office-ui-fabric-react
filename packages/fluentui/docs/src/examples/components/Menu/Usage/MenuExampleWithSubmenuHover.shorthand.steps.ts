import { menuItemWrapperClassName } from '@fluentui/react-northstar';

const selectors = {
  item: (itemIndex: number) => `.${menuItemWrapperClassName} li:nth-child(${itemIndex}) a`,
};

const config: ScreenerTestsConfig = {
  themes: ['teams', 'teamsDark', 'teamsHighContrast'],
  steps: [
    (builder, keys) =>
      builder
        .hover(selectors.item(1))
        .click(selectors.item(1))
        .snapshot('Hovers 1st item, open menu and kep it open on click')
        .hover(selectors.item(3))
        .snapshot('Hovers 2nd item, open submenu'),
  ],
};

export default config;
