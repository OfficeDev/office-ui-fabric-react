import * as React from 'react';
import {
  autobind,
  BaseComponent,
  css,
  findIndex,
  getId
} from '../../../Utilities';
import { IPredefinedColorPickerProps, IColorPickerItemProps, ColorPickerItemType, CellShape } from './PredefinedColorPicker.Props';
import { DirectionalHint } from '../../../ContextualMenu';
import { getColorFromString } from '../../../utilities/color/colors';
import { Grid } from '../../../utilities/Grid/Grid';
import { DefaultButton, CommandButton } from '../../../Button';
import { Callout } from '../../../Callout';
import { Icon } from '../../../Icon';
import { FocusZone } from '../../../FocusZone';
import * as stylesImport from './PredefinedColorPicker.scss';
const styles: any = stylesImport;

export interface IPredefinedColorPickerState {
  selectedIndex?: number;
  isOpen?: boolean;
}

export class PredefinedColorPicker extends BaseComponent<IPredefinedColorPickerProps, IPredefinedColorPickerState> {

  public static defaultProps = {
    cellShape: CellShape.circle,
    updateButtonIconWithColor: false,
    selectedId: null,
    disabled: false
  };

  private _id: string;

  private _buttonWrapper: HTMLDivElement;

  private _nextIndexAfterChunk;

  constructor(props: IPredefinedColorPickerProps) {
    super(props);

    this._id = props.id || getId('colorPicker');
    this._nextIndexAfterChunk = -1;

    this.state = {
      selectedIndex: props.selectedId && this._getSelectedIndex(props.colorPickerItems, props.selectedId),
      expanded: false
    };
  }

  public componentWillReceiveProps(newProps: IPredefinedColorPickerProps) {
    let newSelectedIndex = newProps.selectedId && this._getSelectedIndex(newProps.colorPickerItems, newProps.selectedId);

    if (newSelectedIndex !== undefined &&
      (newSelectedIndex !== this.state.selectedIndex || newProps.colorPickerItems !== this.props.colorPickerItems)) {
      this.setState({
        selectedIndex: newSelectedIndex
      });
    }
  }

  public render() {
    let { colorPickerButtonProps } = this.props;

    let renderElement = colorPickerButtonProps !== undefined ? this._buttonToRender() : this._fullColorPickerToRender();

    return (renderElement);
  }

  private _getSelectedIndex(items: IColorPickerItemProps[], selectedId: string) {
    return findIndex(items, (item => (item.id === selectedId)));
  }

  private _buttonToRender() {
    let { selectedIndex } = this.state;
    let {
      colorPickerButtonProps,
      colorPickerItems,
      updateButtonIconWithColor,
      width
    } = this.props;

    let colorToSet = null;
    if (updateButtonIconWithColor &&
      selectedIndex &&
      selectedIndex >= 0 &&
      selectedIndex < colorPickerItems.length) {
      let colorPickerItem = colorPickerItems[selectedIndex];
      if (colorPickerItem.type === ColorPickerItemType.Cell &&
        colorPickerItem.color !== null &&
        colorPickerItem.color.length > 0) {
        colorToSet = colorPickerItem.color;
      }
    }

    return (
      <div ref={ this._resolveRef('_buttonWrapper') }>
        <DefaultButton
          { ...colorPickerButtonProps }
          style={ { color: colorToSet && colorToSet } }
          onClick={ this._onClickButton }
          menuIconProps={ !colorPickerButtonProps.menuIconProps ? { iconName: 'chevronDown' } : colorPickerButtonProps.menuIconProps }
        >
        </DefaultButton>
        { (!this.props.disabled && this.state.expanded) && this._onRenderContainer() }
      </div>
    );
  }

  @autobind
  private _fullColorPickerToRender() {
    let { colorPickerItems, width } = this.props;
    return (
      <FocusZone
        isCircularNavigation={ true }
        className={ styles.colorPickerContainer }
      >
        { this._onRenderItems(colorPickerItems.map((item, index) => { return { ...item, index }; })) }
      </FocusZone>
    );
  }

  @autobind
  private _onRenderItems(items: IColorPickerItemProps[]) {
    let {
      width
    } = this.props;

    let containsNonCellItem = findIndex(items, (item => item.type !== ColorPickerItemType.Cell)) > -1;
    let element: JSX.Element[] = [];
    this._nextIndexAfterChunk = -1;
    let firstExecutableItemsPerChunk = containsNonCellItem ? this._getFirstExecutableItemsPerChunk() : null;
    let shouldGetSetInfo = (firstExecutableItemsPerChunk && firstExecutableItemsPerChunk.length > 0);

    let index = 0;
    while (index < items.length) {
      let item = items[index];
      let posInSet = shouldGetSetInfo ? this._getPositionInSet(firstExecutableItemsPerChunk, item) : null;
      let setSize = shouldGetSetInfo ? firstExecutableItemsPerChunk.length : null;
      switch (item.type) {
        case ColorPickerItemType.Divider:
          element.push(this._renderSeparator(item));
          break;
        case ColorPickerItemType.Header:
          element.push(this._renderHeader(item));
          break;
        case ColorPickerItemType.Cell:
          element.push(this._renderNextChuckOfCellItems(
            items.slice(index),
            posInSet,
            setSize));
          break;
        default:
          element.push(this._renderOption(item, posInSet, setSize));
      }

      index += this._nextIndexAfterChunk > 0 ? this._nextIndexAfterChunk : 1;
      this._nextIndexAfterChunk = -1;
    }

    return element;
  }

  private _renderNextChuckOfCellItems(
    items: IColorPickerItemProps[],
    posInSet: number = null,
    setSize: number = null): JSX.Element {
    let chunkItems = this._getNextChuckOfCellItems(items);

    this._nextIndexAfterChunk = chunkItems.length > 0 ? chunkItems.length : -1;

    return (
      <Grid
        key={ this._id + items[0].id + '-grid' }
        items={ chunkItems }
        width={ this.props.width }
        onRenderItem={ this._renderOption }
        positionInSet={ posInSet }
        setSize={ setSize }
      />
    )
  }

  private _getPositionInSet(firstExecutableItemsPerChunk: IColorPickerItemProps[], item: IColorPickerItemProps) {
    let index = findIndex(firstExecutableItemsPerChunk, (executableItem) => (executableItem.id === item.id));
    return index < 0 ? null : index + 1;
  }

  private _getNextChuckOfCellItems(items: IColorPickerItemProps[]) {
    let nextIndextAfterChunk = findIndex(items, (item => item.type !== ColorPickerItemType.Cell));

    // if we didn't find a non-cell item, we need to handle everything that is left
    if (nextIndextAfterChunk < 0) {
      return items;
    }

    // if we get here we found our chunk boundry
    return items.slice(0 /* start */, nextIndextAfterChunk);
  }

  /**
   * Get only the executable items (cells and menuItems)
   * @returns {IColorPickerItemProps[]} - an array of the executable items
   */
  private _getFirstExecutableItemsPerChunk(): IColorPickerItemProps[] {
    // make sure every item has an index, the filter
    // the results so that you only get the executable items,
    // finally filter those items down to just the items that are
    // either the start of a grid or an menu item
    return (
      this.props.colorPickerItems.map((item, index) => { return { ...item, index }; })
        .filter(item => (item.type === ColorPickerItemType.Cell || item.type === ColorPickerItemType.MenuItem))
        .filter((item, filteredIndex, items) => {
          return (
            filteredIndex === 0 ||
            item.type === ColorPickerItemType.MenuItem ||
            (item.index - items[filteredIndex - 1].index !== 1)
          );
        }));
  }

  // Render separator
  private _renderSeparator(item: IColorPickerItemProps): JSX.Element {
    let { index, id } = item;
    if (index > 0) {
      return <div
        role='separator'
        key={ id }
        className={ css('ms-Dropdown-divider', styles.divider) } />;
    }
    return null;
  }

  private _renderHeader(item: IColorPickerItemProps): JSX.Element {
    return (
      <div className={ css('ms-Dropdown-header', styles.header) } key={ item.id }>
        { this._onRenderOption(item) }
      </div>);
  }

  // Render grid cell option
  @autobind
  private _renderOption(item: IColorPickerItemProps, posInSet: number = null, setSize: number = null): JSX.Element {
    let id = this._id;
    let isCell = item.type === ColorPickerItemType.Cell;
    return (
      <CommandButton
        { ...item.menuItemButtonProps }
        id={ id + '-list' + item.index }
        ref={ 'option' + item.index }
        key={ item.id }
        data-index={ item.index }
        data-is-focusable={ true }
        aria-posinset={ !isCell ? (posInSet && posInSet) : null }
        aria-setsize={ !isCell ? (setSize && setSize) : null }
        aria-disabled={ this.props.disabled || item.disabled }
        className={ css(
          'ms-Dropdown-item',
          (isCell ? styles.cell : styles.item),
          { ['is-selected ' + styles.cellIsSelected]: (isCell && this.state.selectedIndex === item.index) },
        ) }
        onClick={ () => this._onItemClick(item.index) }
        onMouseOver={ () => this._onItemHover(item) }
        role={ isCell ? 'gridcell' : this.props.colorPickerButtonProps ? 'menuitem' : 'button' }
        aria-selected={ isCell ? (this.state.selectedIndex === item.index ? 'true' : 'false') : null }
        ariaLabel={ item.label && item.label }
        title={ item.label && item.label }
      >
        { this._onRenderOption(item) }
      </CommandButton>
    );
  }

  @autobind
  private _onItemHover(item: IColorPickerItemProps) {
    if (this.props.disabled || item.disabled) {
      return;
    }

    if (this.props.onCellHovered) {
      this.props.onCellHovered(item.color);
    }
  }

  @autobind
  private _onItemClick(index: number) {
    if (this.props.disabled || this.props.colorPickerItems[index].disabled) {
      return;
    }

    if (index >= 0 && index < this.props.colorPickerItems.length && index !== this.state.selectedIndex) {
      if (this.props.onColorChanged) {
        this.props.onColorChanged(this.props.colorPickerItems[index].color);
      }

      this.setState({
        selectedIndex: index,
        expanded: false
      });
    } else if (index === this.state.selectedIndex) {
      this.setState({
        selectedIndex: -1,
        expanded: false
      });
    }
  }

  @autobind
  private _onClickButton() {
    if (this.props.disabled) {
      return;
    }

    this.setState({
      expanded: this.props.disabled ? false : !this.state.expanded
    });
  }

  @autobind
  private _onRenderOption(item: IColorPickerItemProps): JSX.Element {
    if (item.type !== ColorPickerItemType.Cell) {
      return <span className={ css('ms-colorPicker-header', styles.optionText) }>{ item.label }</span>;
    }

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

  @autobind
  private _onRenderContainer() {
    return (
      <Callout
        isBeakVisible={ false }
        gapSpace={ 0 }
        doNotLayer={ false }
        role={ 'menu' }
        directionalHint={ DirectionalHint.bottomLeftEdge }
        className={ styles.colorPickerContainer }
        targetElement={ this._buttonWrapper }
        onDismiss={ this._onDismiss }
        setInitialFocus={ true }>
        { this._fullColorPickerToRender() }
      </Callout>
    );
  }

  @autobind
  private _onDismiss() {
    this.setState({
      expanded: false
    });
  }
}
