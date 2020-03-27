import * as React from 'react';
import cx from 'classnames';
import createSvgIcon from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

const CallPstn = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M15 9c.274 0 .523.05.762.154.25.11.462.253.646.436.185.185.328.397.437.647.104.24.155.49.155.763s-.05.523-.154.762a2.065 2.065 0 0 1-1.083 1.083c-.24.104-.49.155-.763.155-.274 0-.524-.05-.763-.155a2.051 2.051 0 0 1-1.082-1.083C13.05 11.524 13 11.274 13 11s.05-.524.155-.763a2.054 2.054 0 0 1 1.082-1.082C14.477 9.05 14.726 9 15 9m0-1c-.411 0-.798.08-1.162.238a3.064 3.064 0 0 0-1.6 1.6C12.079 10.202 12 10.59 12 11s.08.798.238 1.162a3.055 3.055 0 0 0 1.6 1.6c.364.159.751.238 1.162.238.41 0 .798-.08 1.162-.238a3.08 3.08 0 0 0 .954-.646c.272-.272.487-.59.646-.954.159-.364.238-.751.238-1.162s-.08-.798-.238-1.162a3.085 3.085 0 0 0-.646-.954 3.09 3.09 0 0 0-.954-.646A2.883 2.883 0 0 0 15 8zM17.535 24c-.484 0-.966-.248-1.369-.716-.579-.67-.559-1.318-.44-1.743.125-.444.493-.84.86-1.209.412-.41.923-.745 1.192-.91a.976.976 0 0 1 .767-.11l.663.171s1.22-1.853 1.336-2.052l-.459-.687a.982.982 0 0 1-.163-.658c.03-.276.111-.823.325-1.366.158-.404.3-.667.503-.941.373-.51 1.03-.736 1.76-.6 1.306.238 1.476 1.028 1.49 1.357.02.542-.195 3.236-1.567 5.566-1.694 2.873-4.176 3.738-4.453 3.827a1.43 1.43 0 0 1-.445.071zm.759-3.72a5.603 5.603 0 0 0-1 .76c-.189.189-.54.54-.605.77-.05.178-.08.458.235.822.18.21.465.435.749.346.873-.28 2.676-1.309 3.898-3.383 1.256-2.133 1.444-4.62 1.428-5.022-.01-.27-.514-.383-.668-.41-.35-.066-.632.012-.777.21-.152.204-.25.39-.377.714-.17.433-.237.879-.261 1.106.003 0 .374.554.464.696.199.314.21.736.026 1.05-.117.2-1.363 2.095-1.363 2.095a.998.998 0 0 1-1.083.418l-.666-.172z" />
        <path d="M14.75 20.088c-2.765 0-5.75-1.169-5.75-3.057V16.5a.5.5 0 0 1 .5-.5h9a.5.5 0 1 1 0 1l-8.5.031c0 1.058 2.309 2.057 4.75 2.057l.213-.002c.264-.01.506.21.514.487a.501.501 0 0 1-.487.513l-.24.002z" />
      </g>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M15.336 20.086c-.23.02-.487.031-.774.031a12.06 12.06 0 0 1-2.414-.258c-1.042-.213-1.875-.534-2.5-.96-.765-.522-1.148-1.175-1.148-1.962v-.5c0-.12.042-.222.125-.308a.407.407 0 0 1 .305-.13h10.117c.01.366.079.698.207.997s.316.592.566.88l-.976 1.398a2.968 2.968 0 0 0-1.117-.235c-.438 0-.851.091-1.239.274-.387.181-.772.44-1.152.773zM14.5 14c-.401 0-.783-.078-1.145-.235-.362-.156-.683-.375-.964-.656s-.5-.602-.657-.965A2.856 2.856 0 0 1 11.5 11c0-.401.078-.784.234-1.149a3.07 3.07 0 0 1 1.621-1.62C13.717 8.076 14.1 8 14.5 8c.4 0 .785.078 1.152.234a3.03 3.03 0 0 1 1.614 1.613c.156.368.234.752.234 1.153s-.077.782-.23 1.144c-.154.363-.372.684-.653.965s-.604.5-.969.656A2.887 2.887 0 0 1 14.5 14zm3.227 6.04c-.308 0-.672.114-1.094.343-.411.229-.771.51-1.078.844-.328.353-.492.684-.492.992 0 .203.027.408.082.617.054.208.133.396.238.563.11.187.247.334.414.441.167.107.354.16.562.16.245 0 .628-.112 1.149-.336.323-.13.692-.307 1.11-.53a9.99 9.99 0 0 0 2.034-1.509 9.267 9.267 0 0 0 2.516-4.21 9.432 9.432 0 0 0 .332-2.509c0-.286-.015-.527-.043-.723s-.085-.365-.168-.511a.927.927 0 0 0-.41-.364c-.175-.08-.402-.12-.684-.12h-.199c-.102 0-.21.005-.328.015-.117.01-.23.039-.34.086-.182.073-.354.21-.516.41-.16.2-.301.436-.421.707-.11.25-.197.508-.262.773s-.098.498-.098.696c0 .208.029.396.086.562a2.254 2.254 0 0 0 .465.782c.086.099.188.207.305.324l.222.223-1.922 2.758-.343-.164c-.24-.12-.485-.211-.735-.274a1.574 1.574 0 0 0-.382-.047z"
      />
    </svg>
  ),
  displayName: 'CallPstn',
});

export default CallPstn;
