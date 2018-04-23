/* tslint:disable:no-unused-variable */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
/* tslint:enable:no-unused-variable */
import * as PropTypes from 'prop-types';
import {
  BaseComponent,
  classNamesFunction,
  customizable,
  divProperties,
  getNativeProps,
  createRef
} from '../../Utilities';
import {
  IScrollablePane,
  IScrollablePaneProps,
  IScrollablePaneStyles,
  IScrollablePaneStyleProps
} from './ScrollablePane.types';
import { Sticky } from '../../Sticky';

export interface IScrollablePaneContext {
  scrollablePane: PropTypes.Requireable<object>;
}

export interface IScrollablePaneState {
  stickyTopHeight: number;
  stickyBottomHeight: number;
}

const getClassNames = classNamesFunction<IScrollablePaneStyleProps, IScrollablePaneStyles>();

@customizable('ScrollablePane', ['theme'])
export class ScrollablePaneBase extends BaseComponent<IScrollablePaneProps, IScrollablePaneState> implements IScrollablePane {
  public static childContextTypes: React.ValidationMap<IScrollablePaneContext> = {
    scrollablePane: PropTypes.object
  };

  private _root = createRef<HTMLDivElement>();
  private _stickyAboveRef = createRef<HTMLDivElement>();
  private _stickyBelowRef = createRef<HTMLDivElement>();
  private _contentContainer = createRef<HTMLDivElement>();
  private _subscribers: Set<Function>;
  private _stickies: Set<Sticky>;
  private _mutationObserver: MutationObserver;

  constructor(props: IScrollablePaneProps) {
    super(props);
    this._subscribers = new Set<Function>();
    this._stickies = new Set<Sticky>();

    this.state = {
      stickyTopHeight: 0,
      stickyBottomHeight: 0
    };
  }

  public get root(): HTMLDivElement | null {
    return this._root.current;
  }

  public get stickyAbove(): HTMLDivElement | null {
    return this._stickyAboveRef.current;
  }

  public get stickyBelow(): HTMLDivElement | null {
    return this._stickyBelowRef.current;
  }

  public get contentContainer(): HTMLDivElement | null {
    return this._contentContainer.current;
  }

  public getChildContext() {
    return {
      scrollablePane: {
        subscribe: this.subscribe,
        unsubscribe: this.unsubscribe,
        addSticky: this.addSticky,
        removeSticky: this.removeSticky,
        updateStickyRefHeights: this.updateStickyRefHeights,
        sortSticky: this.sortSticky,
        notifySubscribers: this.notifySubscribers
      }
    };
  }

  public componentDidMount() {
    const { initialScrollPosition } = this.props;
    this._events.on(this.contentContainer, 'scroll', this.notifySubscribers);
    this._events.on(window, 'resize', this._onWindowResize);
    if (this.contentContainer && initialScrollPosition) {
      this.contentContainer.scrollTop = initialScrollPosition;
    }

    // Set sticky distances from top property, then sort in correct order and notify subscribers
    this.setStickiesDistanceFromTop();
    this._stickies.forEach((sticky) => {
      this.sortSticky(sticky);
    });
    this.notifySubscribers();

    if ("MutationObserver" in window) {
      this._mutationObserver = new MutationObserver(mutation => {
        // Function to check if mutation is occuring in stickyAbove or stickyBelow
        function checkIfMutationIsSticky(mutationRecord: MutationRecord): boolean {
          if (this.stickyAbove !== null && this.stickyBelow !== null) {
            return this.stickyAbove.contains(mutationRecord.target) || this.stickyBelow.contains(mutationRecord.target);
          }
          return false;
        }

        // If mutation occurs in sticky header or footer, then update sticky top/bottom heights
        if (mutation.some(checkIfMutationIsSticky.bind(this))) {
          this.updateStickyRefHeights();
        } else {
          // Else if mutation occurs in scrollable region, then find sticky it belongs to and force update
          let stickyList = Array.from(this._stickies).filter((sticky) => {
            if (sticky.root.current) {
              return sticky.root.current.contains(mutation[0].target);
            }
          });
          if (stickyList.length) {
            stickyList.forEach((sticky) => {
              sticky.forceUpdate();
            });
          }
        }
      });

      if (this.root) {
        this._mutationObserver.observe(this.root, {
          childList: true,
          attributes: true,
          subtree: true,
          characterData: true
        });
      }
    }
  }

  public componentWillUnmount() {
    this._events.off(this.contentContainer);
    this._events.off(window);
    this._mutationObserver.disconnect();
  }

  // Only updates if props/state change, just to prevent excessive setState with updateStickyRefHeights
  public shouldComponentUpdate(nextProps: IScrollablePaneProps, nextState: IScrollablePaneState): boolean {
    return this.props.children !== nextProps.children ||
      this.props.initialScrollPosition !== nextProps.initialScrollPosition ||
      this.props.className !== nextProps.className ||
      this.state.stickyTopHeight !== nextState.stickyTopHeight ||
      this.state.stickyBottomHeight !== nextState.stickyBottomHeight;
  }

  public componentDidUpdate(prevProps: IScrollablePaneProps, prevState: IScrollablePaneState) {
    const initialScrollPosition = this.props.initialScrollPosition;
    if (this.contentContainer && initialScrollPosition && prevProps.initialScrollPosition !== initialScrollPosition) {
      this.contentContainer.scrollTop = initialScrollPosition;
    }

    // Update subscribers when stickyTopHeight/stickyBottomHeight changes
    if (prevState.stickyTopHeight !== this.state.stickyTopHeight || prevState.stickyBottomHeight !== this.state.stickyBottomHeight) {
      this.notifySubscribers();
    }
  }

  public render(): JSX.Element {
    const { className, theme, getStyles } = this.props;
    const { stickyTopHeight, stickyBottomHeight } = this.state;
    const classNames = getClassNames(getStyles!,
      {
        theme: theme!,
        className
      }
    );

    return (
      <div
        { ...getNativeProps(this.props, divProperties) }
        ref={ this._root }
        className={ classNames.root }
      >
        <div
          ref={ this._stickyAboveRef }
          className={ classNames.stickyAbove }
          style={ this._getStickyContainerStyle(stickyTopHeight) }
        />
        <div
          className={ classNames.stickyBelow }
          style={ this._getStickyContainerStyle(stickyBottomHeight) }
        >
          <div
            ref={ this._stickyBelowRef }
            className={ classNames.stickyBelowItems }
          />
        </div>
        <div
          ref={ this._contentContainer }
          className={ classNames.contentContainer }
          data-is-scrollable={ true }
        >
          { this.props.children }
        </div>
      </div>
    );
  }

  public setStickiesDistanceFromTop(): void {
    if (this.contentContainer) {
      this._stickies.forEach((sticky) => {
        sticky.setDistanceFromTop(this.contentContainer as HTMLDivElement);
      });
    }
  }

  public forceLayoutUpdate() {
    this._onWindowResize();
  }

  public subscribe = (handler: Function): void => {
    this._subscribers.add(handler);
  }

  public unsubscribe = (handler: Function): void => {
    this._subscribers.delete(handler);
  }

  public addSticky = (sticky: Sticky): void => {
    this._stickies.add(sticky);

    // If ScrollablePane is mounted, then sort sticky in correct place
    if (this.contentContainer) {
      sticky.setDistanceFromTop(this.contentContainer);
      this.sortSticky(sticky);
    }
    this.notifySubscribers();
  }

  public removeSticky = (sticky: Sticky): void => {
    this._stickies.delete(sticky);
    this._removeStickyFromContainers(sticky);
    this.notifySubscribers();
  }

  public sortSticky = (sticky: Sticky): void => {
    if (this.stickyAbove && this.stickyBelow) {
      if (sticky.canStickyTop && sticky.stickyContentTop.current) {
        this._addToStickyContainer(sticky, this.stickyAbove, sticky.stickyContentTop.current);
      }

      if (sticky.canStickyBottom && sticky.stickyContentBottom.current) {
        this._addToStickyContainer(sticky, this.stickyBelow, sticky.stickyContentBottom.current);
      }
    }
  }

  public updateStickyRefHeights = (): void => {
    const stickyItems = this._stickies;

    let stickyTopHeight = 0;
    let stickyBottomHeight = 0;

    stickyItems.forEach((sticky: Sticky) => {
      const { isStickyTop, isStickyBottom } = sticky.state;
      if (sticky.nonStickyContent.current) {
        if (isStickyTop) {
          stickyTopHeight += sticky.nonStickyContent.current.offsetHeight
        }
        if (isStickyBottom) {
          stickyBottomHeight += sticky.nonStickyContent.current.offsetHeight
        }
        this._checkStickyStatus(sticky);
      }
    });

    this.setState({
      stickyTopHeight: stickyTopHeight,
      stickyBottomHeight: stickyBottomHeight
    });
  }

  public notifySubscribers = (): void => {
    if (this.contentContainer) {
      this._subscribers.forEach((handle) => {
        // this.stickyBelow is passed in for calculating distance to determine Sticky status
        handle(this.contentContainer, this.stickyBelow);
      });
    }
  }

  public getScrollPosition = (): number => {
    if (this.contentContainer) {
      return this.contentContainer.scrollTop;
    }

    return 0;
  }

  private _checkStickyStatus(sticky: Sticky): void {
    if (this.stickyAbove && this.stickyBelow && this.contentContainer && sticky.nonStickyContent.current) {
      // If sticky is sticky, then append content to appropriate container
      if (sticky.state.isStickyTop || sticky.state.isStickyBottom) {
        if (sticky.state.isStickyTop && !this.stickyAbove.contains(sticky.nonStickyContent.current) && sticky.stickyContentTop.current) {
          sticky.addSticky(sticky.stickyContentTop.current);
        }

        if (sticky.state.isStickyBottom && !this.stickyBelow.contains(sticky.nonStickyContent.current) && sticky.stickyContentBottom.current) {
          sticky.addSticky(sticky.stickyContentBottom.current);
        }
      } else if (!this.contentContainer.contains(sticky.nonStickyContent.current)) {
        // Reset sticky if it's not sticky and not in the contentContainer element
        sticky.resetSticky();
      }
    }
  }

  private _addToStickyContainer = (sticky: Sticky, stickyContainer: HTMLDivElement, stickyContentToAdd: HTMLDivElement): void => {
    // If there's no children, append child to list, otherwise, sort though array and append at correct position
    if (!stickyContainer.children.length) {
      stickyContainer.appendChild(stickyContentToAdd);
    } else {
      // If stickyContentToAdd isn't a child element of target container, then append
      if (!stickyContainer.contains(stickyContentToAdd)) {
        const stickyChildrenElements = Array.from(stickyContainer.children);

        // Get stickies.  Filter by canStickyTop/Bottom, then sort by distance from top, and then
        // filter by elements that are in the stickyContainer already.
        const stickyListSorted = Array.from(this._stickies).filter((item) => {
          if (stickyContainer === this.stickyAbove) {
            return item.canStickyTop;
          } else {
            return item.canStickyBottom;
          }
        }).sort((a, b) => {
          return a.distanceFromTop - b.distanceFromTop;
        }).filter((item) => {
          const stickyContent = (stickyContainer === this.stickyAbove) ? item.stickyContentTop.current : item.stickyContentBottom.current;
          if (stickyContent) {
            return stickyChildrenElements.indexOf(stickyContent) > -1;
          }
        });

        // Get first element that has a distance from top that is further than our sticky that is being added
        let targetStickyToAppendBefore: Sticky | undefined = undefined;
        for (const i in stickyListSorted) {
          if (stickyListSorted[i].distanceFromTop >= sticky.distanceFromTop) {
            targetStickyToAppendBefore = stickyListSorted[i];
            break;
          }
        }

        // If target element to append before is known, then grab respective stickyContentTop/Bottom element and insert before
        let targetContainer: HTMLDivElement | null = null;
        if (targetStickyToAppendBefore) {
          targetContainer = stickyContainer === this.stickyAbove ?
            targetStickyToAppendBefore.stickyContentTop.current :
            targetStickyToAppendBefore.stickyContentBottom.current;
        }
        stickyContainer.insertBefore(stickyContentToAdd, targetContainer);
      }
    }
  }

  private _removeStickyFromContainers = (sticky: Sticky): void => {
    if (this.stickyAbove && sticky.stickyContentTop.current) {
      this.stickyAbove.removeChild(sticky.stickyContentTop.current);
    }
    if (this.stickyBelow && sticky.stickyContentBottom.current) {
      this.stickyBelow.removeChild(sticky.stickyContentBottom.current);
    }
  }

  private _onWindowResize = (): void => {
    this._async.setTimeout(() => {
      this.notifySubscribers();
    }, 5);
  }

  private _getStickyContainerStyle = (height: number): React.CSSProperties => {
    return {
      height: height
    };
  }
}