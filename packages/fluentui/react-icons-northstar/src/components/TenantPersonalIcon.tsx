import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const TenantPersonalIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg
      style={{ overflow: 'visible' }}
      className={classes.svg}
      viewBox="2 2 16 16"
      role="presentation"
      focusable="false"
    >
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M8.9975 2.38811c.57017-.51227 1.4348-.51227 2.005 0l5.5 4.94154c.3166.28449.4975.69012.4975 1.11579v.31727c-.3168-.28402-.6943-.50166-1.1107-.63103a.50563.50563 0 00-.0551-.05817l-5.5-4.94154c-.1901-.17075-.47831-.17075-.66837 0l-5.5 4.94154A.50002.50002 0 004 8.44544v7.05416c0 .2761.22386.5.5.5H7c.27614 0 .5-.2239.5-.5v-3.5c0-.8285.67157-1.5 1.5-1.5h2c.8284 0 1.5.6715 1.5 1.5v.9975h-.252c-.2622 0-.514.0448-.748.1273v-1.1248c0-.2762-.2239-.5-.5-.5H9c-.27614 0-.5.2238-.5.5v3.5c0 .8284-.67157 1.5-1.5 1.5H4.5c-.82843 0-1.5-.6716-1.5-1.5V8.44544a1.5 1.5 0 01.4975-1.11579l5.5-4.94154z" />
        <path d="M14.998 8.99707c-1.1045 0-2 .89543-2 2.00003 0 1.1045.8955 2 2 2 1.1046 0 2-.8955 2-2 0-1.1046-.8954-2.00003-2-2.00003zM10.998 15.2471c0-.6904.5597-1.25 1.25-1.25h5.5c.6904 0 1.25.5596 1.25 1.25 0 .0292.0003.0585.0006.0879.0007.0711.0014.1425-.002.2135a1.91796 1.91796 0 01-.0079.1057c-.0087.0869-.0255.2062-.0584.3471-.0656.2809-.1966.656-.4601 1.0325-.5459.7798-1.5867 1.4633-3.4722 1.4633-1.8854 0-2.9262-.6835-3.4721-1.4633-.2635-.3765-.3946-.7516-.4601-1.0325-.0329-.1409-.0497-.2602-.0584-.3471a2.04116 2.04116 0 01-.008-.1057c-.0014-.1314-.0014-.2055-.0014-.2986v-.0028z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M11.0025 2.38811c-.5702-.51227-1.43483-.51227-2.005 0l-5.5 4.94154A1.5 1.5 0 003 8.44544v7.05416c0 .8284.67157 1.5 1.5 1.5h2c.82843 0 1.5-.6716 1.5-1.5v-4c0-.2762.22386-.5.5-.5h3c.1634-.0025.3382-.0025.498-.0025 0-1.65688 1.3432-3.00003 3-3.00003.7693 0 1.471.28956 2.002.76564v-.31727c0-.42567-.1809-.8313-.4975-1.11579l-5.5-4.94154z" />
        <path d="M14.998 8.99707c-1.1045 0-2 .89543-2 2.00003 0 1.1045.8955 2 2 2 1.1046 0 2-.8955 2-2 0-1.1046-.8954-2.00003-2-2.00003zM10.998 15.2471c0-.6904.5597-1.25 1.25-1.25h5.5c.6904 0 1.25.5596 1.25 1.25 0 .0292.0003.0585.0006.0879.0007.0711.0014.1425-.002.2135a1.91796 1.91796 0 01-.0079.1057c-.0087.0869-.0255.2062-.0584.3471-.0656.2809-.1966.656-.4601 1.0325-.5459.7798-1.5867 1.4633-3.4722 1.4633-1.8854 0-2.9262-.6835-3.4721-1.4633-.2635-.3765-.3946-.7516-.4601-1.0325-.0329-.1409-.0497-.2602-.0584-.3471a2.04116 2.04116 0 01-.008-.1057c-.0014-.1314-.0014-.2055-.0014-.2986v-.0028z" />
      </g>
    </svg>
  ),
  displayName: 'TenantPersonalIcon',
});
