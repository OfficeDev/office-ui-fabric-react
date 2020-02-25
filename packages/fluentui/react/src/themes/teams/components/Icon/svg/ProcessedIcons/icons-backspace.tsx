import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="M23.96 19.84c0 .28-.06.55-.18.8s-.27.47-.47.66-.42.34-.68.45-.52.16-.8.16H13.5c-.31 0-.61-.06-.89-.19s-.53-.3-.73-.54l-3.34-3.9c-.16-.18-.28-.39-.36-.62a1.94 1.94 0 0 1-.13-.71 2.043 2.043 0 0 1 .5-1.33l3.34-3.89c.2-.23.44-.42.73-.54.29-.13.59-.19.89-.19h8.34c.28 0 .55.05.8.16s.48.26.68.45.35.41.47.66.18.52.18.8v7.77zm-.92 0v-7.8c0-.16-.03-.3-.1-.45s-.16-.26-.27-.36-.24-.18-.38-.24a1.13 1.13 0 0 0-.45-.09H13.5c-.18 0-.35.04-.51.11-.16.07-.3.17-.42.31l-3.34 3.9c-.09.1-.16.21-.2.34s-.07.26-.07.39c0 .27.09.51.27.73l3.34 3.9c.11.14.25.24.42.31s.33.11.5.11h8.34c.16 0 .31-.03.45-.09s.27-.14.38-.24.2-.22.27-.36.11-.32.11-.47zm-2.74-6.4c0 .14-.05.25-.15.35l-2.2 2.2 2.2 2.2a.485.485 0 0 1 0 .7c-.1.1-.22.15-.35.15-.13 0-.25-.05-.35-.14l-2.2-2.2-2.2 2.2c-.1.09-.22.14-.35.14a.47.47 0 0 1-.35-.15.485.485 0 0 1 0-.7l2.2-2.2-2.2-2.2a.485.485 0 0 1 0-.7.485.485 0 0 1 .7 0l2.2 2.2 2.2-2.2a.485.485 0 0 1 .7 0c.1.1.15.21.15.35z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M23.98 12.06v7.8c0 .28-.06.55-.18.8s-.27.47-.47.66-.42.34-.68.45c-.25.11-.52.16-.8.16h-8.34c-.31 0-.61-.06-.9-.19s-.53-.3-.73-.54l-3.34-3.9c-.16-.18-.28-.39-.36-.62s-.13-.47-.13-.72.04-.49.13-.72c.09-.23.21-.43.37-.62l3.34-3.89c.2-.23.44-.42.73-.54.29-.13.59-.19.9-.19h8.34c.28 0 .55.05.8.16.26.11.48.26.68.45s.35.41.47.66.17.5.17.79zm-3.67 1.39a.47.47 0 0 0-.15-.35.485.485 0 0 0-.7 0l-2.2 2.2-2.2-2.2c-.1-.1-.22-.15-.35-.15s-.24.05-.34.15a.485.485 0 0 0 0 .7l2.2 2.19-2.2 2.2a.485.485 0 0 0 0 .7c.1.1.22.15.35.15.14 0 .26-.05.35-.14l2.2-2.2 2.2 2.2c.09.09.21.14.35.14.14 0 .25-.05.35-.15a.485.485 0 0 0 0-.7l-2.2-2.2 2.2-2.19c.09-.09.14-.21.14-.35z"
        />
      </g>
    </svg>
  ),
  styles: {}
} as TeamsProcessedSvgIconSpec;
