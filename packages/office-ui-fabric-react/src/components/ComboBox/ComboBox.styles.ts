import {
  FontSizes,
  FontWeights,
  IRawStyle,
  ITheme,
  concatStyleSets,
  getFocusStyle,
  HighContrastSelector
} from '../../Styling';
import {
  IComboBoxOptionStyles,
  IComboBoxStyles,
} from './ComboBox.types';

import { IButtonBaseStyles, IButtonBaseStyleProps } from '../../Button';
import { memoizeFunction } from '../../Utilities';

const ComboBoxHeight = '32px';
const ComboBoxLineHeight = '30px';
const ComboxBoxCaretDownWidth = '32px';
const ComboBoxOptionHeight = '32px';

const getDisabledStyles = memoizeFunction((theme: ITheme): IRawStyle => {
  const { semanticColors } = theme;

  return {
    backgroundColor: semanticColors.disabledBackground,
    borderColor: semanticColors.disabledBackground,
    color: semanticColors.disabledText,
    cursor: 'default',
    selectors: {
      [HighContrastSelector]: {
        borderColor: 'GrayText',
        color: 'GrayText'
      }
    },
  };
});

const getListOptionHighContrastStyles = memoizeFunction((theme: ITheme): IRawStyle => {
  return {
    selectors: {
      [HighContrastSelector]: {
        backgroundColor: 'Highlight',
        borderColor: 'Highlight',
        color: 'HighlightText',
        MsHighContrastAdjust: 'none'
      }
    },
  };
});

export const getOptionStyles = (props: IButtonBaseStyleProps): IButtonBaseStyles => {

  const { checked, disabled, theme } = props;
  const { semanticColors, palette } = theme;

  const ComboBoxOptionBackgroundHovered = semanticColors.menuItemBackgroundHovered;
  const ComboBoxOptionTextColorHovered = semanticColors.bodyText;
  const ComboBoxOptionTextColorSelected = palette.black;
  const ComboBoxOptionTextColorDisabled = semanticColors.disabledText;
  const ComboBoxOptionBackgroundDisabled = semanticColors.bodyBackground;
  const ComboBoxOptionBorderColorFocused = palette.neutralSecondary;

  const optionStyles: IButtonBaseStyles = {
    root: {
      display: 'flex'

    },
    button: [
      {
        width: '100%',
        backgroundColor: 'transparent',
        boxSizing: 'border-box',
        cursor: 'pointer',
        height: 'auto',
        minHeight: ComboBoxOptionHeight,
        lineHeight: '20px',
        padding: '5px 16px',
        position: 'relative',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        textAlign: 'left',
        selectors: {
          [HighContrastSelector]: {
            borderColor: 'Background'
          },
          ':hover': {
            backgroundColor: ComboBoxOptionBackgroundHovered,
            color: ComboBoxOptionTextColorHovered
          },
          ':focus': {
            backgroundColor: ComboBoxOptionBackgroundHovered
          }
        }
      },
      getFocusStyle(theme),
      checked && [
        {
          backgroundColor: ComboBoxOptionBackgroundHovered,
          color: ComboBoxOptionTextColorSelected
        },
        getFocusStyle(theme),
        getListOptionHighContrastStyles(theme)
      ],
      disabled && {
        backgroundColor: ComboBoxOptionBackgroundDisabled,
        color: ComboBoxOptionTextColorDisabled,
        cursor: 'default'
      }
    ],
    label: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      minWidth: '0px',
      maxWidth: '100%',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      margin: '1px',
    }
  };

  return concatStyleSets(optionStyles);
};


export const getCaretDownButtonStyles = (props: IButtonBaseStyleProps): IButtonBaseStyles => {

  const { checked, disabled } = props;
  const { semanticColors } = props.theme;

  const caretButtonTextColor = semanticColors.bodySubtext;
  const caretButtonTextColorHoveredChecked = semanticColors.buttonTextChecked;
  const caretButtonBackgroundHovered = semanticColors.listItemBackgroundHovered;
  const caretButtonBackgroundChecked = semanticColors.listItemBackgroundChecked;
  const caretButtonBackgroundCheckedHovered = semanticColors.listItemBackgroundCheckedHovered;

  const styles: IButtonBaseStyles = {
    root: {
      position: 'absolute',
    },
    button: [
      {
        color: caretButtonTextColor,
        fontSize: FontSizes.small,
        height: ComboBoxHeight,
        lineHeight: ComboBoxLineHeight,
        width: ComboxBoxCaretDownWidth,
        textAlign: 'center',
        cursor: 'default',
        selectors: {
          [HighContrastSelector]: {
            backgroundColor: 'ButtonFace',
            borderColor: 'ButtonText',
            color: 'ButtonText',
            MsHighContrastAdjust: 'none'
          },
          '.ms-Icon': {
            fontSize: FontSizes.small
          },
          ':hover': {
            backgroundColor: caretButtonBackgroundHovered,
            color: caretButtonTextColorHoveredChecked,
            cursor: 'pointer'
          },
          ':active': {
            backgroundColor: caretButtonBackgroundChecked,
            color: caretButtonTextColorHoveredChecked
          }
        },
      },
      checked && {
        backgroundColor: caretButtonBackgroundChecked,
        color: caretButtonTextColorHoveredChecked,
        selectors: {
          ':hover': {
            backgroundColor: caretButtonBackgroundCheckedHovered,
            color: caretButtonTextColorHoveredChecked
          }
        }
      },
      disabled && {
        backgroundColor: semanticColors.disabledBackground,
        borderColor: semanticColors.disabledBackground,
        color: semanticColors.disabledText,
        cursor: 'default',
        selectors: {
          [HighContrastSelector]: {
            borderColor: 'GrayText',
            color: 'GrayText'
          }
        },
      }
    ],
  };

  return concatStyleSets(styles);

};

export const getStyles = memoizeFunction((
  theme: ITheme,
  customStyles?: Partial<IComboBoxStyles>,
  comboBoxOptionWidth?: string,
): Partial<IComboBoxStyles> => {

  const { semanticColors, fonts, palette } = theme;

  const ComboBoxRootBackground = semanticColors.bodyBackground;
  const ComboBoxRootTextColor = semanticColors.bodyText;
  const ComboBoxRootBorderColor = semanticColors.inputBorder;
  const ComboBoxRootBorderColorHovered = semanticColors.inputBorderHovered;
  const ComboBoxRootBorderColorFocused = semanticColors.inputFocusBorderAlt;
  const ComboBoxRootColorErrored = semanticColors.errorText;
  const ComboBoxCalloutBorderColor = palette.neutralLight;
  const ComboBoxOptionHeaderTextColor = semanticColors.menuHeader;
  const ComboBoxOptionDividerBorderColor = semanticColors.bodyDivider;

  const styles: IComboBoxStyles = {
    container: {},
    label: {},
    labelDisabled: {},
    root: [
      fonts.medium,
      {
        boxShadow: 'none',
        marginBottom: '10px',
        marginLeft: '0',
        paddingTop: '0',
        paddingRight: ComboxBoxCaretDownWidth,
        paddingBottom: '0',
        paddingLeft: '12px',
        color: ComboBoxRootTextColor,
        position: 'relative',
        outline: '0',
        userSelect: 'none',
        backgroundColor: ComboBoxRootBackground,
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
        selectors: {
          '.ms-Label': {
            display: 'inline-block',
            marginBottom: '8px',
          },
          'input': {
            selectors: {
              '::-ms-clear': {
                display: 'none'
              }
            }
          },
          '&.is-open': {
            borderColor: ComboBoxRootBorderColorFocused
          }
        }
      }
    ],

    rootHovered: {
      borderColor: ComboBoxRootBorderColorHovered,
      selectors: {
        [HighContrastSelector]: {
          color: 'HighlightText',
          borderColor: 'Highlight',
          MsHighContrastAdjust: 'none'
        }
      },
    },

    rootPressed: {
      borderColor: ComboBoxRootBorderColorFocused
    },

    rootFocused: {
      borderColor: ComboBoxRootBorderColorFocused,
      selectors: {
        [HighContrastSelector]: {
          color: 'HighlightText',
          borderColor: 'Highlight',
          MsHighContrastAdjust: 'none'
        }
      },
    },

    rootDisabled: getDisabledStyles(theme),

    rootError: {
      borderColor: ComboBoxRootColorErrored,
      marginBottom: '5px'
    },

    rootDisallowFreeForm: {},

    input: {
      boxSizing: 'border-box',
      width: '100%',
      height: '30px',
      borderStyle: 'none',
      outline: 'none',
      font: 'inherit',
      textOverflow: 'ellipsis',
      padding: '0',
      margin: '1px 0px'
    },

    inputDisabled: getDisabledStyles(theme),
    errorMessage: {
      color: ComboBoxRootColorErrored
    },

    callout: {
      boxShadow: '0 0px 5px 0px rgba(0, 0, 0, 0.4)',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: ComboBoxCalloutBorderColor,
    },

    optionsContainerWrapper: {
      width: comboBoxOptionWidth
    },

    optionsContainer: {
      display: 'block'
    },

    header: [
      fonts.medium,
      {
        fontWeight: FontWeights.semibold,
        color: ComboBoxOptionHeaderTextColor,
        backgroundColor: 'none',
        borderStyle: 'none',
        height: ComboBoxOptionHeight,
        lineHeight: ComboBoxOptionHeight,
        cursor: 'default',
        padding: '0px 16px',
        userSelect: 'none',
        textAlign: 'left'
      }
    ],

    divider: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: ComboBoxOptionDividerBorderColor
    }

  };

  return concatStyleSets(styles, customStyles);
});
