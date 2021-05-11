import * as React from 'react';
import { createSvgIcon } from '../utils/createSvgIcon';

export const TeamsIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 28 28" className={classes.svg}>
      <path
        d="M10 12.1201V19.5001C10 20.4011 10.221 21.2491 10.605 22.0001H15.604C16.312 22.0001 17 21.2871 17 20.6461V11.0211L16.719 11.0001H11.12C10.501 11.0001 10 11.5011 10 12.1201Z"
        fill="black"
      />
      <path
        d="M15.8334 8H12.8574C13.2834 9.338 14.5214 10.313 16.0004 10.313C16.3514 10.313 16.6824 10.244 17.0004 10.143V9.167C17.0004 8.525 16.4754 8 15.8334 8Z"
        fill="black"
      />
      <path
        d="M24.8728 11H19.8798L18.4858 12.127V17.716C18.4858 19.791 20.1678 21.473 22.2428 21.473C24.3178 21.473 25.9998 19.791 25.9998 17.716V12.127C25.9998 11.505 25.4948 11 24.8728 11Z"
        fill="#5059C9"
      />
      <path
        d="M25 7.5C25 8.881 23.881 10 22.5 10C21.119 10 20 8.881 20 7.5C20 6.119 21.119 5 22.5 5C23.881 5 25 6.119 25 7.5Z"
        fill="#5059C9"
      />
      <path
        d="M11.12 11H19.88C20.499 11 21 11.501 21 12.12V19.5C21 22.538 18.538 25 15.5 25C12.462 25 10 22.538 10 19.5V12.12C10 11.501 10.501 11 11.12 11Z"
        fill="#7B83EB"
      />
      <path
        d="M19.3133 7C19.3133 8.83 17.8303 10.313 16.0003 10.313C14.1703 10.313 12.6863 8.83 12.6863 7C12.6863 5.17 14.1703 3.687 16.0003 3.687C17.8303 3.687 19.3133 5.17 19.3133 7Z"
        fill="#7B83EB"
      />
      <path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8573 8H15.8333C16.4753 8 17.0003 8.525 17.0003 9.167V10.143C16.6823 10.244 16.3513 10.313 16.0003 10.313C14.5213 10.313 13.2833 9.338 12.8573 8ZM10 19.5001V12.1201C10 11.5011 10.501 11.0001 11.12 11.0001H16.719L17 11.0211V20.6461C17 21.2871 16.312 22.0001 15.604 22.0001H10.605C10.221 21.2491 10 20.4011 10 19.5001Z"
        fill="black"
      />
      <path
        d="M14.8335 21H3.16649C2.52549 21 2.00049 20.475 2.00049 19.833V8.167C2.00049 7.525 2.52549 7 3.16649 7H14.8335C15.4755 7 16.0005 7.525 16.0005 8.167V19.833C16.0005 20.475 15.4755 21 14.8335 21Z"
        fill="#4B53BC"
      />
      <path d="M11.1806 11.5776H8.79158V17.9996H7.22158V11.5776H4.81958V9.9996H11.1806V11.5776Z" fill="white" />
    </svg>
  ),
  displayName: 'TeamsIcon',
});
