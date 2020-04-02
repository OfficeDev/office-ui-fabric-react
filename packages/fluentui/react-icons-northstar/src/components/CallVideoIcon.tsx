import * as React from 'react';
import cx from 'classnames';
import createSvgIcon from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

const CallVideoIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg className={classes.svg} viewBox="8 8 16 16" role="presentation" focusable="false">
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M23.6968,12.0403c-0.1836-0.0786-0.3975-0.04-0.542,0.0981l-2.5317,2.4165C20.2212,14.9382,20,15.4514,20,16  c0,0.5483,0.2212,1.0615,0.623,1.4448l2.5317,2.4167C23.2495,19.9521,23.374,20,23.5,20c0.0664,0,0.1333-0.0132,0.1968-0.0403  C23.8809,19.8809,24,19.7002,24,19.5v-7C24,12.2998,23.8809,12.1191,23.6968,12.0403z M23,18.3315l-1.6865-1.6099v-0.0002  C21.1113,16.5286,21,16.2725,21,16s0.1113-0.5286,0.3135-0.7217L23,13.6685V18.3315z" />
        <path d="M17.5,11H9.8193c-0.7056,0-1.3232,0.5393-1.4692,1.2822C8.1177,13.4619,8,14.7129,8,16s0.1177,2.5381,0.3501,3.7173  C8.4961,20.4607,9.1138,21,9.8193,21H17.5c0.8271,0,1.5-0.6729,1.5-1.5v-7C19,11.6729,18.3271,11,17.5,11z M18,19.5  c0,0.2756-0.2241,0.5-0.5,0.5H9.8193c-0.2285,0-0.4341-0.2-0.4878-0.4756C9.1113,18.4082,9,17.2224,9,16  s0.1113-2.4082,0.3315-3.5249C9.3853,12.2,9.5908,12,9.8193,12H17.5c0.2759,0,0.5,0.2244,0.5,0.5V19.5z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M23.6968,12.0403c-0.1841-0.0786-0.3975-0.04-0.542,0.0981l-2.5317,2.4165C20.2212,14.9382,20,15.4514,20,16  c0,0.5483,0.2212,1.0615,0.623,1.4448l2.5317,2.4167C23.2495,19.9521,23.374,20,23.5,20c0.0664,0,0.1333-0.0132,0.1968-0.0403  C23.8809,19.8809,24,19.7002,24,19.5v-7C24,12.2998,23.8809,12.1191,23.6968,12.0403z" />
        <path d="M17.5,11H9.8193c-0.7056,0-1.3232,0.5393-1.4692,1.2822C8.1177,13.4619,8,14.7129,8,16s0.1177,2.5381,0.3501,3.7173  C8.4961,20.4607,9.1138,21,9.8193,21H17.5c0.8271,0,1.5-0.6729,1.5-1.5v-7C19,11.6729,18.3271,11,17.5,11z" />
      </g>
    </svg>
  ),
  displayName: 'CallVideoIcon',
});

export default CallVideoIcon;
