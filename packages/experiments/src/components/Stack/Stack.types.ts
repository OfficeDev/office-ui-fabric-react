import { IStyle } from '../../Styling';
import { IStyleableComponent } from '../../Foundation';

type Alignment =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'baseline'
  | 'stretch';

export interface IStackProps extends IStyleableComponent<IStackProps, IStackStyles> {
  /**
   * How to render the Stack.
   */
  renderAs?: string | React.ReactType<IStackProps>;

  /**
   * CSS class name used to style the Stack.
   */
  className?: string;

  /**
   * Whether to render Stack child elements horizontally.
   */
  horizontal?: boolean;

  /**
   * How to align Stack child elements horizontally (along the x-axis).
   */
  horizontalAlignment?: Alignment;

  /**
   * How to align Stack child elements vertically (along the y-axis).
   */
  verticalAlignment?: Alignment;

  /**
   * Whether the Stack should take up 100% of the width of its parent.
   */
  fillHorizontal?: boolean;

  /**
   * Whether the Stack should take up 100% of the height of its parent.
   */
  fillVertical?: boolean;

  /**
   * Whether Stack child elements should shrink to fit the available space.
   */
  collapseItems?: boolean;

  /**
   * How much to grow the Stack in proportion to its siblings.
   */
  grow?: boolean | number | 'inherit' | 'initial' | 'unset';

  /**
   * Spacing between Stack child elements.
   */
  gap?: number;

  /**
   * Maximum width of the Stack.
   */
  maxWidth?: number | string;

  /**
   * Maximum height of the Stack.
   */
  maxHeight?: number | string;

  /**
   * Padding of the Stack.
   */
  padding?: number | string;

  /**
   * Margin of the Stack.
   */
  margin?: number | string;
}

export interface IStackStyles {
  /**
   * Style set for the root element.
   */
  root: IStyle;
}
