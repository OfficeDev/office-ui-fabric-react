import * as React from 'react';
import {
  BaseComponent,
  classNamesFunction,
} from '../../../Utilities';
import {
  IShimmerCircleProps,
  IShimmerCircleStyleProps,
  IShimmerCircleStyles
} from './ShimmerCircle.styles';

const getClassNames = classNamesFunction<IShimmerCircleStyleProps, IShimmerCircleStyles>();
// TODO needs to be thought about
export interface IShimmerCircleState {
  hasCircle: boolean;
}

export class ShimmerCircleBase extends BaseComponent<IShimmerCircleProps, IShimmerCircleState> {
  public static defaultProps: IShimmerCircleProps = {
    height: 24
  };
  private _classNames: {[key in keyof IShimmerCircleStyles]: string};
  constructor(props: IShimmerCircleProps) {
    super(props);
  }

  public render() {
    const { height, getStyles, borderAlignStyle } = this.props;
    this._classNames = getClassNames(getStyles!, { height, borderAlignStyle });

    return (
      <div className={ this._classNames.root }>
        <svg
          viewBox='0 0 10 10'
          width={ height }
          height={ height }
          className={ this._classNames.svg }
        >
          <path
            d='M0,0 L10,0 L10,10 L0,10 L0,0 Z M0,5 C0,7.76142375 2.23857625,10 5,10 C7.76142375,10 10,7.76142375 10,5 C10,2.23857625 7.76142375,2.22044605e-16 5,0 C2.23857625,-2.22044605e-16 0,2.23857625 0,5 L0,5 Z'
          />
        </svg>
      </div>
    );
  }
}