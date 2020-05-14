import * as React from 'react';
import { styled, css, memoizeFunction } from '../../Utilities';
import { ISliderProps, ISliderStyleProps, ISliderStyles } from './Slider.types';
import { SliderBase } from './Slider.base';
import { getGlobalClassNames, ITheme } from '../../Styling';
import * as classes from './Slider.scss';

const GlobalClassNames = {
  root: 'ms-Slider',
  enabled: 'ms-Slider-enabled',
  disabled: 'ms-Slider-disabled',
  row: 'ms-Slider-row',
  column: 'ms-Slider-column',
  container: 'ms-Slider-container',
  slideBox: 'ms-Slider-slideBox',
  line: 'ms-Slider-line',
  thumb: 'ms-Slider-thumb',
  activeSection: 'ms-Slider-active',
  inactiveSection: 'ms-Slider-inactive',
  valueLabel: 'ms-Slider-value',
  showValue: 'ms-Slider-showValue',
  showTransitions: 'ms-Slider-showTransitions',
  zeroTick: 'ms-Slider-zeroTick',
};

const getStaticStylesMemoized = memoizeFunction(
  (
    theme: ITheme,
    className: string | undefined,
    disabled: boolean | undefined,
    vertical: boolean | undefined,
    titleLabelClassName: string | undefined,
    showTransition: boolean | undefined,
    showValue: boolean | undefined,
  ) => {
    const globalClassNames = getGlobalClassNames(GlobalClassNames, theme);

    const propControlledClasses = [
      disabled && classes.disabled,
      vertical && classes.vertical,
      disabled ? globalClassNames.disabled : globalClassNames.enabled,
      vertical ? globalClassNames.column : globalClassNames.row,
      showTransition && classes.showTransitions,
      showValue && globalClassNames.showValue,
    ];

    // const rootStaticClasses = [
    //   reversed && 'reversed',
    //   checked && 'is-checked',
    //   !disabled && 'is-enabled',
    //   disabled && 'is-disabled',
    // ];

    return {
      root: css(className, classes.root, globalClassNames.root, ...propControlledClasses),
      container: css(classes.container, globalClassNames.container, ...propControlledClasses),
      slideBox: css(classes.slideBox, globalClassNames.slideBox, ...propControlledClasses),
      line: css(classes.line, globalClassNames.line, ...propControlledClasses),
      thumb: css(classes.thumb, globalClassNames.thumb, ...propControlledClasses),
      activeSection: css(classes.activeSection, globalClassNames.activeSection, ...propControlledClasses),
      inactiveSection: css(classes.inactiveSection, globalClassNames.inactiveSection, ...propControlledClasses),
      lineContainer: css(classes.lineContainer, ...propControlledClasses),
      valueLabel: css(classes.valueLabel, globalClassNames.valueLabel, ...propControlledClasses),
      titleLabel: css(classes.titleLabel, titleLabelClassName, ...propControlledClasses),
      showTransitions: css(classes.showTransitions, globalClassNames.showTransitions, ...propControlledClasses),
      zeroTick: css(classes.zeroTick, globalClassNames.zeroTick, ...propControlledClasses),
    };
  },
);

const getStaticStyles = (props: ISliderStyleProps): Required<ISliderStyles> => {
  const { className, titleLabelClassName, theme, vertical, disabled, showTransitions, showValue } = props;
  return getStaticStylesMemoized(theme, className, disabled, vertical, titleLabelClassName, showTransitions, showValue);
};

export const Slider: React.FunctionComponent<ISliderProps> = styled<ISliderProps, ISliderStyleProps, ISliderStyles>(
  SliderBase,
  getStaticStyles,
  undefined,
  {
    scope: 'Slider',
  },
);
