import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const OcrOffIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg className={classes.svg} viewBox="2 2 16 16" role="presentation" focusable="false">
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M2.41419 3.12131C2.15244 3.51653 2 3.99046 2 4.5V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V4.5C3 4.26843 3.05247 4.04912 3.14618 3.8533L9.5 10.2071V14H9C8.72386 14 8.5 14.2238 8.5 14.5C8.5 14.7761 8.72386 15 9 15H11C11.2761 15 11.5 14.7761 11.5 14.5C11.5 14.2238 11.2761 14 11 14H10.5V11.2071L16.016 16.7231C15.7182 16.899 15.3709 17 15 17H13.5C13.2239 17 13 17.2238 13 17.5C13 17.7761 13.2239 18 13.5 18H15C15.6479 18 16.2479 17.7946 16.7383 17.4454L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L17.4454 16.7383C17.4454 16.7383 17.4454 16.7383 17.4454 16.7383L16.7231 16.016C16.7231 16.016 16.7231 16.016 16.7231 16.016L6.03166 5.32453C6.03166 5.32452 6.03165 5.32454 6.03166 5.32453L3.85328 3.14619C3.85329 3.14619 3.85328 3.14619 3.85328 3.14619L3.12132 2.41419C3.12131 2.4142 3.12132 2.41419 3.12132 2.41419L2.85355 2.14646C2.65829 1.9512 2.34171 1.9512 2.14645 2.14646C1.95118 2.34172 1.95118 2.65831 2.14645 2.85357L2.41419 3.12131ZM18 15C18 15.2687 17.9647 15.5292 17.8984 15.777L17 14.8787V13.5C17 13.2238 17.2239 13 17.5 13C17.7761 13 18 13.2238 18 13.5V15ZM10.5 6V8.37866L9.5 7.37866V6H8.12134L7.12134 5H13.5C13.7761 5 14 5.22385 14 5.5V6.5C14 6.77614 13.7761 7 13.5 7C13.2239 7 13 6.77614 13 6.5V6H10.5ZM6.5 3H5.12134L4.14618 2.02484C4.26177 2.00847 4.37989 2 4.5 2H6.5C6.77614 2 7 2.22386 7 2.5C7 2.77614 6.77614 3 6.5 3ZM5 17C3.89543 17 3 16.1046 3 15V13.5C3 13.2238 2.77614 13 2.5 13C2.22386 13 2 13.2238 2 13.5V15C2 16.6568 3.34315 18 5 18H6.5C6.77614 18 7 17.7761 7 17.5C7 17.2238 6.77614 17 6.5 17H5ZM17 4.5C17 3.67157 16.3284 3 15.5 3H13.5C13.2239 3 13 2.77614 13 2.5C13 2.22386 13.2239 2 13.5 2H15.5C16.8807 2 18 3.11929 18 4.5V6.5C18 6.77614 17.7761 7 17.5 7C17.2239 7 17 6.77614 17 6.5V4.5Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M2.48413 3.19125C2.17878 3.63426 2 4.17125 2 4.75V6.25C2 6.66421 2.33579 7 2.75 7C3.16421 7 3.5 6.66421 3.5 6.25V4.75C3.5 4.58879 3.53052 4.4347 3.58609 4.29321L5.75 6.45712V6.75C5.75 7.16421 6.08579 7.49999 6.5 7.49999C6.58771 7.49999 6.67191 7.48494 6.75015 7.45727L9.25 9.95711V13.5H9C8.58579 13.5 8.25 13.8358 8.25 14.25C8.25 14.6642 8.58579 15 9 15H11C11.4142 15 11.75 14.6642 11.75 14.25C11.75 13.8358 11.4142 13.5 11 13.5H10.75V11.4571L15.7068 16.4139C15.5653 16.4695 15.4112 16.5 15.25 16.5H13.75C13.3358 16.5 13 16.8358 13 17.25C13 17.6642 13.3358 18 13.75 18H15.25C15.8287 18 16.3657 17.8212 16.8088 17.5159L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L17.5159 16.8088C17.5159 16.8088 17.5159 16.8088 17.5159 16.8088L16.4139 15.7068C16.4139 15.7068 16.4139 15.7068 16.4139 15.7068L5.94866 5.24154C5.94866 5.24154 5.94867 5.24153 5.94866 5.24154L4.29319 3.5861C4.29318 3.5861 4.2932 3.5861 4.29319 3.5861L3.19125 2.48412C3.19125 2.48412 3.19124 2.48413 3.19125 2.48412L2.85355 2.14646C2.65829 1.9512 2.34171 1.9512 2.14645 2.14646C1.95118 2.34172 1.95118 2.65831 2.14645 2.85357L2.48413 3.19125ZM18 15.25C18 15.4453 17.9796 15.6358 17.9409 15.8196L16.5 14.3787V13.75C16.5 13.3358 16.8358 13 17.25 13C17.6642 13 18 13.3358 18 13.75V15.25ZM10.75 6.5V8.62866L9.25 7.12866V6.5H8.62134L7.12134 5H13.5C13.9142 5 14.25 5.33578 14.25 5.75V6.75C14.25 7.16421 13.9142 7.49999 13.5 7.49999C13.0858 7.49999 12.75 7.16421 12.75 6.75V6.5H10.75ZM6.25 3.5H5.62134L4.1804 2.05906C4.36418 2.02036 4.55471 2 4.75 2H6.25C6.66421 2 7 2.33579 7 2.75C7 3.16421 6.66421 3.5 6.25 3.5ZM4.75 16.5C4.05964 16.5 3.5 15.9403 3.5 15.25V13.75C3.5 13.3358 3.16421 13 2.75 13C2.33579 13 2 13.3358 2 13.75V15.25C2 16.7688 3.23122 18 4.75 18H6.25C6.66421 18 7 17.6642 7 17.25C7 16.8358 6.66421 16.5 6.25 16.5H4.75ZM16.5 4.75C16.5 4.05964 15.9404 3.5 15.25 3.5H13.75C13.3358 3.5 13 3.16421 13 2.75C13 2.33579 13.3358 2 13.75 2H15.25C16.7688 2 18 3.23122 18 4.75V6.25C18 6.66421 17.6642 7 17.25 7C16.8358 7 16.5 6.66421 16.5 6.25V4.75Z"
      />
    </svg>
  ),
  displayName: 'OcrOffIcon',
});
