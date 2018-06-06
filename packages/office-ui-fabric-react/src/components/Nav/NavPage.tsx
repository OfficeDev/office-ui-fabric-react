import * as React from 'react';
import { NavBasicExample } from './examples/Nav.Basic.Example';
import { DemoPage } from '../../demo/components/DemoPage';
import { IDemoPageProps } from '../../demo/components/DemoPage.types';
import { NavFabricDemoAppExample } from './examples/Nav.FabricDemoApp.Example';
import { NavNestedExample } from './examples/Nav.Nested.Example';
import { NavByKeysExample } from './examples/Nav.ByKeys.Example';
import { NavStatus } from './Nav.checklist';

const NavBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Nav/examples/Nav.Basic.Example.tsx') as string;
const NavFabricDemoAppExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Nav/examples/Nav.FabricDemoApp.Example.tsx') as string;
const NavNestedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Nav/examples/Nav.Nested.Example.tsx') as string;
const NavByKeysExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Nav/examples/Nav.ByKeys.Example.tsx') as string;

export const NavPageProps: IDemoPageProps = {
  title: 'Nav',
  componentName: 'Nav',
  componentUrl:
    'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/Nav',
  componentStatus: NavStatus,
  examples: [
    {
      title: 'Basic Nav bar with sample links',
      code: NavBasicExampleCode,
      view: <NavBasicExample />
    },
    {
      title: 'Navigation menu used in this Fabric React demo app',
      code: NavFabricDemoAppExampleCode,
      view: <NavFabricDemoAppExample />
    },
    {
      title: 'Nested navigation menu (without group header)',
      code: NavNestedExampleCode,
      view: <NavNestedExample />
    },
    {
      title: 'Nav bar of links each with unique keys and empty urls',
      code: NavByKeysExampleCode,
      view: <NavByKeysExample />
    }
  ],
  propertiesTablesSources: [require<string>('!raw-loader!office-ui-fabric-react/src/components/Nav/Nav.types.ts')],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/Nav/docs/NavOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!office-ui-fabric-react/src/components/Nav/docs/NavDos.md'),
  donts: require<string>('!raw-loader!office-ui-fabric-react/src/components/Nav/docs/NavDonts.md'),
  isHeaderVisible: true
};

export const NavPage = (props: { isHeaderVisible: boolean }) => <DemoPage {...{ ...NavPageProps, ...props }} />;
