import { LabelVariables } from '../../../teams/components/Label/labelVariables';
import { SiteVariablesPrepared } from '@fluentui/styles';

export const labelVariables = (siteVars: SiteVariablesPrepared): Partial<LabelVariables> => {
  return {
    foreground: 'rgb(255, 255, 255)',
    background: 'rgba(45, 44, 44, 1)',

    blackForeground: siteVars.colorScheme.black.foreground1,
    blackBackground: siteVars.colorScheme.black.background,

    whiteForeground: siteVars.colorScheme.white.foreground,
    whiteBackground: siteVars.colorScheme.white.background1,

    brandForeground: siteVars.colorScheme.brand.foreground5,
    brandBackground: siteVars.colorScheme.brand.background5,

    greyForeground: siteVars.colorScheme.grey.foreground7,
    greyBackground: siteVars.colorScheme.grey.background6,

    orangeForeground: siteVars.colorScheme.orange.foreground2,
    orangeBackground: siteVars.colorScheme.orange.background,

    redForeground: siteVars.colorScheme.red.foreground1,
    redBackground: siteVars.colorScheme.red.background,

    greenForeground: siteVars.colorScheme.green.foreground3,
    greenBackground: siteVars.colorScheme.green.background,

    yellowForeground: siteVars.colorScheme.yellow.foreground3,
    yellowBackground: siteVars.colorScheme.yellow.background,
  };
};
