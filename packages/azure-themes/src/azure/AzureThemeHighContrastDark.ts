import { createTheme, ITheme } from 'office-ui-fabric-react';
import { CommonSemanticColors, HighContrastDarkSemanticColors } from './AzureColors';
import { IExtendedSemanticColors } from './IExtendedSemanticColors';
import { FontSizes } from './AzureType';
import * as StyleConstants from './Constants';

const highContrastDarkExtendedSemanticColors: Partial<IExtendedSemanticColors> = {
  bodyBackground: HighContrastDarkSemanticColors.background,
  bodyDivider: CommonSemanticColors.dividers.lineSeparator,
  bodyText: HighContrastDarkSemanticColors.text.body,
  bodyTextHovered: HighContrastDarkSemanticColors.text.bodyHovered,
  buttonBackground: HighContrastDarkSemanticColors.secondaryButton.rest.background,
  buttonBackgroundChecked: HighContrastDarkSemanticColors.secondaryButton.pressed.background,
  buttonBackgroundCheckedHovered: HighContrastDarkSemanticColors.secondaryButton.hover.background,
  buttonBackgroundDisabled: HighContrastDarkSemanticColors.primaryButton.disabled.background,
  buttonBackgroundHovered: HighContrastDarkSemanticColors.secondaryButton.hover.background,
  buttonBackgroundPressed: HighContrastDarkSemanticColors.secondaryButton.pressed.background,
  ButtonBorderDisabled: HighContrastDarkSemanticColors.disabledButton.background,
  buttonText: HighContrastDarkSemanticColors.secondaryButton.rest.text,
  buttonTextChecked: HighContrastDarkSemanticColors.secondaryButton.pressed.border,
  buttonTextCheckedHovered: HighContrastDarkSemanticColors.secondaryButton.hover.border,
  buttonTextDisabled: HighContrastDarkSemanticColors.disabledButton.text,
  buttonTextHovered: HighContrastDarkSemanticColors.secondaryButton.hover.color,
  buttonTextPressed: HighContrastDarkSemanticColors.secondaryButton.pressed.text,
  checkboxBackgroundChecked: HighContrastDarkSemanticColors.checkBox.checked.background,
  checkboxBackgroundHovered: HighContrastDarkSemanticColors.checkBox.checked.hoverBackground,
  checkBoxBorder: HighContrastDarkSemanticColors.checkBox.rest.border,
  checkboxBorderChecked: HighContrastDarkSemanticColors.checkBox.checked.border,
  checkboxBorderCheckedHovered: HighContrastDarkSemanticColors.checkBox.checked.hoverBorder,
  checkBoxCheck: HighContrastDarkSemanticColors.checkBox.rest.check,
  checkBoxCheckedFocus: HighContrastDarkSemanticColors.checkBox.rest.focus,
  checkBoxCheckHover: HighContrastDarkSemanticColors.checkBox.rest.hover,
  checkBoxDisabled: HighContrastDarkSemanticColors.checkBox.disabled.border,
  checkBoxIndeterminateBackground: HighContrastDarkSemanticColors.checkBox.checked.background,
  checkBoxIndeterminateDefaultChecked: HighContrastDarkSemanticColors.checkBox.checked.default,
  choiceGroupUncheckedDotHover: HighContrastDarkSemanticColors.choiceGroup.circle.hover,
  commandBarBorder: HighContrastDarkSemanticColors.commandBar.border,
  datePickerDisabledBorder: HighContrastDarkSemanticColors.datePicker.disabled.border,
  datePickerSelectionBackground: HighContrastDarkSemanticColors.datePicker.rest.selected,
  datePickerSelectionText: HighContrastDarkSemanticColors.datePicker.rest.text,
  disabledBackground: CommonSemanticColors.backgrounds.disabled,
  disabledBodyText: HighContrastDarkSemanticColors.text.disabled,
  errorBackground: HighContrastDarkSemanticColors.controlOutlines.error,
  errorText: HighContrastDarkSemanticColors.text.error,
  focusBorder: HighContrastDarkSemanticColors.controlOutlines.accent,
  inputBackground: HighContrastDarkSemanticColors.background,
  inputBorder: HighContrastDarkSemanticColors.secondaryButton.rest.border,
  inputBorderHovered: HighContrastDarkSemanticColors.secondaryButton.hover.border,
  inputBorderPressed: HighContrastDarkSemanticColors.secondaryButton.pressed.border,
  inputPlaceholderText: HighContrastDarkSemanticColors.text.placeholder,
  inputText: HighContrastDarkSemanticColors.text.value,
  link: HighContrastDarkSemanticColors.text.hyperlink,
  linkBackgroundHovered: HighContrastDarkSemanticColors.text.hyperlinkBackgroundHovered,
  linkHovered: HighContrastDarkSemanticColors.text.hyperlinkHovered,
  listBackground: HighContrastDarkSemanticColors.background,
  listHeaderBackgroundPressed: HighContrastDarkSemanticColors.item.hover,
  listItemBackgroundChecked: HighContrastDarkSemanticColors.item.select,
  listItemBackgroundCheckedHovered: HighContrastDarkSemanticColors.item.select,
  listItemBackgroundHovered: HighContrastDarkSemanticColors.item.hover,
  listItemBackgroundSelected: StyleConstants.transparent,
  listItemBackgroundSelectedHovered: HighContrastDarkSemanticColors.item.selectHovered,
  listText: HighContrastDarkSemanticColors.text.list,
  menuItemBackgroundHovered: HighContrastDarkSemanticColors.primaryButton.hover.background,
  menuItemBackgroundPressed: HighContrastDarkSemanticColors.primaryButton.hover.background,
  primaryButtonBackground: HighContrastDarkSemanticColors.primaryButton.rest.background,
  primaryButtonBackgroundDisabled: HighContrastDarkSemanticColors.primaryButton.disabled.background,
  primaryButtonBackgroundHovered: HighContrastDarkSemanticColors.primaryButton.hover.background,
  primaryButtonBackgroundPressed: HighContrastDarkSemanticColors.primaryButton.pressed.background,
  primaryButtonBorder: HighContrastDarkSemanticColors.primaryButton.rest.border,
  primaryButtonBorderDisabled: HighContrastDarkSemanticColors.primaryButton.disabled.border,
  primaryButtonText: HighContrastDarkSemanticColors.primaryButton.rest.text,
  primaryButtonTextDisabled: HighContrastDarkSemanticColors.primaryButton.disabled.text,
  primaryButtonTextFocused: HighContrastDarkSemanticColors.primaryButton.focus.text,
  primaryButtonTextHovered: HighContrastDarkSemanticColors.primaryButton.hover.text,
  primaryButtonTextPressed: HighContrastDarkSemanticColors.primaryButton.pressed.text,
  radioButtonPillBorderDisabled: HighContrastDarkSemanticColors.radioButton.circle.borderDisabled,
  radioButtonPillCheckedHover: HighContrastDarkSemanticColors.radioButton.pill.checkedHover,
  radioButtonPillUncheckedDisabled: HighContrastDarkSemanticColors.radioButton.pill.uncheckedDisabled,
  radioButtonPillUncheckedHover: HighContrastDarkSemanticColors.radioButton.pill.uncheckedHover,
  radioButtonPillDisabled: HighContrastDarkSemanticColors.radioButton.pill.disabled,
  radioButtonThumbUnchecked: HighContrastDarkSemanticColors.radioButton.circle.uncheckedRest,
  radioButtonThumbUncheckedDisabled: HighContrastDarkSemanticColors.radioButton.circle.checkedDisabled,
  radioButtonThumbCheckedDisabled: HighContrastDarkSemanticColors.radioButton.circle.checkedDisabled,
  tabHover: HighContrastDarkSemanticColors.tabs.hover,
  rowBorder: HighContrastDarkSemanticColors.detailsRow.border,
  variantBorder: CommonSemanticColors.dividers.lineSeparator,
  // extended
  controlAccent: HighContrastDarkSemanticColors.controlOutlines.accent,
  controlOutline: HighContrastDarkSemanticColors.controlOutlines.rest,
  controlOutlineDisabled: HighContrastDarkSemanticColors.controlOutlines.disabled,
  controlOutlineHovered: HighContrastDarkSemanticColors.controlOutlines.hover,
  iconButtonBackground: HighContrastDarkSemanticColors.primaryButton.hover.background,
  iconButtonFill: HighContrastDarkSemanticColors.text.icon,
  iconButtonFillHovered: HighContrastDarkSemanticColors.primaryButton.hover.text,
  labelText: HighContrastDarkSemanticColors.text.label,
  statusErrorBackground: HighContrastDarkSemanticColors.statusBar.error,
  statusErrorText: HighContrastDarkSemanticColors.text.body,
  statusErrorIcon: CommonSemanticColors.icons.error,
  statusInformationBackground: HighContrastDarkSemanticColors.statusBar.information,
  statusInformationText: HighContrastDarkSemanticColors.text.body,
  statusInformationIcon: CommonSemanticColors.icons.information,
  statusSuccessBackground: HighContrastDarkSemanticColors.statusBar.okay,
  statusSuccessText: HighContrastDarkSemanticColors.text.body,
  statusSuccessIcon: CommonSemanticColors.icons.okay,
  statusWarningBackground: HighContrastDarkSemanticColors.statusBar.warning,
  statusWarningText: HighContrastDarkSemanticColors.text.body,
  statusWarningIcon: CommonSemanticColors.icons.warning,
  teachingBubbleBackground: HighContrastDarkSemanticColors.teachingBubble.rest.background,
  teachingBubblePrimaryButtonHover: HighContrastDarkSemanticColors.teachingBubble.hover.primaryButtonBackground,
  teachingBubbleSecondaryBackground: HighContrastDarkSemanticColors.teachingBubble.rest.secondaryBackround,
  teachingBubbleText: HighContrastDarkSemanticColors.teachingBubble.rest.text,
  textFieldBorderDisabled: HighContrastDarkSemanticColors.primaryButton.disabled.border,

  // temporary work around for high contrast themes
  choiceGroupContainerBorder: '1px',
  choiceGroupContainerBorderStyle: 'solid',
  listUnderline: 'underline',
  linkBorderStyle: 'dashed',
};

export const AzureThemeHighContrastDark: ITheme = createTheme({
  fonts: {
    medium: {
      fontFamily: StyleConstants.fontFamily,
      fontSize: FontSizes.size12,
    },
  },
  palette: {
    themePrimary: HighContrastDarkSemanticColors.controlOutlines.accent,
    neutralPrimary: HighContrastDarkSemanticColors.text.body,
    neutralDark: HighContrastDarkSemanticColors.text.body,
    neutralLighter: HighContrastDarkSemanticColors.shimmer.secondary, // shimmer elements
    neutralLight: HighContrastDarkSemanticColors.shimmer.primary, // shimmer elements
    neutralLighterAlt: HighContrastDarkSemanticColors.item.hover, // nav highlight
    neutralQuaternaryAlt: HighContrastDarkSemanticColors.item.select, // expand button on list controls
    neutralSecondary: HighContrastDarkSemanticColors.text.label, // persona,
    white: HighContrastDarkSemanticColors.background, // shimmer elements
  },
  semanticColors: highContrastDarkExtendedSemanticColors,
});
