import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const CurrencyIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M512 920q64 32 132 71t124 89 92 115 36 149q0 83-29 158t-80 135-121 99-154 51v133H384v-132q-109-13-204-69T15 1577l98-82q52 63 121 106t150 58v-659q-43-21-88-45t-88-53-80-62-66-74-45-87T0 576q0-83 29-158t80-135 121-99 154-51V0h128v132q109 13 204 69t165 142l-98 82q-52-63-121-106t-150-58v659zM128 576q0 51 25 93t62 78 83 63 86 46V262q-56 12-103 41t-81 70-53 94-19 109zm384 1082q56-12 103-41t81-70 53-94 19-109q0-51-25-94t-62-78-83-62-86-46v594zm1521-17q-57 69-135 110t-170 41q-83 0-153-28t-128-75-105-111-82-134-58-146-35-146h-143v-128h130q-1-16-1-32t-1-32v-32q0-16 2-32h-130V768h143q12-71 35-146t58-146 81-134 105-110 129-76 153-28q92 0 169 41t136 110l-98 82q-38-47-91-76t-116-29q-63 0-116 23t-99 63-80 91-63 108-45 115-28 112h239v128h-254q-1 16-1 32t-1 32v32q0 16 2 32h254v128h-239q10 53 28 111t45 115 62 109 81 91 98 62 117 24q62 0 115-29t92-76l98 82z" />
    </svg>
  ),
  displayName: 'CurrencyIcon',
});

export default CurrencyIcon;
