import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const PartlyCloudyNightIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg} focusable="false">
      <path d="M1761 1036q63 18 116 53t91 84 59 109 21 126q0 79-30 149t-83 122-122 82-149 31H576q-93 0-174-35t-143-96-96-142-35-175q0-78 25-149t74-132q-81-54-136-134T14 754q58 14 114 14 106 0 199-40t163-109 110-163 40-200q0-56-14-114 87 20 160 67t126 113 82 147 30 171q0 8-1 17t-2 17l4-1q48-15 94-24t97-9q93 0 179 28t157 81 126 126 83 161zM761 348q-15 105-62 197T581 708 417 827t-197 62q43 52 104 84 57-38 120-57t132-20q38 0 75 6t72 19q29-52 69-93t87-79q17-54 17-109 0-85-35-161T761 348zm903 1316q53 0 99-20t82-55 55-81 20-100q0-55-20-102t-57-81-84-54-102-19q-12-82-51-152t-98-122-134-81-158-29q-77 0-146 24t-127 69-98 106-61 136q-44-38-97-58t-111-21q-66 0-124 25t-102 68-69 102-25 125q0 66 25 124t68 102 102 69 125 25h1088z" />
    </svg>
  ),
  displayName: 'PartlyCloudyNightIcon',
});

export default PartlyCloudyNightIcon;
