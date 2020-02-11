import * as React from 'react'
import { TeamsProcessedSvgIconSpec } from '../types'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path d="M23.5 7.875v16.25c0 .248-.049.485-.146.713a1.935 1.935 0 0 1-1.016 1.016 1.798 1.798 0 0 1-.713.146h-11.25c-.248 0-.485-.05-.713-.147s-.43-.234-.606-.41-.312-.377-.41-.605a1.788 1.788 0 0 1-.146-.713V13.5h6.23V6h6.895c.246 0 .485.05.713.147.227.097.43.234.606.41s.312.377.41.605.146.466.146.713zM13.48 6.508v5.742H8.608c.098-.24.244-.478.44-.713.501-.638.992-1.21 1.474-1.718.54-.58 1.039-1.14 1.494-1.68.163-.189.394-.472.694-.85.234-.299.491-.56.772-.78zm3.458 16.367a.881.881 0 0 0-.078-.352 1.022 1.022 0 0 0-.205-.303 1.035 1.035 0 0 0-.303-.205c-.117-.051-.235-.078-.352-.078s-.234.027-.351.078a.953.953 0 0 0-.508.508c-.053.117-.078.235-.078.352s.025.234.078.351a.975.975 0 0 0 .86.586.849.849 0 0 0 .35-.078.998.998 0 0 0 .304-.205 1.01 1.01 0 0 0 .205-.303.881.881 0 0 0 .078-.351zM15.375 16v5h1.25v-5h-1.25z" />
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec
