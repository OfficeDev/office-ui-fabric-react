import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { ModalPageProps } from '@fluentui/react-examples/lib/office-ui-fabric-react/Modal/Modal.doc';

export const ModalPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('@uifabric/api-docs/lib/pages/office-ui-fabric-react/Modal.page.json')}
    {...{ ...ModalPageProps, ...props }}
  />
);
