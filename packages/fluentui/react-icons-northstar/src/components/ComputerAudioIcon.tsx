import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ComputerAudioIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path
          d="M4 2C2.89543 2 2 2.89543 2 4V13C2 14.1046 2.89543 15 4 15H7V17H5.5C5.22386 17 5 17.2239 5 17.5C5 17.7761 5.22386 18 5.5 18H11.8786L10.8787 17.0001H10.5L10.485 17H8V15H9V14H4C3.44772 14 3 13.5523 3 13V4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V10.0207C17.3425 9.96316 17.6975 10.0262 18 10.2006V4C18 2.89543 17.1046 2 16 2H4Z"
          fill="#212121"
        />
        <path
          d="M13.6913 11.0381C13.8782 11.1155 14 11.2978 14 11.5V17.5C14 17.7022 13.8782 17.8846 13.6913 17.962C13.5045 18.0393 13.2894 17.9966 13.1464 17.8536L11.2929 16H10.5C10.2239 16 10 15.7762 10 15.5V13.5C10 13.2239 10.2239 13 10.5 13H11.2929L13.1464 11.1465C13.2894 11.0035 13.5045 10.9607 13.6913 11.0381Z"
          fill="#212121"
        />
        <path
          d="M17.65 11.2C17.7712 11.3617 17.9351 11.6531 18.0932 12.0745C18.3482 12.7547 18.5 13.564 18.5 14.5C18.5 15.436 18.3482 16.2454 18.0932 16.9256C17.9351 17.347 17.7712 17.6384 17.65 17.8C17.4843 18.0209 17.1709 18.0657 16.95 17.9C16.7536 17.7528 16.6964 17.4888 16.8025 17.2768L16.9182 17.0948C16.9838 16.9827 17.0688 16.8092 17.1568 16.5745C17.3705 16.0047 17.5 15.314 17.5 14.5C17.5 13.686 17.3705 12.9954 17.1568 12.4256C17.0688 12.1909 16.9838 12.0174 16.9182 11.9052L16.85 11.8C16.6843 11.5791 16.7291 11.2657 16.95 11.1C17.1709 10.9343 17.4843 10.9791 17.65 11.2Z"
          fill="#212121"
        />
        <path
          d="M16.2243 12.9669C16.1224 12.661 16.0196 12.4211 15.9472 12.2764C15.8237 12.0294 15.5234 11.9293 15.2764 12.0528C15.0294 12.1763 14.9293 12.4766 15.0528 12.7236C15.1054 12.8289 15.1901 13.0266 15.2756 13.2831C15.4163 13.7051 15.5 14.1236 15.5 14.5C15.5 14.8765 15.4163 15.295 15.2756 15.7169C15.2243 15.8709 15.1733 16.0036 15.1293 16.1079L15.0528 16.2764C14.9293 16.5234 15.0294 16.8237 15.2764 16.9472C15.5234 17.0707 15.8237 16.9706 15.9472 16.7236C16.0196 16.5789 16.1224 16.3391 16.2243 16.0331C16.3962 15.5176 16.5 14.9986 16.5 14.5C16.5 14.0015 16.3962 13.4825 16.2243 12.9669Z"
          fill="#212121"
        />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path
          d="M3.5 2C2.67157 2 2 2.67157 2 3.5V13.5C2 14.3284 2.67157 15 3.5 15H7V17H5.5C5.22386 17 5 17.2239 5 17.5C5 17.7761 5.22386 18 5.5 18H11.8786L10.8787 17.0001H10.5L10.485 17H8V15H9V13.5001C9 12.6716 9.67157 12.0001 10.5 12.0001H10.8787L12.4393 10.4394C12.8683 10.0104 13.5135 9.88208 14.074 10.1143C14.5094 10.2946 14.8271 10.6649 14.9473 11.1055C15.2342 10.9915 15.5389 10.9723 15.8237 11.0354C15.9158 10.7517 16.0932 10.4926 16.35 10.3001C16.8453 9.92862 17.4956 9.90978 18 10.2006V3.5C18 2.67157 17.3284 2 16.5 2H3.5Z"
          fill="#212121"
        />
        <path
          d="M13.6913 11.0381C13.8782 11.1155 14 11.2978 14 11.5V17.5C14 17.7022 13.8782 17.8846 13.6913 17.962C13.5045 18.0393 13.2894 17.9966 13.1464 17.8536L11.2929 16H10.5C10.2239 16 10 15.7762 10 15.5V13.5C10 13.2239 10.2239 13 10.5 13H11.2929L13.1464 11.1465C13.2894 11.0035 13.5045 10.9607 13.6913 11.0381Z"
          fill="#212121"
        />
        <path
          d="M17.65 11.2C17.7712 11.3617 17.9351 11.6531 18.0932 12.0745C18.3482 12.7547 18.5 13.564 18.5 14.5C18.5 15.436 18.3482 16.2454 18.0932 16.9256C17.9351 17.347 17.7712 17.6384 17.65 17.8C17.4843 18.0209 17.1709 18.0657 16.95 17.9C16.7536 17.7528 16.6964 17.4888 16.8025 17.2768L16.9182 17.0948C16.9838 16.9827 17.0688 16.8092 17.1568 16.5745C17.3705 16.0047 17.5 15.314 17.5 14.5C17.5 13.686 17.3705 12.9954 17.1568 12.4256C17.0688 12.1909 16.9838 12.0174 16.9182 11.9052L16.85 11.8C16.6843 11.5791 16.7291 11.2657 16.95 11.1C17.1709 10.9343 17.4843 10.9791 17.65 11.2Z"
          fill="#212121"
        />
        <path
          d="M16.2243 12.9669C16.1224 12.661 16.0196 12.4211 15.9472 12.2764C15.8237 12.0294 15.5234 11.9293 15.2764 12.0528C15.0294 12.1763 14.9293 12.4766 15.0528 12.7236C15.1054 12.8289 15.1901 13.0266 15.2756 13.2831C15.4163 13.7051 15.5 14.1236 15.5 14.5C15.5 14.8765 15.4163 15.295 15.2756 15.7169C15.2243 15.8709 15.1733 16.0036 15.1293 16.1079L15.0528 16.2764C14.9293 16.5234 15.0294 16.8237 15.2764 16.9472C15.5234 17.0707 15.8237 16.9706 15.9472 16.7236C16.0196 16.5789 16.1224 16.3391 16.2243 16.0331C16.3962 15.5176 16.5 14.9986 16.5 14.5C16.5 14.0015 16.3962 13.4825 16.2243 12.9669Z"
          fill="#212121"
        />
      </g>
    </svg>
  ),
  displayName: 'ComputerAudioIcon',
});
