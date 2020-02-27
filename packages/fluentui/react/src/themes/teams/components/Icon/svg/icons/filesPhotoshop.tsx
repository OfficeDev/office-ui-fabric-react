import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path d="M20.5 8H15c-.4 0-.777.156-1.083.463l-3.478 3.968c-.283.283-.439.66-.439 1.06V22.5c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-13c0-.827-.673-1.5-1.5-1.5zM14 9.884V13h-2.732L14 9.884zM21 22.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9.008c0-.023.01-.044.014-.066V14H15V9h5.5a.5.5 0 0 1 .5.5v13zM14.84 16c-.481 0-.835.035-1.09.081v3.855h.707v-1.472c.093.017.215.023.348.023.504 0 .95-.133 1.235-.417.22-.21.336-.517.336-.888 0-.365-.15-.672-.383-.863-.249-.209-.631-.319-1.153-.319zm-.035 1.93a1.44 1.44 0 0 1-.348-.029V16.58a1.97 1.97 0 0 1 .412-.035c.493 0 .794.232.794.666 0 .459-.325.72-.858.72zm2.904.32c-.36-.128-.493-.215-.493-.395 0-.174.14-.296.395-.296.249 0 .475.093.597.163l.139-.505a1.656 1.656 0 0 0-.748-.168c-.655 0-1.067.389-1.067.887-.005.33.226.632.777.823.348.122.464.22.464.412 0 .185-.14.313-.452.313a1.59 1.59 0 0 1-.725-.203l-.139.516c.209.116.516.203.858.203.748 0 1.148-.377 1.148-.887-.006-.417-.244-.678-.754-.864z" />
    </svg>
  ),
  styles: {}
} as TeamsProcessedSvgIconSpec;
