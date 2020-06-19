import * as React from 'react';
import { Button } from './Button';
import * as renderer from 'react-test-renderer';
import { ButtonRef } from './Button.types';
import { mount, ReactWrapper } from 'enzyme';

describe('Button', () => {
  let wrapper: ReactWrapper | undefined;

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
      wrapper = undefined;
    }
  });

  /**
   * Note: see more visual regression tests for Button in /apps/vr-tests.
   */
  it('renders a default state', () => {
    const component = renderer.create(<Button content="Default button" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('can be focused', () => {
    const rootRef = React.createRef<HTMLButtonElement>();
    const componentRef = React.createRef<ButtonRef>();

    wrapper = mount(<Button ref={rootRef} componentRef={componentRef} content="Focus me" />);

    expect(typeof rootRef.current).toEqual('object');
    expect(document.activeElement).not.toEqual(rootRef.current);

    componentRef.current?.focus();

    expect(document.activeElement).toEqual(rootRef.current);
  });
});
