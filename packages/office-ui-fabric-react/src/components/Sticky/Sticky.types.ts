import * as React from 'react';
import { Sticky } from './Sticky';
import { IRefObject } from '../../Utilities';

export interface IStickyProps extends React.Props<Sticky> {
  /**
   * Gets ref to component interface.
   */
  componentRef?: IRefObject<IStickyProps>;

  /**
   * Class name to apply to the sticky element if component is sticky.
   */
  stickyClassName?: string;

  /**
   * color to apply as 'background-color' style for sticky element.
   */
  stickyBackgroundColor?: string;

  /**
   * Region to render sticky component in.
   * @defaultvalue Both
   */
  stickyPosition?: StickyPositionType;

  /**
   * If true, then match scrolling position of placeholder element in Sticky.
   * @defaultvalue true
   */
  isScrollSynced?: boolean;

  /**
   * It decides the order (top to bottom) in which a Sticky element will be arranged when it is sticky,
   * compared to other Sticky elements when they are sticky. When Sticky elements become sticky,
   * they are sorted in ascending order based on this prop.
   */
  order?: number;
}

export enum StickyPositionType {
  Both = 0,
  Header = 1,
  Footer = 2
}
