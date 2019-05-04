import * as React from 'react';
import { ControlsAreaPage, IControlsPageProps } from '../ControlsAreaPage';
import { DetailsListBasicPageProps } from './DetailsListBasicPage.doc';

export const DetailsListBasicPage: React.StatelessComponent<IControlsPageProps> = props => {
  return <ControlsAreaPage {...props} {...DetailsListBasicPageProps[props.platform]} />;
};
