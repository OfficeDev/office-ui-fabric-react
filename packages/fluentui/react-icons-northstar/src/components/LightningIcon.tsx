import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const LightningIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(iconClassNames.outline, classes.outlinePart)}
          d="M19.492 9a.507.507 0 0 1 .5.5.998.998 0 0 1-.098.293q-.098.223-.265.547t-.383.727q-.215.402-.445.82t-.461.831q-.23.415-.434.77t-.351.622l-.219.39h3.156a.507.507 0 0 1 .5.5.47.47 0 0 1-.156.367l-8.5 8a.5.5 0 0 1-.344.133.507.507 0 0 1-.5-.5 1.14 1.14 0 0 1 .082-.312q.082-.226.22-.551t.312-.719q.176-.394.37-.808t.388-.82q.19-.406.359-.758t.3-.621q.133-.27.196-.41h-2.227a.507.507 0 0 1-.5-.5 1.73 1.73 0 0 1 .09-.27q.09-.238.25-.63t.371-.898q.211-.507.453-1.078t.5-1.168l.508-1.172.477-1.093q.226-.52.41-.922t.308-.66a1.948 1.948 0 0 1 .172-.313 1.407 1.407 0 0 1 .192-.21.394.394 0 0 1 .27-.087zm-4.172 1l-3.063 7h2.235a.507.507 0 0 1 .5.5 1.23 1.23 0 0 1-.094.363c-.062.17-.14.364-.234.582s-.2.451-.317.696-.231.48-.343.707-.213.433-.301.62l-.203.43 5.734-5.398h-2.742a.507.507 0 0 1-.5-.5 1.054 1.054 0 0 1 .098-.29q.097-.225.266-.55t.382-.727q.215-.402.446-.824t.46-.836q.23-.413.434-.77t.352-.617l.218-.386z"
        />
        <path
          className={cx(iconClassNames.filled, classes.filledPart)}
          d="M19.492 9a.507.507 0 0 1 .5.5 1.104 1.104 0 0 1-.11.324q-.11.246-.288.598t-.41.781q-.232.43-.477.871t-.48.86q-.234.418-.426.754t-.316.554l-.149.258h3.157a.507.507 0 0 1 .5.5.472.472 0 0 1-.156.367l-8.5 8a.504.504 0 0 1-.845-.367 1.228 1.228 0 0 1 .09-.313q.09-.241.238-.59t.344-.773q.195-.425.395-.867t.398-.86l.36-.757c.108-.227.196-.415.27-.567l.132-.273h-2.227a.507.507 0 0 1-.5-.5 1.881 1.881 0 0 1 .09-.258q.09-.234.25-.621t.371-.894q.211-.508.453-1.079t.5-1.175q.258-.605.508-1.18t.48-1.098q.23-.523.414-.926t.309-.66a2.953 2.953 0 0 1 .164-.312 1.588 1.588 0 0 1 .191-.215.387.387 0 0 1 .27-.082z"
        />
      </g>
    </svg>
  ),
  displayName: 'LightningIcon',
});
