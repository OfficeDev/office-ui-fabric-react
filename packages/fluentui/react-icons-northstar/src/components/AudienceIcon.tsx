import * as React from 'react';
import cx from 'classnames';
import createSvgIcon from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

const AudienceIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M8,19.719c0-.5.242-.961.8-.961h3.031a2.187,2.187,0,0,0-.18.89,2.994,2.994,0,0,0,.735,2.024,6.3,6.3,0,0,1-1.274.148C9.812,21.82,8,21.328,8,19.719Zm4.883-.039a.829.829,0,0,1,.805-.922h4.624a.829.829,0,0,1,.8.937c0,1.625-1.781,2.125-3.1,2.125C14.664,21.82,12.883,21.336,12.883,19.68Zm6.742,1.992a3.109,3.109,0,0,0,.719-1.938,3.469,3.469,0,0,0-.156-.976h3A.842.842,0,0,1,24,19.7c0,1.641-1.82,2.117-3.148,2.117A5.043,5.043,0,0,1,19.625,21.672ZM9.156,16.078a1.965,1.965,0,1,1,1.852,1.961A1.947,1.947,0,0,1,9.156,16.078Zm4.875,0A1.958,1.958,0,0,1,15.992,14.2a1.922,1.922,0,1,1,.047,3.844A1.958,1.958,0,0,1,14.031,16.078Zm4.883.016a1.966,1.966,0,1,1,1.969,1.945A1.964,1.964,0,0,1,18.914,16.094Zm-2.437-3.977a1.961,1.961,0,1,1,1.953,1.906A1.941,1.941,0,0,1,16.477,12.117Zm-2.922,1.906a1.922,1.922,0,1,1,1.968-1.929A1.941,1.941,0,0,1,13.555,14.023Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M8,19.719c0-.5.242-.961.8-.961h3.031a2.187,2.187,0,0,0-.18.89,2.994,2.994,0,0,0,.735,2.024,6.3,6.3,0,0,1-1.274.148C9.812,21.82,8,21.328,8,19.719Zm4.883-.039a.829.829,0,0,1,.805-.922h4.624a.829.829,0,0,1,.8.937c0,1.625-1.781,2.125-3.1,2.125C14.664,21.82,12.883,21.336,12.883,19.68Zm6.742,1.992a3.109,3.109,0,0,0,.719-1.938,3.469,3.469,0,0,0-.156-.976h3A.842.842,0,0,1,24,19.7c0,1.641-1.82,2.117-3.148,2.117A5.043,5.043,0,0,1,19.625,21.672ZM9.156,16.078a1.965,1.965,0,1,1,1.852,1.961A1.947,1.947,0,0,1,9.156,16.078Zm4.875,0A1.958,1.958,0,0,1,15.992,14.2a1.922,1.922,0,1,1,.047,3.844A1.958,1.958,0,0,1,14.031,16.078Zm4.883.016a1.966,1.966,0,1,1,1.969,1.945A1.964,1.964,0,0,1,18.914,16.094Zm-2.437-3.977a1.961,1.961,0,1,1,1.953,1.906A1.941,1.941,0,0,1,16.477,12.117Zm-2.922,1.906a1.922,1.922,0,1,1,1.968-1.929A1.941,1.941,0,0,1,13.555,14.023Z"
      />
    </svg>
  ),
  displayName: 'AudienceIcon',
});

export default AudienceIcon;
