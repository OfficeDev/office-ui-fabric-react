import * as React from 'react';
import { createSvgIcon } from '../utils/createSvgIcon';

export const FilesCodeIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <path d="M16 7H13.5C12.673 7 12 6.327 12 5.5V2H4V18H16V7Z" fill="white" />
      <path d="M16 6.00003V5.70703L13 2.70703V5.50003C13 5.77503 13.225 6.00003 13.5 6.00003H16Z" fill="white" />
      <path
        opacity="0.64"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.707 5L13 1.293C12.8125 1.10545 12.5582 1.00006 12.293 1H4C3.44772 1 3 1.44772 3 2V18C3 18.5523 3.44772 19 4 19H16C16.5523 19 17 18.5523 17 18V5.707C16.9999 5.4418 16.8945 5.18749 16.707 5ZM16 5.707V6H13.5C13.2241 5.99945 13.0006 5.77591 13 5.5V2.707L16 5.707ZM4 2.2V17.8C4 17.9105 4.08954 18 4.2 18H15.8C15.9105 18 16 17.9105 16 17.8V7H13.5C12.6716 7 12 6.32843 12 5.5V2H4.2C4.09 2 4 2.09 4 2.2Z"
        fill="#605E5C"
      />
      <path
        d="M14.5 16H5.5C5.22386 16 5 15.7761 5 15.5C5 15.2239 5.22386 15 5.5 15H14.5C14.7761 15 15 15.2239 15 15.5C15 15.7761 14.7761 16 14.5 16Z"
        fill="#C8C6C4"
      />
      <path
        d="M13.0528 12.7764C12.9293 13.0234 13.0294 13.3237 13.2764 13.4472C13.5234 13.5707 13.8237 13.4706 13.9472 13.2236L13.0528 12.7764ZM14.5 11L14.9472 11.2236C15.0176 11.0828 15.0176 10.9172 14.9472 10.7764L14.5 11ZM13.9472 8.77639C13.8237 8.5294 13.5234 8.42929 13.2764 8.55279C13.0294 8.67628 12.9293 8.97662 13.0528 9.22361L13.9472 8.77639ZM6.94721 9.22361C7.07071 8.97662 6.9706 8.67628 6.72361 8.55279C6.47662 8.42929 6.17628 8.5294 6.05279 8.77639L6.94721 9.22361ZM5.5 11L5.05279 10.7764C4.9824 10.9172 4.9824 11.0828 5.05279 11.2236L5.5 11ZM6.05279 13.2236C6.17628 13.4706 6.47662 13.5707 6.72361 13.4472C6.9706 13.3237 7.07071 13.0234 6.94721 12.7764L6.05279 13.2236ZM13.9472 13.2236L14.9472 11.2236L14.0528 10.7764L13.0528 12.7764L13.9472 13.2236ZM14.9472 10.7764L13.9472 8.77639L13.0528 9.22361L14.0528 11.2236L14.9472 10.7764ZM6.05279 8.77639L5.05279 10.7764L5.94721 11.2236L6.94721 9.22361L6.05279 8.77639ZM5.05279 11.2236L6.05279 13.2236L6.94721 12.7764L5.94721 10.7764L5.05279 11.2236Z"
        fill="#69AFE5"
      />
      <path d="M11 8L9 14" stroke="#69AFE5" stroke-linecap="round" />
    </svg>
  ),
  displayName: 'FilesCodeIcon',
});
