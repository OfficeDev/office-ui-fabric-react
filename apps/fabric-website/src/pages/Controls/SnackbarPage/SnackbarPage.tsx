import * as React from 'react';
import { IPageSectionProps } from '@uifabric/example-app-base/lib/index2';
import { ControlsAreaPage, IControlsPageProps } from '../ControlsAreaPage';
import { SnackbarPageProps } from './SnackbarPage.doc';
import { Platforms } from '../../../interfaces/Platforms';

const baseUrl = 'https://github.com/microsoft/fluentui/tree/7.0/apps/fabric-website/src/pages/Controls/SnackbarPage/';

export const SnackbarPage: React.FunctionComponent<IControlsPageProps> = props => {
  const { platform } = props;
  return (
    <ControlsAreaPage
      {...props}
      {...SnackbarPageProps[platform]}
      otherSections={_otherSections(platform) as IPageSectionProps[]}
    />
  );
};

function _otherSections(platform: Platforms): IPageSectionProps<Platforms>[] {
  switch (platform) {
    case 'android':
      return [
        {
          sectionName: 'Implementation',
          editUrl: baseUrl + 'docs/android/SnackbarImplementation.md',
          content: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/SnackbarPage/docs/android/SnackbarImplementation.md') as string,
        },
      ];
  }
}
