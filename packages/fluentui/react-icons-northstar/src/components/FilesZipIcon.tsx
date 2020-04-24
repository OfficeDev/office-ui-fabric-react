import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const FilesZipIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <circle cx="16.5" cy="20.985" r=".499" />
      <circle cx="16.5" cy="18.99" r=".499" />
      <circle cx="16.5" cy="16.996" r=".499" />
      <path d="M17.977 13.759l-.727-3.635a.699.699 0 0 0-.26-.438.755.755 0 0 0-.482-.17.756.756 0 0 0-.483.17.699.699 0 0 0-.26.438l-.742 3.635a1.078 1.078 0 0 0-.023.245 1.488 1.488 0 0 0 .44 1.058c.136.137.294.244.474.321.18.078.375.117.586.117s.406-.039.586-.117a1.518 1.518 0 0 0 .797-.8 1.456 1.456 0 0 0 .094-.824zm-.94.771c-.15.148-.327.222-.531.222s-.382-.074-.532-.222a.714.714 0 0 1-.224-.526.71.71 0 0 1 .224-.532c.15-.144.327-.216.532-.216s.381.072.531.216a.71.71 0 0 1 .225.532.713.713 0 0 1-.225.526z" />
      <path d="M21.456 8h-9.911C10.693 8 10 8.693 10 9.544v12.911c0 .852.693 1.545 1.544 1.545h9.911c.852 0 1.545-.693 1.545-1.544V9.544C23 8.693 22.307 8 21.456 8zM22 22.456c0 .3-.244.544-.544.544h-9.911a.545.545 0 0 1-.545-.544V9.544c0-.3.244-.544.544-.544h9.911c.3 0 .545.244.545.544v12.912z" />
    </svg>
  ),
  displayName: 'FilesZipIcon',
});

export default FilesZipIcon;
