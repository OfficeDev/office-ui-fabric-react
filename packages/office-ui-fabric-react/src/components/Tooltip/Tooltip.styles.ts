import { ITooltipStyleProps, ITooltipStyles, TooltipDelay } from './Tooltip.types';
import { AnimationClassNames } from '../../Styling';

export const getStyles = (props: ITooltipStyleProps): ITooltipStyles => {
  const { className, delay, beakWidth = 16, gapSpace = 0, maxWidth, theme } = props;
  const { palette, fonts } = theme;

  // The math here is done to account for the 45 degree rotation of the beak
  const tooltipGapSpace = -(Math.sqrt((beakWidth * beakWidth) / 2) + gapSpace);
  return {
    root: [
      'ms-Tooltip',
      theme.fonts.medium,
      AnimationClassNames.fadeIn200,
      {
        background: palette.white,
        padding: '8px',
        animationDelay: '300ms',
        maxWidth: maxWidth,
        selectors: {
          ':after': {
            content: `''`,
            position: 'absolute',
            bottom: tooltipGapSpace,
            left: tooltipGapSpace,
            right: tooltipGapSpace,
            top: tooltipGapSpace,
            zIndex: 0
          }
        }
      },
      delay === TooltipDelay.zero && {
        animationDelay: '0s'
      },
      delay === TooltipDelay.long && {
        animationDelay: '500ms'
      },
      className
    ],
    content: [
      'ms-Tooltip-content',
      fonts.small,
      {
        position: 'relative',
        zIndex: 1,
        color: palette.neutralPrimary,
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        overflow: 'hidden'
      }
    ],
    subText: [
      'ms-Tooltip-subtext',
      {
        // Using inherit here to avoid unintentional global overrides of the <p> tag.
        fontSize: 'inherit',
        fontWeight: 'inherit',
        color: 'inherit',
        margin: 0
      }
    ]
  };
};
