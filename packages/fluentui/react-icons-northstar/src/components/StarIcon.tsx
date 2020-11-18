import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const StarIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M9.10433 2.89894C9.47114 2.15569 10.531 2.1557 10.8978 2.89894L12.8282 6.81044L17.1448 7.43768C17.9651 7.55686 18.2926 8.56484 17.699 9.14337L14.5755 12.188L15.3129 16.4872C15.453 17.3041 14.5956 17.9271 13.8619 17.5414L10.0011 15.5116L6.14018 17.5414C5.40655 17.9271 4.54913 17.3041 4.68924 16.4872L5.4266 12.188L2.30308 9.14337C1.70956 8.56483 2.03708 7.55686 2.8573 7.43768L7.17389 6.81044L9.10433 2.89894ZM10.0011 3.34151L8.07062 7.253C7.92496 7.54815 7.6434 7.75272 7.31769 7.80005L3.00109 8.42728L6.12461 11.472C6.3603 11.7017 6.46784 12.0327 6.41221 12.3571L5.67484 16.6562L9.53572 14.6265C9.82705 14.4733 10.1751 14.4733 10.4664 14.6265L14.3273 16.6562L13.5899 12.3571C13.5343 12.0327 13.6418 11.7017 13.8775 11.472L17.001 8.42728L12.6844 7.80005C12.3587 7.75272 12.0772 7.54815 11.9315 7.25301L10.0011 3.34151Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M9.10433 2.89894C9.47114 2.15569 10.531 2.1557 10.8978 2.89894L12.8282 6.81044L17.1448 7.43768C17.9651 7.55686 18.2926 8.56484 17.699 9.14337L14.5755 12.188L15.3129 16.4872C15.453 17.3041 14.5956 17.9271 13.8619 17.5414L10.0011 15.5116L6.14018 17.5414C5.40655 17.9271 4.54913 17.3041 4.68924 16.4872L5.4266 12.188L2.30308 9.14337C1.70956 8.56483 2.03708 7.55686 2.8573 7.43768L7.17389 6.81044L9.10433 2.89894Z"
      />
    </svg>
  ),
  displayName: 'StarIcon',
});
