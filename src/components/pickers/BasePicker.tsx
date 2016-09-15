import * as React from 'react';
import { FocusZone } from '../../FocusZone';
import { Callout } from '../../Callout';
import { KeyCodes } from '../../utilities/KeyCodes';
import { Selection, SelectionZone, SelectionMode } from '../../utilities/selection/index';
import { Suggestion, SuggestionController, ISuggestionProps } from './Suggestion/index';
import { IBasePickerProps } from './BasePicker.Props';
import { IPickerItemProps } from './PickerItem.Props';
import { css } from '../../utilities/css';
import { autobind } from '../../utilities/autobind';
import './BasePicker.scss';

export interface IBasePickerState {
  items?: any;
  displayValue?: string;
  value?: string;
  searchForMoreText?: string;
  suggestionsVisible?: boolean;
}

// This interface is because selection direction is not currently supported by the typedefinitions even
// though it works in IE (9 and later), Chrome, and Firefox.
export interface IHTMLInputElementWithSelectionDirection extends HTMLInputElement {
  setSelectionRange(start: number, end: number, direction?: string): void;
}

export class BasePicker<T, P extends IBasePickerProps<T>> extends React.Component<P, IBasePickerState> {

  public refs: {
    [key: string]: React.ReactInstance;
    root: HTMLElement;
    input: HTMLInputElement;
    focusZone: FocusZone;
    suggestionElement: Suggestion<T>
  };

  protected _selection: Selection;

  private _suggestionStore: SuggestionController<T>;
  private _SuggestionOfProperType = Suggestion as new (props: ISuggestionProps<T>) => Suggestion<T>;

  constructor(basePickerProps: P) {
    super(basePickerProps);

    let items = basePickerProps.startingItems || [];

    this._suggestionStore = new SuggestionController<T>();
    this._selection = new Selection({ onSelectionChanged: () => this._onSelectionChange() });
    this._selection.setItems(items);
    this.state = {
      items: items,
      displayValue: '',
      value: '',
      searchForMoreText: basePickerProps.searchForMoreText
    };
  }

  public componentWillReceiveProps(newProps: IBasePickerProps<T>, newState: IBasePickerState) {
    if (newState.items && newState.items !== this.state.items) {
      this._selection.setItems(newState.items);
    }
  }

  public componentDidMount() {
    this._selection.setItems(this.state.items);
  }

  public focus() {
    this.refs.focusZone.focus();
  }
  @autobind
  public dismissSuggestions() {
    this.setState({ suggestionsVisible: false });
  }

  public completeSuggestion() {
    if (this._suggestionStore.hasSelectedSuggestion()) {
      this._addItem(this._suggestionStore.currentSuggestion.item);
      this._updateValue('');
    }
  }

  public render() {
    let { displayValue } = this.state;
    return (
      <div ref='root' className={ css('ms-BasePicker', this.props.className ? this.props.className : '') } onKeyDown={ this._onKeyDown }>
        <SelectionZone selection={ this._selection } selectionMode={ SelectionMode.multiple }>
          <FocusZone ref='focusZone' className='ms-BasePicker-text'>
            { this._renderItems() }
            <input
              ref='input'
              className='ms-BasePicker-input'
              onFocus={ this._onInputFocus }
              onChange={ this._onInputChange }
              value={ displayValue }
              aria-activedescendant={ 'sug-' + this._suggestionStore.currentIndex }
              aria-owns='suggestion-list'
              aria-expanded='true'
              aria-haspopup='true'
              autoCapitalize='off'
              autoComplete='off'/>
          </FocusZone>
        </SelectionZone>
        { this._renderSuggestions() }
      </div>
    );
  }

  protected _renderSuggestions(): JSX.Element {
    let TypedSuggestion = this._SuggestionOfProperType;
    return this.state.suggestionsVisible ? (
      <Callout isBeakVisible={ false } gapSpace={ 0 } targetElement={ this.refs.root } onDismiss={ this.dismissSuggestions }>
        <TypedSuggestion
          onRenderSuggestion={ this.props.onRenderSuggestion }
          onSuggestionClick={ this._onSuggestionClick }
          suggestions={ this._suggestionStore.getSuggestions() }
          suggestionsHeaderText={ this.props.suggestionsHeaderText }
          ref='suggestionElement'
          searchForMoreText={ this.state.searchForMoreText }
          onGetMoreResults={ this._onGetMoreResults }
          noResultsFoundText= { this.props.noResultsText }
          className={ this.props.suggestionsClassName }
          suggestionItemClassName={ this.props.suggestionItemClassName }
          />
      </Callout>
    ) : (null);
  }

  protected _renderItems(): JSX.Element[] {
    let { onRenderItem = () => undefined } = this.props;
    let { items } = this.state;
    return items.map((item, index) => onRenderItem({
      item,
      index,
      isSelected: this._selection.isIndexSelected(index),
      onRemoveItem: () => this._removeItem(item)
    }));
  }

  protected _resetFocus(index: number) {
    let { items } = this.state;

    if (items.length) {
      let newEl = this.refs.root.querySelectorAll('[data-selection-index]')[Math.min(index, items.length - 1)] as HTMLElement;

      if (newEl) {
        this.refs.focusZone.focusElement(newEl);
      }
    } else {
      this.refs.input.focus();
    }
  }

  protected _onSuggestionSelect() {
    if (this._suggestionStore.currentSuggestion) {
      let currentValue = this.state.value;
      let itemValue: string = this.props.getTextFromItem(this._suggestionStore.currentSuggestion.item);
      this._updateDisplayValue(currentValue, itemValue);
      this.setState({ displayValue: itemValue }, () => this.refs.suggestionElement.scrollSelected());
    }
  }

  protected _onSelectionChange() {
    this.forceUpdate();
  }


  protected _updateSuggestions(suggestions: any[]) {
    this._suggestionStore.updateSuggestions(suggestions);
    this.forceUpdate();
  }

  protected _updateValue(updatedValue: string) {
    let { value } = this.state;

    if (!this._suggestionStore.currentIndex || updatedValue !== value) {
      let newSuggestions: any[] = this.props.onResolveSuggestions(updatedValue);

      this._suggestionStore.updateSuggestions(newSuggestions);
      let itemValue: string = undefined;
      if (this._suggestionStore.currentSuggestion) {
        itemValue = this.props.getTextFromItem(this._suggestionStore.currentSuggestion.item);
      }
      this._updateDisplayValue(updatedValue, itemValue);
    }
  }

  protected _updateDisplayValue(updatedValue: string, itemValue?: string) {
    let differenceIndex: number = 0;

    if (updatedValue) {
      while (differenceIndex < updatedValue.length && updatedValue[differenceIndex].toLocaleLowerCase() === updatedValue[differenceIndex].toLocaleLowerCase()) {
        differenceIndex++;
      }
    }

    this.setState({
      displayValue: itemValue || updatedValue,
      value: updatedValue,
      suggestionsVisible: updatedValue && updatedValue !== ''
    }, () => {
      if (itemValue && differenceIndex < itemValue.length) {
        (this.refs.input as IHTMLInputElementWithSelectionDirection).setSelectionRange(differenceIndex, itemValue.length, 'backward');
      }
    });
  }

  protected _onChange() {
    if (this.props.onChange) {
      this.props.onChange(this.state.items);
    }
  }

  @autobind
  protected _onInputChange(ev: React.FormEvent) {
    let value = (ev.target as HTMLInputElement).value;

    this._updateValue(value);
    this.setState({ searchForMoreText: this.props.searchForMoreText });
  }

  @autobind
  protected _onSuggestionClick(ev: React.MouseEvent, item: any, index: number) {
    this._addItemByIndex(index);
  }

  @autobind
  protected _onInputFocus(ev: React.FocusEvent) {
    this._selection.setAllSelected(false);
    if(this.state.value) {
      this.setState({ suggestionsVisible: true });
    }
  }

  @autobind
  protected _onKeyDown(ev: React.KeyboardEvent) {
    let { value } = this.state;

    switch (ev.which) {
      case KeyCodes.escape:
        this.dismissSuggestions();
        break;

      case KeyCodes.tab:
      case KeyCodes.enter:
        if (value && this._suggestionStore.hasSelectedSuggestion()) {
          this.completeSuggestion();
          ev.preventDefault();
          ev.stopPropagation();
        }

        break;

      case KeyCodes.backspace:
        this._onBackSpace(ev);
        break;

      case KeyCodes.up:
        if (ev.target === this.refs.input && this._suggestionStore.previousSuggestion()) {
          ev.preventDefault();
          ev.stopPropagation();
          this._onSuggestionSelect();
        }
        break;

      case KeyCodes.down:
        if (ev.target === this.refs.input) {
          if (this._suggestionStore.nextSuggestion()) {
            ev.preventDefault();
            ev.stopPropagation();
            this._onSuggestionSelect();
          }
        }
        break;
    }
  }

  @autobind
  protected _onGetMoreResults() {
    if (this.props.onGetMoreResults) {
      this._updateSuggestions(this.props.onGetMoreResults(this.state.value));
    }
    this.refs.input.focus();
    this.setState({ searchForMoreText: undefined });
  }

  @autobind
  protected _addItemByIndex(index: number): void {
    this._addItem(this._suggestionStore.getSuggestionAtIndex(index).item);
    this._updateValue('');
  }

  @autobind
  protected _addItem(item: T) {
    let newItems = this.state.items.concat([item]);
    this._selection.setItems(newItems);
    this.setState({ items: newItems }, () => this._onChange());
  }

  @autobind
  protected _removeItem(item: IPickerItemProps<T>) {
    let { items } = this.state;
    let index = items.indexOf(item);

    if (index >= 0) {
      let newItems = items.slice(0, index).concat(items.slice(index + 1));

      this._selection.setItems(newItems);
      this.setState({ items: newItems }, () => this._onChange());
    }
  }

  @autobind
  protected _removeItems(itemsToRemove: any[]) {
    let { items } = this.state;
    let newItems = items.filter(item => itemsToRemove.indexOf(item) === -1);
    let firstItemToRemove = this._selection.getSelection()[0];
    let index = items.indexOf(firstItemToRemove);

    this._selection.setItems(newItems);

    this.setState({ items: newItems }, () => this._resetFocus(index));
  }

  protected _onBackSpace(ev: React.KeyboardEvent) {
    let { displayValue } = this.state;
    if (ev.target === this.refs.input) {
      if (displayValue && this._suggestionStore.hasSelectedSuggestion() && this.refs.input.selectionStart !== this.refs.input.selectionEnd) {
        this._updateValue(displayValue.substr(0, this.refs.input.selectionStart - 1));
      } else if (!displayValue && this.state.items.length) {
        this._removeItem(this.state.items[this.state.items.length - 1]);
      }
    } else if (this._selection.getSelectedCount() > 0) {
      this._removeItems(this._selection.getSelection());
    }
  }
}