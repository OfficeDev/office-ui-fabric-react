import * as React from 'react';
import cx from 'classnames';
import { iconClassNames } from '../utils/iconClassNames';
import { createSvgIcon } from '../utils/createSvgIcon';

export const NumberListIcon = createSvgIcon({
  svg: ({ classes, rtl }) => {
    return rtl ? (
      <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
        <g>
          <path
            className={cx(iconClassNames.filled, classes.filledPart)}
            d="M22,13H21V9.969a2.431,2.431,0,0,1-1,.344V9.586A4.242,4.242,0,0,0,21.383,9H22Z"
          />
          <path
            className={cx(iconClassNames.filled, classes.filledPart)}
            d="M21.281,14A1.087,1.087,0,0,1,22.5,15.117c0,1.274-1.594,1.61-1.594,2.164h1.586V18H20v-.3c0-1.406,1.656-1.609,1.656-2.5,0-.351-.2-.515-.547-.515a1.4,1.4,0,0,0-.929.406v-.766A1.976,1.976,0,0,1,21.281,14Z"
          />
          <path
            className={cx(iconClassNames.filled, classes.filledPart)}
            d="M21.109,19c.61,0,1.274.25,1.274.961a.9.9,0,0,1-.781.945v.016a.92.92,0,0,1,.9.906C22.5,22.7,21.734,23,20.984,23a2.023,2.023,0,0,1-.984-.2v-.742a1.625,1.625,0,0,0,.922.281c.344,0,.7-.125.7-.531,0-.594-.828-.54-1.219-.54v-.648c.383,0,1.1.07,1.1-.5,0-.367-.258-.477-.586-.477a1.426,1.426,0,0,0-.766.25v-.7A2.27,2.27,0,0,1,21.109,19Z"
          />
          <path
            className={cx(iconClassNames.filled, classes.filledPart)}
            d="M18.25,9.75a.864.864,0,0,1,.75.75.864.864,0,0,1-.75.75H9.75A.864.864,0,0,1,9,10.5a.864.864,0,0,1,.75-.75Z"
          />
          <path
            className={cx(iconClassNames.filled, classes.filledPart)}
            d="M18.25,14.75a.864.864,0,0,1,.75.75.864.864,0,0,1-.75.75H9.75A.864.864,0,0,1,9,15.5a.864.864,0,0,1,.75-.75Z"
          />
          <path
            className={cx(iconClassNames.filled, classes.filledPart)}
            d="M18.25,19.75a.864.864,0,0,1,.75.75.864.864,0,0,1-.75.75H9.75A.864.864,0,0,1,9,20.5a.864.864,0,0,1,.75-.75Z"
          />

          <path
            className={cx(iconClassNames.outline, classes.outlinePart)}
            d="M22,13H21V9.969a2.431,2.431,0,0,1-1,.344V9.586A4.242,4.242,0,0,0,21.383,9H22Z"
          />
          <path
            className={cx(iconClassNames.outline, classes.outlinePart)}
            d="M21.281,14A1.087,1.087,0,0,1,22.5,15.117c0,1.274-1.594,1.61-1.594,2.164h1.586V18H20v-.3c0-1.406,1.656-1.609,1.656-2.5,0-.351-.2-.515-.547-.515a1.4,1.4,0,0,0-.929.406v-.766A1.976,1.976,0,0,1,21.281,14Z"
          />
          <path
            className={cx(iconClassNames.outline, classes.outlinePart)}
            d="M21.109,19c.61,0,1.274.25,1.274.961a.9.9,0,0,1-.781.945v.016a.92.92,0,0,1,.9.906C22.5,22.7,21.734,23,20.984,23a2.023,2.023,0,0,1-.984-.2v-.742a1.625,1.625,0,0,0,.922.281c.344,0,.7-.125.7-.531,0-.594-.828-.54-1.219-.54v-.648c.383,0,1.1.07,1.1-.5,0-.367-.258-.477-.586-.477a1.426,1.426,0,0,0-.766.25v-.7A2.27,2.27,0,0,1,21.109,19Z"
          />
          <path
            className={cx(iconClassNames.outline, classes.outlinePart)}
            d="M18.5,10a.5.5,0,0,1,0,1h-9a.5.5,0,0,1,0-1Z"
          />
          <path
            className={cx(iconClassNames.outline, classes.outlinePart)}
            d="M18.5,15a.5.5,0,0,1,0,1h-9a.5.5,0,0,1,0-1Z"
          />
          <path
            className={cx(iconClassNames.outline, classes.outlinePart)}
            d="M18.5,20a.5.5,0,0,1,0,1h-9a.5.5,0,0,1,0-1Z"
          />
        </g>
      </svg>
    ) : (
      <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
        <g>
          <path
            className={cx(iconClassNames.outline, classes.outlinePart)}
            d="M13.5 11h9a.5.5 0 1 0 0-1h-9a.5.5 0 1 0 0 1zm9 4h-9a.5.5 0 1 0 0 1h9a.5.5 0 1 0 0-1zm0 5h-9a.5.5 0 1 0 0 1h9a.5.5 0 1 0 0-1zm-11.322-5.698a1.067 1.067 0 0 0-.383-.224 1.551 1.551 0 0 0-.511-.078c-.41 0-.778.11-1.103.332v.763c.294-.27.603-.404.925-.404.187 0 .325.043.416.13.09.085.136.213.136.38a.701.701 0 0 1-.042.244.864.864 0 0 1-.126.225 1.714 1.714 0 0 1-.21.223 4.16 4.16 0 0 1-.289.236 7.76 7.76 0 0 0-.33.265c-.116.098-.223.21-.32.337s-.18.27-.244.431-.097.34-.097.542V18h2.495v-.719h-1.59c0-.051.017-.105.052-.162.035-.056.082-.115.141-.174s.128-.12.205-.181c.078-.061.159-.123.242-.185.124-.09.244-.183.359-.278.115-.097.216-.202.304-.317a1.368 1.368 0 0 0 .292-.867c0-.17-.027-.324-.083-.462a.949.949 0 0 0-.239-.353zm-1.636-4.11c.086-.031.167-.065.243-.102.077-.037.159-.077.215-.119V13h1V9h-.616A4.726 4.726 0 0 1 9 9.587v.725a2.257 2.257 0 0 0 .542-.12zm1.06 10.73v-.012c.52-.128.78-.445.78-.95a.844.844 0 0 0-.335-.693c-.223-.178-.535-.267-.937-.267-.366 0-.687.068-.962.205v.696c.248-.167.503-.251.766-.251.392 0 .588.157.588.472 0 .334-.256.502-.766.502h-.337v.652h.364c.266 0 .476.047.628.14a.443.443 0 0 1 .228.4.462.462 0 0 1-.185.39c-.122.094-.294.14-.515.14-.35 0-.656-.093-.919-.282v.742c.253.13.583.194.987.194.473 0 .843-.105 1.11-.316.269-.21.403-.496.403-.858 0-.239-.08-.44-.24-.605-.161-.164-.38-.264-.657-.298z"
          />
          <path
            className={cx(iconClassNames.filled, classes.filledPart)}
            d="M13.5 11.25h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5zm9 3.5h-9a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zm0 5h-9a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zm-11.322-5.448a1.067 1.067 0 0 0-.383-.224 1.551 1.551 0 0 0-.511-.078c-.41 0-.778.11-1.103.332v.763c.294-.27.603-.404.925-.404.187 0 .325.043.416.13.09.085.136.213.136.38a.701.701 0 0 1-.042.244.864.864 0 0 1-.126.225 1.714 1.714 0 0 1-.21.223 4.16 4.16 0 0 1-.289.236 7.76 7.76 0 0 0-.33.265c-.116.098-.223.21-.32.337s-.18.27-.244.431-.097.34-.097.542V18h2.495v-.719h-1.59c0-.051.017-.105.052-.162.035-.056.082-.115.141-.174s.128-.12.205-.181c.078-.061.159-.123.242-.185.124-.09.244-.183.359-.278.115-.097.216-.202.304-.317a1.368 1.368 0 0 0 .292-.867c0-.17-.027-.324-.083-.462a.949.949 0 0 0-.239-.353zm-1.636-4.11c.086-.031.167-.065.243-.102.077-.037.159-.077.215-.119V13h1V9h-.616A4.726 4.726 0 0 1 9 9.587v.725a2.257 2.257 0 0 0 .542-.12zm1.06 10.73v-.012c.52-.128.78-.445.78-.95a.844.844 0 0 0-.335-.693c-.223-.178-.535-.267-.937-.267-.366 0-.687.068-.962.205v.696c.248-.167.503-.251.766-.251.392 0 .588.157.588.472 0 .334-.256.502-.766.502h-.337v.652h.364c.266 0 .476.047.628.14a.443.443 0 0 1 .228.4.462.462 0 0 1-.185.39c-.122.094-.294.14-.515.14-.35 0-.656-.093-.919-.282v.742c.253.13.583.194.987.194.473 0 .843-.105 1.11-.316.269-.21.403-.496.403-.858 0-.239-.08-.44-.24-.605-.161-.164-.38-.264-.657-.298z"
          />
        </g>
      </svg>
    );
  },
  displayName: 'NumberListIcon',
});
