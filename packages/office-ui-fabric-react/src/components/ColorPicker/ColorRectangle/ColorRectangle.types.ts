import { ITheme, IStyle } from '../../../Styling';
import { IStyleFunctionOrObject } from '../../../Utilities';
import { IColor } from '../../../utilities/color/colors';

export interface IColorRectangle {}

export interface IColorRectangleProps {
  /**
   * Gets the component ref.
   */
  componentRef?: (component: IColorRectangle | null) => void;

  /**
   * Current color of the rectangle.
   */
  color: IColor;

  /**
   * Minimum width and height.
   */
  minSize?: number;

  /**
   * Additional CSS class(es) to apply to the ColorRectangle.
   */
  className?: string;

  /**
   * Theme (provided through customization).
   */
  theme?: ITheme;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<IColorRectangleStyleProps, IColorRectangleStyles>;

  /**
   * Callback issued when the color changes.
   */
  onSVChanged?: (s: number, v: number) => void;
}

export interface IColorRectangleStyleProps {
  /**
   * Theme (provided through customization).
   */
  theme: ITheme;

  /**
   * Additional CSS class(es) to apply to the ColorRectangle.
   */
  className?: string;
}

export interface IColorRectangleStyles {
  /**
   * Style set for the root element.
   */
  root?: IStyle;

  /**
   * Style set for the light-colored rectangle.
   */
  light?: IStyle;

  /**
   * Style set for the dark-colored rectangle.
   */
  dark?: IStyle;

  /**
   * Style set for the draggable thumb element.
   */
  thumb?: IStyle;
}
