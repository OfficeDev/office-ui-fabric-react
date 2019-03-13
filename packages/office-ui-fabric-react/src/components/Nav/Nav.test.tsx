import * as React from 'react';

import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';

import { Nav } from './Nav';
import { NavBase } from './Nav.base';

describe('Nav', () => {
  it('renders Nav correctly', () => {
    const component = renderer.create(
      <Nav
        groups={[
          {
            links: [
              {
                name: '',
                url: ''
              }
            ]
          }
        ]}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onClick() correctly', () => {
    const handler = jest.fn();
    const nav = mount<NavBase>(
      <NavBase
        groups={[
          {
            links: [
              {
                name: 'foo',
                url: 'http://example.com',
                onClick: handler
              }
            ]
          }
        ]}
      />
    );

    const link = nav.find('a.ms-Button');
    link.simulate('click');
    expect(handler.mock.calls.length).toBe(1);
  });

  it('do not call onClick() on disabled link', () => {
    const handler = jest.fn();
    const nav = mount<NavBase>(
      <NavBase
        groups={[
          {
            links: [
              {
                name: 'foo',
                url: 'http://example.com',
                onClick: handler,
                disabled: true
              }
            ]
          }
        ]}
      />
    );

    const link = nav.find('button.ms-Button');
    link.simulate('click');
    expect(handler.mock.calls.length).toBe(0);
  });

  it('sets ARIA label on the nav element', () => {
    const label = 'The navigation label';
    const nav = mount<NavBase>(<Nav ariaLabel={label} groups={[]} />);
    expect(nav.find('[role="navigation"]').prop('aria-label')).toEqual(label);
  });

  it('uses location.href to determine link selected status if state/props is not set', () => {
    const nav = mount<NavBase>(
      <Nav
        groups={[
          {
            links: [
              {
                key: 'Bing',
                name: 'Bing',
                url: 'http://localhost/#/testing1'
              },
              {
                key: 'OneDrive',
                name: 'OneDrive',
                url: 'http://localhost/#/testing2'
              }
            ]
          }
        ]}
      />
    );
    window.history.pushState({}, 'Test Title', '/#/testing1');
    nav.instance().forceUpdate();

    expect(nav.getDOMNode().querySelectorAll('.ms-Nav-compositeLink.is-selected').length).toBe(1);
    expect(nav.getDOMNode().querySelectorAll('.ms-Nav-compositeLink.is-selected')[0].textContent).toEqual('Bing');
  });
});
