import * as React from 'react';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Overlay } from 'office-ui-fabric-react/lib/Overlay';

import './Overlay.Example.scss';

export class OverlayDarkExample extends React.Component<{}, {
  isOverlayVisible: boolean;
}> {
  constructor(props: {}) {
    super(props);

    this.state = { isOverlayVisible: false };
  }

  public render() {
    const { isOverlayVisible } = this.state;

    return (
      <div>
        <DefaultButton
          onClick={ this._toggleOverlay }
          text='Show the overlay'
        />
        { isOverlayVisible && (
          <Overlay
            isDarkThemed={ true }
            onClick={ this._setVisibilityFalse }
          >
            <div className='OverlayExample-content'>
              <p>I am content within the overlay.</p>
            </div>
          </Overlay>
        ) }
      </div>
    );
  }

  @autobind
  private _setVisibilityFalse(): void {
    this.setState({ isOverlayVisible: false });
  }

  @autobind
  private _toggleOverlay(): void {
    this.setState({ isOverlayVisible: !this.state.isOverlayVisible });
  }
}
