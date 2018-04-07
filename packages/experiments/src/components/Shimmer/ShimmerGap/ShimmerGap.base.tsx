import * as React from 'react';
import {
  BaseComponent,
  classNamesFunction,
} from '../../../Utilities';
import {
  IShimmerGapProps,
  IShimmerGapStyleProps,
  IShimmerGapStyles
} from './ShimmerGap.types';
import { ShimmerElementVerticalAlign } from 'experiments/lib/Shimmer';

const getClassNames = classNamesFunction<IShimmerGapStyleProps, IShimmerGapStyles>();

export class ShimmerGapBase extends BaseComponent<IShimmerGapProps, {}> {
  public static defaultProps: IShimmerGapProps = {
    verticalAlign: ShimmerElementVerticalAlign.CENTER,
  };
  private _classNames: {[key in keyof IShimmerGapStyles]: string};

  constructor(props: IShimmerGapProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { height, getStyles, widthInPercentage, widthInPixel, borderAlignStyle } = this.props;

    this._classNames = getClassNames(getStyles!, { height, widthInPixel, widthInPercentage, borderAlignStyle });

    return (
      <div className={ this._classNames.root } />
    );
  }
}