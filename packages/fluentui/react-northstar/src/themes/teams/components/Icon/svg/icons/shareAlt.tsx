import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg viewBox="0 0 20 20" role="presentation" className={classes.svg}>
      <path
        className={cx(teamsIconClassNames.filled, classes.filledPart)}
        d="M17 5.5C17 6.88071 15.8807 8 14.5 8C13.7014 8 12.9903 7.62559 12.5326 7.04275L7.91508 9.35154C7.97047 9.55834 8 9.77572 8 10C8 10.2243 7.97046 10.4417 7.91505 10.6486L12.5326 12.9573C12.9903 12.3744 13.7014 12 14.5 12C15.8807 12 17 13.1193 17 14.5C17 15.8807 15.8807 17 14.5 17C13.1193 17 12 15.8807 12 14.5C12 14.2757 12.0295 14.0583 12.0849 13.8515L7.46735 11.5427C7.00966 12.1256 6.29855 12.5 5.5 12.5C4.11929 12.5 3 11.3807 3 10C3 8.61929 4.11929 7.5 5.5 7.5C6.29859 7.5 7.00973 7.87444 7.46742 8.45734L12.0849 6.14856C12.0295 5.94173 12 5.72431 12 5.5C12 4.11929 13.1193 3 14.5 3C15.8807 3 17 4.11929 17 5.5Z"
      />
      <path
        className={cx(teamsIconClassNames.outline, classes.outlinePart)}
        d="M12 5.50151C12 4.11996 13.12 3 14.5015 3C15.8831 3 17.003 4.11996 17.003 5.50151C17.003 6.88305 15.8831 8.00302 14.5015 8.00302C13.7015 8.00302 12.9892 7.62749 12.5313 7.0431L7.91501 9.35127C7.97044 9.55816 8 9.77563 8 10C8 10.2243 7.97047 10.4417 7.91508 10.6485L12.5327 12.9573C12.9903 12.3744 13.7014 12 14.5 12C15.8807 12 17 13.1193 17 14.5C17 15.8807 15.8807 17 14.5 17C13.1193 17 12 15.8807 12 14.5C12 14.2757 12.0295 14.0583 12.0849 13.8514L7.46742 11.5427C7.00973 12.1256 6.29859 12.5 5.5 12.5C4.11929 12.5 3 11.3807 3 10C3 8.61929 4.11929 7.5 5.5 7.5C6.29849 7.5 7.00955 7.87435 7.46725 8.45712L12.0845 6.1485C12.0294 5.94213 12 5.72525 12 5.50151ZM14.5015 4C13.6722 4 13 4.67225 13 5.50151C13 6.33077 13.6722 7.00302 14.5015 7.00302C15.3308 7.00302 16.003 6.33077 16.003 5.50151C16.003 4.67225 15.3308 4 14.5015 4ZM14.5 13C13.6716 13 13 13.6716 13 14.5C13 15.3284 13.6716 16 14.5 16C15.3284 16 16 15.3284 16 14.5C16 13.6716 15.3284 13 14.5 13ZM4 10C4 10.8284 4.67157 11.5 5.5 11.5C6.32843 11.5 7 10.8284 7 10C7 9.17157 6.32843 8.5 5.5 8.5C4.67157 8.5 4 9.17157 4 10Z"
      />
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
