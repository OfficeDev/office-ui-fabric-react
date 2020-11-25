import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path
        className={cx(teamsIconClassNames.outline, classes.outlinePart)}
        d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM7.15467 12.4273C8.66416 13.9463 11.0877 14.0045 12.6671 12.5961L12.8453 12.4273C13.04 12.2314 13.3566 12.2304 13.5524 12.4251C13.7265 12.5981 13.7467 12.8674 13.6123 13.0627L13.5547 13.1322L13.5323 13.1545C11.5691 15.1054 8.39616 15.0953 6.44533 13.1322C6.25069 12.9363 6.25169 12.6197 6.44757 12.4251C6.64344 12.2304 6.96002 12.2314 7.15467 12.4273ZM12.5 7.5C13.0523 7.5 13.5 7.94772 13.5 8.5C13.5 9.05228 13.0523 9.5 12.5 9.5C11.9477 9.5 11.5 9.05228 11.5 8.5C11.5 7.94772 11.9477 7.5 12.5 7.5ZM7.5 7.5C8.05228 7.5 8.5 7.94772 8.5 8.5C8.5 9.05228 8.05228 9.5 7.5 9.5C6.94772 9.5 6.5 9.05228 6.5 8.5C6.5 7.94772 6.94772 7.5 7.5 7.5Z"
      />
      <path
        className={cx(teamsIconClassNames.filled, classes.filledPart)}
        d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM7.5 9.5C8.05228 9.5 8.5 9.05228 8.5 8.5C8.5 7.94772 8.05228 7.5 7.5 7.5C6.94772 7.5 6.5 7.94772 6.5 8.5C6.5 9.05228 6.94772 9.5 7.5 9.5ZM11.75 12.5C11.75 11.5335 10.9665 10.75 10 10.75C9.0335 10.75 8.25 11.5335 8.25 12.5C8.25 13.4665 9.0335 14.25 10 14.25C10.9665 14.25 11.75 13.4665 11.75 12.5ZM12.5 9.5C13.0523 9.5 13.5 9.05228 13.5 8.5C13.5 7.94772 13.0523 7.5 12.5 7.5C11.9477 7.5 11.5 7.94772 11.5 8.5C11.5 9.05228 11.9477 9.5 12.5 9.5Z"
      />
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
