import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { PeoplePickerPageProps as ExternalProps } from '@fluentui/react-examples/lib/react/PeoplePicker/PeoplePicker.doc';

const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/PeoplePickerPage/docs/PeoplePickerRelated.md') as string;
const componentUrl =
  'https://github.com/microsoft/fluentui/blob/master/packages/react/src/components/pickers/PeoplePicker';

export const PeoplePickerPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
    componentUrl,
  },
  android: {
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/PeoplePickerPage/docs/android/PeoplePickerOverview.md') as string,
    related,
    componentUrl,
  },
};
