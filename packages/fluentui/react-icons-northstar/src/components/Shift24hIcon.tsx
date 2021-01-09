import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const Shift24hIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M6.40945 7.53975C6.68487 7.26013 7.12612 6.99609 7.76953 6.99609C8.65249 6.99609 9.25105 7.55952 9.46843 8.23378C9.68014 8.89045 9.5458 9.69315 8.96526 10.2349C8.74399 10.4414 8.48366 10.6156 8.25438 10.768L8.22753 10.7858C7.99735 10.9388 7.79113 11.0759 7.60657 11.2331C7.36004 11.443 7.16543 11.6766 7.06813 12H9.00014C9.27628 12 9.50014 12.2238 9.50014 12.5C9.50014 12.7761 9.27628 13 9.00014 13H6.50004C6.36743 13 6.24025 12.9473 6.14648 12.8535C6.05271 12.7598 6.00003 12.6326 6.00004 12.5C6.00006 11.5252 6.44062 10.9126 6.95818 10.4718C7.18961 10.2747 7.44161 10.1073 7.65975 9.96246L7.70073 9.93524C7.93963 9.7764 8.13128 9.64543 8.28296 9.50387C8.54692 9.25753 8.62401 8.87358 8.51667 8.54062C8.415 8.22526 8.16403 7.99609 7.76953 7.99609C7.42851 7.99609 7.23506 8.12658 7.12189 8.24148C7.06128 8.30301 7.01991 8.36467 6.9946 8.40915C6.98213 8.43106 6.97418 8.44771 6.97022 8.45651L6.96775 8.46215C6.8713 8.71716 6.58762 8.84833 6.3303 8.7554C6.07057 8.6616 5.93607 8.37502 6.02987 8.11529L6.05839 8.04594C6.07385 8.0116 6.09586 7.9666 6.12548 7.91454C6.18437 7.81107 6.27577 7.67547 6.40945 7.53975Z" />
        <path d="M11.5001 7C11.7762 7.00001 12.0001 7.22387 12.0001 7.50002L12 9.5H13V7.5C13 7.22386 13.2239 7 13.5 7C13.7761 7 14 7.22386 14 7.5V12.5C14 12.7761 13.7761 13 13.5 13C13.2239 13 13 12.7761 13 12.5V10.5H11.5C11.3674 10.5 11.2402 10.4473 11.1464 10.3535C11.0527 10.2598 11 10.1326 11 9.99998L11.0001 7.49998C11.0001 7.22384 11.2239 6.99999 11.5001 7Z" />
        <path d="M5.5 3C4.11929 3 3 4.11929 3 5.5V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V5.5C17 4.11929 15.8807 3 14.5 3H5.5ZM4 5.5C4 4.67157 4.67157 4 5.5 4H14.5C15.3284 4 16 4.67157 16 5.5V14.5C16 15.3284 15.3284 16 14.5 16H5.5C4.67157 16 4 15.3284 4 14.5V5.5Z" />
      </g>
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M3 5.5C3 4.11929 4.11929 3 5.5 3H14.5C15.8807 3 17 4.11929 17 5.5V14.5C17 15.8807 15.8807 17 14.5 17H5.5C4.11929 17 3 15.8807 3 14.5V5.5ZM6.40945 7.53975C6.27577 7.67547 6.18437 7.81107 6.12548 7.91454C6.09586 7.9666 6.07385 8.0116 6.05839 8.04594L6.02987 8.11529C5.93607 8.37502 6.07057 8.6616 6.3303 8.7554C6.58762 8.84833 6.8713 8.71716 6.96775 8.46215L6.97022 8.45651C6.97418 8.44771 6.98213 8.43106 6.9946 8.40915C7.01991 8.36467 7.06128 8.30301 7.12189 8.24148C7.23506 8.12658 7.42851 7.99609 7.76953 7.99609C8.16403 7.99609 8.415 8.22526 8.51667 8.54062C8.62401 8.87358 8.54692 9.25753 8.28296 9.50387C8.13128 9.64543 7.93963 9.7764 7.70073 9.93524L7.65976 9.96245C7.44161 10.1073 7.18961 10.2747 6.95818 10.4718C6.44062 10.9126 6.00006 11.5252 6.00004 12.5C6.00003 12.6326 6.05271 12.7598 6.14648 12.8535C6.24025 12.9473 6.36743 13 6.50004 13H9.00014C9.27628 13 9.50014 12.7761 9.50014 12.5C9.50014 12.2238 9.27628 12 9.00014 12H7.06813C7.16543 11.6766 7.36004 11.443 7.60657 11.2331C7.79113 11.0759 7.99735 10.9388 8.22753 10.7858L8.25438 10.768C8.48366 10.6156 8.74399 10.4414 8.96526 10.2349C9.5458 9.69315 9.68014 8.89045 9.46843 8.23378C9.25105 7.55952 8.65249 6.99609 7.76953 6.99609C7.12612 6.99609 6.68487 7.26013 6.40945 7.53975ZM11.5001 7C11.2239 6.99999 11.0001 7.22384 11.0001 7.49998L11 9.99998C11 10.1326 11.0527 10.2598 11.1464 10.3535C11.2402 10.4473 11.3674 10.5 11.5 10.5H13V12.5C13 12.7761 13.2239 13 13.5 13C13.7761 13 14 12.7761 14 12.5V7.5C14 7.22386 13.7761 7 13.5 7C13.2239 7 13 7.22386 13 7.5V9.5H12L12.0001 7.50002C12.0001 7.22387 11.7762 7.00001 11.5001 7Z"
      />
    </svg>
  ),
  displayName: 'Shift24hIcon',
});
