import * as React from 'react';
import { IconBasicExample } from './examples/Icon.Basic.Example';
import { DemoPage } from "../../demo/components/DemoPage";
import { IDemoPageProps } from "../../demo/components/DemoPage.types";
import { IconSvgExample } from './examples/Icon.Svg.Example';
import { IconColorExample } from './examples/Icon.Color.Example';
import { IconImageSheetExample } from './examples/Icon.ImageSheet.Example';
import { IconStatus } from './Icon.checklist';

const IconBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Icon/examples/Icon.Basic.Example.tsx') as string;
const IconSvgExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Icon/examples/Icon.Svg.Example.tsx') as string;
const IconColorExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Icon/examples/Icon.Color.Example.tsx') as string;
const IconImageSheetExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Icon/examples/Icon.ImageSheet.Example.tsx') as string;

export const IconPageProps: IDemoPageProps = {
  title: 'Icon',
  componentName: 'Icon',
  componentUrl: 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/Icon',
  componentStatus: IconStatus,
  examples: [{
    "title": "Icon",
    "code": IconBasicExampleCode,
    "view": <IconBasicExample />
}, {
    "title": "Icon with custom color",
    "code": IconColorExampleCode,
    "view": <IconColorExample />
}, {
    "title": "Icon using custom svg",
    "code": IconSvgExampleCode,
    "view": <IconSvgExample />
}, {
    "title": "Icon using image sheet",
    "code": IconImageSheetExampleCode,
    "view": <IconImageSheetExample />
}],
  propertiesTablesSources: [
  require<string>('!raw-loader!office-ui-fabric-react/src/components/Icon/Icon.types.ts')
],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/Icon/docs/IconOverview.md'),
  bestPractices: "",
  dos: require<string>('!raw-loader!office-ui-fabric-react/src/components/Icon/docs/IconDos.md'),
  donts: require<string>('!raw-loader!office-ui-fabric-react/src/components/Icon/docs/IconDonts.md'),
  isHeaderVisible: true,
  allowNativeProps: true,
};

export const IconPage = (props: { isHeaderVisible: boolean }) => (<DemoPage { ...{ ...IconPageProps, ...props } } />);