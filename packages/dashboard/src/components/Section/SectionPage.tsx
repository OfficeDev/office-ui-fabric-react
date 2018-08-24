import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';
import { SectionBasicExample } from './examples/Section.Basic.Example';
import { EditSectionsExample } from './examples/EditSections.Example';
const SectionBasicExampleCode = require('!raw-loader!@uifabric/dashboard/src/components/Section/examples/Section.Basic.Example.tsx') as string;
const EditSectionsExampleCode = require('!raw-loader!@uifabric/dashboard/src/components/Section/examples/EditSections.Example.tsx') as string;

export class SectionPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="Section"
        componentName="Section"
        exampleCards={
          <div>
            <ExampleCard title="Section" isScrollable={true} isOptIn={true} code={SectionBasicExampleCode}>
              <SectionBasicExample />
            </ExampleCard>
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
        overview={<div>Sections and edit sections</div>}
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
