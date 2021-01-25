import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const CallParkingIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M6.53544 2.11648C5.49406 1.85267 4.40494 1.9649 3.55101 2.44268C2.68184 2.92898 2.07166 3.79019 2.04156 4.9441C1.99456 6.74545 2.41207 9.16298 4.06815 12.0019C5.70298 14.8045 7.50831 16.4843 9.0056 17.4831C9.95159 18.1141 10.9973 18.1308 11.8903 17.7193C12.7694 17.3142 13.4838 16.5057 13.8548 15.5027C14.0415 14.9978 13.9975 14.4365 13.7345 13.9668L12.781 12.2642C12.1747 11.1813 10.8657 10.7073 9.70661 11.1507L9.04092 11.4053C8.71835 11.5287 8.42164 11.4718 8.25304 11.3062C7.68784 10.7511 7.28407 9.99728 7.10089 9.18525C7.04329 8.9299 7.1603 8.62796 7.44299 8.41462L8.04412 7.96098C9.04934 7.20237 9.33337 5.81449 8.70699 4.72197L7.73513 3.0269C7.47512 2.5734 7.04218 2.24486 6.53544 2.11648ZM3.04122 4.97019C3.06139 4.19711 3.45254 3.64365 4.03928 3.31537C4.64126 2.97856 5.46263 2.8763 6.28987 3.08586C6.5339 3.14768 6.74239 3.3059 6.8676 3.52429L7.83946 5.21936C8.21529 5.87487 8.04487 6.7076 7.44174 7.16277L6.84061 7.61641C6.32141 8.00824 5.96194 8.68064 6.1254 9.4053C6.34709 10.388 6.83828 11.3184 7.55233 12.0197C8.0737 12.5317 8.8175 12.5614 9.39819 12.3393L10.0639 12.0847C10.7594 11.8186 11.5447 12.1031 11.9085 12.7528L12.862 14.4554C12.982 14.6696 13.002 14.9256 12.9169 15.1558C12.6267 15.9404 12.0825 16.5296 11.4718 16.8111C10.8752 17.086 10.2001 17.0778 9.56054 16.6512C8.18976 15.7368 6.49007 14.1692 4.93193 11.4981C3.36852 8.81796 2.99912 6.58369 3.04122 4.97019Z" />
        <path d="M12.5 2C12.2238 2 12 2.22386 12 2.5V9.5C12 9.77614 12.2238 10 12.5 10C12.7761 10 13 9.77614 13 9.5V7H14.5C15.8807 7 17 5.88071 17 4.5C17 3.11929 15.8807 2 14.5 2H12.5ZM14.5 6H13V3H14.5C15.3284 3 16 3.67158 16 4.5C16 5.32843 15.3284 6 14.5 6Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M3.55101 2.44267C4.40494 1.9649 5.49406 1.85267 6.53544 2.11648C7.04218 2.24485 7.47512 2.5734 7.73513 3.02689L8.6329 4.59276C9.29786 5.75254 8.9327 7.23022 7.80407 7.94679L7.01425 8.44825C6.68733 8.65581 6.56745 8.97235 6.64244 9.22397C6.90993 10.1214 7.50308 11.1181 8.15518 11.8002C8.34925 12.0031 8.7045 12.0518 9.05289 11.8486L9.4899 11.5937C10.6974 10.8893 12.2478 11.312 12.9308 12.5316L13.7345 13.9668C13.9975 14.4365 14.0415 14.9978 13.8548 15.5026C13.4838 16.5057 12.7694 17.3142 11.8903 17.7193C10.9973 18.1308 9.95159 18.1141 9.0056 17.4831C7.50831 16.4842 5.70298 14.8045 4.06815 12.0019C2.41207 9.16298 1.99456 6.74545 2.04156 4.9441C2.07166 3.79018 2.68184 2.92897 3.55101 2.44267Z" />
        <path d="M12.5 2C12.2238 2 12 2.22386 12 2.5V9.5C12 9.77614 12.2238 10 12.5 10C12.7761 10 13 9.77614 13 9.5V7H14.5C15.8807 7 17 5.88071 17 4.5C17 3.11929 15.8807 2 14.5 2H12.5ZM14.5 6H13V3H14.5C15.3284 3 16 3.67157 16 4.5C16 5.32843 15.3284 6 14.5 6Z" />
      </g>
    </svg>
  ),
  displayName: 'CallParkingIcon',
});
