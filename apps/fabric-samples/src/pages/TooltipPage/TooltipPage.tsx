import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { LayerHost } from 'office-ui-fabric-react/lib/Layer';
import {
  ExampleCard,
  PropertiesTableSet,
  ComponentPage
} from '../../components/demoComponents';

import { TooltipBottomExample } from './examples/Tooltip.Bottom.Example';
import { TooltipBasicExample } from './examples/Tooltip.Basic.Example';

import './TooltipPage.scss';

const TooltipBasicExampleCode = require('./examples/Tooltip.Basic.Example.tsx') as string;
const TooltipBottomExampleCode = require('./examples/Tooltip.Bottom.Example.tsx') as string;

export class TooltipPage extends React.Component<any, any> {
  public render() {
    return (
      <ComponentPage
        title='Tooltip'
        componentName='TooltipExample'
        exampleCards={
          <LayerHost>
            <ExampleCard title='Tooltip' code={ TooltipBasicExampleCode }>
              <TooltipBasicExample />
            </ExampleCard>

            <ExampleCard title='Tooltip Bottom Direction. No delay' code={ TooltipBottomExampleCode }>
              <TooltipBottomExample />
            </ExampleCard>
          </LayerHost>
        }
        propertiesTables={
          <PropertiesTableSet componentName='Tooltip' />
        }
        overview={
          <div>
            <Link target='_blank' href='http://dev.office.com/fabric/components/Tooltip'>Tooltips</Link>
            <span> supplement content associated with a specific UI component.</span>
          </div>
        }
      />
    );
  }
}
