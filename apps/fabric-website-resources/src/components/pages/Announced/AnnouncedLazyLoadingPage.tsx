import * as React from 'react';
import { AnnouncedLazyLoadingPageProps } from '@fluentui/react-examples/lib/office-ui-fabric-react/Announced/Announced.doc';
import { DemoPage } from '../../DemoPage';

export const AnnouncedLazyLoadingPage = (props: { isHeaderVisible: boolean }) => (
  <div>
    <DemoPage {...{ ...AnnouncedLazyLoadingPageProps, ...props }} />
  </div>
);
