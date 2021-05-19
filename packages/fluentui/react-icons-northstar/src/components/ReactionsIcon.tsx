import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ReactionsIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M4.49999 1C3.84688 1 3.29127 1.4174 3.08535 2H3C1.89543 2 1 2.89543 1 4.00001V8.79181C1 9.33517 1.12651 9.87106 1.3695 10.3571L2 11.6181C2.42348 12.465 3.28913 13 4.23606 13H6.05847C7.13892 13 8.04834 12.3108 8.57636 11.4921C9.18166 10.5537 10.2975 9.27363 12.1969 8.45958C12.4225 8.36291 12.5446 8.11683 12.485 7.87874C12.3379 7.29004 12.0643 6.86602 11.6925 6.59564C11.3254 6.32864 10.9155 6.25001 10.5625 6.25001C10.3606 6.25001 10.169 6.27554 9.99998 6.31089V4.00001C9.99998 2.89543 9.10455 2 7.99999 2H7.91463C7.70871 1.4174 7.1531 1 6.49999 1H4.49999ZM4.49999 2H4.99999V6.50001C4.99999 6.77615 5.22385 7.00001 5.49999 7.00001C5.77613 7.00001 5.99999 6.77615 5.99999 6.50001V2H6.49999C6.77613 2 6.99999 2.22386 6.99999 2.5V6.50001C6.99999 6.77615 7.22385 7.00001 7.49999 7.00001C7.77613 7.00001 7.99999 6.77615 7.99999 6.50001V3C8.55227 3 8.99998 3.44772 8.99998 4.00001V7.00001C8.99998 7.1733 9.08971 7.33423 9.23712 7.42534C9.38403 7.51613 9.56736 7.52467 9.72203 7.448L9.72322 7.44741L9.73257 7.44303C9.74246 7.43845 9.75885 7.43106 9.78092 7.42177C9.82527 7.40309 9.89134 7.37725 9.97268 7.35122C10.1392 7.29795 10.3507 7.25001 10.5625 7.25001C10.772 7.25001 10.9558 7.29638 11.1043 7.40438C11.1933 7.46912 11.29 7.57076 11.3752 7.7363C9.50517 8.64875 8.37227 9.96364 7.736 10.9501C7.3308 11.5783 6.69974 12 6.05847 12H4.23606C3.6679 12 3.14851 11.679 2.89442 11.1708L2.26393 9.90985C2.09036 9.56271 2 9.17992 2 8.79181V4.00001C2 3.44772 2.44771 3 3 3V6.50001C3 6.77615 3.22385 7.00001 3.49999 7.00001C3.77614 7.00001 3.99999 6.77615 3.99999 6.50001V2.5C3.99999 2.22386 4.22385 2 4.49999 2ZM13.2614 7.05226C15.9386 7.423 18 9.72076 18 12.5C18 15.5376 15.5376 18 12.5 18C9.91955 18 7.75415 16.2229 7.16088 13.8258C7.49442 13.7179 7.80391 13.5648 8.08617 13.3807C8.49564 15.4443 10.3162 17 12.5 17C14.9853 17 17 14.9853 17 12.5C17 10.357 15.5021 8.56391 13.4961 8.11061C13.5077 7.95474 13.4949 7.79487 13.4552 7.63618C13.4043 7.43259 13.3399 7.23737 13.2614 7.05226ZM10.75 12.5C11.1642 12.5 11.5 12.1642 11.5 11.75C11.5 11.3358 11.1642 11 10.75 11C10.3358 11 10 11.3358 10 11.75C10 12.1642 10.3358 12.5 10.75 12.5ZM15 11.75C15 12.1642 14.6642 12.5 14.25 12.5C13.8358 12.5 13.5 12.1642 13.5 11.75C13.5 11.3358 13.8358 11 14.25 11C14.6642 11 15 11.3358 15 11.75ZM10.9473 14.2764C10.8238 14.0294 10.5235 13.9293 10.2765 14.0528C10.0295 14.1763 9.92942 14.4766 10.0529 14.7236C10.3005 15.2188 11.1024 16 12.5001 16C13.8978 16 14.6997 15.2188 14.9473 14.7236C15.0708 14.4766 14.9707 14.1763 14.7237 14.0528C14.4767 13.9293 14.1764 14.0294 14.0529 14.2764C13.9672 14.4479 13.5024 15 12.5001 15C11.4978 15 11.0331 14.4479 10.9473 14.2764ZM1.3695 10.3571L1.81672 10.1335L1.3695 10.3571Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M5.5 1C5.77614 1 6 1.22386 6 1.5V6.5C6 6.77614 6.22386 7 6.5 7C6.77614 7 7 6.77614 7 6.5V2.5C7 2.22386 7.22386 2 7.5 2C7.77614 2 8 2.22386 8 2.5V6.75115C8.09762 6.72613 8.20247 6.70518 8.31298 6.69136C8.62879 6.65189 9.00108 6.66972 9.37981 6.82752C9.76201 6.98678 10.1175 7.27485 10.416 7.72265C10.4984 7.84625 10.5216 8.00008 10.4793 8.14247C10.4369 8.28486 10.3335 8.40106 10.197 8.45957C8.69376 9.1038 7.90733 10.0318 7.48882 10.8261C6.94481 11.8585 5.88728 13 4.5 13H4.23607C3.28914 13 2.42348 12.465 2 11.618L1.3695 10.357C1.12651 9.87105 1 9.33515 1 8.7918V2.5C1 2.22386 1.22386 2 1.5 2C1.77614 2 2 2.22386 2 2.5V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V1.5C3 1.22386 3.22386 1 3.5 1C3.77614 1 4 1.22386 4 1.5V6.5C4 6.77614 4.22386 7 4.5 7C4.77614 7 5 6.77614 5 6.5V1.5C5 1.22386 5.22386 1 5.5 1ZM8.37361 11.2922C8.08547 11.8391 7.63236 12.4842 7.02319 13.0075C7.27934 15.8072 9.63363 18 12.5001 18C15.5377 18 18.0001 15.5376 18.0001 12.5C18.0001 9.46243 15.5377 7 12.5001 7C12.0643 7 11.6403 7.05069 11.2337 7.14649L11.2482 7.16795C11.4954 7.53874 11.5649 8.00025 11.4379 8.42742C11.3109 8.85459 11.0006 9.20317 10.591 9.37872C9.31197 9.92686 8.69234 10.6873 8.37361 11.2922ZM10.7501 12.5C10.3359 12.5 10.0001 12.1642 10.0001 11.75C10.0001 11.3358 10.3359 11 10.7501 11C11.1643 11 11.5001 11.3358 11.5001 11.75C11.5001 12.1642 11.1643 12.5 10.7501 12.5ZM15.0001 11.75C15.0001 12.1642 14.6643 12.5 14.2501 12.5C13.8359 12.5 13.5001 12.1642 13.5001 11.75C13.5001 11.3358 13.8359 11 14.2501 11C14.6643 11 15.0001 11.3358 15.0001 11.75ZM10.9474 14.2764C11.0332 14.4479 11.4979 15 12.5002 15C13.5025 15 13.9672 14.4479 14.053 14.2764C14.1765 14.0294 14.4768 13.9293 14.7238 14.0528C14.9708 14.1763 15.0709 14.4766 14.9474 14.7236C14.6998 15.2188 13.8979 16 12.5002 16C11.1025 16 10.3006 15.2188 10.053 14.7236C9.92949 14.4766 10.0296 14.1763 10.2766 14.0528C10.5236 13.9293 10.8239 14.0294 10.9474 14.2764Z"
      />
    </svg>
  ),
  displayName: 'ReactionsIcon',
});
