import * as React from 'react';
import { createSvgIcon } from '../utils/createSvgIcon';
import cx from 'classnames';
import { iconClassNames } from '../utils/iconClassNames';

export const BellSnoozeIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" viewBox="0 0 20 20" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M6.5 8.5C6.5 8.22386 6.72386 8 7 8H9C9.1844 8 9.35383 8.10149 9.44084 8.26407C9.52785 8.42665 9.51831 8.62392 9.41603 8.77735L7.93426 11H9C9.27614 11 9.5 11.2239 9.5 11.5C9.5 11.7761 9.27614 12 9 12H7C6.8156 12 6.64617 11.8985 6.55916 11.7359C6.47215 11.5733 6.48169 11.3761 6.58398 11.2226L8.06574 9H7C6.72386 9 6.5 8.77614 6.5 8.5Z" />
        <path d="M10.5 6C10.2239 6 10 6.22386 10 6.5C10 6.77614 10.2239 7 10.5 7H11.5657L10.084 9.22265C9.98169 9.37608 9.97215 9.57335 10.0592 9.73593C10.1462 9.89851 10.3156 10 10.5 10H12.5C12.7761 10 13 9.77614 13 9.5C13 9.22386 12.7761 9 12.5 9H11.4343L12.916 6.77735C13.0183 6.62392 13.0278 6.42665 12.9408 6.26407C12.8538 6.10149 12.6844 6 12.5 6H10.5Z" />
        <path d="M9.99766 2C13.1466 2 15.7416 4.33488 15.9821 7.3554L15.9955 7.57762L16 7.80214L15.999 11.398L16.9244 13.6202C16.947 13.6743 16.9647 13.7302 16.9774 13.7871L16.9926 13.8733L17.0013 14.0046C17.0013 14.4526 16.7048 14.8387 16.2521 14.9677L16.1358 14.9945L16.0013 15.0046L12.4996 15.004L12.4946 15.1653C12.4095 16.469 11.3252 17.5 10 17.5C8.67453 17.5 7.58998 16.4685 7.50533 15.1644L7.49962 15.004L3.99891 15.0046C3.91096 15.0046 3.82358 14.993 3.73902 14.9702L3.61456 14.9277C3.20378 14.7567 2.96181 14.3392 3.01221 13.8757L3.0333 13.7483L3.07572 13.6202L3.99902 11.401L4.0001 7.79281L4.0044 7.56824C4.12702 4.45115 6.77104 2 9.99766 2ZM11.4996 15.004H8.49962L8.50697 15.1454C8.57552 15.8581 9.14275 16.425 9.85556 16.4931L10 16.5C10.7797 16.5 11.4205 15.9051 11.4931 15.1445L11.4996 15.004ZM9.99766 3C7.37511 3 5.22717 4.92372 5.01715 7.38498L5.00393 7.59723L5.00002 7.80214V11.5L4.96161 11.6922L3.9989 14.0046L15.9566 14.0066L16.0019 14.0045L15.0384 11.6922L15 11.5L15.0001 7.81241L14.996 7.60831C14.8909 5.0349 12.6947 3 9.99766 3Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M10 18C11.2089 18 12.2174 17.1419 12.4497 16.0016H7.55033C7.78257 17.1419 8.79108 18 10 18Z" />
        <path d="M15.9821 7.3554C15.7415 4.33488 13.1466 2 9.99765 2C6.77103 2 4.12701 4.45115 4.00439 7.56824L4.00009 7.79281L3.99901 11.411L3.04762 13.9952L3.01418 14.1247L3.00958 14.2422C3.01636 14.5865 3.20513 14.8526 3.49203 14.9583C3.57507 14.9889 3.66286 15.0046 3.75136 15.0046H16.2491L16.3636 14.9947L16.4771 14.9618C16.8034 14.845 16.9991 14.5697 16.9991 14.2546L16.9939 14.1664L16.9784 14.0796L16.9528 13.9951L15.999 11.408L16 7.80214L15.9955 7.57762L15.9821 7.3554ZM10 6.5C10 6.22386 10.2239 6 10.5 6H12.5C12.6844 6 12.8538 6.10149 12.9408 6.26407C13.0278 6.42665 13.0183 6.62392 12.916 6.77735L11.4343 9H12.5C12.7761 9 13 9.22386 13 9.5C13 9.77614 12.7761 10 12.5 10H10.5C10.3156 10 10.1462 9.89851 10.0592 9.73593C9.97215 9.57335 9.98169 9.37608 10.084 9.22265L11.5657 7H10.5C10.2239 7 10 6.77614 10 6.5ZM6.5 8.5C6.5 8.22386 6.72386 8 7 8H9C9.1844 8 9.35383 8.10149 9.44084 8.26407C9.52785 8.42665 9.51831 8.62392 9.41603 8.77735L7.93426 11H9C9.27614 11 9.5 11.2239 9.5 11.5C9.5 11.7761 9.27614 12 9 12H7C6.8156 12 6.64617 11.8985 6.55916 11.7359C6.47215 11.5733 6.48169 11.3761 6.58398 11.2226L8.06574 9H7C6.72386 9 6.5 8.77614 6.5 8.5Z" />
      </g>
    </svg>
  ),
  displayName: 'BellSnoozeIcon',
});
