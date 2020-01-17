import * as React from 'react';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
import { CompactPeoplePicker, IBasePickerSuggestionsProps } from 'office-ui-fabric-react/lib/Pickers';
import { assign } from 'office-ui-fabric-react/lib/Utilities';
import { people, mru } from '@uifabric/example-data';
import { PeoplePickerExampleConfiguration } from './PeoplePickerExampleConfiguration';

const suggestionProps: IBasePickerSuggestionsProps = {
  suggestionsHeaderText: 'Suggested People',
  mostRecentlyUsedHeaderText: 'Suggested Contacts',
  noResultsFoundText: 'No results found',
  loadingText: 'Loading',
  showRemoveButtons: true,
  suggestionsAvailableAlertText: 'People Picker Suggestions available',
  suggestionsContainerAriaLabel: 'Suggested contacts'
};

const limitedSearchAdditionalProps: IBasePickerSuggestionsProps = {
  searchForMoreText: 'Load all Results',
  resultsMaximumNumber: 10,
  searchingText: 'Searching...'
};

const limitedSearchSuggestionProps: IBasePickerSuggestionsProps = assign(limitedSearchAdditionalProps, suggestionProps);

export const PeoplePickerLimitedSearchExample: React.FunctionComponent = () => {
  const [delayResults, setDelayResults] = React.useState(false);
  const [isPickerDisabled, setIsPickerDisabled] = React.useState(false);
  const [mostRecentlyUsed, setMostRecentlyUsed] = React.useState<IPersonaProps[]>(mru);
  const [peopleList, setPeopleList] = React.useState<IPersonaProps[]>(people);

  const picker = React.useRef(null);

  const onFilterChangedWithLimit = (filterText: string, currentPersonas: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
    return onFilterChanged(filterText, currentPersonas, 3);
  };

  const onFilterChanged = (
    filterText: string,
    currentPersonas: IPersonaProps[],
    limitResults?: number
  ): IPersonaProps[] | Promise<IPersonaProps[]> => {
    if (filterText) {
      let filteredPersonas: IPersonaProps[] = filterPersonasByText(filterText);

      filteredPersonas = removeDuplicates(filteredPersonas, currentPersonas);
      filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
      return filterPromise(filteredPersonas);
    } else {
      return [];
    }
  };

  const filterPersonasByText = (filterText: string): IPersonaProps[] => {
    return peopleList.filter(item => doesTextStartWith(item.text as string, filterText));
  };

  const filterPromise = (personasToReturn: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
    if (delayResults) {
      return convertResultsToPromise(personasToReturn);
    } else {
      return personasToReturn;
    }
  };

  const returnMostRecentlyUsedWithLimit = (currentPersonas: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
    setMostRecentlyUsed(removeDuplicates(mostRecentlyUsed, currentPersonas));
    setMostRecentlyUsed(mostRecentlyUsed.slice(0, 3));
    return filterPromise(mostRecentlyUsed);
  };

  const onRemoveSuggestion = (item: IPersonaProps): void => {
    const indexPeopleList: number = peopleList.indexOf(item);
    const indexMostRecentlyUsed: number = mostRecentlyUsed.indexOf(item);

    if (indexPeopleList >= 0) {
      const newPeople: IPersonaProps[] = peopleList.slice(0, indexPeopleList).concat(peopleList.slice(indexPeopleList + 1));
      setPeopleList(newPeople);
    }

    if (indexMostRecentlyUsed >= 0) {
      const newSuggestedPeople: IPersonaProps[] = mostRecentlyUsed
        .slice(0, indexMostRecentlyUsed)
        .concat(mostRecentlyUsed.slice(indexMostRecentlyUsed + 1));
      setMostRecentlyUsed(newSuggestedPeople);
    }
  };

  limitedSearchSuggestionProps.resultsFooter = renderFooterText;

  return (
    <PeoplePickerExampleConfiguration
      delayResults={delayResults}
      setDelayResults={setDelayResults}
      isPickerDisabled={isPickerDisabled}
      setIsPickerDisabled={setIsPickerDisabled}
    >
      <CompactPeoplePicker
        onResolveSuggestions={onFilterChangedWithLimit}
        onEmptyInputFocus={returnMostRecentlyUsedWithLimit}
        getTextFromItem={getTextFromItem}
        className={'ms-PeoplePicker'}
        onGetMoreResults={onFilterChanged}
        pickerSuggestionsProps={limitedSearchSuggestionProps}
        onRemoveSuggestion={onRemoveSuggestion}
        inputProps={{
          onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
          onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
          'aria-label': 'People Picker'
        }}
        componentRef={picker}
        resolveDelay={300}
        disabled={isPickerDisabled}
      />
    </PeoplePickerExampleConfiguration>
  );
};

function doesTextStartWith(text: string, filterText: string): boolean {
  return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
}

function removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) {
  return personas.filter(persona => !listContainsPersona(persona, possibleDupes));
}

function listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
  if (!personas || !personas.length || personas.length === 0) {
    return false;
  }
  return personas.filter(item => item.text === persona.text).length > 0;
}

function convertResultsToPromise(results: IPersonaProps[]): Promise<IPersonaProps[]> {
  return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));
}

function getTextFromItem(persona: IPersonaProps): string {
  return persona.text as string;
}

function renderFooterText(): JSX.Element {
  return <div>No additional results</div>;
}
