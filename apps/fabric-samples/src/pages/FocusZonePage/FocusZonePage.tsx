import * as React from 'react';
import {
  ExampleCard,
  PropertiesTableSet,
  ComponentPage
} from '../../components/demoComponents';

import { FocusZonePhotosExample } from './examples/FocusZone.Photos.Example';
import { FocusZoneListExample } from './examples/FocusZone.List.Example';
import { FocusZoneDisabledExample } from './examples/FocusZone.Disabled.Example';
import { IComponentDemoPageProps } from '../../components/ComponentPage/IComponentDemoPageProps';

const FocusZonePhotosExampleCode = require('./examples/FocusZone.Photos.Example.tsx') as string;
const FocusZoneListExampleCode = require('./examples/FocusZone.List.Example.tsx') as string;
const FocusZoneDisabledExampleCode = require('./examples/FocusZone.Disabled.Example.tsx') as string;

export class FocusZonePage extends React.Component<IComponentDemoPageProps, any> {
  public render() {
    return (
      <ComponentPage
        title='FocusZone'
        componentName='FocusZoneExample'
        exampleCards={
          <div>
            <ExampleCard title='Non-uniform photos within bidirectional FocusZone' code={ FocusZonePhotosExampleCode }>
              <FocusZonePhotosExample />
            </ExampleCard>
            <ExampleCard title='Nesting FocusZones in list rows' code={ FocusZoneListExampleCode }>
              <FocusZoneListExample />
            </ExampleCard>
            <ExampleCard title='Disabled FocusZone' code={ FocusZoneDisabledExampleCode }>
              <FocusZoneDisabledExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet componentName='FocusZone' />
        }
        overview={
          <div>
            <p>FocusZones abstract arrow key navigation behaviors. Tabbable elements (buttons, anchors, and elements with data-is-focusable='true' attributes) are considered when pressing directional arrow keys and focus is moved appropriately. Tabbing to a zone sets focus only to the current "active" element, making it simple to use the tab key to transition from one zone to the next, rather than through every focusable element.</p>

            <p>Using a FocusZone is simple. Just wrap a bunch of content inside of a FocusZone, and arrows and tabbling will be handled for you! See examples below.</p>
          </div>
        }
        isHeaderVisible={ this.props.isHeaderVisible }>
      </ComponentPage>
    );
  }

}
