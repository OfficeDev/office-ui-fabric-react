/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Screener, { Steps } from 'screener-storybook/src/screener';
import { storiesOf } from '@storybook/react';
import { FabricDecorator } from '../utilities';
import { ChoiceGroup } from 'office-ui-fabric-react';
import { TestImages } from '../common/TestImages';

const options = [
  {
    key: 'A',
    text: 'Selected'
  },
  {
    key: 'B',
    text: 'Unselected',
  },
  {
    key: 'C',
    text: 'Disabled',
    disabled: true
  }
];

storiesOf('ChoiceGroup', module)
  .addDecorator(FabricDecorator)
  .addDecorator(story => (
    <Screener
      steps={ new Screener.Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .hover('div.ms-ChoiceField:nth-of-type(1)')
        .snapshot('hover unselected', { cropTo: '.testWrapper' })
        .click('div.ms-ChoiceField:nth-of-type(1)')
        .snapshot('selected', { cropTo: '.testWrapper' })
        .click('div.ms-ChoiceField:nth-of-type(1)')
        .hover('div.ms-ChoiceField:nth-of-type(1)')
        .snapshot('hover selected', { cropTo: '.testWrapper' })
        .end()
      }
    >
      { story() }
    </Screener>
  ))
  .addStory('Root', () => (
    <ChoiceGroup
      options={ options }
      label='Pick one'
    />
  ))
  .addStory('Required', () => (
    <ChoiceGroup
      options={ options }
      label='Pick one'
      required
    />
  ))
  .addStory('With icons', () => (
    <ChoiceGroup
      label='Pick one icon'
      options={ [
        {
          key: 'day',
          iconProps: { iconName: 'CalendarDay' },
          text: 'Day'
        },
        {
          key: 'week',
          iconProps: { iconName: 'CalendarWeek' },
          text: 'Week'
        },
        {
          key: 'month',
          iconProps: { iconName: 'Calendar' },
          text: 'Month',
          disabled: true
        }
      ] }
    />
  ), { rtl: true })
  .addStory('With default size images', () => (
    <ChoiceGroup
      label='Pick one image'
      options={ [
        {
          key: 'bar',
          imageSrc: TestImages.choiceGroupBarUnselected,
          selectedImageSrc: TestImages.choiceGroupBarSelected,
          text: 'Clustered bar chart'
        },
        {
          key: 'pie',
          imageSrc: TestImages.choiceGroupBarUnselected,
          selectedImageSrc: TestImages.choiceGroupBarSelected,
          text: 'Pie chart'
        }
      ] }
    />
  ))
  .addStory('With large size images', () => (
    <ChoiceGroup
      label='Pick one image'
      options={ [
        {
          key: 'bar2',
          imageSrc: TestImages.choiceGroupBarUnselected,
          selectedImageSrc: TestImages.choiceGroupBarSelected,
          imageSize: { width: 120, height: 120 },
          text: 'Clustered bar chart'
        },
        {
          key: 'pie2',
          imageSrc: TestImages.choiceGroupBarUnselected,
          selectedImageSrc: TestImages.choiceGroupBarSelected,
          imageSize: { width: 120, height: 120 },
          text: 'Pie chart'
        }
      ] }
    />
  ));