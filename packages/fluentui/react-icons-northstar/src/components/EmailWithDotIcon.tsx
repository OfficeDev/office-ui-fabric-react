import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const EmailWithDotIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg
      style={{ overflow: 'visible' }}
      role="presentation"
      focusable="false"
      viewBox="2 2 16 16"
      className={classes.svg}
    >
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M13.337 3.99963C13.1891 4.31079 13.0858 4.64722 13.0353 5.00068L5.01515 5.00102C4.295 5.00926 4.02592 5.06845 3.75054 5.21573C3.5174 5.34041 3.34041 5.5174 3.21573 5.75054C3.09272 5.98056 3.03115 6.20617 3.0094 6.69392L9.5 9.94098L13.8374 7.77175C14.0733 8.04801 14.3515 8.2871 14.6619 8.47903L9.72361 10.9472C9.611 11.0035 9.48243 11.0148 9.36344 10.981L9.27639 10.9472L3.00089 7.81L3.00102 12.9848C3.00925 13.705 3.06845 13.9741 3.21573 14.2495C3.34041 14.4826 3.5174 14.6596 3.75054 14.7843C4.00297 14.9193 4.25011 14.9803 4.84425 14.9958L5.20486 15H13.7951L14.1558 14.9958C14.7499 14.9803 14.997 14.9193 15.2495 14.7843C15.4826 14.6596 15.6596 14.4826 15.7843 14.2495C15.9193 13.997 15.9803 13.7499 15.9958 13.1558L16 12.7951L15.9991 8.96442C16.1627 8.98787 16.3299 9 16.5 9C16.6701 9 16.8373 8.98787 17.0009 8.96442L17 12.7951C17 13.9095 16.884 14.3136 16.6661 14.7211C16.4482 15.1285 16.1285 15.4482 15.7211 15.6661C15.3136 15.884 14.9095 16 13.7951 16H5.20486C4.09046 16 3.68635 15.884 3.27894 15.6661C2.87154 15.4482 2.5518 15.1285 2.33392 14.7211C2.13056 14.3408 2.01592 13.9634 2.00154 13.0088L2 7.20486C2 6.09046 2.11603 5.68635 2.33392 5.27894C2.5518 4.87154 2.87154 4.5518 3.27894 4.33392C3.65919 4.13056 4.03656 4.01592 4.99124 4.00154L13.337 3.99963ZM16.5 3C17.8807 3 19 4.11929 19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M16.322 8.99555L16.5001 9L16.6831 8.9953L16.9208 8.97498L17.0011 8.96442L17.0001 12.7951C17.0001 13.9095 16.8841 14.3136 16.6662 14.7211C16.4483 15.1285 16.1286 15.4482 15.7212 15.6661C15.3138 15.884 14.9097 16 13.7953 16H5.20497C4.09057 16 3.68646 15.884 3.27905 15.6661C2.87164 15.4482 2.55191 15.1285 2.33403 14.7211C2.13067 14.3408 2.01603 13.9634 2.00165 13.0088L2 7.30863L9.27699 10.9472C9.41775 11.0176 9.58344 11.0176 9.7242 10.9472L14.6614 8.47867C14.9937 8.68424 15.363 8.83575 15.7569 8.92093L15.9992 8.96442L16.1272 8.98037L16.322 8.99555ZM4.99135 4.00154L13.3371 3.99963L13.287 4.10963L13.2177 4.28238C13.1809 4.38156 13.1486 4.48246 13.1209 4.58523L13.0694 4.80359L13.0528 4.89142L13.0355 5.00068C13.0121 5.16512 13.0001 5.33116 13.0001 5.5C13.0001 6.28733 13.2601 7.01393 13.6989 7.59867L13.8375 7.77175L9.50057 9.94098L2.2237 6.30278C2.16591 6.27389 2.1052 6.25723 2.04451 6.25184C2.09579 5.80189 2.19382 5.5411 2.33403 5.27894C2.55191 4.87154 2.87164 4.5518 3.27905 4.33392C3.6593 4.13056 4.03667 4.01592 4.99135 4.00154ZM16.5001 3C17.8808 3 19.0001 4.11929 19.0001 5.5C19.0001 6.88071 17.8808 8 16.5001 8C15.1194 8 14.0001 6.88071 14.0001 5.5C14.0001 4.11929 15.1194 3 16.5001 3Z"
      />
    </svg>
  ),
  displayName: 'EmailWithDotIcon',
});
