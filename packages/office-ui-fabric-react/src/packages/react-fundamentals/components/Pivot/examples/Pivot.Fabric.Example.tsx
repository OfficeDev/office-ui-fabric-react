import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { PivotLinkSize, PivotLinkFormat, PivotItem, Pivot } from 'office-ui-fabric-react/lib/Pivot';

import { CalloutBasicExample } from '../../Callout/examples/Callout.Basic.Example';
import { SpinnerBasicExample } from '../../Spinner/examples/Spinner.Basic.Example';
import { NavBasicExample } from '../../Nav/examples/Nav.Basic.Example';

export class PivotFabricExample extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div>
        <Pivot linkFormat={PivotLinkFormat.links} linkSize={PivotLinkSize.normal}>
          <PivotItem headerText="Callout">
            <Label>Callout Example</Label>
            <CalloutBasicExample />
          </PivotItem>
          <PivotItem headerText="Spinner">
            <Label>Spinner Example</Label>
            <SpinnerBasicExample />
          </PivotItem>
          <PivotItem headerText="Nav">
            <Label>Nav Example</Label>
            <NavBasicExample />
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}
