import { ICheckboxStyleProps } from './Checkbox.types';
import { HighContrastSelector, getEdgeChromiumNoHighContrastAdjustSelector } from '@fluentui/style-utilities';
import { IsFocusVisibleClassName } from '@fluentui/utilities';
import { makeStyles, createDOMRenderer } from '@fluentui/make-styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTheme, Theme } from '@fluentui/react-theme-provider';

const GlobalClassNames = {
  root: 'ms-Checkbox',
  label: 'ms-Checkbox-label',
  checkbox: 'ms-Checkbox-checkbox',
  checkmark: 'ms-Checkbox-checkmark',
  text: 'ms-Checkbox-text',
};

const MS_CHECKBOX_LABEL_SIZE = '20px';
const MS_CHECKBOX_TRANSITION_DURATION = '200ms';
const MS_CHECKBOX_TRANSITION_TIMING = 'cubic-bezier(.4, 0, .23, 1)';

const useRootStylesImpl = makeStyles<ICheckboxStyleProps, Theme>([
  [
    null,
    tokens => ({
      position: 'relative',
      display: 'flex',

      [`:hover .${GlobalClassNames.checkbox}`]: {
        borderColor: tokens.semanticColors.inputBorderHovered,
        // [HighContrastSelector]: {
        //   borderColor: 'Highlight',
        // },
      },
      [`:focus .${GlobalClassNames.checkbox}`]: { borderColor: tokens.semanticColors.inputBorderHovered },
      [`:hover .${GlobalClassNames.checkmark}`]: {
        color: tokens.palette.neutralSecondary,
        opacity: '1',
        // [HighContrastSelector]: {
        //   color: 'Highlight',
        // },
      },

      [`:hover .${GlobalClassNames.text}`]: {
        color: tokens.semanticColors.inputTextHovered,
        // [HighContrastSelector]: {
        //   color: disabled ? 'GrayText' : 'WindowText',
        // },
      },
      [`:focus .${GlobalClassNames.text}`]: {
        color: tokens.semanticColors.inputTextHovered,
        // [HighContrastSelector]: {
        //   color: disabled ? 'GrayText' : 'WindowText',
        // },
      },
    }),
  ],
  [
    s => s.checked,
    tokens => ({
      [`:hover .${GlobalClassNames.checkbox}`]: {
        background: tokens.semanticColors.inputBackgroundCheckedHovered,
        borderColor: tokens.semanticColors.inputBackgroundCheckedHovered,
      },
      [`:focus .${GlobalClassNames.checkbox}`]: {
        background: tokens.semanticColors.inputBackgroundCheckedHovered,
        borderColor: tokens.semanticColors.inputBackgroundCheckedHovered,
      },
      [HighContrastSelector]: {
        [`:hover .${GlobalClassNames.checkbox}`]: {
          background: 'Highlight',
          borderColor: 'Highlight',
        },
        [`:focus .${GlobalClassNames.checkbox}`]: {
          background: 'Highlight',
        },
        [`:focus:hover .${GlobalClassNames.checkbox}`]: {
          background: 'Highlight',
        },
        [`:focus:hover .${GlobalClassNames.checkmark}`]: {
          color: 'Window',
        },
        [`:hover .${GlobalClassNames.checkmark}`]: {
          color: 'Window',
        },
      },
    }),
  ],
  [
    s => s.indeterminate,
    tokens => ({
      [`:hover .${GlobalClassNames.checkbox}`]: {
        borderColor: tokens.semanticColors.inputBackgroundCheckedHovered,
        // [HighContrastSelector]: {
        //   borderColor: 'WindowText',
        // },
      },
      [`:hover .${GlobalClassNames.checkbox}::after`]: {
        borderColor: tokens.semanticColors.inputBackgroundCheckedHovered,
        // [HighContrastSelector]: {
        //   borderColor: 'WindowText',
        // },
      },
      [`:focus .${GlobalClassNames.checkbox}`]: {
        borderColor: tokens.semanticColors.inputBackgroundCheckedHovered,
      },
      [`:hover .${GlobalClassNames.checkmark}`]: {
        opacity: '0',
      },
    }),
  ],
]);

const useCheckmarkStylesImpl = makeStyles<ICheckboxStyleProps, Theme>([
  [
    null,
    tokens => {
      return {
        opacity: 0,
        color: tokens.semanticColors.inputForegroundChecked,
        [HighContrastSelector]: {
          color: 'Window',
          MsHighContrastAdjust: 'none',
        },
      };
    },
  ],
  [
    (selectors: ICheckboxStyleProps) => selectors.checked,
    {
      opacity: 1,
    },
  ],
  [
    (selectors: ICheckboxStyleProps) => selectors.disabled,
    {
      [HighContrastSelector]: {
        color: 'GrayText',
      },
    },
  ],
]);

const useInputStylesImpl = makeStyles<ICheckboxStyleProps, Theme>([
  [
    null,
    tokens => ({
      position: 'absolute',
      background: 'none',

      opacity: 0,
      [`.${IsFocusVisibleClassName} &:focus + label::before`]: {
        outline: '1px solid ' + tokens.palette.neutralSecondary,
        outlineOffset: '2px',
        [HighContrastSelector]: {
          outline: '1px solid ActiveBorder',
        },
      },
    }),
  ],
]);

const useTextStylesImpl = makeStyles<ICheckboxStyleProps, Theme>([
  [
    null,
    tokens => ({
      color: tokens.semanticColors.bodyText,
      fontSize: tokens.fonts.medium.fontSize,
      lineHeight: '20px',
      marginLeft: '4px',
      [HighContrastSelector]: {
        color: 'WindowText',
      },
      ...getEdgeChromiumNoHighContrastAdjustSelector(),
    }),
  ],
  [
    selectors => selectors.disabled,
    tokens => ({
      color: tokens.semanticColors.disabledText,
      [HighContrastSelector]: {
        color: 'GrayText',
      },
    }),
  ],
  [
    selectors => selectors.reversed,
    {
      marginRight: '4px',
    },
  ],
]);

const useLabelStylesImpl = makeStyles<ICheckboxStyleProps, Theme>([
  [
    null,
    tokens => ({
      fontSize: tokens.fonts.medium.fontSize,
      fontFamily: tokens.fonts.medium.fontFamily,
      fontWeight: tokens.fonts.medium.fontWeight,

      display: 'flex',
      alignItems: 'flex-start',
      cursor: 'pointer',
      position: 'relative',
      userSelect: 'none',

      '::before': {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        content: '""',
        pointerEvents: 'none',
      },
    }),
  ],
  [
    selectors => selectors.disabled,
    {
      cursor: 'default',
    },
  ],
  [
    selectors => selectors.isUsingCustomLabelRender,
    {
      alignItems: 'center',
    },
  ],
  [
    selectors => selectors.reversed,
    {
      flexDirection: 'row-reverse',
      justifyContent: 'flex-end',
    },
  ],
]);

const useCheckboxStylesImp = makeStyles<ICheckboxStyleProps, Theme>([
  [
    null,
    tokens => ({
      position: 'relative',
      display: 'flex',
      flexShrink: 0,
      alignItems: 'center',
      justifyContent: 'center',
      height: MS_CHECKBOX_LABEL_SIZE,
      width: MS_CHECKBOX_LABEL_SIZE,
      border: `1px solid ${tokens.palette.neutralPrimary}`,
      borderRadius: tokens.effects.roundedCorner2,
      boxSizing: 'border-box',
      transitionProperty: 'background, border, border-color',
      transitionDuration: MS_CHECKBOX_TRANSITION_DURATION,
      transitionTimingFunction: MS_CHECKBOX_TRANSITION_TIMING,

      /* in case the icon is bigger than the box */
      overflow: 'hidden',
      [HighContrastSelector]: {
        borderColor: 'WindowText',
      },
      ...getEdgeChromiumNoHighContrastAdjustSelector(),

      marginRight: '4px',
    }),
  ],
  [
    selectors => selectors.indeterminate && selectors.disabled,
    tokens => ({
      borderColor: tokens.semanticColors.disabledBodySubtext,
    }),
  ],
  [
    selectors => selectors.reversed,
    {
      marginLeft: '4px',
    },
  ],
  [
    selectors => selectors.checked && !selectors.indeterminate && !selectors.disabled,
    tokens => ({
      background: tokens.semanticColors.inputBackgroundChecked,
      borderColor: tokens.semanticColors.inputBackgroundChecked,
      [HighContrastSelector]: {
        background: 'Highlight',
        borderColor: 'Highlight',
      },
    }),
  ],
  [
    selectors => selectors.indeterminate,
    tokens => ({
      borderColor: tokens.semanticColors.inputBackgroundChecked,
      '::after': {
        // TODO: fix makeStyles
        content: '""',
        borderRadius: tokens.effects.roundedCorner2,
        position: 'absolute',
        width: 10,
        height: 10,
        top: 4,
        left: 4,
        boxSizing: 'border-box',
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: tokens.semanticColors.inputBackgroundChecked,
        transitionProperty: 'border-width, border, border-color',
        transitionDuration: MS_CHECKBOX_TRANSITION_DURATION,
        transitionTimingFunction: MS_CHECKBOX_TRANSITION_TIMING,
        // [HighContrastSelector]: {
        //   borderColor: 'WindowText',
        // },
      },
    }),
  ],
  [
    selectors => selectors.disabled,
    tokens => ({
      borderColor: tokens.semanticColors.disabledBodySubtext,
      [HighContrastSelector]: {
        borderColor: 'GrayText',
      },
    }),
  ],
  [
    selectors => selectors.disabled && selectors.checked,
    tokens => ({
      background: tokens.semanticColors.disabledBodySubtext,
      borderColor: tokens.semanticColors.disabledBodySubtext,
      [HighContrastSelector]: {
        background: 'Window',
      },
    }),
  ],
]);

const renderer = createDOMRenderer();

export const useStyles = (props: ICheckboxStyleProps) => {
  const tokens = useTheme();

  return {
    root: useRootStylesImpl(props, { renderer, tokens }, GlobalClassNames.root),
    checkmark: useCheckmarkStylesImpl(props, { renderer, tokens }, GlobalClassNames.checkmark),
    input: useInputStylesImpl(props, { renderer, tokens }),
    text: useTextStylesImpl(props, { renderer, tokens }, GlobalClassNames.text),
    checkbox: useCheckboxStylesImp(props, { renderer, tokens }, GlobalClassNames.checkbox),
    label: useLabelStylesImpl(props, { renderer, tokens }, GlobalClassNames.label),
  };
};
