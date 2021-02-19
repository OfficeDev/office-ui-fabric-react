import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { AnnouncedSearchResultsPageProps as ExternalProps } from '@fluentui/react-examples/lib/office-ui-fabric-react/Announced/Announced.doc';

export const AnnouncedSearchResultsPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    title: 'Announced - Search Results',
    isFeedbackVisible: false,
  },
};
