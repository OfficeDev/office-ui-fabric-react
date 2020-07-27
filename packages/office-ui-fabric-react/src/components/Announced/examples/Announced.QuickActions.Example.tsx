import * as React from 'react';
import { Announced } from 'office-ui-fabric-react/lib/Announced';
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn,
  IDetailsList,
  IDetailsRowProps,
  DetailsRow,
} from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { IconButton, PrimaryButton, IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { TextField, ITextField } from 'office-ui-fabric-react/lib/TextField';
import { useSetTimeout, useConst, useConstCallback } from '@uifabric/react-hooks';

const columns: IColumn[] = ['Name', 'Modified', 'Modified By', 'File Size'].map((name: string) => {
  const fieldName = name.replace(' ', '').toLowerCase();
  return {
    fieldName,
    name,
    key: fieldName,
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  };
});

const iconButtonStyles: Partial<IButtonStyles> = { root: { float: 'right', height: 'inherit' } };

const names: string[] = [
  'Annie Lindqvist',
  'Aaron Reid',
  'Alex Lundberg',
  'Roko Kolar',
  'Christian Bergqvist',
  'Valentina Lovric',
  'Makenzie Sharett',
];

const getMockDateString = (): string => {
  return 'Thu Jan 05 2017‌';
};

export interface IAnnouncedQuickActionsExampleItem {
  key: number;
  name: string;
  modified: string;
  modifiedby: string;
  filesize: string;
}

export interface IAnnouncedQuickActionsExampleState {
  selection: Selection;
}

export const AnnouncedQuickActionsExample: React.FunctionComponent = () => {
  const detailsList = React.useRef<IDetailsList>(null);
  const textField = React.useRef<ITextField>(null);
  const selection = useConst(() => new Selection());
  const [items, setItems] = React.useState<IAnnouncedQuickActionsExampleItem[]>(() => {
    const itemsList: IAnnouncedQuickActionsExampleItem[] = [];
    for (let i = 0; i < 20; i++) {
      itemsList.push({
        key: i,
        name: 'Item ' + i,
        modified: getMockDateString(),
        modifiedby: names[Math.floor(Math.random() * names.length)],
        filesize: Math.floor(Math.random() * 30).toString() + ' MB',
      });
    }
    return itemsList;
  });
  const [renameDialogOpen, setRenameDialogOpen] = React.useState<boolean>(false);

  const [dialogContent, setDialogContent] = React.useState<JSX.Element | undefined>(undefined);
  const [announced, setAnnounced] = React.useState<JSX.Element | undefined>(undefined);
  const [previousAnnouncedValue, setPreviousAnnouncedValue] = React.useState<JSX.Element | undefined>(undefined);

  const { setTimeout } = useSetTimeout();

  const onRenderRow = useConstCallback(
    (props: IDetailsRowProps): JSX.Element => {
      return <DetailsRow {...props} />;
    },
  );

  const deleteItem = useConstCallback((index: number): void => {
    setItems(items.filter((item, i) => i !== index));
    setAnnounced(<Announced message="Item deleted" aria-live="assertive" />);
    setPreviousAnnouncedValue(announced);
    return;
  });

  const renameItem = useConstCallback((item: IAnnouncedQuickActionsExampleItem, index: number): void => {
    setRenameDialogOpen(true);
    setDialogContent(
      <>
        <TextField componentRef={textField} label="Rename" defaultValue={item.name} />
        <DialogFooter>
          <PrimaryButton
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => updateItemName(index)}
            text="Save"
          />
        </DialogFooter>
      </>,
    );
    return;
  });

  const onRenderItemColumn = React.useCallback(
    (item: IAnnouncedQuickActionsExampleItem, index: number, column: IColumn) => {
      const fieldContent = item[column.fieldName as keyof IAnnouncedQuickActionsExampleItem];
      if (column.key === 'name') {
        return (
          <div>
            {fieldContent}
            <IconButton
              menuIconProps={{ iconName: 'MoreVertical' }}
              role="button"
              aria-haspopup
              aria-label="Show actions"
              styles={iconButtonStyles}
              menuProps={{
                items: [
                  {
                    key: 'delete',
                    text: 'Delete',
                    onClick: () => deleteItem(index),
                  },
                  {
                    key: 'rename',
                    text: 'Rename',
                    onClick: () => renameItem(item, index),
                  },
                ],
              }}
            />
          </div>
        );
      } else {
        return <span>{fieldContent}</span>;
      }
    },
    [deleteItem, renameItem],
  );

  const updateItemName = useConstCallback((index: number) => {
    if (textField && textField.current) {
      const renamedItems = items;
      renamedItems[index].name = textField.current.value || renamedItems[index].name;
      setItems([...renamedItems]);
      setRenameDialogOpen(false);
      setAnnounced(<Announced message="Item renamed" aria-live="assertive" />);
      setPreviousAnnouncedValue(announced);
    }
  });

  const closeRenameDialog = useConstCallback((): void => {
    setRenameDialogOpen(false);
  });

  // Populate with items for demos.
  React.useEffect(() => {
    if (items.length === 0) {
      for (let i = 0; i < 20; i++) {
        items.push({
          key: i,
          name: 'Item ' + i,
          modified: getMockDateString(),
          modifiedby: names[Math.floor(Math.random() * names.length)],
          filesize: Math.floor(Math.random() * 30).toString() + ' MB',
        });
      }
    }
  }, [items]);

  // componentDidUpdate
  React.useEffect(() => {
    if (previousAnnouncedValue !== announced && announced !== undefined) {
      setTimeout(() => {
        setAnnounced(undefined);
        setPreviousAnnouncedValue(announced);
      }, 2000);
    }
  }, [announced, previousAnnouncedValue, setTimeout]);

  return (
    <>
      {announced}
      <MarqueeSelection selection={selection}>
        <DetailsList
          componentRef={detailsList}
          items={items}
          columns={columns}
          setKey="set"
          layoutMode={DetailsListLayoutMode.fixedColumns}
          selection={selection}
          selectionPreservedOnEmptyClick
          ariaLabelForSelectionColumn="Toggle selection"
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          onRenderItemColumn={onRenderItemColumn}
          onRenderRow={onRenderRow}
        />
        <Dialog hidden={!renameDialogOpen} onDismiss={closeRenameDialog} closeButtonAriaLabel="Close">
          {dialogContent}
        </Dialog>
      </MarqueeSelection>
    </>
  );
};
