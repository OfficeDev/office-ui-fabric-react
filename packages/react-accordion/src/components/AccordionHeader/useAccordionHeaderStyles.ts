import { makeStyles, ax } from '@fluentui/react-make-styles';
import { AccordionHeaderState } from './AccordionHeader.types';

/**
 * Styles for the root slot
 */
const useRootStyles = makeStyles<AccordionHeaderState>([
  [
    null,
    (theme) => ({
      color: theme.alias.color.neutral.neutralForeground1,
      backgroundColor: theme.alias.color.neutral.neutralBackground1,
      fontSize: theme.global.type.fontSizes.base[300],
      fontFamily: theme.global.type.fontFamilies.base,
      borderRadius: '2px',
    }),
  ],
  // Small variant
  [
    (state) => state.size === 'small',
    (theme) => ({
      fontSize: theme.global.type.fontSizes.base[200],
    }),
  ],
  // Large variant
  [
    (state) => state.size === 'large',
    (theme) => ({
      fontSize: theme.global.type.fontSizes.base[400],
    }),
  ],
  // Extra Large variant
  [
    (state) => state.size === 'extra-large',
    (theme) => ({
      fontSize: theme.global.type.fontSizes.base[500],
    }),
  ],
]);

/**
 * Styles for the button slot
 */
const useButtonStyles = makeStyles<AccordionHeaderState>([
  [
    null,
    () => ({
      paddingRight: '10px',
      paddingLeft: '10px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    }),
  ],
  // Small variant
  [
    (state) => state.size === 'small',
    () => ({
      height: '32px',
    }),
  ],
  // Expand icon position end variant
  [
    (state) => state.expandIconPosition === 'end',
    () => ({
      justifyContent: 'space-between',
    }),
  ],
]);

/**
 * style for the expandIcon slot
 */
const useExpandIconStyles = makeStyles<AccordionHeaderState>([
  // Expand icon position start variant
  [
    (state) => state.expandIconPosition === 'start',
    () => ({
      paddingInlineEnd: '8px',
    }),
  ],
  // Expand icon position end variant
  [
    (state) => state.expandIconPosition === 'end',
    () => ({
      paddingInlineStart: '8px',
    }),
  ],
]);

/** Applies style classnames to slots */
export const useAccordionHeaderStyles = (state: AccordionHeaderState) => {
  const rootClassName = useRootStyles(state);
  const buttonClassName = useButtonStyles(state);
  const expandIconClassNames = useExpandIconStyles(state);

  state.className = ax(rootClassName, state.className);
  state.button.className = ax(buttonClassName, state.button.className);
  if (state.expandIcon) {
    state.expandIcon.className = ax(expandIconClassNames, state.expandIcon.className);
  }
  return state;
};
