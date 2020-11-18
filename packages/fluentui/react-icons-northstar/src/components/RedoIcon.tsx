import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const RedoIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svgFlippingInRtl}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M15.003 2.5C15.003 2.22386 15.2269 2 15.503 2C15.7792 2 16.003 2.22386 16.003 2.5V7.4C16.003 7.73137 15.7344 8 15.403 8H10.503C10.2269 8 10.003 7.77614 10.003 7.5C10.003 7.22386 10.2269 7 10.503 7H14.097L10.6243 3.98124C8.95706 2.53191 6.43056 2.70858 4.98124 4.37584C3.53191 6.0431 3.70858 8.56959 5.37584 10.0189L13.5477 17.1226C13.7562 17.3038 13.7782 17.6196 13.5971 17.828C13.4159 18.0364 13.1001 18.0585 12.8917 17.8774L4.71978 10.7736C2.63571 8.96197 2.41487 5.80385 4.22653 3.71978C6.03818 1.63571 9.1963 1.41487 11.2804 3.22653L15.003 6.46259V2.5Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M13.1408 6.5H10.7532C10.3389 6.5 10.0032 6.83579 10.0032 7.25C10.0032 7.66422 10.3389 8 10.7532 8H15.1532C15.6226 8 16.0032 7.61945 16.0032 7.15V2.75C16.0032 2.33579 15.6674 2 15.2532 2C14.8389 2 14.5032 2.33579 14.5032 2.75V5.6968L11.4444 3.03785C9.25611 1.13561 5.94009 1.36749 4.03785 3.55577C2.13561 5.74405 2.36749 9.06006 4.55577 10.9623L12.7277 18.066C13.0403 18.3378 13.514 18.3047 13.7858 17.992C14.0575 17.6794 14.0244 17.2057 13.7118 16.934L5.53986 9.83024C3.9768 8.4715 3.81118 6.10291 5.16992 4.53986C6.52866 2.9768 8.89725 2.81118 10.4603 4.16992L13.1408 6.5Z"
      />
    </svg>
  ),
  displayName: 'RedoIcon',
});
