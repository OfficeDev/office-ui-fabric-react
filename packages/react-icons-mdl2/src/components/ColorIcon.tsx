import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const ColorIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg} focusable="false">
      <path d="M1024 0q141 0 272 36t245 103 207 160 160 208 103 245 37 272q0 141-36 272t-103 245-160 207-208 160-245 103-272 37q-53 0-99-20t-81-55-55-81-21-100q0-49 9-85t24-67 31-56 31-52 23-56 10-68q0-52-20-99t-55-81-82-55-99-21q-38 0-67 9t-56 24-53 31-56 31-67 23-85 10q-53 0-99-20t-81-55-55-81-21-100q0-141 36-272t103-245 160-207 208-160T751 37t273-37zm0 1920q123 0 237-32t214-90 182-141 140-181 91-214 32-238q0-123-32-237t-90-214-141-182-181-140-214-91-238-32q-123 0-237 32t-214 90-182 141-140 181-91 214-32 238q0 27 10 50t27 40 41 28 50 10q38 0 67-9t56-24 52-31 55-31 67-23 87-10q80 0 150 30t122 82 82 122 30 150q0 49-9 86t-24 67-31 55-31 52-23 56-10 68q0 27 10 50t27 40 41 28 50 10zM512 640q27 0 50 10t40 27 28 41 10 50q0 27-10 50t-27 40-41 28-50 10q-27 0-50-10t-40-27-28-41-10-50q0-27 10-50t27-40 41-28 50-10zm384-256q27 0 50 10t40 27 28 41 10 50q0 27-10 50t-27 40-41 28-50 10q-27 0-50-10t-40-27-28-41-10-50q0-27 10-50t27-40 41-28 50-10zm512 384q-27 0-50-10t-40-27-28-41-10-50q0-27 10-50t27-40 41-28 50-10q27 0 50 10t40 27 28 41 10 50q0 27-10 50t-27 40-41 28-50 10zm128 256q27 0 50 10t40 27 28 41 10 50q0 27-10 50t-27 40-41 28-50 10q-27 0-50-10t-40-27-28-41-10-50q0-27 10-50t27-40 41-28 50-10zm-256 384q27 0 50 10t40 27 28 41 10 50q0 27-10 50t-27 40-41 28-50 10q-27 0-50-10t-40-27-28-41-10-50q0-27 10-50t27-40 41-28 50-10z" />
    </svg>
  ),
  displayName: 'ColorIcon',
});

export default ColorIcon;
