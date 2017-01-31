import * as React from 'react';
import {
  Nav,
  INavProps
} from '../../../../index';
import './Nav.Basic.Example.scss';

export class NavBasicExample extends React.Component<any, any> {
  public horizontal: boolean;
  constructor(props: INavProps) {
    super(props);
    this.horizontal = Boolean(props.horizontal);
    this._onClickHandler = this._onClickHandler.bind(this);
  }

  public render() {
    return (
      <div className={ this.horizontal ? 'ms-NavExample-HorizontalPane' : 'ms-NavExample-LeftNav' } >
        <Nav
          groups={
            [
              {
                links:
                [
                  {
                    name: 'Home',
                    url: 'http://example.com',
                    links: [{
                      name: 'Activity',
                      url: 'http://msn.com',
                      key: 'key1'
                    },
                    {
                      name: 'News',
                      url: 'http://msn.com',
                      key: 'key2'
                    }],
                    isExpanded: true
                  },
                  { name: 'Documents', url: 'http://example.com', key: 'key3', isExpanded: true },
                  { name: 'Pages', url: 'http://msn.com', key: 'key4' },
                  { name: 'Notebook', url: 'http://msn.com', key: 'key5' },
                  { name: 'Long Name Test for elipse', url: 'http://msn.com', key: 'key6' },
                  {
                    name: 'Edit',
                    url: 'http://cnn.com',
                    onClick: this._onClickHandler2,
                    icon: 'Edit',
                    key: 'key8'
                  }
                ]
              }
            ]
          }
          expandedStateText={ 'expanded' }
          collapsedStateText={ 'collapsed' }
          selectedKey={ 'key3' }
          horizontal={ this.horizontal }
          />
      </div>
    );
  }

  private _onClickHandler(e: React.MouseEvent<HTMLElement>) {
    alert('test');
    return false;
  }

  private _onClickHandler2(e: React.MouseEvent<HTMLElement>) {
    return false;
  }
}
