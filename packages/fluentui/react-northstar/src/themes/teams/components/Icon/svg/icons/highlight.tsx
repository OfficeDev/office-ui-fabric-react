import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg viewBox="0 0 20 20" role="presentation" focusable="false" className={classes.svg}>
      <path
        className={cx(teamsIconClassNames.outline, classes.outlinePart)}
        d="M14.0872 6.70308C14.9271 5.85998 16.2664 5.81735 17.1568 6.57701L17.2869 6.69697L17.4134 6.83357C18.1376 7.68212 18.1376 8.93671 17.4134 9.78526L17.293 9.91574L10.4167 16.8183C10.2617 16.9739 10.0749 17.0931 9.86988 17.1682L9.71291 17.2161L6.62737 17.9764C6.28827 18.0599 5.98023 17.7813 6.00917 17.4498L6.0236 17.366L6.81558 14.2953C6.86895 14.0883 6.96574 13.8958 7.09885 13.7302L7.20537 13.6112L14.0872 6.70308ZM16.5811 7.40543C16.1201 6.94613 15.393 6.91684 14.898 7.31661L14.7957 7.40884L7.91383 14.317C7.87193 14.359 7.83804 14.408 7.8135 14.4616L7.7839 14.545L7.20061 16.805L9.47368 16.2452C9.51317 16.2354 9.55114 16.221 9.58682 16.2022L9.6385 16.1709L9.70829 16.1126L16.5845 9.20999C17.0806 8.71206 17.0806 7.90677 16.5811 7.40543ZM6.42419 2.22879L6.46607 2.31323L9.448 9.94224L8.676 10.7172L8.004 8.99824H4.007L2.96614 11.678C2.87719 11.9068 2.63835 12.0329 2.40561 11.9879L2.31893 11.9628C2.09015 11.8738 1.96399 11.635 2.00906 11.4023L2.03413 11.3156L5.53436 2.31403C5.6877 1.9197 6.21661 1.89109 6.42419 2.22879ZM6.00061 3.871L4.396 7.99824H7.614L6.00061 3.871Z"
      />
      <path
        className={cx(teamsIconClassNames.filled, classes.filledPart)}
        d="M14.0872 6.70308C14.9271 5.85998 16.2664 5.81735 17.1568 6.57701L17.2869 6.69697L17.4134 6.83357C18.1376 7.68212 18.1376 8.93671 17.4134 9.78526L17.293 9.91574L10.4167 16.8183C10.2617 16.9739 10.0749 17.0931 9.86988 17.1682L9.71291 17.2161L6.62737 17.9764C6.28827 18.0599 5.98023 17.7813 6.00917 17.4498L6.0236 17.366L6.81558 14.2953C6.86895 14.0883 6.96574 13.8958 7.09885 13.7302L7.20537 13.6112L14.0872 6.70308ZM6.42419 2.22879L6.46607 2.31323L9.448 9.94224L8.676 10.7172L8.004 8.99824H4.007L2.96614 11.678C2.87719 11.9068 2.63835 12.0329 2.40561 11.9879L2.31893 11.9628C2.09015 11.8738 1.96399 11.635 2.00906 11.4023L2.03413 11.3156L5.53436 2.31403C5.6877 1.9197 6.21661 1.89109 6.42419 2.22879ZM6.00061 3.871L4.396 7.99824H7.614L6.00061 3.871Z"
      />
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec;
