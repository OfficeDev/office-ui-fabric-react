import { IStyle } from 'office-ui-fabric-react/lib/Styling';

/**
 * Props for Image Visualization component
 */
export interface IImageVisualizationProps {
  /**
   * Image source that needs to be rendered
   *
   * @type {string}
   * @memberof IImageVisualizationProps
   */
  imageVisualizationSrc?: string;

  /**
   * Alt text to be displayed
   *
   * @type {string}
   * @memberof IImageVisualizationProps
   */
  imageAltText?: string;
}

/**
 * Styles for Image Visualization
 */
export interface IImageVisualizationStyles {
  /**
   * Style for Image Illustration container
   */
  imageIllustrationContainerStyle: IStyle;

  /**
   * Style for ImageIllustration
   */
  imageIllustrationStyle: IStyle;
}
