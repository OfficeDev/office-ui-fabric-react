import * as React from 'react';
import {
  IStyle,
  IRawStyle,
  DefaultPalette
} from '../../../Styling';
import { IStyleFunction } from '../../../Utilities';
import { ShimmerElementVerticalAlign } from 'office-ui-fabric-react/lib/Shimmer';

export interface IShimmerRectangle {

}

/**
 * ShimmerRectangle component props.
 */
export interface IShimmerRectangleProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Optional callback to access the IShimmerRectangle interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: (component: IShimmerRectangle) => void;

  /**
   * Sets the height of the rectangle.
   * @default 16px
   */
  height?: number;

  /**
   * Sets width of the elemnts.
   * @default 100%
   */
  width?: number;

  /**
   * @default center
   */
  verticalAlign?: string;

  /**
   * Used to calculate the borders. No need to be provided.
   */
  maxHeight?: number;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  getStyles?: IStyleFunction<IShimmerRectangleStyleProps, IShimmerRectangleStyles>;
}

export interface IShimmerRectangleStyleProps {
  height?: number;
  verticalAlign?: string;
  maxHeight?: number;
  width?: number;
}

export interface IShimmerRectangleStyles {
  root?: IStyle;
}

export function getStyles(props: IShimmerRectangleStyleProps): IShimmerRectangleStyles {
  const {
    height,
    verticalAlign,
    maxHeight,
    width
  } = props;

  const dif: number | undefined = maxHeight && height ?
    maxHeight - height > 0 ?
      maxHeight - height : undefined
    : undefined;

  let borderStyle: any;
  if (verticalAlign) {
    if (verticalAlign === ShimmerElementVerticalAlign.CENTER) {
      borderStyle = {
        alignSelf: 'center',
        borderBottom: `${dif ? dif / 2 : 0}px solid ${DefaultPalette.white}`,
        borderTop: `${dif ? dif / 2 : 0}px solid ${DefaultPalette.white}`
      }
    } else if (verticalAlign === ShimmerElementVerticalAlign.TOP) {
      borderStyle = {
        alignSelf: 'top',
        borderBottom: `${dif ? dif : 0}px solid ${DefaultPalette.white}`,
        borderTop: `0px solid ${DefaultPalette.white}`
      }
    } else if (verticalAlign === ShimmerElementVerticalAlign.BOTTOM) {
      borderStyle = {
        alignSelf: 'bottom',
        borderBottom: `0px solid ${DefaultPalette.white}`,
        borderTop: `${dif ? dif : 0}px solid ${DefaultPalette.white}`
      }
    }
  }

  return {
    root: [
      'ms-ShimmerRectangle-line',
      {
        color: 'transparent',
        width: `${width}%`,
        height: `${height}px`,
        boxSizing: 'content-box',
      },
      borderStyle
    ]
  };
}
