import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const AudioOffIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M22.04,10.667l1.812-1.812A.5.5,0,0,0,23.5,8a.517.517,0,0,0-.359.148L8.148,23.145a.5.5,0,0,0,.711.7l4.263-4.264L16.207,21.9a.459.459,0,0,0,.3.1.5.5,0,0,0,.5-.5V15.7L19.112,13.6a4.147,4.147,0,0,1-.031,4.865c-.125.172-.274.32-.414.484a.5.5,0,0,0-.149.351.5.5,0,0,0,.5.5.517.517,0,0,0,.359-.148,4.46,4.46,0,0,0,.438-.492,5.146,5.146,0,0,0,.007-6.271l1.515-1.515A7.285,7.285,0,0,1,21.6,20.3c-.227.3-.476.562-.726.843a.5.5,0,0,0-.149.351.5.5,0,0,0,.5.5.455.455,0,0,0,.351-.148,6.178,6.178,0,0,0,.7-.8,8.246,8.246,0,0,0-.234-10.385ZM16,20.5l-2.163-1.632L16,16.7ZM9.2,19h1.772L12,17.968H11.92c-.882,0-1.757.031-2.639.031a7.2,7.2,0,0,1-.274-2,6.91,6.91,0,0,1,.274-2c.882,0,1.764.031,2.647.031a2.525,2.525,0,0,0,.89-.133L16,11.5V13.97l1-1V10.5a.5.5,0,0,0-.5-.5.459.459,0,0,0-.3.1L12.349,13H9.2c-1.2,0-1.2,2.187-1.2,3S8.016,19,9.2,19Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M22.04,10.667l1.812-1.812A.5.5,0,0,0,23.5,8a.517.517,0,0,0-.359.148L8.148,23.145a.5.5,0,0,0,.711.7l4.263-4.264L16.207,21.9a.459.459,0,0,0,.3.1.5.5,0,0,0,.5-.5V15.7L19.112,13.6a4.147,4.147,0,0,1-.031,4.865c-.125.172-.274.32-.414.484a.5.5,0,0,0-.149.351.5.5,0,0,0,.5.5.517.517,0,0,0,.359-.148,4.46,4.46,0,0,0,.438-.492,5.146,5.146,0,0,0,.007-6.271l1.515-1.515A7.285,7.285,0,0,1,21.6,20.3c-.227.3-.476.562-.726.843a.5.5,0,0,0-.149.351.5.5,0,0,0,.5.5.455.455,0,0,0,.351-.148,6.178,6.178,0,0,0,.7-.8,8.246,8.246,0,0,0-.234-10.385ZM9.2,19h1.772L17,12.97V10.5a.5.5,0,0,0-.5-.5.459.459,0,0,0-.3.1L12.349,13H9.2c-1.2,0-1.2,2.187-1.2,3S8.016,19,9.2,19Z"
      />
    </svg>
  ),
  displayName: 'AudioOffIcon',
});
