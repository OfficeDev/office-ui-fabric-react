import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path d="M2.85258 2.14646C2.65731 1.9512 2.34073 1.9512 2.14547 2.14646C1.95021 2.34172 1.95021 2.65831 2.14547 2.85357L5.29191 6.00001H3.49609C2.66767 6.00001 1.99609 6.67158 1.99609 7.50001V12.5C1.99609 13.3284 2.66767 14 3.49609 14H6.10358C6.22973 14 6.35122 14.0477 6.44369 14.1335L10.3159 17.7269C10.9558 18.3207 11.9961 17.8669 11.9961 16.9939V12.7042L17.1455 17.8536C17.3407 18.0488 17.6573 18.0488 17.8526 17.8536C18.0478 17.6583 18.0478 17.3417 17.8526 17.1465L15.2899 14.5837C15.2899 14.5837 15.2899 14.5837 15.2899 14.5837L2.85258 2.14646ZM10.9961 11.7042V16.9939L7.12392 13.4005C6.84651 13.1431 6.48204 13 6.10358 13H3.49609C3.21995 13 2.99609 12.7761 2.99609 12.5V7.50001C2.99609 7.22387 3.21995 7.00001 3.49609 7.00001H6.10358C6.16328 7.00001 6.22263 6.99645 6.28134 6.98944L10.9961 11.7042Z" />
        <path d="M10.9961 3.00613V8.87573L11.9961 9.87573V3.00613C11.9961 2.13311 10.9558 1.67928 10.3159 2.27313L7.2441 5.12373L7.95169 5.83133L10.9961 3.00613Z" />
        <path d="M14.06 11.9396L14.8018 12.6815C15.712 11.048 15.7661 8.98894 14.7621 7.24991C14.624 7.01077 14.3182 6.92883 14.0791 7.0669C13.8399 7.20497 13.758 7.51077 13.8961 7.74991C14.6656 9.08288 14.6762 10.6463 14.06 11.9396Z" />
        <path d="M15.8955 13.7751L16.6172 14.4968C18.6568 11.502 18.4384 7.4305 15.9617 4.66633C15.7775 4.46067 15.4614 4.44332 15.2557 4.6276C15.05 4.81187 15.0327 5.12797 15.217 5.33364C17.3398 7.70289 17.5659 11.1716 15.8955 13.7751Z" />
      </g>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path d="M2.85355 2.14646C2.65829 1.9512 2.34171 1.9512 2.14645 2.14646C1.95118 2.34172 1.95118 2.65831 2.14645 2.85357L5.29289 6.00001H3.5C2.67157 6.00001 2 6.67158 2 7.50001V12.5C2 13.3284 2.67157 14 3.5 14H6.10749C6.23364 14 6.35513 14.0477 6.4476 14.1335L10.3198 17.7269C10.9597 18.3207 12 17.8669 12 16.9939V12.7071L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1465L15.2893 14.5822C15.2893 14.5822 15.2893 14.5822 15.2893 14.5822L2.85355 2.14646Z" />
        <path d="M15.9598 4.66638C18.4359 7.43 18.6548 11.5004 16.6164 14.4951L15.8947 13.7734C17.5639 11.17 17.3373 7.70239 15.215 5.33369C15.0307 5.12802 15.0481 4.81191 15.2537 4.62764C15.4594 4.44337 15.7755 4.46071 15.9598 4.66638Z" />
        <path d="M14.7602 7.24995C15.7638 8.98832 15.7101 11.0464 14.801 12.6796L14.059 11.9377C14.6743 10.6447 14.6633 9.08223 13.8942 7.74995C13.7561 7.5108 13.838 7.20501 14.0772 7.06693C14.3163 6.92886 14.6221 7.0108 14.7602 7.24995Z" />
        <path d="M12 3.00613V9.87866L7.24648 5.12514L10.3198 2.27313C10.9597 1.67928 12 2.13311 12 3.00613Z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec;
