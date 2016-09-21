import * as React from 'react';
import {
  GroupedList,
  IGroup,
  IGroupDividerProps
} from '../../../../components/GroupedList/index';
import { Toggle } from '../../../../Toggle';
import { createListItems } from '../../../utilities/data';
import './GroupedList.Custom.Example.scss';

export class GroupedListCustomExample extends React.Component<any, any> {
  private _items: any[];
  private _groups: IGroup[];

  constructor() {
    super();

    this._items = createListItems(20);
    this._groups = Array.apply(null, Array(4)).map((value, index): IGroup => {
      return {
        count: 5,
        key: 'group' + index,
        name: 'group ' + index,
        startIndex: 5 * index,
        level: 0,
        onRenderFooter: this._onRenderFooter,
        onRenderHeader: this._onRenderHeader
      };
    });
  }

  public render() {
    return (
      <GroupedList
        ref='groupedList'
        items={ this._items }
        onRenderCell={ this._onRenderCell }
        groups={ this._groups }
        />
    );
  }

  private _onRenderCell(nestingDepth: number, item: any, itemIndex: number) {
    return (
      <div data-selection-index={ itemIndex }>
          <span className='ms-GroupedListExample-name'>
            { item.name }
          </span>
      </div>
    );
  }

  private _onRenderHeader(props: IGroupDividerProps): React.ReactNode {
    return (
      <div className='ms-GroupedListExample-header ms-font-xl'>
          This is a custom header for { props.group.name }
          <Toggle label='Summarize' onChanged={ checked => props.onToggleSummarize(props.group) } />
      </div>
    );
  }

  private _onRenderFooter(props: IGroupDividerProps): React.ReactNode {
    return (
      <div className='ms-GroupedListExample-footer ms-font-xl'>
        This is a custom footer for { props.group.name }
      </div>
    );
  }
}
