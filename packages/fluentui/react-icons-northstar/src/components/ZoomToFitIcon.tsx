import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ZoomToFitIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M5.5 4C4.67157 4 4 4.67157 4 5.5V6.5C4 6.77614 3.77614 7 3.5 7C3.22386 7 3 6.77614 3 6.5V5.5C3 4.11929 4.11929 3 5.5 3H6.5C6.77614 3 7 3.22386 7 3.5C7 3.77614 6.77614 4 6.5 4H5.5Z" />
        <path d="M16 5.5C16 4.67157 15.3284 4 14.5 4H13.5C13.2239 4 13 3.77614 13 3.5C13 3.22386 13.2239 3 13.5 3H14.5C15.8807 3 17 4.11929 17 5.5V6.5C17 6.77614 16.7761 7 16.5 7C16.2239 7 16 6.77614 16 6.5V5.5Z" />
        <path d="M16 14.5C16 15.3284 15.3284 16 14.5 16H13.5C13.2239 16 13 16.2239 13 16.5C13 16.7761 13.2239 17 13.5 17H14.5C15.8807 17 17 15.8807 17 14.5V13.5C17 13.2239 16.7761 13 16.5 13C16.2239 13 16 13.2239 16 13.5V14.5Z" />
        <path d="M4 14.5C4 15.3284 4.67157 16 5.5 16H6.75C7.02614 16 7.25 16.2239 7.25 16.5C7.25 16.7761 7.02614 17 6.75 17H5.5C4.11929 17 3 15.8807 3 14.5V13.25C3 12.9739 3.22386 12.75 3.5 12.75C3.77614 12.75 4 12.9739 4 13.25V14.5Z" />
        <path d="M6.5 5C5.67157 5 5 5.67157 5 6.5V13.5C5 14.3284 5.67157 15 6.5 15H13.5C14.3284 15 15 14.3284 15 13.5V6.5C15 5.67157 14.3284 5 13.5 5H6.5ZM6 6.5C6 6.22386 6.22386 6 6.5 6H13.5C13.7761 6 14 6.22386 14 6.5V13.5C14 13.7761 13.7761 14 13.5 14H6.5C6.22386 14 6 13.7761 6 13.5V6.5Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M5.5 4C4.67157 4 4 4.67157 4 5.5V6.5C4 6.77614 3.77614 7 3.5 7C3.22386 7 3 6.77614 3 6.5V5.5C3 4.11929 4.11929 3 5.5 3H6.5C6.77614 3 7 3.22386 7 3.5C7 3.77614 6.77614 4 6.5 4H5.5Z" />
        <path d="M6.5 5C5.67157 5 5 5.67157 5 6.5V13.5C5 14.3284 5.67157 15 6.5 15H13.5C14.3284 15 15 14.3284 15 13.5V6.5C15 5.67157 14.3284 5 13.5 5H6.5Z" />
        <path d="M14.5 4C15.3284 4 16 4.67157 16 5.5V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V5.5C17 4.11929 15.8807 3 14.5 3H13.5C13.2239 3 13 3.22386 13 3.5C13 3.77614 13.2239 4 13.5 4H14.5Z" />
        <path d="M14.5 16C15.3284 16 16 15.3284 16 14.5V13.5C16 13.2239 16.2239 13 16.5 13C16.7761 13 17 13.2239 17 13.5V14.5C17 15.8807 15.8807 17 14.5 17H13.5C13.2239 17 13 16.7761 13 16.5C13 16.2239 13.2239 16 13.5 16H14.5Z" />
        <path d="M5.5 16C4.67157 16 4 15.3284 4 14.5V13.25C4 12.9739 3.77614 12.75 3.5 12.75C3.22386 12.75 3 12.9739 3 13.25V14.5C3 15.8807 4.11929 17 5.5 17H6.75C7.02614 17 7.25 16.7761 7.25 16.5C7.25 16.2239 7.02614 16 6.75 16H5.5Z" />
      </g>
    </svg>
  ),
  displayName: 'ZoomToFitIcon',
});
