import * as React from 'react';
import { ComponentProps, ShorthandProps, ObjectShorthandProps } from '@fluentui/react-utilities';

/**
 * {@docCategory Badge}
 */
export type BadgeSize = 'smallest' | 'smaller' | 'small' | 'medium' | 'large' | 'larger' | 'largest';

/**
 * {@docCategory Badge}
 */
export type BadgeAppearance = 'filled' | 'outline' | 'ghost' | 'tint';

/**
 * {@docCategory Badge}
 */
export type BadgeShape = 'rounded' | 'square' | 'circular';

/**
 * {@docCategory Badge}
 */
export interface BadgeProps extends ComponentProps, React.HTMLAttributes<HTMLElement> {
  /**
   * A Badge can be sized.
   * @defaultvalue medium
   */
  size?: BadgeSize;

  /**
   * A Badge can be square, circular or rounded
   * @defaultvalue circular
   */
  shape?: BadgeShape;

  /**
   * A Badge can be filled, outline, ghost, inverted
   * @defaultvalue filled
   */
  appearance?: BadgeAppearance;

  /**
   * Icon slot
   */
  icon?: ShorthandProps<HTMLElement>;

  /**
   * Position for Icon to be rendered
   * @defaultvalue before
   */
  iconPosition?: 'before' | 'after';
}

/**
 * {@docCategory Badge}
 */
export interface BadgeState extends BadgeProps {
  /**
   * Ref to the root slot
   */
  ref: React.MutableRefObject<HTMLElement>;
  /**
   * Icon slot when processed by internal state
   */
  icon?: ObjectShorthandProps<HTMLSpanElement>;
}
