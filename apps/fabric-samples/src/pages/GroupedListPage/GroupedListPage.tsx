import * as React from 'react';
import {
  ExampleCard,
  PropertiesTableSet,
  ComponentPage
} from '../../components/demoComponents';

import { GroupedListBasicExample } from './examples/GroupedList.Basic.Example';
import { GroupedListCustomExample } from './examples/GroupedList.Custom.Example';
import { IComponentDemoPageProps } from '../../components/ComponentPage/IComponentDemoPageProps';

const GroupedListBasicExampleCode = require('./examples/GroupedList.Basic.Example.tsx') as string;
const GroupedListCustomExampleCode = require('./examples/GroupedList.Custom.Example.tsx') as string;

export class GroupedListPage extends React.Component<IComponentDemoPageProps, any> {
  public render() {
    return (
      <ComponentPage
        title='GroupedList'
        componentName='GroupedListExample'
        exampleCards={
          <div>
            <ExampleCard title='GroupedList basic example' isOptIn={ true } code={ GroupedListBasicExampleCode }>
              <GroupedListBasicExample />
            </ExampleCard>
            <ExampleCard title='GroupedList example with custom header and footer' isOptIn={ true } code={ GroupedListCustomExampleCode }>
              <GroupedListCustomExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet componentName='GroupedList' />
        }
        overview={
          <p>Allows you to render a set of items as multiple lists with various grouping properties.</p>
        }
        isHeaderVisible={ this.props.isHeaderVisible }>
      </ComponentPage>
    );
  }

}
