import * as React from 'react';
import { css } from '../../../../utilities/css';
import { ContextualMenu, DirectionalHint, Button } from '../../../../index';
import './ContextualMenuExample.scss';
export interface IContextualMenuMultiselectExampleState {
  selection?: { [ key: string]: boolean };
  target?: {x: number, y: number};
  isContextMenuVisible?: boolean;
}

export class ContextualMenuCustomizationExample extends React.Component<any, IContextualMenuMultiselectExampleState> {

    constructor() {
    super();
    this._onClick = this._onClick.bind(this);
    this._onDismiss = this._onDismiss.bind(this);
    this.state = {
      selection: {},
      isContextMenuVisible: false
    };
  }

  public render() {
    return (
      <div>
        <Button onClick={this._onClick}> Click for ContextualMenu </Button>
        { this.state.isContextMenuVisible ? (
          <ContextualMenu
            targetPoint={this.state.target}
            useTargetPoint={true}
            shouldFocusOnMount={ false }
            onDismiss={this._onDismiss}
            directionalHint={DirectionalHint.bottomLeftEdge}
            items={
              [
                {
                  key: 'newItem',
                  icon: 'circlePlus',
                  items: [
                    {
                      key: 'emailMessage',
                      name: 'Email message',
                    },
                    {
                      key: 'calendarEvent',
                      name: 'Calendar event',
                    }
                  ],
                  name: 'New'
                },
                {
                  key: 'upload',
                  icon: 'upload',
                  name: 'Upload'
                },
                {
                  key: 'divider_1',
                  name: '-',
                },
                {
                  key: 'charm',
                  name: 'Charm',
                  className: 'Charm-List',
                  items: [
                    {
                      key: 'none',
                      name: 'None'
                    },
                    {
                      key: 'cat',
                      name: 'cat',
                      onRender: this._renderCharmMenuItem,
                      className: 'od-ContextualMenu-customizationExample-item'
                    },
                    {
                      key: 'dog',
                      name: 'dog',
                      onRender: this._renderCharmMenuItem,
                      className: 'od-ContextualMenu-customizationExample-item'
                    },
                    {
                      key: 'plane',
                      name: 'plane',
                      onRender: this._renderCharmMenuItem,
                      className: 'od-ContextualMenu-customizationExample-item'
                    },
                    {
                      key: 'page',
                      name: 'page',
                      onRender: this._renderCharmMenuItem,
                      className: 'od-ContextualMenu-customizationExample-item'
                    },
                    {
                      key: 'firstAid',
                      name: 'firstAid',
                      onRender: this._renderCharmMenuItem,
                      className: 'od-ContextualMenu-customizationExample-item'
                    },
                    {
                      key: 'trophy',
                      name: 'trophy',
                      onRender: this._renderCharmMenuItem,
                      className: 'od-ContextualMenu-customizationExample-item'
                    },
                    {
                      key: 'home',
                      name: 'home',
                      onRender: this._renderCharmMenuItem,
                      className: 'od-ContextualMenu-customizationExample-item'
                    },
                    {
                      key: 'pill',
                      name: 'pill',
                      onRender: this._renderCharmMenuItem,
                      className: 'od-ContextualMenu-customizationExample-item'
                    },
                    {
                      key: 'briefcase',
                      name: 'briefcase',
                      onRender: this._renderCharmMenuItem,
                      className: 'od-ContextualMenu-customizationExample-item'
                    },
                    {
                      key: 'coffee',
                      name: 'coffee',
                      onRender: this._renderCharmMenuItem,
                      className: 'od-ContextualMenu-customizationExample-item'
                    },
                    {
                      key: 'people',
                      name: 'people',
                      onRender: this._renderCharmMenuItem,
                      className: 'od-ContextualMenu-customizationExample-item'
                    },
                    {
                      key: 'stopwatch',
                      name: 'stopwatch',
                      onRender: this._renderCharmMenuItem,
                      className: 'od-ContextualMenu-customizationExample-item'
                    },
                    {
                      key: 'music',
                      name: 'music',
                      onRender: this._renderCharmMenuItem,
                      className: 'od-ContextualMenu-customizationExample-item'
                    },
                    {
                      key: 'bag',
                      name: 'bag',
                      onRender: this._renderCharmMenuItem,
                      className: 'od-ContextualMenu-customizationExample-item'
                    }
                  ]
                },
                {
                  key: 'categories',
                  name: 'Categorize',
                  items: [
                    {
                      key: 'categories',
                      name: 'categories',
                      categoryList: [
                        {
                          name: 'Personal',
                          color: 'yellow'
                        },
                        {
                          name: 'Work',
                          color: 'green'
                        },
                        {
                          name: 'Birthday',
                          color: 'blue'
                        },
                        {
                          name: 'Spam',
                          color: 'grey'
                        },
                        {
                          name: 'Urgent',
                          color: 'red'
                        },
                        {
                          name: 'Hobbies',
                          color: 'black'
                        },
                      ],
                      onRender: this._renderCategoriesList
                    },
                    {
                      key: 'divider_1',
                      name: '-',
                    },
                    {
                      key: 'clear',
                      name: 'Clear categories'
                    },
                    {
                      key: 'manage',
                      name: 'Manage categories'
                    }
                  ]
                }
              ]
            }
          /> ) : null }
        </div>
      );
  }

  private _renderCharmMenuItem(item: any) {
    return <i className={ css('ms-Icon', 'od-ContextualMenu-customizationExample-icon', 'ms-Icon--' + item.name) } />;
  }

  private _renderCategoriesList(item: any) {
    return (
      <ul className='od-ContextualMenu-customizationExample-categoriesList'>
        <li className='od-ContextualMenu-item'>
          { item.categoryList.map( category =>
            <button className='od-ContextualMenu-link' role='menuitem'>
              <div>
                <span
                  className='od-ContextualMenu-icon od-ContextualMenu-customizationExample-categorySwatch'
                  style={ {backgroundColor: category.color} }/>
                <span className='od-ContextualMenu-itemText ms-font-m ms-font-weight-regular'>
                  { category.name }
                </span>
              </div>
            </button>
          )}
        </li>
      </ul>
      );
  }

  private _onClick(event: any) {
    this.setState({target: {x: event.clientX, y: event.clientY}, isContextMenuVisible: true});
  }

  private _onDismiss(event: any) {
    this.setState({isContextMenuVisible: false});
  }

}
