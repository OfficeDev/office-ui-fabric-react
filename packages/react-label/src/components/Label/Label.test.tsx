import * as React from 'react';
import { render } from '@testing-library/react';
import { Label } from './Label';
import { isConformant } from '../../common/isConformant';

describe('Label', () => {
  isConformant({
    Component: Label,
    displayName: 'Label',
  });

  // TODO add more tests here, and create visual regression tests in /apps/vr-tests

  it('renders a default state', () => {
    const result = render(<Label>Default Label</Label>);
    expect(result.container).toMatchSnapshot();
  });
});
