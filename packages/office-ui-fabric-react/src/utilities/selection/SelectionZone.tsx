import * as React from 'react';
import {
  BaseComponent,
  KeyCodes,
  elementContains,
  findScrollableParent,
  getParent,
  getDocument,
  getWindow,
  isElementTabbable
} from '../../Utilities';
import { ISelection, SelectionMode, IObjectWithKey } from './interfaces';

// Selection definitions:
//
// Anchor index: the point from which a range selection starts.
// Focus index: the point from which layout movement originates from.
//
// These two can differ. Tests:
//
// If you start at index 5
// Shift click to index 10
//    The focus is 10, the anchor is 5.
// If you shift click at index 0
//    The anchor remains at 5, the items between 0 and 5 are selected and everything else is cleared.
// If you click index 8
//    The anchor and focus are set to 8.

const SELECTION_DISABLED_ATTRIBUTE_NAME = 'data-selection-disabled';
const SELECTION_INDEX_ATTRIBUTE_NAME = 'data-selection-index';
const SELECTION_TOGGLE_ATTRIBUTE_NAME = 'data-selection-toggle';
const SELECTION_INVOKE_ATTRIBUTE_NAME = 'data-selection-invoke';
const SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME = 'data-selection-all-toggle';
const SELECTION_SELECT_ATTRIBUTE_NAME = 'data-selection-select';

export interface ISelectionZone {
  ignoreNextFocus: () => void;
}

export interface ISelectionZoneProps extends React.ClassAttributes<SelectionZone> {
  componentRef?: () => void;
  selection: ISelection;
  /**
   * @deprecated No longer in use, focus is now managed by FocusZone
   */
  layout?: {};
  selectionMode?: SelectionMode;
  selectionPreservedOnEmptyClick?: boolean;
  disableAutoSelectOnInputElements?: boolean;
  enterModalOnTouch?: boolean;
  isSelectedOnFocus?: boolean;
  onItemInvoked?: (item?: IObjectWithKey, index?: number, ev?: Event) => void;
  onItemContextMenu?: (item?: any, index?: number, ev?: Event) => void | boolean;
}

export class SelectionZone extends BaseComponent<ISelectionZoneProps, {}> {
  public static defaultProps = {
    isMultiSelectEnabled: true,
    isSelectedOnFocus: true,
    selectionMode: SelectionMode.multiple
  };

  private _root = React.createRef<HTMLDivElement>();
  private _isCtrlPressed: boolean;
  private _isShiftPressed: boolean;
  private _isMetaPressed: boolean;
  private _isTabPressed: boolean;
  private _shouldHandleFocus: boolean;
  private _shouldHandleFocusTimeoutId: number | undefined;
  private _isTouch: boolean;
  private _isTouchTimeoutId: number | undefined;

  public componentDidMount(): void {
    const win = getWindow(this._root.current);

    // Track the latest modifier keys globally.
    this._events.on(win, 'keydown, keyup', this._updateModifiers, true);
    this._events.on(document, 'click', this._findScrollParentAndTryClearOnEmptyClick);
    this._events.on(document.body, 'touchstart', this._onTouchStartCapture, true);
    this._events.on(document.body, 'touchend', this._onTouchStartCapture, true);
  }

  public render(): JSX.Element {
    return (
      <div
        className="ms-SelectionZone"
        ref={this._root}
        onKeyDown={this._onKeyDown}
        onMouseDown={this._onMouseDown}
        onKeyDownCapture={this._onKeyDownCapture}
        onClick={this._onClick}
        role="presentation"
        onDoubleClick={this._onDoubleClick}
        onContextMenu={this._onContextMenu}
        {...{
          onMouseDownCapture: this._onMouseDownCapture,
          onFocusCapture: this._onFocus
        }}
      >
        {this.props.children}
      </div>
    );
  }

  /**
   * In some cases, the consuming scenario requires to set focus on a row without having SelectionZone
   * react to the event. Note that focus events in IE \<= 11 will occur asynchronously after .focus() has
   * been called on an element, so we need a flag to store the idea that we will bypass the "next"
   * focus event that occurs. This method does that.
   */
  public ignoreNextFocus = (): void => {
    this._handleNextFocus(false);
  };

  private _onMouseDownCapture = (ev: any): void => {
    if (document.activeElement !== ev.target && !elementContains(document.activeElement as HTMLElement, ev.target)) {
      this.ignoreNextFocus();
      return;
    }

    if (!elementContains(ev.target, this._root.current)) {
      return;
    }

    let target = ev.target as HTMLElement;

    while (target !== this._root.current) {
      if (this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
        this.ignoreNextFocus();
        break;
      }

      target = getParent(target) as HTMLElement;
    }
  };

  /**
   * When we focus an item, for single/multi select scenarios, we should try to select it immediately
   * as long as the focus did not originate from a mouse down/touch event. For those cases, we handle them
   * specially.
   */
  private _onFocus = (ev: React.FocusEvent<HTMLElement>): void => {
    const target = ev.target as HTMLElement;
    const { selection } = this.props;
    const isToggleModifierPressed = this._isCtrlPressed || this._isMetaPressed;

    const selectionMode = this._getSelectionMode();

    if (this._shouldHandleFocus && selectionMode !== SelectionMode.none) {
      const isToggle = this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME);
      const itemRoot = this._findItemRoot(target);

      if (!isToggle && itemRoot) {
        const index = this._getItemIndex(itemRoot);

        if (isToggleModifierPressed) {
          // set anchor only.
          selection.setIndexSelected(index, selection.isIndexSelected(index), true);
          if (this.props.enterModalOnTouch && this._isTouch && selection.setModal) {
            selection.setModal(true);
            this._setIsTouch(false);
          }
        } else {
          if (this.props.isSelectedOnFocus) {
            this._onItemSurfaceClick(ev, index);
          }
        }
      }
    }

    this._handleNextFocus(false);
  };

  private _onMouseDown = (ev: React.MouseEvent<HTMLElement>): void => {
    this._updateModifiers(ev);

    let target = ev.target as HTMLElement;
    const itemRoot = this._findItemRoot(target);

    // No-op if selection is disabled
    if (this._isSelectionDisabled(target)) {
      return;
    }

    while (target !== this._root.current) {
      if (this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
        break;
      } else if (itemRoot) {
        if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
          break;
        } else if (this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
          break;
        } else if (
          (target === itemRoot || this._shouldAutoSelect(target)) &&
          !this._isShiftPressed &&
          !this._isCtrlPressed &&
          !this._isMetaPressed
        ) {
          this._onInvokeMouseDown(ev, this._getItemIndex(itemRoot));
          break;
        } else if (
          this.props.disableAutoSelectOnInputElements &&
          (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT')
        ) {
          return;
        }
      }

      target = getParent(target) as HTMLElement;
    }
  };

  private _onTouchStartCapture = (ev: React.TouchEvent<HTMLElement>): void => {
    this._setIsTouch(true);
  };

  private _onClick = (ev: React.MouseEvent<HTMLElement>): void => {
    this._updateModifiers(ev);

    let target = ev.target as HTMLElement;
    const itemRoot = this._findItemRoot(target);

    // No-op if selection is disabled
    if (this._isSelectionDisabled(target)) {
      return;
    }

    while (target !== this._root.current) {
      if (this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
        this._onToggleAllClick(ev);
        break;
      } else if (itemRoot) {
        const index = this._getItemIndex(itemRoot);

        if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
          if (this._isShiftPressed) {
            this._onItemSurfaceClick(ev, index);
          } else {
            this._onToggleClick(ev, index);
          }
          break;
        } else if (this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
          this._onInvokeClick(ev, index);
          break;
        } else if (target === itemRoot) {
          this._onItemSurfaceClick(ev, index);
          break;
        } else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT') {
          return;
        }
      }

      target = getParent(target) as HTMLElement;
    }
  };

  private _onContextMenu = (ev: React.MouseEvent<HTMLElement>): void => {
    const target = ev.target as HTMLElement;

    const { onItemContextMenu, selection } = this.props;
    if (onItemContextMenu) {
      const itemRoot = this._findItemRoot(target);

      if (itemRoot) {
        const index = this._getItemIndex(itemRoot);

        this._onInvokeMouseDown(ev, index);

        const skipPreventDefault = onItemContextMenu(selection.getItems()[index], index, ev.nativeEvent);

        // In order to keep back compat, if the value here is undefined, then we should still
        // call preventDefault(). Only in the case where true is explicitly returned should
        // the call be skipped.
        if (!skipPreventDefault) {
          ev.preventDefault();
        }
      }
    }
  };

  private _isSelectionDisabled(target: HTMLElement): boolean {
    while (target !== this._root.current) {
      if (this._hasAttribute(target, SELECTION_DISABLED_ATTRIBUTE_NAME)) {
        return true;
      }
      target = getParent(target) as HTMLElement;
    }

    return false;
  }

  /**
   * In multi selection, if you double click within an item's root (but not within the invoke element or input elements),
   * we should execute the invoke handler.
   */
  private _onDoubleClick = (ev: React.MouseEvent<HTMLElement>): void => {
    let target = ev.target as HTMLElement;

    if (this._isSelectionDisabled(target)) {
      return;
    }

    const { onItemInvoked } = this.props;
    const itemRoot = this._findItemRoot(target);

    const selectionMode = this._getSelectionMode();

    if (itemRoot && onItemInvoked && selectionMode !== SelectionMode.none && !this._isInputElement(target)) {
      const index = this._getItemIndex(itemRoot);

      while (target !== this._root.current) {
        if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME) || this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
          break;
        } else if (target === itemRoot) {
          this._onInvokeClick(ev, index);
          break;
        }

        target = getParent(target) as HTMLElement;
      }

      target = getParent(target) as HTMLElement;
    }
  };

  private _onKeyDownCapture = (ev: React.KeyboardEvent<HTMLElement>): void => {
    this._updateModifiers(ev);

    this._handleNextFocus(true);
  };

  private _onKeyDown = (ev: React.KeyboardEvent<HTMLElement>): boolean | undefined => {
    this._updateModifiers(ev);

    let target = ev.target as HTMLElement;

    if (this._isSelectionDisabled(target)) {
      return;
    }

    const { selection } = this.props;
    const isSelectAllKey = ev.which === KeyCodes.a && (this._isCtrlPressed || this._isMetaPressed);
    const isClearSelectionKey = ev.which === KeyCodes.escape;

    // Ignore key downs from input elements.
    if (this._isInputElement(target)) {
      // A key was pressed while an item in this zone was focused.
      return;
    }

    const selectionMode = this._getSelectionMode();

    // If ctrl-a is pressed, select all (if all are not already selected.)
    if (isSelectAllKey && selectionMode === SelectionMode.multiple && !selection.isAllSelected()) {
      selection.setAllSelected(true);
      ev.stopPropagation();
      ev.preventDefault();
      return;
    }

    // If escape is pressed, clear selection (if any are selected.)
    if (isClearSelectionKey && selection.getSelectedCount() > 0) {
      selection.setAllSelected(false);
      ev.stopPropagation();
      ev.preventDefault();
      return;
    }

    const itemRoot = this._findItemRoot(target);

    // If a key was pressed within an item, we should treat "enters" as invokes and "space" as toggle
    if (itemRoot) {
      const index = this._getItemIndex(itemRoot);

      while (target !== this._root.current) {
        if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
          // For toggle elements, assuming they are rendered as buttons, they will generate a click event,
          // so we can no-op for any keydowns in this case.
          break;
        } else if (this._shouldAutoSelect(target)) {
          // If the event went to an element which should trigger auto-select, select it and then let
          // the default behavior kick in.
          this._onInvokeMouseDown(ev, index);
          break;
        } else if (
          (ev.which === KeyCodes.enter || ev.which === KeyCodes.space) &&
          (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT')
        ) {
          return false;
        } else if (target === itemRoot) {
          if (ev.which === KeyCodes.enter) {
            this._onInvokeClick(ev, index);
            ev.preventDefault();
            return;
          } else if (ev.which === KeyCodes.space) {
            this._onToggleClick(ev, index);
            ev.preventDefault();
            return;
          }
          break;
        }

        target = getParent(target) as HTMLElement;
      }
    }
  };

  private _onToggleAllClick(ev: React.MouseEvent<HTMLElement>): void {
    const { selection } = this.props;

    const selectionMode = this._getSelectionMode();

    if (selectionMode === SelectionMode.multiple) {
      selection.toggleAllSelected();
      ev.stopPropagation();
      ev.preventDefault();
    }
  }

  private _onToggleClick(ev: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, index: number): void {
    const { selection } = this.props;

    const selectionMode = this._getSelectionMode();

    selection.setChangeEvents(false);

    if (this.props.enterModalOnTouch && this._isTouch && !selection.isIndexSelected(index) && selection.setModal) {
      selection.setModal(true);
      this._setIsTouch(false);
    }

    if (selectionMode === SelectionMode.multiple) {
      selection.toggleIndexSelected(index);
    } else if (selectionMode === SelectionMode.single) {
      const isSelected = selection.isIndexSelected(index);
      selection.setAllSelected(false);
      selection.setIndexSelected(index, !isSelected, true);
    } else {
      selection.setChangeEvents(true);
      return;
    }

    selection.setChangeEvents(true);

    ev.stopPropagation();

    // NOTE: ev.preventDefault is not called for toggle clicks, because this will kill the browser behavior
    // for checkboxes if you use a checkbox for the toggle.
  }

  private _onInvokeClick(ev: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, index: number): void {
    const { selection, onItemInvoked } = this.props;

    if (onItemInvoked) {
      onItemInvoked(selection.getItems()[index], index, ev.nativeEvent);
      ev.preventDefault();
      ev.stopPropagation();
    }
  }

  private _onItemSurfaceClick(ev: React.SyntheticEvent<HTMLElement>, index: number): void {
    const { selection } = this.props;
    const isToggleModifierPressed = this._isCtrlPressed || this._isMetaPressed;

    const selectionMode = this._getSelectionMode();

    if (selectionMode === SelectionMode.multiple) {
      if (this._isShiftPressed && !this._isTabPressed) {
        selection.selectToIndex(index, !isToggleModifierPressed);
      } else if (isToggleModifierPressed) {
        selection.toggleIndexSelected(index);
      } else {
        this._clearAndSelectIndex(index);
      }
    } else if (selectionMode === SelectionMode.single) {
      this._clearAndSelectIndex(index);
    }
  }

  private _onInvokeMouseDown(ev: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, index: number): void {
    const { selection } = this.props;

    // Only do work if item is not selected.
    if (selection.isIndexSelected(index)) {
      return;
    }

    this._clearAndSelectIndex(index);
  }

  /**
   * To avoid high startup cost of traversing the DOM on component mount,
   * defer finding the scrollable parent until a click interaction.
   *
   * The styles will probably already calculated since we're running in a click handler,
   * so this is less likely to cause layout thrashing then doing it in mount.
   */
  private _findScrollParentAndTryClearOnEmptyClick(ev: MouseEvent) {
    const scrollParent = findScrollableParent(this._root.current);
    // unbind this handler and replace binding with a binding on the actual scrollable parent
    this._events.off(document, 'click', this._findScrollParentAndTryClearOnEmptyClick);
    this._events.on(scrollParent, 'click', this._tryClearOnEmptyClick);

    // If we clicked inside the scrollable parent, call through to the handler on this click.
    if ((scrollParent && ev.target instanceof Node && scrollParent.contains(ev.target)) || scrollParent === ev.target) {
      this._tryClearOnEmptyClick(ev);
    }
  }

  private _tryClearOnEmptyClick(ev: MouseEvent): void {
    if (!this.props.selectionPreservedOnEmptyClick && this._isNonHandledClick(ev.target as HTMLElement)) {
      this.props.selection.setAllSelected(false);
    }
  }

  private _clearAndSelectIndex(index: number): void {
    const { selection } = this.props;
    const isAlreadySingleSelected = selection.getSelectedCount() === 1 && selection.isIndexSelected(index);

    if (!isAlreadySingleSelected) {
      selection.setChangeEvents(false);
      selection.setAllSelected(false);
      selection.setIndexSelected(index, true, true);
      if (this.props.enterModalOnTouch && this._isTouch && selection.setModal) {
        selection.setModal(true);
        this._setIsTouch(false);
      }
      selection.setChangeEvents(true);
    }
  }

  /**
   * We need to track the modifier key states so that when focus events occur, which do not contain
   * modifier states in the Event object, we know how to behave.
   */
  private _updateModifiers(ev: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>): void {
    this._isShiftPressed = ev.shiftKey;
    this._isCtrlPressed = ev.ctrlKey;
    this._isMetaPressed = ev.metaKey;

    const keyCode = (ev as React.KeyboardEvent<HTMLElement>).keyCode;
    this._isTabPressed = keyCode ? keyCode === KeyCodes.tab : false;
  }

  private _findItemRoot(target: HTMLElement): HTMLElement | undefined {
    const { selection } = this.props;

    while (target !== this._root.current) {
      const indexValue = target.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME);
      const index = Number(indexValue);

      if (indexValue !== null && index >= 0 && index < selection.getItems().length) {
        break;
      }

      target = getParent(target) as HTMLElement;
    }

    if (target === this._root.current) {
      return undefined;
    }

    return target;
  }

  private _getItemIndex(itemRoot: HTMLElement): number {
    return Number(itemRoot.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME));
  }

  private _shouldAutoSelect(element: HTMLElement): boolean {
    return this._hasAttribute(element, SELECTION_SELECT_ATTRIBUTE_NAME);
  }

  private _hasAttribute(element: HTMLElement, attributeName: string): boolean {
    let isToggle = false;

    while (!isToggle && element !== this._root.current) {
      isToggle = element.getAttribute(attributeName) === 'true';
      element = getParent(element) as HTMLElement;
    }

    return isToggle;
  }

  private _isInputElement(element: HTMLElement): boolean {
    return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
  }

  private _isNonHandledClick(element: HTMLElement): boolean {
    const doc = getDocument();

    if (doc && element) {
      while (element && element !== doc.documentElement) {
        if (isElementTabbable(element)) {
          return false;
        }

        element = getParent(element) as HTMLElement;
      }
    }

    return true;
  }

  private _handleNextFocus(handleFocus: boolean): void {
    if (this._shouldHandleFocusTimeoutId) {
      this._async.clearTimeout(this._shouldHandleFocusTimeoutId);
      this._shouldHandleFocusTimeoutId = undefined;
    }

    this._shouldHandleFocus = handleFocus;

    if (handleFocus) {
      this._async.setTimeout(() => {
        this._shouldHandleFocus = false;
      }, 100);
    }
  }

  private _setIsTouch(isTouch: boolean): void {
    if (this._isTouchTimeoutId) {
      this._async.clearTimeout(this._isTouchTimeoutId);
      this._isTouchTimeoutId = undefined;
    }

    this._isTouch = true;

    if (isTouch) {
      this._async.setTimeout(() => {
        this._isTouch = false;
      }, 300);
    }
  }

  private _getSelectionMode(): SelectionMode {
    const { selection } = this.props;

    const { selectionMode = selection ? selection.mode : SelectionMode.none } = this.props;

    return selectionMode;
  }
}
