import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { DetailsListCustomGroupHeadersPageProps as ExternalProps } from 'office-ui-fabric-react/lib/packages/react-data-views/components/DetailsList/DetailsList.doc';

const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/DetailsListPage/docs/DetailsListRelated.md') as string;

export const DetailsListCustomGroupHeadersPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    title: 'DetailsList - Custom Group Headers',
    related
  }
};
