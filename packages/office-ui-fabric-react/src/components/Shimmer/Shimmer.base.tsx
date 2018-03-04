import * as React from 'react';
import {
  BaseComponent,
  classNamesFunction,
} from '../../Utilities';
import {
  IClassNames
} from '@uifabric/utilities/lib/IClassNames';
import {
  IShimmerProps,
  IShimmerStyleProps,
  IShimmerStyles,
  ShimmerElementType,
  ICircle,
  ILine,
  IGap,
  ShimmerElementVerticalAlign,
} from './Shimmer.types';
import {
  DefaultPalette
} from '../../Styling';
import { ShimmerRectangle } from 'office-ui-fabric-react/lib/components/Shimmer/ShimmerRectangle/ShimmerRectangle';
import { ShimmerCircle } from 'office-ui-fabric-react/lib/components/Shimmer/ShimmerCircle/ShimmerCircle';
import { IStyleSet } from '@uifabric/styling';

const getClassNames = classNamesFunction<IShimmerStyleProps, IShimmerStyles>();

export class ShimmerBase extends BaseComponent<IShimmerProps, {}> {
  public static defaultProps: IShimmerProps = {
    width: 100
  };
  private _classNames: {[key in keyof IShimmerStyles]: string};
  constructor(props: IShimmerProps) {
    super(props);
  }

  public render() {
    const { getStyles, width, lineElements } = this.props;
    const maxHeight: number | undefined = lineElements ? this.findMaxHeight(lineElements) : undefined;
    this._classNames = getClassNames(getStyles!, { width, maxHeight });

    const elements: JSX.Element[] | JSX.Element = lineElements ?
      lineElements.map((elem: ICircle | ILine | IGap, index: number): JSX.Element => {
        switch (elem.type) {
          case ShimmerElementType.CIRCLE:
            return (
              <ShimmerCircle
                key={ index }
                { ...elem }
                borderAlignStyle={ this.getBorderAlignStyles(maxHeight, elem) }
              />
            );
          case ShimmerElementType.GAP:
            const gapWidth = elem.width ? elem.width + '%' : '1%';
            return (
              <div
                key={ index }
                style={ {
                  width: gapWidth,
                  height: maxHeight + 'px',
                  backgroundColor: `${DefaultPalette.white}`
                } }>
              </div>
            );
          case ShimmerElementType.RECTANGLE:
            return (
              <ShimmerRectangle
                key={ index }
                { ...elem }
                borderAlignStyle={ this.getBorderAlignStyles(maxHeight, elem) }
              />
            );
        }
      }) :
      <ShimmerRectangle />;

    return (
      <div className={ this._classNames.root }>
        <div className={ this._classNames.fadeOutWrapper }>
          { elements }
        </div>
      </div>
    );
  }

  private findMaxHeight(items: Array<ICircle | IGap | ILine>): number {
    const maxHeight = items.reduce((acc: number, next: ICircle | IGap | ILine): number => {
      return next.height ?
        next.height > acc ? next.height : acc
        : acc;
    }, 0);
    return maxHeight;
  }

  private getBorderAlignStyles(maxHeight: number | undefined, elem: ICircle | IGap | ILine): IStyleSet | undefined {
    const dif: number | undefined = maxHeight && elem.height ?
      maxHeight - elem.height > 0 ?
        maxHeight - elem.height : undefined
      : undefined;

    let borderStyle: IStyleSet | undefined;
    const hasVerticalAlign: boolean = elem.verticalAlign ? true : false;

    if (elem.verticalAlign === ShimmerElementVerticalAlign.CENTER || !hasVerticalAlign) {
      borderStyle = {
        alignSelf: 'center',
        borderBottom: `${dif ? dif / 2 : 0}px solid ${DefaultPalette.white}`,
        borderTop: `${dif ? dif / 2 : 0}px solid ${DefaultPalette.white}`
      };
    } else if (elem.verticalAlign === ShimmerElementVerticalAlign.TOP && hasVerticalAlign) {
      borderStyle = {
        alignSelf: 'top',
        borderBottom: `${dif ? dif : 0}px solid ${DefaultPalette.white}`,
        borderTop: `0px solid ${DefaultPalette.white}`
      };
    } else if (elem.verticalAlign === ShimmerElementVerticalAlign.BOTTOM && hasVerticalAlign) {
      borderStyle = {
        alignSelf: 'bottom',
        borderBottom: `0px solid ${DefaultPalette.white}`,
        borderTop: `${dif ? dif : 0}px solid ${DefaultPalette.white}`
      };
    }
    return borderStyle;
  }
}