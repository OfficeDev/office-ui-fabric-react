import * as React from 'react';
import { DefaultTextField } from 'office-ui-fabric-react/lib/TextField';
import './TextField.Examples.scss';

export class TextFieldPrefixExample extends React.Component<any, any> {
  public render() {
    return (
      <div className='docs-TextFieldExample'>
        <DefaultTextField
          prefix='https://'
        />
      </div>
    );
  }
}
