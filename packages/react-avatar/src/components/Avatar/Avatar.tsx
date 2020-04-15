import { AvatarBase } from './Avatar.base';
import { compose, extractFromSass } from '../utils/compose';
import { Status } from '../Status/index';
import { Image } from '../Image/index';

import * as classes from './Avatar.scss';

export const Avatar = compose(AvatarBase, {
  ...extractFromSass(classes),
  slots: {
    status: Status,
    image: Image,
  },
  statics: {
    displayName: 'Avatar',
  },
});
