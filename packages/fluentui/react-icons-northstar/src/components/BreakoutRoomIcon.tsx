import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const BreakoutRoomIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" viewBox="0 0 20 20" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M12.485 10C12.485 10.4142 12.1492 10.75 11.735 10.75C11.3208 10.75 10.985 10.4142 10.985 10C10.985 9.58579 11.3208 9.25 11.735 9.25C12.1492 9.25 12.485 9.58579 12.485 10Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.60274 2.01231C9.4551 1.9807 9.30109 2.01749 9.18368 2.11242C9.06627 2.20734 8.99805 2.35024 8.99805 2.50122L8.99867 17.4988L8.99805 17.5012C8.99805 17.6522 9.0663 17.7952 9.18374 17.8901C9.30119 17.985 9.45525 18.0218 9.6029 17.9901L16.6023 16.4889C16.8328 16.4395 16.9975 16.2357 16.9975 16V4C16.9975 3.76421 16.8328 3.56046 16.6022 3.51109L9.60274 2.01231ZM9.99805 16.8826L15.9975 15.5959V4.40427L9.99805 3.11962V16.8826Z"
        />
        <path d="M7.99988 16.9976V15.9976H3.99805V4.00232H7.9f9988V3.00232H3.49805C3.2219 3.00232 2.99805 3.22618 2.99805 3.50232V16.4976C2.99805 16.7738 3.2219 16.9976 3.49805 16.9976H7.99988Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.18368 2.11242C9.30109 2.01749 9.4551 1.9807 9.60274 2.01231L16.6022 3.51109C16.8328 3.56046 16.9975 3.76421 16.9975 4V16C16.9975 16.2357 16.8328 16.4395 16.6023 16.4889L9.6029 17.9901C9.45525 18.0218 9.30119 17.985 9.18374 17.8901C9.0663 17.7952 8.99805 17.6522 8.99805 17.5012L8.99867 2.50122C8.99868 2.35024 9.06627 2.20734 9.18368 2.11242ZM12.4999 10C12.4999 10.4142 12.1641 10.75 11.7499 10.75C11.3357 10.75 10.9999 10.4142 10.9999 10C10.9999 9.58579 11.3357 9.25 11.7499 9.25C12.1641 9.25 12.4999 9.58579 12.4999 10Z"
        />
        <path d="M7.99988 3.00232H3.49805C3.2219 3.00232 2.99805 3.22618 2.99805 3.50232V16.4976C2.99805 16.7738 3.2219 16.9976 3.49805 16.9976H7.99988V3.00232Z" />
      </g>
    </svg>
  ),
  displayName: 'BreakoutRoomIcon',
});
