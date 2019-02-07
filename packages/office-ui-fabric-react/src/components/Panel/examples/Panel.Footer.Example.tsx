import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import * as React from 'react';

interface IState {
  showPanel: boolean;
}

export class PanelFooterExample extends React.Component<{}, IState> {
  public state = {
    showPanel: false
  };

  public render() {
    return (
      <div>
        <DefaultButton secondaryText="Opens the Sample Panel" onClick={this._onShowPanel} text="Open Panel" />
        <Panel
          isOpen={this.state.showPanel}
          type={PanelType.smallFixedFar}
          onDismiss={this._onClosePanel}
          isFooterAtBottom={true}
          headerText="Panel with footer at bottom"
          closeButtonAriaLabel="Close"
          onRenderFooterContent={this._onRenderFooterContent}
        >
          <span>Content goes here.</span>
        </Panel>
      </div>
    );
  }

  private _onClosePanel = () => {
    this.setState({ showPanel: false });
  };

  private _onRenderFooterContent = (): JSX.Element => {
    return (
      <div>
        <PrimaryButton onClick={this._onClosePanel} style={{ marginRight: '8px' }}>
          Save
        </PrimaryButton>
        <DefaultButton onClick={this._onClosePanel}>Cancel</DefaultButton>
      </div>
    );
  };

  private _onShowPanel = () => {
    this.setState({ showPanel: true });
  };
}
