import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 48 48" className={classes.svg}>
      <g>
        <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
          <path d="M24 24c-4.135 0-7.5-3.364-7.5-7.5S19.865 9 24 9c4.137 0 7.5 3.366 7.5 7.5S28.137 24 24 24zm0-12c-2.481 0-4.5 2.02-4.5 4.5S21.519 21 24 21s4.5-2.018 4.5-4.5S26.481 12 24 12zM12.715 27.786a1.5 1.5 0 0 1-1.132-.516C8.95 24.235 7.5 20.41 7.5 16.5s1.45-7.734 4.083-10.767a1.499 1.499 0 1 1 2.265 1.966c-2.19 2.524-3.348 5.567-3.348 8.802s1.157 6.278 3.347 8.802a1.5 1.5 0 0 1-1.132 2.483zM35.285 27.786a1.5 1.5 0 0 1-1.134-2.483c2.192-2.522 3.349-5.566 3.349-8.802s-1.157-6.28-3.349-8.802a1.501 1.501 0 0 1 2.268-1.966C39.049 8.765 40.5 12.59 40.5 16.5s-1.45 7.736-4.081 10.77c-.299.34-.715.515-1.134.515z" />
          <path d="M7.273 33c-.41 0-.82-.166-1.116-.497C2.187 28.079 0 22.395 0 16.5 0 10.605 2.187 4.92 6.157.499a1.5 1.5 0 1 1 2.232 2.004C4.915 6.374 3 11.345 3 16.5c0 5.155 1.915 10.125 5.39 13.998A1.5 1.5 0 0 1 7.272 33zM40.729 33a1.5 1.5 0 0 1-1.116-2.502C43.086 26.627 45 21.655 45 16.502c0-5.155-1.913-10.127-5.388-13.998A1.5 1.5 0 0 1 41.845.499C45.815 4.923 48 10.605 48 16.5c0 5.894-2.186 11.578-6.155 16.002a1.492 1.492 0 0 1-1.116.498zM31.5 45h-15a1.5 1.5 0 0 1-1.446-1.9l4.302-15.487a1.505 1.505 0 0 1 1.848-1.044c2.12.59 3.468.59 5.595 0a1.503 1.503 0 0 1 1.845 1.044l4.3 15.486c.126.452.033.935-.249 1.31a1.506 1.506 0 0 1-1.195.592zm-13.027-3h11.052L26.14 29.8a11.168 11.168 0 0 1-4.276 0L18.473 42z" />
        </g>
        <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
          <path d="M24 24c-4.135 0-7.5-3.364-7.5-7.5S19.865 9 24 9c4.137 0 7.5 3.366 7.5 7.5S28.137 24 24 24zM12.715 27.786a1.5 1.5 0 0 1-1.132-.516C8.95 24.235 7.5 20.41 7.5 16.5s1.45-7.734 4.083-10.767a1.499 1.499 0 1 1 2.265 1.966c-2.19 2.524-3.348 5.567-3.348 8.802s1.157 6.278 3.347 8.802a1.5 1.5 0 0 1-1.132 2.483zM35.285 27.786a1.5 1.5 0 0 1-1.134-2.483c2.192-2.522 3.349-5.566 3.349-8.802s-1.157-6.28-3.349-8.802a1.501 1.501 0 0 1 2.268-1.966C39.049 8.765 40.5 12.59 40.5 16.5s-1.45 7.736-4.081 10.77c-.299.34-.715.515-1.134.515z" />
          <path d="M7.273 33c-.41 0-.82-.166-1.116-.497C2.187 28.079 0 22.395 0 16.5 0 10.605 2.187 4.92 6.157.499a1.5 1.5 0 1 1 2.232 2.004C4.915 6.374 3 11.345 3 16.5c0 5.155 1.915 10.125 5.39 13.998A1.5 1.5 0 0 1 7.272 33zM40.729 33a1.5 1.5 0 0 1-1.116-2.502C43.086 26.627 45 21.655 45 16.502c0-5.155-1.913-10.127-5.388-13.998A1.5 1.5 0 0 1 41.845.499C45.815 4.923 48 10.605 48 16.5c0 5.894-2.186 11.578-6.155 16.002a1.492 1.492 0 0 1-1.116.498zM31.5 45h-15a1.5 1.5 0 0 1-1.446-1.9l4.302-15.487a1.505 1.505 0 0 1 1.848-1.044c2.12.59 3.468.59 5.595 0a1.503 1.503 0 0 1 1.845 1.044l4.3 15.486c.126.452.033.935-.249 1.31a1.506 1.506 0 0 1-1.195.592z" />
        </g>
      </g>
    </svg>
  ),
  styles: {},
  exportedAs: 'broadcast'
} as TeamsProcessedSvgIconSpec;
