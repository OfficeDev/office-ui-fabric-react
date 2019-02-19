import * as React from 'react';
import { Announced } from '../Announced';
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn,
  IDetailsList,
  IDetailsRowProps,
  DetailsRow
} from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { IconButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { TextField, ITextField } from 'office-ui-fabric-react/lib/TextField';
import { createRef } from 'office-ui-fabric-react/lib/Utilities';

const _items: {
  key: number;
  name: string;
  modifiedby: string;
  modified: number;
  filesize: string;
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
    name: 'Modified',
    fieldName: 'modified',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for modified'
  },
  {
    key: 'column3',
    name: 'Modified By',
    fieldName: 'modifiedby',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for modifiedby'
  },
  {
    key: 'column4',
    name: 'File Size',
    fieldName: 'filesize',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for filesize'
  }
];

const _names: string[] = [
  'Annie Lindqvist',
  'Aaron Reid',
  'Alex Lundberg',
  'Roko Kolar',
  'Christian Bergqvist',
  'Valentina Lovric',
  'Makenzie Sharett'
];

const nullFunction = (): null => null;

export interface IAnnouncedQuickActionsExampleState {
  items: { key: number; name?: string; modified?: number; modifiedby?: string; filesize?: string }[];
  selectionDetails: {};
  showItemIndexInView: boolean;
  renameDialogOpen: boolean;
  dialogContent: JSX.Element | undefined;
  announced?: JSX.Element;
}

export class AnnouncedQuickActionsExample extends React.Component<{}, IAnnouncedQuickActionsExampleState> {
  private _selection: Selection;
  private _detailsList = createRef<IDetailsList>();
  private _textField = createRef<ITextField>();

  constructor(props: {}) {
    super(props);

    // Populate with items for demos.
    if (_items.length === 0) {
      for (let i = 0; i < 20; i++) {
        _items.push({
          key: i,
          name: 'Item ' + i,
          modified: i,
          modifiedby: _names[Math.floor(Math.random() * _names.length)],
          filesize: Math.floor(Math.random() * 30).toString() + ' MB'
        });
      }
    }

    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() })
    });

    this._onRenderRow = this._onRenderRow.bind(this);
    this._deleteItem = this._deleteItem.bind(this);
    this._onRenderItemColumn = this._onRenderItemColumn.bind(this);
    this._closeRenameDialog = this._closeRenameDialog.bind(this);
    this._renderAnnounced = this._renderAnnounced.bind(this);

    this.state = {
      items: _items,
      selectionDetails: this._getSelectionDetails(),
      showItemIndexInView: false,
      renameDialogOpen: false,
      dialogContent: undefined,
      announced: undefined
    };
  }

  public render(): JSX.Element {
    const { items, renameDialogOpen, dialogContent } = this.state;

    return (
      <div>
        {this._renderAnnounced()}
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            componentRef={this._detailsList}
            items={items}
            columns={_columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.fixedColumns}
            selection={this._selection}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            onRenderItemColumn={this._onRenderItemColumn}
            onRenderRow={this._onRenderRow}
          />
          <Dialog hidden={!renameDialogOpen} onDismiss={this._closeRenameDialog}>
            {dialogContent}
          </Dialog>
        </MarqueeSelection>
      </div>
    );
  }

  public componentWillUnmount() {
    if (this.state.showItemIndexInView) {
      const itemIndexInView = this._detailsList!.current!.getStartItemIndexInView();
      alert('unmounting, getting first item index that was in view: ' + itemIndexInView);
    }
  }

  private _onRenderRow(props: IDetailsRowProps): JSX.Element {
    return <DetailsRow {...props} />;
  }

  private _onRenderItemColumn(item: any, index: number, column: IColumn) {
    const fieldContent = item[column.fieldName || ''];

    switch (column.key) {
      case 'column1':
        return (
          <div>
            {fieldContent}
            <IconButton
              iconProps={{ iconName: 'MoreVertical' }}
              role="button"
              aria-haspopup={true}
              onRenderMenuIcon={nullFunction}
              styles={{ root: { float: 'right', height: 'inherit' } }}
              menuProps={{
                items: [
                  {
                    key: 'delete',
                    text: 'Delete',
                    onClick: () => this._deleteItem(index)
                  },
                  {
                    key: 'rename',
                    text: 'Rename',
                    onClick: () => this._renameItem(item, index)
                  }
                ]
              }}
            />
          </div>
        );

      default:
        return <span>{fieldContent}</span>;
    }
  }

  private _renderAnnounced(): JSX.Element | undefined {
    const { announced } = this.state;
    return announced;
  }

  private _deleteItem(index: number): void {
    const items = this.state.items;
    items.splice(items.indexOf(items[index]), 1);
    for (let i = 0; i < items.length; i++) {
      console.log(i + ': ' + items[i].name);
    }
    this.setState(
      {
        items: items,
        announced: <Announced message={`Item deleted`} />
      },
      () => {
        if (this._detailsList.current) {
          this._detailsList.current.forceUpdate();
        }
      }
    );
    return;
  }

  private _renameItem(item: any, index: number): void {
    this.setState({
      renameDialogOpen: true,
      dialogContent: (
        <>
          <TextField componentRef={this._textField} label="Rename" value={item.name} />
          <DialogFooter>
            <PrimaryButton onClick={this._updateItemName.bind(this, item, index)} text="Save" />
          </DialogFooter>
        </>
      )
    });
    return;
  }

  private _updateItemName(item: any, index: number): void {
    if (this._textField && this._textField.current) {
      const items = this.state.items;
      items[index].name = this._textField.current.value;
      this.setState(
        {
          renameDialogOpen: false,
          items: items,
          announced: <Announced message={`Item renamed`} />
        },
        () => {
          if (this._detailsList.current) {
            this._detailsList.current.forceUpdate();
          }
        }
      );
    } else {
      return;
    }
  }

  private _closeRenameDialog(): void {
    this.setState({
      renameDialogOpen: false
    });
  }

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
