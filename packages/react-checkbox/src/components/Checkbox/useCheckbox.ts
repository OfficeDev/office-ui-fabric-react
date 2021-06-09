import * as React from 'react';
import { makeMergeProps, resolveShorthandProps } from '@fluentui/react-utilities';
import { CheckboxProps, CheckboxShorthandProps, CheckboxState } from './Checkbox.types';
import { Label } from '@fluentui/react-label';

/**
 * Array of all shorthand properties listed in CheckboxShorthandProps
 */
export const checkboxShorthandProps: CheckboxShorthandProps[] = ['label'];

const mergeProps = makeMergeProps<CheckboxState>({ deepMerge: checkboxShorthandProps });

/**
 * Create the state required to render Checkbox.
 *
 * The returned state can be modified with hooks such as useCheckboxStyles,
 * before being passed to renderCheckbox.
 *
 * @param props - props from this instance of Checkbox
 * @param ref - reference to root HTMLElement of Checkbox
 * @param defaultProps - (optional) default prop values provided by the implementing type
 */
export const useCheckbox = (
  props: CheckboxProps,
  ref: React.Ref<HTMLElement>,
  defaultProps?: CheckboxProps,
): CheckboxState => {
  const state = mergeProps(
    {
      ref,
      label: {
        as: Label,
        size: props.size,
      },
      size: 'medium',
      labelPosition: 'end',
    },
    defaultProps && resolveShorthandProps(defaultProps, checkboxShorthandProps),
    resolveShorthandProps(props, checkboxShorthandProps),
  );

  return state;
};
