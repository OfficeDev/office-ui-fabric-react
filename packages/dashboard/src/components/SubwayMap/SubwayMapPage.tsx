import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';
import { SubwayMapBasicExample } from './examples/index';

const SubwayMapExampleCode = require('!raw-loader!@uifabric/dashboard/src/components/SubwayMap/examples/SubwayMap.Basic.Example.tsx') as string;

export class SubwayMapPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="SubwayMap"
        componentName="SubwayMap"
        exampleCards={
          <div>
            <ExampleCard title="Basic Subway Map Card" code={SubwayMapExampleCode}>
              <SubwayMapBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet sources={[require<string>('!raw-loader!@uifabric/dashboard/src/components/SubwayMap/SubwayMap.types.ts')]} />
        }
        /* tslint:disable:max-line-length */
        overview={
          <div>
            <p>The Subway Map control allows you to visualize the steps required for a given wizard.</p>
          </div>
        }
        bestPractices={<div />}
        dos={
          <div>
            <ul>
              <li>Use Subway Map control with PanelWizard, FullPageWizard or TenantSetupWizard.</li>
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li>Only one level of sub steps is allowed.</li>
            </ul>
          </div>
        }
        isHeaderVisible={this.props.isHeaderVisible}
      />
    );
  }
}
