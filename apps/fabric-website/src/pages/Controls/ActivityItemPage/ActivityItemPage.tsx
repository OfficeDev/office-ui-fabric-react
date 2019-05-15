import * as React from 'react';
import { ControlsAreaPage, IControlsPageProps } from '../ControlsAreaPage';
import { ActivityItemPageProps } from './ActivityItemPage.doc';

export const ActivityItemPage: React.StatelessComponent<IControlsPageProps> = props => {
  return <ControlsAreaPage {...props} {...ActivityItemPageProps[props.platform]} />;
};
