// Behavior-test use 'docs\src\behaviorMenu.json' file as source of strings to parse.
// The json file is generated by task 'build:docs:component-menu-behaviors'. The task will generate json file from the behaviors description.
// If you change behavior description, then you need to run:
//  - 'gulp build:docs:component-menu-behaviors' in order to get json file generated
//  OR
//  - 'yarn test' which has creating json file predefined in "pretest" step
import {
  attachmentBehavior,
  basicListBehavior,
  basicListItemBehavior,
  buttonBehavior,
  checkboxBehavior,
  embedBehavior,
  iconBehavior,
  imageBehavior,
  indicatorBehavior,
  inputBehavior,
  loaderBehavior,
  menuBehavior,
  menuItemBehavior,
  menuDividerBehavior,
  submenuBehavior,
  popupBehavior,
  dialogBehavior,
  radioGroupBehavior,
  radioGroupItemBehavior,
  navigableListBehavior,
  navigableListItemBehavior,
  selectableListBehavior,
  selectableListItemBehavior,
  sliderBehavior,
  tabBehavior,
  tabListBehavior,
  toggleButtonBehavior,
  menuAsToolbarBehavior,
  menuItemAsToolbarButtonBehavior,
  gridBehavior,
  gridHorizontalBehavior,
  statusBehavior,
  alertWarningBehavior,
  alertBaseBehavior,
  accordionBehavior,
  accordionTitleBehavior,
  accordionContentBehavior,
  chatBehavior,
  chatMessageBehavior,
  toolbarBehavior,
  toolbarItemBehavior,
  toolbarMenuBehavior,
  toolbarMenuItemCheckboxBehavior,
  toolbarMenuItemBehavior,
  toolbarMenuItemRadioBehavior,
  toolbarMenuRadioGroupBehavior,
  toolbarRadioGroupBehavior,
  toolbarRadioGroupItemBehavior,
  tooltipAsDescriptionBehavior,
  tooltipAsLabelBehavior,
  menuButtonBehavior,
  splitButtonBehavior,
  treeBehavior,
  treeItemBehavior,
  treeTitleBehavior,
  textAreaBehavior,
  treeAsListBehavior,
  treeItemAsListItemBehavior,
  treeTitleAsListItemTitleBehavior,
  carouselItemBehavior,
  carouselBehavior,
  tableBehavior,
  tableCellBehavior,
  tableHeaderCellBehavior,
  tableRowBehavior,
  gridNestedBehavior,
  gridHeaderRowBehavior,
  gridHeaderCellBehavior,
  gridRowNestedBehavior,
  gridCellBehavior,
  gridCellMultipleFocusableBehavior,
  gridCellWithFocusableElementBehavior,
  cardBehavior,
  cardFocusableBehavior,
  cardChildrenFocusableBehavior,
  cardsContainerBehavior,
  videoBehavior,
  buttonGroupBehavior,
  hiddenComponentBehavior,
  cardSelectableBehavior,
  dropdownSelectedItemBehavior,
  datepickerBehavior,
  datepickerCalendarBehavior,
  datepickerCalendarHeaderBehavior,
  datepickerCalendarGridBehavior,
  datepickerCalendarCellBehavior,
  skeletonBehavior,
  breadcrumbItemBehavior,
  breadcrumbDividerBehavior,
} from '@fluentui/accessibility';
import { TestHelper } from './testHelper';
import { definitions } from './testDefinitions';

const behaviorMenuItems = require('../../../docs/src/behaviorMenu');

const testHelper = new TestHelper();
testHelper.addTests(definitions);

testHelper.addBehavior('attachmentBehavior', attachmentBehavior);
testHelper.addBehavior('basicListBehavior', basicListBehavior);
testHelper.addBehavior('basicListItemBehavior', basicListItemBehavior);
testHelper.addBehavior('buttonBehavior', buttonBehavior);
testHelper.addBehavior('buttonGroupBehavior', buttonGroupBehavior);
testHelper.addBehavior('checkboxBehavior', checkboxBehavior);
testHelper.addBehavior('embedBehavior', embedBehavior);
testHelper.addBehavior('iconBehavior', iconBehavior);
testHelper.addBehavior('inputBehavior', inputBehavior);
testHelper.addBehavior('imageBehavior', imageBehavior);
testHelper.addBehavior('indicatorBehavior', indicatorBehavior);
testHelper.addBehavior('loaderBehavior', loaderBehavior);
testHelper.addBehavior('menuBehavior', menuBehavior);
testHelper.addBehavior('menuItemBehavior', menuItemBehavior);
testHelper.addBehavior('menuDividerBehavior', menuDividerBehavior);
testHelper.addBehavior('menuButtonBehavior', menuButtonBehavior);
testHelper.addBehavior('submenuBehavior', submenuBehavior);
testHelper.addBehavior('popupBehavior', popupBehavior);
testHelper.addBehavior('radioGroupBehavior', radioGroupBehavior);
testHelper.addBehavior('radioGroupItemBehavior', radioGroupItemBehavior);
testHelper.addBehavior('navigableListBehavior', navigableListBehavior);
testHelper.addBehavior('navigableListItemBehavior', navigableListItemBehavior);
testHelper.addBehavior('selectableListBehavior', selectableListBehavior);
testHelper.addBehavior('selectableListItemBehavior', selectableListItemBehavior);
testHelper.addBehavior('sliderBehavior', sliderBehavior);
testHelper.addBehavior('tabBehavior', tabBehavior);
testHelper.addBehavior('tabListBehavior', tabListBehavior);
testHelper.addBehavior('menuAsToolbarBehavior', menuAsToolbarBehavior);
testHelper.addBehavior('toggleButtonBehavior', toggleButtonBehavior);
testHelper.addBehavior('menuItemAsToolbarButtonBehavior', menuItemAsToolbarButtonBehavior);
testHelper.addBehavior('gridBehavior', gridBehavior);
testHelper.addBehavior('gridHorizontalBehavior', gridHorizontalBehavior);
testHelper.addBehavior('dialogBehavior', dialogBehavior);
testHelper.addBehavior('statusBehavior', statusBehavior);
testHelper.addBehavior('alertWarningBehavior', alertWarningBehavior);
testHelper.addBehavior('alertBaseBehavior', alertBaseBehavior);
testHelper.addBehavior('accordionBehavior', accordionBehavior);
testHelper.addBehavior('accordionTitleBehavior', accordionTitleBehavior);
testHelper.addBehavior('accordionContentBehavior', accordionContentBehavior);
testHelper.addBehavior('chatBehavior', chatBehavior);
testHelper.addBehavior('chatMessageBehavior', chatMessageBehavior);
testHelper.addBehavior('toolbarBehavior', toolbarBehavior);
testHelper.addBehavior('toolbarItemBehavior', toolbarItemBehavior);
testHelper.addBehavior('toolbarMenuBehavior', toolbarMenuBehavior);
testHelper.addBehavior('toolbarMenuItemBehavior', toolbarMenuItemBehavior);
testHelper.addBehavior('toolbarMenuItemCheckboxBehavior', toolbarMenuItemCheckboxBehavior);
testHelper.addBehavior('toolbarMenuItemRadioBehavior', toolbarMenuItemRadioBehavior);
testHelper.addBehavior('toolbarMenuRadioGroupBehavior', toolbarMenuRadioGroupBehavior);
testHelper.addBehavior('toolbarRadioGroupBehavior', toolbarRadioGroupBehavior);
testHelper.addBehavior('toolbarRadioGroupItemBehavior', toolbarRadioGroupItemBehavior);
testHelper.addBehavior('tooltipAsDescriptionBehavior', tooltipAsDescriptionBehavior);
testHelper.addBehavior('tooltipAsLabelBehavior', tooltipAsLabelBehavior);
testHelper.addBehavior('splitButtonBehavior', splitButtonBehavior);
testHelper.addBehavior('treeBehavior', treeBehavior);
testHelper.addBehavior('treeItemBehavior', treeItemBehavior);
testHelper.addBehavior('treeTitleBehavior', treeTitleBehavior);
testHelper.addBehavior('textAreaBehavior', textAreaBehavior);
testHelper.addBehavior('treeAsListBehavior', treeAsListBehavior);
testHelper.addBehavior('treeItemAsListItemBehavior', treeItemAsListItemBehavior);
testHelper.addBehavior('treeTitleAsListItemTitleBehavior', treeTitleAsListItemTitleBehavior);
testHelper.addBehavior('carouselItemBehavior', carouselItemBehavior);
testHelper.addBehavior('carouselBehavior', carouselBehavior);
testHelper.addBehavior('tableBehavior', tableBehavior);
testHelper.addBehavior('tableCellBehavior', tableCellBehavior);
testHelper.addBehavior('tableHeaderCellBehavior', tableHeaderCellBehavior);
testHelper.addBehavior('tableRowBehavior', tableRowBehavior);
testHelper.addBehavior('gridNestedBehavior', gridNestedBehavior);
testHelper.addBehavior('gridHeaderRowBehavior', gridHeaderRowBehavior);
testHelper.addBehavior('gridHeaderCellBehavior', gridHeaderCellBehavior);
testHelper.addBehavior('gridRowNestedBehavior', gridRowNestedBehavior);
testHelper.addBehavior('gridCellBehavior', gridCellBehavior);
testHelper.addBehavior('gridCellMultipleFocusableBehavior', gridCellMultipleFocusableBehavior);
testHelper.addBehavior('gridCellWithFocusableElementBehavior', gridCellWithFocusableElementBehavior);
testHelper.addBehavior('cardBehavior', cardBehavior);
testHelper.addBehavior('cardFocusableBehavior', cardFocusableBehavior);
testHelper.addBehavior('cardChildrenFocusableBehavior', cardChildrenFocusableBehavior);
testHelper.addBehavior('cardsContainerBehavior', cardsContainerBehavior);
testHelper.addBehavior('videoBehavior', videoBehavior);
testHelper.addBehavior('hiddenComponentBehavior', hiddenComponentBehavior);
testHelper.addBehavior('cardSelectableBehavior', cardSelectableBehavior);
testHelper.addBehavior('dropdownSelectedItemBehavior', dropdownSelectedItemBehavior);
testHelper.addBehavior('datepickerBehavior', datepickerBehavior);
testHelper.addBehavior('datepickerCalendarBehavior', datepickerCalendarBehavior);
testHelper.addBehavior('datepickerCalendarHeaderBehavior', datepickerCalendarHeaderBehavior);
testHelper.addBehavior('datepickerCalendarGridBehavior', datepickerCalendarGridBehavior);
testHelper.addBehavior('datepickerCalendarCellBehavior', datepickerCalendarCellBehavior);
testHelper.addBehavior('skeletonBehavior', skeletonBehavior);
testHelper.addBehavior('breadcrumbItemBehavior', breadcrumbItemBehavior);
testHelper.addBehavior('breadcrumbDividerBehavior', breadcrumbDividerBehavior);

testHelper.run(behaviorMenuItems);
