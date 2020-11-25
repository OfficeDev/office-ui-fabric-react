import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const GiphyIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg viewBox="2 2 16 16" role="presentation" focusable="false" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M15.4 3C16.7864 3 17.9194 4.1869 17.9959 5.68238L18 5.84375V14.1562C18 15.6727 16.9148 16.9118 15.5475 16.9955L15.4 17H4.6C3.21357 17 2.0806 15.8131 2.00412 14.3176L2 14.1562V5.84375C2 4.32735 3.08516 3.08816 4.45246 3.0045L4.6 3H15.4ZM15.25 4H4.75C3.82377 4 3.06561 4.793 3.00404 5.79653L3 5.92857V14.0714C3 15.0922 3.71957 15.9277 4.63018 15.9956L4.75 16H15.25C16.1762 16 16.9344 15.207 16.996 14.2035L17 14.0714V5.92857C17 4.90783 16.2804 4.0723 15.3698 4.00445L15.25 4ZM6.85135 7.00214C7.4713 7.00214 7.99907 7.0988 8.43229 7.30058C8.69893 7.42477 8.80624 7.72539 8.67198 7.97203C8.53772 8.21867 8.21272 8.31793 7.94609 8.19374C7.6779 8.06883 7.31378 8.00214 6.85135 8.00214C5.82473 8.00214 5.08108 8.8345 5.08108 10.0011C5.08108 11.1209 5.89403 12 6.85135 12C7.44761 12 7.85273 11.6487 7.91152 11.3268L7.91892 11.2472V10.5011L7.54054 10.5C7.24201 10.5 7 10.2761 7 10C7 9.75454 7.19122 9.55039 7.44338 9.50806L7.54054 9.5L8.45946 9.50107C8.72482 9.50107 8.94552 9.67794 8.99129 9.91119L9 10.0011V11.2472C9 12.1244 8.11351 13 6.85135 13C5.25622 13 4 11.6415 4 10.0011C4 8.31985 5.17727 7.00214 6.85135 7.00214ZM11 7C11.2455 7 11.4496 7.17688 11.4919 7.41012L11.5 7.5V12.5C11.5 12.7761 11.2761 13 11 13C10.7545 13 10.5504 12.8231 10.5081 12.5899L10.5 12.5V7.5C10.5 7.22386 10.7239 7 11 7ZM15.5 7C15.7761 7 16 7.22386 16 7.5C16 7.74546 15.8231 7.94961 15.5899 7.99194L15.5 8H14V10H15.5C15.7761 10 16 10.2239 16 10.5C16 10.7455 15.8231 10.9496 15.5899 10.9919L15.5 11H14V12.5C14 12.7761 13.7761 13 13.5 13C13.2545 13 13.0504 12.8231 13.0081 12.5899L13 12.5V7.5C13 7.22386 13.2239 7 13.5 7H15.5Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M15.4 3C16.7864 3 17.9194 4.1869 17.9959 5.68238L18 5.84375V14.1562C18 15.6727 16.9148 16.9118 15.5475 16.9955L15.4 17H4.6C3.21357 17 2.0806 15.8131 2.00412 14.3176L2 14.1562V5.84375C2 4.32735 3.08516 3.08816 4.45246 3.0045L4.6 3H15.4ZM6.85135 7.00214C5.17727 7.00214 4 8.31985 4 10.0011C4 11.6415 5.25622 13 6.85135 13C8.05614 13 8.91863 12.2022 8.99455 11.3667L9 11.2472V10.0011L8.99129 9.91119C8.95124 9.7071 8.77726 9.54617 8.55662 9.50913L8.45946 9.50107L7.54054 9.5L7.44338 9.50806C7.19122 9.55039 7 9.75454 7 10C7 10.2455 7.19122 10.4496 7.44338 10.4919L7.54054 10.5L7.91892 10.5011V11.2472L7.91152 11.3268C7.85273 11.6487 7.44761 12 6.85135 12C5.89403 12 5.08108 11.1209 5.08108 10.0011C5.08108 8.8345 5.82473 8.00214 6.85135 8.00214C7.31378 8.00214 7.6779 8.06883 7.94609 8.19374C8.21272 8.31793 8.53772 8.21867 8.67198 7.97203C8.80624 7.72539 8.69893 7.42477 8.43229 7.30058C7.99907 7.0988 7.4713 7.00214 6.85135 7.00214ZM11 7C10.7545 7 10.5504 7.17688 10.5081 7.41012L10.5 7.5V12.5L10.5081 12.5899C10.5504 12.8231 10.7545 13 11 13C11.2455 13 11.4496 12.8231 11.4919 12.5899L11.5 12.5V7.5L11.4919 7.41012C11.4496 7.17688 11.2455 7 11 7ZM15.5 7H13.5C13.2545 7 13.0504 7.17688 13.0081 7.41012L13 7.5V12.5L13.0081 12.5899C13.0504 12.8231 13.2545 13 13.5 13C13.7455 13 13.9496 12.8231 13.9919 12.5899L14 12.5V11H15.5L15.5899 10.9919C15.8231 10.9496 16 10.7455 16 10.5C16 10.2545 15.8231 10.0504 15.5899 10.0081L15.5 10H14V8H15.5L15.5899 7.99194C15.8231 7.94961 16 7.74546 16 7.5C16 7.25454 15.8231 7.05039 15.5899 7.00806L15.5 7Z"
      />
    </svg>
  ),
  displayName: 'GiphyIcon',
});
