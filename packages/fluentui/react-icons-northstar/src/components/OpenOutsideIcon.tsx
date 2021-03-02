import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const OpenOutsideIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        {' '}
        <path d="M16.9621 3.30861C16.9377 3.24964 16.9015 3.19439 16.8536 3.14645C16.8056 3.09851 16.7504 3.06234 16.6914 3.03794C16.6324 3.01349 16.5678 3 16.5 3H10.5C10.2239 3 10 3.22386 10 3.5C10 3.77614 10.2239 4 10.5 4H15.2929L9.14645 10.1464C8.95118 10.3417 8.95118 10.6583 9.14645 10.8536C9.34171 11.0488 9.65829 11.0488 9.85355 10.8536L16 4.70711V9.5C16 9.77614 16.2239 10 16.5 10C16.7761 10 17 9.77614 17 9.5V3.50049C17 3.49949 17 3.498 17 3.497C16.9996 3.4303 16.9861 3.36669 16.9621 3.30861Z" />
        <path d="M6 5C4.89543 5 4 5.89543 4 7V14C4 15.1046 4.89543 16 6 16H13C14.1046 16 15 15.1046 15 14V11.5C15 11.2239 15.2239 11 15.5 11C15.7761 11 16 11.2239 16 11.5V14C16 15.6569 14.6569 17 13 17H6C4.34315 17 3 15.6569 3 14V7C3 5.34315 4.34315 4 6 4H8.5C8.77614 4 9 4.22386 9 4.5C9 4.77614 8.77614 5 8.5 5H6Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M10.25 4.5C9.83579 4.5 9.5 4.16421 9.5 3.75C9.5 3.33579 9.83579 3 10.25 3H16.25C16.4563 3 16.6431 3.08329 16.7787 3.21808L16.7803 3.21967L16.7819 3.22126C16.853 3.2928 16.9068 3.37511 16.9431 3.46291C16.9798 3.55134 17 3.64831 17 3.75V9.75C17 10.1642 16.6642 10.5 16.25 10.5C15.8358 10.5 15.5 10.1642 15.5 9.75V5.56066L10.0303 11.0303C9.73744 11.3232 9.26256 11.3232 8.96967 11.0303C8.67678 10.7374 8.67678 10.2626 8.96967 9.96967L14.4393 4.5H10.25Z" />
        <path d="M6.25 5.5C5.2835 5.5 4.5 6.2835 4.5 7.25V13.75C4.5 14.7165 5.2835 15.5 6.25 15.5H12.75C13.7165 15.5 14.5 14.7165 14.5 13.75V12C14.5 11.5858 14.8358 11.25 15.25 11.25C15.6642 11.25 16 11.5858 16 12V13.75C16 15.5449 14.5449 17 12.75 17H6.25C4.45507 17 3 15.5449 3 13.75V7.25C3 5.45507 4.45507 4 6.25 4H8C8.41421 4 8.75 4.33579 8.75 4.75C8.75 5.16421 8.41421 5.5 8 5.5H6.25Z" />
      </g>
    </svg>
  ),
  displayName: 'OpenOutsideIcon',
});
