import * as React from 'react';

import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { FocusTrapZone } from 'office-ui-fabric-react/lib/FocusTrapZone';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Toggle, IToggle } from 'office-ui-fabric-react/lib/Toggle';
import './FocusTrapZone.Box.Example.scss';

export interface IBoxExampleExampleState {
  isChecked: boolean;
}

export default class BoxExample extends React.Component<React.HTMLAttributes<HTMLDivElement>, IBoxExampleExampleState> {
  private _toggle: IToggle;

  constructor(props: React.HTMLAttributes<HTMLDivElement>) {
    super(props);

    this.state = {
      isChecked: false
    };
  }

  public render(): JSX.Element {
    const { isChecked } = this.state;

    return (
      <div>
        <DefaultButton
          secondaryText="Focuses inside the FocusTrapZone"
          onClick={this._onButtonClickHandler}
          text="Go to Trap Zone"
        />

        {(() => {
          if (isChecked) {
            return <FocusTrapZone>{this._internalContents()}</FocusTrapZone>;
          } else {
            return <div>{this._internalContents()}</div>;
          }
        })()}
      </div>
    );
  }

  private _internalContents(): JSX.Element {
    const { isChecked } = this.state;

    return (
      <div className="ms-FocusTrapZoneBoxExample">
        <TextField label="Default TextField" placeholder="Input inside Focus Trap Zone" className="" />
        <Link href="" className="">
          Hyperlink inside FocusTrapZone
        </Link>
        <br />
        <br />
        <Toggle
          componentRef={this._setRef}
          checked={isChecked}
          onChange={this._onFocusTrapZoneToggleChanged}
          label="Focus Trap Zone"
          onText="On"
          offText="Off"
        />
        {(() => {
          if (isChecked) {
            return (
              <DefaultButton
                secondaryText="Exit Focus Trap Zone"
                onClick={this._onExitButtonClickHandler}
                text="Exit Focus Trap Zone"
              />
            );
          }
        })()}
      </div>
    );
  }

  private _onButtonClickHandler = (): void => {
    this.setState({
      isChecked: true
    });
  };

  private _onExitButtonClickHandler = (): void => {
    this.setState({
      isChecked: false
    });
  };

  private _onFocusTrapZoneToggleChanged = (ev: React.MouseEvent<HTMLElement>, isChecked: boolean): void => {
    this.setState(
      {
        isChecked: isChecked
      },
      () => this._toggle.focus()
    );
  };

  private _setRef = (toggle: IToggle): void => {
    this._toggle = toggle;
  };
}
