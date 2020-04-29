import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const PowerPointIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 32 32" className={classes.svg}>
      <path fill="#ed6c47" d="M18 2A14.041 14.041 0 0 0 4 16l17.737 3.737z" />
      <path fill="#ff8f6b" d="M18 2a14.041 14.041 0 0 1 14 14l-7 4.758L18 16z" />
      <path fill="#d35230" d="M18 30a14.041 14.041 0 0 0 14-14H4a14.041 14.041 0 0 0 14 14z" />
      <path
        d="M16.666 7h-9.36a13.914 13.914 0 0 0 .93 19h8.43A1.337 1.337 0 0 0 18 24.667V8.333A1.337 1.337 0 0 0 16.666 7z"
        opacity=".1"
      />
      <path
        d="M15.666 8H6.54a13.906 13.906 0 0 0 2.845 19h6.282A1.337 1.337 0 0 0 17 25.667V9.333A1.337 1.337 0 0 0 15.666 8z"
        opacity=".2"
      />
      <path
        d="M15.666 8H6.54a13.89 13.89 0 0 0 .766 17h8.361A1.337 1.337 0 0 0 17 23.667V9.333A1.337 1.337 0 0 0 15.666 8z"
        opacity=".2"
      />
      <path
        d="M14.666 8H6.54a13.89 13.89 0 0 0 .766 17h7.361A1.337 1.337 0 0 0 16 23.667V9.333A1.337 1.337 0 0 0 14.666 8z"
        opacity=".2"
      />
      <path
        fill="#c43e1c"
        d="M1.333 8h13.334A1.333 1.333 0 0 1 16 9.333v13.334A1.333 1.333 0 0 1 14.667 24H1.333A1.333 1.333 0 0 1 0 22.667V9.333A1.333 1.333 0 0 1 1.333 8z"
      />
      <path
        fill="#f9f7f7"
        d="M7.997 11a4.168 4.168 0 0 1 2.755.805 2.878 2.878 0 0 1 .956 2.331 2.726 2.726 0 0 1-.473 1.588 3.164 3.164 0 0 1-1.344 1.186 4.57 4.57 0 0 1-2.02.424h-1.91V21H4V11zM5.96 15.683h1.687a2.194 2.194 0 0 0 1.492-.444 1.107 1.107 0 0 0 .504-1.026q0-1.659-1.933-1.659H5.96z"
      />
      <path fill="none" d="M0 0h32v32H0z" />
    </svg>
  ),
  displayName: 'PowerPointIcon',
});

export default PowerPointIcon;
