import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const ContactLinkIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg} focusable="false">
      <path d="M1792 640h-640V512h640v128zm-640 128h512v128h-512V768zm636 646q56 11 104 39t82 71 54 94 20 110q0 66-25 124t-69 102-102 69-124 25h-256q-66 0-124-25t-102-68-69-102-25-125q0-57 19-109t53-93 81-71 103-41v133q-29 10-52 28t-41 42-26 52-9 59q0 40 15 75t41 61 61 41 75 15h256q40 0 75-15t61-41 41-61 15-75q0-31-9-60t-28-53-42-42-55-28q6-36 6-73 0-14-1-29t-3-29zm-700-134q-40 0-75 15t-61 41-41 61-15 75q0 32 9 60t28 53 42 42 55 28q-6 36-6 73 0 14 1 29t3 29q-56-10-104-39t-82-71-54-94-20-110q0-66 25-124t68-101 102-69 125-26h256q66 0 124 25t101 69 69 102 26 124q0 54-20 105t-56 94-81 72-99 43v-133q43-9 68-23t38-37 18-52 4-69q0-40-15-75t-41-61-61-41-75-15h-256zM2048 0v1371q-57-51-128-81V128H128v1280h487q-2 16-4 31t-3 33q0 16 2 32t4 32H0V0h2048zM256 1152q0-52 14-101t40-93 63-80 83-61q-34-35-53-81t-19-96q0-53 20-99t55-82 81-55 100-20q53 0 99 20t82 55 55 81 20 100q0 50-19 96t-53 81q63 35 109 90t71 124q-64 10-124 36-14-38-38-69t-55-54-69-35-78-13q-53 0-99 20t-82 55-55 81-20 100H256zm384-640q-27 0-50 10t-40 27-28 41-10 50q0 27 10 50t27 40 41 28 50 10q27 0 50-10t40-27 28-41 10-50q0-27-10-50t-27-40-41-28-50-10z" />
    </svg>
  ),
  displayName: 'ContactLinkIcon',
});

export default ContactLinkIcon;
