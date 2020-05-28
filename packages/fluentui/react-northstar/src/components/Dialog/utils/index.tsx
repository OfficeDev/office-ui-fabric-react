const _disableIosBodyScroll = (event: TouchEvent) => {
  event.preventDefault();
};

export function enableBodyScroll(target: HTMLElement): void {
  if (target) {
    target.style.overflow = 'unset';
    target.removeEventListener('touchmove', _disableIosBodyScroll);
  }
}

export function disableBodyScroll(target: HTMLElement): void {
  if (target) {
    target.style.overflow = 'hidden';
    target.addEventListener('touchmove', _disableIosBodyScroll, { passive: false, capture: false });
  }
}

const dialogsCounterAttribute = 'fluent-dialogs-count';

export const lockBodyScroll = target => {
  const openDialogs = (+target.getAttribute(dialogsCounterAttribute) || 0) + 1;
  target.setAttribute(dialogsCounterAttribute, `${openDialogs}`);

  // Avoid to block scroll in nested dialogs
  if (openDialogs === 1) {
    disableBodyScroll(target);
  }
};

export const unlockBodyScroll = target => {
  const openDialogs = (+target.getAttribute(dialogsCounterAttribute) || 0) - 1;
  target.setAttribute(dialogsCounterAttribute, `${openDialogs}`);

  // Only enables scroll if all dialogs are closed
  if (openDialogs === 0) {
    enableBodyScroll(target);
    target.removeAttribute(dialogsCounterAttribute);
  }
};
