import { ILineChartStyleProps, ILineChartStyles } from './LineChart.types';

export const getStyles = (props: ILineChartStyleProps): ILineChartStyles => {
  const { className, theme, color } = props;
  const { palette, fonts } = theme!;

  const chartPadding = 30;

  return {
    root: [
      {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        overflow: 'hidden'
      },
      className
    ],
    xAxis: {
      selectors: {
        text: {
          opacity: 0.6,
          fontSize: '10px'
        },
        line: {
          opacity: 0.1,
          width: '1px'
        },
        path: {
          display: 'none'
        }
      }
    },
    yAxis: {
      selectors: {
        text: {
          opacity: 0.6
        },
        path: {
          display: 'none'
        },
        line: {
          opacity: 0.1
        }
      }
    },
    legendContainer: [
      {
        marginTop: '8px',
        marginLeft: '20px'
      }
    ],
    calloutContentRoot: [
      {
        display: 'grid',
        overflow: 'hidden',
        padding: '10px 16px 10px 16px',
        backgroundColor: palette.white
      }
    ],
    calloutContentX: [
      {
        ...fonts.medium,
        lineHeight: '14px'
      }
    ],
    calloutContentY: [
      {
        color: color === '' ? palette.black : color,
        fontSize: '28px',
        fontFamily: 'Segoe UI',
        fontWeight: 'bold',
        lineHeight: '31px'
      }
    ]
  };
};
