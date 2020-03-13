import { Button } from '@fluentui/react-experimental';

const config: ScreenerTestsConfig = {
  themes: ['teams', 'teamsDark', 'teamsHighContrast'],
  steps: [builder => builder.click(`.${Button.className}`).snapshot('Shows popup')]
};

export default config;
