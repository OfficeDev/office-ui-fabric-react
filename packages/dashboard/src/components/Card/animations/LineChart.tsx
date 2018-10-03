import * as React from 'react';

import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

import { getStyles } from './LineChart.style';

export interface ILineChartProps {}

// const classNames = getClassNames(getStyles!, {});

export class LineChart extends React.Component<ILineChartProps> {
  constructor(props: ILineChartProps) {
    super(props);
  }

  public render(): JSX.Element {
    const lineChartLoadingClassName = mergeStyles(getStyles().lineChartLoading);
    const lineChartLoadingSegmentClassName = mergeStyles(getStyles().lineChartLoadingSegment);
    const firstSegmentClassName = mergeStyles(
      getStyles().lineChartLoadingSegment,
      getStyles().lineChartLoadingSegmentFirst,
      getStyles().lineChartLoadingSegmentAnimation
    );
    const secondSegmentClassName = mergeStyles(
      getStyles().lineChartLoadingSegment,
      getStyles().lineChartLoadingSegmentSecond,
      getStyles().lineChartLoadingSegmentAnimation
    );

    return (
      <svg className={lineChartLoadingClassName} viewBox="0 0 172.5 118.5">
        <g>
          <path className={lineChartLoadingSegmentClassName} d="M26.5 46.3 L49.9 68.8 L71.5 58 L98.1 27.7 L123.5 50 L147.4 50" />
          <path className={firstSegmentClassName} d="M26.5 46.3 L49.9 68.8 L71.5 58 L98.1 27.7 L123.5 50 L147.4 50" />
        </g>
        <g>
          <path className={lineChartLoadingSegmentClassName} d="M23.6 61.9 L48.1 55.2 L72.9 37.1 L100 45.8 L124 70.8 L148.3 78" />
          <path className={secondSegmentClassName} d="M23.6 61.9 L48.1 55.2 L72.9 37.1 L100 45.8 L124 70.8 L148.3 78" />
        </g>
      </svg>
    );
  }
}
