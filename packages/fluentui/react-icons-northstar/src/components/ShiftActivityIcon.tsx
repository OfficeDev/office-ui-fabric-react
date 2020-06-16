import * as React from 'react';
import cx from 'classnames';
import createSvgIcon from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

const ShiftActivityIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 18 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M18.844,10.406a.5.5,0,0,0,.5-.5.5.5,0,0,0-.094-.289,3.644,3.644,0,0,0-1.758-.547.494.494,0,0,0-.5.5.437.437,0,0,0,.125.321A5.369,5.369,0,0,0,18.844,10.406Zm2.961,2.039a.493.493,0,0,0,.5-.5.563.563,0,0,0-.117-.328c-.188-.265-1.016-1.109-1.329-1.109a.513.513,0,0,0-.492.5.491.491,0,0,0,.055.234A8.6,8.6,0,0,0,21.6,12.4.442.442,0,0,0,21.805,12.445ZM23.422,16a.5.5,0,0,0,.5-.5,3.647,3.647,0,0,0-.547-1.758.5.5,0,0,0-.789.406,5.03,5.03,0,0,0,.516,1.727A.448.448,0,0,0,23.422,16Zm-3.43,1a.5.5,0,1,0,0-1h-3V12a.5.5,0,0,0-1,0v4.5a.5.5,0,0,0,.5.5Zm-3.5,7A7.274,7.274,0,0,0,23,20.133a8.823,8.823,0,0,0,.922-2.633.5.5,0,0,0-.5-.5.439.439,0,0,0-.32.117,9.96,9.96,0,0,0-.586,1.789,5.588,5.588,0,0,1-.727,1.367,6.5,6.5,0,1,1-9.062-9.062,5.446,5.446,0,0,1,1.367-.727,9.423,9.423,0,0,0,1.773-.593.408.408,0,0,0,.125-.321.5.5,0,0,0-.492-.5,6.839,6.839,0,0,0-1.656.446A7.392,7.392,0,0,0,8.992,16.5,7.512,7.512,0,0,0,16.492,24Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M17.5,10.164a1,1,0,0,0,1-1C18.5,7.992,16.82,8,16,8a1,1,0,0,0,0,2,6,6,0,0,1,.648.039A7.806,7.806,0,0,0,17.5,10.164Zm3.93,2.414a1,1,0,0,0,.992-1,1.045,1.045,0,0,0-.227-.633c-.351-.468-1.156-1.367-1.773-1.367a.984.984,0,0,0-.992.992c0,.633.429.789.812,1.188C20.609,12.141,20.82,12.578,21.43,12.578ZM23,17a1,1,0,0,0,1-1c0-.82.008-2.5-1.164-2.5a1,1,0,0,0-1,1,7.806,7.806,0,0,0,.125.852A6,6,0,0,1,22,16,1,1,0,0,0,23,17Zm-4,0a1,1,0,0,0,0-2H17V12.5a1,1,0,0,0-2,0V16a1,1,0,0,0,1,1Zm-3,7a8.082,8.082,0,0,0,6.469-3.281A4.151,4.151,0,0,0,23.328,19a1,1,0,0,0-1-1,.976.976,0,0,0-.531.148,6,6,0,0,0-.961,1.383,5.992,5.992,0,1,1-8.367-8.375c.312-.211.64-.383.961-.578A1,1,0,0,0,13,8.672a3.222,3.222,0,0,0-1.523.719A8.007,8.007,0,0,0,16,24Z"
      />
    </svg>
  ),
  displayName: 'ShiftActivityIcon',
});

export default ShiftActivityIcon;
