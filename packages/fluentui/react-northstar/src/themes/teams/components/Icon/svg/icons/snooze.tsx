import * as React from 'react';
import { TeamsSvgIconSpec } from '../types';
import cx from 'classnames';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path d="M5.00006 11.5V8.05444C5.002 8.03656 5.00299 8.01839 5.00299 8C5.00299 5.23851 7.24162 2.99988 10.0031 2.99988C10.4753 2.99988 10.9313 3.06518 11.3632 3.18695C11.629 3.26189 11.9052 3.10719 11.9801 2.84141C12.0551 2.57563 11.9004 2.29942 11.6346 2.22448C11.1153 2.07805 10.5679 1.99988 10.0031 1.99988C6.7091 1.99988 4.03506 4.65428 4.00328 7.94078C4.00115 7.95949 4.00006 7.97852 4.00006 7.9978V11.4L3.07699 13.6154C2.80253 14.2741 3.28649 15 4.00006 15H7.5C7.5 16.3807 8.61929 17.5 10 17.5C11.3807 17.5 12.5 16.3807 12.5 15L16.0001 15C16.7136 15 17.1976 14.2741 16.9231 13.6154L16.0001 11.4V9.9978C16.0001 9.72166 15.7762 9.4978 15.5001 9.4978C15.2239 9.4978 15.0001 9.72166 15.0001 9.9978V11.5C15.0001 11.566 15.0131 11.6314 15.0385 11.6923L16.0001 14H4.00006L4.9616 11.6923C4.98699 11.6314 5.00006 11.566 5.00006 11.5ZM8.5 15H11.5C11.5 15.8284 10.8284 16.5 10 16.5C9.17157 16.5 8.5 15.8284 8.5 15Z" />
        <path d="M13.9999 2H17.4999C17.8755 2 18.1068 2.39262 17.9521 2.71403L17.9095 2.78673L14.9602 7H17.4999C17.776 7 17.9999 7.22386 17.9999 7.5C17.9999 7.74546 17.823 7.94961 17.5898 7.99194L17.4999 8H13.9999C13.6243 8 13.393 7.60738 13.5476 7.28597L13.5903 7.21327L16.5396 3H13.9999C13.7238 3 13.4999 2.77614 13.4999 2.5C13.4999 2.25454 13.6768 2.05039 13.91 2.00806L13.9999 2Z" />
        <path d="M9.50096 6H12.001C12.3966 6 12.6247 6.4307 12.4327 6.75291L12.3851 6.82009L10.5685 9H12.001C12.2771 9 12.501 9.22386 12.501 9.5C12.501 9.74546 12.3241 9.94961 12.0908 9.99194L12.001 10H9.50096C9.1053 10 8.87719 9.5693 9.06918 9.24709L9.11684 9.17991L10.9334 7H9.50096C9.22481 7 9.00096 6.77614 9.00096 6.5C9.00096 6.25454 9.17783 6.05039 9.41108 6.00806L9.50096 6Z" />
      </g>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path d="M9.99783 2C10.8892 2 11.7362 2.18709 12.498 2.52387C12.5107 3.34129 13.1773 4 13.9978 4C14.0873 4 14.6294 4 14.625 4L13.3386 5.82597C13.1022 5.35178 12.6209 5 11.9988 5H9.45411L9.27476 5.01608L9.23037 5.02413C8.52999 5.15126 7.99884 5.76256 7.99884 6.5C7.99884 7.11551 8.36956 7.64443 8.8999 7.87565L8.32161 8.56959L8.2284 8.70098L8.20801 8.73521C7.63006 9.70513 8.30539 11 9.49884 11H12.0436L12.2229 10.9839L12.2673 10.9759C12.9677 10.8487 13.4988 10.2374 13.4988 9.5C13.4988 9.27082 13.4474 9.05365 13.3555 8.85938C13.5461 8.94895 13.7623 9 13.9978 9H15.9999L15.9992 11.408L16.9529 13.9951L16.9786 14.0796L16.994 14.1664L16.9992 14.2546C16.9992 14.5697 16.8035 14.845 16.4773 14.9618L16.3638 14.9947L16.2492 15.0046H3.75154C3.66305 15.0046 3.57525 14.9889 3.49221 14.9583C3.20531 14.8526 3.01655 14.5865 3.00977 14.2422L3.01436 14.1247L3.04781 13.9952L3.99919 11.411L4.00028 7.79281L4.00458 7.56824C4.12719 4.45115 6.77122 2 9.99783 2Z" />
        <path d="M12.4499 16.0016C12.2176 17.1419 11.2091 18 10.0002 18C8.79126 18 7.78275 17.1419 7.55052 16.0016H12.4499Z" />
        <path d="M13.9979 2H17.4979C17.8736 2 18.1048 2.39262 17.9502 2.71403L17.9076 2.78673L14.9583 7H17.4979C17.7741 7 17.9979 7.22386 17.9979 7.5C17.9979 7.74546 17.8211 7.94961 17.5878 7.99194L17.4979 8H13.9979C13.6223 8 13.3911 7.60738 13.5457 7.28597L13.5883 7.21327L16.5376 3H13.9979C13.7218 3 13.4979 2.77614 13.4979 2.5C13.4979 2.25454 13.6748 2.05039 13.9081 2.00806L13.9979 2Z" />
        <path d="M9.499 6H11.999C12.3947 6 12.6228 6.4307 12.4308 6.75291L12.3831 6.82009L10.5665 9H11.999C12.2751 9 12.499 9.22386 12.499 9.5C12.499 9.74546 12.3221 9.94961 12.0889 9.99194L11.999 10H9.499C9.10334 10 8.87524 9.5693 9.06723 9.24709L9.11489 9.17991L10.9315 7H9.499C9.22286 7 8.999 6.77614 8.999 6.5C8.999 6.25454 9.17588 6.05039 9.40913 6.00806L9.499 6Z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec;
