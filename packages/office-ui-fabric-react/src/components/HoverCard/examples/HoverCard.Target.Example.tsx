/* tslint:disable:no-unused-variable */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
/* tslint:enable:no-unused-variable */
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import {
  HoverCard,
  IExpandingCardProps
} from 'office-ui-fabric-react/lib/HoverCard';
import { DetailsList, buildColumns, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { DirectionalHint } from 'office-ui-fabric-react/lib/common/DirectionalHint';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { createListItems } from '@uifabric/example-app-base';
import { List, IListProps } from '../../List';
import './HoverCard.Example.scss';

let _items: any[];

export interface IHoverCardExampleState {
  items?: any[];
  columns?: IColumn[];
}

interface IHoverCardFieldProps {
  componentRef?: any;
  content: HTMLDivElement;
  expandingCardProps: IExpandingCardProps;
}

interface IHoverCardFieldState {
  contentRendered?: HTMLDivElement;
}

class HoverCardField extends BaseComponent<IHoverCardFieldProps, IHoverCardFieldState> {
  constructor(props: IHoverCardFieldProps) {
    super(props);

    this.state = {
      contentRendered: undefined
    };
  }

  public render() {
    return (
      <div ref={ (c: HTMLDivElement) => !this.state.contentRendered && this.setState({ contentRendered: c }) } data-is-focusable={ true }>
        { this.props.content }
        {
          this.state.contentRendered &&
          <HoverCard
            expandingCardProps={ this.props.expandingCardProps }
            target={ this.state.contentRendered }
            cardDismissDelay={ 300 }
            onCardVisible={ this._log('onCardVisible') }
            onCardHide={ this._log('onCardHide') }
            trapFocus={ true }
          />
        }
      </div>
    );
  }

  private _log(text: string): () => void {
    return (): void => {
      console.log(text);
    };
  }
}

export class HoverCardTargetExample extends BaseComponent<{}, IHoverCardExampleState> {

  constructor(props: {}) {
    super(props);

    _items = _items || createListItems(10);

    this.state = {
      items: _items,
      columns: _buildColumns()
    };
  }

  public render() {
    let { items, columns } = this.state;

    return (
      <div>
        <p> Hover over key of a row item to see the card </p>
        <DetailsList
          setKey='hoverSet'
          items={ items! }
          columns={ columns }
          onRenderItemColumn={ this._onRenderItemColumn }
          ariaLabel={ 'Hover card DetailsList test' }
        />
      </div>
    );
  }

  @autobind
  private _onRenderItemColumn(item: any, index: number, column: IColumn) {
    const expandingCardProps: IExpandingCardProps = {
      onRenderCompactCard: this._onRenderCompactCard,
      onRenderExpandedCard: this._onRenderExpandedCard,
      renderData: item,
      directionalHint: DirectionalHint.rightTopEdge,
      gapSpace: 16
    };

    if (column.key === 'key') {
      return (
        <div className='HoverCard-item'>
          <HoverCardField
            content={ item.key }
            expandingCardProps={ expandingCardProps }
          />
        </div>
      );
    }

    return item[column.key];
  }

  @autobind
  private _onRenderCompactCard(item: any): JSX.Element {
    return (
      <div className='hoverCardExample-compactCard'>
        <a target='_blank' href={ `http://wikipedia.org/wiki/${item.location}` }>
          { item.location }
        </a>
      </div>
    );
  }

  @autobind
  private _onRenderExpandedCard(item: any): JSX.Element {
    let { items, columns } = this.state;
    return (
      <div className='hoverCardExample-expandedCard'>
        { item.description }
        <List
          componentRef={ this._resolveRef('_list') }
          role='listbox'
          items={ items }
          onRenderCell={ (item: any) => this._onRenderItem(item) }
        />
      </div>
    );
  }

  @autobind
  private _onRenderItem(item: any): JSX.Element {
    return (
      <div className='ItemCell'>
        { item.key }
      </div>
    )
  }
}

function _buildColumns() {
  return buildColumns(_items).filter(column => column.name === 'location' || column.name === 'key');
}