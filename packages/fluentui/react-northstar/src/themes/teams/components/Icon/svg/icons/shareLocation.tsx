import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg className={classes.svg} viewBox="8 8 16 16" role="presentation" focusable="false">
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path d="M20.1,18.38a.51.51,0,0,1-.5-.5A6.61,6.61,0,0,0,13,11.34a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5,7.6,7.6,0,0,1,7.65,7.54A.5.5,0,0,1,20.1,18.38Z" />
        <path d="M22.49,18.38a.5.5,0,0,1-.5-.5A9,9,0,0,0,13,9a.5.5,0,0,1,0-1,10,10,0,0,1,10,9.88A.51.51,0,0,1,22.49,18.38Z" />
        <path d="M14,14a2.9,2.9,0,0,1,3,3.12,3.71,3.71,0,0,1-.64,2.08c-.35.53-.74,1-1.14,1.56-.25.31-.49.63-.73.95s-.33.47-.49.71c-.15-.24-.32-.47-.49-.71s-.48-.64-.73-1c-.41-.52-.79-1-1.13-1.54A3.7,3.7,0,0,1,11,17.12,2.9,2.9,0,0,1,14,14m0-1a3.89,3.89,0,0,0-4,4.12,4.69,4.69,0,0,0,.81,2.63c.58.89,1.27,1.69,1.9,2.55l.59.87c.14.22.26.46.42.67A.34.34,0,0,0,14,24a.33.33,0,0,0,.28-.16c.16-.21.28-.45.42-.67s.39-.58.6-.87c.62-.85,1.31-1.66,1.89-2.55A4.69,4.69,0,0,0,18,17.12,3.89,3.89,0,0,0,14,13Z" />
        <circle cx="14" cy="17" r="1" />
      </g>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path d="M20.1,18.38a.51.51,0,0,1-.5-.5A6.61,6.61,0,0,0,13,11.34a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5,7.6,7.6,0,0,1,7.65,7.54A.5.5,0,0,1,20.1,18.38Z" />
        <path d="M22.49,18.38a.5.5,0,0,1-.5-.5A9,9,0,0,0,13,9a.5.5,0,0,1,0-1,10,10,0,0,1,10,9.88A.51.51,0,0,1,22.49,18.38Z" />
        <path d="M14,13a3.89,3.89,0,0,1,4,4.12,4.69,4.69,0,0,1-.81,2.63c-.58.89-1.27,1.7-1.89,2.55q-.32.43-.6.87c-.14.22-.26.46-.42.67a.32.32,0,0,1-.56,0c-.16-.21-.28-.45-.42-.67l-.59-.87c-.63-.86-1.32-1.66-1.9-2.55A4.69,4.69,0,0,1,10,17.12,3.89,3.89,0,0,1,14,13Zm0,2.5A1.5,1.5,0,1,0,15.5,17,1.5,1.5,0,0,0,14,15.5Z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
