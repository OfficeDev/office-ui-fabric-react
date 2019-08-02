import * as React from 'react';
import { Stack, IStackTokens } from 'office-ui-fabric-react';
import { Button } from 'office-ui-fabric-react/lib/Button.next';

export interface IButtonToggleExampleState {
  defaultButtonToggled?: boolean;
  primaryButtonToggled?: boolean;
  defaultCircularButtonToggled?: boolean;
  primaryCircularButtonToggled?: boolean;
}

export class ButtonToggleExample extends React.Component<{}, IButtonToggleExampleState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      defaultButtonToggled: false,
      primaryButtonToggled: false,
      defaultCircularButtonToggled: false,
      primaryCircularButtonToggled: false
    };
  }

  public render(): JSX.Element {
    const { defaultButtonToggled, primaryButtonToggled, defaultCircularButtonToggled, primaryCircularButtonToggled } = this.state;

    const buttonStackTokens: IStackTokens = { childrenGap: 12 };

    return (
      <Stack horizontal disableShrink tokens={buttonStackTokens}>
        <Button
          content={defaultButtonToggled ? 'Muted' : 'Unmuted'}
          checked={defaultButtonToggled}
          onClick={this._onDefaultButtonClicked}
        />
        <Button
          primary
          content={primaryButtonToggled ? 'Muted' : 'Unmuted'}
          checked={primaryButtonToggled}
          onClick={this._onPrimaryButtonClicked}
        />
        <Button
          circular
          icon={defaultCircularButtonToggled ? 'VolumeDisabled' : 'Volume3'}
          checked={defaultCircularButtonToggled}
          onClick={this._onDefaultCircularButtonClicked}
          ariaLabel="Default circular toggle button"
        />
        <Button
          circular
          primary
          icon={primaryCircularButtonToggled ? 'VolumeDisabled' : 'Volume3'}
          checked={primaryCircularButtonToggled}
          onClick={this._onPrimaryCircularButtonClicked}
          ariaLabel="Primary circular toggle button"
        />
      </Stack>
    );
  }

  private _onDefaultButtonClicked = () => {
    this.setState({ defaultButtonToggled: !this.state.defaultButtonToggled });
  };

  private _onPrimaryButtonClicked = () => {
    this.setState({ primaryButtonToggled: !this.state.primaryButtonToggled });
  };

  private _onDefaultCircularButtonClicked = () => {
    this.setState({ defaultCircularButtonToggled: !this.state.defaultCircularButtonToggled });
  };

  private _onPrimaryCircularButtonClicked = () => {
    this.setState({ primaryCircularButtonToggled: !this.state.primaryCircularButtonToggled });
  };
}
