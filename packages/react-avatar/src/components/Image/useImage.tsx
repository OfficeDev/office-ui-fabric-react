import * as React from 'react';
import { ImageProps, ImageState } from './Image.types';
import { makeMergeProps } from '@fluentui/react-utilities';
import { renderImage } from './renderImage';

const mergeProps = makeMergeProps<ImageState>();

export const useImage = (props: ImageProps, ref: React.Ref<HTMLElement>, defaultProps?: ImageProps) => {
  const state = mergeProps(
    {
      as: 'img',
      ref,
    },
    defaultProps,
    props,
    {
      src: props.src || (props.children as string),
      children: null,
    },
  );

  return { state, render: renderImage };
};
