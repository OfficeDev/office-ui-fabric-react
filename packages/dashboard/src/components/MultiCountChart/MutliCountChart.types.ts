import { IStyle } from 'office-ui-fabric-react/lib/Styling';

export interface IMultiCountChartProps {
  /**
   * rows of Multicount Dataviz
   */
  multiCountRows: IMultiCountRow[];
}

export enum AnnotationType {
  /**
   * Indicate a positive change, displays a up arrow
   */
  positive,

  /**
   * Indicate no change, no icon is displayed
   */
  nuetral,

  /**
   * Indicate a negative change, displays a down arrow
   */
  negative
}

export interface IMultiCountStyleProps {
  color: string;
  iconName: string;
}

export interface IMultiCountRow {
  /**
   *The numeric data to be displayed
   */
  data: number;

  /**
   *Description text for the row
   */
  bodyText: string;

  /**
   *annotation text for the row
   */
  annotaionText?: string;

  /**
   *Color of the numeric data passed
   */
  color: string;

  /**
   *Indicates the whether the change for data is positive, negative or nuetral
   */
  type: AnnotationType;
}

export interface IMultiCountChartStyles {
  /**
   * Style for the root element
   */
  root: IStyle;

  /**
   * Style for bodyText
   */
  bodyText: IStyle;

  /**
   * Style for annotaion text and the change icon
   */
  annotation: IStyle;

  /**
   * Style for numeric data
   */
  data: IStyle;

  /**
   * Style for annotationText
   */
  annotationText: IStyle;

  /**
   * Style for icon
   */
  icon: IStyle;
}
