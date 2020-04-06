import { Card, Image } from '@fluentui/react-northstar';
import * as React from 'react';

const CardExamplePreview = () => (
  <Card compact>
    <Card.Preview fitted>
      <Image fluid src="public/images/wireframe/square-image.png" style={{ borderRadius: '4px' }} />
    </Card.Preview>
  </Card>
);

export default CardExamplePreview;
