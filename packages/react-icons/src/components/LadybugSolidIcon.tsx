import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const LadybugSolidIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M1024 576q102 0 196 26t175 74 149 115 115 149 74 176 27 196q0 112-32 216t-92 193-144 159-188 112l-44-132q-55 29-114 44t-122 16q-62 0-121-15t-115-45l-44 132q-104-42-188-112t-143-159-92-193-33-216q0-102 26-196t74-175 115-149 149-115 176-74 196-27zm-384 960q27 0 50-10t40-27 28-41 10-50q0-27-10-50t-27-40-41-28-50-10q-27 0-50 10t-40 27-28 41-10 50q0 27 10 50t27 40 41 28 50 10zm128-384q27 0 50-10t40-27 28-41 10-50q0-27-10-50t-27-40-41-28-50-10q-27 0-50 10t-40 27-28 41-10 50q0 27 10 50t27 40 41 28 50 10zm256 640q52 0 101-14t94-41l-195-585-195 585q45 26 94 40t101 15zm128-768q0 27 10 50t27 40 41 28 50 10q27 0 50-10t40-27 28-41 10-50q0-27-10-50t-27-40-41-28-50-10q-27 0-50 10t-40 27-28 41-10 50zm256 512q27 0 50-10t40-27 28-41 10-50q0-27-10-50t-27-40-41-28-50-10q-27 0-50 10t-40 27-28 41-10 50q0 27 10 50t27 40 41 28 50 10zM704 448q0-72 30-135L595 173l90-90 126 126q45-39 99-60t114-21q60 0 114 21t99 60l126-126 90 90-139 140q30 63 30 135 0 13-1 25t-4 25q-75-32-154-49t-161-17q-81 0-160 17t-155 49q-2-12-3-24t-2-26z" />
    </svg>
  ),
  displayName: 'LadybugSolidIcon',
});

export default LadybugSolidIcon;
