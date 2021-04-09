import { createTheme, Theme } from '@fluentui/react';
import { CommonSemanticColors, HighContrastDarkSemanticColors } from './AzureColors';
import { IExtendedSemanticColors } from './IExtendedSemanticColors';
import { FontSizes } from './AzureType';
import * as StyleConstants from './Constants';
import { AzureStyleSettings } from './AzureStyleSettings';

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
  checkBoxCheckHoverTest: HighContrastDarkSemanticColors.checkBox.rest.hoverText,
  checkBoxCheckedDisabledBackground: HighContrastDarkSemanticColors.checkBox.disabled.background,
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
  commandBarButtonAfterColor: HighContrastDarkSemanticColors.commandBar.button.focus.borderColor,
  commandBarButtonBackgroundHover: HighContrastDarkSemanticColors.commandBar.button.hover.background,
  commandBarButtonBackgroundSelected: HighContrastDarkSemanticColors.commandBar.button.selected.background,
  commandBarButtonBackgroundSelectedHover: HighContrastDarkSemanticColors.commandBar.button.selectedHover.background,
  commandBarButtonIconHover: HighContrastDarkSemanticColors.commandBar.button.hover.icon,
  commandBarButtonIconSelected: HighContrastDarkSemanticColors.commandBar.button.selected.icon,
  commandBarButtonText: HighContrastDarkSemanticColors.commandBar.button.root.color,
  commandBarButtonTextDisabled: HighContrastDarkSemanticColors.commandBar.button.disabled.color,
  commandBarButtonTextHover: HighContrastDarkSemanticColors.commandBar.button.hover.color,
  controlAccent: HighContrastDarkSemanticColors.controlOutlines.accent,
  controlBackground: HighContrastDarkSemanticColors.controlOutlines.background,
  controlFocus: HighContrastDarkSemanticColors.controlOutlines.focus,
  controlOutline: HighContrastDarkSemanticColors.controlOutlines.rest,
  controlOutlineDisabled: HighContrastDarkSemanticColors.controlOutlines.disabled,
  controlOutlineHovered: HighContrastDarkSemanticColors.controlOutlines.hover,
  iconButtonFill: HighContrastDarkSemanticColors.text.icon,
  iconButtonFillHovered: HighContrastDarkSemanticColors.primaryButton.hover.text,
  labelText: HighContrastDarkSemanticColors.text.label,
  statusDefaultBackground: HighContrastDarkSemanticColors.statusBar.background.default,
  statusDefaultBorder: HighContrastDarkSemanticColors.statusBar.border.default,
  statusErrorBackground: HighContrastDarkSemanticColors.statusBar.background.error,
  statusErrorBorder: HighContrastDarkSemanticColors.statusBar.border.error,
  statusErrorText: HighContrastDarkSemanticColors.text.body,
  statusErrorIcon: HighContrastDarkSemanticColors.statusBar.icon.error,
  statusInformationBackground: HighContrastDarkSemanticColors.statusBar.background.information,
  statusInformationText: HighContrastDarkSemanticColors.text.body,
  statusInformationIcon: HighContrastDarkSemanticColors.statusBar.icon.default,
  statusLink: HighContrastDarkSemanticColors.statusBar.link,
  statusSuccessBackground: HighContrastDarkSemanticColors.statusBar.background.okay,
  statusSuccessBorder: HighContrastDarkSemanticColors.statusBar.border.okay,
  statusSuccessText: HighContrastDarkSemanticColors.text.body,
  statusSuccessIcon: HighContrastDarkSemanticColors.statusBar.icon.okay,
  statusWarningBackground: HighContrastDarkSemanticColors.statusBar.background.warning,
  statusWarningBorder: HighContrastDarkSemanticColors.statusBar.border.warning,
  statusWarningText: HighContrastDarkSemanticColors.text.body,
  statusWarningIcon: HighContrastDarkSemanticColors.statusBar.icon.warning,
  teachingBubbleBackground: HighContrastDarkSemanticColors.teachingBubble.rest.background,
  teachingBubbleBorder: HighContrastDarkSemanticColors.teachingBubble.rest.border,
  teachingBubblePrimaryButtonHover: HighContrastDarkSemanticColors.teachingBubble.hover.primaryButtonBackground,
  teachingBubbleSecondaryBackground: HighContrastDarkSemanticColors.teachingBubble.rest.secondaryBackround,
  teachingBubbleText: HighContrastDarkSemanticColors.teachingBubble.rest.text,
  textFieldBorderDisabled: HighContrastDarkSemanticColors.primaryButton.disabled.border,

  // temporary work around for high contrast themes
  choiceGroupContainerBorder: '1px',
  callOutBorderStyle: 'solid',
  choiceGroupContainerBorderStyle: 'solid',
  listUnderline: 'underline',
  linkBorderStyle: 'dashed',
};

export const AzureThemeHighContrastDark: Theme = createTheme({
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
  isInverted: true,
});

AzureThemeHighContrastDark.components = AzureStyleSettings(AzureThemeHighContrastDark);
