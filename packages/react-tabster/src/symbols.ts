export const KEYBOARD_NAV_ATTRIBUTE = 'data-keyboard-nav' as const;
export const KEYBOARD_NAV_FOCUS_SELECTOR = `:global([${KEYBOARD_NAV_ATTRIBUTE}]) :focus` as const;
