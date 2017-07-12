/* tslint:disable:no-unused-variable */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
/* tslint:enable:no-unused-variable */

import * as PropTypes from 'prop-types';
import {
  css,
  BaseComponent,
  autobind
} from '../../Utilities';
import { ScrollablePane } from '../../ScrollablePane';
import { IStickyHeaderProps } from './StickyHeader.Props';
import * as stylesImport from './StickyHeader.scss';
const styles: any = stylesImport;

export interface IStickyHeaderState {
  isStickyTop: boolean;
  isStickyBottom: boolean;
  topDistance?: number;
  bottomDistance?: number;
}

export class StickyHeader extends BaseComponent<IStickyHeaderProps, IStickyHeaderState> {
  public static contextTypes = {
    addStickyHeader: PropTypes.func,
    removeStickyHeader: PropTypes.func,
    addStickyFooter: PropTypes.func,
    removeStickyFooter: PropTypes.func,
    subscribe: PropTypes.func
  };

  public refs: {
    root: HTMLElement;
    placeholder: HTMLElement;
    sticky: HTMLElement;
  };

  public context: {
    subscribe: (handler: Function) => void;
    addStickyHeader: (sticky: StickyHeader) => void;
    removeStickyHeader: (sticky: StickyHeader) => void;
    addStickyFooter: (sticky: StickyHeader) => void;
    removeStickyFooter: (sticky: StickyHeader) => void;
  };

  private _offsetTop: number;
  private _offsetBottom: number;

  constructor(props: IStickyHeaderProps) {
    super(props);
    this.state = {
      isStickyTop: false,
      isStickyBottom: false
    };
  }

  @autobind
  public componentDidMount() {
    if (!this.context.subscribe) {
      throw new TypeError('Expected Sticky to be mounted within ScrollablePane');
    }
    this.context.subscribe(this.handleScrollEvent);
  }

  @autobind
  public handleScrollEvent(
    topScrollBound: number,
    topHeaderHeight: number,
    offsetTop: number,
    bottomScrollBound: number,
    bottomFooterHeight: number,
    offsetBottom: number
    ) {
    const rootBounds: ClientRect = this.refs.root.getBoundingClientRect();
    const distanceFromStickyTop = rootBounds.top - topScrollBound;
    const distanceFromStickyBottom = rootBounds.bottom - bottomScrollBound;
    const topHeight = this.state.topDistance !== undefined ? this.state.topDistance : topHeaderHeight;
    const bottomHeight = this.state.bottomDistance !== undefined ? this.state.bottomDistance : bottomFooterHeight;

    const setStickyTop = distanceFromStickyTop <= topHeight;
    const setStickyBottom = distanceFromStickyBottom >= -bottomHeight;
    this._offsetTop = offsetTop;
    this._offsetBottom = offsetBottom;
    if (setStickyTop !== this.state.isStickyTop || setStickyBottom !== this.state.isStickyBottom) {
      this.setState({
        isStickyTop: setStickyTop,
        isStickyBottom: setStickyBottom
      }, () => {
        if (setStickyTop) {
          this.context.addStickyHeader(this);
        } else {
          this.context.removeStickyHeader(this);
        }
        if (setStickyBottom) {
          this.context.addStickyFooter(this);
        } else {
          this.context.removeStickyFooter(this);
        }
      });
    }

  }

  public setTopDistance(distance: number) {
    this.setState({
      topDistance: distance
    });
  }

  public setBottomDistance(distance: number) {
    this.setState({
      bottomDistance: distance
    });
  }

  public render() {
    const { isStickyTop, isStickyBottom, topDistance, bottomDistance } = this.state;
    const { stickyClassName } = this.props;
    let style;
    if (isStickyTop || isStickyBottom) {
      const top = isStickyTop ?
        this._offsetTop + topDistance :
        this._offsetBottom - this.refs.root.clientHeight - bottomDistance;
      style = {
        top: `${top}px`,
        width: `${this.refs.root.clientWidth}px`,
        background: this._getBackground()
      };
    }

    const placeholderStyle = isStickyTop || isStickyBottom ?
      {
        paddingBottom: `${this.refs.sticky.clientHeight}px`
      } : {};

    return (
      <div ref='root'>
        <div ref='placeholder' style={ placeholderStyle } />
        <div ref='sticky' className={ css({
          [styles.isSticky]: isStickyTop || isStickyBottom,
          [stickyClassName]: isStickyTop || isStickyBottom
        }) } style={ style }>
          { this.props.children }
        </div>
      </div>
    );
  }

  private _getBackground(): string {
    let curr = this.refs.root;
    while (window.getComputedStyle(curr, null).getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)') {
      curr = curr.parentElement;
    }
    return window.getComputedStyle(curr, null).getPropertyValue('background-color');
  }
}
