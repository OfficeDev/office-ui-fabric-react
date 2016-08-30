import * as React from 'react';
import { BaseComponent } from '../../common/BaseComponent';
import { hoistMethods, unhoistMethods } from '../hoist';

export interface IViewport {
  width: number;
  height: number;
}

export interface IWithViewportState {
  viewport?: IViewport;
}

const RESIZE_DELAY = 500;

export function withViewport<P, S>(ComposedComponent: any): any {

  return class WithViewportComponent extends BaseComponent<{}, IWithViewportState> {

    public refs: {
      [key: string]: React.ReactInstance;
      /** @deprecated */
      component: any;
    };

    private _composedComponentInstance: any;
    private _hoisted: string[];

    constructor() {
      super();

      this._updateChildRef = this._updateChildRef.bind(this);
      this.state = {
        viewport: {
          width: 0,
          height: 0
        }
      };
    }

    public componentDidMount() {
      this._onAsyncResize = this._async.debounce(
        this._onAsyncResize,
        RESIZE_DELAY,
        {
          leading: false
        });

      this._events.on(window, 'resize', this._onAsyncResize);
      this._updateViewport();
    }

    public componentWillUnmount() {
      this._events.dispose();
    }

    public render() {
      let { viewport } = this.state;
      let isViewportVisible = viewport.width > 0 && viewport.height > 0;

      return (
        <div className='ms-Viewport' ref='root' style={ { minWidth: 1, minHeight: 1 } }>
          { isViewportVisible && (
            <ComposedComponent ref={ this._updateChildRef } viewport={ viewport } { ...this.props } />
          ) }
        </div>
      );
    }

    public forceUpdate() {
      this._updateViewport(true);
    }

    private _updateChildRef(composedComponentInstance: any) {
      this.refs.component = composedComponentInstance;
      this._composedComponentInstance = composedComponentInstance;
      if (composedComponentInstance) {
        this._hoisted = hoistMethods(this, composedComponentInstance);
      } else if (this._hoisted) {
        this.refs.component = null;
        unhoistMethods(this, this._hoisted);
      }
    }

    private _onAsyncResize() {
      this._updateViewport();
    }

    private _updateViewport(withForceUpdate?: boolean) {
      let { viewport } = this.state;
      let viewportElement = (this.refs as any).root;
      let scrollElement = this._findScrollableElement(viewportElement);
      let clientRect = viewportElement.getBoundingClientRect();
      let scrollRect = scrollElement.getBoundingClientRect();
      let updateComponent = () => {
          if (withForceUpdate && this.refs.component) {
            this.refs.component.forceUpdate();
          }
      };
      let isSizeChanged = (
        clientRect.width !== viewport.width ||
        scrollRect.height !== viewport.height);

      if (isSizeChanged) {
        this.setState({
          viewport: {
            width: clientRect.width,
            height: scrollRect.height
          }
        }, updateComponent);
      } else {
        updateComponent();
      }
    }

    private _findScrollableElement(rootElement: HTMLElement) {
      let computedOverflow = getComputedStyle(rootElement)['overflow-y'];

      while (
        (rootElement !== document.body) &&
        (computedOverflow !== 'auto') &&
        (computedOverflow !== 'scroll')
      ) {
        if (rootElement.parentElement === null) {
          break;
        }
        rootElement = rootElement.parentElement;
        computedOverflow = getComputedStyle(rootElement)['overflow-y'];
      }

      return rootElement;
    }
  };

}
