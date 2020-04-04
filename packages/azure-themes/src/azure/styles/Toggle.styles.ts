import { FontSizes } from '../AzureType';
import { IExtendedSemanticColors } from '../IExtendedSemanticColors';
import { IToggleStyleProps, IToggleStyles } from 'office-ui-fabric-react/lib/Toggle';
// import { BaseColors } from '../AzureColors';

export const ToggleStyles = (props: IToggleStyleProps): Partial<IToggleStyles> => {
  const { theme, disabled, checked } = props;
  const { semanticColors } = theme;
  const extendedSemanticColors = semanticColors as IExtendedSemanticColors;

  return {
    container: {},
    pill: [
      {
        backgroundColor: semanticColors.bodyBackground,
      },
      checked && {
        backgroundColor: extendedSemanticColors.controlAccent,
      },
      disabled && {
        backgroundColor: extendedSemanticColors.controlOutlineDisabled,
      },
      !checked && {
        borderColor: '#605E5C',
      },
      !checked &&
        disabled && {
          backgroundColor: extendedSemanticColors.disabledToggleBackground,
          borderColor: extendedSemanticColors.controlOutlineDisabled,
        },
    ],
    // toggle circle
    thumb: [
      {
        backgroundColor: extendedSemanticColors.controlOutlineHovered,
      },
      disabled && {
        backgroundColor: extendedSemanticColors.thumbDisabled,
      },
      !checked && {
        backgroundColor: extendedSemanticColors.thumbNotCheck,
      },
      checked &&
        !disabled && {
          backgroundColor: extendedSemanticColors.thumbEnabledChecked,
        },
      disabled &&
        !checked && {
          backgroundColor: extendedSemanticColors.thumbDisabledNotChecked,
        },
    ],
    root: [
      {
        fontSize: FontSizes.size13,
        selectors: {
          '.ms-Toggle-stateText': {
            color: semanticColors.bodyText,
          },
        },
      },
      disabled && {
        selectors: {
          '.ms-Toggle-stateText': {
            color: semanticColors.disabledBodyText,
          },
        },
      },
    ],
  };
};
