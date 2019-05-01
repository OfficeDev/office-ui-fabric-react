import { registerIcons } from 'office-ui-fabric-react';
import { createSite } from './utilities/createSite';
import * as platformPickerStyles from '@uifabric/example-app-base/lib/components/PlatformPicker/PlatformPicker.module.scss';
import { SiteDefinition } from './SiteDefinition/index';
import { HomePage } from './pages/HomePage/HomePage';
import { AndroidLogo, AppleLogo, WebLogo } from './utilities/index';

// TODO: handle redirects

registerIcons({
  icons: {
    'AndroidLogo-platformPicker': AndroidLogo({
      className: platformPickerStyles.icon
    }),
    'AppleLogo-platformPicker': AppleLogo({
      className: platformPickerStyles.icon
    }),
    'WebLogo-platformPicker': WebLogo({
      className: platformPickerStyles.icon
    })
  }
});

createSite(SiteDefinition, HomePage);
