import * as React from 'react';

import { ISelectedItemsList, ISelectedItemsListProps, BaseSelectedItem } from './SelectedItemsList.types';

const _SelectedItemsList = <TItem extends BaseSelectedItem>(
  props: ISelectedItemsListProps<TItem>,
  ref: React.Ref<ISelectedItemsList<TItem>>,
) => {
  // TODO: verify fixes with @nebhatna
  const { onItemsRemoved } = props;
  const [items, setItems] = React.useState(props.selectedItems || props.defaultSelectedItems || []);
  const renderedItems = React.useMemo(() => items, [items]);

  React.useEffect(() => {
    setItems(props.selectedItems || []);
  }, [props.selectedItems]);

  const removeItems = React.useCallback(
    (itemsToRemove: TItem[]): void => {
      // Intentionally not using .filter here as we want to only remove a specific
      // item in case of duplicates of same item.
      const updatedItems: TItem[] = [...items];
      itemsToRemove.forEach(item => {
        const index: number = updatedItems.indexOf(item);
        updatedItems.splice(index, 1);
      });
      setItems(updatedItems);
      onItemsRemoved?.(itemsToRemove);
    },
    [items, onItemsRemoved],
  );

  const replaceItem = React.useCallback(
    (newItem: TItem | TItem[], index: number): void => {
      const newItemsArray = !Array.isArray(newItem) ? [newItem] : newItem;

      if (index >= 0) {
        const newItems: TItem[] = [...items];
        newItems.splice(index, 1, ...newItemsArray);
        setItems(newItems);
      }
    },
    [items],
  );

  const onRemoveItemCallbacks = React.useMemo(
    () =>
      // create callbacks ahead of time with memo.
      // (hooks have to be called in the same order)
      items.map((item: TItem) => () => removeItems([item])),
    [items, removeItems],
  );

  const SelectedItem = props.onRenderItem;
  return (
    <>
      {items.length > 0 && (
        <div role={'list'}>
          {SelectedItem &&
            renderedItems.map((item: TItem, index: number) => (
              <SelectedItem
                item={item}
                index={index}
                // To keep react from complaining for duplicate elements with the same key
                // we will append the index to the key so that we have unique key for each item
                key={item.key !== undefined ? item.key + '_' + index : index}
                selected={props.focusedItemIndices?.includes(index)}
                removeButtonAriaLabel={props.removeButtonAriaLabel}
                onRemoveItem={onRemoveItemCallbacks[index]}
                onItemChange={replaceItem}
              />
            ))}
        </div>
      )}
    </>
  );
};

// Typescript only respects unifying a generic type with a generic const _function_ of the same name for function types.
// In order to satisfy the type checker, here we lie about the type of the const so that it is still a generic function.
export type SelectedItemsList<TItem extends BaseSelectedItem> = React.Component<ISelectedItemsListProps<TItem>>;
export const SelectedItemsList = React.forwardRef(_SelectedItemsList) as typeof _SelectedItemsList;
