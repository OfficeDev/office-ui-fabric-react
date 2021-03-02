import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { SeparatorPageProps as ExternalProps } from '@fluentui/react-examples/lib/office-ui-fabric-react/Separator/Separator.doc';
import { ISideRailLink } from '@uifabric/example-app-base/lib/index2';

const related: ISideRailLink[] = [
  { text: 'Web Separator', url: '#/controls/web/separator' },
  { text: 'iOS Separator', url: '#/controls/ios/separator' },
  { text: 'Android Separator', url: '#/controls/android/separator' },
  { text: 'Android ListItemDivider', url: '#/controls/android/listcells' },
  { text: 'macOS Separator', url: '#/controls/mac/separator' },
  { text: 'Cross-platform Separator', url: '#/controls/crossplatform/separator' },
];
const componentUrl =
  'https://github.com/microsoft/fluentui/tree/7.0/apps/fabric-website/src/pages/Controls/SeparatorPage';

export const SeparatorPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
  ios: {
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/SeparatorPage/docs/ios/SeparatorOverview.md') as string,
    related,
    componentUrl,
  },
  android: {
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/SeparatorPage/docs/android/SeparatorOverview.md') as string,
    related,
    componentUrl,
  },
  mac: {
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/SeparatorPage/docs/mac/SeparatorOverview.md') as string,
    usage: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/SeparatorPage/docs/mac/SeparatorUsage.md') as string,

    related,
    componentUrl,
  },
  cross: {
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/SeparatorPage/docs/cross/SeparatorOverview.md') as string,
    usage: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/SeparatorPage/docs/cross/SeparatorUsage.md') as string,
    related,
    componentUrl,
  },
};
