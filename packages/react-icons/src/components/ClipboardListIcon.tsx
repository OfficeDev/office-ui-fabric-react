import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const ClipboardListIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M1792 256v1792H256V256h512q0-53 20-99t55-82 81-55 100-20q53 0 99 20t82 55 55 81 20 100h512zM640 512h768V384h-256V256q0-27-10-50t-27-40-41-28-50-10q-27 0-50 10t-40 27-28 41-10 50v128H640v128zm1024-128h-128v256H512V384H384v1536h1280V384zM768 896h768v128H768V896zm0 384h768v128H768v-128zm0 384h768v128H768v-128zM512 896h128v128H512V896zm0 384h128v128H512v-128zm0 384h128v128H512v-128z" />
    </svg>
  ),
  displayName: 'ClipboardListIcon',
});

export default ClipboardListIcon;
