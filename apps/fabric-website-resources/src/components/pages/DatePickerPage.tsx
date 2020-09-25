import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { DatePickerPageProps } from '@fluentui/examples/lib/office-ui-fabric-react/DatePicker/DatePicker.doc';

export const DatePickerPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('@uifabric/api-docs/lib/pages/office-ui-fabric-react/DatePicker.page.json')}
    {...{ ...DatePickerPageProps, ...props }}
  />
);
