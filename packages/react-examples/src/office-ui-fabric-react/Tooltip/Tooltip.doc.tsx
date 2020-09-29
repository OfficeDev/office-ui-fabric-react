import * as React from 'react';
import { TooltipCustomExample } from './Tooltip.Custom.Example';

import { IDocPageProps } from 'office-ui-fabric-react/lib/common/DocPage.types';
import { TooltipBasicExample } from './Tooltip.Basic.Example';
import { TooltipDisplayExample } from './Tooltip.Display.Example';
import { TooltipInteractiveExample } from './Tooltip.Interactive.Example';
import { TooltipOverflowExample } from './Tooltip.Overflow.Example';
import { TooltipAbsolutePositionExample } from './Tooltip.AbsolutePosition.Example';

const TooltipBasicExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Tooltip/Tooltip.Basic.Example.tsx') as string;
const TooltipDisplayExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Tooltip/Tooltip.Display.Example.tsx') as string;
const TooltipCustomExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Tooltip/Tooltip.Custom.Example.tsx') as string;
const TooltipInteractiveExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Tooltip/Tooltip.Interactive.Example.tsx') as string;
const TooltipOverflowExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Tooltip/Tooltip.Overflow.Example.tsx') as string;
const TooltipAbsolutePositionExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Tooltip/Tooltip.AbsolutePosition.Example.tsx') as string;

export const TooltipPageProps: IDocPageProps = {
  title: 'Tooltip',
  componentName: 'Tooltip',
  componentUrl:
    'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Tooltip',
  examples: [
    {
      title: 'Default Tooltip',
      code: TooltipBasicExampleCode,
      view: <TooltipBasicExample />,
    },
    {
      title: 'Tooltip wrapping inline or inline-block elements',
      code: TooltipDisplayExampleCode,
      view: <TooltipDisplayExample />,
    },
    {
      title: 'Tooltip with custom content',
      code: TooltipCustomExampleCode,
      view: <TooltipCustomExample />,
    },
    {
      title: 'Tooltip with a closing delay',
      code: TooltipInteractiveExampleCode,
      view: <TooltipInteractiveExample />,
    },
    {
      title: 'Tooltip only on overflow',
      code: TooltipOverflowExampleCode,
      view: <TooltipOverflowExample />,
    },
    {
      title: 'Tooltip on absolutely-positioned element',
      code: TooltipAbsolutePositionExampleCode,
      view: <TooltipAbsolutePositionExample />,
    },
  ],
  overview: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Tooltip/docs/TooltipOverview.md'),
  bestPractices: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Tooltip/docs/TooltipBestPractices.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
  allowNativeProps: true,
};
