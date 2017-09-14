/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Screener, { Steps } from 'screener-storybook/src/screener';
import { storiesOf } from '@storybook/react';
import { DefaultButton } from 'office-ui-fabric-react';
// import withReadme from 'storybook-readme/with-readme';
// const readme = require('../components/Button/README');

storiesOf('Button', module)
  .addDecorator(story => (
    <Screener steps={new Steps()
      .hover('button')
      .snapshot('hover')
      .click('button')
      .snapshot('active')
      .end()
    }>
      {story()}
    </Screener>
  ))
  .add('default', () => (<DefaultButton>Butjon</DefaultButton>))
  .add('default disabled', () => (<DefaultButton disabled>Butjon</DefaultButton>))
  .add('primary', () => (<DefaultButton primary>Butjon</DefaultButton>))
  .add('primary disabled', () => (<DefaultButton primary disabled>Butjon</DefaultButton>))
