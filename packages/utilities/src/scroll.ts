import { getDocument } from './dom';
import styles from './scroll.scss';

let _scrollbarWidth: number;

export const DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';

let bodyScrollCount = 0;

export function setBodyScroll(isEnabled: boolean) {
  let isPreviouslyEnabled = bodyScrollCount !== 0;
  let doc = getDocument();

  bodyScrollCount = Math.max(0, bodyScrollCount + (isEnabled ? -1 : 1));

  if (doc) {
    if (bodyScrollCount > 0 && !isPreviouslyEnabled) {
      doc.body.classList.add(styles.noScroll);
    }

    if (bodyScrollCount === 0 && isPreviouslyEnabled) {
      doc.body.classList.remove(styles.noScroll);
    }
  }
}

/** Calculates the width of a scrollbar for the browser/os. */
export function getScrollbarWidth(): number {
  if (_scrollbarWidth === undefined) {
    let scrollDiv: HTMLElement = document.createElement('div');
    scrollDiv.style.setProperty('width', '100px');
    scrollDiv.style.setProperty('height', '100px');
    scrollDiv.style.setProperty('overflow', 'scroll');
    scrollDiv.style.setProperty('position', 'absolute');
    scrollDiv.style.setProperty('top', '-9999px');
    document.body.appendChild(scrollDiv);
    // Get the scrollbar width
    _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    // Delete the DIV
    document.body.removeChild(scrollDiv);
  }

  return _scrollbarWidth;
}

/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 */
export function findScrollableParent(startingElement: HTMLElement): HTMLElement {
  let el = startingElement;

  // First do a quick scan for the scrollable attribute.
  while (el && el !== document.body) {
    if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
      return el;
    }
    el = el.parentElement;
  }

  // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
  el = startingElement;

  while (el && el !== document.body) {
    if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
      const styles = getComputedStyle(el);
      let overflowY = styles ? styles.getPropertyValue('overflow-y') : '';

      if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
        return el;
      }
    }

    el = el.parentElement;
  }

  // Fall back to window scroll.
  if (!el || el === document.body) {
    el = window as any;
  }

  return el;
}
