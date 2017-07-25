/* tslint:disable */
import * as React from 'react';
/* tslint:enable */
import {
  BaseComponent,
  assign,
  autobind
} from 'office-ui-fabric-react/lib/Utilities';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { IPersonaProps, Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
import {
  CompactPeoplePicker,
  IBasePickerSuggestionsProps,
  ListPeoplePicker,
  NormalPeoplePicker,
  ValidationState
} from 'office-ui-fabric-react/lib/Pickers';
import { IPersonaWithMenu } from 'office-ui-fabric-react/lib/components/pickers/PeoplePicker/PeoplePickerItems/PeoplePickerItem.Props';
import { people, mostRecentlyUsed } from './PeoplePickerExampleData';
import './PeoplePicker.Types.Example.scss';
import { Promise } from 'es6-promise';

export interface IPeoplePickerExampleState {
  currentPicker?: number | string;
  delayResults?: boolean;
  peopleList: IPersonaProps[];
  mostRecentlyUsed: IPersonaProps[];
}

const suggestionProps: IBasePickerSuggestionsProps = {
  suggestionsHeaderText: 'Suggested People',
  mostRecentlyUsedHeaderText: 'Suggested Contacts',
  noResultsFoundText: 'No results found',
  loadingText: 'Loading',
  showRemoveButtons: true,
  suggestionsAvailableAlertText: 'Suggestions available'
};

const limitedSearchAdditionalProps: IBasePickerSuggestionsProps = {
  searchForMoreText: 'Load all Results',
  resultsMaximumNumber: 10,
  searchingText: 'Searching...'
};

const limitedSearchSuggestionProps: IBasePickerSuggestionsProps = assign(limitedSearchAdditionalProps, suggestionProps);

export class PeoplePickerTypesExample extends BaseComponent<any, IPeoplePickerExampleState> {
  constructor() {
    super();
    let peopleList: IPersonaWithMenu[] = [];
    people.forEach((persona: IPersonaProps) => {
      let target: IPersonaWithMenu = {};

      assign(target, persona);
      peopleList.push(target);
    });

    this.state = {
      currentPicker: 1,
      delayResults: false,
      peopleList: peopleList,
      mostRecentlyUsed: mostRecentlyUsed
    };
  }

  public render() {
    let currentPicker: JSX.Element | undefined = undefined;

    switch (this.state.currentPicker) {
      case 1:
        currentPicker = this._renderNormalPicker();
        break;
      case 2:
        currentPicker = this._renderCompactPicker();
        break;
      case 3:
        currentPicker = this._renderListPicker();
        break;
      case 4:
        currentPicker = this._renderPreselectedItemsPicker();
        break;
      case 5:
        currentPicker = this._renderLimitedSearch();
        break;
      default:
    }

    return (
      <div>
        { currentPicker }
        <div className={ 'dropdown-div' }>
          <Dropdown label='Select People Picker Type'
            options={ [
              { key: 1, text: 'Normal' },
              { key: 2, text: 'Compact' },
              { key: 3, text: 'Members List' },
              { key: 4, text: 'Preselected Items' },
              { key: 5, text: 'Limit Search' }
            ] }
            selectedKey={ this.state.currentPicker }
            onChanged={ this._dropDownSelected }
          />
          <Toggle
            label='Delay Suggestion Results'
            defaultChecked={ false }
            onChanged={ this._toggleDelayResultsChange } />
        </div>
      </div>
    );
  }

  public _renderListPicker() {
    return (
      <ListPeoplePicker
        onResolveSuggestions={ this._onFilterChanged }
        onEmptyInputFocus={ this._returnMostRecentlyUsed }
        getTextFromItem={ (persona: IPersonaProps) => persona.primaryText as string }
        className={ 'ms-PeoplePicker' }
        pickerSuggestionsProps={ suggestionProps }
        key={ 'list' }
        onRemoveSuggestion={ this._onRemoveSuggestion }
        onValidateInput={ this._validateInput }
      />
    );
  }

  public _renderNormalPicker() {
    return (
      <NormalPeoplePicker
        onResolveSuggestions={ this._onFilterChanged }
        onEmptyInputFocus={ this._returnMostRecentlyUsed }
        getTextFromItem={ (persona: IPersonaProps) => persona.primaryText as string }
        pickerSuggestionsProps={ suggestionProps }
        className={ 'ms-PeoplePicker' }
        key={ 'normal' }
        onRemoveSuggestion={ this._onRemoveSuggestion }
        onValidateInput={ this._validateInput }
        removeButtonAriaLabel={ 'Remove' }
      />
    );
  }

  public _renderCompactPicker() {
    return (
      <CompactPeoplePicker
        onResolveSuggestions={ this._onFilterChanged }
        onEmptyInputFocus={ this._returnMostRecentlyUsed }
        getTextFromItem={ (persona: IPersonaProps) => persona.primaryText as string }
        pickerSuggestionsProps={ suggestionProps }
        className={ 'ms-PeoplePicker' }
        onRemoveSuggestion={ this._onRemoveSuggestion }
        onValidateInput={ this._validateInput }
      />
    );
  }

  public _renderPreselectedItemsPicker() {
    return (
      <CompactPeoplePicker
        onResolveSuggestions={ this._onFilterChanged }
        onEmptyInputFocus={ this._returnMostRecentlyUsed }
        getTextFromItem={ (persona: IPersonaProps) => persona.primaryText as string }
        className={ 'ms-PeoplePicker' }
        defaultSelectedItems={ people.splice(0, 3) }
        key={ 'list' }
        pickerSuggestionsProps={ suggestionProps }
        onRemoveSuggestion={ this._onRemoveSuggestion }
        onValidateInput={ this._validateInput }
      />
    );
  }

  public _renderLimitedSearch() {
    limitedSearchSuggestionProps.resultsFooter = this._renderFooterText;
    limitedSearchSuggestionProps.resultsFooterFull = this._renderFooterFullText;

    return (
      <CompactPeoplePicker
        onResolveSuggestions={ this._onFilterChangedWithLimit }
        onEmptyInputFocus={ this._returnMostRecentlyUsedWithLimit }
        getTextFromItem={ (persona: IPersonaProps) => persona.primaryText as string }
        className={ 'ms-PeoplePicker' }
        onGetMoreResults={ this._onFilterChanged }
        pickerSuggestionsProps={ limitedSearchSuggestionProps }
        onRemoveSuggestion={ this._onRemoveSuggestion }
      />
    );
  }

  @autobind
  private _renderFooterText(): JSX.Element {
    return <div>No additional results</div>;
  }

  @autobind
  private _renderFooterFullText(): JSX.Element {
    return <div>Top 10 results</div>;
  }

  @autobind
  private _onRemoveSuggestion(item: IPersonaProps): void {
    let { peopleList, mostRecentlyUsed } = this.state;
    let indexPeopleList: number = peopleList.indexOf(item);
    let indexMostRecentlyUsed: number = mostRecentlyUsed.indexOf(item);

    if (indexPeopleList >= 0) {
      let newPeople: IPersonaProps[] = peopleList.slice(0, indexPeopleList).concat(peopleList.slice(indexPeopleList + 1));
      this.setState({ peopleList: newPeople });
    }

    if (indexMostRecentlyUsed >= 0) {
      let newSuggestedPeople: IPersonaProps[] = mostRecentlyUsed.slice(0, indexMostRecentlyUsed).concat(mostRecentlyUsed.slice(indexMostRecentlyUsed + 1));
      this.setState({ mostRecentlyUsed: newSuggestedPeople });
    }
  }

  @autobind
  private _onFilterChanged(filterText: string, currentPersonas: IPersonaProps[], limitResults?: number) {
    if (filterText) {
      let filteredPersonas: IPersonaProps[] = this._filterPersonasByText(filterText);

      filteredPersonas = this._removeDuplicates(filteredPersonas, currentPersonas);
      filteredPersonas = limitResults ? filteredPersonas.splice(0, limitResults) : filteredPersonas;
      return this._filterPromise(filteredPersonas);
    } else {
      return [];
    }
  }

  @autobind
  private _returnMostRecentlyUsed(currentPersonas: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> {
    let { mostRecentlyUsed } = this.state;
    mostRecentlyUsed = this._removeDuplicates(mostRecentlyUsed, currentPersonas);
    return this._filterPromise(mostRecentlyUsed);
  }

  @autobind
  private _returnMostRecentlyUsedWithLimit(currentPersonas: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> {
    let { mostRecentlyUsed } = this.state;
    mostRecentlyUsed = this._removeDuplicates(mostRecentlyUsed, currentPersonas);
    mostRecentlyUsed = mostRecentlyUsed.splice(0, 3);
    return this._filterPromise(mostRecentlyUsed);
  }

  @autobind
  private _onFilterChangedWithLimit(filterText: string, currentPersonas: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> {
    return this._onFilterChanged(filterText, currentPersonas, 3);
  }

  private _filterPromise(personasToReturn: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> {
    if (this.state.delayResults) {
      return this._convertResultsToPromise(personasToReturn);
    } else {
      return personasToReturn;
    }
  }

  private _listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
    if (!personas || !personas.length || personas.length === 0) {
      return false;
    }
    return personas.filter(item => item.primaryText === persona.primaryText).length > 0;
  }

  private _filterPersonasByText(filterText: string): IPersonaProps[] {
    return this.state.peopleList.filter(item => this._doesTextStartWith(item.primaryText as string, filterText));
  }

  private _doesTextStartWith(text: string, filterText: string): boolean {
    return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
  }

  private _convertResultsToPromise(results: IPersonaProps[]): Promise<IPersonaProps[]> {
    return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));
  }

  private _removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) {
    return personas.filter(persona => !this._listContainsPersona(persona, possibleDupes));
  }

  @autobind
  private _toggleDelayResultsChange(toggleState: boolean) {
    this.setState({ delayResults: toggleState });
  }

  @autobind
  private _dropDownSelected(option: IDropdownOption) {
    this.setState({ currentPicker: option.key });
  }

  @autobind
  private _validateInput(input: string) {
    if (input.indexOf('@') !== -1) {
      return ValidationState.valid;
    } else if (input.length > 1) {
      return ValidationState.warning;
    } else {
      return ValidationState.invalid;
    }
  }

}
