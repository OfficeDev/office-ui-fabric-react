import { ITextFieldStyleProps } from 'office-ui-fabric-react/lib/TextField';
import { fluentBorderRadius } from './styleConstants';
import { NeutralColors, SharedColors } from '../FluentColors';

export const TextFieldStyles = (props: ITextFieldStyleProps) => {
  const { focused, disabled, hasErrorMessage, multiline, theme } = props;
  const { palette } = theme;

  return {
    fieldGroup: [
      {
        borderRadius: fluentBorderRadius
      },
      !focused &&
        !disabled &&
        !hasErrorMessage && {
          borderColor: NeutralColors.gray80
        },
      hasErrorMessage && [
        {
          borderColor: SharedColors.red10,
          selector: {
            '&:hover': {
              borderColor: SharedColors.red20
            }
          }
        },
        focused && {
          borderColor: SharedColors.red20
        }
      ]
    ],
    field: {
      color: palette.neutralDark,
      padding: !multiline ? '0 8px' : '6px 8px',
      selectors: {
        '::placeholder': [disabled && { color: palette.neutralTertiary }],
        ':-ms-input-placeholder': [disabled && { color: palette.neutralTertiary }]
      }
    },
    errorMessage: {
      color: SharedColors.red20
    }
  };
};
