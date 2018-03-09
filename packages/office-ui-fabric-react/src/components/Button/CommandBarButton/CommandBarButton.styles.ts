import { IButtonStyles } from '../Button.types';
import {
  ITheme,
  concatStyleSets,
  getFocusStyle,
  HighContrastSelector,
  IRawStyle
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
  const baseButtonStyles: IButtonStyles = getBaseButtonStyles(theme);
  const baseSplitButtonStyles: IButtonStyles = getSplitButtonStyles(theme);
  const commandButtonHighContrastFocus = {
    left: 4,
    top: 4,
    bottom: 4,
    right: 4,
    border: 'none'
  }

  const commandButtonStyles: IButtonStyles = {
    root: [
      getFocusStyle(theme, -1, 'relative', commandButtonHighContrastFocus),
      {
        minWidth: '40px',
        backgroundColor: theme.palette.neutralLighter,
        color: theme.palette.neutralPrimary,
        padding: '0 4px',
        selectors: {
          [HighContrastSelector]: {
            border: 'none'
          }
        }
      }
    ],

    rootHovered: {
      backgroundColor: theme.palette.neutralLight,
      color: theme.palette.neutralDark
    },

    rootPressed: {
      backgroundColor: theme.palette.neutralQuaternaryAlt,
      color: theme.palette.black
    },

    rootChecked: {
      backgroundColor: theme.palette.neutralQuaternaryAlt,
      color: theme.palette.black
    },

    rootExpanded: {
      backgroundColor: theme.palette.neutralQuaternaryAlt,
      color: theme.palette.black
    },

    rootCheckedHovered: {
      backgroundColor: theme.palette.neutralQuaternary,
      color: theme.palette.black,
    },

    label: {
      fontWeight: 'normal' // theme.fontWeights.semibold,
    },

    icon: {
      color: theme.palette.themeDarkAlt
    },

    menuIcon: {
      color: theme.palette.neutralSecondary
    }

  };

  return concatStyleSets(baseButtonStyles, commandButtonStyles, baseSplitButtonStyles, customStyles)!;
});