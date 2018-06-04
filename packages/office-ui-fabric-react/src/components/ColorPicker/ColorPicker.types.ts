import { ITheme, IStyle } from '../../Styling';
import { IStyleFunctionOrObject } from '../../Utilities';

export interface IColorPicker {

}

export interface IColorPickerProps {
  /**
   * Gets the component ref.
   */
  componentRef?: (component: IColorPicker | null) => void;

  /**
   * The CSS-compatible string to describe the initial color
   */
  color: string;

  /**
   * Callback issued when the user changes the color
   */
  onColorChanged?: (color: string) => void;

  /**
   * The setting of whether to hide the alpha control slider.
   */
  alphaSliderHidden?: boolean;

  /**
   * Label for the hex textfield.
   * @default Hex
   */
  hexLabel?: string;

  /**
   * Label for the red textfield
   * @default Red
   */
  redLabel?: string;

  /**
   * Label for the green textfield
   * @default Green
   */
  greenLabel?: string;

  /**
   * Label for the blue textfield
   * @default Blue
   */
  blueLabel?: string;

  /**
   * Label for the alpha textfield
   * @default Alpha
   */
  alphaLabel?: string;

  /**
   * Additional CSS class(es) to apply to the ColorPicker.
   */
  className?: string;

  /**
   * Theme (provided through customization);
   */
  theme?: ITheme;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<IColorPickerStyleProps, IColorPickerStyles>;
}

export interface IColorPickerStyleProps {
  theme: ITheme;
  className?: string;
}

export interface IColorPickerStyles {
  root?: IStyle;
  panel?: IStyle;
  table?: IStyle;
  tableHeader?: IStyle;
  tableHexCell?: IStyle;
  input?: IStyle;
}
