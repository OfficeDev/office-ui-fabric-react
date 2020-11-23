import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svgFlippingInRtl}>
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path d="M6 4.5C6 4.22386 6.22386 4 6.5 4H14.5C14.7761 4 15 4.22386 15 4.5C15 4.77614 14.7761 5 14.5 5H6.5C6.22386 5 6 4.77614 6 4.5Z" />
        <path d="M6 9.5C6 9.22386 6.22386 9 6.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H6.5C6.22386 10 6 9.77614 6 9.5Z" />
        <path d="M6.5 14C6.22386 14 6 14.2239 6 14.5C6 14.7761 6.22386 15 6.5 15H12.5C12.7761 15 13 14.7761 13 14.5C13 14.2239 12.7761 14 12.5 14H6.5Z" />
        <path d="M2.85355 7.73226C2.65829 7.537 2.34171 7.537 2.14645 7.73226C1.95118 7.92752 1.95118 8.24411 2.14645 8.43937L3.20711 9.50003L2.14645 10.5607C1.95118 10.756 1.95118 11.0725 2.14645 11.2678C2.34171 11.4631 2.65829 11.4631 2.85355 11.2678L4.26777 9.85358C4.46303 9.65832 4.46303 9.34174 4.26777 9.14648L2.85355 7.73226Z" />
      </g>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path d="M6 4.75C6 4.33579 6.33579 4 6.75 4H14.25C14.6642 4 15 4.33579 15 4.75C15 5.16421 14.6642 5.5 14.25 5.5H6.75C6.33579 5.5 6 5.16421 6 4.75Z" />
        <path d="M6.75 9C6.33579 9 6 9.33579 6 9.75C6 10.1642 6.33579 10.5 6.75 10.5H17.25C17.6642 10.5 18 10.1642 18 9.75C18 9.33579 17.6642 9 17.25 9H6.75Z" />
        <path d="M6.75 14C6.33579 14 6 14.3358 6 14.75C6 15.1642 6.33579 15.5 6.75 15.5H12.25C12.6642 15.5 13 15.1642 13 14.75C13 14.3358 12.6642 14 12.25 14H6.75Z" />
        <path d="M3.03033 7.71967C2.73744 7.42678 2.26256 7.42678 1.96967 7.71967C1.67678 8.01256 1.67678 8.48744 1.96967 8.78033L2.93934 9.75L1.96967 10.7197C1.67678 11.0126 1.67678 11.4874 1.96967 11.7803C2.26256 12.0732 2.73744 12.0732 3.03033 11.7803L4.53033 10.2803C4.82322 9.98744 4.82322 9.51256 4.53033 9.21967L3.03033 7.71967Z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
