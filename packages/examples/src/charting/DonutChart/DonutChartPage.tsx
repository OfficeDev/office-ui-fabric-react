import * as React from 'react';

import { ComponentPage, ExampleCard, IComponentDemoPageProps, PropertiesTableSet } from '@uifabric/example-app-base';

import { DonutChartBasicExample } from './examples/DonutChart.Basic.Example';
import { DonutChartDynamicExample } from './examples/DonutChart.Dynamic.Example';

const DonutChartBasicExampleCode = require('!raw-loader!@fluentui/examples/src/charting/DonutChart/examples/DonutChart.Basic.Example.tsx') as string;
const DonutChartDynamicExampleCode = require('!raw-loader!@fluentui/examples/src/charting/DonutChart/examples/DonutChart.Dynamic.Example.tsx') as string;

export class DonutChartPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="DonutChart"
        componentName="DonutChartExample"
        exampleCards={
          <div>
            <ExampleCard title="DonutChart basic" code={DonutChartBasicExampleCode}>
              <DonutChartBasicExample />
            </ExampleCard>
            <ExampleCard title="DonutChart dynamic" code={DonutChartDynamicExampleCode}>
              <DonutChartDynamicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[require<string>('!raw-loader!@uifabric/charting/src/components/DonutChart/DonutChart.types.ts')]}
          />
        }
        isHeaderVisible={this.props.isHeaderVisible}
      />
    );
  }
}
