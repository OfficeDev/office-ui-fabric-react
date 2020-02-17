import * as React from 'react'
import cx from 'classnames'
import { TeamsProcessedSvgIconSpec } from '../types'
import { teamsIconClassNames } from '../teamsIconClassNames'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="M24 11.5v9c0 .198-.04.389-.117.57-.078.183-.188.344-.328.485s-.303.25-.485.328a1.44 1.44 0 0 1-.57.117h-13a1.43 1.43 0 0 1-.57-.117c-.183-.078-.344-.188-.485-.328s-.25-.302-.328-.485A1.43 1.43 0 0 1 8 20.5v-9c0-.198.04-.388.117-.57a1.535 1.535 0 0 1 .813-.813A1.43 1.43 0 0 1 9.5 10h13c.197 0 .387.04.57.117a1.54 1.54 0 0 1 .813.813c.078.182.117.372.117.57zm-1 9v-9a.486.486 0 0 0-.148-.352A.484.484 0 0 0 22.5 11h-13a.48.48 0 0 0-.352.148c-.1.1-.148.217-.148.352v9c0 .136.049.253.148.352.1.1.216.148.352.148h13a.48.48 0 0 0 .352-.148A.485.485 0 0 0 23 20.5zm-10-8a.48.48 0 0 1-.148.352c-.1.099-.217.148-.352.148H11v1.5a.48.48 0 0 1-.148.352c-.1.099-.217.148-.352.148a.479.479 0 0 1-.352-.148A.477.477 0 0 1 10 14.5v-2c0-.135.049-.252.148-.352A.48.48 0 0 1 10.5 12h2c.135 0 .252.05.352.148.098.1.148.217.148.352zm0 7a.48.48 0 0 1-.148.352.48.48 0 0 1-.352.148h-2a.477.477 0 0 1-.352-.148A.477.477 0 0 1 10 19.5v-2c0-.135.049-.252.148-.352A.48.48 0 0 1 10.5 17c.135 0 .252.05.352.148.098.1.148.217.148.352V19h1.5c.135 0 .252.05.352.148.098.1.148.217.148.352zm9-7v2c0 .136-.05.253-.148.352-.1.099-.217.148-.352.148a.476.476 0 0 1-.352-.148A.477.477 0 0 1 21 14.5V13h-1.5a.479.479 0 0 1-.352-.148A.477.477 0 0 1 19 12.5c0-.135.049-.252.148-.352A.48.48 0 0 1 19.5 12h2c.135 0 .252.05.352.148.097.1.148.217.148.352zm0 5v2c0 .136-.05.253-.148.352A.48.48 0 0 1 21.5 20h-2a.477.477 0 0 1-.352-.148A.477.477 0 0 1 19 19.5a.48.48 0 0 1 .148-.352A.48.48 0 0 1 19.5 19H21v-1.5c0-.135.049-.252.148-.352A.478.478 0 0 1 21.5 17c.135 0 .252.05.352.148.097.1.148.217.148.352z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M23.07 10.117a1.54 1.54 0 0 1 .813.813c.078.182.117.372.117.57v9c0 .198-.04.389-.117.57-.078.183-.188.344-.328.485s-.303.25-.485.328a1.437 1.437 0 0 1-.57.117h-13c-.198 0-.388-.04-.57-.117-.183-.078-.344-.188-.485-.328s-.25-.302-.328-.485A1.43 1.43 0 0 1 8 20.5v-9c0-.198.04-.388.117-.57A1.535 1.535 0 0 1 9.5 10h13c.197 0 .388.04.57.117zM10.5 12a.481.481 0 0 0-.352.148.48.48 0 0 0-.148.352v2c0 .136.05.253.148.352A.48.48 0 0 0 10.5 15a.48.48 0 0 0 .352-.148A.481.481 0 0 0 11 14.5V13h1.5a.48.48 0 0 0 .352-.148A.481.481 0 0 0 13 12.5a.483.483 0 0 0-.148-.352A.483.483 0 0 0 12.5 12h-2zm-.352 5.148c-.099.1-.148.217-.148.352v2c0 .136.05.253.148.352.1.1.216.148.352.148h2a.479.479 0 0 0 .352-.148A.481.481 0 0 0 13 19.5a.484.484 0 0 0-.148-.352A.483.483 0 0 0 12.5 19H11v-1.5a.484.484 0 0 0-.148-.352A.483.483 0 0 0 10.5 17a.481.481 0 0 0-.352.148zM19.5 12a.481.481 0 0 0-.352.148c-.1.1-.148.217-.148.352 0 .136.049.253.148.352A.48.48 0 0 0 19.5 13H21v1.5c0 .136.049.253.148.352A.48.48 0 0 0 21.5 15c.135 0 .252-.05.352-.148A.481.481 0 0 0 22 14.5v-2a.483.483 0 0 0-.148-.352A.484.484 0 0 0 21.5 12h-2zm1.648 5.148A.48.48 0 0 0 21 17.5V19h-1.5a.481.481 0 0 0-.352.148.48.48 0 0 0-.148.352c0 .136.049.253.148.352.1.1.216.148.352.148h2a.48.48 0 0 0 .352-.148A.481.481 0 0 0 22 19.5v-2a.484.484 0 0 0-.148-.352A.484.484 0 0 0 21.5 17a.481.481 0 0 0-.352.148z"
        />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec
