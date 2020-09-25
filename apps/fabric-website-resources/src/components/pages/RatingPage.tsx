import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { RatingPageProps } from '@fluentui/examples/lib/office-ui-fabric-react/Rating/Rating.doc';

export const RatingPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('@uifabric/api-docs/lib/pages/office-ui-fabric-react/Rating.page.json')}
    {...{ ...RatingPageProps, ...props }}
  />
);
