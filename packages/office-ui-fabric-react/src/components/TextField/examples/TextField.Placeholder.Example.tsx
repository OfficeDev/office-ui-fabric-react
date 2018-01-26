import * as React from 'react';
import { DefaultTextField } from 'office-ui-fabric-react/lib/TextField';
import './TextField.Examples.scss';

export class TextFieldPlaceholderExample extends React.Component<any, any> {
  public render() {
    return (
      <div className='docs-TextFieldExample'>
        <DefaultTextField
          placeholder='I am a placeholder.'
          ariaLabel='Please enter text here'
        />
        <DefaultTextField
          disabled={ true }
          placeholder='I am disabled. '
        />
        <DefaultTextField
          required={ true }
          placeholder='I am required.'
        />
        <DefaultTextField
          errorMessage='Error message'
          placeholder='I have an error message.'
        />
      </div>
    );
  }
}