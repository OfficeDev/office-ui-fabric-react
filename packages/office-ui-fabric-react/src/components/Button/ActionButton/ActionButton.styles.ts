import { IButtonStyles } from '../Button.Props';
import {
  ITheme,
  concatStyleSets
} from '../../../Styling';
import { memoizeFunction } from '../../../Utilities';
import {
  getStyles as getBaseButtonStyles
} from '../BaseButton.styles';
import {
  getStyles as getSplitButtonStyles
} from '../SplitButton/SplitButton.styles';

export const getStyles = memoizeFunction((
  theme: ITheme,
  customStyles?: IButtonStyles,
  focusInset?: string,
  focusColor?: string
): IButtonStyles => {
  let baseButtonStyles: IButtonStyles = getBaseButtonStyles(theme);
  let splitButtonStyles: IButtonStyles = getSplitButtonStyles(theme);
  let actionButtonStyles: IButtonStyles = {
    root: {
      minWidth: '40px',
      backgroundColor: theme.palette.neutralLighter,
      color: theme.palette.neutralPrimary,
      padding: '0 4px'
    },

    rootHovered: {
      color: theme.palette.themePrimary,
    },

    iconHovered: {
      color: theme.palette.themePrimary
    },

    rootPressed: {
      color: theme.palette.black,
    },

    rootExpanded: {
      color: theme.palette.themePrimary
    },

    iconPressed: {
      color: theme.palette.themeDarker
    },

    rootDisabled: {
      color: theme.palette.neutralTertiary,
      backgroundColor: 'transparent'
    },

    rootChecked: {
      color: theme.palette.black,
    },

    iconChecked: {
      color: theme.palette.themeDarker
    },

    label: {
      fontWeight: 'normal' // theme.fontWeights.semibold,
    },

    icon: {
      color: theme.palette.themeDarkAlt
    },

    iconDisabled: {
      color: 'inherit'
    },

    menuIcon: {
      color: theme.palette.neutralSecondary
    }

  };

  return concatStyleSets(baseButtonStyles, actionButtonStyles, customStyles);
});
