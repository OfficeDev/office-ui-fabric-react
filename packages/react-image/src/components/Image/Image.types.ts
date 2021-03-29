import * as React from 'react';
import { ComponentProps } from '@fluentui/react-utilities';

export interface ImageProps extends ComponentProps, React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * An alternative text for an image.
   */
  alt?: string;

  /**
   * An image can appear with rectangular border.
   * @default false
   */
  bordered?: boolean;

  /**
   * An image can set how it should be resized to fit its container.
   * @default 'none'
   */
  fit?: 'none' | 'center' | 'contain' | 'cover';

  /**
   * An image can take up the width of its container.
   * @default false
   */
  fluid?: boolean;

  /**
   * An image can appear circular.
   * @default false
   */
  circular?: boolean;

  /**
   * An image can appear rounded.
   * @default false
   */
  rounded?: boolean;

  /**
   * An image can have source URL.
   */
  src?: string;
}

export interface ImageState extends ImageProps {
  ref: React.RefObject<HTMLImageElement>;
}
