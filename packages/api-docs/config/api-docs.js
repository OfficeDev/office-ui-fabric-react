// @ts-check

// Config file for API doc JSON (*.page.json) generation

const path = require('path');
const apiDocs = require('../lib/index');

/** @type {apiDocs.IPageJsonOptions} */
module.exports = {
  // NOTE: when adding new package to this list, also add package dep in package.json.
  apiJsonPaths: [
    path.resolve(__dirname, '../../styling/dist/styling.api.json'),
    path.resolve(__dirname, '../../theme/dist/theme.api.json'),
    path.resolve(__dirname, '../../utilities/dist/utilities.api.json'),
    path.resolve(__dirname, '../../merge-styles/dist/merge-styles.api.json'),
    path.resolve(__dirname, '../../react-button/dist/react-button.api.json'),
    path.resolve(__dirname, '../../react-cards/dist/react-cards.api.json'),
    path.resolve(__dirname, '../../react-checkbox/dist/react-checkbox.api.json'),
    path.resolve(__dirname, '../../react-focus/dist/react-focus.api.json'),
    path.resolve(__dirname, '../../react-internal/dist/react-internal.api.json'),
    path.resolve(__dirname, '../../react-link/dist/react-link.api.json'),
    path.resolve(__dirname, '../../react-slider/dist/react-slider.api.json'),
    path.resolve(__dirname, '../../react-tabs/dist/react-tabs.api.json'),
    path.resolve(__dirname, '../../react-theme-provider/dist/react-theme-provider.api.json'),
    path.resolve(__dirname, '../../react-toggle/dist/react-toggle.api.json'),
    path.resolve(__dirname, '../../react/dist/react.api.json'),
    path.resolve(__dirname, '../../date-time-utilities/dist/date-time-utilities.api.json'),
  ],
  outputRoot: path.resolve(__dirname, '../lib/pages'),
  fallbackGroup: 'references',
  pageGroups: {
    react: [
      'ActivityItem',
      'Announced',
      'Breadcrumb',
      'Button',
      'Calendar',
      'Callout',
      'Checkbox',
      'ChoiceGroup',
      'Coachmark',
      'ColorPicker',
      'ComboBox',
      'CommandBar',
      'ContextualMenu',
      'DatePicker',
      'DetailsList',
      'Dialog',
      'Divider',
      'DocumentCard',
      'Dropdown',
      'ExtendedPeoplePicker',
      'ExtendedPicker',
      'Facepile',
      'FloatingPeoplePicker',
      'FloatingPicker',
      'FocusTrapZone',
      'FocusZone',
      'GroupedList',
      'HoverCard',
      'Icon',
      'Image',
      'Keytips',
      'Label',
      'Layer',
      'Link',
      'List',
      'MarqueeSelection',
      'MessageBar',
      'Modal',
      'Nav',
      'OverflowSet',
      'Overlay',
      'Panel',
      'PeoplePicker',
      'Persona',
      'Pickers',
      'Pivot',
      'Popup',
      'ProgressIndicator',
      'Rating',
      'ResizeGroup',
      'SelectedPeopleList',
      'Separator',
      'ScrollablePane',
      'SearchBox',
      'SelectableOption',
      'SelectedItemsList',
      'Shimmer',
      'Slider',
      'SpinButton',
      'Spinner',
      'Stack',
      'SwatchColorPicker',
      'TeachingBubble',
      'Text',
      'TextField',
      'Toggle',
      'Tooltip',
    ],
    'react-cards': ['Card'],
  },
};
