import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const VideoOffIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M1600 1152q93 0 174 35t143 96 96 142 35 175q0 93-35 174t-96 143-142 96-175 35q-93 0-174-35t-143-96-96-142-35-175q0-93 35-174t96-143 142-96 175-35zm-320 448q0 66 25 124t68 102 102 69 125 25q47 0 92-13t84-40l-443-443q-26 39-39 84t-14 92zm587 176q26-39 39-84t14-92q0-66-25-124t-69-101-102-69-124-26q-47 0-92 13t-84 40l443 443zm181-1272v686q-57-63-128-106V711l-384 193v92q-33 3-65 10t-63 18V640H128v768h896q-11 31-18 63t-10 65H0V512h1536v248l512-256z" />
    </svg>
  ),
  displayName: 'VideoOffIcon',
});

export default VideoOffIcon;
