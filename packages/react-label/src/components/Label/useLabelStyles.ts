import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { LabelState } from './Label.types';

/**
 * Styles for the label
 */
const useStyles = makeStyles({
  root: theme => ({
    fontFamily: theme.global.type.fontFamilies.base,
    fontSize: theme.global.type.fontSizes.base[300],
    color: theme.alias.color.neutral.neutralForeground1,
    display: 'inline-flex',
    alignItems: 'center',
  }),

  disabled: theme => ({
    color: theme.alias.color.neutral.neutralForegroundDisabled,
  }),

  info: theme => ({
    paddingLeft: 0,
    margin: 0,
    padding: 0,
  }),

  required: theme => ({
    color: theme.alias.color.red.foreground3,
    fontSize: theme.global.type.fontSizes.base[300],
    paddingLeft: '4px',
  }),

  small: theme => ({
    fontSize: theme.global.type.fontSizes.base[200],
  }),

  medium: theme => ({
    fontSize: theme.global.type.fontSizes.base[300],
  }),

  large: theme => ({
    fontSize: theme.global.type.fontSizes.base[400],
    fontWeight: theme.global.type.fontWeights.semibold,
  }),

  strong: theme => ({
    fontWeight: theme.global.type.fontWeights.semibold,
  }),
});

/**
 * Apply styling to the Label slots based on the state
 */
export const useLabelStyles = (state: LabelState): LabelState => {
  const styles = useStyles();
  state.className = mergeClasses(
    styles.root,
    state.disabled && styles.disabled,
    styles[state.size],
    state.strong && styles.strong,
    state.className,
  );

  if (state.info) {
    state.info.className = mergeClasses(styles.info, state.info.className);
  }

  if (state.required) {
    state.required.className = mergeClasses(styles.required, state.required.className);
  }

  return state;
};
