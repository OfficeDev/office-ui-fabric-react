import * as React from 'react';
import { Alert } from '@fluentui/react-experimental';

const AlertExampleDismissActionRtl = () => (
  <Alert
    actions={[
      {
        content: 'مرحبا',
        primary: true
      },
      {
        content: 'عالم'
      }
    ]}
    icon="exclamation-triangle"
    content="مرحبا العالم"
  />
);

export default AlertExampleDismissActionRtl;
