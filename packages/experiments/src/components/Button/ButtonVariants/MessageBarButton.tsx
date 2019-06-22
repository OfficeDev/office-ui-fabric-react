import * as React from 'react';
import { createComponent, ITokenFunction } from '@uifabric/foundation';
import { useButtonState as state } from '../Button.state';
import { ButtonStyles as styles, ButtonTokens } from '../Button.styles';
import { IButtonComponent, IButtonProps, IButtonTokenReturnType, IButtonTokens, IButtonViewProps } from '../Button.types';
import { ButtonView } from '../Button.view';

const baseTokens: IButtonComponent['tokens'] = (props, theme): IButtonTokenReturnType => {
  const { palette } = theme;

  return {
    borderColor: palette.neutralTertiaryAlt,
    borderColorHovered: palette.neutralTertiaryAlt,
    borderColorPressed: palette.neutralTertiaryAlt,
    contentPadding: 0,
    cursor: 'pointer',
    height: 24,
    minHeight: 24,
    minWidth: 84,
    width: 84
  };
};

const disabledTokens: IButtonComponent['tokens'] = (props, theme): IButtonTokenReturnType => {
  const { semanticColors } = theme;

  return {
    borderColor: semanticColors.buttonBorderDisabled,
    borderColorHovered: semanticColors.buttonBorderDisabled,
    borderColorPressed: semanticColors.buttonBorderDisabled
  };
};

export const MessageBarButtonTokens: IButtonComponent['tokens'] = (props, theme): IButtonTokenReturnType => {
  const regularTokens = (ButtonTokens as ITokenFunction<IButtonViewProps, IButtonTokens>)(props, theme);

  return [regularTokens, baseTokens, props.disabled && disabledTokens];
};

export const MessageBarButton: React.StatelessComponent<IButtonProps> = createComponent(ButtonView, {
  displayName: 'MessageBarButton',
  state,
  styles,
  tokens: MessageBarButtonTokens
});
