import * as React from 'react';

import { IDocPageProps } from '@fluentui/react-internal/lib/common/DocPage.types';
import { PivotBasicExample } from './Tabs.Basic.Example';
import { PivotIconCountExample } from './Tabs.IconCount.Example';
import { PivotLargeExample } from './Tabs.Large.Example';
import { PivotTabsExample } from './Tabs.Tabs.Example';
import { PivotTabsLargeExample } from './Tabs.TabsLarge.Example';
import { PivotOnChangeExample } from './Tabs.OnChange.Example';
import { PivotRemoveExample } from './Tabs.Remove.Example';
import { PivotOverrideExample } from './Tabs.Override.Example';
import { PivotSeparateExample } from './Tabs.Separate.Example';
import { PivotOverflowMenuExample } from './Tabs.OverflowMenu.Example';

const PivotRemoveExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-tabs/Tabs/Tabs.Remove.Example.tsx') as string;
const PivotBasicExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-tabs/Tabs/Tabs.Basic.Example.tsx') as string;
const PivotLargeExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-tabs/Tabs/Tabs.Large.Example.tsx') as string;
const PivotTabsExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-tabs/Tabs/Tabs.Tabs.Example.tsx') as string;
const PivotTabsLargeExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-tabs/Tabs/Tabs.TabsLarge.Example.tsx') as string;
const PivotOnChangeExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-tabs/Tabs/Tabs.OnChange.Example.tsx') as string;
const PivotIconCountExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-tabs/Tabs/Tabs.IconCount.Example.tsx') as string;
const PivotOverrideExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-tabs/Tabs/Tabs.Override.Example.tsx') as string;
const PivotSeparateExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-tabs/Tabs/Tabs.Separate.Example.tsx') as string;
const PivotOverflowMenuExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-tabs/Tabs/Tabs.OverflowMenu.Example.tsx') as string;

export const PivotPageProps: IDocPageProps = {
  title: 'Pivot',
  componentName: 'Pivot',
  componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/react/src/components/Pivot',
  examples: [
    {
      title: 'Default Pivot',
      code: PivotBasicExampleCode,
      view: <PivotBasicExample />,
    },
    {
      title: 'Count and Icon',
      code: PivotIconCountExampleCode,
      view: <PivotIconCountExample />,
    },
    {
      title: 'Large link size',
      code: PivotLargeExampleCode,
      view: <PivotLargeExample />,
    },
    {
      title: 'Links of tab style',
      code: PivotTabsExampleCode,
      view: <PivotTabsExample />,
    },
    {
      title: 'Links of large tab style',
      code: PivotTabsLargeExampleCode,
      view: <PivotTabsLargeExample />,
    },
    {
      title: 'Trigger onchange event',
      code: PivotOnChangeExampleCode,
      view: <PivotOnChangeExample />,
    },
    {
      title: 'Show/Hide pivot item',
      code: PivotRemoveExampleCode,
      view: <PivotRemoveExample />,
    },
    {
      title: 'Override selected item',
      code: PivotOverrideExampleCode,
      view: <PivotOverrideExample />,
    },
    {
      title: 'Render content separately',
      code: PivotSeparateExampleCode,
      view: <PivotSeparateExample />,
    },
    {
      title: 'Pivot with overflow menu',
      code: PivotOverflowMenuExampleCode,
      view: <PivotOverflowMenuExample />,
    },
  ],
  overview: require<string>('!raw-loader!@fluentui/react-examples/src/react-tabs/Tabs/docs/TabsOverview.md'),
  bestPractices: require<string>('!raw-loader!@fluentui/react-examples/src/react-tabs/Tabs/docs/TabsBestPractices.md'),
  dos: require<string>('!raw-loader!@fluentui/react-examples/src/react-tabs/Tabs/docs/TabsDos.md'),
  donts: require<string>('!raw-loader!@fluentui/react-examples/src/react-tabs/Tabs/docs/TabsDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
  allowNativePropsForComponentName: 'PivotItem',
  allowNativeProps: true,
};
