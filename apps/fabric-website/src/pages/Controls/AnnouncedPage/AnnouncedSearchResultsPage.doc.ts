import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { AnnouncedSearchResultsPageProps as ExternalProps } from '@fluentui/react-examples/lib/react/Announced/Announced.doc';

const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/AnnouncedPage/docs/AnnouncedRelated.md') as string;

export const AnnouncedSearchResultsPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    title: 'Announced - Search Results',
    isFeedbackVisible: false,
    related,
  },
};
