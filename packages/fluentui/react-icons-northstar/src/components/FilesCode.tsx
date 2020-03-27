import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const FilesCode = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path d="M20.5 8H15c-.4 0-.777.156-1.083.463l-3.478 3.968c-.283.283-.439.66-.439 1.06V22.5c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-13c0-.827-.673-1.5-1.5-1.5zm-6.514 1.9V13h-2.718l2.718-3.1zM21 22.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V14h3.986V9.003c.005 0 .01-.003.014-.003h5.5a.5.5 0 0 1 .5.5v13zm-2.462-6.24a.375.375 0 0 0-.576.48l1.05 1.26-1.05 1.26a.375.375 0 1 0 .576.48l1.25-1.5a.375.375 0 0 0 0-.48l-1.25-1.5zm-4.548-.048a.375.375 0 0 0-.528.048l-1.25 1.5a.375.375 0 0 0 0 .48l1.25 1.5a.374.374 0 1 0 .576-.48L12.988 18l1.05-1.26a.375.375 0 0 0-.048-.528zm3.129-1.568a.374.374 0 0 0-.475.237l-2 6a.375.375 0 1 0 .712.238l2-6a.375.375 0 0 0-.237-.475z" />
      </g>
    </svg>
  ),
  displayName: 'FilesCode',
});

export default FilesCode;
