import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const SpeakerMuteIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9961 3.00611C11.9961 2.13309 10.9558 1.67926 10.3159 2.27311L6.44369 5.86649C6.35122 5.9523 6.22973 5.99999 6.10358 5.99999H3.49609C2.66767 5.99999 1.99609 6.67156 1.99609 7.49999V12.5C1.99609 13.3284 2.66767 14 3.49609 14H6.10358C6.22973 14 6.35122 14.0477 6.44369 14.1335L10.3159 17.7269C10.9558 18.3207 11.9961 17.8669 11.9961 16.9939V3.00611ZM7.12392 6.59949L10.9961 3.00611V16.9939L7.12392 13.4005C6.84651 13.1431 6.48204 13 6.10358 13H3.49609C3.21995 13 2.99609 12.7761 2.99609 12.5V7.49999C2.99609 7.22385 3.21995 6.99999 3.49609 6.99999H6.10358C6.48204 6.99999 6.84651 6.85693 7.12392 6.59949Z"
        />
        <path d="M13.1425 7.64645C13.3378 7.45119 13.6544 7.45119 13.8496 7.64645L15.4961 9.29289L17.1425 7.64645C17.3378 7.45119 17.6544 7.45119 17.8496 7.64645C18.0449 7.84171 18.0449 8.15829 17.8496 8.35356L16.2032 10L17.8496 11.6464C18.0449 11.8417 18.0449 12.1583 17.8496 12.3536C17.6544 12.5488 17.3378 12.5488 17.1425 12.3536L15.4961 10.7071L13.8496 12.3536C13.6544 12.5488 13.3378 12.5488 13.1425 12.3536C12.9473 12.1583 12.9473 11.8417 13.1425 11.6464L14.789 10L13.1425 8.35355C12.9473 8.15829 12.9473 7.84171 13.1425 7.64645Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M11.9961 3.00613C11.9961 2.13311 10.9558 1.67928 10.3159 2.27313L6.44369 5.86651C6.35122 5.95232 6.22973 6.00001 6.10358 6.00001H3.49609C2.66767 6.00001 1.99609 6.67158 1.99609 7.50001V12.5C1.99609 13.3284 2.66767 14 3.49609 14H6.10358C6.22973 14 6.35122 14.0477 6.44369 14.1335L10.3159 17.7269C10.9558 18.3207 11.9961 17.8669 11.9961 16.9939V3.00613Z" />
        <path d="M13.1425 7.64645C13.3378 7.45118 13.6544 7.45118 13.8496 7.64645L15.4961 9.29289L17.1425 7.64645C17.3378 7.45118 17.6544 7.45118 17.8496 7.64645C18.0449 7.84171 18.0449 8.15829 17.8496 8.35355L16.2032 10L17.8496 11.6464C18.0449 11.8417 18.0449 12.1583 17.8496 12.3536C17.6544 12.5488 17.3378 12.5488 17.1425 12.3536L15.4961 10.7071L13.8496 12.3536C13.6544 12.5488 13.3378 12.5488 13.1425 12.3536C12.9473 12.1583 12.9473 11.8417 13.1425 11.6464L14.789 10L13.1425 8.35355C12.9473 8.15829 12.9473 7.84171 13.1425 7.64645Z" />
      </g>
    </svg>
  ),
  displayName: 'SpeakerMuteIcon',
});
