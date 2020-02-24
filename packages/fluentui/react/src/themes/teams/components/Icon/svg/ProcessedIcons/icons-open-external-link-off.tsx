import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path d="M23.852 23.148l-15-15C8.752 8.05 8.636 8 8.5 8s-.253.05-.352.148A.483.483 0 0 0 8 8.5c0 .136.05.253.148.352l2.174 2.173c-.136.016-.27.045-.396.1a1.583 1.583 0 0 0-.816.816c-.079.18-.118.37-.118.567V21.5c0 .198.04.387.117.566s.19.34.336.48c.14.147.301.259.48.337s.369.117.567.117h8.992c.199 0 .387-.04.567-.117s.343-.19.488-.336a1.4 1.4 0 0 0 .428-.877l2.181 2.182c.094.099.211.148.352.148s.258-.05.352-.148A.481.481 0 0 0 24 23.5a.483.483 0 0 0-.148-.352zM19.984 21.5c0 .136-.05.253-.148.352a.48.48 0 0 1-.352.148h-8.992a.48.48 0 0 1-.351-.148.481.481 0 0 1-.149-.352v-8.992c0-.135.05-.253.149-.352a.48.48 0 0 1 .351-.148h.813l4.247 4.248a.486.486 0 0 0-.075.252c0 .13.05.246.148.348s.216.152.352.152a.47.47 0 0 0 .25-.079l3.757 3.759v.812zM17.647 15.538l3.837-3.843V14c0 .13.05.246.149.348s.216.152.351.152c.13 0 .246-.05.348-.152s.152-.218.152-.348v-3.5a.475.475 0 0 0-.152-.352.487.487 0 0 0-.348-.148h-3.507a.481.481 0 0 0-.352.148.482.482 0 0 0-.148.352c0 .136.05.253.148.352.099.099.216.148.352.148h2.289l-3.826 3.831.707.707zM20.133 17.156a.482.482 0 0 0-.149.352v.367l1 1v-1.367a.483.483 0 0 0-.148-.352c-.099-.098-.216-.148-.352-.148s-.253.05-.351.148zM14.484 12.008a.48.48 0 0 0 .352-.149.48.48 0 0 0 .148-.351.483.483 0 0 0-.148-.352.48.48 0 0 0-.352-.148h-1.367l1 1h.367z" />
    </svg>
  ),
  styles: {}
} as TeamsProcessedSvgIconSpec;
