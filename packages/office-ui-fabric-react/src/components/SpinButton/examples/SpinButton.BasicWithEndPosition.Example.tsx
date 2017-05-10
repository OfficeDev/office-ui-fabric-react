import * as React from 'react';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { Position } from 'office-ui-fabric-react/lib/utilities/positioning';

export class SpinButtonBasicWithEndPositionExample extends React.Component<any, any> {
  public render() {
    return (
      <SpinButton
        defaultValue='0'
        width='233px'
        icon='Light'
        label={ 'Basic SpinButton' }
        labelPosition={ Position.end }
        min={ 0 }
        max={ 100 }
        step={ 1 }
      />
    );
  }
}
