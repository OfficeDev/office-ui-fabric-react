// @ts-check

// Config file for API doc JSON (*.page.json) generation

const path = require('path');
const apiDocs = require('../lib/index');

/** @type {apiDocs.IPageJsonOptions} */
module.exports = {
  apiJsonPaths: [
    // NOTE: when adding new package to this list, also add package dep in package.json.
    path.resolve(__dirname, '../../styling/dist/styling.api.json'),
    path.resolve(__dirname, '../../theme/dist/theme.api.json'),
    path.resolve(__dirname, '../../utilities/dist/utilities.api.json'),
    path.resolve(__dirname, '../../merge-styles/dist/merge-styles.api.json'),
    path.resolve(__dirname, '../../react-focus/dist/react-focus.api.json'),
    path.resolve(__dirname, '../../office-ui-fabric-react/dist/office-ui-fabric-react.api.json'),
    path.resolve(__dirname, '../../date-time-utilities/dist/date-time-utilities.api.json'),
    // NOTE: when adding new package to this list, also add package dep in package.json.
  ],
  outputRoot: path.resolve(__dirname, '../lib/pages'),
  fallbackGroup: 'references',
  pageGroups: {
    'office-ui-fabric-react': [
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
  },
};
