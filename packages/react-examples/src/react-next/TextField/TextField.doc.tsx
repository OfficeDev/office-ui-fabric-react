import * as React from 'react';

import { IDocPageProps } from '@fluentui/react-next/lib/common/DocPage.types';
import { TextFieldBasicExample } from './TextField.Basic.Example';
import { TextFieldBorderlessExample } from './TextField.Borderless.Example';
import { TextFieldCustomRenderExample } from './TextField.CustomRender.Example';
import { TextFieldErrorMessageExample } from './TextField.ErrorMessage.Example';
import { TextFieldMultilineExample } from './TextField.Multiline.Example';
import { TextFieldControlledExample } from './TextField.Controlled.Example';
import { TextFieldPrefixAndSuffixExample } from './TextField.PrefixAndSuffix.Example';
import { TextFieldStyledExample } from './TextField.Styled.Example';
import { TextFieldMaskedExample } from './TextField.Masked.Example';

const TextFieldBasicExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/TextField/TextField.Basic.Example.tsx') as string;
const TextFieldBorderlessExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/TextField/TextField.Borderless.Example.tsx') as string;
const TextFieldCustomRenderExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/TextField/TextField.CustomRender.Example.tsx') as string;
const TextFieldErrorMessageExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/TextField/TextField.ErrorMessage.Example.tsx') as string;
const TextFieldMultilineExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/TextField/TextField.Multiline.Example.tsx') as string;
const TextFieldControlledExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/TextField/TextField.Controlled.Example.tsx') as string;
const TextFieldPrefixAndSuffixExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/TextField/TextField.PrefixAndSuffix.Example.tsx') as string;
const TextFieldStyledExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/TextField/TextField.Styled.Example.tsx') as string;
const TextFieldMaskedExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/TextField/TextField.Masked.Example.tsx') as string;

export const TextFieldPageProps: IDocPageProps = {
  title: 'TextField',
  componentName: 'TextField',
  componentUrl: 'https://github.com/microsoft/fluentui/tree/7.0/packages/react-next/src/components/TextField',
  examples: [
    {
      title: 'Basic TextFields',
      code: TextFieldBasicExampleCode,
      view: <TextFieldBasicExample />,
    },
    {
      title: 'Controlled TextFields',
      code: TextFieldControlledExampleCode,
      view: <TextFieldControlledExample />,
    },
    {
      title: 'Multiline TextField',
      code: TextFieldMultilineExampleCode,
      view: <TextFieldMultilineExample />,
    },
    {
      title: 'Underlined and borderless TextFields',
      code: TextFieldBorderlessExampleCode,
      view: <TextFieldBorderlessExample />,
    },
    {
      title: 'Customizable Masked TextField',
      code: TextFieldMaskedExampleCode,
      view: <TextFieldMaskedExample />,
    },
    {
      title: 'TextField with prefix and/or suffix',
      code: TextFieldPrefixAndSuffixExampleCode,
      view: <TextFieldPrefixAndSuffixExample />,
    },
    {
      title: 'TextFields with custom rendering',
      code: TextFieldCustomRenderExampleCode,
      view: <TextFieldCustomRenderExample />,
    },
    {
      title: 'TextField error message variations',
      code: TextFieldErrorMessageExampleCode,
      view: <TextFieldErrorMessageExample />,
    },
    {
      title: 'TextField subcomponent styling',
      code: TextFieldStyledExampleCode,
      view: <TextFieldStyledExample />,
    },
  ],
  overview: require<string>('!raw-loader!@fluentui/react-examples/src/react-next/TextField/docs/TextFieldOverview.md'),
  bestPractices: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/react-next/TextField/docs/TextFieldBestPractices.md'),
  isHeaderVisible: false,
  isFeedbackVisible: true,
  allowNativeProps: true,
  nativePropsElement: ['input', 'textarea'],
};
