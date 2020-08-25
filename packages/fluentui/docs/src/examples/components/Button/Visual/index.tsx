import * as React from 'react';

import ComponentExample from '../../../../components/ComponentDoc/ComponentExample';
import NonPublicSection from '../../../../components/ComponentDoc/NonPublicSection';

const Types = () => (
  <NonPublicSection title="Visual tests">
    <ComponentExample examplePath="components/Button/Visual/ButtonExampleCompose" />
    <ComponentExample examplePath="components/Button/Visual/ButtonExampleUseCss" />
    <ComponentExample examplePath="components/Button/Visual/ButtonExampleComposition" />
  </NonPublicSection>
);

export default Types;
