import * as React from 'react';
import {
  IButtonBaseProps,
  DefaultButton
} from 'office-ui-fabric-react/lib/Button';
import {
  Label
} from 'office-ui-fabric-react/lib/Label';

export class ButtonAnchorExample extends React.Component<IButtonBaseProps, {}> {
  public constructor() {
    super();
  }

  public render() {
    let { disabled, checked } = this.props;

    return (
      <div className='ms-BasicButtonsExample'>
        <DefaultButton
          data-automation-id='test'
          disabled={ disabled }
          checked={ checked }
          href='http://bing.com'
          target='_blank'
          title='Let us bing!'
        >
          Bing
        </DefaultButton>
      </div >
    );
  }
}
