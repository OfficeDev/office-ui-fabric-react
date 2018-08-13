import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import {
  DetailsList,
  DetailsListLayoutMode,
  IDetailsHeaderProps,
  Selection,
  IColumn
} from 'office-ui-fabric-react/lib/DetailsList';
import { IRenderFunction, createRef } from 'office-ui-fabric-react/lib/Utilities';
import { TooltipHost, ITooltipHostProps } from 'office-ui-fabric-react/lib/Tooltip';
import { ScrollablePane, IScrollablePane } from 'office-ui-fabric-react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';

const _items: {
  key: number;
  name: string;
  value: number;
}[] = [];

const _columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Name',
    fieldName: 'name',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for name'
  },
  {
    key: 'column2',
    name: 'Value',
    fieldName: 'value',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for value'
  }
];

export class ScrollablePaneDetailsListExample extends React.Component<
  {},
  {
    items: {}[];
    selectionDetails: string;
  }
> {
  private _scrollablePane = createRef<IScrollablePane>();
  private _selection: Selection;

  constructor(props: {}) {
    super(props);

    // Populate with items for demos.
    if (_items.length === 0) {
      for (let i = 0; i < 200; i++) {
        _items.push({
          key: i,
          name: 'Item ' + i,
          value: i
        });
      }
    }

    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() })
    });

    this.state = {
      items: _items,
      selectionDetails: this._getSelectionDetails()
    };
  }

  public render(): JSX.Element {
    const { items, selectionDetails } = this.state;

    return (
      <div
        style={{
          height: '10000px',
          position: 'relative',
          maxHeight: 'inherit'
        }}
      >
        <ScrollablePane componentRef={this._scrollablePane}>
          <Sticky stickyPosition={StickyPositionType.Header}>{selectionDetails}</Sticky>
          <TextField
            label="Filter by name:"
            // tslint:disable-next-line:jsx-no-lambda
            onChange={(ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string) =>
              this.setState({ items: text ? _items.filter(i => i.name.toLowerCase().indexOf(text) > -1) : _items })
            }
          />
          <Sticky stickyPosition={StickyPositionType.Header}>
            <h1 style={{ margin: '0px' }}>Item List</h1>
          </Sticky>
          <MarqueeSelection selection={this._selection}>
            <DetailsList
              items={items}
              columns={_columns}
              setKey="set"
              layoutMode={DetailsListLayoutMode.fixedColumns}
              onScroll={this._onScroll}
              onRenderDetailsHeader={
                // tslint:disable-next-line:jsx-no-lambda
                (detailsHeaderProps: IDetailsHeaderProps, defaultRender: IRenderFunction<IDetailsHeaderProps>) => (
                  <Sticky stickyPosition={StickyPositionType.Header}>
                    {defaultRender({
                      ...detailsHeaderProps,
                      onRenderColumnHeaderTooltip: (tooltipHostProps: ITooltipHostProps) => (
                        <TooltipHost {...tooltipHostProps} />
                      )
                    })}
                  </Sticky>
                )
              }
              selection={this._selection}
              selectionPreservedOnEmptyClick={true}
              ariaLabelForSelectionColumn="Toggle selection"
              ariaLabelForSelectAllCheckbox="Toggle selection for all items"
              // tslint:disable-next-line:jsx-no-lambda
              onItemInvoked={item => alert(`Item invoked: ${item.name}`)}
            />
          </MarqueeSelection>
        </ScrollablePane>
      </div>
    );
  }

  private _onScroll = (e: Event): void => {
    if (this._scrollablePane.current) {
      this._scrollablePane.current.forceLayoutUpdate();
    }
  };

  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + (this._selection.getSelection()[0] as any).name;
      default:
        return `${selectionCount} items selected`;
    }
  }
}
