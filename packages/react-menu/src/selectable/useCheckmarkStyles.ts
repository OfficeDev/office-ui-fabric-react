import { makeStyles, ax } from '@fluentui/react-make-styles';
import { MenuItemSelectableState } from './types';

/** Style hook for checkmark icons */
const useStyles = makeStyles([
  [
    null,
    () => ({
      width: '16px',
      height: '16px',
      marginRight: '9px',
    }),
  ],
]);

/** Applies styles to a checkmark slot for selectable menu items */
export const useCheckmarkStyles = (state: MenuItemSelectableState) => {
  const checkmarkClassName = useStyles({});
  if (state.checkmark) {
    state.checkmark.className = ax(checkmarkClassName, state.checkmark.className);
  }
};
