import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="M20.8438,11.1484c0.0986,0.0991,0.1484,0.2163,0.1484,0.3516c0,0.1357-0.0498,0.2529-0.1484,0.3516
          C20.7451,11.9507,20.6279,12,20.4922,12h-7c-0.1357,0-0.2529-0.0493-0.3516-0.1484c-0.0986-0.0986-0.1484-0.2158-0.1484-0.3516
          c0-0.1353,0.0498-0.2524,0.1484-0.3516C13.2393,11.0498,13.3564,11,13.4922,11h7C20.6279,11,20.7451,11.0498,20.8438,11.1484z
          M23.8438,16.1484c0.0986,0.0991,0.1484,0.2163,0.1484,0.3516c0,0.1357-0.0498,0.2529-0.1484,0.3516
          C23.7451,16.9507,23.6279,17,23.4922,17h-10c-0.1357,0-0.2529-0.0493-0.3516-0.1484c-0.0986-0.0986-0.1484-0.2158-0.1484-0.3516
          c0-0.1353,0.0498-0.2524,0.1484-0.3516C13.2393,16.0498,13.3564,16,13.4922,16h10C23.6279,16,23.7451,16.0498,23.8438,16.1484z
          M19.8438,21.1484c0.0986,0.0986,0.1484,0.2158,0.1484,0.3516s-0.0498,0.2529-0.1484,0.3516S19.6279,22,19.4922,22h-6
          c-0.1357,0-0.2529-0.0498-0.3516-0.1484s-0.1484-0.2158-0.1484-0.3516s0.0498-0.2529,0.1484-0.3516S13.3564,21,13.4922,21h6
          C19.6279,21,19.7451,21.0498,19.8438,21.1484z
          M10.8535,18.8535c0.1953-0.1953,0.1953-0.5117,0-0.707L9.207,16.5l1.6465-1.6465
          c0.1953-0.1953,0.1953-0.5117,0-0.707s-0.5117-0.1953-0.707,0l-2,2c-0.1953,0.1953-0.1953,0.5117,0,0.707l2,2
          C10.2441,18.9512,10.3721,19,10.5,19S10.7559,18.9512,10.8535,18.8535z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M10.5,19c-0.1279,0-0.2559-0.0488-0.3535-0.1465l-2-2c-0.1953-0.1953-0.1953-0.5117,0-0.707l2-2
          c0.1953-0.1953,0.5117-0.1953,0.707,0s0.1953,0.5117,0,0.707L9.207,16.5l1.6465,1.6465c0.1953,0.1953,0.1953,0.5117,0,0.707
          C10.7559,18.9512,10.6279,19,10.5,19z M21,11c0-0.5522-0.4473-1-1-1h-6c-0.5522,0-1,0.4478-1,1s0.4478,1,1,1h6
          C20.5527,12,21,11.5522,21,11z
          M24,16c0-0.5522-0.4473-1-1-1h-9c-0.5522,0-1,0.4478-1,1s0.4478,1,1,1h9C23.5527,17,24,16.5522,24,16
          z M20,21c0-0.5527-0.4473-1-1-1h-5c-0.5522,0-1,0.4473-1,1s0.4478,1,1,1h5C19.5527,22,20,21.5527,20,21z"
        />
      </g>
    </svg>
  ),
  styles: {},
  exportedAs: 'outdent',
} as TeamsProcessedSvgIconSpec;
