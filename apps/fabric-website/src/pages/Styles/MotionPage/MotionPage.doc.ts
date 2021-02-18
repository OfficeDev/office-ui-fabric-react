import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';

const title = 'Motion';
const componentUrl = 'https://github.com/microsoft/fluentui/tree/7.0/apps/fabric-website/src/pages/Styles/MotionPage';

export const MotionPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/MotionPage/docs/web/MotionOverview.md') as string,
    componentUrl,
  },
};
