import {
  IComboBoxStyles,
  IComboBoxOptionStyles,
  IComboBoxCaretDownButtonStyles
} from './ComboBox.Props';
import {
  ITheme,
  IStyle,
  mergeStyleSets,
  FontSizes,
  FontWeights,
  getFocusStyle
} from '../../Styling';
import { memoizeFunction } from '../../Utilities';

const MS_HIGHCONTRAST_ACTIVE = '@media screen and (-ms-high-contrast: active)';
const MS_HIGHCONTRAST_BLACK_ON_WHITE = '@media screen and (-ms-high-contrast: black-on-white)';

const ComboBoxHeight = '32px';
const ComboBoxLineHeight = '30px';
const ComboxBoxCaretDownWidth = '32px';
const ComboBoxOptionHeight = '36px';

const getDisabledStyles = (theme: ITheme): IStyle => {
  const { semanticColors, palette } = theme;
  return {
    backgroundColor: semanticColors.disabledBackground,
    borderColor: semanticColors.disabledBackground,
    color: semanticColors.disabledText,
    cursor: 'default',
    [MS_HIGHCONTRAST_ACTIVE]: {
      borderColor: 'GrayText',
      color: 'GrayText'
    },

    [MS_HIGHCONTRAST_BLACK_ON_WHITE]: {
      borderColor: 'GrayText',
      color: 'GrayText'
    },
  };
};

const getListOptionHighContrastStyles = (theme: ITheme): IStyle => {
  const { semanticColors, palette } = theme;
  return {
    [MS_HIGHCONTRAST_ACTIVE]: {
      backgroundColor: 'Highlight',
      borderColor: 'Highlight',
      color: 'HighlightText',
    },
  };
};

export const getOptionStyles = memoizeFunction((
  theme: ITheme,
  customStylesForAllOptions?: Partial<IComboBoxOptionStyles>,
  customOptionStylesForCurrentOption?: Partial<IComboBoxOptionStyles>,
): IComboBoxOptionStyles => {

  const { semanticColors, fonts, palette } = theme;

  const ComboBoxOptionBackgroundSelected = semanticColors.menuItemBackgroundChecked;
  const ComboBoxOptionBackgroundHovered = semanticColors.menuItemBackgroundHovered;
  const ComboBoxOptionTextColor = palette.black;
  const ComboBoxOptionTextColorDisabled = palette.neutralTertiary;
  const ComboBoxOptionBackgroundDisabled = palette.white;

  const optionStyles: IComboBoxOptionStyles = {
    root: [
      {
        backgroundColor: 'transparent',
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'block',
        width: '100%',
        height: 'auto',
        minHeight: ComboBoxOptionHeight,
        lineHeight: '20px',
        padding: '5px 16px',
        position: 'relative',
        border: '1px solid transparent',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        textAlign: 'left',

        [MS_HIGHCONTRAST_ACTIVE]: {
          borderColor: 'Background'
        }
      },
      getFocusStyle(theme),
    ],
    rootHovered: {
      backgroundColor: ComboBoxOptionBackgroundHovered,
      color: ComboBoxOptionTextColor,
      ...getListOptionHighContrastStyles(theme)
    },
    rootFocused: {
      backgroundColor: ComboBoxOptionBackgroundHovered
    },
    rootPressed: {
      backgroundColor: ComboBoxOptionBackgroundHovered,
      color: ComboBoxOptionTextColor
    },
    rootChecked: [
      {
        backgroundColor: ComboBoxOptionBackgroundSelected,
        color: ComboBoxOptionTextColor
      },
      getFocusStyle(theme),
      getListOptionHighContrastStyles(theme)
    ],
    rootCheckedHovered: {
      backgroundColor: ComboBoxOptionBackgroundSelected
    },
    rootDisabled: {
      backgroundColor: ComboBoxOptionBackgroundDisabled,
      color: ComboBoxOptionTextColorDisabled,
      cursor: 'default',
      ' .ms-Button-flexContainer': {
        justifyContent: 'flex-start'
      }
    },
    optionText: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      minWidth: '0px',
      maxWidth: '100%',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      margin: '1px'
    },
  };

  return mergeStyleSets(optionStyles, customStylesForAllOptions, customOptionStylesForCurrentOption) as IComboBoxOptionStyles;
});

export const getStyles = memoizeFunction((
  theme: ITheme,
  customStyles?: Partial<IComboBoxStyles>,
): IComboBoxStyles => {

  const { semanticColors, fonts, palette } = theme;

  const ComboBoxRootBackground = semanticColors.bodyBackground;
  const ComboBoxRootTextColor = semanticColors.bodyText;
  const ComboBoxRootBorderColor = palette.neutralTertiaryAlt;
  const ComboBoxRootBorderColorHovered = semanticColors.inputFocusBorderAlt;
  const ComboBoxRootColorErrored = semanticColors.errorText;
  const ComboBoxCalloutBorderColor = palette.neutralLight;
  const ComboBoxOptionHeaderTextColor = semanticColors.menuHeader;
  const ComboBoxOptionDividerBorderColor = semanticColors.bodyDivider;

  const styles: IComboBoxStyles = {
    container: {

    },
    label: {

    },
    root: [
      fonts.medium,
      {
        boxShadow: 'none',
        margin: '0 0 10px 0',
        padding: '0',
        paddingRight: ComboxBoxCaretDownWidth,
        color: ComboBoxRootTextColor,
        position: 'relative',
        outline: '0',
        userSelect: 'none',
        background: ComboBoxRootBackground,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: ComboBoxRootBorderColor,
        cursor: 'text',
        display: 'block',
        height: ComboBoxHeight,
        lineHeight: ComboBoxLineHeight,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        boxSizing: 'content-box',
        ' .ms-Label': {
          display: 'inline-block',
          marginBottom: '8px',
        }
      }
    ],
    rootHovered: {
      borderColor: ComboBoxRootBorderColorHovered,
      [MS_HIGHCONTRAST_ACTIVE]: {
        color: 'HighlightText',
        borderColor: 'Highlight'
      },
    },
    rootFocused: {
      borderColor: ComboBoxRootBorderColorHovered,
      [MS_HIGHCONTRAST_ACTIVE]: {
        color: 'HighlightText',
        borderColor: 'Highlight'
      },
    },
    rootDisabled: getDisabledStyles(theme),
    rootError: {
      borderColor: ComboBoxRootColorErrored
    },
    rootDisallowFreeForm: {

    },
    input: {
      boxSizing: 'border-box',
      width: '100%',
      height: '100%',
      border: 'none',
      outline: 'none',
      font: 'inherit',
      textOverflow: 'ellipsis',
      paddingLeft: '12px'
    },
    inputDisabled: getDisabledStyles(theme),
    caretDownButtonStyles: getCaretDownButtonStyles(theme, customStyles ? customStyles.caretDownButtonStyles : null),
    errorMessage: {
      color: ComboBoxRootColorErrored,
      ':before': {
        content: '* ',
      }
    },
    callout: {
      boxShadow: '0 0px 5px 0px rgba(0, 0, 0, 0.4)',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: ComboBoxCalloutBorderColor,
    },
    optionsContainer: {
      display: 'block'
    },
    header: [
      fonts.medium,
      {
        fontWeight: FontWeights.semibold,
        color: ComboBoxOptionHeaderTextColor,
        background: 'none',
        border: 'none',
        height: ComboBoxOptionHeight,
        lineHeight: ComboBoxOptionHeight,
        cursor: 'default',
        padding: '0px 16px',
        userSelect: 'none',
        textAlign: 'left'
      }
    ],
    divider: {
      border: '1px solid',
      borderColor: ComboBoxOptionDividerBorderColor
    },
    optionDefaultStyles: getOptionStyles(theme)
  };

  return mergeStyleSets(styles, customStyles) as IComboBoxStyles;
});

export const getCaretDownButtonStyles = memoizeFunction((
  theme: ITheme,
  customStyles?: Partial<IComboBoxCaretDownButtonStyles>,
): IComboBoxCaretDownButtonStyles => {
  const { semanticColors, fonts, palette } = theme;

  const caretButtonTextColor = palette.neutralDark;
  const caretButtonBackgroundHovered = palette.neutralQuaternaryAlt;
  const caretButtonBackgroundActive = palette.neutralTertiaryAlt;

  const styles: IComboBoxCaretDownButtonStyles = {
    root: {
      color: caretButtonTextColor,
      fontSize: FontSizes.small,
      position: 'absolute',
      height: ComboBoxHeight,
      lineHeight: ComboBoxLineHeight,
      width: ComboxBoxCaretDownWidth,
      textAlign: 'center',
      cursor: 'default',
      [MS_HIGHCONTRAST_ACTIVE]: {
        backgroundColor: 'ButtonFace',
        borderColor: 'ButtonText',
        color: 'ButtonText',
      }
    },
    rootHovered: {
      backgroundColor: caretButtonBackgroundHovered
    },
    rootPressed: {
      backgroundColor: caretButtonBackgroundActive
    },
    rootDisabled: getDisabledStyles(theme),
  };
  return mergeStyleSets(styles, customStyles) as IComboBoxCaretDownButtonStyles;
});