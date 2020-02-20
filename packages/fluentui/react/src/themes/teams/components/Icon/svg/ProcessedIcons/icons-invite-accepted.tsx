import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path d="M11 13h2v2h-2zM14 13h2v2h-2zM11 16h2v2h-2z" />
      <path d="M23 16.7v-5.2c0-.8-.7-1.5-1.5-1.5H19V9c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1h-4V9c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1h-2.5c-.8 0-1.5.7-1.5 1.5v9.4c0 .7.5 1.2 1.1 1.4 1.8.5 3.8.7 5.9.7.2 0 .3-.1.4-.2.8.8 1.9 1.2 3.1 1.2 2.5 0 4.5-2 4.5-4.5 0-1.1-.4-2.1-1-2.8zM15.8 22c-1.9 0-3.7-.2-5.4-.7-.2 0-.3-.2-.3-.4v-9.4c0-.3.2-.5.5-.5H13v1c0 .3.2.5.5.5s.5-.2.5-.5v-1h4v1c0 .3.2.5.5.5s.5-.2.5-.5v-1h2.5c.3 0 .5.2.5.5v4.3c-.7-.5-1.6-.8-2.5-.8-2.5 0-4.5 2-4.5 4.5 0 .9.3 1.8.8 2.5zm3.7 1c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
      <path d="M19 21.3l-1.6-1.6.7-.7.9.9 1.9-1.9.7.7z" />
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
