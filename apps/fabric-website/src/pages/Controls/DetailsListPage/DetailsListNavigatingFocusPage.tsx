import * as React from 'react';
import { ControlsAreaPage, IControlsPageProps } from '../ControlsAreaPage';
import { DetailsListNavigatingFocusPageProps } from './DetailsListNavigatingFocusPage.doc';

export const DetailsListNavigatingFocusPage: React.StatelessComponent<IControlsPageProps> = props => {
  return <ControlsAreaPage {...props} {...DetailsListNavigatingFocusPageProps[props.platform]} />;
};
