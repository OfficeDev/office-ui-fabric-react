import * as React from 'react';

import ComponentExample from '../../../../components/ComponentDoc/ComponentExample';
import NonPublicSection from '../../../../components/ComponentDoc/NonPublicSection';

const Visual = () => (
  <NonPublicSection title="Visual tests">
    <ComponentExample examplePath="components/Popup/Visual/PopupExamplePointerOffset" />
    <ComponentExample examplePath="components/Popup/Visual/PopupExamplePointerMargin" />
    <ComponentExample
      examplePath="components/Popup/Visual/PopupExampleContainerTransformed"
    />
  </NonPublicSection>
);

export default Visual;
