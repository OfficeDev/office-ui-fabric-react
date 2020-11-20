import * as React from 'react';
import { createSvgIcon } from '../utils/createSvgIcon';

export const ShareLocationIcon = createSvgIcon({
  svg: ({ classes, props }) =>
    props.size === 'small' ? (
      <svg className={classes.svg} viewBox="-2 -2 22 22" role="presentation" focusable="false">
        <path d="M8.52819 3.01199C8.68354 3.00169 8.84034 2.99646 8.99843 2.99646C12.8644 2.99646 15.9984 6.13047 15.9984 9.99646C15.9984 10.1557 15.9931 10.3136 15.9827 10.47C15.9643 10.7455 16.1728 10.9838 16.4483 11.0022C16.7238 11.0206 16.9621 10.8121 16.9805 10.5366C16.9924 10.358 16.9984 10.1779 16.9984 9.99646C16.9984 5.57818 13.4167 1.99646 8.99843 1.99646C8.81827 1.99646 8.63942 2.00242 8.46208 2.01417C8.18654 2.03243 7.97797 2.2706 7.99623 2.54614C8.01449 2.82168 8.25266 3.03024 8.52819 3.01199Z" />
        <path d="M7.99925 4.98399C8.01106 4.7081 8.24429 4.49402 8.52018 4.50584C11.7562 4.64442 14.3543 7.24268 14.4927 10.4787C14.5045 10.7546 14.2904 10.9878 14.0145 10.9996C13.7387 11.0114 13.5054 10.7973 13.4936 10.5215C13.3774 7.8041 11.1947 5.62129 8.47739 5.50492C8.20151 5.49311 7.98743 5.25988 7.99925 4.98399Z" />
        <path d="M6.03639 16.3977L7.14591 17.4998C7.34088 17.6933 7.65588 17.6929 7.85084 17.4994L8.98513 16.3725C9.59899 15.7624 10.307 15.058 10.6816 14.6834C12.4398 12.9253 12.4398 10.0747 10.6816 8.31655C8.92345 6.55838 6.07289 6.55838 4.31472 8.31655C2.55655 10.0747 2.55655 12.9253 4.31472 14.6834C4.72286 15.0916 5.43088 15.7959 6.03639 16.3977ZM7.49844 12.6217C6.87699 12.6217 6.37322 12.1179 6.37322 11.4964C6.37322 10.875 6.87699 10.3712 7.49844 10.3712C8.11988 10.3712 8.62365 10.875 8.62365 11.4964C8.62365 12.1179 8.11988 12.6217 7.49844 12.6217Z" />
      </svg>
    ) : (
      <svg className={classes.svg} viewBox="0 0 20 20" role="presentation" focusable="false">
        <path d="M8.52819 3.01199C8.68354 3.00169 8.84034 2.99646 8.99843 2.99646C12.8644 2.99646 15.9984 6.13047 15.9984 9.99646C15.9984 10.1557 15.9931 10.3136 15.9827 10.47C15.9643 10.7455 16.1728 10.9838 16.4483 11.0022C16.7238 11.0206 16.9621 10.8121 16.9805 10.5366C16.9924 10.358 16.9984 10.1779 16.9984 9.99646C16.9984 5.57818 13.4167 1.99646 8.99843 1.99646C8.81827 1.99646 8.63942 2.00242 8.46208 2.01417C8.18654 2.03243 7.97797 2.2706 7.99623 2.54614C8.01449 2.82168 8.25266 3.03024 8.52819 3.01199Z" />
        <path d="M7.99925 4.98399C8.01106 4.7081 8.24429 4.49402 8.52018 4.50584C11.7562 4.64442 14.3543 7.24268 14.4927 10.4787C14.5045 10.7546 14.2904 10.9878 14.0145 10.9996C13.7387 11.0114 13.5054 10.7973 13.4936 10.5215C13.3774 7.8041 11.1947 5.62129 8.47739 5.50492C8.20151 5.49311 7.98743 5.25988 7.99925 4.98399Z" />
        <path d="M6.03639 16.3977L7.14591 17.4998C7.34088 17.6933 7.65588 17.6929 7.85084 17.4994L8.98513 16.3725C9.59899 15.7624 10.307 15.058 10.6816 14.6834C12.4398 12.9253 12.4398 10.0747 10.6816 8.31655C8.92345 6.55838 6.07289 6.55838 4.31472 8.31655C2.55655 10.0747 2.55655 12.9253 4.31472 14.6834C4.72286 15.0916 5.43088 15.7959 6.03639 16.3977ZM7.49844 12.6217C6.87699 12.6217 6.37322 12.1179 6.37322 11.4964C6.37322 10.875 6.87699 10.3712 7.49844 10.3712C8.11988 10.3712 8.62365 10.875 8.62365 11.4964C8.62365 12.1179 8.11988 12.6217 7.49844 12.6217Z" />
      </svg>
    ),
  displayName: 'ShareLocationIcon',
});
