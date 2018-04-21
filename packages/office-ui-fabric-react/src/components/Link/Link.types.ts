import * as React from 'react';
import { LinkBase } from './Link.base';

import {
  IStyle,
  ITheme
} from '../../Styling';
import { IStyleFunction } from '../../Utilities';

export interface ILink {
  /** Sets focus to the link. */
  focus(): void;
}

export interface ILinkProps extends React.AllHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLElement | LinkBase> {
  /**
   * Optional callback to access the ILink interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: (component: ILink | null) => void;

  /**
   * Whether the link is disabled
   */
  disabled?: boolean;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  getStyles?: IStyleFunction<ILinkStyleProps, ILinkStyles>;

  /**
   * Theme (provided through customization.)
   */
  theme?: ITheme;

  /**
   * Provide an html tag name (one of 'span' | 'a' | 'button' | 'div') to use as the tag
   * returned from the Link component.
   */
  renderAs?: string | React.ComponentClass | React.StatelessComponent;
}

export interface ILinkStyleProps {
  className?: string;
  isButton?: boolean;
  isDisabled?: boolean;
  theme: ITheme;
}

export interface ILinkStyles {
  root: IStyle;
}