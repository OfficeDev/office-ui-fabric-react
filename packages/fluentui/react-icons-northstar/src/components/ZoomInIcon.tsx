// TODO: This is a Fluent icon. It has the same size, only artboard is 16x16 instead of original 20x20. This icon needs to be updated when moving to full set Fluent icons.
import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ZoomInIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" viewBox="0 0 20 20" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z"
        />
      </g>
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.74832 14 10.8995 13.5841 11.8226 12.8834L15.9697 17.0303L16.0538 17.1029C16.3474 17.3208 16.7641 17.2966 17.0303 17.0303C17.3232 16.7374 17.3232 16.2626 17.0303 15.9697L12.8834 11.8226C13.5841 10.8995 14 9.74832 14 8.5ZM8.5 5.25C8.08579 5.25 7.75 5.58579 7.75 6V7.75H6C5.58579 7.75 5.25 8.08579 5.25 8.5C5.25 8.91421 5.58579 9.25 6 9.25H7.75V11C7.75 11.4142 8.08579 11.75 8.5 11.75C8.91421 11.75 9.25 11.4142 9.25 11V9.25H11C11.4142 9.25 11.75 8.91421 11.75 8.5C11.75 8.08579 11.4142 7.75 11 7.75H9.25V6C9.25 5.58579 8.91421 5.25 8.5 5.25Z"
      />
    </svg>
  ),
  displayName: 'ZoomInIcon',
});
