import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path d="M15 20.47c0 .14-.05.25-.15.35-.1.1-.22.15-.35.15h-1.98c-.21 0-.4-.04-.59-.12-.18-.08-.34-.18-.48-.32a1.37 1.37 0 0 1-.33-.48 1.4 1.4 0 0 1-.12-.58v-7a1.482 1.482 0 0 1 .45-1.07c.14-.14.3-.24.48-.32.18-.08.38-.12.59-.12h1.98c.14 0 .25.05.35.15.1.1.15.22.15.35v9.01zm-1-.5v-8h-1.5a.47.47 0 0 0-.35.15c-.1.1-.15.22-.15.35v7c0 .14.05.25.15.35.1.1.22.15.35.15H14zm7-.5a1.482 1.482 0 0 1-.45 1.07c-.14.14-.3.24-.48.32-.18.08-.38.12-.59.12H17.5c-.13 0-.25-.05-.35-.15-.1-.1-.15-.22-.15-.35v-9c0-.14.05-.25.15-.35.1-.1.22-.15.35-.15h1.98c.21 0 .4.04.59.12.18.08.34.19.48.32.14.14.25.29.33.48.08.18.12.38.12.59v6.98zm-1 0v-7a.47.47 0 0 0-.15-.35c-.1-.1-.22-.15-.35-.15H18v8h1.5c.14 0 .25-.05.35-.15.1-.1.15-.22.15-.35z" />
    </svg>
  ),
  styles: {},
  exportedAs: 'hold'
} as TeamsProcessedSvgIconSpec;
