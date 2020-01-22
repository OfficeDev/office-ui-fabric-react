import { HighContrastSelector, FontWeights, getEdgeChromiumForcedStylesOffSelector } from '../../Styling';
import { ILabelStyleProps, ILabelStyles } from './Label.types';

export const getStyles = (props: ILabelStyleProps): ILabelStyles => {
  const { theme, className, disabled, required } = props;
  const { semanticColors } = theme;

  // Tokens
  const labelFontWeight = FontWeights.semibold;
  const labelColor = semanticColors.bodyText;
  const labelDisabledColor = semanticColors.disabledBodyText;
  const labelRequiredStarColor = semanticColors.errorText;

  return {
    root: [
      'ms-Label',
      theme.fonts.medium,
      {
        fontWeight: labelFontWeight,
        color: labelColor,
        boxSizing: 'border-box',
        boxShadow: 'none',
        margin: 0,
        display: 'block',
        padding: '5px 0',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        selectors: {
          [HighContrastSelector]: {
            background: 'Window',
            color: disabled ? 'GrayText' : 'WindowText'
          },
          ...getEdgeChromiumForcedStylesOffSelector()
        }
      },
      disabled && {
        color: labelDisabledColor
      },
      required && {
        selectors: {
          '::after': {
            content: `' *'`,
            color: labelRequiredStarColor,
            paddingRight: 12,
            selectors: {
              [HighContrastSelector]: {
                color: 'WindowText'
              }
            }
          }
        }
      },
      className
    ]
  };
};
