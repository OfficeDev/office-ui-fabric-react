/* eslint-disable @typescript-eslint/naming-convention */
import { makeClasses } from '@fluentui/react-theme-provider';

const GlobalClassNames = {
  button: 'ms-SplitButton-button',
  menuButton: 'ms-SplitButton-menuButton',
};

// TODO: move this to a token.
const menuButtonWidth = '32px';

export const useSplitButtonClasses = makeClasses({
  root: {
    display: 'inline-flex',
    justifyContent: 'stretch',
    position: 'relative',
  },

  button: [
    GlobalClassNames.button,
    {
      '--button-borderRightWidth': 0,
      '--button-borderTopRightRadius': 0,
      '--button-borderBottomRightRadius': 0,
    },
  ],

  menuButton: [
    GlobalClassNames.menuButton,
    {
      '--button-borderLeftWidth': 0,
      '--button-borderTopLeftRadius': 0,
      '--button-borderBottomLeftRadius': 0,
      '--button-width': menuButtonWidth,
      '--button-paddingLeft': 0,
      '--button-paddingRight': 0,
    },
  ],

  divider: {
    width: 'var(--button-dividerThickness)',
    backgroundColor: 'var(--button-dividerColor)',
    position: 'absolute',
    right: menuButtonWidth,
    top: 'calc(100% - var(--button-dividerLength, 100% + 8px))',
    bottom: 'calc(100% - var(--button-dividerLength, 100% + 8px))',
  },

  _fluid: {
    width: '100%',
    maxWidth: '100%',

    [`.${GlobalClassNames.button}`]: {
      flexGrow: 1,
    },

    [`.${GlobalClassNames.menuButton}`]: {
      width: menuButtonWidth,
    },
  },
});
