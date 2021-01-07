import { pxToRem } from '../../../../utils';

export interface AvatarVariables {
  avatarBorderColor: string;
  avatarBorderWidth: string;
  squareAvatarBorderRadius: string;
  statusBorderColor: string;
  statusBorderWidth: string;
  iconColor: string;
  iconBackgroundColor: string;
  statusIconSize: string;
  statusSuccessBackgroundColor: string;
  statusSuccessColor: string;
  statusInfoBackgroundColor: string;
  statusInfoColor: string;
  statusWarningBackgroundColor: string;
  statusWarningColor: string;
  statusErrorBackgroundColor: string;
  statusErrorColor: string;
  statusBackgroundColor: string;
  statusColor: string;
}

export const avatarVariables = (siteVariables): AvatarVariables => ({
  avatarBorderColor: '',
  avatarBorderWidth: '0',
  squareAvatarBorderRadius: pxToRem(3),
  iconColor: siteVariables.colors.white,
  iconBackgroundColor: siteVariables.colors.brand[600],
  statusBorderWidth: '2px',
  statusIconSize: pxToRem(7),
  statusBorderColor: siteVariables.bodyBackground,
  statusSuccessBackgroundColor: siteVariables.colorScheme.green.background,
  statusSuccessColor: siteVariables.colorScheme.green.foreground1,
  statusInfoBackgroundColor: siteVariables.colorScheme.brand.background,
  statusInfoColor: siteVariables.colorScheme.default.foreground2,
  statusWarningBackgroundColor: siteVariables.colorScheme.yellow.background,
  statusWarningColor: siteVariables.colorScheme.yellow.foreground2,
  statusErrorBackgroundColor: siteVariables.colorScheme.red.background,
  statusErrorColor: siteVariables.colorScheme.red.foreground2,
  statusBackgroundColor: siteVariables.colorScheme.default.background5,
  statusColor: siteVariables.colorScheme.default.foreground4,
});
