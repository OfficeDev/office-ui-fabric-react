import { IPartialStackProps } from '../Stack.types';
import { IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities';
import { IStyle } from 'office-ui-fabric-react/lib/Styling';

export interface IHorizontalStackProps extends IPartialStackProps {
  /**
   * How to render the HorizontalStack.
   */
  as?: string | React.ReactType<IHorizontalStackProps>;

  /**
   * How to align child elements horizontally.
   */
  horizontalAlign?: 'left' | 'right' | 'center' | 'space-around' | 'space-between' | 'space-evenly';

  /**
   * How to align child elements vertically.
   */
  verticalAlign?: 'top' | 'bottom' | 'center' | 'baseline' | 'stretch';

  /**
   * Whether to allow child elements to wrap onto multiple rows.
   */
  wrap?: boolean;

  /**
   * Vertical space between children when children wrap onto multiple rows.
   * Defaults to the value of the gap property.
   */
  verticalGap?: number | string;

  /**
   * Custom styles to apply to the HorizontalStack.
   */
  styles?: IStyleFunctionOrObject<IHorizontalStackProps, IHorizontalStackStyles>;
}

export interface IHorizontalStackStyles {
  /**
   * Style set for the root element.
   */
  root: IStyle;

  /**
   * Style set for the inner element (only when the wrap property is true).
   */
  inner: IStyle;
}
