import * as React from 'react';
import { AnnouncedLazyLoadingPageProps } from 'office-ui-fabric-react/lib/packages/react-fundamentals/components/Announced/Announced.doc';
import { DemoPage } from '../../DemoPage';

export const AnnouncedLazyLoadingPage = (props: { isHeaderVisible: boolean }) => (
  <div>
    <DemoPage {...{ ...AnnouncedLazyLoadingPageProps, ...props }} />
  </div>
);
