import { Input } from '@fluentui/react-future';

const config: ScreenerTestsConfig = {
  steps: [builder => builder.setValue(`.${Input.className} input`, 'Some text...').snapshot('Can be clearable')],
  themes: ['teams', 'teamsDark', 'teamsHighContrast']
};

export default config;
