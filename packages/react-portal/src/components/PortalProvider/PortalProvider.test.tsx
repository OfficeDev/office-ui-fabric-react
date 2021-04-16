import * as React from 'react';
import { PortalProvider } from './PortalProvider';
import * as renderer from 'react-test-renderer';
import { ReactWrapper } from 'enzyme';
import { isConformant } from '../../common/isConformant';

describe('PortalProvider', () => {
  isConformant({
    disabledTests: [
      'as-renders-html',
      'as-renders-fc',
      'component-handles-ref',
      'component-has-root-ref',
      'component-handles-classname',
      'as-passes-as-value',
    ],
    Component: PortalProvider,
    displayName: 'PortalProvider',
  });

  let wrapper: ReactWrapper | undefined;

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
      wrapper = undefined;
    }
  });

  /**
   * Note: see more visual regression tests for PortalProvider in /apps/vr-tests.
   */
  it('renders a default state', () => {
    const component = renderer.create(<PortalProvider>Default PortalProvider</PortalProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
