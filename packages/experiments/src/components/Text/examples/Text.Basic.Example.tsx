import * as React from 'react';
import { Text } from '../Text';

export class TextBasicExample extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  public render(): JSX.Element {
    return <Text />;
  }
}
