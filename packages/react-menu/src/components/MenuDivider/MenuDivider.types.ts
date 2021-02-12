import * as React from 'react';
import { ComponentProps } from '@fluentui/react-utils';

/**
 * {@docCategory MenuDivider}
 */
export type MenuDividerProps = ComponentProps & React.HTMLAttributes<HTMLElement> & {};

/**
 * {@docCategory MenuDivider}
 */
export interface MenuDividerState extends MenuDividerProps {
  ref: React.MutableRefObject<HTMLElement>;
}
