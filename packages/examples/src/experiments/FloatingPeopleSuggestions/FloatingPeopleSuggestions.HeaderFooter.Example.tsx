import * as React from 'react';
import {
  IFloatingSuggestionItemProps,
  FloatingPeopleSuggestions,
  IFloatingSuggestionItem,
} from '@uifabric/experiments/lib/FloatingPeopleSuggestionsComposite';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
import { mru } from '@uifabric/example-data';
import { IBaseFloatingPickerSuggestionProps } from 'office-ui-fabric-react/lib/FloatingPicker';
import { useConst } from '@uifabric/react-hooks';

const _suggestions = [
  {
    key: '1',
    id: '1',
    displayText: 'Suggestion 1',
    item: mru[0],
    isSelected: true,
    showRemoveButton: true,
  },
  {
    key: '2',
    id: '2',
    displayText: 'Suggestion 2',
    item: mru[1],
    isSelected: false,
    showRemoveButton: true,
  },
  {
    key: '3',
    id: '3',
    displayText: 'Suggestion 3',
    item: mru[2],
    isSelected: false,
    showRemoveButton: true,
  },
  {
    key: '4',
    id: '4',
    displayText: 'Suggestion 4',
    item: mru[3],
    isSelected: false,
    showRemoveButton: true,
  },
  {
    key: '5',
    id: '5',
    displayText: 'Suggestion 5',
    item: mru[4],
    isSelected: false,
    showRemoveButton: true,
  },
] as IFloatingSuggestionItem<IPersonaProps>[];

export const FloatingPeopleSuggestionsHeaderFooterExample = (): JSX.Element => {
  const [peopleSuggestions, setPeopleSuggestions] = React.useState<IFloatingSuggestionItemProps<IPersonaProps>[]>([
    ..._suggestions,
  ]);

  const suggestionProps: IBaseFloatingPickerSuggestionProps = useConst(() => {
    return {
      footerItemsProps: [
        {
          renderItem: () => {
            return <>Showing {peopleSuggestions.length} results</>;
          },
          shouldShow: () => {
            return peopleSuggestions.length > 0;
          },
          onExecute: () => {
            alert('it worked');
          },
        },
      ],
    };
  });

  const _onSuggestionSelected = (
    ev: React.MouseEvent<HTMLElement, MouseEvent>,
    item: IFloatingSuggestionItemProps<IPersonaProps>,
  ) => {
    _markSuggestionSelected(item);
  };

  const _onSuggestionRemoved = (
    ev: React.MouseEvent<HTMLElement, MouseEvent>,
    suggestionToRemove: IFloatingSuggestionItemProps<IPersonaProps>,
  ) => {
    setPeopleSuggestions(suggestions => {
      const modifiedSuggestions = suggestions.filter(item => item.id !== suggestionToRemove.id);
      return modifiedSuggestions;
    });
  };

  const _markSuggestionSelected = (selectedSuggestion: IFloatingSuggestionItemProps<IPersonaProps>) => {
    setPeopleSuggestions(suggestions => {
      const modifiedSuggestions = suggestions.map(suggestion =>
        suggestion.id === selectedSuggestion.id
          ? { ...suggestion, isSelected: true }
          : { ...suggestion, isSelected: false },
      );
      return modifiedSuggestions;
    });
  };

  return (
    <>
      <FloatingPeopleSuggestions
        suggestions={[...peopleSuggestions]}
        isSuggestionsVisible={true}
        targetElement={null}
        /* eslint-disable react/jsx-no-bind */
        onSuggestionSelected={_onSuggestionSelected}
        onRemoveSuggestion={_onSuggestionRemoved}
        /* eslint-enable react/jsx-no-bind */
        noResultsFoundText={'No suggestions'}
        onFloatingSuggestionsDismiss={undefined}
        showSuggestionRemoveButton={true}
        pickerSuggestionsProps={suggestionProps}
      />
    </>
  );
};
