import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { PersonaPageProps as ExternalProps } from '@fluentui/react-examples/lib/office-ui-fabric-react/Persona/Persona.doc';
import { ISideRailLink } from '@uifabric/example-app-base/lib/index2';

const related: ISideRailLink[] = [
  { text: 'Web Persona', url: '#/controls/web/persona' },
  { text: 'iOS Persona', url: '#/controls/ios/persona' },
  { text: 'Android Persona', url: '#/controls/android/persona' },
  { text: 'macOS Avatar', url: '#/controls/mac/avatar' },
  { text: 'Cross-platform Persona', url: '#/controls/crossplatform/persona' },
];
const componentUrl =
  'https://github.com/microsoft/fluentui/tree/7.0/apps/fabric-website/src/pages/Controls/PersonaPage';

export const PersonaPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
  ios: {
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/PersonaPage/docs/ios/PersonaOverview.md') as string,
    dos: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/PersonaPage/docs/ios/PersonaDos.md') as string,
    donts: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/PersonaPage/docs/ios/PersonaDonts.md') as string,
    related,
    componentUrl,
  },
  android: {
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/PersonaPage/docs/android/PersonaOverview.md') as string,
    related,
    componentUrl,
  },
  cross: {
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/PersonaPage/docs/cross/PersonaOverview.md') as string,
    usage: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/PersonaPage/docs/cross/PersonaUsage.md') as string,
    related,
    componentUrl,
  },
};
