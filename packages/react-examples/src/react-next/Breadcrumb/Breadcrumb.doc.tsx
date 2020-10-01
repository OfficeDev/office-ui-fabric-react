import * as React from 'react';

import { BreadcrumbBasicExample } from './Breadcrumb.Basic.Example';
import { BreadcrumbCollapsingExample } from './Breadcrumb.Collapsing.Example';
import { BreadcrumbStaticExample } from './Breadcrumb.Static.Example';
import { IDocPageProps } from '@fluentui/react-next/lib/common/DocPage.types';

const BreadcrumbBasicExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/Breadcrumb/Breadcrumb.Basic.Example.tsx') as string;
const BreadcrumbCollapsingExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/Breadcrumb/Breadcrumb.Collapsing.Example.tsx') as string;
const BreadcrumbStaticExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/Breadcrumb/Breadcrumb.Static.Example.tsx') as string;

export const BreadcrumbPageProps: IDocPageProps = {
  title: 'Breadcrumb',
  componentName: 'Breadcrumb',
  componentUrl: 'https://github.com/microsoft/fluentui/tree/7.0/packages/react-next/src/components/Breadcrumb',
  examples: [
    {
      title: 'Breadcrumb rendering options',
      code: BreadcrumbBasicExampleCode,
      view: <BreadcrumbBasicExample />,
    },
    {
      title: 'Breadcrumb collapsing options',
      code: BreadcrumbCollapsingExampleCode,
      view: <BreadcrumbCollapsingExample />,
    },
    {
      title: 'Breadcrumb with static width ',
      code: BreadcrumbStaticExampleCode,
      view: <BreadcrumbStaticExample />,
    },
  ],
  overview: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/react-next/Breadcrumb/docs/BreadcrumbOverview.md'),
  bestPractices: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/react-next/Breadcrumb/docs/BreadcrumbBestPractices.md'),
  dos: require<string>('!raw-loader!@fluentui/react-examples/src/react-next/Breadcrumb/docs/BreadcrumbDos.md'),
  donts: require<string>('!raw-loader!@fluentui/react-examples/src/react-next/Breadcrumb/docs/BreadcrumbDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
};
