import { IStyle, ITheme } from '../../Styling';
import { IRefObject, IStyleFunctionOrObject } from '../../Utilities';
import { DocumentCardLocationBase } from './DocumentCardLocation.base';

/**
 * {@docCategory DocumentCard}
 */
export interface IDocumentCardLocation {}

/**
 * {@docCategory DocumentCard}
 */
export interface IDocumentCardLocationProps extends React.ClassAttributes<DocumentCardLocationBase> {
  /**
   * Gets the component ref.
   */
  componentRef?: IRefObject<IDocumentCardLocation>;

  /**
   * Text for the location of the document.
   */
  location: string;

  /**
   * URL to navigate to for this location.
   */
  locationHref?: string;

  /**
   * Function to call when the location is clicked.
   */
  onClick?: (ev?: React.MouseEvent<HTMLElement>) => void;

  /**
   * Aria label for the link to the document location.
   */
  ariaLabel?: string;

  /**
   * Call to provide customized styling that will layer on top of the variant rules
   */
  styles?: IStyleFunctionOrObject<IDocumentCardLocationStyleProps, IDocumentCardLocationStyles>;

  /**
   * Theme provided by HOC.
   */
  theme?: ITheme;

  /**
   * Optional override class name
   */
  className?: string;
}

/**
 * {@docCategory DocumentCard}
 */
export interface IDocumentCardLocationStyleProps {
  /**
   * Accept theme prop.
   */
  theme: ITheme;

  /**
   * Optional override class name
   */
  className?: string;
}

/**
 * {@docCategory DocumentCard}
 */
export interface IDocumentCardLocationStyles {
  root: IStyle;
}
