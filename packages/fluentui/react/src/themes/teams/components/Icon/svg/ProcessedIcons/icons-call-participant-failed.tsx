import * as React from 'react'
import { TeamsProcessedSvgIconSpec } from '../types'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="8 8 16 16">
      <path d="M22.828 20.945c0 .199-.039.389-.117.57-.078.183-.188.344-.328.485s-.303.25-.485.328a1.44 1.44 0 0 1-.57.117H10.672a1.43 1.43 0 0 1-.57-.117c-.183-.078-.344-.187-.485-.328s-.25-.302-.328-.484a1.43 1.43 0 0 1-.117-.57c0-.245.06-.482.18-.712l5.328-9.89c.13-.24.314-.43.554-.574a1.467 1.467 0 0 1 1.532 0c.239.143.423.334.554.574l5.328 9.89c.12.23.18.467.18.711zm-6.078-1a.698.698 0 0 0-.063-.28.815.815 0 0 0-.164-.243.815.815 0 0 0-.242-.164c-.093-.041-.187-.063-.281-.063s-.188.022-.281.063a.78.78 0 0 0-.469.688c0 .093.02.187.063.28a.769.769 0 0 0 .406.407c.094.042.187.062.281.062s.188-.02.281-.062a.78.78 0 0 0 .469-.688zm-1.25-6.5v5h1v-5h-1z" />
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec
