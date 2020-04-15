import { Button } from '@fluentui/react-northstar';

const config: ScreenerTestsConfig = {
  steps: [builder => builder.hover(`.${Button.deprecated_className}`).snapshot('RTL: Shows tooltip')],
};

export default config;
