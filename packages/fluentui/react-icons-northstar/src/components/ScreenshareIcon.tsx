import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ScreenshareIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 18 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M10.492,15a.507.507,0,0,0-.5.5v6a.507.507,0,0,0,.5.5h7a.505.505,0,0,0,.5-.5v-6a.505.505,0,0,0-.5-.5Zm7-1a1.378,1.378,0,0,1,.574.121,1.59,1.59,0,0,1,.8.8,1.378,1.378,0,0,1,.121.574v6a1.378,1.378,0,0,1-.121.574,1.59,1.59,0,0,1-.8.8,1.378,1.378,0,0,1-.574.121h-7a1.386,1.386,0,0,1-.57-.121,1.566,1.566,0,0,1-.809-.809,1.4,1.4,0,0,1-.121-.57v-6a1.394,1.394,0,0,1,.121-.574,1.59,1.59,0,0,1,.8-.8A1.381,1.381,0,0,1,10.492,14Zm4-5a1.378,1.378,0,0,1,.574.121,1.59,1.59,0,0,1,.8.8,1.378,1.378,0,0,1,.121.574v6a1.378,1.378,0,0,1-.121.574,1.59,1.59,0,0,1-.8.8,1.378,1.378,0,0,1-.574.121h-1a.507.507,0,0,1-.5-.5.454.454,0,0,1,.067-.262.493.493,0,0,1,.171-.156A.7.7,0,0,1,20.465,17a1.747,1.747,0,0,1,.262-.02c.088,0,.177,0,.265.012s.177.012.266.012a1.757,1.757,0,0,0,.262-.02.818.818,0,0,0,.234-.07.427.427,0,0,0,.172-.152.483.483,0,0,0,.066-.266v-6a.505.505,0,0,0-.5-.5h-7a.427.427,0,0,0-.277.086.585.585,0,0,0-.164.215.892.892,0,0,0-.074.285,2.748,2.748,0,0,0-.016.289,6.227,6.227,0,0,0,.031.625,6.227,6.227,0,0,1,.031.625c0,.089,0,.185-.015.289a.919.919,0,0,1-.074.285.6.6,0,0,1-.161.215.421.421,0,0,1-.281.086.507.507,0,0,1-.5-.5v-2a1.394,1.394,0,0,1,.121-.574,1.59,1.59,0,0,1,.8-.8A1.381,1.381,0,0,1,14.492,9Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M17.492,14a1.531,1.531,0,0,1,1.5,1.5v6a1.531,1.531,0,0,1-1.5,1.5h-7a1.542,1.542,0,0,1-1.5-1.5v-6a1.532,1.532,0,0,1,1.5-1.5Zm4-5a1.531,1.531,0,0,1,1.5,1.5v6a1.531,1.531,0,0,1-1.5,1.5h-1a.5.5,0,0,1-.5-.5c0-.438.383-.516.735-.516.179,0,.351.024.531.024.359,0,.734-.07.734-.508v-6a.5.5,0,0,0-.5-.5h-7c-.469,0-.531.516-.531.875,0,.422.062.828.062,1.25,0,.359-.062.875-.531.875a.5.5,0,0,1-.5-.5v-2a1.532,1.532,0,0,1,1.5-1.5Z"
      />
    </svg>
  ),
  displayName: 'ScreenshareIcon',
});
