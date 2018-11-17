import { IToggleComponent, IToggleStyles, IToggleStyleVariablesTypes } from './Toggle.types';
import { getFocusStyle, getGlobalClassNames, HighContrastSelector, concatStyleSets } from '../../Styling';
import { merge } from '../../Utilities';

const GlobalClassNames = {
  root: 'ms-Toggle',
  label: 'ms-Toggle-label',
  container: 'ms-Toggle-innerContainer',
  pill: 'ms-Toggle-background',
  thumb: 'ms-Toggle-thumb',
  text: 'ms-Toggle-stateText'
};

export const ToggleStyles: IToggleComponent['styles'] = props => {
  const { theme, className, disabled, checked, styleVariables } = props;
  const { semanticColors } = theme;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  const toggleVariables = _processVariables({
    baseState: {},

    enabled: {
      pillBackground: semanticColors.bodyBackground,
      pillBorderColor: semanticColors.smallInputBorder,
      pillHoveredBorderColor: semanticColors.inputBorderHovered,
      pillHighContrastBorderColor: 'Highlight',
      pillHighContrastHoveredBorderColor: 'Highlight',

      thumbBackground: semanticColors.inputBorderHovered
    },

    disabled: {
      pillBackground: semanticColors.bodyBackground,
      pillBorderColor: semanticColors.disabledBodyText,

      thumbBackground: semanticColors.disabledBodyText,

      textColor: semanticColors.disabledText,
      textHighContrastColor: 'GrayText'
    },

    checked: {
      pillBackground: semanticColors.inputBackgroundChecked,
      pillHoveredBackground: semanticColors.inputBackgroundCheckedHovered,
      pillBorderColor: 'transparent',
      pillHoveredBorderColor: 'transparent',
      pillJustifyContent: 'flex-end' as IToggleStyleVariablesTypes['pillJustifyContent'],
      pillHighContrastBackground: 'WindowText',
      pillHighContrastHoveredBackground: 'Highlight',
      pillHighContrastBorderColor: 'Highlight',

      thumbBackground: semanticColors.inputForegroundChecked,
      thumbHighContrastBackground: 'Window',
      thumbHighContrastBorderColor: 'Window'
    },

    checkedDisabled: {
      pillBackground: semanticColors.disabledBodyText,
      pillBorderColor: 'transparent',
      pillJustifyContent: 'flex-end' as IToggleStyleVariablesTypes['pillJustifyContent'],

      thumbBackground: semanticColors.disabledBackground,

      textColor: semanticColors.disabledText,
      textHighContrastColor: 'GrayText'
    },

    styleVariables
  });

  function getToggleStylesFromState(state: IToggleStyleVariablesTypes): Partial<IToggleStyles> {
    if (state) {
      return {
        root: [
          classNames.root,
          checked && 'is-checked',
          !disabled && 'is-enabled',
          disabled && 'is-disabled',
          theme.fonts.medium,
          {
            marginBottom: '8px'
          },
          className
        ],

        label: [
          classNames.label,
          {
            color: state.textColor,
            selectors: {
              [HighContrastSelector]: {
                color: state.textHighContrastColor
              }
            }
          }
        ],

        container: [
          classNames.container,
          {
            display: 'inline-flex',
            position: 'relative'
          }
        ],

        pill: [
          classNames.pill,
          getFocusStyle(theme, -3),
          {
            fontSize: '20px',
            boxSizing: 'border-box',
            width: '2.2em',
            height: '1em',
            borderRadius: '1em',
            transition: 'all 0.1s ease',
            borderWidth: '1px',
            borderStyle: 'solid',
            background: state.pillBackground,
            borderColor: state.pillBorderColor,
            justifyContent: state.pillJustifyContent,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '0 .2em',
            selectors: {
              ':hover': [
                {
                  backgroundColor: state.pillHoveredBackground,
                  borderColor: state.pillHoveredBorderColor,
                  selectors: {
                    [HighContrastSelector]: {
                      backgroundColor: state.pillHighContrastHoveredBackground
                    }
                  }
                }
              ],
              ':hover .ms-Toggle-thumb': [
                {
                  selectors: {
                    [HighContrastSelector]: {
                      borderColor: state.pillHighContrastHoveredBorderColor
                    }
                  }
                }
              ],
              [HighContrastSelector]: {
                backgroundColor: state.pillHighContrastBackground
              },
              '&:hover': {
                selectors: {
                  [HighContrastSelector]: {
                    borderColor: state.pillHighContrastBorderColor
                  }
                }
              }
            }
          }
        ],

        thumb: [
          classNames.thumb,
          {
            width: '.5em',
            height: '.5em',
            borderRadius: '.5em',
            transition: 'all 0.1s ease',
            backgroundColor: state.thumbBackground,
            /* Border is added to handle high contrast mode for Firefox */
            borderColor: 'transparent',
            borderWidth: '.28em',
            borderStyle: 'solid',
            boxSizing: 'border-box',
            selectors: {
              [HighContrastSelector]: {
                backgroundColor: state.thumbHighContrastBackground,
                borderColor: state.thumbHighContrastBorderColor
              }
            }
          }
        ],

        text: [
          classNames.text,
          {
            selectors: {
              // Workaround: make rules more sepecific than Label rules.
              '&&': {
                color: state.textColor,
                padding: '0',
                margin: '0 10px',
                userSelect: 'none',
                selectors: {
                  [HighContrastSelector]: {
                    color: state.textHighContrastColor
                  }
                }
              }
            }
          }
        ]
      };
    }

    // No state
    return {};
  }

  function getToggleStylesFromVariant(): Partial<IToggleStyles> {
    return concatStyleSets(
      getToggleStylesFromState(toggleVariables.baseState),
      !disabled && !checked && getToggleStylesFromState(toggleVariables.enabled),
      disabled && !checked && getToggleStylesFromState(toggleVariables.disabled),
      !disabled && checked && getToggleStylesFromState(toggleVariables.checked),
      disabled && checked && getToggleStylesFromState(toggleVariables.checkedDisabled)
    );
  }

  return concatStyleSets({ root: getFocusStyle(theme) }, getToggleStylesFromVariant(), { root: className });
};

type IProcessedVariables<T> = { [P in keyof T]-?: IProcessedVariables<T[P]> };

function _processVariables<T>(partialVariables: T, customVariables?: T): IProcessedVariables<T> {
  // tslint:disable-next-line:no-any
  const result = customVariables ? merge({}, partialVariables, customVariables) : partialVariables;

  return result as IProcessedVariables<T>;
}
