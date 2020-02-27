import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="M24 15.5c0 .25-.006.55-.016.902s-.03.726-.062 1.121c-.031.397-.073.8-.125 1.211-.053.412-.121.805-.207 1.18s-.19.717-.313 1.023a2.526 2.526 0 0 1-.433.743c-.178.198-.421.369-.73.511-.311.144-.659.265-1.044.364-.385.1-.79.177-1.214.234a24.068 24.068 0 0 1-2.418.195c-.366.011-.678.016-.938.016-.256 0-.558-.005-.906-.016a24.904 24.904 0 0 1-2.328-.188 10.965 10.965 0 0 1-1.176-.21 7.332 7.332 0 0 1-1.024-.316 2.478 2.478 0 0 1-.746-.434 2.188 2.188 0 0 1-.511-.73 6.071 6.071 0 0 1-.364-1.04c-.099-.382-.177-.787-.234-1.214a21.581 21.581 0 0 1-.133-1.258 24.642 24.642 0 0 1-.062-1.16C9.005 16.072 9 15.76 9 15.5c0-.255.005-.559.016-.91.01-.352.03-.724.062-1.117.031-.394.073-.796.125-1.207.052-.412.122-.804.211-1.176.088-.372.194-.714.316-1.024.122-.31.267-.558.434-.746.177-.198.42-.368.73-.511a6.15 6.15 0 0 1 1.04-.364c.382-.098.787-.177 1.214-.234.427-.057.847-.102 1.258-.133.411-.031.798-.052 1.16-.062.362-.01.673-.016.934-.016.255 0 .559.005.91.016.352.01.724.03 1.117.062.393.031.795.073 1.207.125.411.052.803.123 1.176.211.372.089.713.194 1.024.316.31.123.558.267.746.434.197.177.368.42.511.73.143.31.264.657.364 1.04.098.382.176.788.234 1.214.057.428.102.847.133 1.258.031.412.052.8.062 1.164.01.365.016.675.016.93zm-1 0a26.218 26.218 0 0 0-.176-2.894c-.045-.383-.1-.747-.168-1.09-.068-.344-.148-.653-.242-.926s-.203-.48-.328-.621c-.125-.135-.323-.254-.594-.356a6.44 6.44 0 0 0-.93-.261c-.35-.073-.721-.132-1.117-.176a29.37 29.37 0 0 0-2.183-.16c-.316-.01-.57-.016-.762-.016a29.134 29.134 0 0 0-2.945.176c-.396.044-.769.103-1.117.176-.35.073-.66.16-.93.261-.271.102-.469.22-.594.356-.125.14-.234.347-.328.62s-.175.583-.242.927c-.068.343-.124.707-.168 1.09a25.524 25.524 0 0 0-.16 2.128c-.011.313-.016.568-.016.766a33.433 33.433 0 0 0 .066 1.789c.024.37.059.753.106 1.148.047.397.105.769.176 1.118.07.35.154.658.254.925.098.269.215.465.351.59.14.131.349.244.625.34.276.097.585.179.926.246.34.068.704.124 1.09.168.385.045.759.08 1.12.106A24.56 24.56 0 0 0 16.5 22a26.327 26.327 0 0 0 1.793-.07c.372-.026.756-.06 1.152-.106.396-.044.768-.102 1.117-.176.349-.072.659-.16.93-.261.27-.102.469-.22.594-.356.125-.14.234-.347.328-.62s.174-.583.242-.927c.068-.343.123-.707.168-1.09A27.086 27.086 0 0 0 23 15.5zm-2.828 1.727L17.617 18.5l2.555 1.273-.445.899-3.227-1.61-3.227 1.61-.453-.898 2.563-1.274-2.555-1.273.445-.899 3.227 1.61 3.227-1.61.445.899zM15 14a.91.91 0 0 1-.082.383 1.07 1.07 0 0 1-.535.535A.912.912 0 0 1 14 15a.91.91 0 0 1-.383-.082 1.062 1.062 0 0 1-.535-.535A.91.91 0 0 1 13 14c0-.135.027-.263.082-.383a1.074 1.074 0 0 1 .535-.535A.91.91 0 0 1 14 13c.135 0 .263.027.383.082a1.084 1.084 0 0 1 .535.535c.055.12.082.248.082.383zm5 0a.91.91 0 0 1-.082.383 1.07 1.07 0 0 1-.535.535A.914.914 0 0 1 19 15a.907.907 0 0 1-.383-.082 1.062 1.062 0 0 1-.535-.535A.91.91 0 0 1 18 14c0-.135.027-.263.082-.383a1.067 1.067 0 0 1 .535-.535A.907.907 0 0 1 19 13c.135 0 .263.027.383.082a1.086 1.086 0 0 1 .535.535c.055.12.082.248.082.383z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M24 15.5c0 .25-.006.55-.016.902a22.819 22.819 0 0 1-.191 2.328 12.57 12.57 0 0 1-.21 1.18c-.087.373-.19.713-.31 1.02a2.46 2.46 0 0 1-.43.742c-.177.203-.42.377-.73.52-.31.143-.656.263-1.039.359-.383.096-.788.175-1.215.234-.427.06-.846.106-1.257.137-.412.031-.8.053-1.164.062-.366.011-.678.016-.938.016-.256 0-.559-.005-.91-.016a22.836 22.836 0 0 1-2.324-.191 12.624 12.624 0 0 1-1.176-.21 7.081 7.081 0 0 1-1.024-.313 2.478 2.478 0 0 1-.746-.434c-.198-.172-.368-.412-.511-.723a5.83 5.83 0 0 1-.36-1.043 11.528 11.528 0 0 1-.234-1.218c-.06-.427-.106-.846-.137-1.258a24.582 24.582 0 0 1-.062-1.164C9.005 16.065 9 15.755 9 15.5s.005-.559.016-.91a22.397 22.397 0 0 1 .191-2.32c.055-.41.125-.8.21-1.172.087-.373.19-.714.313-1.024.122-.31.267-.56.434-.754.172-.198.413-.368.723-.511a6.15 6.15 0 0 1 1.039-.364c.383-.098.789-.177 1.219-.234.43-.057.85-.102 1.261-.133.411-.031.8-.052 1.164-.062.365-.01.674-.016.93-.016.255 0 .559.005.91.016a22.888 22.888 0 0 1 2.32.191c.409.055.8.125 1.172.21.372.087.713.191 1.024.313.31.123.56.267.754.434.197.172.368.413.511.723.143.31.264.656.364 1.039.098.383.177.789.234 1.219a23.014 23.014 0 0 1 .195 2.425c.01.365.016.675.016.93zm-6.383 3l2.563-1.273-.453-.899-3.227 1.61-3.227-1.61-.445.898 2.555 1.274-2.563 1.273.453.899 3.227-1.61 3.227 1.61.445-.898-2.555-1.274zM15 14a.921.921 0 0 0-.082-.379 1.07 1.07 0 0 0-.219-.32 1.072 1.072 0 0 0-.32-.219.921.921 0 0 0-.762 0 1.07 1.07 0 0 0-.535.54.921.921 0 0 0 0 .76 1.062 1.062 0 0 0 .535.536.921.921 0 0 0 .762 0 1.06 1.06 0 0 0 .539-.535A.91.91 0 0 0 15 14zm5 0a.921.921 0 0 0-.082-.379 1.07 1.07 0 0 0-.219-.32 1.078 1.078 0 0 0-.32-.219.922.922 0 0 0-.762 0 1.07 1.07 0 0 0-.535.54.921.921 0 0 0 0 .76 1.054 1.054 0 0 0 .535.536.922.922 0 0 0 .762 0 1.067 1.067 0 0 0 .539-.535A.91.91 0 0 0 20 14z"
        />
      </g>
    </svg>
  ),
  styles: {}
} as TeamsProcessedSvgIconSpec;
