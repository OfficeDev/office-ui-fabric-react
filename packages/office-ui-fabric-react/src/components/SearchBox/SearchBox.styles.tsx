import { HighContrastSelector, AnimationVariables, normalize, IStyle, getGlobalClassNames, getPlaceholderStyles } from '../../Styling';
import { ISearchBoxStyleProps, ISearchBoxStyles } from './SearchBox.types';

const GlobalClassNames = {
  root: 'ms-SearchBox',
  iconContainer: 'ms-SearchBox-iconContainer',
  icon: 'ms-SearchBox-icon',
  clearButton: 'ms-SearchBox-clearButton',
  field: 'ms-SearchBox-field'
};

export function getStyles(props: ISearchBoxStyleProps): ISearchBoxStyles {
  const { theme, underlined, disabled, hasFocus, className, hasInput, disableAnimation } = props;
  const { palette, fonts, semanticColors, effects } = theme;
  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  // placeholder style constants
  const placeholderStyles: IStyle = {
    color: semanticColors.inputPlaceholderText,
    opacity: 1
  };

  const inputIconAlt = palette.neutralSecondary;
  const inputIconAltHovered = palette.neutralPrimary;
  const inputBorderDisabled = palette.neutralLighter;
  const inputBackgroundHovered = palette.neutralLighter;
  const inputBackgroundDisabled = palette.neutralLighter;

  return {
    root: [
      classNames.root,
      fonts.medium,
      normalize,
      {
        color: semanticColors.inputText,
        backgroundColor: semanticColors.inputBackground,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'stretch',
        // The 1px top and bottom padding ensure the input field does not overlap the border
        padding: '1px 0 1px 4px',
        borderRadius: effects.roundedCorner2,
        border: `1px solid ${semanticColors.inputBorder}`,
        height: 32,
        selectors: {
          [HighContrastSelector]: {
            border: '1px solid WindowText'
          },
          ':hover': {
            borderColor: semanticColors.inputBorderHovered,
            selectors: {
              [HighContrastSelector]: {
                borderColor: 'Highlight'
              }
            }
          },
          [`:hover .${classNames.iconContainer}`]: {
            color: palette.themeDark
          }
        }
      },
      !hasFocus &&
        hasInput && {
          selectors: {
            '.ms-SearchBox-iconContainer': {
              width: 4
            },
            '.ms-SearchBox-icon': {
              opacity: 0
            }
          }
        },
      hasFocus && [
        'is-active',
        {
          borderColor: semanticColors.inputFocusBorderAlt,
          selectors: {
            ':hover': {
              borderColor: semanticColors.inputFocusBorderAlt
            },
            [HighContrastSelector]: {
              borderColor: 'Highlight'
            }
          }
        }
      ],
      disabled && [
        'is-disabled',
        {
          borderColor: inputBorderDisabled,
          backgroundColor: inputBackgroundDisabled,
          pointerEvents: 'none',
          cursor: 'default'
        }
      ],
      underlined && [
        'is-underlined',
        {
          borderWidth: '0 0 1px 0',
          borderRadius: 0,
          // Underlined SearchBox has a larger padding left to vertically align with the waffle in product
          padding: '1px 0 1px 8px'
        }
      ],
      underlined &&
        disabled && {
          backgroundColor: 'transparent'
        },
      hasInput && 'can-clear',
      className
    ],
    iconContainer: [
      classNames.iconContainer,
      {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 0,
        fontSize: 16,
        width: 32,
        textAlign: 'center',
        color: semanticColors.inputIcon,
        cursor: 'text'
      },
      hasFocus && {
        width: 4
      },
      disabled && {
        color: semanticColors.inputIconDisabled
      },
      !disableAnimation && {
        transition: `width ${AnimationVariables.durationValue1}`
      }
    ],
    icon: [
      classNames.icon,
      {
        opacity: 1
      },
      hasFocus && {
        opacity: 0
      },
      !disableAnimation && {
        transition: `opacity ${AnimationVariables.durationValue1} 0s`
      }
    ],
    clearButton: [
      classNames.clearButton,
      {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        cursor: 'pointer',
        flexBasis: '32px',
        flexShrink: 0,
        padding: 0,
        margin: '-1px 0px',
        selectors: {
          '&:hover .ms-Button': {
            backgroundColor: inputBackgroundHovered
          },
          '&:hover .ms-Button-icon': {
            color: inputIconAltHovered
          },
          '.ms-Button': {
            borderRadius: 0
          },
          '.ms-Button-icon': {
            color: inputIconAlt
          }
        }
      }
    ],
    field: [
      classNames.field,
      normalize,
      getPlaceholderStyles(placeholderStyles),
      {
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        fontWeight: 'inherit',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        color: semanticColors.inputText,
        flex: '1 1 0px',
        // The default implicit value of 'auto' prevents the input from shrinking. Setting min-width to
        // 0px allows the input element to shrink to fit the container.
        minWidth: '0px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        // This padding forces the text placement to round up.
        paddingBottom: 0.5,
        // This removes the IE specific clear button in the input since we implimented our own
        selectors: {
          '::-ms-clear': {
            display: 'none'
          }
        }
      },
      disabled && {
        color: semanticColors.disabledText
      }
    ]
  };
}
