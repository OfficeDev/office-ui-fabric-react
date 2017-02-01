import * as React from 'react';
import { Button } from '../../../../Button';
import { Panel, PanelType } from '../../../../Panel';

export class PanelLargeFixedExample extends React.Component<any, any> {

  constructor() {
    super();
    this.state = {
      showPanel: false
    };
  }

  public render() {
    return (
      <div>
        <Button description='Opens the Sample Panel' onClick={ this._showPanel.bind(this) }>Open Panel</Button>
        <Panel
          isOpen={ this.state.showPanel }
          onDismiss={ this._closePanel.bind(this) }
          type={ PanelType.largeFixed }
          headerText='Large Panel'
        >
          <span className='ms-font-m'>Content goes here.</span>
        </Panel>
      </div>
    );
  }

  private _showPanel() {
    this.setState({ showPanel: true });
  }
  private _closePanel() {
    this.setState({ showPanel: false });
  }
}
