import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const DonutChartIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M1024 128q123 0 237 32t214 90 182 141 140 181 91 214 32 238q0 123-32 237t-90 214-141 182-181 140-214 91-238 32q-123 0-237-32t-214-90-182-141-140-181-91-214-32-238q0-123 32-237t90-214 141-182 181-140 214-91 238-32zm128 402q84 22 154 69t122 112 79 146 29 167h256q0-140-48-267t-133-228-203-169-256-93v263zm256 494q0-79-30-149t-82-122-123-83-149-30q-80 0-149 30t-122 82-83 123-30 149q0 80 30 149t82 122 122 83 150 30q79 0 149-30t122-82 83-122 30-150zm-384 768q140 0 267-48t228-133 169-203 93-256h-263q-22 84-69 154t-112 122-146 79-167 29q-106 0-199-40t-162-110-110-163-41-199q0-106 40-199t110-162 163-110 199-41V256q-106 0-204 27t-183 78-156 120-120 155-77 184-28 204q0 106 27 204t78 183 120 156 155 120 184 77 204 28z" />
    </svg>
  ),
  displayName: 'DonutChartIcon',
});

export default DonutChartIcon;
