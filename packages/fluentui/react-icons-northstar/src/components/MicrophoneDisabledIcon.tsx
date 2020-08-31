import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const MicrophoneDisabledIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 18 16" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M20.32,15.82A3.68,3.68,0,1,0,24,19.5,3.683,3.683,0,0,0,20.32,15.82Zm0,1a2.736,2.736,0,0,1,1.508.461L18.1,21.008A2.675,2.675,0,0,1,20.32,16.82Zm-.008,5.36a2.68,2.68,0,0,1-1.507-.461l3.726-3.727A2.648,2.648,0,0,1,23,19.5,2.681,2.681,0,0,1,20.312,22.18Z" />
        <path d="M15.1,8a3.031,3.031,0,0,0-3,3v5a3.052,3.052,0,0,0,3,3,2.83,2.83,0,0,0,.57-.055,4.415,4.415,0,0,1,.281-1.14,2,2,0,0,1-.851.2,2.024,2.024,0,0,1-2-2V11a2,2,0,0,1,4,0v5.1a4.079,4.079,0,0,1,1-.727V11A3.032,3.032,0,0,0,15.1,8Z" />
        <path d="M16.289,21.883a5.136,5.136,0,0,1-.43-.938A4.944,4.944,0,0,1,15.1,21a5.03,5.03,0,0,1-5-5,.5.5,0,0,0-1,0,6.087,6.087,0,0,0,5.5,5.977V23.5a.5.5,0,0,0,1,0V21.977A5.068,5.068,0,0,0,16.289,21.883Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M20.32,15.82A3.68,3.68,0,1,0,24,19.5,3.683,3.683,0,0,0,20.32,15.82Zm0,1a2.736,2.736,0,0,1,1.508.461L18.1,21.008A2.675,2.675,0,0,1,20.32,16.82Zm-.008,5.36a2.68,2.68,0,0,1-1.507-.461l3.726-3.727A2.648,2.648,0,0,1,23,19.5,2.681,2.681,0,0,1,20.312,22.18Z" />
        <path d="M15.1,8a3.031,3.031,0,0,0-3,3v5a3.052,3.052,0,0,0,3,3,2.83,2.83,0,0,0,.57-.055,4.686,4.686,0,0,1,2.43-3.57V11A3.032,3.032,0,0,0,15.1,8Z" />
        <path d="M16.289,21.883a5.136,5.136,0,0,1-.43-.938A4.944,4.944,0,0,1,15.1,21a5.03,5.03,0,0,1-5-5,.5.5,0,0,0-1,0,6.087,6.087,0,0,0,5.5,5.977V23.5a.5.5,0,0,0,1,0V21.977A5.068,5.068,0,0,0,16.289,21.883Z" />
      </g>
    </svg>
  ),
  displayName: 'MicrophoneDisabledIcon',
});
