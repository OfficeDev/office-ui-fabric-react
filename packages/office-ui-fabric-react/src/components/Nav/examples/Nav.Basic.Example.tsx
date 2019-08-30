import * as React from 'react';
import { Nav, INavLink, INav } from 'office-ui-fabric-react/lib/Nav';
/// this variable is used to test INav.focus method below.
/// const _nav = React.createRef<INav>();
export const NavBasicExample: React.FunctionComponent = () => {
  return (
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey="key3"
      /// componentRef={_nav}
      expandButtonAriaLabel="Expand or collapse"
      selectedAriaLabel="Selected"
      styles={{
        root: {
          width: 208,
          height: 350,
          boxSizing: 'border-box',
          border: '1px solid #eee',
          overflowY: 'auto'
        }
      }}
      groups={[
        {
          links: [
            {
              name: 'Home',
              url: 'http://example.com',
              links: [
                {
                  name: 'Activity',
                  url: 'http://msn.com',
                  key: 'key1',
                  target: '_blank'
                },
                {
                  name: 'MSN',
                  url: 'http://msn.com',
                  disabled: true,
                  key: 'key2',
                  target: '_blank'
                }
              ],
              isExpanded: true
            },
            {
              name: 'Documents',
              url: 'http://example.com',
              key: 'key3',
              isExpanded: true,
              target: '_blank'
            },
            {
              name: 'Pages',
              url: 'http://msn.com',
              key: 'key4',
              target: '_blank'
            },
            {
              name: 'Notebook',
              url: 'http://msn.com',
              key: 'key5',
              disabled: true
            },
            {
              name: 'Communication and Media',
              url: 'http://msn.com',
              key: 'key6',
              target: '_blank'
            },
            {
              name: 'News',
              url: 'http://cnn.com',
              icon: 'News',
              key: 'key7',
              target: '_blank'
            }
          ]
        }
      ]}
    />
  );
};

function _onLinkClick(ev: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }

  /// below code has nothing to do with onClick but we use this entry to test out INav.focus() public API.
  /// this is not needed when you write normal onLinkClick Handler.
  /// if (_nav && _nav.current) {
  ///  _nav.current.focus(true);
  /// }
}
