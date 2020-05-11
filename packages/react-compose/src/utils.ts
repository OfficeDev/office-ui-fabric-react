import * as React from 'react';
import * as ReactIs from 'react-is';
import cx from 'classnames';

import { ComposedComponent, ComposeOptions, ComposePreparedOptions, Input, ClassDictionary } from './types';

/**
 * Given input/parent options, which are both assumed to be defined and populated with
 * displayNames array, return a string array of display names.
 */
function computeDisplayNames(inputOptions: ComposeOptions, parentOptions: ComposePreparedOptions): string[] {
  if (inputOptions.overrideStyles) {
    return [inputOptions.displayName].filter(Boolean) as string[];
  }

  // To support styles composition we need to properly pick up display names
  return inputOptions.displayName
    ? parentOptions.displayNames.concat(inputOptions.displayName)
    : parentOptions.displayNames;
}

export const defaultComposeOptions: ComposePreparedOptions = {
  className: process.env.NODE_ENV === 'production' ? '' : 'no-classname-🙉',
  classes: {},
  displayName: '',
  displayNames: [],

  mapPropsToStylesPropsChain: [],
  render: () => null,

  handledProps: [] as never[],
  overrideStyles: false,
  slots: {},
  mapPropsToSlotPropsChain: [],
  resolveSlotProps: () => ({}),
};

const mergeClasses = (classes1: ClassDictionary, classes2: ClassDictionary) => {
  const result = { ...classes1 };

  if (classes2) {
    Object.keys(classes2).forEach(name => (result[name] = cx(result[name], classes2[name])));
  }
  console.log(result);
  return result;
};

export function mergeComposeOptions(
  input: Input,
  inputOptions: ComposeOptions,
  parentOptions: ComposePreparedOptions = defaultComposeOptions,
): ComposePreparedOptions {
  //
  const mapPropsToSlotPropsChain = inputOptions.mapPropsToSlotProps
    ? [...parentOptions.mapPropsToSlotPropsChain, inputOptions.mapPropsToSlotProps]
    : parentOptions.mapPropsToSlotPropsChain;

  const resolveSlotProps = <P = {}>(props: P) =>
    mapPropsToSlotPropsChain.reduce<Record<string, object>>((acc, definition) => {
      const nextProps = { ...definition(props) };
      const slots: string[] = [...Object.keys(acc), ...Object.keys(nextProps)];
      const mergedSlotProps: Record<string, object> = {};

      slots.forEach(slot => {
        if (!mergedSlotProps[slot]) {
          mergedSlotProps[slot] = {
            ...acc[slot],
            ...nextProps[slot],
          };
        }
      });

      return mergedSlotProps;
    }, {});

  return {
    className: inputOptions.className || parentOptions.className,
    classes: mergeClasses(parentOptions.classes, inputOptions.classes),

    displayName: inputOptions.displayName || parentOptions.displayName,
    displayNames: computeDisplayNames(inputOptions, parentOptions),

    mapPropsToStylesPropsChain: inputOptions.mapPropsToStylesProps
      ? [...parentOptions.mapPropsToStylesPropsChain, inputOptions.mapPropsToStylesProps]
      : parentOptions.mapPropsToStylesPropsChain,
    render: typeof input === 'function' ? input : parentOptions.render,

    handledProps: [...parentOptions.handledProps, ...((inputOptions.handledProps as never[]) || ([] as never[]))],
    overrideStyles: inputOptions.overrideStyles || false,

    slots: {
      ...parentOptions.slots,
      ...inputOptions.slots,
    },
    mapPropsToSlotPropsChain,
    resolveSlotProps,
  };
}

/**
 * compose() allows you to pass two inputs:
 * - React.forwardRef + static fluentComposeConfig, i.e. previously composed component
 * - a function
 */
export function wasComposedPreviously<T extends React.ElementType = 'div', P = {}>(
  input: Input<T, P>,
): input is ComposedComponent<P> {
  const isForwardRef: boolean = (input as React.ExoticComponent).$$typeof === ReactIs.ForwardRef;

  return isForwardRef && !!(input as ComposedComponent<P>).fluentComposeConfig;
}
