import * as React from 'react';
import { Chiclet } from '../Chiclet';
import { ChicletSize } from '../Chiclet.types';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { TextField, ITextField } from 'office-ui-fabric-react/lib/TextField';
import { createRef } from 'office-ui-fabric-react/lib/Utilities';

export interface IChicletBasicExampleState {
  textFieldValue: string;
}

export class ChicletBasicExample extends React.Component<{}, IChicletBasicExampleState> {
  private _textField = createRef<ITextField>();

  constructor(props: {}) {
    super(props);

    this.state = {
      textFieldValue: 'http://localhost:4322'
    };
  }

  public render(): JSX.Element {
    const { textFieldValue } = this.state;

    return (
      <Stack tokens={{ childrenGap: 16 }}>
        <Text>Try changing the url to see the chiclet with other metadata (eg. https://onedrive.com):</Text>
        <Stack horizontal tokens={{ childrenGap: 8 }}>
          <TextField componentRef={this._textField} styles={{ root: { width: '300px' } }} defaultValue="http://localhost:4322" />
          <DefaultButton text="Change url" onClick={this._onClickButton} />
        </Stack>
        <Chiclet url={textFieldValue} size={ChicletSize.medium} />
      </Stack>
    );
  }

  private _onClickButton = (): void => {
    if (this._textField && this._textField.current && this._textField.current.value) {
      this.setState({
        textFieldValue: this._textField.current.value
      });
    }
  };
}
