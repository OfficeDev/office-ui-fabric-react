import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const QnaIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M8.49182 4.90114C8.13381 4.9711 7.74292 5.20337 7.43377 5.74712C7.29728 5.98718 6.99204 6.07114 6.75198 5.93465C6.51193 5.79817 6.42797 5.49292 6.56445 5.25287C7.0053 4.47749 7.63231 4.0502 8.30001 3.9197C8.95292 3.7921 9.60198 3.95667 10.0922 4.28126C10.5758 4.6015 10.967 5.12423 10.9794 5.75187C10.9924 6.40602 10.5936 6.99672 9.86025 7.43036C9.36165 7.7252 9.16771 7.92513 9.08528 8.05795C9.01589 8.16975 8.99911 8.27172 8.99911 8.5C8.99911 8.77614 8.77525 9 8.49911 9C8.22297 9 7.99911 8.77614 7.99911 8.5C7.99911 8.22827 8.01301 7.88929 8.23562 7.53061C8.44519 7.19295 8.80457 6.89287 9.35125 6.5696C9.8862 6.25326 9.98319 5.95168 9.97961 5.77173C9.97551 5.56527 9.83768 5.31208 9.5401 5.11505C9.24908 4.92235 8.86462 4.82828 8.49182 4.90114Z" />
        <path d="M8.74902 11.5C9.16324 11.5 9.49902 11.1642 9.49902 10.75C9.49902 10.3358 9.16324 10 8.74902 10C8.33481 10 7.99902 10.3358 7.99902 10.75C7.99902 11.1642 8.33481 11.5 8.74902 11.5Z" />
        <path d="M8.49921 1C4.90936 1 1.99921 3.91015 1.99921 7.5C1.99921 8.651 2.2988 9.73335 2.82446 10.6719L2.02872 12.7542C1.73544 13.5216 2.44142 14.2957 3.23254 14.0741L5.71992 13.3774C6.56313 13.7768 7.50574 14 8.49921 14C12.0891 14 14.9992 11.0899 14.9992 7.5C14.9992 3.91015 12.0891 1 8.49921 1ZM2.99921 7.5C2.99921 4.46243 5.46165 2 8.49921 2C11.5368 2 13.9992 4.46243 13.9992 7.5C13.9992 10.5376 11.5368 13 8.49921 13C7.59709 13 6.74706 12.7832 5.997 12.3993L5.82279 12.3101L2.96284 13.1111L3.93195 10.5753L3.80366 10.3655C3.2934 9.53135 2.99921 8.55079 2.99921 7.5Z" />
        <path d="M11.4618 17C9.49218 17 7.72716 16.1239 6.53516 14.7402C7.09821 14.8926 7.68753 14.981 8.29486 14.9973C9.19026 15.629 10.2827 16 11.4618 16C12.3639 16 13.214 15.7832 13.964 15.3993L14.1382 15.3101L16.9982 16.1111L16.0291 13.5752L16.1574 13.3655C16.6676 12.5313 16.9618 11.5508 16.9618 10.5C16.9618 9.34552 16.6061 8.27414 15.9983 7.38943C15.9896 6.78165 15.9085 6.19137 15.7633 5.6268C17.1116 6.81779 17.9618 8.5596 17.9618 10.5C17.9618 11.651 17.6622 12.7333 17.1366 13.6719L17.9323 15.7542C18.2256 16.5216 17.5196 17.2957 16.7285 17.0741L14.2411 16.3774C13.3979 16.7768 12.4553 17 11.4618 17Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M8.49921 1C4.90936 1 1.99921 3.91015 1.99921 7.5C1.99921 8.65101 2.2988 9.73335 2.82446 10.6719L2.02872 12.7542C1.73544 13.5216 2.44142 14.2957 3.23254 14.0741L5.71992 13.3774C6.56313 13.7768 7.50574 14 8.49921 14C12.0891 14 14.9992 11.0899 14.9992 7.5C14.9992 3.91015 12.0891 1 8.49921 1ZM8.49182 4.90114C8.13381 4.9711 7.74292 5.20337 7.43377 5.74712C7.29728 5.98718 6.99204 6.07114 6.75198 5.93465C6.51193 5.79817 6.42797 5.49292 6.56445 5.25287C7.0053 4.47749 7.63231 4.0502 8.30001 3.9197C8.95292 3.7921 9.60198 3.95667 10.0922 4.28126C10.5758 4.6015 10.967 5.12423 10.9794 5.75187C10.9924 6.40602 10.5936 6.99672 9.86025 7.43036C9.36165 7.7252 9.16771 7.92513 9.08528 8.05795C9.01589 8.16975 8.99911 8.27172 8.99911 8.5C8.99911 8.77614 8.77525 9 8.49911 9C8.22297 9 7.99911 8.77614 7.99911 8.5C7.99911 8.22827 8.01301 7.88929 8.23562 7.53061C8.44519 7.19295 8.80457 6.89287 9.35125 6.5696C9.8862 6.25326 9.98319 5.95168 9.97961 5.77173C9.97551 5.56527 9.83768 5.31208 9.5401 5.11505C9.24908 4.92235 8.86462 4.82828 8.49182 4.90114ZM8.74902 11.5C8.33481 11.5 7.99902 11.1642 7.99902 10.75C7.99902 10.3358 8.33481 10 8.74902 10C9.16324 10 9.49902 10.3358 9.49902 10.75C9.49902 11.1642 9.16324 11.5 8.74902 11.5Z" />
        <path d="M6.53516 14.7402C7.72716 16.1239 9.49218 17 11.4618 17C12.4553 17 13.3979 16.7768 14.2411 16.3774L16.7285 17.0741C17.5196 17.2957 18.2256 16.5216 17.9323 15.7542L17.1366 13.6719C17.6622 12.7333 17.9618 11.651 17.9618 10.5C17.9618 8.5596 17.1116 6.81779 15.7633 5.6268C15.9085 6.19137 15.9896 6.78165 15.9983 7.38943C16.6061 8.27414 16.9618 9.34552 16.9618 10.5C16.9618 11.5508 16.6676 12.5313 16.1574 13.3655L16.0291 13.5752L16.9982 16.1111L14.1382 15.3101L13.964 15.3993C13.214 15.7832 12.3639 16 11.4618 16C10.2827 16 9.19026 15.629 8.29486 14.9973C7.68753 14.981 7.09821 14.8926 6.53516 14.7402Z" />
      </g>
    </svg>
  ),
  displayName: 'QnaIcon',
});
