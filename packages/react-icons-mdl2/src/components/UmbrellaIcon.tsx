import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const UmbrellaIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg} focusable="false">
      <path d="M960 128q183 0 351 66t303 192q137 128 211 285t91 344v3q0 1 1 4 0 12-4 23t-13 21-20 14-23 6q-6 0-14-1t-15-4q-8-4-14-8t-12-12q-41-48-89-74t-113-27q-61 0-115 27t-90 77q-9 12-15 24t-14 26q-9 17-24 27t-35 11h-54q-20 0-35-10t-24-28q-15-28-31-51t-37-41-45-32-57-22v696q0 52-20 98t-56 82-81 55-99 21q-52 0-98-20t-82-56-55-81-21-99v-40q0-22 4-42t18-33 42-13q28 0 41 13t19 32 5 42-1 41q0 26 10 49t28 40 41 28 49 11q25 0 48-10t41-28 28-41 11-49V968q-32 9-57 22t-45 31-36 42-32 51q-9 17-24 27t-35 11h-54q-20 0-35-10t-24-28q-7-13-13-25t-16-25q-36-49-90-76t-115-28q-66 0-113 26t-89 75q-11 12-22 18t-29 7q-26 0-45-19t-19-46v-4q11-125 50-240t104-213 150-179 189-138 220-88 244-31zm640 704q42 0 82 9t79 27q-37-135-114-247t-184-194-234-126-269-45q-140 0-269 45T456 427 273 620 159 868q38-18 78-27t83-9q97 0 181 45t139 127q54-81 138-126t182-46q97 0 181 45t139 127q54-81 138-126t182-46z" />
    </svg>
  ),
  displayName: 'UmbrellaIcon',
});

export default UmbrellaIcon;
