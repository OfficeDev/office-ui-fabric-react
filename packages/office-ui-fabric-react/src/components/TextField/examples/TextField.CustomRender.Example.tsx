import * as React from 'react';
import { DefaultTextField, ITextFieldProps } from 'office-ui-fabric-react/lib/TextField';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import './TextField.Examples.scss';

export class TextFieldCustomRenderExample extends React.Component<{}, {
  isCalloutVisible: boolean;
}> {

  private _iconButtonElement: HTMLElement;

  constructor(props: {}) {
    super(props);

    this.state = {
      isCalloutVisible: false
    };
  }

  public render() {
    return (
      <div className='docs-TextFieldExample'>
        <DefaultTextField onRenderLabel={ this._onRenderLabel } />
      </div>
    );
  }

  @autobind
  private _onRenderLabel(props: ITextFieldProps): JSX.Element {

    let { isCalloutVisible } = this.state;
    return (
      <div className='ms-CustomRenderExample' style={ { display: 'flex', alignItems: 'center' } }>
        <span>TextField with custom label render</span>
        <span className='ms-CustomRenderExample-labelIconArea' ref={ (menuButton) => this._iconButtonElement = menuButton! }>
          <IconButton
            iconProps={ { iconName: 'Info' } }
            title='Info'
            ariaLabel='Info'
            onClick={ this._onClick }
          />
        </span>
        { isCalloutVisible && (
          <Callout
            className='ms-CustomRenderExample-callout'
            target={ this._iconButtonElement }
            onDismiss={ this._onDismiss }
          >
            <text> In additon to the label itself, this label includes an iconbutton which pops out more information in a callout</text>
          </Callout>
        ) }
      </div>
    );

  }

  @autobind
  private _onClick(): void {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  }

  @autobind
  private _onDismiss() {
    this.setState({
      isCalloutVisible: false
    });
  }
}
