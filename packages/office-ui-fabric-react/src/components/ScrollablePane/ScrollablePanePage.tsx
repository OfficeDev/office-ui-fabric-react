import * as React from 'react';
import {
  ExampleCard,
  ComponentPage,
  IComponentDemoPageProps,
  PageMarkdown,
  PropertiesTableSet
} from '@uifabric/example-app-base';
import { ScrollablePaneDefaultExample } from './examples/ScrollablePane.Default.Example';
import { ScrollablePaneDetailsListExample } from './examples/ScrollablePane.DetailsList.Example';
import { ComponentStatus } from '../../demo/ComponentStatus/ComponentStatus';
import { ScrollablePaneStatus } from './ScrollablePane.checklist';

const ScrollablePaneDefaultExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/examples/ScrollablePane.Default.Example.tsx') as string;

const ScrollablePaneDetailsListExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/examples/ScrollablePane.DetailsList.Example.tsx') as string;

export class ScrollablePanePage extends React.Component<IComponentDemoPageProps, any> {
  public render() {
    return (
      <ComponentPage
        title='ScrollablePane'
        componentName='ScrollablePaneExample'
        componentUrl='https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/ScrollablePane'
        exampleCards={
          <div>
            <ExampleCard title='Default' code={ ScrollablePaneDefaultExampleCode }>
              <ScrollablePaneDefaultExample />
            </ExampleCard>
            <ExampleCard title='DetailsList Locked Header' code={ ScrollablePaneDetailsListExampleCode }>
              <ScrollablePaneDetailsListExample />
            </ExampleCard>
          </div>
        }
        allowNativeProps={ true }
        nativePropsElement={ ['a', 'button'] }
        propertiesTables={
          <div>
            <PropertiesTableSet
              sources={ [
                require<string>('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/ScrollablePane.types.ts'),
                require<string>('!raw-loader!office-ui-fabric-react/src/components/Sticky/Sticky.types.ts')
              ] }
            />
          </div>
        }
        overview={
          <PageMarkdown>
            { require<string>('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/docs/ScrollablePaneOverview.md') }
          </PageMarkdown>
        }
        bestPractices={
          <div />
        }
        dos={
<<<<<<< HEAD
          <div>
            <ul>
              <li>Ensure that a parent component has a CSS height, or max-height attribute set (and any intermediary containers have an inherit, or explicit height/max-height set).</li>
              <li>Use Sticky component on block level elements</li>
              <li>Sticky component are ideally section headers and/or footers</li>
              <li>Ensure that the total height of Sticky components do not exceed the height of the ScrollablePane</li>
            </ul>
          </div>
=======
          <PageMarkdown>
            { require<string>('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/docs/ScrollablePaneDos.md') }
          </PageMarkdown>
>>>>>>> 4efff92981d7301ac16bc8a2cbd7624585f9c42b
        }
        donts={
          <PageMarkdown>
            { require<string>('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/docs/ScrollablePaneDonts.md') }
          </PageMarkdown>
        }
        isHeaderVisible={ this.props.isHeaderVisible }
        componentStatus={
          <ComponentStatus
            { ...ScrollablePaneStatus }
          />
        }
      />
    );
  }

}
