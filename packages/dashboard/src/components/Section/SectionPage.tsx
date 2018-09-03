import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';
import { EditSectionsExample } from './examples/EditSections.Example';
const EditSectionsExampleCode = require('!raw-loader!@uifabric/dashboard/src/components/Section/examples/EditSections.Example.tsx') as string;

export class SectionPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="Section"
        componentName="Section"
        exampleCards={
          <div>
            <ExampleCard title="Edit Sections" isScrollable={true} isOptIn={true} code={EditSectionsExampleCode}>
              <EditSectionsExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[require<string>('!raw-loader!@uifabric/dashboard/src/components/Section/Section.types.ts')]}
          />
        }
        overview={<div>This component creates a section title for dashboard grid layout</div>}
        bestPractices={<div />}
        dos={
          <div>
            <ul />
          </div>
        }
        donts={
          <div>
            <ul />
          </div>
        }
        isHeaderVisible={this.props.isHeaderVisible}
      />
    );
  }
}
