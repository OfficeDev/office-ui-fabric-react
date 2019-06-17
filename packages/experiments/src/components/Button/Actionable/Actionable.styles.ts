import { getFocusStyle, getGlobalClassNames, HighContrastSelector } from '../../../Styling';
import { IActionableComponent, IActionableStylesReturnType, IActionableTokenReturnType } from './Actionable.types';

export const baseTokens: IActionableComponent['tokens'] = (props, theme): IActionableTokenReturnType => {
  const { semanticColors } = theme;

  return {
    backgroundColor: semanticColors.bodyBackground,
    backgroundColorHovered: semanticColors.bodyStandoutBackground,
    backgroundColorPressed: semanticColors.bodyStandoutBackground,

    borderColor: semanticColors.variantBorder,
    borderColorHovered: semanticColors.variantBorderHovered,
    borderColorPressed: semanticColors.variantBorderHovered,

    borderStyle: 'solid',

    color: semanticColors.bodyText,
    colorHovered: semanticColors.buttonTextChecked,
    colorPressed: semanticColors.buttonTextChecked
  };
};

export const disabledTokens: IActionableComponent['tokens'] = (props, theme): IActionableTokenReturnType => {
  const { semanticColors } = theme;

  return {
    backgroundColor: semanticColors.disabledBackground,
    backgroundColorHovered: semanticColors.disabledBackground,
    backgroundColorPressed: semanticColors.disabledBackground,

    borderColor: semanticColors.variantBorder,
    borderColorHovered: semanticColors.variantBorder,
    borderColorPressed: semanticColors.variantBorder,

    color: semanticColors.disabledBodyText,
    colorHovered: semanticColors.disabledBodyText,
    colorPressed: semanticColors.disabledBodyText
  };
};

export const ActionableTokens: IActionableComponent['tokens'] = (props, theme): IActionableTokenReturnType => [
  baseTokens,
  props.disabled && disabledTokens
];

const GlobalClassNames = {
  msActionable: 'ms-Actionable'
};

export const ActionableStyles: IActionableComponent['styles'] = (props, theme, tokens): IActionableStylesReturnType => {
  const { className } = props;

  const globalClassNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      globalClassNames.msActionable,
      getFocusStyle(theme, { inset: 1, outlineColor: tokens.outlineColor }),
      theme.fonts.medium,
      {
        backgroundColor: tokens.backgroundColor,
        borderColor: tokens.borderColor,
        borderRadius: tokens.borderRadius,
        borderStyle: tokens.borderStyle,
        borderWidth: tokens.borderWidth,
        boxSizing: 'border-box',
        color: tokens.color,
        cursor: tokens.cursor,
        display: 'inline-block',
        fontSize: tokens.textSize,
        fontWeight: tokens.textWeight,
        height: tokens.height,
        justifyContent: 'center',
        margin: 0,
        minWidth: tokens.minWidth,
        minHeight: tokens.minHeight,
        outlineColor: tokens.outlineColor,
        overflow: 'hidden',
        padding: 0,
        textAlign: 'center',
        textDecoration: 'none',
        userSelect: 'none',
        verticalAlign: 'baseline',
        width: tokens.width,

        selectors: {
          [HighContrastSelector]: {
            backgroundColor: tokens.highContrastBackgroundColor,
            borderColor: tokens.highContrastBorderColor,
            borderWidth: 1,
            color: tokens.highContrastColor,
            MsHighContrastAdjust: tokens.msHighContrastAdjust
          },
          ':hover': {
            backgroundColor: tokens.backgroundColorHovered,
            borderColor: tokens.borderColorHovered,
            color: tokens.colorHovered,

            selectors: {
              [HighContrastSelector]: {
                backgroundColor: tokens.highContrastBackgroundColorHovered,
                borderColor: tokens.highContrastBorderColorHovered,
                color: tokens.highContrastColorHovered
              }
            }
          },
          ':active': {
            backgroundColor: tokens.backgroundColorPressed,
            borderColor: tokens.borderColorPressed,
            color: tokens.colorPressed,

            selectors: {
              [HighContrastSelector]: {
                backgroundColor: tokens.highContrastBackgroundColorPressed,
                borderColor: tokens.highContrastBorderColorPressed,
                color: tokens.highContrastColorPressed
              }
            }
          }
        }
      },
      className
    ],
    stack: {
      height: '100%',
      padding: tokens.contentPadding
    }
  };
};
