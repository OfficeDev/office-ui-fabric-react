import * as React from 'react';
import { getGlobalClassNames, ITheme } from '../../Styling';
import { css, memoizeFunction, styled } from '../../Utilities';
import { ToggleBase } from './Toggle.base';
import { IToggleProps, IToggleStyleProps, IToggleStyles } from './Toggle.types';
import * as classes from './Toggle.scss';

const GlobalClassNames = {
  root: 'ms-Toggle',
  label: 'ms-Toggle-label',
  container: 'ms-Toggle-innerContainer',
  pill: 'ms-Toggle-background',
  thumb: 'ms-Toggle-thumb',
  text: 'ms-Toggle-stateText',
};

const getStaticStylesMemoized = memoizeFunction(
  (
    theme: ITheme,
    className?: string,
    checked?: boolean,
    disabled?: boolean,
    inlineLabel?: boolean,
    onOffMissing?: boolean,
  ) => {
    const globalClassNames = getGlobalClassNames(GlobalClassNames, theme);

    const propControlledClasses = [
      checked && classes.checked,
      disabled && classes.disabled,
      inlineLabel && classes.inlineLabel,
      onOffMissing && classes.onOffMissing,
    ];

    const rootStaticClasses = [checked && 'is-checked', !disabled && 'is-enabled', disabled && 'is-disabled'];

    return {
      root: css(className, classes.root, globalClassNames.root, ...rootStaticClasses, ...propControlledClasses),
      label: css(classes.label, globalClassNames.label, ...propControlledClasses),
      container: css(classes.container, globalClassNames.container, ...propControlledClasses),
      pill: css(classes.pill, globalClassNames.pill, ...propControlledClasses),
      thumb: css(classes.thumb, globalClassNames.thumb, ...propControlledClasses),
      text: css(classes.text, globalClassNames.text, ...propControlledClasses),
    };
  },
);

const getStaticStyles = (props: IToggleStyleProps): Required<IToggleStyles> => {
  const { className, checked, disabled, inlineLabel, onOffMissing, theme } = props;

  return getStaticStylesMemoized(theme!, className, checked, disabled, inlineLabel, onOffMissing);
};

export const Toggle: React.FunctionComponent<IToggleProps> = styled<IToggleProps, IToggleStyleProps, IToggleStyles>(
  ToggleBase,
  getStaticStyles,
  undefined,
  { scope: 'Toggle' },
);
