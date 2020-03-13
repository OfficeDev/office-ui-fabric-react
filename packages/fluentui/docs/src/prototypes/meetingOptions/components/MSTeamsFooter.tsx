import * as React from 'react';
import { Divider, Layout } from '@fluentui/react-experimental';

export default props => {
  return (
    <div style={{ position: 'fixed', width: 'inherit', bottom: '0px' }}>
      <Divider />
      <Layout
        renderMainArea={() => {
          return <div style={{ lineHeight: '40px', margin: '0 auto' }}>{props.content}</div>;
        }}
      />
    </div>
  );
};
