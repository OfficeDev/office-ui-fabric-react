import * as React from 'react';
import { IDataPoint, ILegendDataItem } from '@uifabric/charting';
import { Card, CardContentType, CardSize, ChartType, ICardProps, Priority } from '@uifabric/dashboard';
import { DefaultPalette } from 'office-ui-fabric-react/lib/Styling';

export class StackedBarChartExample extends React.Component<{}, {}> {
  constructor(props: ICardProps) {
    super(props);
  }

  public render(): JSX.Element {
    const cardFrameContent = {
      cardTitle: 'Stacked bar chart example',
      cardDropDownOptions: [
        {
          key: 'Remove',
          name: 'Remove',
          icon: 'PageRemove',
          ariaLabel: 'Remove card',
          title: 'Remove card',
          onClick: () => {
            alert('Remove clicked');
          }
        }
      ]
    };

    const points: IDataPoint[] = [{ x: 'first', y: 40 }, { x: 'second', y: 23 }];
    const colors: ILegendDataItem[] = [
      { legendText: 'first', legendColor: DefaultPalette.accent },
      { legendText: 'second', legendColor: DefaultPalette.red }
    ];

    const multiplePoints = [
      { x: 'first Lorem Ipsum is simply dummy text', y: 40 },
      { x: 'second', y: 23 },
      { x: 'third Lorem Ipsum is simply dummy text of the printing', y: 35 },
      { x: 'fourth', y: 87 }
    ];
    const multipleColors: ILegendDataItem[] = [
      { legendText: 'first Lorem Ipsum is simply dummy text', legendColor: DefaultPalette.accent },
      { legendText: 'second', legendColor: DefaultPalette.red },
      { legendText: 'third Lorem Ipsum is simply dummy text of the printing', legendColor: DefaultPalette.orange },
      { legendText: 'fourth', legendColor: DefaultPalette.green }
    ];

    const contentAreaList = [
      {
        priority: Priority.Priority1,
        cardContentType: CardContentType.Chart,
        content: {
          chartLabels: ['Stacked bar chart with two data points'],
          chartType: ChartType.StackedBarChart,
          dataPoints: points,
          legendColors: colors
        }
      },
      {
        priority: Priority.Priority2,
        cardContentType: CardContentType.Chart,
        content: {
          chartLabels: ['Stacked bar chart with multiple points'],
          chartType: ChartType.StackedBarChart,
          dataPoints: multiplePoints,
          legendColors: multipleColors
        }
      }
    ];

    const header = {
      headerText: 'Header Text ',
      annotationText: 'Annotation Text '
    };

    return (
      <Card
        cardFrameContent={cardFrameContent}
        header={header}
        cardContentList={contentAreaList}
        cardSize={CardSize.large}
      />
    );
  }
}
