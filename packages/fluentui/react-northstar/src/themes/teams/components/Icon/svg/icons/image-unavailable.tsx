import * as React from 'react';
import { TeamsSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <path d="M2.85355 2.14646C2.65829 1.9512 2.34171 1.9512 2.14645 2.14646C1.95118 2.34172 1.95118 2.65831 2.14645 2.85357L3.55462 4.26174C3.20539 4.75215 3 5.35209 3 6V14C3 15.6569 4.34315 17 6 17H14C14.6479 17 15.2479 16.7946 15.7383 16.4454L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1465L2.85355 2.14646ZM9.41374 10.1209C9.24519 10.1923 9.08705 10.2961 8.94868 10.432L4.27937 15.0201C4.10191 14.7215 4 14.3726 4 14V6C4 5.6291 4.10096 5.28178 4.2769 4.98403L9.41374 10.1209ZM6 16C5.63085 16 5.28505 15.9 4.98824 15.7256L9.64956 11.1453C9.84409 10.9542 10.1559 10.9542 10.3504 11.1453L15.0118 15.7256C14.7149 15.9 14.3692 16 14 16H6Z" />
      <path d="M16 6V13.8787L16.8984 14.7771C16.9647 14.5292 17 14.2687 17 14V6C17 4.34315 15.6569 3 14 3H6C5.73127 3 5.47078 3.03534 5.22295 3.10161L6.12134 4H14C15.1046 4 16 4.89543 16 6Z" />
      <path d="M14 7.5C14 6.67157 13.3284 6 12.5 6C11.6716 6 11 6.67157 11 7.5C11 8.32843 11.6716 9 12.5 9C13.3284 9 14 8.32843 14 7.5ZM13 7.5C13 7.77614 12.7761 8 12.5 8C12.2239 8 12 7.77614 12 7.5C12 7.22386 12.2239 7 12.5 7C12.7761 7 13 7.22386 13 7.5Z" />
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec;
