import * as React from 'react';
import { Button, Flex } from '@fluentui/react-experimental';

const ButtonExampleEmphasis = () => (
  <Flex gap="gap.smaller">
    <Button primary>
      <Button.Content>Primary</Button.Content>
    </Button>
    <Button secondary>
      <Button.Content>Secondary</Button.Content>
    </Button>
  </Flex>
);

export default ButtonExampleEmphasis;
