import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { CheckboxPageProps as ExternalProps } from '@fluentui/react-examples/lib/office-ui-fabric-react/Checkbox/Checkbox.doc';
import { ISideRailLink } from '@uifabric/example-app-base/lib/index2';

const related: ISideRailLink[] = [];

export const CheckboxPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
};
