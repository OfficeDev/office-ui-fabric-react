/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Screener, { Steps } from 'screener-storybook/src/screener';
import { storiesOf } from '@storybook/react';
import { FabricDecoratorTallFixedWdith } from '../utilities';
import { ComboBox, SelectableOptionMenuItemType } from 'office-ui-fabric-react';

const testOptions = [
  { key: 'Header', text: 'Theme Fonts', itemType: SelectableOptionMenuItemType.Header },
  { key: 'A', text: 'Arial Black' },
  { key: 'B', text: 'Times New Roman' },
  { key: 'divider_2', text: '-', itemType: SelectableOptionMenuItemType.Divider },
  { key: 'Header1', text: 'Other Options', itemType: SelectableOptionMenuItemType.Header },
  { key: 'D', text: 'Option d' }
];

const fontMapping = {
  ['Arial Black']: '"Arial Black", "Arial Black_MSFontService", sans-serif',
  ['Time New Roman']: '"Times New Roman", "Times New Roman_MSFontService", serif'
};

const onRenderFontOption = item => {
  let fontFamily = this._fontMapping[item.text];

  if (!fontFamily) {
    // This is a new user-entered font. Add a font family definition for it.
    const newFontName = item.text;
    fontFamily = this._fontMapping[newFontName] = `"${newFontName}","Segoe UI",Tahoma,Sans-Serif`;
  }

  return <span style={{ fontFamily: fontFamily }}>{item.text}</span>;
};

storiesOf('ComboBox', module)
  .addDecorator(FabricDecoratorTallFixedWdith)
  .addDecorator(story => (
    <Screener
      steps={new Screener.Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .hover('.ms-ComboBox-Input')
        .snapshot('hover', { cropTo: '.testWrapper' })
        .click('.ms-Button-flexContainer')
        .hover('.ms-Button-flexContainer')
        .snapshot('click', { cropTo: '.ms-Layer' }) // Dropdown extends beyond testWrapper
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory('Root', () => <ComboBox defaultSelectedKey="A" label="Default with dividers" autoComplete="on" options={testOptions} />, {
    rtl: true
  })
  .addStory('Styled', () => (
    <ComboBox
      defaultSelectedKey="A"
      label="Styled with dividers"
      autoComplete="on"
      options={testOptions}
      onRenderOption={onRenderFontOption}
    />
  ))
  .addStory('Disabled', () => <ComboBox defaultSelectedKey="A" label="Disabled" options={testOptions} disabled />)
  .addStory('Placeholder', () => <ComboBox placeholder="Select an option" label="With a placeholder" options={testOptions} />);
