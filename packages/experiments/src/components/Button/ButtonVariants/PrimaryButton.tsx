import * as React from 'react';
// Temporary import file to experiment with next version of foundation.
import { composed } from '@uifabric/foundation/lib/next/composed';
import { useButtonState as state } from '../Button.state';
import {
  baseTokens,
  circularTokens,
  disabledTokens,
  hrefTokens,
  primaryCheckedTokens,
  primaryCircularTokens,
  primaryEnabledTokens,
  ButtonStyles as styles,
} from '../Button.styles';
import { IButtonComponent, IButtonProps, IButtonTokenReturnType } from '../Button.types';
import { ButtonSlots as slots, ButtonView as view } from '../Button.view';

/* eslint-disable deprecation/deprecation */

/** @deprecated */
export const PrimaryButtonTokens: IButtonComponent['tokens'] = (props, theme): IButtonTokenReturnType => [
  baseTokens,
  !!props.href && hrefTokens,
  primaryEnabledTokens,
  props.circular && circularTokens,
  props.circular && primaryCircularTokens,
  props.checked && primaryCheckedTokens,
  props.disabled && disabledTokens,
];

/**
 * @deprecated This component was experimental and is not longer being developed on, nor will it be supported in the
 * future.
 */
export const PrimaryButton: React.FunctionComponent<IButtonProps> = composed({
  displayName: 'PrimaryButton',
  slots,
  state,
  styles,
  tokens: PrimaryButtonTokens,
  view,
});
