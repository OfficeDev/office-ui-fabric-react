import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { SearchBoxPageProps } from 'office-ui-fabric-react/lib/packages/react-inputs/components/SearchBox/SearchBox.doc';

export const SearchBoxPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('@uifabric/api-docs/lib/pages/office-ui-fabric-react/SearchBox.page.json')}
    {...{ ...SearchBoxPageProps, ...props }}
  />
);
