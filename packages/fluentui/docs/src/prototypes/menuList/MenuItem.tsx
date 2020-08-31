import * as React from 'react';

import { useEventListener } from '../../../../react-component-event-listener';
import { useMenuListContext } from './menuListContext';

export function MenuItem({ children, index, submenu = null }) {
  const itemRef = React.useRef<HTMLDivElement>();
  const { currentIndex, setIndex, setOpen, triggerRef } = useMenuListContext();

  const listener = React.useCallback(() => {
    itemRef.current.focus();
    setIndex(index);
  }, [index, setIndex]);

  const listenerKeyboard = React.useCallback(
    e => {
      if (e.keyCode === 37) {
        setOpen(false);
        triggerRef.current.focus();
      }
    },
    [setOpen, triggerRef],
  );

  useEventListener({
    type: 'mouseenter',
    targetRef: itemRef,
    listener,
  });

  useEventListener({
    type: 'focus',
    targetRef: itemRef,
    listener,
  });

  useEventListener({
    type: 'keyup',
    targetRef: itemRef,
    listener: listenerKeyboard,
  });

  return (
    <div
      ref={itemRef}
      role="menuitem"
      data-is-focusable="true"
      tabIndex={0}
      style={{
        cursor: 'pointer',
        ...(currentIndex === index && {
          background: 'grey',
        }),
      }}
    >
      {children}
    </div>
  );
}
