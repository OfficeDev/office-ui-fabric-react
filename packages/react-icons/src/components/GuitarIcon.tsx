import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const GuitarIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M2048 320q0 26-19 45l-288 288q-19 19-45 19-29 0-48-22l-502 502h70q26 0 45 19t19 45v128q0 40-15 75t-41 61-61 41-75 15q-26 0-45 19t-19 45q0 93-35 174t-96 143-142 96-175 35q-119 0-224-45t-183-124-123-183-46-224q0-93 35-174t96-143 142-96 175-35q26 0 45-19t19-45q0-53 20-99t55-82 81-55 100-20q66 0 120 30t92 84l418-418q-22-19-22-48 0-26 19-45l288-288q19-19 45-19t45 19l256 256q19 19 19 45zm-896 960H992q-26 0-45-19l-160-160q-19-19-19-45t19-45l99-99q-14-36-46-58t-72-22q-27 0-50 10t-40 27-28 41-10 50q0 40-15 75t-41 61-61 41-75 15q-66 0-124 25t-102 69-69 102-25 124q0 93 35 174t96 142 142 96 175 36q66 0 124-25t101-68 69-102 26-125q0-40 15-75t41-61 61-41 75-15q26 0 45-19t19-45v-64zm-160-154l566-566-70-70-566 566 70 70zm704-608l198-198-166-166-198 198 166 166zM355 1469l90-90 224 224-90 90-224-224zm192-192l90-90 224 224-90 90-224-224z" />
    </svg>
  ),
  displayName: 'GuitarIcon',
});

export default GuitarIcon;
