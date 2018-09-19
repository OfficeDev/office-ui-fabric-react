/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { FabricDecorator, TestWrapperDecorator, runStories } from '../utilities';
import { ActivityItem, IActivityItemProps, Icon } from 'office-ui-fabric-react';

(storiesOf('ActivityItem_test', module) as any)
  .addDecorator(FabricDecorator)
  .addDecorator(TestWrapperDecorator)
  .addStory('Root', () => (
    <ActivityItem
      activityIcon={<Icon iconName={'Message'} />}
      activityDescription={<span>description text</span>}
      comments={<span>comment text</span>}
      timeStamp={'timeStamp text'}
    />
  ))
  .addStory('Personas', () => (
    <ActivityItem
      activityPersonas={[
        { imageInitials: 'AB' },
        { imageInitials: 'CD' },
        { imageInitials: 'EF' },
        { imageInitials: 'GH' }
      ]}
      activityDescription={<span>description text</span>}
      comments={<span>comment text</span>}
      timeStamp={'timeStamp text'}
    />
  ))
  .addStory('Compact', () => (
    <ActivityItem
      activityIcon={<Icon iconName={'Message'} />}
      isCompact={true}
      activityDescription={<span>description text</span>}
      comments={<span>comment text</span>}
      timeStamp={'timeStamp text'}
    />
  ))
  .addStory('CompactPersonas', () => (
    <ActivityItem
      activityPersonas={[
        { imageInitials: 'AB' },
        { imageInitials: 'CD' },
        { imageInitials: 'EF' }
      ]}
      isCompact={true}
      activityDescription={<span>description text</span>}
      comments={<span>comment text</span>}
      timeStamp={'timeStamp text'}
    />
  ));