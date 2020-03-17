import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg className={classes.svg} viewBox="8 8 16 16" role="presentation" focusable="false">
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path d="M9.17,14.59c.06.77.12,1.56.12,2.33,0,.09,0,.17,0,.25s0,.21,0,.31a8.87,8.87,0,0,0,.41,2.72l.81-.81a8.71,8.71,0,0,1-.22-1.91,1.93,1.93,0,0,1,0-.24c0-.11,0-.21,0-.32,0-.81-.07-1.62-.13-2.41l-.08-.93A10.78,10.78,0,0,1,10,12.46c0-.25.24-.43.6-.44s.56.08.58.41.19,3.67.19,3.67a.5.5,0,0,0,.5.47h0a.5.5,0,0,0,.48-.53l-.2-3.76-.08-2c0-.34.33-.51.68-.49s.57.27.58.52l.1,4.55a.5.5,0,0,0,.5.49h0a.51.51,0,0,0,.49-.51s-.1-4.38-.09-4.57c0-.76,0-1.35.86-1.31.67,0,.62.64.61,1.51l0,.84-.12,2.85,1.05-1L16.82,11l0-.38c0-.25.32-.39.65-.36s.55.23.54.47-.06.68-.1,1.21L19,10.86c0-.08,0-.16,0-.22a1.48,1.48,0,0,0-1.54-1.37,2,2,0,0,0-.68.12A1.48,1.48,0,0,0,15.19,8a1.85,1.85,0,0,0-1.12.27,2,2,0,0,0-.58.75,1.58,1.58,0,0,0-2.33,1.23v.87a2,2,0,0,0-.61-.1A1.49,1.49,0,0,0,9,12.41a11,11,0,0,0,.09,1.27Z" />
        <path d="M23.85,8.86a.5.5,0,1,0-.71-.71l-.7.7h0L8.15,23.15a.48.48,0,0,0,0,.7.48.48,0,0,0,.7,0L10.67,22a1.71,1.71,0,0,0,.11.14,3.28,3.28,0,0,1,.4.53,1.68,1.68,0,0,0,1.19,1.09,10.1,10.1,0,0,0,2.15.21c.92,0,2.63,0,3.17-1.34l0-.25c0-.07,0-.2.06-.28a11,11,0,0,0,2.48-2.94l0-.1a2.41,2.41,0,0,1,.27-.48,3.39,3.39,0,0,1,1.26-.89l.13,0c.35-.14,1-.4,1-1.09a1.55,1.55,0,0,0-1.69-1.36,3.68,3.68,0,0,0-2.06.69l-.19.12c-.13.08-.26.16-.35.23l-.12.09c0-.61.11-1.54.19-2.42Zm-4.54,8.21a1.59,1.59,0,0,1,.27-.18l.24-.16a2.78,2.78,0,0,1,1.49-.51c.28,0,.69.14.7.32a1.42,1.42,0,0,1-.39.2l-.16.07A4.23,4.23,0,0,0,19.82,18a3.47,3.47,0,0,0-.4.67l0,.1A10.56,10.56,0,0,1,17,21.48a1.4,1.4,0,0,0-.28.74c0,.05,0,.1,0,.1h0c-.28.68-1.54.68-2.23.68a10,10,0,0,1-1.92-.18.75.75,0,0,1-.49-.49,4.21,4.21,0,0,0-.59-.83c0-.05-.09-.12-.14-.18l6.3-6.3c-.08,1.09-.13,1.79-.13,2v.35a.66.66,0,0,0,.27.17C18,17.55,18.26,17.77,19.31,17.07Z" />
      </g>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path d="M23.85,8.86a.5.5,0,1,0-.71-.71l-15,15a.48.48,0,0,0,0,.7.48.48,0,0,0,.7,0L10.67,22a1.71,1.71,0,0,0,.11.14,3.28,3.28,0,0,1,.4.53,1.68,1.68,0,0,0,1.19,1.09,10.1,10.1,0,0,0,2.15.21c.92,0,2.63,0,3.17-1.34l0-.25c0-.07,0-.2.06-.28a11,11,0,0,0,2.48-2.94l0-.1a2.41,2.41,0,0,1,.27-.48,3.39,3.39,0,0,1,1.26-.89l.13,0c.35-.14,1-.4,1-1.09a1.55,1.55,0,0,0-1.69-1.36,3.68,3.68,0,0,0-2.06.69l-.19.12c-.13.08-.26.16-.35.23l-.12.09c0-.61.11-1.54.19-2.42Z" />
        <path d="M17.09,9.73l-.38,3.44L19,10.86c0-.07,0-.16,0-.22a1.48,1.48,0,0,0-1.54-1.37,1.87,1.87,0,0,0-.62.1A.35.35,0,0,1,17.09,9.73Z" />
        <path d="M9.17,14.59c.06.77.12,1.56.12,2.33,0,.09,0,.17,0,.25s0,.21,0,.31a8.87,8.87,0,0,0,.41,2.72L15.92,14l.48-4.3a.34.34,0,0,1,.38-.31h0A1.49,1.49,0,0,0,15.19,8a1.85,1.85,0,0,0-1.12.27A2.06,2.06,0,0,0,13.5,9h0a.34.34,0,0,1,.37.32l.4,5.55a.35.35,0,0,1-.33.37h0a.35.35,0,0,1-.35-.32l-.4-5.55A.35.35,0,0,1,13.47,9a1.58,1.58,0,0,0-2.31,1.24v.84l.09,0a.36.36,0,0,1,.39.31L12.21,16a.36.36,0,0,1-.31.39h0a.35.35,0,0,1-.35-.31L11,11.45a.34.34,0,0,1,.17-.34,2,2,0,0,0-.57-.09A1.49,1.49,0,0,0,9,12.41a11,11,0,0,0,.09,1.27Z" />
      </g>
    </svg>
  ),
  styles: {}
} as TeamsProcessedSvgIconSpec;
