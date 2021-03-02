import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const CallControlPresentNewIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M10 14C9.72386 14 9.5 13.7761 9.5 13.5L9.5 7.7071L7.85355 9.35355C7.65829 9.54882 7.34171 9.54882 7.14645 9.35355C6.95118 9.15829 6.95118 8.84171 7.14645 8.64645L9.64645 6.14645C9.84171 5.95118 10.1583 5.95118 10.3536 6.14645L12.8536 8.64645C13.0488 8.84171 13.0488 9.15829 12.8536 9.35355C12.6583 9.54882 12.3417 9.54882 12.1464 9.35355L10.5 7.70711L10.5 13.5C10.5 13.7761 10.2761 14 10 14Z" />
        <path d="M2 6C2 4.89543 2.89543 4 4 4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V6ZM4 5C3.44772 5 3 5.44772 3 6V14C3 14.5523 3.44772 15 4 15H16C16.5523 15 17 14.5523 17 14V6C17 5.44772 16.5523 5 16 5H4Z" />
      </g>
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M4 4C2.89543 4 2 4.89543 2 6V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V6C18 4.89543 17.1046 4 16 4H4ZM10 14C9.72386 14 9.5 13.7761 9.5 13.5L9.5 7.7071L7.85355 9.35355C7.65829 9.54882 7.34171 9.54882 7.14645 9.35355C6.95118 9.15829 6.95118 8.84171 7.14645 8.64645L9.64645 6.14645C9.84171 5.95118 10.1583 5.95118 10.3536 6.14645L12.8536 8.64645C13.0488 8.84171 13.0488 9.15829 12.8536 9.35355C12.6583 9.54882 12.3417 9.54882 12.1464 9.35355L10.5 7.70711L10.5 13.5C10.5 13.7761 10.2761 14 10 14Z"
      />
    </svg>
  ),
  displayName: 'CallControlPresentNewIcon',
});
