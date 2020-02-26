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
          d="M22.73 14.023l-3.876-3.877a2.062 2.062 0 0 0-1.958-.561c-.66.161-1.186.632-1.375 1.228a.5.5 0 0 0 .955.3c.082-.26.34-.48.657-.557.366-.09.735.02 1.013.298L21.293 14H18.5c-.718 0-1.319.508-1.465 1.183a3.012 3.012 0 0 0-2.07 0A1.502 1.502 0 0 0 13.5 14h-2.793l3.147-3.146a.5.5 0 1 0-.708-.708L9.27 14.023A1.498 1.498 0 0 0 8 15.5v2.765c0 .67.442 1.262 1.075 1.44.485.134 1.298.295 2.425.295s1.94-.161 2.425-.296A1.491 1.491 0 0 0 15 18.264v-1.998A1.933 1.933 0 0 1 16 16c.478 0 .813.155 1 .266v1.999c0 .67.441 1.261 1.075 1.44.705.195 1.522.295 2.425.295s1.72-.1 2.426-.296A1.492 1.492 0 0 0 24 18.264V15.5c0-.748-.552-1.365-1.27-1.477zM14 18.265c0 .223-.142.42-.344.476-.424.118-1.142.259-2.156.259s-1.732-.14-2.156-.259A.489.489 0 0 1 9 18.265V15.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v2.765zm9 0a.49.49 0 0 1-.343.476c-.425.118-1.144.259-2.157.259s-1.732-.14-2.156-.259a.489.489 0 0 1-.344-.476V15.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v2.765z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M22.73 14.023l-3.876-3.877a2.062 2.062 0 0 0-1.958-.561c-.66.161-1.186.632-1.375 1.228a.5.5 0 0 0 .955.3c.082-.26.34-.48.657-.557.366-.09.735.02 1.013.298L21.293 14H18.5c-.718 0-1.319.508-1.465 1.183a3.012 3.012 0 0 0-2.07 0A1.502 1.502 0 0 0 13.5 14h-2.793l3.147-3.146a.5.5 0 1 0-.708-.708L9.27 14.023A1.498 1.498 0 0 0 8 15.5v2.765c0 .67.442 1.262 1.075 1.44.485.134 1.298.295 2.425.295s1.94-.161 2.425-.296A1.491 1.491 0 0 0 15 18.264v-1.998A1.933 1.933 0 0 1 16 16c.478 0 .813.155 1 .266v1.999c0 .67.441 1.261 1.075 1.44.705.195 1.522.295 2.425.295s1.72-.1 2.426-.296A1.492 1.492 0 0 0 24 18.264V15.5c0-.748-.552-1.365-1.27-1.477z"
        />
      </g>
    </svg>
  ),
  styles: {}
} as TeamsProcessedSvgIconSpec;
