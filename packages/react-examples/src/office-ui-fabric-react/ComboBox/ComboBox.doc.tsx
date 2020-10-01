import * as React from 'react';
import { ComboBoxBasicExample } from './ComboBox.Basic.Example';
import { ComboBoxTogglesExample } from './ComboBox.Toggles.Example';
import { ComboBoxControlledExample } from './ComboBox.Controlled.Example';
import { ComboBoxVirtualizedExample } from './ComboBox.Virtualized.Example';
import { ComboBoxErrorHandlingExample } from './ComboBox.ErrorHandling.Example';
import { ComboBoxCustomStyledExample } from './ComboBox.CustomStyled.Example';

import { IDocPageProps } from 'office-ui-fabric-react/lib/common/DocPage.types';

const ComboBoxBasicExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/ComboBox/ComboBox.Basic.Example.tsx') as string;

const ComboBoxTogglesExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/ComboBox/ComboBox.Toggles.Example.tsx') as string;

const ComboBoxControlledExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/ComboBox/ComboBox.Controlled.Example.tsx') as string;

const ComboBoxVirtualizedExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/ComboBox/ComboBox.Virtualized.Example.tsx') as string;

const ComboBoxErrorHandlingExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/ComboBox/ComboBox.ErrorHandling.Example.tsx') as string;

const ComboBoxCustomStyledExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/ComboBox/ComboBox.CustomStyled.Example.tsx') as string;

export const ComboBoxPageProps: IDocPageProps = {
  title: 'ComboBox',
  componentName: 'ComboBox',
  componentUrl:
    'https://github.com/microsoft/fluentui/tree/7.0/packages/office-ui-fabric-react/src/components/ComboBox',
  examples: [
    {
      title: 'Basic uncontrolled ComboBox',
      code: ComboBoxBasicExampleCode,
      view: <ComboBoxBasicExample />,
    },
    {
      title: 'ComboBox with toggleable autoComplete and allowFreeform',
      code: ComboBoxTogglesExampleCode,
      view: <ComboBoxTogglesExample />,
    },
    {
      title: 'Controlled ComboBox',
      code: ComboBoxControlledExampleCode,
      view: <ComboBoxControlledExample />,
    },
    {
      title: 'VirtualizedComboBox',
      code: ComboBoxVirtualizedExampleCode,
      view: <ComboBoxVirtualizedExample />,
    },
    {
      title: 'ComboBox with error handling',
      code: ComboBoxErrorHandlingExampleCode,
      view: <ComboBoxErrorHandlingExample />,
    },
    {
      title: 'ComboBox with custom styling',
      code: ComboBoxCustomStyledExampleCode,
      view: <ComboBoxCustomStyledExample />,
    },
  ],
  overview: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/ComboBox/docs/ComboBoxOverview.md'),
  bestPractices: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/ComboBox/docs/ComboBoxBestPractices.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
  allowNativeProps: true,
};
