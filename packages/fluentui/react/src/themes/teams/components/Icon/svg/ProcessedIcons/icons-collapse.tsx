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
          d="M16 23c0 .14-.05.25-.15.35a.485.485 0 0 1-.7 0A.47.47 0 0 1 15 23v-4.29l-4.15 4.14a.485.485 0 0 1-.7 0 .485.485 0 0 1 0-.7L14.29 18H9.5a.47.47 0 0 1-.35-.15.485.485 0 0 1 0-.7c.1-.1.21-.15.35-.15h6c.14 0 .25.05.35.15.1.1.15.22.15.35V23zm7.5-8.5c0 .14-.05.25-.15.35-.1.1-.22.15-.35.15h-5.5a.47.47 0 0 1-.35-.15c-.1-.1-.15-.22-.15-.35V9c0-.14.05-.25.15-.35a.485.485 0 0 1 .7 0c.1.1.15.21.15.35v4.29l4.15-4.14a.485.485 0 0 1 .7 0c.1.1.15.21.15.35 0 .14-.05.25-.15.35L18.71 14H23c.13 0 .25.05.35.15.1.1.15.21.15.35z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M16 17.47v5.5c0 .14-.03.26-.08.38s-.13.23-.22.32-.2.16-.32.22c-.12.05-.25.08-.38.08-.14 0-.26-.03-.38-.08s-.23-.13-.32-.22-.16-.2-.22-.32a.995.995 0 0 1-.08-.38v-3.09l-3.29 3.3a.85.85 0 0 1-.32.21 1.036 1.036 0 0 1-.77-.01c-.12-.05-.23-.13-.32-.22s-.16-.2-.22-.32a.91.91 0 0 1-.08-.37c0-.13.02-.27.07-.39s.12-.23.21-.32l3.3-3.29H9.5c-.14 0-.26-.03-.38-.08-.12-.06-.23-.13-.32-.22s-.16-.2-.22-.32a.995.995 0 0 1-.08-.38.995.995 0 0 1 .3-.7c.09-.09.2-.16.32-.22.12-.05.25-.08.38-.08H15a.995.995 0 0 1 .7.3c.09.09.16.2.22.32.05.12.08.25.08.38zm8-3c0 .14-.03.26-.08.38s-.13.23-.22.32-.2.16-.32.22c-.12.05-.25.08-.38.08h-6c-.14 0-.26-.03-.38-.08s-.23-.13-.32-.22-.16-.2-.22-.32a.995.995 0 0 1-.08-.38v-5.5a.995.995 0 0 1 .3-.7c.09-.09.2-.16.32-.22.12-.05.24-.08.38-.08a.995.995 0 0 1 .7.3c.09.09.16.2.22.32.05.12.08.25.08.38v3.09l3.29-3.3c.09-.09.2-.17.32-.21.12-.05.25-.07.39-.07a.995.995 0 0 1 .7.3c.09.09.16.2.22.32.05.11.08.24.08.37 0 .14-.03.27-.07.39-.05.12-.12.23-.21.32l-3.3 3.29H23a.995.995 0 0 1 .7.3c.09.09.16.2.22.32.05.12.08.25.08.38z"
        />
      </g>
    </svg>
  ),
  styles: {}
} as TeamsProcessedSvgIconSpec;
