import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const ReportLibraryMirroredIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M608 128q45 0 77 9t58 24 46 31 40 31 44 23 55 10h992q27 0 50 10t40 27 28 41 10 50v384h-128V384H928q-31 0-54 9t-44 24-41 31-45 31-58 23-78 10H128v1152h128v128H0V256q0-27 10-50t27-40 41-28 50-10h480zm0 256q24 0 42-4t33-13 29-20 32-27q-17-15-31-26t-30-20-33-13-42-5H128v128h480zm1440 512v1152H384V896h1664zm-128 128H512v896h1408v-896zm-896 256H640v-128h384v128zm-256 128h256v128H768v-128zm0 256h256v128H768v-128zm1024 128h-640v-640h640v640zm-128-512h-384v384h384v-384z" />
    </svg>
  ),
  displayName: 'ReportLibraryMirroredIcon',
});

export default ReportLibraryMirroredIcon;
