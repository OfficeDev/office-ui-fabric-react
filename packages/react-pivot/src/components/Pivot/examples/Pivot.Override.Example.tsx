import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';

export class PivotOverrideExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedKey: 0,
    };

    this._handleClick = this._handleClick.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div>
        <Pivot aria-label="Override Selected Item Pivot Example" selectedKey={`${this.state.selectedKey}`}>
          <PivotItem headerText="My Files" itemKey="0">
            <Label>Pivot #1</Label>
          </PivotItem>
          <PivotItem headerText="Recent" itemKey="1">
            <Label>Pivot #2</Label>
          </PivotItem>
          <PivotItem headerText="Shared with me" itemKey="2">
            <Label>Pivot #3</Label>
          </PivotItem>
        </Pivot>
        <DefaultButton onClick={this._handleClick}>Select next item</DefaultButton>
      </div>
    );
  }

  private _handleClick(): void {
    this.setState({ selectedKey: (this.state.selectedKey + 1) % 3 });
  }
}
