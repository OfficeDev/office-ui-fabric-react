/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Screener, { Steps } from 'screener-storybook/src/screener';
import { storiesOf } from '@storybook/react';
import { FabricDecorator } from '../utilities';
import { SearchBox, Fabric } from 'office-ui-fabric-react';

/**
 * FabricDecorator isn't added at the top level so that the full SearchBox can be rendered without a parent div
 */

// tslint:disable:jsx-ban-props
storiesOf('SearchBox', module)
  .addDecorator(story => (
    <Screener
      steps={new Screener.Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .click('.ms-SearchBox-field')
        .hover('.ms-SearchBox-field')
        .snapshot('default', { cropTo: '.testWrapper' })
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory(
    'Root',
    () => (
      <div className="testWrapper" style={{ padding: '10px', overflow: 'hidden', width: '300px' }}>
        <SearchBox placeholder="Search" />
      </div>
    ),
    { rtl: true }
  )
  .addStory('Full', () => <SearchBox placeholder="Search" />, { rtl: true });
