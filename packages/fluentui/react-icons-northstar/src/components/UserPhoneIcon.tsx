import * as React from 'react';
import cx from 'classnames';
import createSvgIcon from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

const UserPhoneIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M21.25 10.21c.23.15.41.34.55.57.13.23.2.48.2.74v.96a6.75 6.75 0 0 0-1 .7v-1.66a.5.5 0 0 0-.14-.38.5.5 0 0 0-.38-.14H9.52a.5.5 0 0 0-.37.14.5.5 0 0 0-.15.38v6.98c0 .14.05.26.16.36.1.1.23.15.36.15H12v-1.12c0-.12.04-.22.12-.3s.17-.13.29-.13h5.18c.12 0 .21.04.3.13s.11.18.11.3v.83c-.72.36-1.31.79-1.77 1.29H9.52c-.28 0-.53-.07-.77-.21a1.57 1.57 0 0 1-.55-.56c-.13-.23-.2-.48-.2-.74v-6.98A1.52 1.52 0 0 1 9.52 10h10.96c.28 0 .53.07.77.21zM16 12.77a2 2 0 0 1-1 3.73 2 2 0 1 1 1-3.73zm7.62 1.13c.17.13.27.3.31.5s.07.46.07.79c0 1.48-.38 2.86-1.13 4.12a8.17 8.17 0 0 1-4.16 3.46c-.39.15-.68.23-.87.23-.2 0-.35-.04-.49-.12s-.25-.2-.36-.36a2.07 2.07 0 0 1-.27-1.02c0-.23.08-.44.26-.66s.37-.42.59-.6c.55-.41 1.03-.62 1.45-.62.17 0 .36.03.55.1a6 6 0 0 1 .71.31l1.66-2.38c-.19-.17-.34-.32-.46-.46s-.24-.31-.33-.51-.14-.42-.14-.66a3.69 3.69 0 0 1 .3-1.27c.15-.32.3-.55.44-.7s.3-.24.46-.28.38-.07.66-.07c.34 0 .59.07.75.2z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M21.25 10.21a1.56 1.56 0 0 1 .75 1.3v1.27c-.7.2-1.23.72-1.6 1.56-.26.59-.4 1.14-.4 1.67 0 .65.22 1.23.65 1.74l-.72 1.03a2.74 2.74 0 0 0-.91-.17c-.17 0-.35.02-.54.07-.18.05-.34.1-.48.16v-.95a.43.43 0 0 0-.12-.3.38.38 0 0 0-.29-.13h-5.18a.38.38 0 0 0-.3.13.43.43 0 0 0-.11.3v2.12H9.52c-.28 0-.53-.07-.77-.22a1.6 1.6 0 0 1-.55-.56c-.13-.23-.2-.48-.2-.74v-6.98c0-.26.07-.5.2-.74.14-.23.33-.42.57-.56s.48-.21.75-.21h10.96c.28 0 .54.07.77.21zM14 12.77a2.01 2.01 0 0 0-.73 2.73 2 2 0 0 0 2.73.73 2 2 0 0 0 0-3.46c-.3-.18-.64-.27-1-.27s-.7.09-1 .27zm9.62 1.12c.17.13.27.3.31.5.05.2.07.47.07.79a7.96 7.96 0 0 1-3.6 6.7c-.47.31-.94.58-1.41.8-.47.21-.86.32-1.15.32a.96.96 0 0 1-.85-.48 2.06 2.06 0 0 1-.27-1.02c0-.38.28-.8.85-1.26.22-.17.46-.32.73-.44s.5-.2.72-.2c.17 0 .34.04.5.1l.76.33 1.66-2.38c-.33-.3-.57-.58-.72-.81-.14-.24-.21-.51-.21-.82 0-.3.06-.62.2-.97s.29-.64.46-.9a.9.9 0 0 1 .49-.37c.19-.06.43-.08.72-.08.33 0 .58.06.74.2z"
      />
    </svg>
  ),
  displayName: 'UserPhoneIcon',
});

export default UserPhoneIcon;
