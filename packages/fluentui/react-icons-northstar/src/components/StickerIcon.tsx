import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const StickerIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M15.111 2c1.54 0 2.8 1.206 2.884 2.725l.005.164v6.041c0 .53-.19 1.042-.531 1.442l-.12.13-4.847 4.847c-.375.375-.87.602-1.396.644L10.93 18H4.89c-1.54 0-2.8-1.206-2.884-2.725L2 15.111V4.89c0-1.54 1.206-2.8 2.725-2.884L4.889 2H15.11zm-.08 1H4.97c-1.042 0-1.895.81-1.964 1.834L3 4.969V15.03c0 1.042.81 1.895 1.834 1.964l.135.005h6.029v-3.092a5.423 5.423 0 01-4.853-1.515.5.5 0 01.71-.704 4.426 4.426 0 004.18 1.189 2.51 2.51 0 01.02-.154c.384-1.032 1.352-1.655 2.502-1.72L13.72 11H17V4.969c0-1.042-.81-1.895-1.834-1.964L15.031 3zm1.554 9h-2.762c-.965 0-1.755.75-1.819 1.698l-.004.125v2.761l.087-.078 4.419-4.42a1.21 1.21 0 00.079-.086zM7 7a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M15.111 2A2.889 2.889 0 0118 4.889V11h-4.221l-.19.007c-1.064.07-1.86.603-2.301 1.517-.052.1-.097.207-.135.321a4.419 4.419 0 01-4.298-1.156.5.5 0 00-.71.704 5.423 5.423 0 004.857 1.514L11 18H4.889A2.889 2.889 0 012 15.111V4.89A2.889 2.889 0 014.889 2H15.11zM18 12a2.235 2.235 0 01-.191.219l-5.59 5.59c-.07.068-.141.132-.217.19L12 13.741l.006-.143a1.742 1.742 0 011.584-1.591l.15-.007H18zM7 7a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z"
      />
    </svg>
  ),
  displayName: 'StickerIcon',
});
