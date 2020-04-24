import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const NavigateBackMirroredIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M960 0Q827 0 705 34t-230 96-194 150-150 195-97 229T0 960q0 133 34 255t96 230 150 194 195 150 229 97 256 34q133 0 255-34t230-96 194-150 150-195 97-229 34-256q0-133-34-255t-96-230-150-194-195-150-229-97T960 0zm0 1792q-115 0-221-30t-198-84-169-130-130-168-84-199-30-221q0-115 30-221t84-198 130-169 168-130 199-84 221-30q115 0 221 30t198 84 169 130 130 168 84 199 30 221q0 115-30 221t-84 198-130 169-168 130-199 84-221 30zm233-896H512v128h681l-278 274 90 92 434-430-434-430-90 92 278 274z" />
    </svg>
  ),
  displayName: 'NavigateBackMirroredIcon',
});

export default NavigateBackMirroredIcon;
