import { createTheme, Theme } from '@fluentui/react';
import { CommonSemanticColors, DarkSemanticColors } from './AzureColors';
import { IExtendedSemanticColors } from './IExtendedSemanticColors';
import { FontSizes } from './AzureType';
import * as StyleConstants from './Constants';
import { AzureStyleSettings } from './AzureStyleSettings';

const darkExtendedSemanticColors: Partial<IExtendedSemanticColors> = {
  bodyBackground: DarkSemanticColors.background,
  bodyDivider: CommonSemanticColors.dividers.lineSeparator,
  bodyText: DarkSemanticColors.text.body,
  bodyTextHovered: DarkSemanticColors.text.bodyHovered,
  buttonBackground: DarkSemanticColors.secondaryButton.rest.background,
  buttonBackgroundChecked: DarkSemanticColors.secondaryButton.pressed.background,
  buttonBackgroundCheckedHovered: DarkSemanticColors.secondaryButton.hover.background,
  buttonBackgroundDisabled: DarkSemanticColors.disabledButton.background,
  buttonBackgroundHovered: DarkSemanticColors.secondaryButton.hover.background,
  buttonBackgroundPressed: DarkSemanticColors.secondaryButton.pressed.background,
  ButtonBorderDisabled: DarkSemanticColors.disabledButton.background,
  ButtonBorderFocus: DarkSemanticColors.secondaryButton.focus.border,
  buttonText: DarkSemanticColors.secondaryButton.rest.text,
  buttonTextChecked: DarkSemanticColors.secondaryButton.pressed.border,
  buttonTextCheckedHovered: DarkSemanticColors.secondaryButton.hover.border,
  buttonTextDisabled: DarkSemanticColors.disabledButton.text,
  buttonTextHovered: DarkSemanticColors.secondaryButton.hover.color,
  buttonTextPressed: DarkSemanticColors.secondaryButton.pressed.text,
  checkboxBackgroundChecked: DarkSemanticColors.checkBox.checked.background,
  checkboxBackgroundHovered: DarkSemanticColors.checkBox.checked.hoverBorder,
  checkBoxBorder: DarkSemanticColors.checkBox.rest.border,
  checkboxBorderChecked: DarkSemanticColors.checkBox.checked.border,
  checkboxBorderCheckedHovered: DarkSemanticColors.checkBox.checked.hoverBorder,
  checkBoxCheck: DarkSemanticColors.checkBox.rest.check,
  checkBoxCheckedFocus: DarkSemanticColors.checkBox.rest.focus,
  checkBoxCheckHover: DarkSemanticColors.checkBox.rest.hover,
  checkBoxCheckedDisabledBackground: DarkSemanticColors.checkBox.disabled.background,
  checkBoxDisabled: DarkSemanticColors.checkBox.disabled.border,
  checkBoxIndeterminateBackground: DarkSemanticColors.checkBox.rest.check,
  choiceGroupUncheckedDotHover: DarkSemanticColors.choiceGroup.circle.hover,
  commandBarBorder: DarkSemanticColors.commandBar.border,
  datePickerDisabledBorder: DarkSemanticColors.datePicker.disabled.border,
  datePickerSelectionBackground: DarkSemanticColors.datePicker.rest.selected,
  datePickerSelectionText: DarkSemanticColors.datePicker.rest.text,
  disabledBackground: CommonSemanticColors.backgrounds.disabled,
  disabledBodyText: DarkSemanticColors.text.disabled,
  errorBackground: DarkSemanticColors.controlOutlines.error,
  errorText: DarkSemanticColors.text.error,
  focusBorder: DarkSemanticColors.controlOutlines.accent,
  inputBackground: DarkSemanticColors.background,
  inputBorder: DarkSemanticColors.secondaryButton.rest.border,
  inputBorderHovered: DarkSemanticColors.secondaryButton.hover.border,
  inputBorderPressed: DarkSemanticColors.secondaryButton.pressed.border,
  inputPlaceholderText: DarkSemanticColors.text.placeholder,
  inputText: DarkSemanticColors.text.value,
  link: DarkSemanticColors.text.hyperlink,
  linkBackgroundHovered: DarkSemanticColors.text.hyperlinkBackgroundHovered,
  linkHovered: DarkSemanticColors.text.hyperlinkHovered,
  listBackground: DarkSemanticColors.background,
  listHeaderBackgroundPressed: DarkSemanticColors.item.hover,
  listItemBackgroundChecked: DarkSemanticColors.item.select,
  listItemBackgroundCheckedHovered: DarkSemanticColors.item.select,
  listItemBackgroundHovered: DarkSemanticColors.item.hover,
  listItemBackgroundSelected: DarkSemanticColors.item.hover,
  listItemBackgroundSelectedHovered: DarkSemanticColors.item.selectHovered,
  listText: DarkSemanticColors.text.body,
  menuItemBackgroundHovered: DarkSemanticColors.item.hover,
  menuItemBackgroundPressed: DarkSemanticColors.item.select,
  primaryButtonBackground: DarkSemanticColors.primaryButton.rest.background,
  primaryButtonBackgroundDisabled: DarkSemanticColors.disabledButton.background,
  primaryButtonBackgroundHovered: DarkSemanticColors.primaryButton.hover.background,
  primaryButtonBackgroundPressed: DarkSemanticColors.primaryButton.pressed.background,
  primaryButtonBorder: DarkSemanticColors.primaryButton.rest.border,
  primaryButtonBorderDisabled: DarkSemanticColors.primaryButton.disabled.border,
  primaryButtonText: DarkSemanticColors.primaryButton.rest.text,
  primaryButtonTextDisabled: DarkSemanticColors.disabledButton.text,
  primaryButtonTextFocused: DarkSemanticColors.primaryButton.focus.text,
  primaryButtonTextHovered: DarkSemanticColors.primaryButton.hover.text,
  primaryButtonTextPressed: DarkSemanticColors.primaryButton.pressed.text,
  primaryCompoundButtonBorder: DarkSemanticColors.primaryButton.rest.background,
  radioButtonPillBorderDisabled: DarkSemanticColors.radioButton.circle.borderDisabled,
  radioButtonPillCheckedHover: DarkSemanticColors.radioButton.pill.checkedHover,
  radioButtonPillUncheckedDisabled: DarkSemanticColors.radioButton.pill.uncheckedDisabled,
  radioButtonPillUncheckedHover: DarkSemanticColors.radioButton.pill.uncheckedHover,
  radioButtonPillDisabled: DarkSemanticColors.radioButton.pill.disabled,
  radioButtonThumbUnchecked: DarkSemanticColors.radioButton.circle.uncheckedRest,
  radioButtonThumbUncheckedDisabled: DarkSemanticColors.radioButton.pill.disabled,
  radioButtonThumbCheckedDisabled: DarkSemanticColors.radioButton.circle.checkedDisabled,
  rowBorder: DarkSemanticColors.detailsRow.border,
  tabHover: DarkSemanticColors.tabs.hover,
  variantBorder: CommonSemanticColors.dividers.lineSeparator,

  // extended
  controlAccent: DarkSemanticColors.controlOutlines.accent,
  controlBackground: DarkSemanticColors.controlOutlines.background,
  controlOutline: DarkSemanticColors.controlOutlines.rest,
  controlOutlineDisabled: DarkSemanticColors.controlOutlines.disabled,
  controlOutlineHovered: DarkSemanticColors.controlOutlines.hover,
  iconButtonFill: DarkSemanticColors.primaryButton.rest.background,
  iconButtonFillHovered: DarkSemanticColors.primaryButton.hover.background,
  labelText: DarkSemanticColors.text.label,
  statusDefaultBackground: DarkSemanticColors.statusBar.background.default,
  statusDefaultBorder: DarkSemanticColors.statusBar.border.default,
  statusErrorBackground: DarkSemanticColors.statusBar.background.error,
  statusErrorBorder: DarkSemanticColors.statusBar.border.error,
  statusErrorIcon: DarkSemanticColors.statusBar.icon.error,
  statusInformationBackground: DarkSemanticColors.statusBar.background.information,
  statusInformationText: DarkSemanticColors.text.body,
  statusInformationIcon: DarkSemanticColors.statusBar.icon.default,
  statusSuccessBackground: DarkSemanticColors.statusBar.background.okay,
  statusSuccessBorder: DarkSemanticColors.statusBar.border.okay,
  statusLink: DarkSemanticColors.statusBar.link,
  statusSuccessText: DarkSemanticColors.text.body,
  statusSuccessIcon: DarkSemanticColors.statusBar.icon.okay,
  statusWarningBackground: DarkSemanticColors.statusBar.background.warning,
  statusWarningBorder: DarkSemanticColors.statusBar.border.warning,
  statusWarningText: DarkSemanticColors.text.body,
  statusWarningIcon: DarkSemanticColors.statusBar.icon.warning,
  teachingBubbleBackground: DarkSemanticColors.teachingBubble.rest.background,
  teachingBubbleBorder: DarkSemanticColors.teachingBubble.rest.border,
  teachingBubblePrimaryButtonHover: DarkSemanticColors.teachingBubble.hover.primaryButtonBackground,
  teachingBubbleSecondaryBackground: DarkSemanticColors.teachingBubble.rest.secondaryBackround,
  teachingBubbleText: DarkSemanticColors.teachingBubble.rest.text,
  textFieldBorderDisabled: DarkSemanticColors.primaryButton.disabled.border,

  // temporary work around for high contrast themes
  choiceGroupContainerBorder: '0px',
  callOutBorderStyle: 'solid',
  choiceGroupContainerBorderStyle: 'solid',
  listUnderline: 'none',
  linkBorderStyle: 'dashed',
};

export const AzureThemeDark: Theme = createTheme({
  fonts: {
    medium: {
      fontFamily: StyleConstants.fontFamily,
      fontSize: FontSizes.size13,
    },
    large: {
      fontSize: FontSizes.size14,
    },
  },
  palette: {
    themePrimary: DarkSemanticColors.controlOutlines.accent,
    neutralPrimary: DarkSemanticColors.text.body,
    neutralDark: DarkSemanticColors.text.body,
    neutralLighter: DarkSemanticColors.shimmer.secondary, // shimmer elements
    neutralLight: DarkSemanticColors.shimmer.primary, // shimmer elements
    neutralLighterAlt: DarkSemanticColors.item.hover, // nav highlight
    neutralQuaternaryAlt: DarkSemanticColors.item.select, // expand button on list controls
    neutralSecondary: DarkSemanticColors.text.label, // persona,
    white: DarkSemanticColors.background, // shimmer elements
  },
  semanticColors: darkExtendedSemanticColors,
  isInverted: true,
});

AzureThemeDark.components = AzureStyleSettings(AzureThemeDark);
