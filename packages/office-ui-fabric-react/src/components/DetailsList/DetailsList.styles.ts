import { IDetailsListStyleProps, IDetailsListStyles } from './DetailsList.types';
import { getGlobalClassNames, FontSizes } from '../../Styling';

const GlobalClassNames = {
  root: 'ms-DetailsList',
  compact: 'ms-DetailsList--Compact',
  isFixed: 'is-fixed',
  isHorizontalConstrained: 'is-horizontalConstrained',
  listCell: 'ms-List-cell'
};

export const getStyles = (props: IDetailsListStyleProps): IDetailsListStyles => {
  const { theme, className, isHorizontalConstrained, compact, isFixed } = props;
  const { semanticColors } = theme;
  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      {
        position: 'relative',
        fontSize: FontSizes.small,
        background: semanticColors.listBackground,
        color: semanticColors.listText,
        selectors: {
          [`& .${classNames.listCell}`]: {
            minHeight: 38,
            wordBreak: 'break-word'
          }
        }
      },

      isFixed && [classNames.isFixed],

      compact && [
        classNames.compact,
        {
          selectors: {
            [`.${classNames.listCell}`]: {
              minHeight: 32
            }
          }
        }
      ],

      isHorizontalConstrained && [
        classNames.isHorizontalConstrained,
        {
          overflowX: 'auto',
          overflowY: 'visible',
          WebkitOverflowScrolling: 'touch'
        }
      ],

      className
    ],

    focusZone: [
      {
        display: 'inline-block',
        minWidth: '100%',
        minHeight: 1
      }
    ]
  };
};
