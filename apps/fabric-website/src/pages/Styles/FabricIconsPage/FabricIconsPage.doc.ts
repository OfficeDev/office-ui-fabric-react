import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';

const title = 'Fluent UI Icons';
const componentUrl =
  'https://github.com/microsoft/fluentui/tree/7.0/apps/fabric-website/src/pages/Styles/FabricIconsPage';

export const FabricIconsPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/FabricIconsPage/docs/web/FabricIconsOverview.md') as string,
    componentUrl,
  },
};
