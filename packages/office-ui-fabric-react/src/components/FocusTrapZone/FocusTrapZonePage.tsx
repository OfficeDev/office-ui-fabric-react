import * as React from 'react';
import FocusTrapZoneBoxExample from './examples/FocusTrapZone.Box.Example';
import { DemoPage } from "../../demo/components/DemoPage";
import { IDemoPageProps } from "../../demo/components/DemoPage.types";
const FocusTrapZoneBoxExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusTrapZone/examples/FocusTrapZone.Box.Example.tsx') as string;

import FocusTrapZoneBoxExampleWithFocusableItem from './examples/FocusTrapZone.Box.FocusOnCustomElement.Example';
const FocusTrapZoneBoxExampleWithFocusableItemCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusTrapZone/examples/FocusTrapZone.Box.FocusOnCustomElement.Example.tsx') as string;

import FocusTrapZoneBoxClickExample from './examples/FocusTrapZone.Box.Click.Example';
const FocusTrapZoneBoxClickExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusTrapZone/examples/FocusTrapZone.Box.Click.Example.tsx') as string;

import FocusTrapZoneNestedExample from './examples/FocusTrapZone.Nested.Example';
const FocusTrapZoneNestedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusTrapZone/examples/FocusTrapZone.Nested.Example.tsx') as string;

export const FocusTrapZonePageProps: IDemoPageProps = {
  title: 'FocusTrapZone',
  componentName: 'FocusTrapZone',
  componentUrl: 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/FocusTrapZone',
  examples: [{
    "title": "Simple Box",
    "code": FocusTrapZoneBoxExampleCode,
    "view": <FocusTrapZoneBoxExample />
  }, {
    "title": "Simple Box with focus on custom focusable element",
    "code": FocusTrapZoneBoxExampleWithFocusableItemCode,
    "view": <FocusTrapZoneBoxExampleWithFocusableItem />
  }, {
    "title": "Simple Box with Clicking outside Trap Zone enabled",
    "code": FocusTrapZoneBoxClickExampleCode,
    "view": <FocusTrapZoneBoxClickExample />
  }, {
    "title": "Multiple Nest FocusTrapZones",
    "code": FocusTrapZoneNestedExampleCode,
    "view": <FocusTrapZoneNestedExample />
  }],
  propertiesTablesSources: [
    require<string>('!raw-loader!office-ui-fabric-react/src/components/FocusTrapZone/FocusTrapZone.types.ts')
  ],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/FocusTrapZone/docs/FocusTrapZoneOverview.md'),
  bestPractices: "",
  dos: "",
  donts: "",
  isHeaderVisible: true,
  allowNativeProps: true,
};

export const FocusTrapZonePage = (props: { isHeaderVisible: boolean }) => (<DemoPage { ...{ ...FocusTrapZonePageProps, ...props } } />);