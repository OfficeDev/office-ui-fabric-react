import * as React from 'react';
import { ResizeGroupOverflowSetExample } from './examples/ResizeGroup.OverflowSet.Example';

import { IDocPageProps } from '../../common/DocPage.types';
import { FlexBoxResizeGroupExample } from './examples/ResizeGroup.FlexBox.Example';
import { ResizeGroupVerticalOverflowSetExample } from './examples/ResizeGroup.VerticalOverflowSet.Example';

const ResizeGroupOverflowSetExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ResizeGroup/examples/ResizeGroup.OverflowSet.Example.tsx') as string;
const ResizeGroupOverflowSetExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/ResizeGroup/examples/ResizeGroup.OverflowSet.Example.tsx') as string;

const ResizeGroupVerticalOverflowSetExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ResizeGroup/examples/ResizeGroup.VerticalOverflowSet.Example.tsx') as string;
const ResizeGroupVerticalOverflowSetExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/ResizeGroup/examples/ResizeGroup.VerticalOverflowSet.Example.tsx') as string;

const ResizeGroupFlexBoxExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ResizeGroup/examples/ResizeGroup.FlexBox.Example.tsx') as string;
const ResizeGroupFlexBoxExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/ResizeGroup/examples/ResizeGroup.FlexBox.Example.tsx') as string;

export const ResizeGroupPageProps: IDocPageProps = {
  title: 'ResizeGroup',
  componentName: 'ResizeGroup',
  componentUrl:
    'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/ResizeGroup',
  examples: [
    {
      title: 'Use ResizeGroup to move commands into an overflow menu',
      code: ResizeGroupOverflowSetExampleCode,
      codepenJS: ResizeGroupOverflowSetExampleCodepen,
      view: <ResizeGroupOverflowSetExample />
    },
    {
      title: 'Use a vertical ResizeGroup to move commands into an overflow menu',
      code: ResizeGroupVerticalOverflowSetExampleCode,
      codepenJS: ResizeGroupVerticalOverflowSetExampleCodepen,
      view: <ResizeGroupVerticalOverflowSetExample />,
      isScrollable: false
    },
    {
      title: 'Use ResizeGroup to prevent two groups of items from overlapping',
      code: ResizeGroupFlexBoxExampleCode,
      codepenJS: ResizeGroupFlexBoxExampleCodepen,
      view: <FlexBoxResizeGroupExample />
    }
  ],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/ResizeGroup/docs/ResizeGroupOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!office-ui-fabric-react/src/components/ResizeGroup/docs/ResizeGroupDos.md'),
  donts: require<string>('!raw-loader!office-ui-fabric-react/src/components/ResizeGroup/docs/ResizeGroupDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
  allowNativeProps: true
};
