import * as React from 'react';
import cx from 'classnames';
import createSvgIcon from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

const FilesImageIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M22.5 10h-13A1.502 1.502 0 0 0 8 11.5v9A1.502 1.502 0 0 0 9.5 22h13a1.502 1.502 0 0 0 1.5-1.5v-9a1.502 1.502 0 0 0-1.5-1.5zM9 20.5v-1.415l3.519-3.897a.498.498 0 0 1 .395-.145.489.489 0 0 1 .36.2L17.21 21H9.5a.5.5 0 0 1-.5-.5zm14 0a.5.5 0 0 1-.5.5h-4.078l-4.329-6.33a1.5 1.5 0 0 0-2.299-.17L9 17.593V11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5zm-3.5-8a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M23.37 10.114a1.538 1.538 0 0 1 .509.324 1.462 1.462 0 0 1 .337.488 1.447 1.447 0 0 1 .12.574v9a1.41 1.41 0 0 1-.12.574 1.482 1.482 0 0 1-.337.48 1.604 1.604 0 0 1-.504.329 1.57 1.57 0 0 1-.603.117H19.24l-5.227-7.328a1.46 1.46 0 0 0-.553-.464 1.642 1.642 0 0 0-.733-.168 1.6 1.6 0 0 0-.606.117 1.397 1.397 0 0 0-.5.344l-3.957 4.202V11.5a1.4 1.4 0 0 1 .122-.578 1.536 1.536 0 0 1 .342-.484 1.563 1.563 0 0 1 .5-.325 1.592 1.592 0 0 1 .6-.113h13.544a1.637 1.637 0 0 1 .599.114zM13.16 15.242L17.969 22H9.227a1.404 1.404 0 0 1-1.204-.547 2.034 2.034 0 0 1-.359-1.258l4.705-5.007a.433.433 0 0 1 .342-.148.516.516 0 0 1 .448.202zm5.685-2.59a2.083 2.083 0 0 0-.671.434 1.987 1.987 0 0 0-.452.644 1.945 1.945 0 0 0 0 1.54 1.987 1.987 0 0 0 .452.644 2.083 2.083 0 0 0 .671.434 2.186 2.186 0 0 0 1.604 0 2.08 2.08 0 0 0 .672-.434 2.003 2.003 0 0 0 .452-.644 1.95 1.95 0 0 0 0-1.54 2.003 2.003 0 0 0-.452-.644 2.08 2.08 0 0 0-.672-.434 2.186 2.186 0 0 0-1.604 0zm1.542 1.137a.98.98 0 0 1 .302.711.954.954 0 0 1-.302.703 1.028 1.028 0 0 1-.74.297 1.049 1.049 0 0 1-.402-.078.966.966 0 0 1-.33-.219.928.928 0 0 1-.228-.316.97.97 0 0 1 .228-1.098 1.026 1.026 0 0 1 .334-.215 1.076 1.076 0 0 1 .399-.074 1.065 1.065 0 0 1 .74.29z"
      />
    </svg>
  ),
  displayName: 'FilesImageIcon',
});

export default FilesImageIcon;
