/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import { Link } from './Link';

import {
  IStyle,
  ITheme
} from '../../Styling';
import { IStyleFunction } from '../../Utilities';

export interface ILink {
  /** Sets focus to the link. */
  focus(): void;
}

// @todo: Try to add Link back in here
export interface ILinkProps extends React.AllHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLElement> {
  /**
   * Optional callback to access the ILink interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: (component: ILink) => void;

  /**
   * Whether the link is disabled
   */
  disabled?: boolean;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  getStyles?: IStyleFunction<ILinkProps, ILinkStyles>;

  /**
   * Theme (provided through customization.)
   */
  theme?: ITheme;
}

export interface ILinkStyleProps {
  disabled?: boolean;
  theme: ITheme;
}

export interface ILinkStyles {
  root: IStyle;
}