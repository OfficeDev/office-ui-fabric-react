import { IButtonProps } from '../../Button';

export interface ISwatchColorPickerProps {

  /**
   * the number of columns for the swatch color picker
   */
  columnCount: number;

  /**
   * The id for the swatch color picker
   */
  id?: string;

  /**
   * The shape of the color cells, defaults to circle
   */
  cellShape?: 'circle' | 'square';

  /**
   * The id of color cell that is currently selected
   */
  selectedId?: string;

  /**
   * Icon props for the swatch color picker. If given the swatch color picker
   * will render inside of a menu
   */
  swatchColorPickerButtonProps?: IButtonProps;

  /**
   * Should the icon color be updated to align
   * with the selected color? Default is false
   */
  updateButtonIconWithColor?: boolean;

  /**
   * The items to render the contents of the swatch color picker
   */
  swatchColorPickerItems: ISwatchColorPickerItemProps[];

  /**
   * Callback issued when the user changes the color
   */
  onColorChanged?: (color: string) => void;

  /**
 * Callback issued when the user click a menu item
 */
  onMenuItemClick?: (item: ISwatchColorPickerItemProps) => void;

  /**
   * Callback issued when the user hovers over a color cell
   */
  onCellHovered?: (color: string) => void;

  /**
   * Callback issued when the user focuses a color cell
   */
  onCellFocused?: (color: string) => void;

  /**
   * Is this swatch color picker disabled?
   */
  disabled?: boolean;
}

export interface ISwatchColorPickerItemProps {

  /**
   * Arbitrary unique string associated with this option
   */
  id: string;

  /**
   * The label for this item.
   * Visible text if this item is a header,
   * tooltip if is this item is normal
   */
  label?: string;

  /**
   * The type of item this is
   */
  type: SwatchColorPickerItemType;

  /**
   * The CSS-compatible string to describe the color
   */
  color?: string;

  /**
   * Index for this option
   */
  index?: number;

  /**
   * The menu item button props. This value is only used if
   * the type is MenuItem
   */
  menuItemButtonProps?: IButtonProps;

  /**
   * Is this individual item disabled?
   */
  disabled?: boolean;
}

export enum SwatchColorPickerItemType {
  Cell = 0,
  MenuItem = 1,
  Divider = 2,
  Header = 3
}