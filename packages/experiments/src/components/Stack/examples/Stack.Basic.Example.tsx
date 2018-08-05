import * as React from 'react';
import { Stack } from '../Stack';
import { Text } from '../../Text/Text';

export class StackBasicExample extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  public render(): JSX.Element {
    const gapSizeHorizontal = 16;
    const gapSizeVertical = 8;
    const padding = 20;

    return (
      <Stack horizontalAlignment="center">
        <Text>A horizontal stack</Text>
        <Stack horizontal gap={gapSizeHorizontal} padding={padding} verticalAlignment="center">
          <Text>Text 1</Text>
          <Text family="monospace">Text 2</Text>
          <Text>Text 3</Text>
        </Stack>
        <Stack gap={gapSizeVertical} padding={padding} horizontalAlignment="center">
          <Text>A vertical stack</Text>
          <Text size="small">Text 1</Text>
          <Text size="medium">Text 2</Text>
          <Text size="large">Text 3</Text>
        </Stack>
        <Stack.Item align="end">
          <Text>I am a stack item!</Text>
        </Stack.Item>
        <Stack horizontal fill>
          <Stack.Item grow={5}>
            <Text>grow is 5</Text>
          </Stack.Item>
          <Stack.Item grow={1}>
            <Text>grow is 1</Text>
          </Stack.Item>
        </Stack>
      </Stack>
    );
  }
}
