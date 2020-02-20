import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
          <path d="M14.793 14.011a.717.717 0 0 1-.066.3.87.87 0 0 1-.43.43.714.714 0 0 1-.602 0 .852.852 0 0 1-.43-.43.702.702 0 0 1 0-.6.912.912 0 0 1 .176-.259.83.83 0 0 1 .254-.18.715.715 0 0 1 .602 0c.096.045.18.105.254.18.072.076.13.162.176.258a.72.72 0 0 1 .066.301zM18.793 14.011a.717.717 0 0 1-.066.3.847.847 0 0 1-.43.43.71.71 0 0 1-.602 0 .854.854 0 0 1-.43-.43.717.717 0 0 1 0-.6.912.912 0 0 1 .176-.259.84.84 0 0 1 .254-.18.718.718 0 0 1 .602 0 .84.84 0 0 1 .254.18.916.916 0 0 1 .176.258.72.72 0 0 1 .066.301z" />
          <path d="M21.5 9h-11C9.673 9 9 9.673 9 10.5v11c0 .827.673 1.5 1.5 1.5h6.586c.394 0 .781-.16 1.06-.44l4.414-4.414c.28-.279.44-.666.44-1.06V10.5c0-.827-.673-1.5-1.5-1.5zM10 21.5v-11a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V17h-5v1.35a3.42 3.42 0 0 1-1.004.143c-.38 0-.726-.05-1.035-.149a3.958 3.958 0 0 1-.844-.375 4.699 4.699 0 0 1-.68-.488c-.2-.175-.378-.337-.535-.488s-.293-.277-.41-.375-.22-.149-.309-.149a.533.533 0 0 0-.226.051c-.073.034-.137.078-.192.133a.6.6 0 0 0-.175.418c0 .063.01.121.03.176.021.055.045.108.071.16.192.36.451.68.777.96.326.282.685.521 1.079.72.392.198.801.348 1.226.453.424.104.832.156 1.223.156A5.03 5.03 0 0 0 17 19.581V22h-6.5a.5.5 0 0 1-.5-.5zm8-.207V18h3.293L18 21.293z" />
        </g>
        <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
          <path d="M17 19.58a5.03 5.03 0 0 1-1.004.116c-.39 0-.799-.052-1.223-.156a5.773 5.773 0 0 1-1.226-.453 5.246 5.246 0 0 1-1.078-.72 3.351 3.351 0 0 1-.778-.96 1.555 1.555 0 0 1-.07-.16.476.476 0 0 1-.031-.176.589.589 0 0 1 .176-.418.666.666 0 0 1 .191-.133.532.532 0 0 1 .227-.05c.088 0 .191.049.308.148s.254.223.41.375.335.313.536.488c.2.175.427.337.68.488.251.152.533.277.843.375.31.099.655.149 1.035.149A3.42 3.42 0 0 0 17 18.35V17h6v-6.5c0-.827-.673-1.5-1.5-1.5h-11C9.673 9 9 9.673 9 10.5v11c0 .827.673 1.5 1.5 1.5H17v-3.42zm.266-5.87a.912.912 0 0 1 .175-.258.84.84 0 0 1 .254-.18.718.718 0 0 1 .602 0 .84.84 0 0 1 .254.18.916.916 0 0 1 .176.258.72.72 0 0 1 0 .602.847.847 0 0 1-.43.43.71.71 0 0 1-.602 0 .854.854 0 0 1-.43-.43.717.717 0 0 1 0-.602zm-4 0a.912.912 0 0 1 .175-.258.83.83 0 0 1 .254-.18.715.715 0 0 1 .602 0c.096.045.18.105.254.18.072.076.13.162.176.258a.72.72 0 0 1 0 .602.87.87 0 0 1-.43.43.714.714 0 0 1-.602 0 .852.852 0 0 1-.43-.43.702.702 0 0 1 0-.602z" />
          <path d="M18 18v4.68c.05-.038.102-.075.146-.12l4.415-4.414c.044-.044.08-.096.12-.146H18z" />
        </g>
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
