import * as React from 'react';
import { ChicletCardBase } from './ChicletCard.base';
import { ITheme, IStyle } from '../../Styling';
import { IStyleFunction } from '../../Utilities';

export interface IChicletCard {

}

export interface IChicletCardStyles {
  /**
   * Style for the root element.
   */
  root?: IStyle;

  /**
   * Style for the icon that overlays the file preview image.
   */
  icon?: IStyle;

  /**
   * Style for the file preview image.
   */
  preview?: IStyle;

  /**
   * Style for preview information about the file, such as title and link.
   */
  info?: IStyle;

  /**
   * Style for the title of the file.
   */
  title?: IStyle;

  /**
   * Style for the link to the file.
   */
  link?: IStyle;
}

export interface IChicletCardProps extends React.Props<ChicletCardBase> {
  /**
   * Optional callback to access the IChicletCard interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: (component: IChicletCard | null) => void;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  getStyles?: IStyleFunction<IChicletCardStyleProps, IChicletCardStyles>;

  /**
   * Optional class for ChicletCard.
   */
  className?: string;

  /**
   * Function to call when the card is clicked.
   */
  onClick?: (ev?: React.MouseEvent<HTMLElement>) => void;

  /**
   * Footer to render for the component.
   */
  footer?: React.ReactElement<any>;

  /**
   * Theme for the component.
   */
  theme?: ITheme;

  /**
   * OpenGraph props.
   */
  title?: string;
  openGraphType?: string;
  description?: string;
  image?: string;
  imageSecureUrl?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageType?: string;
  imageAlt?: string;
  url?: string;
}

export interface IChicletCardStyleProps {
  /**
   * Accept theme prop.
   */
  theme?: ITheme;

  /**
   * Accept custom classNames
   */
  className?: string;
}