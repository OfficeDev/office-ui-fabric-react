import { ComponentSlotStylesPrepared, ICSSInJSStyle } from '@fluentui/styles';

import { AvatarStatusStylesProps } from '../../../../components/Avatar/AvatarStatus';
import { AvatarVariables } from './avatarVariables';
import { pxToRem, SizeValue } from '../../../../utils';

const getBackgroundColor = (state: string, variables: AvatarVariables) => {
  switch (state) {
    case 'success':
      return variables.statusSuccessBackgroundColor;
    case 'info':
      return variables.statusInfoBackgroundColor;
    case 'warning':
      return variables.statusWarningBackgroundColor;
    case 'error':
      return variables.statusErrorBackgroundColor;
    case 'unknown':
    default:
      return variables.statusDefaultBackgroundColor;
  }
};

const getTextColor = (state: string, variables: AvatarVariables) => {
  switch (state) {
    case 'success':
      return variables.statusSuccessTextColor;
    case 'info':
      return variables.statusInfoTextColor;
    case 'warning':
      return variables.statusWarningTextColor;
    case 'error':
      return variables.statusErrorTextColor;
    case 'unknown':
    default:
      return variables.statusDefaultTextColor;
  }
};

const sizeToPxValue: Record<SizeValue, number> = {
  smallest: 6,
  smaller: 10,
  small: 10,
  medium: 10,
  large: 10,
  larger: 16,
  largest: 0,
};

export const getSizeStyles = (sizeInPx: number, variables: AvatarVariables) => {
  const sizeInRem = pxToRem(sizeInPx);

  return {
    height: sizeInRem,
    width: sizeInRem,
  };
};

export const avatarStatusStyles: ComponentSlotStylesPrepared<AvatarStatusStylesProps, AvatarVariables> = {
  root: ({ variables: v, props: { color, size, state } }): ICSSInJSStyle => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...getSizeStyles(sizeToPxValue[size], v),
    verticalAlign: 'middle',
    borderRadius: '9999px',
    backgroundColor: color || getBackgroundColor(state, v),
    position: 'absolute',
    bottom: 0,
    right: 0,
    boxShadow: `0 0 0 ${v.statusBorderWidth} ${v.statusBorderColor}`,
  }),

  icon: ({ props: { state }, variables: v }): ICSSInJSStyle => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: v.statusIconSize,
    height: v.statusIconSize,
    color: getTextColor(state, v),
    '& > :first-child': {
      height: '100%',
      width: '100%',
      '& svg': {
        height: '100%',
        width: '100%',
      },
    },
  }),
};
