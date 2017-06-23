import * as React from 'react';
import {
  autobind,
  BaseComponent,
  css,
  findIndex,
  getId
} from '../../Utilities';
import {
  ISwatchColorPickerProps,
  ISwatchColorPickerItemProps,
  SwatchColorPickerItemType,
  CellShape
} from './SwatchColorPicker.Props';
import { DirectionalHint } from '../../ContextualMenu';
import { getColorFromString } from '../../utilities/color/colors';
import { Grid } from '../../utilities/Grid/Grid';
import { DefaultButton, CommandButton } from '../../Button';
import { Callout } from '../../Callout';
import { FocusZone } from '../../FocusZone';
import * as stylesImport from './SwatchColorPicker.scss';
const styles: any = stylesImport;

export interface ISwatchColorPickerState {
  selectedIndex?: number;
  expanded?: boolean;
}

export class SwatchColorPicker extends BaseComponent<ISwatchColorPickerProps, ISwatchColorPickerState> {

  public static defaultProps = {
    cellShape: CellShape.circle,
    updateButtonIconWithColor: false,
    selectedId: null,
    disabled: false
  };

  private _id: string;

  private _buttonWrapper: HTMLDivElement;

  private _numOfItemsInChunk;

  constructor(props: ISwatchColorPickerProps) {
    super(props);

    this._id = props.id || getId('swatchColorPicker');
    this._numOfItemsInChunk = -1;

    this.state = {
      selectedIndex: props.selectedId && this._getSelectedIndex(props.swatchColorPickerItems, props.selectedId),
      expanded: false
    };
  }

  public componentWillReceiveProps(newProps: ISwatchColorPickerProps) {
    let newSelectedIndex = newProps.selectedId && this._getSelectedIndex(newProps.swatchColorPickerItems, newProps.selectedId);

    if ((newSelectedIndex !== undefined && newSelectedIndex !== null) &&
      (newSelectedIndex !== this.state.selectedIndex || newProps.swatchColorPickerItems !== this.props.swatchColorPickerItems)) {
      this.setState({
        selectedIndex: newSelectedIndex
      });
    }
  }

  public render() {
    let { swatchColorPickerButtonProps } = this.props;

    // If we got button props, put the swatch color picker behind a button
    let renderElement = swatchColorPickerButtonProps !== undefined ? this._buttonToRender() : this._fullSwatchColorPickerToRender();

    return (renderElement);
  }

  /**
   * Get the selected item's index
   * @param items - The items to search
   * @param selectedId - The selected item's id to find
   * @returns {number} - The index of the selected item's id, -1 if there was no match
   */
  private _getSelectedIndex(items: ISwatchColorPickerItemProps[], selectedId: string): number {
    return findIndex(items, (item => (item.id === selectedId)));
  }

  /**
   * Render the swatch color picker with a button as the collapsed/initial state
   */
  private _buttonToRender() {
    let { selectedIndex } = this.state;
    let {
      swatchColorPickerButtonProps,
      swatchColorPickerItems,
      updateButtonIconWithColor,
      width
    } = this.props;

    let colorToSet = null;

    // Do we need to update the button with the selected
    // item's color? If so, attempt to grab the color
    if (updateButtonIconWithColor &&
      selectedIndex &&
      selectedIndex >= 0 &&
      selectedIndex < swatchColorPickerItems.length) {
      let swatchColorPickerItem = swatchColorPickerItems[selectedIndex];
      if (swatchColorPickerItem.type === SwatchColorPickerItemType.Cell &&
        swatchColorPickerItem.color !== null &&
        swatchColorPickerItem.color.length > 0) {
        colorToSet = swatchColorPickerItem.color;
      }
    }

    return (
      <div ref={ this._resolveRef('_buttonWrapper') }>
        <DefaultButton
          { ...swatchColorPickerButtonProps }
          style={ { color: colorToSet && colorToSet } }
          onClick={ this._onClickButton }
          aria-haspopup={ true }
          aria-expanded={ (!this.props.disabled && this.state.expanded) ? true : false }
          disabled={ this.props.disabled }
          menuIconProps={ !swatchColorPickerButtonProps.menuIconProps ? { iconName: 'chevronDown' } : swatchColorPickerButtonProps.menuIconProps }
        >
        </DefaultButton>
        { (!this.props.disabled && this.state.expanded) && this._onRenderContainer() }
      </div>
    );
  }

  /**
   * Render the full swatch color picker this happens for both
   * the always visible case as well as the expandable case (when rendered in a menu)
   * @returns {JSX.Element} - The element representing the fully rendered swatch color picker
   */
  @autobind
  private _fullSwatchColorPickerToRender(): JSX.Element {
    let { swatchColorPickerItems, width } = this.props;
    return (
      <FocusZone
        isCircularNavigation={ true }
        className={ styles.swatchColorPickerContainer }
      >
        { this._onRenderItems(swatchColorPickerItems.map((item, index) => { return { ...item, index }; })) }
      </FocusZone>
    );
  }

  /**
   * Render all the items
   * @param items - The swatch color picker items
   * @returns {JSX.Element[]} - An array of all the items in the swatch color picker
   */
  @autobind
  private _onRenderItems(items: ISwatchColorPickerItemProps[]): JSX.Element[] {
    let {
      width
    } = this.props;

    // Make sure we have a cell that we need to render
    let containsNonCellItem = findIndex(items, (item => item.type !== SwatchColorPickerItemType.Cell)) > -1;

    // This holds all of the element for the items
    let elements: JSX.Element[] = [];

    // This tracks the index to jump to after processing
    // a chunk of cells
    this._numOfItemsInChunk = -1;

    // Get all the first executable items per chunk. Note, in this
    // context each menuItem is in its own "chunk", only grouped
    // cells are processed as a chunk. This helps with being able
    // to determine the correct aria-posinset and aria-setsize values
    let firstExecutableItemsPerChunk = containsNonCellItem ? this._getFirstExecutableItemsPerChunk() : null;

    // Did we find any executable items? (e.g. should be calculate the set information)
    let shouldGetSetInfo = (firstExecutableItemsPerChunk && firstExecutableItemsPerChunk.length > 0);

    let setSize = shouldGetSetInfo ? firstExecutableItemsPerChunk.length : null;

    // If any menuItem has an icon, all menu items need to be positined correctly so they align
    let shouldAccountForIcon = (firstExecutableItemsPerChunk && findIndex(firstExecutableItemsPerChunk, (executableItem) => (executableItem.type === SwatchColorPickerItemType.MenuItem && executableItem.menuItemButtonProps)));

    // Loop across the items processing them depending on their item type
    let index = 0;
    while (index < items.length) {
      let item = items[index];
      let posInSet = shouldGetSetInfo ? this._getPositionInSet(firstExecutableItemsPerChunk, item.id) : null;
      switch (item.type) {
        case SwatchColorPickerItemType.Divider:
          elements.push(this._renderSeparator(item));
          break;
        case SwatchColorPickerItemType.Header:
          elements.push(this._renderHeader(item));
          break;
        case SwatchColorPickerItemType.Cell:

          // build all the cells in the chunk this cell
          // exists within (this will process all of the
          // consecutive cells unitl the next non-cell type
          // is incountered (or if we reach the end of the items))
          elements.push(this._renderNextChuckOfCellItems(
            items.slice(index),
            posInSet,
            setSize));
          break;
        default:

          // Does at least one of the menu items have an icon?
          if (shouldAccountForIcon) {

            // Make sure the width styling is the same by applying a consistent className
            if (item.menuItemButtonProps) {
              item.menuItemButtonProps = {
                ...item.menuItemButtonProps,
                iconProps: { ...item.menuItemButtonProps.iconProps, className: styles.icon }
              };
            } else {

              // This menu item didn't have an icon so add a "spacer" icon to make the text
              // content align. This aligns with how ContextualMenu achieves this alignmet
              item.menuItemButtonProps = { ...item.menuItemButtonProps, iconProps: { iconName: 'customIcon', className: styles.icon } };
            }
          }
          elements.push(this._renderOption(item, posInSet, setSize));
      }

      // Increase the index by the number of items in the just processed chunk,
      // otherwise just increment the index
      index += this._numOfItemsInChunk > 0 ? this._numOfItemsInChunk : 1;
      this._numOfItemsInChunk = -1;
    }

    return elements;
  }

  /**
   * Renders the next consecutive chunk of cells
   * @param items - The items to process
   * @param posInSet - The position in the set for this chunk
   * @param setSize - The size of the total set
   * @returns {JSX.Element} - The grid that represents the chunk
   */
  private _renderNextChuckOfCellItems(
    items: ISwatchColorPickerItemProps[],
    posInSet: number = null,
    setSize: number = null): JSX.Element {
    let chunkItems = this._getNextChuckOfCellItems(items);

    // Update the number of items in chunk
    this._numOfItemsInChunk = chunkItems.length > 0 ? chunkItems.length : -1;

    return (
      <Grid
        key={ this._id + items[0].id + '-grid' }
        items={ chunkItems }
        width={ this.props.width }
        onRenderItem={ this._renderOption }
        positionInSet={ posInSet }
        setSize={ setSize }
      />
    );
  }

  /**
   * Get the position in set for the given id
   * @param firstExecutableItemsPerChunk - The list of fist executable items per chunk
   * @param itemId - The id of item to find the index of
   * @returns {number} - The position in the set
   */
  private _getPositionInSet(firstExecutableItemsPerChunk: ISwatchColorPickerItemProps[], itemId: string): number {

    // Find the index of the given id in the list of first executable items per chunk
    let index = findIndex(firstExecutableItemsPerChunk, (executableItem) => (executableItem.id === itemId));

    return index < 0 ? null : index + 1;
  }

  /**
   * Gets the next chunk of consecutive cells starting a index zero.
   * Note, index zero should be of type cell
   * @param items - The list of items to process where index zero is the start of the chunk
   * @returns {ISwatchColorPickerItemProps[]} - the array of consecutive cells starting at index zero
   *   (and continuing to the first non-cell type or the end of the items)
   */
  private _getNextChuckOfCellItems(items: ISwatchColorPickerItemProps[]): ISwatchColorPickerItemProps[] {
    let nextIndextAfterChunk = findIndex(items, (item => item.type !== SwatchColorPickerItemType.Cell));

    // If we didn't find a non-cell item, we need to handle everything that is left
    if (nextIndextAfterChunk < 0) {
      return items;
    }

    // If we get here we found our chunk boundry
    return items.slice(0 /* start */, nextIndextAfterChunk);
  }

  /**
   * Get only the executable items (cells and menuItems)
   * @returns {ISwatchColorPickerItemProps[]} - an array of the executable items
   */
  private _getFirstExecutableItemsPerChunk(): ISwatchColorPickerItemProps[] {

    // Make sure every item has an index, then filter
    // the results so that you only get the executable items,
    // finally filter those items down to just the items that are
    // either the start of a chunk or an menu item
    return (
      this.props.swatchColorPickerItems.map((item, index) => { return { ...item, index }; })
        .filter(item => (item.type === SwatchColorPickerItemType.Cell || item.type === SwatchColorPickerItemType.MenuItem))
        .filter((item, filteredIndex, items) => {
          return (
            filteredIndex === 0 ||
            item.type === SwatchColorPickerItemType.MenuItem ||
            (item.index - items[filteredIndex - 1].index !== 1)
          );
        }));
  }

  /**
   * Render the separator
   * @param item - The divider item to get the data to render from
   * @returns {JSX.Element} - Element that represents the separator
   */
  private _renderSeparator(item: ISwatchColorPickerItemProps): JSX.Element {
    return this._renderHeaderOrDivider(item, 'separator', styles.divider);
  }

  /**
   * Render the header
   * @param item - The header item to get the data to render from
   * @returns {JSX.Element} - Element that represents the header
   */
  private _renderHeader(item: ISwatchColorPickerItemProps): JSX.Element {
    return this._renderHeaderOrDivider(item, 'heading', styles.header);
  }

  /**
   * Handle the rendering of the header/divider
   * @param item - The item to get the data to render from
   * @param role - The role of the element
   * @param className - the className to use
   * @returns {JSX.Element} - Element that represents the header
   */
  private _renderHeaderOrDivider(item: ISwatchColorPickerItemProps, role: string, className: string): JSX.Element {
    return <div
      role={ role }
      key={ item.id }
      className={ className }
    >
      { item.label && item.label }
    </div>;
  }

  /**
   * Render a cell or menu item
   * @param item - The item to render
   * @param posInSet - Optinal, the position in the set of the item
   * @param setSize - Optional, the total set size this item is in
   * @returns {JSX.Element} - Element representing the item
   */
  @autobind
  private _renderOption(item: ISwatchColorPickerItemProps, posInSet: number = null, setSize: number = null): JSX.Element {
    let id = this._id;
    let isCell = item.type === SwatchColorPickerItemType.Cell;
    return (
      <CommandButton
        { ...item.menuItemButtonProps }
        id={ id + '-list' + item.index }
        ref={ 'option' + item.index }
        key={ id + item.id }
        data-index={ item.index }
        data-is-focusable={ true }
        aria-posinset={ !isCell ? (posInSet && posInSet) : null }
        aria-setsize={ !isCell ? (setSize && setSize) : null }
        disabled={ this.props.disabled || item.disabled }
        className={ css(
          'ms-SwatchColorPicker-item',
          (isCell ? styles.cell : styles.item),
          {
            ['is-selected ' + styles.cellIsSelected]: (isCell && this.state.selectedIndex === item.index),
            ['is-disabled ' + styles.disabled]: item.disabled && item.disabled
          },
        ) }
        onClick={ () => this._onItemClick(item) }
        onMouseEnter={ isCell ? () => this._onItemHoverOrFocused(item, this.props.onCellHovered) : null }
        onMouseLeave={ isCell ? () => this._clearColors([this.props.onCellHovered]) : null }
        onFocus={ isCell ? () => this._onItemHoverOrFocused(item, this.props.onCellFocused) : null }
        role={ isCell ? 'gridcell' : this.props.swatchColorPickerButtonProps ? 'menuitem' : 'button' }
        aria-selected={ isCell ? (this.state.selectedIndex === item.index ? 'true' : 'false') : null }
        ariaLabel={ item.label && item.label }
        title={ item.label && item.label }
      >
        { this._onRenderOption(item) }
      </CommandButton>
    );
  }

  /**
   * Handle hover/focus events for the given item with the given handler
   * @param item - The item the the event fired against
   * @param handler - The handler to for the event
   */
  @autobind
  private _onItemHoverOrFocused(item: ISwatchColorPickerItemProps, handler?: (color: string) => void) {
    if (this.props.disabled || (item && item.disabled)) {
      return;
    }

    if (handler) {
      handler(item ? item.color : null);
    }
  }

  /**
   * Handle the click on an item
   * @param item - The item that the click was fired against
   */
  @autobind
  private _onItemClick(item: ISwatchColorPickerItemProps) {
    if (this.props.disabled || item.disabled) {
      return;
    }

    let index = item.index;

    // If we have a valid index and it is not already
    // selected, select it
    if (index >= 0 && index !== this.state.selectedIndex) {
      if (this.props.onColorChanged) {
        this.props.onColorChanged(item.color);
      }

      this.setState({
        selectedIndex: index,
        expanded: false
      });
    } else if (index === this.state.selectedIndex) {

      // The index that got the click was already selected,
      // clear the selection
      this._clearColors([this.props.onColorChanged, this.props.onCellHovered, this.props.onCellFocused]);

      this.setState({
        selectedIndex: -1,
        expanded: false
      });
    }
  }

  /**
   * Clear the colors by calling the given callbacks
   * @param callbacks - The callbacks to handle the clear operation
   */
  private _clearColors(callbacks: ((color: string) => void)[]) {
    callbacks.forEach((callback) => {
      if (callback) {
        callback(null);
      }
    });
  }

  /**
   * Handler for the button clicks
   */
  @autobind
  private _onClickButton() {
    if (this.props.disabled) {
      return;
    }

    this.setState({
      expanded: this.props.disabled ? false : !this.state.expanded
    });
  }

  /**
   * Render the core of an cell or menu item
   * @param item - The item to render
   * @returns {JSX.Element} - Element representing the core of the item
   */
  @autobind
  private _onRenderOption(item: ISwatchColorPickerItemProps): JSX.Element {

    // Menu items just need their label text
    if (item.type !== SwatchColorPickerItemType.Cell) {
      return <span >{ item.label }</span>;
    }

    // Build an SVG for the cell with the given shape and color properties
    return (
      <svg className={ css(styles.svg, this.props.cellShape === CellShape.circle ? styles.circle : '') } viewBox='0 0 20 20' fill={ getColorFromString(item.color).str } >
        {
          (this.props.cellShape === CellShape.circle) ?
            <circle cx='50%' cy='50%' r='50%' /> :
            <rect width='100%' height='100%' />
        }
      </svg>
    );
  }

  /**
   * Render the menu (callout) for when the swatch color picker
   * is behind a button and is expanded
   */
  @autobind
  private _onRenderContainer() {
    return (
      <Callout
        isBeakVisible={ false }
        gapSpace={ 0 }
        doNotLayer={ false }
        role={ 'menu' }
        directionalHint={ DirectionalHint.bottomLeftEdge }
        className={ styles.swatchColorPickerContainer }
        targetElement={ this._buttonWrapper }
        onDismiss={ this._onDismiss }
        setInitialFocus={ true }>
        { this._fullSwatchColorPickerToRender() }
      </Callout>
    );
  }

  /**
   * Handle dismissing the menu
   */
  @autobind
  private _onDismiss() {
    this._clearColors([this.props.onCellHovered, this.props.onCellFocused]);

    this.setState({
      expanded: false
    });
  }
}
