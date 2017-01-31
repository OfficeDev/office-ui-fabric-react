import * as React from 'react';
import { DefaultButton } from '../../../../Button';
import { Label } from '../../../../Label';
import { IButtonProps } from './IButtonProps';

export class ButtonDefaultExample extends React.Component<IButtonProps, {}> {
  public constructor() {
    super();
  }

  public render() {
    let { disabled } = this.props;

    return (
      <div className='ms-BasicButtonsExample'>
        <Label>Default button</Label>
        <DefaultButton data-automation-id='test' disabled={ disabled }>Create account</DefaultButton>
      </div>
    );
  }
}
