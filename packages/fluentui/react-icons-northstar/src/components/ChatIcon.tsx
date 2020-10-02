import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ChatIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" viewBox="0 0 20 20" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C8.72679 18 7.49591 17.7018 6.38669 17.1393L6.266 17.075L2.62109 17.9851C2.31127 18.0625 2.02622 17.8369 2.00131 17.5438L2.00114 17.4624L2.01493 17.3787L2.925 13.735L2.86169 13.6153C2.4066 12.7186 2.12433 11.7422 2.03275 10.7283L2.00738 10.3463L2 10C2 5.58172 5.58172 2 10 2ZM10 3C6.13401 3 3 6.13401 3 10C3 11.217 3.31054 12.3878 3.89352 13.4249C3.94046 13.5084 3.9621 13.603 3.95692 13.6973L3.94274 13.7912L3.187 16.812L6.21104 16.0583C6.27294 16.0429 6.33662 16.0396 6.39873 16.0479L6.4903 16.0691L6.57701 16.1075C7.61362 16.6898 8.7837 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM10.5 11C10.7761 11 11 11.2239 11 11.5C11 11.7455 10.8231 11.9496 10.5899 11.9919L10.5 12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2545 7.17688 11.0504 7.41012 11.0081L7.5 11H10.5ZM12.5 8C12.7761 8 13 8.22386 13 8.5C13 8.74546 12.8231 8.94961 12.5899 8.99194L12.5 9H7.5C7.22386 9 7 8.77614 7 8.5C7 8.25454 7.17688 8.05039 7.41012 8.00806L7.5 8H12.5Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C8.72679 18 7.49591 17.7018 6.38669 17.1393L6.266 17.075L2.62109 17.9851C2.31127 18.0625 2.02622 17.8369 2.00131 17.5438L2.00114 17.4624L2.01493 17.3787L2.925 13.735L2.86169 13.6153C2.4066 12.7186 2.12433 11.7422 2.03275 10.7283L2.00738 10.3463L2 10C2 5.58172 5.58172 2 10 2ZM10.5 11H7.5L7.41012 11.0081C7.17688 11.0504 7 11.2545 7 11.5C7 11.7455 7.17688 11.9496 7.41012 11.9919L7.5 12H10.5L10.5899 11.9919C10.8231 11.9496 11 11.7455 11 11.5C11 11.2545 10.8231 11.0504 10.5899 11.0081L10.5 11ZM12.5 8H7.5L7.41012 8.00806C7.17688 8.05039 7 8.25454 7 8.5C7 8.74546 7.17688 8.94961 7.41012 8.99194L7.5 9H12.5L12.5899 8.99194C12.8231 8.94961 13 8.74546 13 8.5C13 8.25454 12.8231 8.05039 12.5899 8.00806L12.5 8Z"
      />
    </svg>
  ),
  displayName: 'ChatIcon',
});
