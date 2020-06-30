import * as React from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { Check } from 'office-ui-fabric-react/lib/Check';
import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { ISelection, Selection, SelectionMode, SelectionZone } from 'office-ui-fabric-react/lib/Selection';
import { createListItems, IExampleItem } from '@uifabric/example-data';
import { mergeStyleSets, IRawStyle } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

const commonStyles: IRawStyle = {
  display: 'inline-block',
  cursor: 'default',
  boxSizing: 'border-box',
  verticalAlign: 'top',
  background: 'none',
  backgroundColor: 'transparent',
  border: 'none',
};
const classNames = mergeStyleSets({
  item: {
    selectors: {
      '&:hover': { background: '#eee' },
    },
  },
  // Overwrites the default style for Button
  check: [commonStyles, { padding: '11px 8px' }],
  cell: [
    commonStyles,
    {
      overflow: 'hidden',
      height: 36,
      padding: 8,
    },
  ],
});

const ITEM_COUNT = 100;

export interface ISelectionBasicExampleState {
  hasMounted: boolean;
  // items: IExampleItem[];
  // selection: ISelection;
  // selectionMode: SelectionMode;
  // canSelect: 'all' | 'vowels';
}

interface ISelectionItemExampleProps {
  item: IExampleItem;
  itemIndex?: number;
  selection?: ISelection;
  selectionMode?: SelectionMode;
}

/**
 * The SelectionItemExample controls and displays the selection state of a single item
 */
const SelectionItemExample: React.FunctionComponent<ISelectionItemExampleProps> = (
  props: ISelectionItemExampleProps,
) => {
  const { item, itemIndex, selection } = props;
  let isSelected = false;

  if (selection && itemIndex !== undefined) {
    isSelected = selection.isIndexSelected(itemIndex);
  }

  return (
    <div className={classNames.item} data-is-focusable={true} data-selection-index={itemIndex}>
      {selection && selection.canSelectItem(item) && selection.mode !== SelectionMode.none && (
        <div className={classNames.check} data-is-focusable={true} data-selection-toggle={true}>
          <Check checked={isSelected} />
        </div>
      )}
      <span className={classNames.cell}>{item.name}</span>
      <a className={classNames.cell} href="https://bing.com" target="_blank">
        Link that avoids selection
      </a>
      <a className={classNames.cell} data-selection-select={true} href="https://bing.com" target="_blank">
        Link that selects first
      </a>
    </div>
  );
};

export const SelectionBasicExample: React.FunctionComponent = () => {
  const [items, setItems] = React.useState<IExampleItem[]>(createListItems(ITEM_COUNT));
  const [selection, setSelection] = React.useState<ISelection>(
    new Selection({ onSelectionChanged: onSelectionChanged }),
  );
  const [selectionMode, setSelectionMode] = React.useState<SelectionMode>(SelectionMode.multiple);
  const [canSelect, setCanSelect] = React.useState<'all' | 'vowels'>('all');
  const { current: state } = React.useRef<ISelectionBasicExampleState>({
    hasMounted: false,
  });

  let getCommandItems = (selectionMode: SelectionMode, canSelect: 'all' | 'vowels'): IContextualMenuItem[] => {
    return [
      {
        key: 'selectionMode',
        text: 'Selection Mode',
        items: [
          {
            key: SelectionMode[SelectionMode.none],
            name: 'None',
            canCheck: true,
            checked: selectionMode === SelectionMode.none,
            onClick: onSelectionModeChanged,
            data: SelectionMode.none,
          },
          {
            key: SelectionMode[SelectionMode.single],
            name: 'Single select',
            canCheck: true,
            checked: selectionMode === SelectionMode.single,
            onClick: onSelectionModeChanged,
            data: SelectionMode.single,
          },
          {
            key: SelectionMode[SelectionMode.multiple],
            name: 'Multi select',
            canCheck: true,
            checked: selectionMode === SelectionMode.multiple,
            onClick: onSelectionModeChanged,
            data: SelectionMode.multiple,
          },
        ],
      },
      {
        key: 'selectAll',
        text: 'Select All',
        iconProps: { iconName: 'CheckMark' },
        onClick: onToggleSelectAll,
      },
      {
        key: 'allowCanSelect',
        text: 'Choose selectable items',
        items: [
          {
            key: 'all',
            name: 'All items',
            canCheck: true,
            checked: canSelect === 'all',
            onClick: onCanSelectChanged,
            data: 'all',
          },
          {
            key: 'a',
            name: 'Names starting with vowels',
            canCheck: true,
            checked: canSelect === 'vowels',
            onClick: onCanSelectChanged,
            data: 'vowels',
          },
        ],
      },
    ];
  };

  const alertItem = (item: IExampleItem): void => {
    alert('item invoked: ' + item.name);
  };

  const onSelectionChanged = (): void => {
    if (state.hasMounted) {
      forceUpdate();
    }
  };

  const onToggleSelectAll = (): void => {
    selection.toggleAllSelected();
  };

  const onSelectionModeChanged = (ev: React.MouseEvent<HTMLElement>, menuItem: IContextualMenuItem): void => {
    setSelectionMode(menuItem.data);
    this.setState((previousState: ISelectionBasicExampleState) => {
      const newSelection = new Selection({
        onSelectionChanged: this._onSelectionChanged,
        canSelectItem: previousState.canSelect === 'vowels' ? this._canSelectItem : undefined,
        selectionMode: menuItem.data,
      });
      newSelection.setItems(previousState.items, false);

      return {
        selection: newSelection,
      };
    });
  };

  const onCanSelectChanged = (ev: React.MouseEvent<HTMLElement>, menuItem: IContextualMenuItem): void => {
    const canSelectItem = menuItem.data === 'vowels' ? canSelectItem : undefined;

    this.setState((previousState: ISelectionBasicExampleState) => {
      const newSelection = new Selection({
        onSelectionChanged: onSelectionChanged,
        canSelectItem: canSelectItem,
        selectionMode: previousState.selection.mode,
      });
      newSelection.setItems(previousState.items, false);
      return {
        selection: newSelection,
        canSelect: menuItem.data === 'vowels' ? 'vowels' : 'all',
      };
    });
  };

  const canSelectItem = (item: IExampleItem): boolean => {
    return /^[aeiou]/.test(item.name || '');
  };

  getCommandItems = memoizeFunction(getCommandItems);

  return (
    <div className="ms-SelectionBasicExample">
      <CommandBar items={getCommandItems(selection.mode, canSelect)} />
      <MarqueeSelection selection={selection} isEnabled={selection.mode === SelectionMode.multiple}>
        <SelectionZone selection={selection} onItemInvoked={alertItem}>
          {items.map((item: IExampleItem, index: number) => (
            <SelectionItemExample key={item.key} item={item} itemIndex={index} selection={selection} />
          ))}
        </SelectionZone>
      </MarqueeSelection>
    </div>
  );
};
