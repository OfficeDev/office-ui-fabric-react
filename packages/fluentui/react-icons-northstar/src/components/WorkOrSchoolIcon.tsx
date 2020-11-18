import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const WorkOrSchoolIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg className={classes.svg} viewBox="0 0 20 20" role="presentation" focusable="false">
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M8 9C8 7.89543 8.89543 7 10 7C11.1046 7 12 7.89543 12 9C12 10.1046 11.1046 11 10 11C8.89543 11 8 10.1046 8 9ZM10 8C9.44772 8 9 8.44772 9 9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9C11 8.44772 10.5523 8 10 8Z" />
        <path d="M7.72077 12C7.10838 12 6.40961 12.4146 6.38992 13.1973C6.37693 13.7135 6.48426 14.4381 7.04816 15.0319C7.61451 15.6283 8.55301 16 10 16C11.447 16 12.3855 15.6283 12.9519 15.0319C13.5158 14.4381 13.6231 13.7135 13.6101 13.1973C13.5904 12.4146 12.8916 12 12.2793 12H7.72077ZM7.3896 13.2225C7.39099 13.1675 7.41262 13.1226 7.46275 13.082C7.51876 13.0366 7.6101 13 7.72077 13H12.2793C12.3899 13 12.4813 13.0366 12.5373 13.082C12.5874 13.1226 12.609 13.1675 12.6104 13.2225C12.6198 13.5933 12.5397 14.0138 12.2268 14.3433C11.9163 14.6702 11.2885 15 10 15C8.71154 15 8.08375 14.6702 7.77327 14.3433C7.46033 14.0138 7.38027 13.5933 7.3896 13.2225Z" />
        <path d="M9 2C7.89543 2 7 2.89543 7 4H5.5C4.67157 4 4 4.67157 4 5.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V5.5C16 4.67157 15.3284 4 14.5 4H13C13 2.89543 12.1046 2 11 2H9ZM12.7324 5H14.5C14.7761 5 15 5.22386 15 5.5V16.5C15 16.7761 14.7761 17 14.5 17H5.5C5.22386 17 5 16.7761 5 16.5V5.5C5 5.22386 5.22386 5 5.5 5H7.26756C7.61337 5.5978 8.25972 6 9 6H11C11.7403 6 12.3866 5.5978 12.7324 5ZM8 4C8 3.44772 8.44772 3 9 3H11C11.5523 3 12 3.44772 12 4C12 4.55228 11.5523 5 11 5H9C8.44772 5 8 4.55228 8 4Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7Z" />
        <path d="M7.72077 12C7.10838 12 6.40961 12.4146 6.38992 13.1973C6.37693 13.7135 6.48426 14.4381 7.04816 15.0319C7.61451 15.6283 8.55301 16 10 16C11.447 16 12.3855 15.6283 12.9519 15.0319C13.5158 14.4381 13.6231 13.7135 13.6101 13.1973C13.5904 12.4146 12.8916 12 12.2793 12H7.72077Z" />
        <path d="M9 2C7.89543 2 7 2.89543 7 4H5.5C4.67157 4 4 4.67157 4 5.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V5.5C16 4.67157 15.3284 4 14.5 4H13C13 2.89543 12.1046 2 11 2H9ZM12.7324 5H14.5C14.7761 5 15 5.22386 15 5.5V16.5C15 16.7761 14.7761 17 14.5 17H5.5C5.22386 17 5 16.7761 5 16.5V5.5C5 5.22386 5.22386 5 5.5 5H7.26756C7.61337 5.5978 8.25972 6 9 6H11C11.7403 6 12.3866 5.5978 12.7324 5ZM8 4C8 3.44772 8.44772 3 9 3H11C11.5523 3 12 3.44772 12 4C12 4.55228 11.5523 5 11 5H9C8.44772 5 8 4.55228 8 4Z" />
      </g>
    </svg>
  ),
  displayName: 'WorkOrSchoolIcon',
});
