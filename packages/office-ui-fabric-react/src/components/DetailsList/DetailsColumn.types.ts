import { IColumn } from './DetailsList.types';
import { DetailsColumnBase } from './DetailsColumn.base';
import { IRenderFunction, IStyleFunctionOrObject } from '../../Utilities';
import { ITooltipHostProps } from '../../Tooltip';
import { IDragDropHelper } from '../../utilities/dragdrop/index';
import { ICellStyleProps } from './DetailsRow.types';
import { ITheme, IStyle } from '../../Styling';

/**
 * {@docCategory DetailsList}
 */
export interface IDetailsColumnProps extends React.ClassAttributes<DetailsColumnBase> {
  /**
   * The theme object to respect during render.
   */
  theme?: ITheme;
  /**
   * The component styles to respect during render.
   */
  styles?: IStyleFunctionOrObject<IDetailsColumnStyleProps, IDetailsColumnStyles>;
  /**
   * A reference to the component instance.
   */
  componentRef?: () => void;
  /**
   * The column definition for the component instance.
   */
  column: IColumn;
  /**
   * The column index for the component instance.
   */
  columnIndex: number;
  /**
   * Parent ID used for accessibility label(s).
   */
  parentId?: string;
  /**
   * Render function for providing a column header tooltip.
   */
  onRenderColumnHeaderTooltip?: IRenderFunction<ITooltipHostProps>;
  /**
   * Callback fired when click event occurs.
   */
  onColumnClick?: (ev: React.MouseEvent<HTMLElement>, column: IColumn) => void;
  /**
   * Callback fired on contextual menu event to provide contextual menu UI.
   */
  onColumnContextMenu?: (column: IColumn, ev: React.MouseEvent<HTMLElement>) => void;
  /**
   * The drag and drop helper for the component instance.
   */
  dragDropHelper?: IDragDropHelper | null;
  /**
   * Whether or not the column can be re-ordered via drag and drop.
   */
  isDraggable?: boolean;
  /**
   * @deprecated, use `updateDragInfo`
   */
  setDraggedItemIndex?: (itemIndex: number) => void;
  /**
   * Callback on drag and drop event.
   */
  updateDragInfo?: (props: { itemIndex: number }, event?: MouseEvent) => void;
  /**
   * Whether or not the column has been dropped via drag and drop.
   */
  isDropped?: boolean;
  /**
   * Custom styles for cell rendering.
   */
  cellStyleProps?: ICellStyleProps;
}

/**
 * {@docCategory DetailsList}
 */
export type IDetailsColumnStyleProps = Required<Pick<IDetailsColumnProps, 'theme' | 'cellStyleProps'>> & {
  /**
   * Classname to provide for header region.
   */
  headerClassName?: string;
  /**
   * Whether or not the column is actionable.
   */
  isActionable?: boolean;
  /**
   * Whether or not the column contains contents.
   */
  isEmpty?: boolean;
  /**
   * Whether or not the column has a visible icon.
   */
  isIconVisible?: boolean;
  /**
   * Whether or not the column is padded.
   */
  isPadded?: boolean;
  /**
   * Whether or not the column has icon only content/
   */
  isIconOnly?: boolean;
  /**
   * Classname to provide for the header's icon region.
   */
  iconClassName?: string;
  /**
   * CSS transition duration on drag event.
   */
  transitionDurationDrag?: number;
  /**
   * CSS transition duration on drop event.
   */
  transitionDurationDrop?: number;
};

/**
 * {@docCategory DetailsList}
 */
export interface IDetailsColumnStyles {
  /**
   * Styleable root region.
   */
  root: IStyle;
  /**
   * Styleable resize glyph region.
   */
  gripperBarVerticalStyle: IStyle;
  /**
   * Styleable cell tooltip region.
   */
  cellTooltip: IStyle;
  /**
   * Styleable cell title region.
   */
  cellTitle: IStyle;
  /**
   * Styleable cell name region.
   */
  cellName: IStyle;
  /**
   * Styleable icon region.
   */
  iconClassName: IStyle;
  /**
   * Styleable margin by icon region.
   */
  nearIcon: IStyle;
  /**
   * Styleable label region.
   */
  accessibleLabel: IStyle;
  /**
   * Styleable column sort icon region.
   */
  sortIcon: IStyle;
  /**
   * Styleable filter glyph.
   */
  filterChevron: IStyle;
  /**
   * Styleable border region after drag & drop.
   */
  borderAfterDropping: IStyle;
  /**
   * Transparent no border region after drag & drop to avoid content shift.
   */
  noBorderAfterDropping: IStyle;
  /**
   * Styleable border while drag & drop occurs.
   */
  borderWhileDragging: IStyle;
  /**
   * Transparent no border region while drag & drop occurs to avoid content shift.
   */
  noBorderWhileDragging: IStyle;
}
