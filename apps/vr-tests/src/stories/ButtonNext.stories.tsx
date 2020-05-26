/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Screener, { Steps } from 'screener-storybook/src/screener';
import { storiesOf } from '@storybook/react';
import { Button } from '@fluentui/react-button';

storiesOf('Button', module)
  .addDecorator(story => (
    <Screener
      steps={new Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .hover('button')
        .snapshot('hover', { cropTo: '.testWrapper' })
        .mouseDown('button')
        .snapshot('pressed', { cropTo: '.testWrapper' })
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory('Default', () => <Button content="Hello, world" />)
  .addStory('Primary', () => <Button primary content="Hello, world" />)
  .addStory('Disabled', () => <Button disabled content="Hello, world" />)
  .addStory('Primary Disabled', () => <Button primary disabled content="Hello, world" />);

storiesOf('Button - With icon before content', module)
  .addDecorator(story => (
    <Screener
      steps={new Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .hover('button')
        .snapshot('hover', { cropTo: '.testWrapper' })
        .mouseDown('button')
        .snapshot('pressed', { cropTo: '.testWrapper' })
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory('Default', () => <Button content="Hello, world" icon="X" />)
  .addStory('Primary', () => <Button primary content="Hello, world" icon="X" />)
  .addStory('Disabled', () => <Button disabled content="Hello, world" icon="X" />)
  .addStory('Primary Disabled', () => <Button primary disabled content="Hello, world" icon="X" />);

storiesOf('Button - With icon after content', module)
  .addDecorator(story => (
    <Screener
      steps={new Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .hover('button')
        .snapshot('hover', { cropTo: '.testWrapper' })
        .mouseDown('button')
        .snapshot('pressed', { cropTo: '.testWrapper' })
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory('Default', () => <Button content="Hello, world" icon="X" iconPosition="after" />)
  .addStory('Primary', () => (
    <Button primary content="Hello, world" icon="X" iconPosition="after" />
  ))
  .addStory('Disabled', () => (
    <Button disabled content="Hello, world" icon="X" iconPosition="after" />
  ))
  .addStory('Primary Disabled', () => (
    <Button primary disabled content="Hello, world" icon="X" iconPosition="after" />
  ));

storiesOf('Button - Circular', module)
  .addDecorator(story => (
    <Screener
      steps={new Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .hover('button')
        .snapshot('hover', { cropTo: '.testWrapper' })
        .mouseDown('button')
        .snapshot('pressed', { cropTo: '.testWrapper' })
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory('Default', () => <Button circular content="Hello, world" icon="X" />)
  .addStory('Primary', () => <Button circular primary content="Hello, world" icon="X" />)
  .addStory('Disabled', () => <Button circular disabled content="Hello, world" icon="X" />)
  .addStory('Primary Disabled', () => (
    <Button circular primary disabled content="Hello, world" icon="X" />
  ));

storiesOf('Button - Icon only', module)
  .addDecorator(story => (
    <Screener
      steps={new Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .hover('button')
        .snapshot('hover', { cropTo: '.testWrapper' })
        .mouseDown('button')
        .snapshot('pressed', { cropTo: '.testWrapper' })
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory('Default', () => <Button iconOnly content="Hello, world" icon="X" />)
  .addStory('Primary', () => <Button iconOnly primary content="Hello, world" icon="X" />)
  .addStory('Disabled', () => <Button iconOnly disabled content="Hello, world" icon="X" />)
  .addStory('Primary Disabled', () => (
    <Button iconOnly primary disabled content="Hello, world" icon="X" />
  ));

storiesOf('Button - Fluid', module)
  .addDecorator(story => (
    <Screener
      steps={new Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .hover('button')
        .snapshot('hover', { cropTo: '.testWrapper' })
        .mouseDown('button')
        .snapshot('pressed', { cropTo: '.testWrapper' })
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory('Default', () => <Button fluid content="Hello, world" icon="X" />)
  .addStory('Primary', () => <Button fluid primary content="Hello, world" icon="X" />)
  .addStory('Disabled', () => <Button fluid disabled content="Hello, world" icon="X" />)
  .addStory('Primary Disabled', () => (
    <Button fluid primary disabled content="Hello, world" icon="X" />
  ));

storiesOf('Button - Inverted', module)
  .addDecorator(story => (
    <Screener
      steps={new Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .hover('button')
        .snapshot('hover', { cropTo: '.testWrapper' })
        .mouseDown('button')
        .snapshot('pressed', { cropTo: '.testWrapper' })
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory('Default', () => <Button inverted content="Hello, world" icon="X" />)
  .addStory('Primary', () => <Button inverted primary content="Hello, world" icon="X" />)
  .addStory('Disabled', () => <Button inverted disabled content="Hello, world" icon="X" />)
  .addStory('Primary Disabled', () => (
    <Button inverted primary disabled content="Hello, world" icon="X" />
  ));

storiesOf('Button - Loading', module)
  .addDecorator(story => (
    <Screener
      steps={new Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .hover('button')
        .snapshot('hover', { cropTo: '.testWrapper' })
        .mouseDown('button')
        .snapshot('pressed', { cropTo: '.testWrapper' })
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory('Default', () => <Button loading content="Hello, world" icon="X" />)
  .addStory('Primary', () => <Button loading primary content="Hello, world" icon="X" />)
  .addStory('Disabled', () => <Button loading disabled content="Hello, world" icon="X" />)
  .addStory('Primary Disabled', () => (
    <Button loading primary disabled content="Hello, world" icon="X" />
  ));

storiesOf('Button - Sizes', module)
  .addDecorator(story => (
    <Screener
      steps={new Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .hover('button')
        .snapshot('hover', { cropTo: '.testWrapper' })
        .mouseDown('button')
        .snapshot('pressed', { cropTo: '.testWrapper' })
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory('Default', () => <Button content="Hello, world" icon="X" size="smallest" />)
  .addStory('Default', () => <Button content="Hello, world" icon="X" size="smaller" />)
  .addStory('Default', () => <Button content="Hello, world" icon="X" size="small" />)
  .addStory('Default', () => <Button content="Hello, world" icon="X" size="large" />)
  .addStory('Default', () => <Button content="Hello, world" icon="X" size="larger" />)
  .addStory('Default', () => <Button content="Hello, world" icon="X" size="largest" />);
