import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const SigninIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M1728 1152q26 0 45 19t19 45q0 26-19 45t-45 19q-26 0-45-19t-19-45q0-26 19-45t45-19zm-603-19q-79-54-170-81t-187-28q-88 0-170 23t-153 64-129 100-100 130-65 153-23 170H0q0-117 35-229t101-207 157-169 203-113q-56-36-100-83t-76-103-47-118-17-130q0-106 40-199t109-163T568 40 768 0q106 0 199 40t163 109 110 163 40 200q0 67-16 129t-48 119-75 103-101 83q81 29 156 80l-71 107zM384 512q0 80 30 149t82 122 122 83 150 30q79 0 149-30t122-82 83-122 30-150q0-79-30-149t-82-122-123-83-149-30q-80 0-149 30t-122 82-83 123-30 149zm1280 384q79 0 149 30t122 82 83 123 30 149q0 80-30 149t-82 122-123 83-149 30q-65 0-128-23v151h-128v128h-128v128H896v-282l395-396q-11-46-11-90 0-79 30-149t82-122 122-83 150-30zm0 640q53 0 99-20t82-55 55-81 20-100q0-53-20-99t-55-82-81-55-100-20q-53 0-99 20t-82 55-55 81-20 100q0 35 9 64t21 61l-414 413v102h128v-128h128v-128h128v-91l93-92q40 23 77 39t86 16z" />
    </svg>
  ),
  displayName: 'SigninIcon',
});

export default SigninIcon;
