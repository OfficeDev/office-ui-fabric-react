import * as React from 'react';
import * as Glamor from 'glamor';
import './utilities/glamorPlugins';

Glamor['speedy'](false);

import { examplesOf, createApp } from '@uifabric/example-app-base';
import { ColorPage } from './examples/ColorPage';
import { FontPage } from './examples/FontPage';
import { IconPage } from './examples/IconPage';
import { AnimationPage } from './examples/AnimationPage';

createApp([
  examplesOf('Styling')
    .add('Colors', () => (
      <ColorPage />
    ))
    .add('Typography', () => (
      <FontPage />
    ))
    .add('Icons', () => (
      <IconPage />
    ))
    .add('Animations', () => (
      <AnimationPage />
    ))
], false);
