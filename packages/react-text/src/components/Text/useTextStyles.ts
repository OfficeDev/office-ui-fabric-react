import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { TextState } from './Text.types';

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: theme => ({
    fontFamily: theme.global.type.fontFamilies.base,
    fontSize: theme.global.type.fontSizes.base[300],
    fontWeight: theme.global.type.fontWeights.regular,
    textAlign: 'start',
    display: 'inline',
    whiteSpace: 'normal',
    overflow: 'visible',
    textOverflow: 'clip',
  }),
  nowrap: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  truncate: {
    textOverflow: 'ellipsis',
  },
  block: {
    display: 'block',
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecoration: 'underline',
  },

  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the Text slots based on the state
 */
export const useTextStyles = (state: TextState): TextState => {
  const styles = useStyles();
  state.className = mergeClasses(
    styles.root,
    state.wrap === false && styles.nowrap,
    state.truncate === true && styles.truncate,
    state.block === true && styles.block,
    state.italic === true && styles.italic,
    state.underline === true && styles.underline,
    state.className,
  );

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
