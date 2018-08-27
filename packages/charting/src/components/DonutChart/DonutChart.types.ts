import { ITheme, IStyle } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities';

export interface IDonutChart {}
import { IChartProps } from './index';

export interface IDonutChartProps {
  /**
   * Data to render in the chart.
   */
  data?: IChartProps;

  /**
   * Width of the donut.
   */
  width?: number;

  /**
   * Height of the donut.
   */
  height?: number;

  /**
   * Additional CSS class(es) to apply to the DonutChart.
   */
  className?: string;

  /**
   * inner radius for donut size
   */
  innerRadius?: number;

  /**
   * Theme (provided through customization.)
   */
  theme?: ITheme;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<IDonutChartStyleProps, IDonutChartStyles>;

  /**
   * Width of line stroke
   */
  strokeWidth?: number;
}

export type IDonutChartStyleProps = Required<Pick<IDonutChartProps, 'theme' | 'width' | 'height'>> &
  Pick<IDonutChartProps, 'className'>;

export interface IDonutChartStyles {
  /**
   *  Style for the root element.
   */
  root?: IStyle;

  /**
   * Style for the chart.
   */
  chart?: IStyle;

  /**
   * Style set for the Pie component Legend
   */
  legend: IStyle;

  /**
   * Style set for each legend item
   */
  legendItem: IStyle;

  /**
   * Style set for the colored box in each legend item
   */
  legendBox: IStyle;

  legendContainer: {
    paddingTop: '4px';
  };
  hover: IStyle;
}
