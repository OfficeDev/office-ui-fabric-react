import { getGlobalClassNames, HighContrastSelector } from '../../../Styling';
import { ISuggestionItemStyleProps, ISuggestionItemStyles } from './Suggestions.types';

const GlobalClassNames = {
  root: 'ms-Suggestions-item',
  itemButton: 'ms-Suggestions-itemButton',
  closeButton: 'ms-Suggestions-closeButton',
  isSelected: 'is-suggested'
};

export function getStyles(props: ISuggestionItemStyleProps): ISuggestionItemStyles {
  const { className, theme, suggested } = props;

  const { palette } = theme;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      {
        display: 'flex',
        alignItems: 'stretch',
        boxSizing: 'border-box',
        width: '100%',
        position: 'relative',
        selectors: {
          '&:hover': {
            background: palette.neutralLighter
          },
          '&:hover .ms-Suggestions-closeButton': {
            display: 'block'
          }
        }
      },
      suggested && [
        classNames.isSelected,
        {
          background: palette.neutralLight,
          selectors: {
            ':hover': {
              background: palette.neutralTertiaryAlt
            },
            [HighContrastSelector]: {
              background: 'Highlight',
              color: 'HighlightText',
              MsHighContrastAdjust: 'none'
            }
          }
        }
      ],
      className
    ],
    itemButton: [
      classNames.itemButton,
      {
        width: '100%',
        padding: 0,
        height: '100%',
        selectors: {
          [HighContrastSelector]: {
            color: 'WindowText'
          },
          ':hover': {
            color: palette.neutralDark
          }
        }
      }
    ],
    closeButton: [
      classNames.closeButton,
      {
        display: 'none',
        color: palette.neutralSecondary,
        padding: '0 4px',
        height: 'auto',
        width: 32,
        selectors: {
          ':hover, :active': {
            background: palette.neutralTertiaryAlt,
            color: palette.neutralDark
          },
          [HighContrastSelector]: {
            color: 'WindowText'
          }
        }
      },
      suggested && {
        selectors: {
          ':hover, :active': {
            background: palette.neutralTertiary,
            color: palette.neutralPrimary
          }
        }
      }
    ]
  };
}
