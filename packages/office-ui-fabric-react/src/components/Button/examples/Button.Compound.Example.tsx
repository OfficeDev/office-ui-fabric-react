import * as React from 'react';
import {
  CompoundButton,
  IButtonProps
} from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';

export class ButtonCompoundExample extends React.Component<IButtonProps, {}> {
  public constructor() {
    super();
  }

  public render() {
    let { disabled, checked } = this.props;

    return (
      <div className='ms-BasicButtonsExample'>
        <Label>Compound button</Label>
        <CompoundButton
          description='You can create a new account here.'
          disabled={ disabled }
          checked={ checked }
        >
          Create account
        </CompoundButton>
        <Label>Compound button with Icon</Label>
        <CompoundButton
          description='You can create a new account here.'
          disabled={ disabled }
          checked={ checked }
          iconProps={ { iconName: 'Emoji2' } }
        >
          Create account
        </CompoundButton>
        <Label>Compound button with Icon and custom description</Label>
        <CompoundButton
          styles={ { root: { minWidth: '258px', minHeight: '85px', padding: '12px 20px 16px 17px' } } }
          description='Top 1";Bottom 1";Left 1.25";Right 1.25"'
          disabled={ disabled }
          checked={ checked }
          iconProps={ { iconName: 'Page' } }
          data={ [
            'Top	1"',
            'Bottom	1"',
            'Left	1.25"',
            'Right	1.25"'
          ] }
          onRenderDescription={ this._onRenderDescription }
        >
          Normal
        </CompoundButton>
      </div>
    );
  }

  _onRenderDescription(props: IButtonProps): JSX.Element {
    return (
      <table style={ { borderCollapse: 'collapse', width: '100%', whiteSpace: 'pre' } }>
        <tbody>
          <tbody>
            <tr>
              <td style={ { width: '50%' } }>{ props.data[0] }</td>
              <td style={ { width: '50%' } }>{ props.data[1] }</td>
            </tr>
            <tr>
              <td style={ { width: '50%' } }>{ props.data[2] }</td>
              <td style={ { width: '50%' } }>{ props.data[3] }</td>
            </tr>
          </tbody>
        </tbody>
      </table>
    );
  }
}