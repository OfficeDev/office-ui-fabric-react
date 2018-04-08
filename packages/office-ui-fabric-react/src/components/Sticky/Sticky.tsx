/* tslint:disable:no-unused-variable */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
/* tslint:enable:no-unused-variable */

import * as PropTypes from 'prop-types';
import { BaseComponent, createRef } from '../../Utilities';
import { IStickyProps, StickyPositionType } from './Sticky.types';

export interface IStickyState {
  isStickyTop: boolean;
  isStickyBottom: boolean;
}

export interface IStickyContext {
  scrollablePane: PropTypes.Requireable<object>;
}

export class Sticky extends BaseComponent<IStickyProps, IStickyState> {
  public static defaultProps: IStickyProps = {
    stickyPosition: StickyPositionType.Both
  };

  public static contextTypes: IStickyContext = {
    scrollablePane: PropTypes.object
  };

  public context: {
    scrollablePane: {
      subscribe: (handler: Function) => void;
      unsubscribe: (handler: Function) => void;
      addSticky: (sticky: Sticky) => void;
      removeSticky: (sticky: Sticky) => void;
      updateStickyRefHeights: () => void;
      sortSticky: (sticky: Sticky) => void;
      notifySubscribers: (sort?: boolean) => void;
    }
  };

  public root = createRef<HTMLDivElement>();
  public stickyContentTop = createRef<HTMLDivElement>();
  public stickyContentBottom = createRef<HTMLDivElement>();
  public nonStickyContent = createRef<HTMLDivElement>();
  public distanceFromTop: number;

  constructor(props: IStickyProps) {
    super(props);
    this.state = {
      isStickyTop: false,
      isStickyBottom: false
    };
    this.distanceFromTop = 0;
  }

  public get canStickyTop(): boolean {
    return this.props.stickyPosition === StickyPositionType.Both || this.props.stickyPosition === StickyPositionType.Header;
  }

  public get canStickyBottom(): boolean {
    return this.props.stickyPosition === StickyPositionType.Both || this.props.stickyPosition === StickyPositionType.Footer;
  }

  public componentDidMount(): void {
    if (!this.context.scrollablePane) {
      throw new TypeError('Expected Sticky to be mounted within ScrollablePane');
    }
    const { scrollablePane } = this.context;
    scrollablePane.subscribe(this._onScrollEvent);
    scrollablePane.addSticky(this);
  }

  public componentWillUnmount(): void {
    const { scrollablePane } = this.context;
    scrollablePane.unsubscribe(this._onScrollEvent);
    scrollablePane.removeSticky(this);
  }

  public shouldComponentUpdate(nextProps: IStickyProps, nextState: IStickyState): boolean {
    const { isStickyTop, isStickyBottom } = this.state;
    return isStickyTop !== nextState.isStickyTop ||
      isStickyBottom !== nextState.isStickyBottom ||
      this.props.stickyPosition !== nextProps.stickyPosition ||
      this.props.children !== nextProps.children;
  }

  public render(): JSX.Element {
    const { isStickyTop, isStickyBottom } = this.state;

    return (
      <div ref={ this.root }>
        {
          this.canStickyTop &&
          <div
            data-sticky="top"
            className={ this.props.stickyClassName }
            ref={ this.stickyContentTop }
            style={ this._getStickyStyles(isStickyTop) }
          >
            { this.props.children }
          </div>
        }
        {
          this.canStickyBottom &&
          <div
            data-sticky="bottom"
            className={ this.props.stickyClassName }
            ref={ this.stickyContentBottom }
            style={ this._getStickyStyles(isStickyBottom) }
          >
            { this.props.children }
          </div>
        }
        <div
          ref={ this.nonStickyContent }
          className={ isStickyTop || isStickyBottom ? this.props.stickyClassName : undefined }
          style={ {
            backgroundColor: this.props.stickyBackgroundColor
          } }>
          { this.props.children }
        </div>
      </div>
    );
  }

  private _getStickyStyles = (isSticky: boolean): React.CSSProperties => {
    return {
      visibility: isSticky ? 'visible' : 'hidden',
      backgroundColor: this.props.stickyBackgroundColor || this._getBackground()
    };
  }

  private _onScrollEvent = (container: HTMLElement, footerStickyContainer: HTMLElement): void => {
    const { scrollablePane } = this.context;
    const { stickyPosition } = this.props;

    if (this.root.value && this.nonStickyContent.value) {
      this.distanceFromTop = this._getNonStickyDistanceFromTop(container);

      // Add stickyContentTop/stickyContentBottom to ScrollablePane in proper position
      scrollablePane.sortSticky(this);
      let isStickyTop: boolean = false;

      if (this.canStickyTop) {
        const distanceToStickTop = this.distanceFromTop - this._getStickyDistanceFromTop();
        isStickyTop = distanceToStickTop <= container.scrollTop;
      }

      let isStickyBottom: boolean = false;

      // Can sticky bottom if the scrollablePane - total sticky footer height is smaller than the sticky's distance from the top of the pane
      if (this.canStickyBottom && container.clientHeight - footerStickyContainer.offsetHeight <= this.distanceFromTop) {
        isStickyBottom = this.distanceFromTop - container.scrollTop > this._getStickyDistanceFromTopForFooter(container, footerStickyContainer);
      }

      this.setState({
        isStickyTop: this.canStickyTop && isStickyTop,
        isStickyBottom: isStickyBottom
      }, () => {
        // Update ScrollablePane's Sticky top and Sticky bottom heights
        scrollablePane.updateStickyRefHeights();
      });
    }
  }

  private _getStickyDistanceFromTop = (): number => {
    let distance: number = 0;
    if (this.stickyContentTop.value) {
      distance = this.stickyContentTop.value.offsetTop;
    }


    return distance;
  }

  private _getStickyDistanceFromTopForFooter = (container: HTMLElement, footerStickyVisibleContainer: HTMLElement): number => {
    let distance: number = 0;
    if (this.stickyContentBottom.value) {
      distance = container.clientHeight - footerStickyVisibleContainer.offsetHeight + this.stickyContentBottom.value.offsetTop;
    }

    return distance;
  }

  private _getNonStickyDistanceFromTop = (container: HTMLElement): number => {
    let distance: number = 0;
    let currElem = this.root.value;

    if (currElem) {
      while (currElem.offsetParent !== container) {
        distance += currElem.offsetTop;
        currElem = currElem.offsetParent as HTMLDivElement;
      }

      if (currElem.offsetParent === container) {
        distance += currElem.offsetTop;
      }
    }
    return distance;
  }

  // Gets background of nearest parent element that has a declared background-color attribute
  private _getBackground(): string | null {
    if (!this.root.value) {
      return null;
    }

    let curr: HTMLElement = this.root.value;

    while (window.getComputedStyle(curr).getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)' ||
      window.getComputedStyle(curr).getPropertyValue('background-color') === 'transparent') {
      if (curr.tagName === 'HTML') {
        // Fallback color if no element has a declared background-color attribute
        return null;
      }
      if (curr.parentElement) {
        curr = curr.parentElement;
      }
    }
    return window.getComputedStyle(curr).getPropertyValue('background-color');
  }
}
