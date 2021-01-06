import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ShareToIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg
      style={{ overflow: 'visible' }}
      className={classes.svg}
      viewBox="2 2 16 16"
      role="presentation"
      focusable="false"
    >
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M19 5.5C19 7.98528 16.9853 10 14.5 10C12.0147 10 10 7.98528 10 5.5C10 3.01472 12.0147 1 14.5 1C16.9853 1 19 3.01472 19 5.5ZM16.8532 5.85395L16.8557 5.85143C16.9026 5.80398 16.938 5.74949 16.9621 5.69139C16.9861 5.63331 16.9996 5.5697 17 5.503L17 5.5L17 5.497C16.9996 5.4303 16.9861 5.36669 16.9621 5.30861C16.9377 5.24964 16.9015 5.19439 16.8536 5.14645L14.8536 3.14645C14.6583 2.95118 14.3417 2.95118 14.1464 3.14645C13.9512 3.34171 13.9512 3.65829 14.1464 3.85355L15.2929 5H12.5C12.2239 5 12 5.22386 12 5.5C12 5.77614 12.2239 6 12.5 6L15.2929 6L14.1464 7.14645C13.9512 7.34171 13.9512 7.65829 14.1464 7.85355C14.3417 8.04881 14.6583 8.04882 14.8536 7.85355L16.8532 5.85395Z" />
        <path d="M17 13V10.4003C17.3578 10.2174 17.6929 9.99647 18 9.74284V13C18 14.1046 17.1046 15 16 15H4C2.89543 15 2 14.1046 2 13V6C2 4.89543 2.89543 4 4 4H9.20703C9.11588 4.32228 9.05337 4.65659 9.02242 5H4C3.44772 5 3 5.44772 3 6V13C3 13.5523 3.44772 14 4 14H16C16.5523 14 17 13.5523 17 13Z" />
        <path d="M5 16.5C5 16.2239 5.22386 16 5.5 16H14.5C14.7761 16 15 16.2239 15 16.5C15 16.7761 14.7761 17 14.5 17H5.5C5.22386 17 5 16.7761 5 16.5Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M19 5.5C19 7.98528 16.9853 10 14.5 10C12.0147 10 10 7.98528 10 5.5C10 3.01472 12.0147 1 14.5 1C16.9853 1 19 3.01472 19 5.5ZM16.8532 5.85395L16.8557 5.85143C16.9026 5.80398 16.938 5.74949 16.9621 5.69139C16.9861 5.63331 16.9996 5.5697 17 5.503L17 5.5L17 5.497C16.9996 5.4303 16.9861 5.36669 16.9621 5.30861C16.9377 5.24964 16.9015 5.19439 16.8536 5.14645L14.8536 3.14645C14.6583 2.95118 14.3417 2.95118 14.1464 3.14645C13.9512 3.34171 13.9512 3.65829 14.1464 3.85355L15.2929 5H12.5C12.2239 5 12 5.22386 12 5.5C12 5.77614 12.2239 6 12.5 6L15.2929 6L14.1464 7.14645C13.9512 7.34171 13.9512 7.65829 14.1464 7.85355C14.3417 8.04881 14.6583 8.04882 14.8536 7.85355L16.8532 5.85395Z" />
        <path d="M14.5 11C15.8296 11 17.0491 10.5282 18 9.74284V13C18 14.1046 17.1046 15 16 15H4C2.89543 15 2 14.1046 2 13V6C2 4.89543 2.89543 4 4 4H9.20703C9.07217 4.47683 9 4.97999 9 5.5C9 8.53757 11.4624 11 14.5 11Z" />
        <path d="M5.5 16C5.22386 16 5 16.2239 5 16.5C5 16.7761 5.22386 17 5.5 17H14.5C14.7761 17 15 16.7761 15 16.5C15 16.2239 14.7761 16 14.5 16H5.5Z" />
      </g>
    </svg>
  ),
  displayName: 'ShareToIcon',
});
