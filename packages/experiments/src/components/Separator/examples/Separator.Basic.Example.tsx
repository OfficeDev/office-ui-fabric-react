import * as React from 'react';
import { Separator } from '@uifabric/experiments/lib/Separator';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Text } from 'office-ui-fabric-react/lib/Text';

export class SeparatorBasicExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    const message = 'Today';

    const verticalStyle = mergeStyles({
      height: '200px'
    });

    return (
      <Stack gap={15}>
        <Stack gap={10}>
          <Text>Horizontal center aligned</Text>
          <Separator alignText="center">Today</Separator>
        </Stack>
        <Stack gap={10}>
          <Text>Horizontal left aligned</Text>
          <Separator alignText="start">{message}</Separator>
        </Stack>
        <Stack gap={10}>
          <Text>Horizontal right aligned</Text>
          <Separator alignText="end">{message}</Separator>
        </Stack>
        <Stack gap={10}>
          <Text>Empty horizontal</Text>
          <Separator />
        </Stack>
        <Stack horizontal horizontalAlign="space-evenly">
          <Stack horizontalAlign="center" gap={15}>
            <Text>Vertical center aligned</Text>
            <Stack.Item className={verticalStyle}>
              <Separator vertical alignText="center">
                {message}
              </Separator>
            </Stack.Item>
          </Stack>
          <Stack horizontalAlign="center" gap={15}>
            <Text>Vertical start aligned</Text>
            <Stack.Item className={verticalStyle}>
              <Separator vertical alignText="start">
                {message}
              </Separator>
            </Stack.Item>
          </Stack>
          <Stack horizontalAlign="center" gap={15}>
            <Text>Vertical end aligned</Text>
            <Stack.Item className={verticalStyle}>
              <Separator vertical alignText="end">
                {message}
              </Separator>
            </Stack.Item>
          </Stack>
          <Stack horizontalAlign="center" gap={15}>
            <Text>Empty vertical</Text>
            <Stack.Item className={verticalStyle}>
              <Separator vertical />
            </Stack.Item>
          </Stack>
        </Stack>
      </Stack>
    );
  }
}
