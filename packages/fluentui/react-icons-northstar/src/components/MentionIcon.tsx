import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const MentionIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M10 2C14.4183 2 18 5.58172 18 10C18 12.706 16.8584 14.5 15 14.5C13.7737 14.5 12.8595 13.7188 12.3795 12.4099C11.7837 13.3928 10.782 14 9.5 14C7.35907 14 6 12.3068 6 10C6 7.66322 7.31298 6 9.5 6C10.5517 6 11.4013 6.38463 12 7.04384L12 6.5C12 6.22386 12.2239 6 12.5 6C12.7455 6 12.9496 6.17688 12.9919 6.41012L13 6.5V10C13 12.2225 13.8129 13.5 15 13.5C16.1871 13.5 17 12.2225 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C10.8231 17 11.6261 16.8581 12.3832 16.584C12.6429 16.49 12.9296 16.6243 13.0236 16.8839C13.1176 17.1435 12.9833 17.4302 12.7237 17.5243C11.8578 17.8377 10.9396 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM9.5 7C7.92405 7 7 8.17054 7 10C7 11.7969 7.96568 13 9.5 13C11.0343 13 12 11.7969 12 10C12 8.17054 11.076 7 9.5 7Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.25 12.8269 17.0262 14.75 15 14.75C13.7958 14.75 12.8751 14.0708 12.3262 12.9264C11.6738 13.7512 10.7016 14.25 9.5 14.25C7.20741 14.25 5.75 12.4342 5.75 10C5.75 7.53639 7.16021 5.75 9.5 5.75C10.3964 5.75 11.1564 6.01222 11.753 6.47429C11.7643 6.07167 12.0946 5.75 12.5 5.75C12.8797 5.75 13.1935 6.03215 13.2432 6.39823L13.25 6.5V10C13.25 12.1017 13.9808 13.25 15 13.25C16.0192 13.25 16.75 12.1017 16.75 10C16.75 6.27208 13.7279 3.25 10 3.25C6.27208 3.25 3.25 6.27208 3.25 10C3.25 13.7279 6.27208 16.75 10 16.75C10.794 16.75 11.5682 16.6132 12.2981 16.3489C12.6876 16.2079 13.1176 16.4093 13.2587 16.7988C13.3997 17.1883 13.1982 17.6183 12.8088 17.7593C11.9157 18.0827 10.9688 18.25 10 18.25C5.44365 18.25 1.75 14.5563 1.75 10C1.75 5.44365 5.44365 1.75 10 1.75ZM9.5 7.25C8.07681 7.25 7.25 8.29737 7.25 10C7.25 11.6694 8.11734 12.75 9.5 12.75C10.8827 12.75 11.75 11.6694 11.75 10C11.75 8.29737 10.9232 7.25 9.5 7.25Z"
      />
    </svg>
  ),
  displayName: 'MentionIcon',
});
