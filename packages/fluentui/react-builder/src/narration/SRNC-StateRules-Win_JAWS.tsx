import { SRNC } from './SRNC-Definitions';

SRNC.stateRules['Win/JAWS'] = {
  button: [
    {
      elementType: 'button',
    },
    {
      combination: ['aria-expanded'],
      elementType: 'button',
    },
    {
      combination: ['aria-haspopup'],
      elementType: 'button',
    },
    {
      combination: ['aria-pressed'],
      elementType: 'toggleButton',
    },
    {
      combination: ['aria-expanded', 'aria-haspopup'],
      order: ['aria-haspopup'],
      elementType: 'button',
    },
    {
      combination: ['aria-expanded', 'aria-pressed'],
      order: ['aria-pressed'],
      elementType: 'toggleButton',
    },
    {
      combination: ['aria-haspopup', 'aria-pressed'],
      order: ['aria-pressed', 'aria-haspopup'],
      elementType: 'toggleButton',
    },
    {
      combination: ['aria-expanded', 'aria-haspopup', 'aria-pressed'],
      order: ['aria-pressed', 'aria-haspopup'],
      elementType: 'toggleButton',
    },
  ], // End button
  'role=button': 'button',
  'input:text': [
    {
      elementType: 'textInput',
    },
    {
      combination: ['aria-invalid'],
      elementType: 'textInput',
    },
    {
      combination: ['aria-required'],
      elementType: 'textInput',
    },
    {
      combination: ['aria-invalid', 'aria-required'],
      order: ['aria-required', 'aria-invalid'],
      elementType: 'textInput',
    },
  ], // End input:text
  'role=textbox': 'input:text',
  'input:search': 'input:text',
  'role=searchbox': [
    {
      elementType: 'searchInput',
    },
    {
      combination: ['aria-invalid'],
      elementType: 'searchInput',
    },
    {
      combination: ['aria-required'],
      elementType: 'searchInput',
    },
    {
      combination: ['aria-invalid', 'aria-required'],
      order: ['aria-required', 'aria-invalid'],
      elementType: 'searchInput',
    },
  ], // End role=searchbox
  'input:checkbox': [
    {
      combination: ['checked'],
      elementType: 'checkboxInput',
    },
    {
      combination: ['aria-required'],
      elementType: 'checkboxInput',
    },
    {
      combination: ['checked', 'aria-required'],
      order: ['checked', 'aria-required'],
      elementType: 'checkboxInput',
    },
  ], // End input:checkbox
  'role=checkbox': [
    {
      order: ['aria-checked'],
      elementType: 'checkboxInput',
    },
    {
      combination: ['aria-checked'],
      elementType: 'checkboxInput',
    },
    {
      combination: ['aria-required'],
      order: ['aria-checked', 'aria-required'],
      elementType: 'checkboxInput',
    },
    {
      combination: ['aria-checked', 'aria-required'],
      order: ['aria-checked', 'aria-required'],
      elementType: 'checkboxInput',
    },
  ], // End role=checkbox
  'input:radio': [
    {
      combination: ['checked'],
      elementType: 'radioInput',
    },
    {
      combination: ['aria-required'],
      elementType: 'radioInput',
    },
    {
      combination: ['checked', 'aria-required'],
      order: ['checked', 'aria-required'],
      elementType: 'radioInput',
    },
  ], // End input:radio
  'role=radio': [
    {
      order: ['aria-checked'],
      elementType: 'radioInput',
    },
    {
      combination: ['aria-checked'],
      elementType: 'radioInput',
    },
    {
      combination: ['aria-required'],
      order: ['aria-checked', 'aria-required'],
      elementType: 'radioInput',
    },
    {
      combination: ['aria-checked', 'aria-required'],
      order: ['aria-checked', 'aria-required'],
      elementType: 'radioInput',
    },
  ], // End role=radio
  'role=combobox': [
    {
      elementType: 'combobox',
    },
    {
      combination: ['aria-invalid'],
      elementType: 'combobox',
    },
    {
      combination: ['aria-required'],
      elementType: 'combobox',
    },
    {
      combination: ['aria-invalid', 'aria-required'],
      order: ['aria-required', 'aria-invalid'],
      elementType: 'combobox',
    },
  ], // End role=combobox
  textarea: [
    {
      elementType: 'textarea',
    },
    {
      combination: ['aria-invalid'],
      elementType: 'textarea',
    },
    {
      combination: ['aria-required'],
      elementType: 'textarea',
    },
    {
      combination: ['aria-invalid', 'aria-required'],
      order: ['aria-required', 'aria-invalid'],
      elementType: 'textarea',
    },
  ], // End textarea
  a: [
    {
      elementType: 'link',
    },
    {
      combination: ['aria-expanded'],
      elementType: 'link',
    },
    {
      combination: ['aria-haspopup'],
      elementType: 'link',
    },
    {
      combination: ['aria-expanded', 'aria-haspopup'],
      order: ['aria-expanded', 'aria-haspopup'],
      elementType: 'link',
    },
  ], // End a
  'role=link': 'a',
  'role=menuitem': [
    {
      elementType: 'menuitem',
    },
    {
      combination: ['aria-haspopup'],
      elementType: 'menuitem',
    },
  ], // End role=menuitem
  'role=menuitemcheckbox': [
    {
      order: ['aria-checked'],
      elementType: 'menuitemcheckbox',
    },
    {
      combination: ['aria-checked'],
      elementType: 'menuitemcheckbox',
    },
  ], // End role=menuitemcheckbox
  'role=menuitemradio': [
    {
      order: ['aria-checked'],
      elementType: 'menuitemradio',
    },
    {
      combination: ['aria-checked'],
      elementType: 'menuitemradio',
    },
  ], // End role=menuitemradio
  select: [
    {
      elementType: 'select',
    },
    {
      combination: ['aria-invalid'],
      elementType: 'select',
    },
    {
      combination: ['aria-required'],
      elementType: 'select',
    },
    {
      combination: ['aria-invalid', 'aria-required'],
      order: ['aria-required', 'aria-invalid'],
      elementType: 'select',
    },
  ], // End select
  'role=switch': [
    {
      order: ['aria-checked'],
      elementType: 'switch',
    },
    {
      combination: ['aria-checked'],
      elementType: 'switch',
    },
  ], // End role=switch
  'role=tab': [
    {
      elementType: 'tab',
    },
    {
      combination: ['aria-selected'],
      elementType: 'tab',
    },
  ], // End role=tab
  'role=option': [
    {
      elementType: 'option',
    },
  ], // End role=option
  'role=treeitem': [
    {
      elementType: 'treeitem',
    },
    {
      combination: ['aria-expanded'],
      elementType: 'treeitem',
    },
  ], // End role=treeitem
  'role=gridcell': [
    {
      elementType: 'gridcell',
    },
    {
      combination: ['aria-selected'],
      elementType: 'gridcell',
    },
    {
      combination: ['aria-haspopup'],
      elementType: 'gridcell',
    },
    {
      combination: ['aria-selected', 'aria-haspopup'],
      order: ['aria-selected', 'aria-haspopup'],
      elementType: 'gridcell',
    },
  ], // End role=gridcell
};
