import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const FangBodyIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M1709 1668q46 8 84 31t67 56 44 76 16 89v128H384q-80 0-150-30t-122-82-82-122-30-150q0-79 30-149t82-122 122-83 150-30v128q-53 0-99 20t-82 55-55 81-20 100q0 53 20 99t55 82 81 55 100 20q25 0 49-9t42-28q18-18 27-42t10-49q0-196 73-377 35-88 85-163t116-144q117-123 177-274t61-322V384q0-53 20-99t55-82 81-55 100-20h192q62 0 110 21t94 61q26 23 53 34t63 12q27 0 50 10t40 27 28 41 10 50v128q0 40-15 75t-41 61-61 41-75 15h-64v704q0 66 11 131t34 129zm83 252q0-26-10-49t-27-41-41-28-50-10h-43q-20-49-35-95t-27-92-17-95-6-102V704q0-27 10-50t27-40 41-28 50-10h40q22 0 42-4t33-18 13-42V384q-45 0-78-9t-58-24-45-31-41-31-44-23-54-10h-192q-26 0-49 10t-41 27-28 41-10 50v192q0 26 19 45t45 19q28 0 41-13t19-32 5-42-1-41h128v64q0 40-15 75t-41 61-61 41-75 15q-48 0-91-23-32 131-93 242t-154 209q-117 123-177 274t-61 322q0 68-34 128h802q0-27-10-50t-27-40-41-28-50-10h-128q0-53-20-99t-55-82-81-55-100-20v-128q62 0 118 18t104 52 83 81 57 105h22v-512h128v546q60 35 94 94t34 128h256z" />
    </svg>
  ),
  displayName: 'FangBodyIcon',
});

export default FangBodyIcon;
