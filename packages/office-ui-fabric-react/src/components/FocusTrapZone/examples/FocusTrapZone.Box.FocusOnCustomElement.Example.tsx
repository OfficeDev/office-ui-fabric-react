import * as React from 'react';

import { FocusTrapZone } from 'office-ui-fabric-react/lib/FocusTrapZone';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Toggle, IToggle } from 'office-ui-fabric-react/lib/Toggle';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

export interface IFocusTrapZoneBoxCustomElementExampleState {
  useTrapZone: boolean;
}

const _focusClassName = 'shouldFocusInput';

export class FocusTrapZoneBoxCustomElementExample extends React.Component<{}, IFocusTrapZoneBoxCustomElementExampleState> {
  public state: IFocusTrapZoneBoxCustomElementExampleState = {
    useTrapZone: false
  };

  private _toggle = React.createRef<IToggle>();

  public render() {
    return (
      <div>
        {this.state.useTrapZone ? (
          <FocusTrapZone firstFocusableSelector={_focusClassName}>{this._internalContents()}</FocusTrapZone>
        ) : (
          this._internalContents()
        )}
      </div>
    );
  }

  private _internalContents() {
    const { useTrapZone } = this.state;

    return (
      <Stack
        horizontalAlign="start"
        tokens={{ childrenGap: 15 }}
        styles={{
          root: { border: `2px solid ${useTrapZone ? '#ababab' : 'transparent'}`, padding: 10 }
        }}
      >
        <Toggle
          label="Use trap zone"
          componentRef={this._toggle}
          checked={useTrapZone}
          onChange={this._onFocusTrapZoneToggleChanged}
          onText="On (toggle to exit)"
          offText="Off"
        />
        <TextField label="Input inside trap zone" styles={{ root: { width: 300 } }} />
        <Link href="https://bing.com" className={_focusClassName}>
          Hyperlink which will receive initial focus when trap zone is activated
        </Link>
      </Stack>
    );
  }

  private _onFocusTrapZoneToggleChanged = (ev: React.MouseEvent<HTMLElement>, checked?: boolean): void => {
    this.setState({ useTrapZone: !!checked }, () => {
      // Restore focus to toggle after disabling the trap zone
      // (the trap zone itself will handle initial focus when it's enabled)
      if (!checked) {
        this._toggle.current!.focus();
      }
    });
  };
}
