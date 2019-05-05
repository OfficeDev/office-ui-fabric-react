import * as React from 'react';
import { ControlsAreaPage, IControlsPageProps } from '../ControlsAreaPage';
import { DetailsListShimmerPageProps } from './DetailsListShimmerPage.doc';

export const DetailsListShimmerPage: React.StatelessComponent<IControlsPageProps> = props => {
  return <ControlsAreaPage {...props} {...DetailsListShimmerPageProps[props.platform]} />;
};
