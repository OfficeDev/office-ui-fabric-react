import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const PeopleAddIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg} focusable="false">
      <path d="M1280 896q-80 0-149 30t-122 82-83 123-30 149q0 92-41 173t-115 136q65 33 117 81t90 108 57 128 20 142H896q0-79-30-149t-82-122-123-83-149-30q-80 0-149 30t-122 82-83 123-30 149H0q0-73 20-141t57-128 89-108 118-82q-74-55-115-136t-41-173q0-79 30-149t82-122 122-83 150-30q92 0 173 41t136 115q38-75 97-134t134-97q-74-55-115-136t-41-173q0-79 30-149t82-122 122-83 150-30q79 0 149 30t122 82 83 123 30 149q0 92-41 173t-115 136q65 33 117 81t90 108 57 128 20 142h-128q0-79-30-149t-82-122-123-83-149-30zm-256-384q0 53 20 99t55 82 81 55 100 20q53 0 99-20t82-55 55-81 20-100q0-53-20-99t-55-82-81-55-100-20q-53 0-99 20t-82 55-55 81-20 100zM512 1536q53 0 99-20t82-55 55-81 20-100q0-53-20-99t-55-82-81-55-100-20q-53 0-99 20t-82 55-55 81-20 100q0 53 20 99t55 82 81 55 100 20zm1536 256h-256v256h-128v-256h-256v-128h256v-256h128v256h256v128z" />
    </svg>
  ),
  displayName: 'PeopleAddIcon',
});

export default PeopleAddIcon;
