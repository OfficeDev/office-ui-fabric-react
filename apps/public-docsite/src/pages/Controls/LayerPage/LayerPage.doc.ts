import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { LayerPageProps as ExternalProps } from '@fluentui/react-examples/lib/react/Layer/Layer.doc';
import { ISideRailLink } from '@fluentui/react-docsite-components/lib/index2';

const related: ISideRailLink[] = [];

export const LayerPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
};
