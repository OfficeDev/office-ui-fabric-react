import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { LabelState } from './Label.types';

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: theme => ({
    // TODO Add default styles for the root element
  }),

  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the Label slots based on the state
 */
export const useLabelStyles = (state: LabelState): LabelState => {
  const styles = useStyles();
  state.className = mergeClasses(styles.root, state.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
