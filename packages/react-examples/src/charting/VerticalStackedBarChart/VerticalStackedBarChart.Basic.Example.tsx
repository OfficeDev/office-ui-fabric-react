import * as React from 'react';
import { IVSChartDataPoint, IVerticalStackedChartProps, VerticalStackedBarChart } from '@uifabric/charting';
import { DefaultPalette } from 'office-ui-fabric-react/lib/Styling';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

interface IVerticalStackedBarState {
  width: number;
  height: number;
  showLine: boolean;
}

export class VerticalStackedBarChartBasicExample extends React.Component<{}, IVerticalStackedBarState> {
  constructor(props: IVerticalStackedChartProps) {
    super(props);
    this.state = {
      width: 650,
      height: 350,
      showLine: true,
    };
  }
  public render(): JSX.Element {
    return <div>{this._basicExample()}</div>;
  }

  private _onWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ width: parseInt(e.target.value, 10) });
  };
  private _onHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ height: parseInt(e.target.value, 10) });
  };

  private _onShowLineChange = (ev: React.FormEvent<HTMLElement>, checked: boolean): void => {
    this.setState({ showLine: checked });
  };

  private _basicExample(): JSX.Element {
    const { showLine } = this.state;
    const firstChartPoints: IVSChartDataPoint[] = [
      {
        legend: 'Metadata1',
        data: 40,
        color: DefaultPalette.accent,
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '40%',
      },
      {
        legend: 'Metadata2',
        data: 5,
        color: DefaultPalette.blueMid,
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '5%',
      },
      {
        legend: 'Metadata3',
        data: 20,
        color: DefaultPalette.blueLight,
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '20%',
      },
    ];

    const secondChartPoints: IVSChartDataPoint[] = [
      {
        legend: 'Metadata1',
        data: 30,
        color: DefaultPalette.accent,
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '30%',
      },
      {
        legend: 'Metadata2',
        data: 20,
        color: DefaultPalette.blueMid,
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '20%',
      },
      {
        legend: 'Metadata3',
        data: 40,
        color: DefaultPalette.blueLight,
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '40%',
      },
    ];

    const thirdChartPoints: IVSChartDataPoint[] = [
      {
        legend: 'Metadata1',
        data: 44,
        color: DefaultPalette.accent,
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '44%',
      },
      {
        legend: 'Metadata2',
        data: 28,
        color: DefaultPalette.blueMid,
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '28%',
      },
      {
        legend: 'Metadata3',
        data: 30,
        color: DefaultPalette.blueLight,
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '30%',
      },
    ];

    const fourthChartPoints: IVSChartDataPoint[] = [
      {
        legend: 'Metadata1',
        data: 88,
        color: DefaultPalette.accent,
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '88%',
      },
      {
        legend: 'Metadata2',
        data: 22,
        color: DefaultPalette.blueMid,
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '22%',
      },
      {
        legend: 'Metadata3',
        data: 30,
        color: DefaultPalette.blueLight,
        xAxisCalloutData: '2020/04/30',
        yAxisCalloutData: '30%',
      },
    ];

    const data: IVerticalStackedChartProps[] = [
      {
        chartData: firstChartPoints,
        xAxisPoint: 0,
        ...(showLine && {
          lineData: [
            { y: 10, legend: 'line', color: DefaultPalette.redDark },
            { y: 42, legend: 'line2', color: DefaultPalette.magenta },
          ],
        }),
      },
      {
        chartData: secondChartPoints,
        xAxisPoint: 20,
        ...(showLine && {
          lineData: [{ y: 33, legend: 'line2', color: DefaultPalette.magenta }],
        }),
      },
      {
        chartData: thirdChartPoints,
        xAxisPoint: 40,
        ...(showLine && {
          lineData: [
            { y: 20, legend: 'line', color: DefaultPalette.redDark },
            { y: 60, legend: 'line2', color: DefaultPalette.magenta },
          ],
        }),
      },
      {
        chartData: firstChartPoints,
        xAxisPoint: 60,
        ...(showLine && {
          lineData: [
            { y: 10, legend: 'line', color: DefaultPalette.redDark },
            { y: 41, legend: 'line2', color: DefaultPalette.magenta },
          ],
        }),
      },
      {
        chartData: fourthChartPoints,
        xAxisPoint: 80,
        ...(showLine && {
          lineData: [
            { y: 70, legend: 'line', color: DefaultPalette.redDark },
            { y: 100, legend: 'line2', color: DefaultPalette.magenta },
          ],
        }),
      },
      {
        chartData: firstChartPoints,
        xAxisPoint: 100,
      },
    ];

    const rootStyle = { width: `${this.state.width}px`, height: `${this.state.height}px` };

    return (
      <>
        <label>change Width:</label>
        <input type="range" value={this.state.width} min={200} max={1000} onChange={this._onWidthChange} />
        <label>change Height:</label>
        <input type="range" value={this.state.height} min={200} max={1000} onChange={this._onHeightChange} />
        <Checkbox
          label="show the lines (hide or show the lines)"
          checked={this.state.showLine}
          onChange={this._onShowLineChange}
          styles={{ root: { marginTop: '20px' } }}
        />
        <div style={rootStyle}>
          <VerticalStackedBarChart
            data={data}
            height={this.state.height}
            width={this.state.width}
            chartLabel="Card title"
            legendProps={{
              overflowProps: {
                focusZoneProps: {
                  'aria-label': 'Legends container',
                },
              },
              allowFocusOnLegends: true,
            }}
          />
        </div>
      </>
    );
  }
}
