import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const VolumeDownIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="8 8 16 16">
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M16.8516,10.1484C16.9502,10.2476,17,10.3647,17,10.5v11c0,0.1357-0.0498,0.2529-0.1484,0.3516 C16.752,21.9512,16.6348,22,16.5,22c-0.1094,0-0.209-0.0332-0.2969-0.1016L12.3438,19H9.1953c-0.3545,0-0.6328-0.1973-0.8359-0.5938 c-0.1616-0.3174-0.2656-0.7422-0.3125-1.2734C8.0156,16.7842,8,16.4062,8,16s0.0156-0.7861,0.0469-1.1406 c0.0469-0.5259,0.1509-0.9478,0.3125-1.2656C8.5625,13.1982,8.8408,13,9.1953,13h3.1484l3.8594-2.8984 C16.291,10.0342,16.3906,10,16.5,10C16.6348,10,16.752,10.0498,16.8516,10.1484z M12.8125,13.8984 c-0.0781,0.0576-0.2607,0.0967-0.5469,0.1172c-0.1562,0.0107-0.271,0.0156-0.3438,0.0156h-0.2578 c-0.2656,0-0.6641-0.0049-1.1953-0.0156C9.9375,14.0054,9.5391,14,9.2734,14C9.0908,14.6357,9,15.3022,9,16 c0,0.6934,0.0908,1.3594,0.2734,2c0.2603,0,0.6562-0.0049,1.1875-0.0156c0.5312-0.0098,0.9297-0.0156,1.1953-0.0156h0.2578 c0.25,0,0.4766,0.0156,0.6797,0.0469c0.104,0.0264,0.1768,0.0547,0.2188,0.0859L16,20.5v-9L12.8125,13.8984z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M16.8516,10.1484C16.9502,10.2476,17,10.3647,17,10.5v11c0,0.1357-0.0498,0.2529-0.1484,0.3516 C16.752,21.9512,16.6348,22,16.5,22c-0.1094,0-0.209-0.0332-0.2969-0.1016L12.3438,19H9.1953c-0.3545,0-0.6328-0.1973-0.8359-0.5938 c-0.1616-0.3174-0.2656-0.7422-0.3125-1.2734C8.0156,16.7842,8,16.4062,8,16s0.0156-0.7861,0.0469-1.1406 c0.0469-0.5259,0.1509-0.9478,0.3125-1.2656C8.5625,13.1982,8.8408,13,9.1953,13h3.1484l3.8594-2.8984 C16.291,10.0342,16.3906,10,16.5,10C16.6348,10,16.752,10.0498,16.8516,10.1484z" />
      </g>
    </svg>
  ),
  displayName: 'VolumeDownIcon',
});
