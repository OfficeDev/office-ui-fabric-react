import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ClosedCaptionsIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="2 2 16 16">
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M6.40139 7.2403C7.22201 6.82997 8.20386 6.99674 8.85356 7.64645C9.04882 7.84171 9.04881 8.15829 8.85355 8.35355C8.65829 8.54881 8.3417 8.54881 8.14644 8.35355C7.79614 8.00324 7.27799 7.92002 6.84861 8.13472C6.43659 8.34073 6 8.88519 6 10C6 11.1148 6.43659 11.6593 6.84861 11.8653C7.27799 12.08 7.79614 11.9967 8.14645 11.6464C8.34171 11.4512 8.65829 11.4512 8.85355 11.6464C9.04882 11.8417 9.04882 12.1583 8.85355 12.3535C8.20386 13.0032 7.22201 13.17 6.40139 12.7597C5.56341 12.3407 5 11.3852 5 10C5 8.61486 5.56341 7.6593 6.40139 7.2403Z" />
        <path d="M14.3536 7.64648C13.7039 6.99677 12.722 6.83 11.9014 7.24033C11.0634 7.65933 10.5 8.61489 10.5 10C10.5 11.3852 11.0634 12.3407 11.9014 12.7597C12.722 13.17 13.7039 13.0033 14.3536 12.3536C14.5488 12.1583 14.5488 11.8417 14.3536 11.6465C14.1583 11.4512 13.8417 11.4512 13.6464 11.6465C13.2961 11.9968 12.778 12.08 12.3486 11.8653C11.9366 11.6593 11.5 11.1148 11.5 10C11.5 8.88522 11.9366 8.34076 12.3486 8.13475C12.778 7.92005 13.2961 8.00327 13.6464 8.35358C13.8417 8.54884 14.1583 8.54884 14.3535 8.35358C14.5488 8.15832 14.5488 7.84174 14.3536 7.64648Z" />
        <path d="M2 7C2 5.34315 3.34315 4 5 4H15C16.6569 4 18 5.34315 18 7V13C18 14.6569 16.6569 16 15 16H5C3.34315 16 2 14.6569 2 13V7ZM5 5C3.89543 5 3 5.89543 3 7V13C3 14.1046 3.89543 15 5 15H15C16.1046 15 17 14.1046 17 13V7C17 5.89543 16.1046 5 15 5H5Z" />
      </g>
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M5 4C3.34315 4 2 5.34315 2 7V13C2 14.6569 3.34315 16 5 16H15C16.6569 16 18 14.6569 18 13V7C18 5.34315 16.6569 4 15 4H5ZM6.40139 7.24033C7.22201 6.83 8.20386 6.99677 8.85356 7.64648C9.04882 7.84174 9.04881 8.15832 8.85355 8.35358C8.65829 8.54884 8.3417 8.54884 8.14644 8.35358C7.79614 8.00327 7.27799 7.92005 6.84861 8.13475C6.43659 8.34076 6 8.88522 6 10C6 11.1148 6.43659 11.6593 6.84861 11.8653C7.27799 12.08 7.79614 11.9968 8.14645 11.6465C8.34171 11.4512 8.65829 11.4512 8.85355 11.6465C9.04882 11.8417 9.04882 12.1583 8.85355 12.3536C8.20386 13.0033 7.22201 13.17 6.40139 12.7597C5.56341 12.3407 5 11.3852 5 10C5 8.61489 5.56341 7.65933 6.40139 7.24033ZM14.3536 7.64648C14.5488 7.84174 14.5488 8.15832 14.3535 8.35358C14.1583 8.54884 13.8417 8.54884 13.6464 8.35358C13.2961 8.00327 12.778 7.92005 12.3486 8.13475C11.9366 8.34076 11.5 8.88522 11.5 10C11.5 11.1148 11.9366 11.6593 12.3486 11.8653C12.778 12.08 13.2961 11.9968 13.6464 11.6465C13.8417 11.4512 14.1583 11.4512 14.3536 11.6465C14.5488 11.8417 14.5488 12.1583 14.3536 12.3536C13.7039 13.0033 12.722 13.17 11.9014 12.7597C11.0634 12.3407 10.5 11.3852 10.5 10C10.5 8.61489 11.0634 7.65933 11.9014 7.24033C12.722 6.83 13.7039 6.99677 14.3536 7.64648Z"
      />
    </svg>
  ),
  displayName: 'ClosedCaptionsIcon',
});
