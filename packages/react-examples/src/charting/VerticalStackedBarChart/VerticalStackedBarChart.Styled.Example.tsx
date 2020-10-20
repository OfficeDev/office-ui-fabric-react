import * as React from 'react';
import {
  ChartHoverCard,
  VerticalStackedBarChart,
  IVSChartDataPoint,
  IVerticalStackedChartProps,
  IVerticalStackedBarChartProps,
} from '@uifabric/charting';
import { DefaultPalette, IStyle, DefaultFontStyles } from 'office-ui-fabric-react/lib/Styling';
import { ChoiceGroup, DirectionalHint, IChoiceGroupOption } from 'office-ui-fabric-react';

const options: IChoiceGroupOption[] = [
  { key: 'singleCallout', text: 'Single callout' },
  { key: 'MultiCallout', text: 'Stack callout' },
];

interface IVerticalStackedBarState {
  width: number;
  height: number;
  barGapMax: number;
  barCornerRadius: number;
  selectedCallout: string;
}

export class VerticalStackedBarChartStyledExample extends React.Component<{}, IVerticalStackedBarState> {
  constructor(props: IVerticalStackedChartProps) {
    super(props);
    this.state = {
      width: 650,
      height: 350,
      barGapMax: 2,
      barCornerRadius: 2,
      selectedCallout: 'MultiCallout',
    };
  }
  public render(): JSX.Element {
    return <div>{this._basicExample()}</div>;
  }

  private _basicExample(): JSX.Element {
    const firstChartPoints: IVSChartDataPoint[] = [
      { legend: 'Metadata1', data: 2, color: DefaultPalette.accent },
      { legend: 'Metadata2', data: 1, color: DefaultPalette.blueMid },
      { legend: 'Metadata3', data: 0, color: DefaultPalette.blueLight },
    ];

    const secondChartPoints: IVSChartDataPoint[] = [
      { legend: 'Metadata1', data: 30, color: DefaultPalette.accent },
      { legend: 'Metadata2', data: 3, color: DefaultPalette.blueMid },
      { legend: 'Metadata3', data: 40, color: DefaultPalette.blueLight },
    ];

    const thirdChartPoints: IVSChartDataPoint[] = [
      { legend: 'Metadata1', data: 10, color: DefaultPalette.accent },
      { legend: 'Metadata2', data: 60, color: DefaultPalette.blueMid },
      { legend: 'Metadata3', data: 30, color: DefaultPalette.blueLight },
    ];

    const data: IVerticalStackedChartProps[] = [
      { chartData: firstChartPoints, xAxisPoint: 'Jan' },
      { chartData: secondChartPoints, xAxisPoint: 'Feb' },
      { chartData: thirdChartPoints, xAxisPoint: 'March' },
      { chartData: firstChartPoints, xAxisPoint: 'April' },
      { chartData: thirdChartPoints, xAxisPoint: 'May' },
      { chartData: firstChartPoints, xAxisPoint: 'June' },
      { chartData: secondChartPoints, xAxisPoint: 'July' },
      { chartData: thirdChartPoints, xAxisPoint: 'August' },
      { chartData: firstChartPoints, xAxisPoint: 'September' },
    ];

    const rootStyle = { width: `${this.state.width}px`, height: `${this.state.height}px` };

    const textStyle: IStyle = {
      fill: DefaultPalette.black,
      fontSize: '10px',
      lineHeight: '14px',
    };

    const customStyles: IVerticalStackedBarChartProps['styles'] = () => {
      return {
        xAxis: {
          selectors: {
            text: { fill: 'black', fontSize: '10px' },
          },
        },
        chart: {
          paddingBottom: '45px',
        },
        chartLabel: {
          color: DefaultPalette.blueMid,
          ...DefaultFontStyles.large,
        },
        xAxisText: {
          ...textStyle,
        },
      };
    };

    return (
      <>
        <div>
          <label>Width:</label>
          {/* eslint-disable-next-line react/jsx-no-bind */}
          <input
            type="range"
            value={this.state.width}
            min={200}
            max={1000}
            onChange={e => this.setState({ width: +e.target.value })}
          />
          <label>Height:</label>
          {/* eslint-disable-next-line react/jsx-no-bind */}
          <input
            type="range"
            value={this.state.height}
            min={200}
            max={1000}
            onChange={e => this.setState({ height: +e.target.value })}
          />
        </div>
        <div>
          <label>BarGapMax:</label>
          {/* eslint-disable-next-line react/jsx-no-bind */}
          <input
            type="range"
            value={this.state.barGapMax}
            min={0}
            max={10}
            onChange={e => this.setState({ barGapMax: +e.target.value })}
          />
          <label>BarCornerRadius:</label>
          {/* eslint-disable-next-line react/jsx-no-bind */}
          <input
            type="range"
            value={this.state.barCornerRadius}
            min={0}
            max={10}
            onChange={e => this.setState({ barCornerRadius: +e.target.value })}
          />
          <ChoiceGroup
            options={options}
            defaultSelectedKey="MultiCallout"
            onChange={(_ev, option) => this.setState({ selectedCallout: option.key })}
            label="Pick one"
          />
        </div>
        <div style={rootStyle}>
          <VerticalStackedBarChart
            data={data}
            {...this.state}
            yAxisTickCount={10}
            // Just test link
            href={'www.google.com'}
            // eslint-disable-next-line react/jsx-no-bind
            styles={customStyles}
            yMaxValue={120}
            yMinValue={10}
            isCalloutForStack={this.state.selectedCallout === 'MultiCallout'}
            calloutProps={{
              directionalHint: DirectionalHint.topCenter,
            }}
            // eslint-disable-next-line react/jsx-no-bind
            yAxisTickFormat={(x: number | string) => `${x} h`}
            margins={{
              bottom: 35,
              top: 10,
              left: 35,
              right: 0,
            }}
            legendProps={{
              allowFocusOnLegends: true,
              styles: {
                rect: {
                  borderRadius: '3px',
                },
              },
            }}
            // eslint-disable-next-line react/jsx-no-bind, @typescript-eslint/no-explicit-any
            onRenderCalloutPerDataPoint={(props: any) =>
              props ? (
                <ChartHoverCard
                  XValue={props.xAxisCalloutData}
                  Legend={props.legend}
                  YValue={`${props.yAxisCalloutData || props.data} h`}
                  color={props.color}
                />
              ) : null
            }
          />
        </div>
      </>
    );
  }
}
