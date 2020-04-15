import { ChatMessage } from '@fluentui/react-northstar';

const selectors = {
  message: `.${ChatMessage.deprecated_className}`,
};

const config: ScreenerTestsConfig = {
  themes: ['teams', 'teamsDark', 'teamsHighContrast'],
  steps: [
    builder => builder.hover(selectors.message).snapshot('Hovers the first message'),
    builder => builder.click(selectors.message).snapshot('Focus the first message via mouse click'),
    (builder, keys) => builder.keys('body', keys.tab).snapshot('Focuses a message via keyboard'),
  ],
};

export default config;
