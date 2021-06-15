import * as React from 'react';
import { ObjectShorthandProps, useEventCallback } from '@fluentui/react-utilities';

/** @internal */
const KeyboardEventKeys = {
  SPACE_BAR: ' ',
  ENTER: 'Enter',
} as const;

/**
 * button keyboard handling, role, disabled and tabIndex implementation that ensures ARIA spec
 * for multiple scenarios of shorthand properties. Ensuring 1st rule of ARIA for cases
 * where no attribute addition is required
 */
export function useARIAButton(
  shorthand: ObjectShorthandProps<React.ButtonHTMLAttributes<HTMLElement>>,
): ObjectShorthandProps<React.ButtonHTMLAttributes<HTMLElement>> {
  const { onClick, onKeyDown, onKeyUp, disabled: defaultDisabled, ['aria-disabled']: ariaDisabled } = shorthand;
  const disabled = mergeARIADisabled(defaultDisabled ?? ariaDisabled);

  const onClickHandler = useEventCallback((ev: React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      ev.preventDefault();
    } else {
      if (typeof onClick === 'function') {
        onClick(ev);
      }
    }
  });

  const onKeyDownHandler = useEventCallback((ev: React.KeyboardEvent<HTMLElement>) => {
    if (typeof onKeyDown === 'function') {
      onKeyDown(ev);
    }
    if (ev.isDefaultPrevented()) {
      return;
    }
    if (disabled && (ev.key === KeyboardEventKeys.ENTER || ev.key === KeyboardEventKeys.SPACE_BAR)) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    if (ev.key === KeyboardEventKeys.SPACE_BAR) {
      ev.preventDefault();
      return;
    }
    // If enter is pressed, activate the button
    else if (ev.key === KeyboardEventKeys.ENTER) {
      ev.preventDefault();
      ev.currentTarget.click();
    }
  });

  const onKeyupHandler = useEventCallback((ev: React.KeyboardEvent<HTMLElement>) => {
    if (typeof onKeyUp === 'function') {
      onKeyUp(ev);
    }
    if (ev.isDefaultPrevented()) {
      return;
    }
    if (disabled && (ev.key === KeyboardEventKeys.ENTER || ev.key === KeyboardEventKeys.SPACE_BAR)) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    if (ev.key === KeyboardEventKeys.SPACE_BAR) {
      ev.preventDefault();
      ev.currentTarget.click();
    }
  });

  if (!shorthand.hasOwnProperty('as') || shorthand.as === 'button') {
    shorthand.as = 'button';
    return shorthand; // there's nothing to be done if as prop === 'button'
  }

  if (!shorthand.hasOwnProperty('children')) {
    shorthand.children = null;
  }

  /**
   * TODO: Ideally this is unnecessary after implementation of as-prop RFC.
   * The way to go is to have an assertion method to ensure types,
   * in the case of button we'd like to limit it for: button, div, span, a
   */
  if (typeof shorthand.as !== 'string') {
    return shorthand;
  }

  if (!shorthand.hasOwnProperty('role')) {
    shorthand.role = 'button';
  }
  if (!shorthand.hasOwnProperty('aria-disabled')) {
    shorthand['aria-disabled'] = disabled;
  }

  shorthand.onClick = onClickHandler;

  // Add keydown event handler for all other non-anchor elements.
  if (shorthand.as !== 'a') {
    if (!shorthand.hasOwnProperty('tabIndex')) {
      shorthand.tabIndex = disabled ? undefined : 0;
    }
    shorthand.onKeyDown = onKeyDownHandler;
    shorthand.onKeyUp = onKeyupHandler;
  }
  return shorthand;
}

function mergeARIADisabled(disabled?: boolean | 'false' | 'true'): boolean {
  if (typeof disabled === 'string') {
    return disabled === 'false' ? false : true;
  }
  return disabled ?? false;
}
