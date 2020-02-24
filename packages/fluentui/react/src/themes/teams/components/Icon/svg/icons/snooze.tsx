import * as React from 'react';
import { TeamsSvgIconSpec } from '../types';
import cx from 'classnames';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="M22.5 20.25a.96.96 0 01-.078.39.977.977 0 01-.215.317.987.987 0 01-.317.215.972.972 0 01-.39.078h-12a.974.974 0 01-.39-.078 1.018 1.018 0 01-.532-.531 1.016 1.016 0 010-.782 1.018 1.018 0 01.532-.53.974.974 0 01.39-.079.976.976 0 00.39-.078 1.018 1.018 0 00.532-.531.976.976 0 00.078-.391v-4a4.886 4.886 0 01.39-1.95 5 5 0 012.661-2.66 4.89 4.89 0 011.949-.39c.078 0 .183.003.312.008.131.005.27.018.418.039.149.02.3.048.45.082a1.972 1.972 0 01.41.137.94.94 0 01.297.207.412.412 0 01.113.293.508.508 0 01-.137.359.458.458 0 01-.355.148.385.385 0 01-.094-.011.682.682 0 01-.086-.028 6.969 6.969 0 00-.652-.168 3.375 3.375 0 00-.676-.066 3.876 3.876 0 00-1.547.312 4.03 4.03 0 00-2.136 2.13 3.881 3.881 0 00-.317 1.558v4a1.91 1.91 0 01-.16.777 2.118 2.118 0 01-.43.637 1.974 1.974 0 01-.632.43 1.941 1.941 0 01-.778.156h12a1.943 1.943 0 01-.778-.156 2.035 2.035 0 01-.636-.43 2.057 2.057 0 01-.43-.637 1.956 1.956 0 01-.156-.777v-2a.507.507 0 01.5-.5.507.507 0 01.5.5v2a.993.993 0 00.078.39 1.043 1.043 0 00.215.317 1.032 1.032 0 00.316.215.98.98 0 00.39.078.972.972 0 01.391.078.987.987 0 01.317.215.977.977 0 01.215.316.96.96 0 01.078.391zm-8.5 2a1.453 1.453 0 00.117.578 1.522 1.522 0 00.805.805 1.485 1.485 0 001.156 0 1.52 1.52 0 00.805-.805A1.453 1.453 0 0017 22.25zm4.5-7.398a.4.4 0 01-.399.398h-2.203a.376.376 0 01-.285-.121.41.41 0 01-.113-.285.348.348 0 01.031-.149.699.699 0 01.086-.125l1.516-1.523h-1.235a.398.398 0 010-.797h2.203a.372.372 0 01.285.121.401.401 0 01.114.285.374.374 0 01-.117.274l-1.516 1.523H18.1a.4.4 0 01.399.399zm5-3.102a.507.507 0 01-.5.5h-3a.497.497 0 01-.352-.852l2.149-2.148H20a.5.5 0 010-1h3a.497.497 0 01.351.852l-2.148 2.148H23a.507.507 0 01.5.5z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M22.5 20.25a.976.976 0 01-.078.39 1.018 1.018 0 01-.531.532.976.976 0 01-.391.078h-12a.976.976 0 01-.39-.078 1.018 1.018 0 01-.532-.531 1.016 1.016 0 010-.782 1.018 1.018 0 01.531-.53.976.976 0 01.391-.079.967.967 0 00.39-.078 1.018 1.018 0 00.532-.531.974.974 0 00.078-.391v-4a4.886 4.886 0 01.39-1.95 5 5 0 012.66-2.66 4.955 4.955 0 015.419 1.024.506.506 0 00-.106.106 1.538 1.538 0 00-.11.16 1.872 1.872 0 00-.089.172 7.199 7.199 0 00-.062.14q-.125-.039-.246-.066a1.16 1.16 0 00-.254-.028h-2.204a1.453 1.453 0 00-.578.118 1.52 1.52 0 00-.804.804 1.453 1.453 0 00-.118.578 1.426 1.426 0 00.13.602 1.63 1.63 0 00.355.5.905.905 0 00-.207.215 1.584 1.584 0 00-.278.879 1.47 1.47 0 00.118.586 1.494 1.494 0 00.32.476 1.552 1.552 0 00.477.324 1.428 1.428 0 00.585.122h2.204a1.453 1.453 0 00.578-.118 1.52 1.52 0 00.804-.804 1.486 1.486 0 00-.011-1.184 1.531 1.531 0 00-.356-.496 1.444 1.444 0 00.23-.273 1.848 1.848 0 00.16-.32 1.339 1.339 0 00.231.066 1.4 1.4 0 00.207.023c.068.003.138.004.211.004h.242c.032.167.056.333.075.5a4.522 4.522 0 01.027.5v4a.974.974 0 00.078.39 1.018 1.018 0 00.531.532.967.967 0 00.391.078.976.976 0 01.39.078 1.018 1.018 0 01.532.531.976.976 0 01.078.391zm-8.5 2a1.453 1.453 0 00.117.578 1.52 1.52 0 00.805.805 1.485 1.485 0 001.156 0 1.52 1.52 0 00.805-.805A1.453 1.453 0 0017 22.25zm4.5-7.398a.4.4 0 01-.398.398h-2.204a.373.373 0 01-.285-.121.405.405 0 01-.113-.285.375.375 0 01.117-.274l1.516-1.523h-1.235a.398.398 0 010-.797h2.204a.375.375 0 01.285.121.406.406 0 01.113.285.374.374 0 01-.117.274l-1.516 1.523h1.235a.4.4 0 01.398.399zm5-3.102a.507.507 0 01-.5.5h-3a.497.497 0 01-.352-.852l2.149-2.148H20a.5.5 0 010-1h3a.497.497 0 01.352.852l-2.149 2.148H23a.507.507 0 01.5.5z"
        />
      </g>
    </svg>
  ),
  styles: {}
} as TeamsSvgIconSpec;
