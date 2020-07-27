import * as React from 'react';
import {
  GroupHeader,
  GroupedList,
  IGroupHeaderCheckboxProps,
  IGroupHeaderProps,
} from 'office-ui-fabric-react/lib/GroupedList';
import { IColumn, DetailsRow } from 'office-ui-fabric-react/lib/DetailsList';
import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { Selection, SelectionMode, SelectionZone } from 'office-ui-fabric-react/lib/Selection';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { useConst } from '@uifabric/react-hooks';
import { createListItems, createGroups, IExampleItem } from '@uifabric/example-data';

const groupCount = 3;
const groupDepth = 1;

const onRenderHeader = (props: IGroupHeaderProps): JSX.Element => (
  <GroupHeader onRenderGroupHeaderCheckbox={onRenderGroupHeaderCheckbox} {...props} />
);

const onRenderGroupHeaderCheckbox = (props: IGroupHeaderCheckboxProps) => <Toggle checked={props.checked} />;

export const GroupedListCustomCheckboxExample: React.FunctionComponent = () => {
  const items = useConst(() => createListItems(Math.pow(groupCount, groupDepth + 1)));
  const groups = useConst(() => createGroups(groupCount, groupDepth, 0, groupCount));
  const columns = useConst(() =>
    Object.keys(items[0])
      .slice(0, 3)
      .map(
        (key: string): IColumn => ({
          key: key,
          name: key,
          fieldName: key,
          minWidth: 300,
        }),
      ),
  );
  const selection = useConst(() => {
    const s = new Selection();
    s.setItems(items);
    return s;
  });

  const onRenderCell = React.useCallback(
    (nestingDepth: number, item: IExampleItem, itemIndex: number): JSX.Element => (
      <DetailsRow
        columns={columns}
        groupNestingDepth={nestingDepth}
        item={item}
        itemIndex={itemIndex}
        selection={selection}
        selectionMode={SelectionMode.multiple}
      />
    ),
    [columns, selection],
  );

  return (
    <div>
      <FocusZone>
        <SelectionZone selection={selection} selectionMode={SelectionMode.multiple}>
          <GroupedList
            items={items}
            onRenderCell={onRenderCell}
            selection={selection}
            selectionMode={SelectionMode.multiple}
            groups={groups}
            groupProps={{
              onRenderHeader: onRenderHeader,
            }}
          />
        </SelectionZone>
      </FocusZone>
    </div>
  );
};
