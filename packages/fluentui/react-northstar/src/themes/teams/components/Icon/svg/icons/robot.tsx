import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path d="M12 5.5C11.4477 5.5 11 5.94772 11 6.5C11 7.05228 11.4477 7.5 12 7.5C12.5523 7.5 13 7.05228 13 6.5C13 5.94772 12.5523 5.5 12 5.5Z" />
        <path d="M7 6.5C7 5.94772 7.44772 5.5 8 5.5C8.55228 5.5 9 5.94772 9 6.5C9 7.05228 8.55228 7.5 8 7.5C7.44772 7.5 7 7.05228 7 6.5Z" />
        <path d="M10.5 2.5C10.5 2.22386 10.2761 2 10 2C9.72386 2 9.5 2.22386 9.5 2.5V3H6.5C5.67157 3 5 3.67157 5 4.5V8.5C5 9.32843 5.67157 10 6.5 10H13.5C14.3284 10 15 9.32843 15 8.5V4.5C15 3.67157 14.3284 3 13.5 3H10.5V2.5ZM6.5 4H13.5C13.7761 4 14 4.22386 14 4.5V8.5C14 8.77614 13.7761 9 13.5 9H6.5C6.22386 9 6 8.77614 6 8.5V4.5C6 4.22386 6.22386 4 6.5 4Z" />
        <path d="M10.25 17.9984C12.8656 17.9649 14.4449 17.4031 15.3718 16.5574C16.247 15.7588 16.4607 14.7813 16.4947 14.0019H16.5V13.3124C16.5 12.3131 15.69 11.5031 14.6907 11.5031H11.5V11.5H8.5V11.5031H5.3093C4.31005 11.5031 3.5 12.3131 3.5 13.3124V14.0019H3.50533C3.53931 14.7813 3.75297 15.7588 4.6282 16.5574C5.55506 17.4031 7.13442 17.9649 9.75 17.9984V18H10.25V17.9984ZM5.3093 12.5031H14.6907C15.1377 12.5031 15.5 12.8654 15.5 13.3124V13.75C15.5 14.4396 15.3688 15.2064 14.6978 15.8187C14.0103 16.446 12.6605 17 10 17C7.33946 17 5.98969 16.446 5.30224 15.8187C4.63123 15.2064 4.5 14.4396 4.5 13.75V13.3124C4.5 12.8654 4.86233 12.5031 5.3093 12.5031Z" />
      </g>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path d="M14.6907 11.5031C15.69 11.5031 16.5 12.3131 16.5 13.3124V14.0019H16.4947C16.4607 14.7813 16.247 15.7588 15.3718 16.5574C14.4158 17.4297 12.7655 18 10 18C7.23446 18 5.58423 17.4297 4.6282 16.5574C3.75297 15.7588 3.53931 14.7813 3.50533 14.0019H3.5V13.3124C3.5 12.3131 4.31005 11.5031 5.3093 11.5031H14.6907Z" />
        <path d="M6.5 3C5.67157 3 5 3.67157 5 4.5V8.5C5 9.32843 5.67157 10 6.5 10H13.5C14.3284 10 15 9.32843 15 8.5V4.5C15 3.67157 14.3284 3 13.5 3H10.5C10.5 3 10.5 2.80859 10.5 2.5C10.5 2.19141 10.2761 2 10 2C9.72386 2 9.5 2.23047 9.5 2.5C9.5 2.76953 9.5 3 9.5 3H6.5ZM7 6.5C7 5.94771 7.44772 5.5 8 5.5C8.55228 5.5 9 5.94771 9 6.5C9 7.05228 8.55228 7.5 8 7.5C7.44772 7.5 7 7.05228 7 6.5ZM11 6.5C11 5.94771 11.4477 5.5 12 5.5C12.5523 5.5 13 5.94771 13 6.5C13 7.05228 12.5523 7.5 12 7.5C11.4477 7.5 11 7.05228 11 6.5Z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
