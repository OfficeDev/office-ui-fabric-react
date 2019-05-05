import * as React from 'react';
import { ControlsAreaPage, IControlsPageProps } from '../ControlsAreaPage';
import { TeachingBubblePageProps } from './TeachingBubblePage.doc';

export const TeachingBubblePage: React.StatelessComponent<IControlsPageProps> = props => {
  return <ControlsAreaPage {...props} {...TeachingBubblePageProps[props.platform]} />;
};
