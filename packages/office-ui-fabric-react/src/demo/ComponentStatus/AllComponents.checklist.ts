
import { IComponentStatusProps } from './ComponentStatus.types';
export interface IComponentStatusState {
  [key: string]: IComponentStatusProps;
}
export const AllComponentsStatus: IComponentStatusState = {
  ActivityItem: require<any>('../../components/ActivityItem/ActivityItem.checklist').ActivityItemStatus,
  Breadcrumb: require<any>('../../components/Breadcrumb/Breadcrumb.checklist').BreadcrumbStatus,
  Button: require<any>('../../components/Button/Button.checklist').ButtonStatus,
  Calendar: require<any>('../../components/Calendar/Calendar.checklist').CalendarStatus,
  Callout: require<any>('../../components/Callout/Callout.checklist').CalloutStatus,
  Checkbox: require<any>('../../components/Checkbox/Checkbox.checklist').CheckboxStatus,
  ChoiceGroup: require<any>('../../components/ChoiceGroup/ChoiceGroup.checklist').ChoiceGroupStatus,
  ColorPicker: require<any>('../../components/ColorPicker/ColorPicker.checklist').ColorPickerStatus,
  ComboBox: require<any>('../../components/ComboBox/ComboBox.checklist').ComboBoxStatus,
  CommandBar: require<any>('../../components/CommandBar/CommandBar.checklist').CommandBarStatus,
  ContextualMenu: require<any>('../../components/ContextualMenu/ContextualMenu.checklist').ContextualMenuStatus,
  DatePicker: require<any>('../../components/DatePicker/DatePicker.checklist').DatePickerStatus,
  DetailsList: require<any>('../../components/DetailsList/DetailsList.checklist').DetailsListStatus,
  Dialog: require<any>('../../components/Dialog/Dialog.checklist').DialogStatus,
  DocumentCard: require<any>('../../components/Calendar/Calendar.checklist').CalendarStatus,
  Dropdown: require<any>('../../components/Dropdown/Dropdown.checklist').DropdownStatus,
  Facepile: require<any>('../../components/Facepile/Facepile.checklist').FacepileStatus,
  GroupedList: require<any>('../../components/GroupedList/GroupedList.checklist').GroupedListStatus,
  HoverCard: require<any>('../../components/HoverCard/HoverCard.checklist').HoverCardStatus,
  Icon: require<any>('../../components/Icon/Icon.checklist').IconStatus,
  Image: require<any>('../../components/Image/Image.checklist').ImageStatus,
  Label: require<any>('../../components/Label/Label.checklist').LabelStatus,
  Layer: require<any>('../../components/Layer/Layer.checklist').LayerStatus,
  Link: require<any>('../../components/Link/Link.checklist').LinkStatus,
  List: require<any>('../../components/List/List.checklist').ListStatus,
  MessageBar: require<any>('../../components/MessageBar/MessageBar.checklist').MessageBarStatus,
  Modal: require<any>('../../components/Modal/Modal.checklist').ModalStatus,
  Nav: require<any>('../../components/Nav/Nav.checklist').NavStatus,
  Overlay: require<any>('../../components/Overlay/Overlay.checklist').OverlayStatus,
  OverflowSet: require<any>('../../components/OverflowSet/OverflowSet.checklist').OverflowSetStatus,
  Panel: require<any>('../../components/Panel/Panel.checklist').PanelStatus,
  Persona: require<any>('../../components/Persona/Persona.checklist').PersonaStatus,
  Pickers: require<any>('../../components/pickers/Pickers.checklist').PickersStatus,
  PeoplePicker: require<any>('../../components/pickers/PeoplePicker/PeoplePicker.checklist').PeoplePickerStatus,
  Pivot: require<any>('../../components/Pivot/Pivot.checklist').PivotStatus,
  ProgressIndicator: require<any>('../../components/ProgressIndicator/ProgressIndicator.checklist').ProgressIndicatorStatus,
  Rating: require<any>('../../components/Rating/Rating.checklist').RatingStatus,
  ResizeGroup: require<any>('../../components/ResizeGroup/ResizeGroup.checklist').ResizeGroupStatus,
  ScrollablePane: require<any>('../../components/ScrollablePane/ScrollablePane.checklist').ScrollablePaneStatus,
  SearchBox: require<any>('../../components/SearchBox/SearchBox.checklist').SearchBoxStatus,
  Slider: require<any>('../../components/Slider/Slider.checklist').SliderStatus,
  Spinner: require<any>('../../components/Spinner/Spinner.checklist').SpinnerStatus,
  SpinButton: require<any>('../../components/SpinButton/SpinButton.checklist').SpinButtonStatus,
  SwatchColorPicker: require<any>('../../components/SwatchColorPicker/SwatchColorPicker.checklist').SwatchColorPickerStatus,
  TeachingBubble: require<any>('../../components/TeachingBubble/TeachingBubble.checklist').TeachingBubbleStatus,
  TextField: require<any>('../../components/TextField/TextField.checklist').TextFieldStatus,
  Toggle: require<any>('../../components/Toggle/Toggle.checklist').ToggleStatus,
  Tooltip: require<any>('../../components/Tooltip/Tooltip.checklist').TooltipStatus,
};