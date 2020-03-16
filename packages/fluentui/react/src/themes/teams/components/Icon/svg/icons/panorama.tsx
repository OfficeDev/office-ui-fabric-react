import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg className={classes.svg} viewBox="8 8 16 16" role="presentation" focusable="false">
      <path d="M24,12v8.1a1.51,1.51,0,0,1-1.51,1.5,2.05,2.05,0,0,1-.55-.1A27.47,27.47,0,0,0,16,20.37,28.58,28.58,0,0,0,9.89,21.5a1.65,1.65,0,0,1-.38.05A1.5,1.5,0,0,1,8,20.05V12a1.51,1.51,0,0,1,1.51-1.5,2.2,2.2,0,0,1,.56.1A26.28,26.28,0,0,0,16,11.66a27.84,27.84,0,0,0,6.1-1.16,1.75,1.75,0,0,1,.4-.05A1.5,1.5,0,0,1,24,12Zm-8,.65a27.6,27.6,0,0,1-6.34-1.19l-.15,0a.57.57,0,0,0-.57.55v8.11a.57.57,0,0,0,.57.56c.2,0,1.64-.4,2-.48V17.85h2.36v1.8l.58-.1V17.27H18v2.35l.59.1V17.85h2.35v2.38c.29.07,1.41.38,1.6.38a.57.57,0,0,0,.57-.55V12a.57.57,0,0,0-.56-.56,1.21,1.21,0,0,0-.33.07A26.53,26.53,0,0,1,16,12.6Zm-3.34,2.31a1.18,1.18,0,1,1-1.18,1.18A1.2,1.2,0,0,1,12.66,14.91Zm7.06,0a1.18,1.18,0,0,1,0,2.36,1.21,1.21,0,0,1-1.18-1.18A1.2,1.2,0,0,1,19.72,14.91Zm-3.53-.59a1.21,1.21,0,0,1,1.18,1.18,1.19,1.19,0,0,1-1.18,1.17,1.18,1.18,0,0,1,0-2.35Z" />
    </svg>
  ),
  styles: {}
} as TeamsProcessedSvgIconSpec;
