import * as React from 'react';
import { IconBasicExample } from './Icon.Basic.Example';

import { IDocPageProps } from 'office-ui-fabric-react/lib/common/DocPage.types';
import { IconSvgExample } from './Icon.Svg.Example';
import { IconColorExample } from './Icon.Color.Example';
import { IconImageSheetExample } from './Icon.ImageSheet.Example';
import { IconSvgFactoryExample } from './Icon.SvgFactory.Example';

const IconBasicExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Icon/Icon.Basic.Example.tsx') as string;
const IconSvgExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Icon/Icon.Svg.Example.tsx') as string;
const IconColorExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Icon/Icon.Color.Example.tsx') as string;
const IconImageSheetExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Icon/Icon.ImageSheet.Example.tsx') as string;
const IconSvgFactoryExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Icon/Icon.SvgFactory.Example.tsx') as string;

export const IconPageProps: IDocPageProps = {
  title: 'Icon',
  componentName: 'Icon',
  componentUrl: 'https://github.com/microsoft/fluentui/tree/7.0/packages/office-ui-fabric-react/src/components/Icon',
  examples: [
    {
      title: 'Icon',
      code: IconBasicExampleCode,
      view: <IconBasicExample />,
    },
    {
      title: 'Icon with custom color',
      code: IconColorExampleCode,
      view: <IconColorExample />,
    },
    {
      title: 'Icon using custom svg',
      code: IconSvgExampleCode,
      view: <IconSvgExample />,
    },
    {
      title: 'Icon using image sheet',
      code: IconImageSheetExampleCode,
      view: <IconImageSheetExample />,
    },
    {
      title: 'Icon using svg factory',
      code: IconSvgFactoryExampleCode,
      view: <IconSvgFactoryExample />,
    },
  ],
  overview: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Icon/docs/IconOverview.md'),
  bestPractices: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Icon/docs/IconBestPractices.md'),
  dos: require<string>('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Icon/docs/IconDos.md'),
  donts: require<string>('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Icon/docs/IconDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
  allowNativeProps: true,
};
