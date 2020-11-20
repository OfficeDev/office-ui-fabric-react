import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ContentIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M5 7C5 6.44772 5.44772 6 6 6H14C14.5523 6 15 6.44771 15 7V9C15 9.55228 14.5523 10 14 10H6C5.44772 10 5 9.55229 5 9V7ZM14 7H6V9H14V7Z" />
        <path d="M12 11C11.4477 11 11 11.4477 11 12V13C11 13.5523 11.4477 14 12 14H14C14.5523 14 15 13.5523 15 13V12C15 11.4477 14.5523 11 14 11H12ZM12 12H14V13H12V12Z" />
        <path d="M5 11.5C5 11.2239 5.22386 11 5.5 11H9.5C9.77614 11 10 11.2239 10 11.5C10 11.7761 9.77614 12 9.5 12H5.5C5.22386 12 5 11.7761 5 11.5Z" />
        <path d="M5.5 13C5.22386 13 5 13.2239 5 13.5C5 13.7761 5.22386 14 5.5 14H9.5C9.77614 14 10 13.7761 10 13.5C10 13.2239 9.77614 13 9.5 13H5.5Z" />
        <path d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6ZM6 4C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H14C15.1046 16 16 15.1046 16 14V6C16 4.89543 15.1046 4 14 4H6Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M14 7H6V9H14V7Z" />
        <path d="M12 12H14V13H12V12Z" />
        <path d="M6 3C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H14C15.6569 17 17 15.6569 17 14V6C17 4.34315 15.6569 3 14 3H6ZM5 7C5 6.44772 5.44772 6 6 6H14C14.5523 6 15 6.44772 15 7V9C15 9.55228 14.5523 10 14 10H6C5.44772 10 5 9.55229 5 9V7ZM12 11H14C14.5523 11 15 11.4477 15 12V13C15 13.5523 14.5523 14 14 14H12C11.4477 14 11 13.5523 11 13V12C11 11.4477 11.4477 11 12 11ZM5 11.5C5 11.2239 5.22386 11 5.5 11H9.5C9.77614 11 10 11.2239 10 11.5C10 11.7761 9.77614 12 9.5 12H5.5C5.22386 12 5 11.7761 5 11.5ZM5.5 13H9.5C9.77614 13 10 13.2239 10 13.5C10 13.7761 9.77614 14 9.5 14H5.5C5.22386 14 5 13.7761 5 13.5C5 13.2239 5.22386 13 5.5 13Z" />
      </g>
    </svg>
  ),
  displayName: 'ContentIcon',
});
