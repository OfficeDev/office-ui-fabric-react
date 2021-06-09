import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const StatusErrorFullIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg} focusable="false">
      <path d="M1024 0q141 0 272 36t244 104 207 160 161 207 103 245 37 272q0 141-36 272t-104 244-160 207-207 161-245 103-272 37q-141 0-272-36t-244-104-207-160-161-207-103-245-37-272q0-141 36-272t104-244 160-207 207-161T752 37t272-37zm113 1024l342-342-113-113-342 342-342-342-113 113 342 342-342 342 113 113 342-342 342 342 113-113-342-342z" />
    </svg>
  ),
  displayName: 'StatusErrorFullIcon',
});

export default StatusErrorFullIcon;
