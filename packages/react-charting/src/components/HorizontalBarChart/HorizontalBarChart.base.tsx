import * as React from 'react';
import { classNamesFunction, find, getId } from '@fluentui/react/lib/Utilities';
import { IProcessedStyleSet, IPalette } from '@fluentui/react/lib/Styling';
import {
  IChartProps,
  IHorizontalBarChartProps,
  IHorizontalBarChartStyleProps,
  IHorizontalBarChartStyles,
  IChartDataPoint,
  IRefArrayData,
} from './index';
import { Callout, DirectionalHint } from '@fluentui/react/lib/Callout';
import { ChartHoverCard } from '../../utilities/ChartHoverCard/index';
import { FocusZone, FocusZoneDirection } from '@fluentui/react-focus';

const getClassNames = classNamesFunction<IHorizontalBarChartStyleProps, IHorizontalBarChartStyles>();

export interface IHorizontalBarChartState {
  isCalloutVisible: boolean;
  refSelected: SVGGElement | null | undefined;
  color: string;
  hoverValue: string | number | Date | null;
  lineColor: string;
  legend: string | null;
  xCalloutValue?: string;
  yCalloutValue?: string;
  barCalloutProps?: IChartDataPoint;
  lengthOfChartData: number;
  indexValOfRect: number;
}

export interface IIndexData {
  lengthOfChartData?: number;
  indexValOfRect?: number;
}

export class HorizontalBarChartBase extends React.Component<IHorizontalBarChartProps, IHorizontalBarChartState> {
  private _barHeight: number;
  private _classNames: IProcessedStyleSet<IHorizontalBarChartStyles>;
  private _uniqLineText: string;
  private _calloutId: string;
  private _refArray: IRefArrayData[];

  constructor(props: IHorizontalBarChartProps) {
    super(props);
    this.state = {
      isCalloutVisible: false,
      hoverValue: '',
      lineColor: '',
      legend: '',
      refSelected: null,
      // eslint-disable-next-line react/no-unused-state
      color: '',
      xCalloutValue: '',
      yCalloutValue: '',
      lengthOfChartData: 1,
      indexValOfRect: 1,
    };
    this._refArray = [];
    this._uniqLineText = '_HorizontalLine_' + Math.random().toString(36).substring(7);
    this._hoverOff = this._hoverOff.bind(this);
    this._calloutId = getId('callout');
  }

  public render(): JSX.Element {
    const { data, theme } = this.props;
    this._adjustProps();
    const { palette } = theme!;
    let datapoint: number | undefined = 0;
    const barSeriesLabel: string = `Bar series ${this.state.indexValOfRect} of ${this.state.lengthOfChartData}`;
    return (
      <div className={this._classNames.root}>
        {data!.map((points: IChartProps, index: number) => {
          if (points.chartData && points.chartData![0] && points.chartData![0].horizontalBarChartdata!.x) {
            datapoint = points.chartData![0].horizontalBarChartdata!.x;
          } else {
            datapoint = 0;
          }
          points.chartData![1] = {
            legend: '',
            horizontalBarChartdata: {
              x: points.chartData![0].horizontalBarChartdata!.y - datapoint!,
              y: points.chartData![0].horizontalBarChartdata!.y,
            },
            color: palette.neutralTertiaryAlt,
          };

          const chartDataText = this._getChartDataText(points!);
          const bars = this._createBars(points!, palette);
          const keyVal = this._uniqLineText + '_' + index;
          const titleAriaLabel: string = this.props.ariaLabel
            ? this.props.ariaLabel
            : `Bar chart depicting about ${points!.chartTitle}`;
          return (
            <div key={index} className={this._classNames.items}>
              <div className={this._classNames.items}>
                <FocusZone direction={FocusZoneDirection.horizontal}>
                  <div className={this._classNames.chartTitle}>
                    {points!.chartTitle && (
                      <div
                        className={this._classNames.chartDataText}
                        data-is-focusable={true}
                        role="text"
                        aria-label={titleAriaLabel}
                        aria-labelledby={this.props.ariaLabelledBy}
                        aria-describedby={this.props.ariaDescribedBy}
                      >
                        {points!.chartTitle}
                      </div>
                    )}
                    {chartDataText}
                  </div>
                </FocusZone>
                {points!.chartData![0].data && this._createBenchmark(points!)}
                <FocusZone direction={FocusZoneDirection.horizontal}>
                  <svg className={this._classNames.chart}>
                    <g
                      id={keyVal}
                      key={keyVal}
                      ref={(e: SVGGElement) => {
                        this._refCallback(e, points!.chartData![0].legend);
                      }}
                      // NOTE: points.chartData![0] contains current data value
                      onClick={() => {
                        const p = points!.chartData![0];
                        if (p && p.onClick) {
                          p.onClick();
                        }
                      }}
                      className={this._classNames.barWrapper}
                    >
                      {bars}
                    </g>
                  </svg>
                </FocusZone>
              </div>
            </div>
          );
        })}
        <Callout
          target={this.state.refSelected}
          coverTarget={true}
          isBeakVisible={false}
          gapSpace={30}
          hidden={!(!this.props.hideTooltip && this.state.isCalloutVisible)}
          directionalHint={DirectionalHint.rightTopEdge}
          id={this._calloutId}
          onDismiss={this._closeCallout}
          {...this.props.calloutProps!}
        >
          <>
            <div className={this._classNames.visuallyHidden}>{barSeriesLabel}</div>
            {this.props.onRenderCalloutPerHorizontalBar ? (
              this.props.onRenderCalloutPerHorizontalBar(this.state.barCalloutProps)
            ) : (
              <ChartHoverCard
                Legend={this.state.xCalloutValue ? this.state.xCalloutValue : this.state.legend!}
                YValue={this.state.yCalloutValue ? this.state.yCalloutValue : this.state.hoverValue!}
                color={this.state.lineColor}
              />
            )}
          </>
        </Callout>
      </div>
    );
  }

  private _refCallback(element: SVGGElement, legendTitle: string | undefined): void {
    this._refArray.push({ index: legendTitle, refElement: element });
  }

  private _hoverOn(hoverValue: string | number | Date | null, point: IChartDataPoint, indexDetails: IIndexData): void {
    if (!this.state.isCalloutVisible || this.state.legend !== point.legend!) {
      const currentHoveredElement = find(
        this._refArray,
        (currentElement: IRefArrayData) => currentElement.index === point.legend,
      );
      this.setState({
        isCalloutVisible: true,
        hoverValue: hoverValue,
        lineColor: point.color!,
        legend: point.legend!,
        refSelected: currentHoveredElement!.refElement,
        xCalloutValue: point.xAxisCalloutData!,
        yCalloutValue: point.yAxisCalloutData!,
        barCalloutProps: point,
        indexValOfRect: indexDetails.indexValOfRect! + 1,
        lengthOfChartData: indexDetails.lengthOfChartData!,
      });
    }
  }

  private _hoverOff(): void {
    if (this.state.isCalloutVisible) {
      this.setState({
        isCalloutVisible: false,
        hoverValue: '',
        refSelected: null,
        lineColor: '',
        legend: '',
      });
    }
  }

  private _adjustProps = (): void => {
    this._barHeight = this.props.barHeight || 8;
    this._classNames = getClassNames(this.props.styles!, {
      theme: this.props.theme!,
      width: this.props.width,
      className: this.props.className,
      barHeight: this._barHeight,
      color: this.state.lineColor,
    });
  };

  private _getChartDataText = (data: IChartProps) => {
    return this.props.barChartCustomData ? (
      <div data-is-focusable={true} role="text">
        {this.props.barChartCustomData(data)}
      </div>
    ) : (
      this._getDefaultTextData(data)
    );
  };

  private _getDefaultTextData(data: IChartProps): JSX.Element {
    const chartDataMode = this.props.chartDataMode || 'default';
    const x = data!.chartData![0].horizontalBarChartdata!.x;
    const y = data!.chartData![0].horizontalBarChartdata!.y;

    let chartDataAriaLabel: string;
    switch (chartDataMode) {
      case 'default':
        const chartDataText: string = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        chartDataAriaLabel = `number ${chartDataText}`;
        return (
          <div
            data-is-focusable={true}
            role="text"
            aria-label={chartDataAriaLabel}
            className={this._classNames.chartDataText}
          >
            {chartDataText}
          </div>
        );
      case 'fraction':
        chartDataAriaLabel = `number ${x} of ${y}`;
        return (
          <div data-is-focusable={true} role="text" aria-label={chartDataAriaLabel}>
            <span className={this._classNames.chartDataText}>{x}</span>
            <span className={this._classNames.chartDataTextDenominator}>{'/' + y}</span>
          </div>
        );
      case 'percentage':
        const dataRatioPercentage = `${Math.round((x / y) * 100)}%`;
        chartDataAriaLabel = `number ${dataRatioPercentage}`;
        return (
          <div
            data-is-focusable={true}
            role="text"
            aria-label={chartDataAriaLabel}
            className={this._classNames.chartDataText}
          >
            {dataRatioPercentage}
          </div>
        );
    }
  }

  private _createBenchmark(data: IChartProps): JSX.Element {
    const totalData = data.chartData![0].horizontalBarChartdata!.y;
    const benchmarkData = data.chartData![0].data;
    const benchmarkRatio = Math.round(((benchmarkData ? benchmarkData : 0) / totalData) * 100);

    const benchmarkStyles = {
      marginLeft: 'calc(' + benchmarkRatio + '% - 4px)',
      marginRight: 'calc(' + (100 - benchmarkRatio) + '% - 4px)',
    };

    return <div className={this._classNames.triangle} style={benchmarkStyles} />;
  }

  private _createBars(data: IChartProps, palette: IPalette): JSX.Element[] {
    const defaultPalette: string[] = [palette.blueLight, palette.blue, palette.blueMid, palette.red, palette.black];
    // calculating starting point of each bar and it's range
    const startingPoint: number[] = [];
    const total = data.chartData!.reduce(
      (acc: number, point: IChartDataPoint) =>
        acc + (point.horizontalBarChartdata!.x ? point.horizontalBarChartdata!.x : 0),
      0,
    );
    let prevPosition = 0;
    let value = 0;

    const activeChartDataLength: number = data.chartData!.filter((point: IChartDataPoint) => {
      return point.legend !== '';
    })!.length;

    const bars = data.chartData!.map((point: IChartDataPoint, index: number) => {
      const indexDetails: IIndexData = {
        indexValOfRect: index,
        lengthOfChartData: activeChartDataLength,
      };

      const color: string = point.color ? point.color : defaultPalette[Math.floor(Math.random() * 4 + 1)];
      const pointData = point.horizontalBarChartdata!.x ? point.horizontalBarChartdata!.x : 0;
      if (index > 0) {
        prevPosition += value;
      }
      value = (pointData / total) * 100;
      if (value < 0) {
        value = 0;
      } else if (value < 1 && value !== 0) {
        value = 1;
      }
      startingPoint.push(prevPosition);
      return (
        <rect
          key={index}
          x={startingPoint[index] + '%'}
          y={0}
          data-is-focusable={point.legend !== '' ? true : false}
          width={value + '%'}
          height={this._barHeight}
          fill={color}
          onMouseOver={
            point.legend !== ''
              ? this._hoverOn.bind(
                  this,
                  point.horizontalBarChartdata!.x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                  point,
                  indexDetails,
                )
              : undefined
          }
          onFocus={
            point.legend !== ''
              ? this._hoverOn.bind(
                  this,
                  point.horizontalBarChartdata!.x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                  point,
                  indexDetails,
                )
              : undefined
          }
          aria-labelledby={this._calloutId}
          role="img"
          aria-label="Horizontal bar chart"
          onBlur={this._hoverOff}
          onMouseLeave={this._hoverOff}
        />
      );
    });
    return bars;
  }

  private _closeCallout = () => {
    this.setState({
      isCalloutVisible: false,
    });
  };
}
