import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path d="M22.502,15.4995c-0.2764,0-0.5,0.2241-0.5,0.5005c0.002,2.6816-1.8027,5.0576-4.3896,5.7793c-2.2405,0.6268-4.5792-0.0863-6.085-1.7793H13.5c0.2764,0,0.5-0.2236,0.5-0.5S13.7764,19,13.5,19h-3c-0.2764,0-0.5,0.2236-0.5,0.5v3c0,0.2764,0.2236,0.5,0.5,0.5s0.5-0.2236,0.5-0.5v-1.614c1.3167,1.3541,3.1053,2.1179,4.9795,2.1179c0.6299,0,1.2695-0.085,1.9023-0.2617c3.0166-0.8408,5.1221-3.6143,5.1201-6.7432C23.002,15.7231,22.7783,15.4995,22.502,15.4995z" />
        <path d="M14.3877,10.2207C16.608,9.6038,18.9514,10.319,20.4595,12H18.5c-0.2764,0-0.5,0.2236-0.5,0.5s0.2236,0.5,0.5,0.5h3c0.2764,0,0.5-0.2236,0.5-0.5v-3C22,9.2236,21.7764,9,21.5,9S21,9.2236,21,9.5v1.608c-1.7632-1.8021-4.3934-2.5454-6.8809-1.8502C11.1104,10.0967,9.0054,12.8687,9,15.999C8.9995,16.2754,9.2231,16.5,9.499,16.5c0.0005,0,0.0005,0,0.001,0c0.2759,0,0.4995-0.2236,0.5-0.499C10.0044,13.3169,11.8091,10.9399,14.3877,10.2207z" />
      </g>
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path d="M11,16c0-2.7568,2.2432-5,5-5c1.0623,0,2.0803,0.3547,2.9322,0.9751h-0.9039c-0.4141,0-0.75,0.3359-0.75,0.75s0.3359,0.75,0.75,0.75h3c0.4141,0,0.75-0.3359,0.75-0.75v-3c0-0.4141-0.3359-0.75-0.75-0.75s-0.75,0.3359-0.75,0.75v0.7416C19.0553,9.5215,17.5551,9,16,9c-3.8599,0-7,3.1401-7,7c0,0.5522,0.4478,1,1,1S11,16.5522,11,16z" />
        <path d="M22,15c-0.5527,0-1,0.4478-1,1c0,2.7568-2.2432,5-5,5c-1.0767,0-2.1124-0.3481-2.9642-0.9756h0.9359c0.4141,0,0.75-0.3359,0.75-0.75s-0.3359-0.75-0.75-0.75h-3c-0.4141,0-0.75,0.3359-0.75,0.75v3c0,0.4141,0.3359,0.75,0.75,0.75s0.75-0.3359,0.75-0.75v-0.7409C12.9378,22.4736,14.437,23,16,23c3.8594,0,7-3.1406,7-7C23,15.4478,22.5527,15,22,15z" />
      </g>
    </svg>
  ),
  styles: {}
} as TeamsProcessedSvgIconSpec;
