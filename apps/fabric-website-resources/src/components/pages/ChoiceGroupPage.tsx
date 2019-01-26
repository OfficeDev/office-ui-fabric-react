import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { ChoiceGroupPageProps } from 'office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroup.doc';

export const ChoiceGroupPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage jsonDocs={require('../../../../../common/pages/ChoiceGroup.page.json')} {...{ ...ChoiceGroupPageProps, ...props }} />
);
