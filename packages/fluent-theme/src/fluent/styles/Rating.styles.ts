import { IRatingStyleProps, IRatingStyles } from 'office-ui-fabric-react/lib/Rating';

export const RatingStyles = (props: IRatingStyleProps): Partial<IRatingStyles> => {
  const { disabled, readOnly, theme } = props;
  const { palette, semanticColors } = theme;

  return {
    root: [
      !disabled &&
        !readOnly && {
          selectors: {
            // This is part 1 of highlighting all stars up to the one the user is hovering over
            '&:hover': {
              selectors: {
                '.ms-RatingStar-back': { color: palette.neutralPrimary }
              }
            }
          }
        }
    ],
    ratingStarBack: [
      {
        color: palette.neutralTertiary
      },
      disabled && {
        color: semanticColors.disabledBodySubtext
      }
    ],
    ratingStarFront: {
      color: palette.neutralPrimary
    },
    ratingButton: [
      !disabled &&
        !readOnly && {
          selectors: {
            // This is part 2 of highlighting all stars up to the one the user is hovering over
            '&:hover ~ .ms-Rating-button': {
              selectors: {
                '.ms-RatingStar-back': { color: palette.neutralTertiary },
                '.ms-RatingStar-front': { color: palette.neutralTertiary }
              }
            }
          }
        }
    ]
  };
};
