import * as React from 'react';
import { max as d3Max } from 'd3-array';
import { Axis as D3Axis } from 'd3-axis';
import { line as d3Line } from 'd3-shape';
import { scaleLinear as d3ScaleLinear, ScaleLinear as D3ScaleLinear } from 'd3-scale';
import {
  classNamesFunction,
  getId,
  getRTL,
  find,
  warnDeprecations,
  memoizeFunction,
} from 'office-ui-fabric-react/lib/Utilities';
import { IProcessedStyleSet, IPalette } from 'office-ui-fabric-react/lib/Styling';
import { DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { ILegend, Legends } from '../Legends/index';
import {
  CartesianChart,
  ChartHoverCard,
  IBasestate,
  IChildProps,
  IDataPoint,
  IMargins,
  IVerticalStackedBarChartProps,
  IVerticalStackedBarChartStyleProps,
  IVerticalStackedBarChartStyles,
  IVerticalStackedChartProps,
  IVSChartDataPoint,
  ILineDataInVerticalStackedBarChart,
} from '../../index';
import { FocusZoneDirection } from '@fluentui/react-focus';
import { ChartTypes, XAxisTypes, getTypeOfAxis } from '../../utilities/index';

const getClassNames = classNamesFunction<IVerticalStackedBarChartStyleProps, IVerticalStackedBarChartStyles>();
type NumericAxis = D3Axis<number | { valueOf(): number }>;
type NumericScale = D3ScaleLinear<number, number>;
type StringScale = D3ScaleLinear<string, string>;
const COMPONENT_NAME = 'VERTICAL STACKED BAR CHART';

interface IRefArrayData {
  refElement?: SVGGElement | null;
}
type LineData = ILineDataInVerticalStackedBarChart & { x?: number | string; index?: number };
type LinePoint = ILineDataInVerticalStackedBarChart & { index: number; x: number | string | undefined };
type LineObject = { [key: string]: LinePoint[] };
type LineLegends = {
  title: string;
  color: string;
};
enum CircleVisbility {
  show = 'visibility',
  hide = 'hidden',
}

export interface IVerticalStackedBarChartState extends IBasestate {
  selectedLegendTitle: string;
  dataPointCalloutProps?: IVSChartDataPoint;
  stackCalloutProps?: IVerticalStackedChartProps;
  activeXAxisDataPoint: number | string;
}
export class VerticalStackedBarChartBase extends React.Component<
  IVerticalStackedBarChartProps,
  IVerticalStackedBarChartState
> {
  private _points: IVerticalStackedChartProps[];
  private _dataset: IDataPoint[];
  private _xAxisLabels: string[];
  private _bars: JSX.Element[];
  private _xAxisType: XAxisTypes;
  private _barWidth: number;
  private _additionalSpace: number;
  private _calloutId: string;
  private _classNames: IProcessedStyleSet<IVerticalStackedBarChartStyles>;
  private _colors: string[];
  private margins: IMargins;
  private _isRtl: boolean = getRTL();
  private _createLegendsForLine: (data: IVerticalStackedChartProps[]) => LineLegends[];
  private _lineObject: LineObject;

  public constructor(props: IVerticalStackedBarChartProps) {
    super(props);
    this.state = {
      isCalloutVisible: false,
      isLegendSelected: false,
      isLegendHovered: false,
      selectedLegendTitle: '',
      refSelected: null,
      dataForHoverCard: 0,
      color: '',
      hoverXValue: '',
      YValueHover: [],
      xCalloutValue: '',
      yCalloutValue: '',
      activeXAxisDataPoint: '',
    };
    warnDeprecations(COMPONENT_NAME, props, {
      colors: 'IVSChartDataPoint.color',
      chartLabel: 'use your own title for chart',
    });
    this._onLegendLeave = this._onLegendLeave.bind(this);
    this._handleMouseOut = this._handleMouseOut.bind(this);
    this._calloutId = getId('callout');
    this._adjustProps();
    this._dataset = this._createDataSetLayer();
    this._createLegendsForLine = memoizeFunction((data: IVerticalStackedChartProps[]) => this._getLineLegends(data));
  }

  public componentDidUpdate(prevProps: IVerticalStackedBarChartProps): void {
    if (
      prevProps.height !== this.props.height ||
      prevProps.width !== this.props.width ||
      prevProps.data !== this.props.data
    ) {
      this._adjustProps();
      this._dataset = this._createDataSetLayer();
    }
  }

  public render(): React.ReactNode {
    this._adjustProps();
    const _isHavingLines = this.props.data.some(
      (item: IVerticalStackedChartProps) => item.lineData && item.lineData.length > 0,
    );
    const shouldFocusWholeStack = this._toFocusWholeStack(_isHavingLines);
    const { isCalloutForStack = false } = this.props;
    this._dataset = this._createDataSetLayer();
    const legendBars: JSX.Element = this._getLegendData(
      this._points,
      this.props.theme!.palette,
      this._createLegendsForLine(this.props.data),
    );

    this._classNames = getClassNames(this.props.styles!, {
      href: this.props.href!,
      theme: this.props.theme!,
    });

    const calloutProps = {
      isCalloutVisible: this.state.isCalloutVisible,
      directionalHint: DirectionalHint.topRightEdge,
      id: `toolTip${this._calloutId}`,
      target: this.state.refSelected,
      isBeakVisible: false,
      gapSpace: 15,
      color: this.state.color,
      Legend: this.state.selectedLegendTitle,
      XValue: this.state.xCalloutValue!,
      YValue: this.state.yCalloutValue ? this.state.yCalloutValue : this.state.dataForHoverCard,
      YValueHover: this.state.YValueHover,
      hoverXValue: this.state.hoverXValue,
      ...this.props.calloutProps,
    };
    const tickParams = {
      tickValues: this.props.tickValues,
      tickFormat: this.props.tickFormat,
    };

    return (
      <CartesianChart
        {...this.props}
        points={this._dataset}
        chartType={ChartTypes.VerticalStackedBarChart}
        xAxisType={this._xAxisType}
        calloutProps={calloutProps}
        tickParams={tickParams}
        legendBars={legendBars}
        datasetForXAxisDomain={this._xAxisLabels}
        isCalloutForStack={shouldFocusWholeStack}
        barwidth={this._barWidth}
        focusZoneDirection={
          isCalloutForStack || _isHavingLines ? FocusZoneDirection.horizontal : FocusZoneDirection.vertical
        }
        getmargins={this._getMargins}
        getGraphData={this._getGraphData}
        customizedCallout={this._getCustomizedCallout()}
        /* eslint-disable react/jsx-no-bind */
        // eslint-disable-next-line react/no-children-prop
        children={(props: IChildProps) => {
          return (
            <>
              <g>{this._bars}</g>
              <g>{this._createLines(props.xScale!, props.yScale!, props.containerHeight!, props.containerWidth!)}</g>
            </>
          );
        }}
      />
    );
  }

  /**
   * This function tells us what to foucs either the whole stack as focusable item.
   * or each individual item in the stack as focusable item. basically it depends
   * on the prop `isCalloutForStack` if it's false user can focus each individual bar
   * within the bar if it's true then user can focus whole bar as item.
   * but if we have lines in the chart then we force the user to focus only the whole
   * bar, even if isCalloutForStack is false
   */
  private _toFocusWholeStack = (_isHavingLines: boolean): boolean => {
    const { isCalloutForStack = false } = this.props;
    let shouldFocusStackOnly: boolean = false;
    if (_isHavingLines) {
      if (this.state.isLegendSelected) {
        shouldFocusStackOnly = false;
      } else {
        shouldFocusStackOnly = true;
      }
    } else {
      shouldFocusStackOnly = isCalloutForStack;
    }
    return shouldFocusStackOnly;
  };

  private _getFormattedLineData = (data: IVerticalStackedChartProps[]): LineObject => {
    const linesData: LineData[] = [];
    const formattedLineData: LineObject = {};
    data.forEach((item: IVerticalStackedChartProps, index: number) => {
      if (item.lineData) {
        linesData.push(...item.lineData);
        // injecting corresponding x data point in each of the line data
        // we inject index also , it will be helpful to draw lines when x asix is
        // of string type
        linesData.forEach((line: LineData) => {
          if (line.x === undefined) {
            line.x = item.xAxisPoint;
          }
          if (line.index === undefined) {
            line.index = index;
          }
        });
      }
    });
    linesData.forEach((item: LineData) => {
      if (formattedLineData[item.legend]) {
        formattedLineData[item.legend].push({ ...item, index: item.index!, x: item.x });
      } else {
        formattedLineData[item.legend] = [{ ...item, index: item.index!, x: item.x }];
      }
    });
    return formattedLineData;
  };

  private _getLineLegends = (data: IVerticalStackedChartProps[]): LineLegends[] => {
    const lineObject: LineObject = this._lineObject;
    const lineLegends: LineLegends[] = [];
    Object.keys(lineObject).forEach((item: string) => {
      lineLegends.push({
        title: item,
        color: lineObject[item][0].color,
      });
    });
    return lineLegends;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _createLines = (xScale: any, yScale: any, containerHeight: number, containerWidth: number): JSX.Element => {
    const isNumeric = this._xAxisType === XAxisTypes.NumericAxis;
    const { xBarScale } = this._getScales(containerHeight, containerWidth, isNumeric);
    const lineObject: LineObject = this._getFormattedLineData(this.props.data);
    const linePath = d3Line()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .x((d: any) => (isNumeric ? xScale(d.x) : xBarScale(d.index) + this._additionalSpace))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .y((d: any) => yScale(d.y));
    const lines: React.ReactNode[] = [];
    const dots: React.ReactNode[] = [];
    Object.keys(lineObject).forEach((item: string, index: number) => {
      let shouldHighlight = true;
      if (this.state.isLegendHovered || this.state.isLegendSelected) {
        shouldHighlight = this.state.selectedLegendTitle === item; // item is legend name;
      }
      lines.push(
        <path
          key={`${index}-linePath`}
          opacity={shouldHighlight ? 1 : 0.4}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          d={linePath(lineObject[item] as Array<any>)!}
          fill={'none'}
          strokeWidth={3}
          stroke={lineObject[item][0].color}
        />,
      );
    });
    Object.keys(lineObject).forEach((item: string, index: number) => {
      lineObject[item].forEach((circlePoint: LinePoint, subIndex: number) => {
        dots.push(
          <circle
            key={`${index}-${subIndex}-dot`}
            cx={isNumeric ? xScale(circlePoint.x) : xBarScale(circlePoint.index) + this._additionalSpace}
            cy={yScale(circlePoint.y)}
            onMouseOver={this._onStackHover.bind(
              this,
              circlePoint.x,
              find(this.props.data, (point: IVerticalStackedChartProps) => point.xAxisPoint === circlePoint.x)
                ?.lineData,
            )}
            r={8}
            stroke={circlePoint.color}
            fill={this.props.theme!.palette.white}
            strokeWidth={3}
            visibility={this.state.activeXAxisDataPoint === circlePoint.x ? CircleVisbility.show : CircleVisbility.hide}
          />,
        );
      });
    });
    return (
      <>
        {lines}
        {dots}
      </>
    );
  };

  private _adjustProps(): void {
    this._points = this.props.data || [];
    this._barWidth = this.props.barWidth || 32;
    this._additionalSpace = 0.5 * this._barWidth;
    const { theme } = this.props;
    const { palette } = theme!;
    // eslint-disable-next-line deprecation/deprecation
    this._colors = this.props.colors || [palette.blueLight, palette.blue, palette.blueMid, palette.red, palette.black];
    this._xAxisType = getTypeOfAxis(this.props.data[0].xAxisPoint, true) as XAxisTypes;
    this._lineObject = this._getFormattedLineData(this.props.data);
  }

  private _createDataSetLayer(): IDataPoint[] {
    const tempArr: string[] = [];
    const dataset: IDataPoint[] = this._points.map(singlePointData => {
      let total: number = 0;
      singlePointData.chartData!.forEach((point: IVSChartDataPoint) => {
        total = total + point.data;
      });
      tempArr.push(singlePointData.xAxisPoint as string);
      return {
        x: singlePointData.xAxisPoint,
        y: total,
      };
    });
    this._xAxisLabels = tempArr;
    return dataset;
  }

  private _getMargins = (margins: IMargins) => {
    this.margins = margins;
  };

  private _renderCallout(props?: IVSChartDataPoint): JSX.Element | null {
    return props ? (
      <ChartHoverCard
        XValue={props.xAxisCalloutData}
        Legend={props.legend}
        YValue={props.yAxisCalloutData}
        color={props.color}
      />
    ) : null;
  }

  private _getCustomizedCallout = () => {
    const _isHavingLines = this.props.data.some(
      (item: IVerticalStackedChartProps) => item.lineData && item.lineData.length > 0,
    );
    return this.props.onRenderCalloutPerStack
      ? this.props.onRenderCalloutPerStack(this.state.stackCalloutProps)
      : this.props.onRenderCalloutPerDataPoint && !_isHavingLines
      ? this.props.onRenderCalloutPerDataPoint(this.state.dataPointCalloutProps, this._renderCallout)
      : null;
  };

  private _onLegendClick(customMessage: string): void {
    if (this.state.isLegendSelected) {
      if (this.state.selectedLegendTitle === customMessage) {
        this.setState({
          isLegendSelected: false,
          selectedLegendTitle: customMessage,
        });
      } else {
        this.setState({
          selectedLegendTitle: customMessage,
        });
      }
    } else {
      this.setState({
        isLegendSelected: true,
        selectedLegendTitle: customMessage,
      });
    }
  }

  private _onLegendHover(customMessage: string): void {
    if (this.state.isLegendSelected === false) {
      this.setState({
        isLegendHovered: true,
        selectedLegendTitle: customMessage,
      });
    }
  }

  private _onLegendLeave(isLegendFocused?: boolean): void {
    if (!!isLegendFocused || this.state.isLegendSelected === false) {
      this.setState({
        isLegendHovered: false,
        selectedLegendTitle: '',
        isLegendSelected: isLegendFocused ? false : this.state.isLegendSelected,
      });
    }
  }

  private _getLegendData(
    data: IVerticalStackedChartProps[],
    palette: IPalette,
    lineLegends: LineLegends[],
  ): JSX.Element {
    const defaultPalette: string[] = [palette.blueLight, palette.blue, palette.blueMid, palette.red, palette.black];
    const actions: ILegend[] = [];

    data.forEach((singleChartData: IVerticalStackedChartProps) => {
      singleChartData.chartData.forEach((point: IVSChartDataPoint) => {
        const color: string = point.color ? point.color : defaultPalette[Math.floor(Math.random() * 4 + 1)];
        const checkSimilarLegends = actions.filter((leg: ILegend) => leg.title === point.legend && leg.color === color);
        if (checkSimilarLegends!.length > 0) {
          return;
        }

        const legend: ILegend = {
          title: point.legend,
          color: color,
          action: () => {
            this._onLegendClick(point.legend);
          },
          hoverAction: () => {
            this._onLegendHover(point.legend);
          },
          onMouseOutAction: (isLegendSelected?: boolean) => {
            this._onLegendLeave(isLegendSelected);
          },
        };

        actions.push(legend);
      });
    });
    const legendsOfLine: ILegend[] = [];
    if (lineLegends && lineLegends.length > 0) {
      lineLegends.forEach((point: LineLegends) => {
        const legend: ILegend = {
          title: point.title,
          color: point.color,
          action: () => {
            this._onLegendClick(point.title);
          },
          hoverAction: () => {
            this._onLegendHover(point.title);
          },
          onMouseOutAction: (isLegendSelected?: boolean) => {
            this._onLegendLeave(isLegendSelected);
          },
        };
        legendsOfLine.push(legend);
      });
    }
    const totalLegends: ILegend[] = legendsOfLine.concat(actions);
    return (
      <Legends
        legends={totalLegends}
        overflowProps={this.props.legendsOverflowProps}
        enabledWrapLines={this.props.enabledLegendsWrapLines}
        focusZonePropsInHoverCard={this.props.focusZonePropsForLegendsInHoverCard}
        overflowText={this.props.legendsOverflowText}
        {...this.props.legendProps}
      />
    );
  }

  private _onRectHover(
    xAxisPoint: string,
    point: IVSChartDataPoint,
    mouseEvent: React.MouseEvent<SVGPathElement>,
  ): void {
    mouseEvent.persist();
    if (
      this.state.isLegendSelected === false ||
      (this.state.isLegendSelected && this.state.selectedLegendTitle === point!.legend)
    ) {
      this.setState({
        refSelected: mouseEvent,
        isCalloutVisible: true,
        selectedLegendTitle: point.legend,
        dataForHoverCard: point.data,
        color: point.color!,
        xCalloutValue: point.xAxisCalloutData ? point.xAxisCalloutData : xAxisPoint,
        yCalloutValue: point.yAxisCalloutData,
        dataPointCalloutProps: point,
      });
    }
  }

  private _onStackHover = (
    xAxisPoint: string | number,
    lineData: ILineDataInVerticalStackedBarChart[] | undefined,
    mouseEvent: React.MouseEvent<SVGPathElement>,
  ): void => {
    mouseEvent.persist();
    const isLinesPresent: boolean = lineData !== undefined && lineData.length > 0;
    const found = find(
      this._points,
      (sinlgePoint: { xAxisPoint: string | number; chartData: IVSChartDataPoint[] }) =>
        sinlgePoint.xAxisPoint === xAxisPoint,
    );
    if (isLinesPresent) {
      lineData!.forEach((item: ILineDataInVerticalStackedBarChart & { shouldDrawBorderBottom?: boolean }) => {
        item.data = item.data || item.y;
        item.shouldDrawBorderBottom = true;
      });
    }
    this.setState({
      refSelected: mouseEvent,
      isCalloutVisible: true,
      YValueHover: isLinesPresent ? [...lineData!, ...found!.chartData] : found!.chartData,
      hoverXValue: xAxisPoint,
      stackCalloutProps: found!,
      activeXAxisDataPoint: xAxisPoint,
    });
  };

  private _onRectFocus(point: IVSChartDataPoint, xAxisPoint: string, color: string, ref: IRefArrayData): void {
    if (
      this.state.isLegendSelected === false ||
      (this.state.isLegendSelected && this.state.selectedLegendTitle === point.legend)
    ) {
      this.setState({
        refSelected: ref.refElement,
        isCalloutVisible: true,
        selectedLegendTitle: point.legend,
        dataForHoverCard: point.data,
        color: color,
        xCalloutValue: point.xAxisCalloutData ? point.xAxisCalloutData : xAxisPoint,
        yCalloutValue: point.yAxisCalloutData,
        dataPointCalloutProps: point,
      });
    }
  }

  private _onStackFocus = (
    xAxisPoint: string | number,
    groupRef: IRefArrayData,
    lineData: ILineDataInVerticalStackedBarChart[] | undefined,
  ): void => {
    const isLinesPresent: boolean = lineData !== undefined && lineData.length > 0;
    const found = find(
      this._points,
      (sinlgePoint: { xAxisPoint: string | number; chartData: IVSChartDataPoint[] }) =>
        sinlgePoint.xAxisPoint === xAxisPoint,
    );
    if (isLinesPresent) {
      lineData!.forEach((item: ILineDataInVerticalStackedBarChart & { shouldDrawBorderBottom?: boolean }) => {
        item.data = item.data || item.y;
        item.shouldDrawBorderBottom = true;
      });
    }
    this.setState({
      refSelected: groupRef.refElement,
      isCalloutVisible: true,
      YValueHover: isLinesPresent ? [...lineData!, ...found!.chartData] : found!.chartData,
      hoverXValue: xAxisPoint,
      stackCalloutProps: found!,
      activeXAxisDataPoint: xAxisPoint,
    });
  };

  private _handleMouseOut = (): void => {
    this.setState({
      isCalloutVisible: false,
      activeXAxisDataPoint: '',
    });
  };

  private _redirectToUrl = (): void => {
    this.props.href ? (window.location.href = this.props.href) : '';
  };

  private _getYMax = (dataset: IDataPoint[]) => {
    return Math.max(d3Max(dataset, (point: IDataPoint) => point.y)!, this.props.yMaxValue || 0);
  };

  private _createBar = (
    xBarScale: NumericScale | StringScale,
    yBarScale: NumericScale,
    containerHeight: number,
  ): JSX.Element[] => {
    const _isHavingLines = this.props.data.some(
      (item: IVerticalStackedChartProps) => item.lineData && item.lineData.length > 0,
    );
    const shouldFocusWholeStack = this._toFocusWholeStack(_isHavingLines);
    const bars = this._points.map((singleChartData: IVerticalStackedChartProps, indexNumber: number) => {
      let startingPointOfY = 0;

      let xPoint: number | string;
      if (this._xAxisType === XAxisTypes.NumericAxis) {
        xPoint = xBarScale(singleChartData.xAxisPoint as number);
      } else {
        xPoint = xBarScale(indexNumber);
      }
      // Removing datapoints with zero data
      const nonZeroBars = singleChartData.chartData.filter(point => point.data > 0);
      const singleBar = nonZeroBars.map((point: IVSChartDataPoint, index: number) => {
        startingPointOfY = startingPointOfY + point.data;
        const color = point.color ? point.color : this._colors[index];
        const ref: IRefArrayData = {};

        let shouldHighlight = true;
        if (this.state.isLegendHovered || this.state.isLegendSelected) {
          shouldHighlight = this.state.selectedLegendTitle === point.legend;
        }
        this._classNames = getClassNames(this.props.styles!, {
          theme: this.props.theme!,
          shouldHighlight: shouldHighlight,
          href: this.props.href,
        });
        const rectFocusProps = !shouldFocusWholeStack && {
          'data-is-focusable': true,
          'aria-labelledby': this._calloutId,
          onMouseOver: this._onRectHover.bind(this, singleChartData.xAxisPoint, point),
          onMouseMove: this._onRectHover.bind(this, singleChartData.xAxisPoint, point),
          onMouseLeave: this._handleMouseOut,
          onFocus: this._onRectFocus.bind(this, point, singleChartData.xAxisPoint, color, ref),
          onBlur: this._handleMouseOut,
          onClick: this._redirectToUrl,
        };
        return (
          <rect
            key={index + indexNumber + `${shouldFocusWholeStack}`}
            className={this._classNames.opacityChangeOnHover}
            x={xPoint}
            y={containerHeight - this.margins.bottom! - yBarScale(startingPointOfY)}
            width={this._barWidth}
            height={Math.max(yBarScale(point.data), 0)}
            fill={color}
            ref={e => (ref.refElement = e)}
            {...rectFocusProps}
          />
        );
      });
      const groupRef: IRefArrayData = {};
      const stackFocusProps = shouldFocusWholeStack && {
        'data-is-focusable': true,
        onMouseOver: this._onStackHover.bind(this, singleChartData.xAxisPoint, singleChartData.lineData),
        onMouseMove: this._onStackHover.bind(this, singleChartData.xAxisPoint, singleChartData.lineData),
        onMouseLeave: this._handleMouseOut,
        onFocus: this._onStackFocus.bind(this, singleChartData.xAxisPoint, groupRef, singleChartData.lineData),
        onBlur: this._handleMouseOut,
        onClick: this._redirectToUrl,
      };
      return (
        <g
          key={indexNumber + `${shouldFocusWholeStack}`}
          id={`${indexNumber}-singleBar`}
          ref={e => (groupRef.refElement = e)}
          {...stackFocusProps}
        >
          {singleBar}
        </g>
      );
    });
    return bars;
  };

  private _getScales = (
    containerHeight: number,
    containerWidth: number,
    isNumeric: boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): { xBarScale: any; yBarScale: any } => {
    const yMax = this._getYMax(this._dataset);
    const yBarScale = d3ScaleLinear()
      .domain([0, yMax])
      .range([0, containerHeight - this.margins.bottom! - this.margins.top!]);
    if (isNumeric) {
      const xMax = d3Max(this._dataset, (point: IDataPoint) => point.x as number)!;

      const xBarScale = d3ScaleLinear()
        .domain(this._isRtl ? [xMax, 0] : [0, xMax])
        .nice()
        .range([this.margins.left!, containerWidth - this.margins.right! - this._barWidth]);

      return { xBarScale, yBarScale };
    } else {
      const endpointDistance = 0.5 * ((containerWidth - this.margins.right!) / this._dataset.length);
      const xBarScale = d3ScaleLinear()
        .domain(this._isRtl ? [this._dataset.length - 1, 0] : [0, this._dataset.length - 1])
        .range([
          this.margins.left! + endpointDistance - this._additionalSpace,
          containerWidth - this.margins.right! - endpointDistance - this._additionalSpace,
        ]);
      return { xBarScale, yBarScale };
    }
  };

  private _createNumericBars = (containerHeight: number, containerWidth: number): JSX.Element[] => {
    const { xBarScale, yBarScale } = this._getScales(containerHeight, containerWidth, true);

    return this._createBar(xBarScale, yBarScale, containerHeight);
  };

  private _createStringBars = (containerHeight: number, containerWidth: number): JSX.Element[] => {
    const { xBarScale, yBarScale } = this._getScales(containerHeight, containerWidth, false);

    return this._createBar(xBarScale, yBarScale, containerHeight);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _getGraphData = (xScale: any, yScale: NumericAxis, containerHeight: number, containerWidth: number) => {
    return (this._bars =
      this._xAxisType === XAxisTypes.NumericAxis
        ? this._createNumericBars(containerHeight, containerWidth)
        : this._createStringBars(containerHeight, containerWidth));
  };
}
