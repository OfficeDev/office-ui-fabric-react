import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const GridIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M7.5 11C8.32843 11 9 11.6716 9 12.5V16.5C9 17.3284 8.32843 18 7.5 18H3.5C2.67157 18 2 17.3284 2 16.5V12.5C2 11.6716 2.67157 11 3.5 11H7.5ZM16.5 11C17.3284 11 18 11.6716 18 12.5V16.5C18 17.3284 17.3284 18 16.5 18H12.5C11.6716 18 11 17.3284 11 16.5V12.5C11 11.6716 11.6716 11 12.5 11H16.5ZM7.5 12H3.5C3.22386 12 3 12.2239 3 12.5V16.5C3 16.7761 3.22386 17 3.5 17H7.5C7.77614 17 8 16.7761 8 16.5V12.5C8 12.2239 7.77614 12 7.5 12ZM16.5 12H12.5C12.2239 12 12 12.2239 12 12.5V16.5C12 16.7761 12.2239 17 12.5 17H16.5C16.7761 17 17 16.7761 17 16.5V12.5C17 12.2239 16.7761 12 16.5 12ZM7.5 2C8.32843 2 9 2.67157 9 3.5V7.5C9 8.32843 8.32843 9 7.5 9H3.5C2.67157 9 2 8.32843 2 7.5V3.5C2 2.67157 2.67157 2 3.5 2H7.5ZM16.5 2C17.3284 2 18 2.67157 18 3.5V7.5C18 8.32843 17.3284 9 16.5 9H12.5C11.6716 9 11 8.32843 11 7.5V3.5C11 2.67157 11.6716 2 12.5 2H16.5ZM7.5 3H3.5C3.22386 3 3 3.22386 3 3.5V7.5C3 7.77614 3.22386 8 3.5 8H7.5C7.77614 8 8 7.77614 8 7.5V3.5C8 3.22386 7.77614 3 7.5 3ZM16.5 3H12.5C12.2239 3 12 3.22386 12 3.5V7.5C12 7.77614 12.2239 8 12.5 8H16.5C16.7761 8 17 7.77614 17 7.5V3.5C17 3.22386 16.7761 3 16.5 3Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M7.5 11C8.32843 11 9 11.6716 9 12.5V16.5C9 17.3284 8.32843 18 7.5 18H3.5C2.67157 18 2 17.3284 2 16.5V12.5C2 11.6716 2.67157 11 3.5 11H7.5ZM16.5 11C17.3284 11 18 11.6716 18 12.5V16.5C18 17.3284 17.3284 18 16.5 18H12.5C11.6716 18 11 17.3284 11 16.5V12.5C11 11.6716 11.6716 11 12.5 11H16.5ZM7.5 2C8.32843 2 9 2.67157 9 3.5V7.5C9 8.32843 8.32843 9 7.5 9H3.5C2.67157 9 2 8.32843 2 7.5V3.5C2 2.67157 2.67157 2 3.5 2H7.5ZM16.5 2C17.3284 2 18 2.67157 18 3.5V7.5C18 8.32843 17.3284 9 16.5 9H12.5C11.6716 9 11 8.32843 11 7.5V3.5C11 2.67157 11.6716 2 12.5 2H16.5Z"
      />
    </svg>
  ),
  displayName: 'GridIcon',
});
