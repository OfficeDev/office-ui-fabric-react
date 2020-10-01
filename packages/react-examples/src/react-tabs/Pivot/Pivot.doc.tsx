import * as React from 'react';
import { PivotBasicExample } from './Pivot.Basic.Example';
import { IDocPageProps } from 'office-ui-fabric-react/lib/common/DocPage.types';
import { PivotIconCountExample } from './Pivot.IconCount.Example';
import { PivotLargeExample } from './Pivot.Large.Example';
import { PivotTabsExample } from './Pivot.Tabs.Example';
import { PivotTabsLargeExample } from './Pivot.TabsLarge.Example';
import { PivotOnChangeExample } from './Pivot.OnChange.Example';
import { PivotRemoveExample } from './Pivot.Remove.Example';
import { PivotOverrideExample } from './Pivot.Override.Example';
import { PivotSeparateExample } from './Pivot.Separate.Example';
import { PivotOverflowMenuExample } from './Pivot.OverflowMenu.Example';

const PivotRemoveExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Pivot/Pivot.Remove.Example.tsx') as string;
const PivotBasicExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Pivot/Pivot.Basic.Example.tsx') as string;
const PivotLargeExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Pivot/Pivot.Large.Example.tsx') as string;
const PivotTabsExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Pivot/Pivot.Tabs.Example.tsx') as string;
const PivotTabsLargeExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Pivot/Pivot.TabsLarge.Example.tsx') as string;
const PivotOnChangeExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Pivot/Pivot.OnChange.Example.tsx') as string;
const PivotIconCountExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Pivot/Pivot.IconCount.Example.tsx') as string;
const PivotOverrideExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Pivot/Pivot.Override.Example.tsx') as string;
const PivotSeparateExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Pivot/Pivot.Separate.Example.tsx') as string;
const PivotOverflowMenuExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Pivot/Pivot.OverflowMenu.Example.tsx') as string;

export const PivotPageProps: IDocPageProps = {
  title: 'Pivot',
  componentName: 'Pivot',
  componentUrl: 'https://github.com/microsoft/fluentui/tree/7.0/packages/office-ui-fabric-react/src/components/Pivot',
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
  overview: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Pivot/docs/PivotOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Pivot/docs/PivotDos.md'),
  donts: require<string>('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/Pivot/docs/PivotDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
  allowNativePropsForComponentName: 'PivotItem',
  allowNativeProps: true,
};
