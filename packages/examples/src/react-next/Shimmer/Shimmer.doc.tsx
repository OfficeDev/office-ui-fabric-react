import * as React from 'react';
import { ShimmerBasicExample } from './examples/Shimmer.Basic.Example';
import { ShimmerCustomElementsExample } from './examples/Shimmer.CustomElements.Example';
import { ShimmerLoadDataExample } from './examples/Shimmer.LoadData.Example';
import { ShimmerApplicationExample } from './examples/Shimmer.Application.Example';
import { ShimmerStylingExample } from './examples/Shimmer.Styling.Example';
import { IDocPageProps } from 'office-ui-fabric-react/lib/common/DocPage.types';

const ShimmerBasicExampleCode = require('!raw-loader!@fluentui/examples/src/office-ui-fabric-react/Shimmer/examples/Shimmer.Basic.Example.tsx') as string;

const ShimmerCustomExampleCode = require('!raw-loader!@fluentui/examples/src/office-ui-fabric-react/Shimmer/examples/Shimmer.CustomElements.Example.tsx') as string;

const ShimmerStylingExampleCode = require('!raw-loader!@fluentui/examples/src/office-ui-fabric-react/Shimmer/examples/Shimmer.Styling.Example.tsx') as string;

const ShimmerLoadDataExampleCode = require('!raw-loader!@fluentui/examples/src/office-ui-fabric-react/Shimmer/examples/Shimmer.LoadData.Example.tsx') as string;

const ShimmerApplicationExampleCode = require('!raw-loader!@fluentui/examples/src/office-ui-fabric-react/Shimmer/examples/Shimmer.Application.Example.tsx') as string;

export const ShimmerPageProps: IDocPageProps = {
  title: 'Shimmer',
  componentName: 'ShimmerExample',
  componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/react-next/src/components/Shimmer',
  examples: [
    {
      title: 'Shimmer with basic elements using the ~shimmerElements~ prop',
      code: ShimmerBasicExampleCode,
      view: <ShimmerBasicExample />,
    },
    {
      title: 'Shimmer with custom elements using the ~customElementsGroup~ prop',
      code: ShimmerCustomExampleCode,
      view: <ShimmerCustomElementsExample />,
    },
    {
      title: 'Shimmer swapping with the content it replaces',
      code: ShimmerLoadDataExampleCode,
      view: <ShimmerLoadDataExample />,
    },
    {
      title: 'Shimmered DetailsList simulating loading data asynchronously',
      code: ShimmerApplicationExampleCode,
      view: <ShimmerApplicationExample />,
    },
    {
      title: 'Shimmer styles customizations',
      code: ShimmerStylingExampleCode,
      view: <ShimmerStylingExample />,
    },
  ],
  overview: require<
    string
  >('!raw-loader!@fluentui/examples/src/office-ui-fabric-react/Shimmer/docs/ShimmerOverview.md'),
  dos: require<string>('!raw-loader!@fluentui/examples/src/office-ui-fabric-react/Shimmer/docs/ShimmerDos.md'),
  donts: require<string>('!raw-loader!@fluentui/examples/src/office-ui-fabric-react/Shimmer/docs/ShimmerDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
};
