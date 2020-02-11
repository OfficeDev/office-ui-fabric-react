import * as React from 'react'
import { TeamsProcessedSvgIconSpec } from '../types'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path d="M16.938 14.766v-.008 8.672L8 21.883V10.164l8.938-1.586v6.188zm-4.665 3.914c.354 0 .657-.084.907-.254.25-.17.453-.384.609-.645.156-.26.27-.549.344-.867.073-.317.11-.625.11-.922s-.036-.6-.106-.91c-.07-.31-.183-.59-.336-.844a1.903 1.903 0 0 0-.602-.617c-.247-.159-.548-.238-.902-.238-.37 0-.687.08-.95.242a1.995 1.995 0 0 0-.644.633c-.167.26-.288.552-.363.875a4.203 4.203 0 0 0-.113.96c0 .319.039.631.117.938.078.308.199.584.363.828.164.245.376.444.637.594.26.152.57.227.93.227zm-.117-4.305c.219 0 .396.056.531.168.136.112.241.253.317.422.075.17.126.352.152.547a3.685 3.685 0 0 1-.004 1.094c-.029.19-.082.365-.16.523-.078.16-.186.291-.324.394-.138.105-.317.157-.535.157a.713.713 0 0 1-.493-.172 1.218 1.218 0 0 1-.308-.422 1.988 1.988 0 0 1-.156-.535 3.44 3.44 0 0 1-.043-.512c0-.156.015-.33.047-.523.03-.193.084-.374.16-.543a1.2 1.2 0 0 1 .312-.426.746.746 0 0 1 .504-.172zm6.93 1.586l-1.313-1.016v-3.367h5.68a.54.54 0 0 1 .54.484l-4.907 3.899zm0 .758a.404.404 0 0 0 .258-.086L24 12.93v6.984c0 .151-.054.28-.16.383a.534.534 0 0 1-.387.156h-5.68V15.82l1.055.813a.4.4 0 0 0 .258.086z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec
