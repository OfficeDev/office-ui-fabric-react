import { createTheme, ITheme } from '@fluentui/react';
import { CommonSemanticColors, HighContrastLightSemanticColors } from './AzureColors';
import { IExtendedSemanticColors } from './IExtendedSemanticColors';
import { FontSizes } from './AzureType';
import * as StyleConstants from './Constants';

const highContrastLightExtendedSemanticColors: Partial<IExtendedSemanticColors> = {
  bodyBackground: HighContrastLightSemanticColors.background,
  bodyDivider: CommonSemanticColors.dividers.lineSeparator,
  bodyText: HighContrastLightSemanticColors.text.body,
  bodyTextHovered: HighContrastLightSemanticColors.text.bodyHovered,
  buttonBackground: HighContrastLightSemanticColors.secondaryButton.rest.background,
  buttonBackgroundChecked: HighContrastLightSemanticColors.secondaryButton.pressed.background,
  buttonBackgroundCheckedHovered: HighContrastLightSemanticColors.secondaryButton.hover.background,
  buttonBackgroundDisabled: HighContrastLightSemanticColors.disabledButton.background,
  buttonBackgroundHovered: HighContrastLightSemanticColors.secondaryButton.hover.background,
  buttonBackgroundPressed: HighContrastLightSemanticColors.secondaryButton.pressed.background,
  ButtonBorderDisabled: HighContrastLightSemanticColors.disabledButton.text,
  buttonText: HighContrastLightSemanticColors.secondaryButton.rest.text,
  buttonTextChecked: HighContrastLightSemanticColors.secondaryButton.pressed.border,
  buttonTextCheckedHovered: HighContrastLightSemanticColors.secondaryButton.hover.border,
  buttonTextDisabled: HighContrastLightSemanticColors.disabledButton.text,
  buttonTextHovered: HighContrastLightSemanticColors.secondaryButton.hover.color,
  buttonTextPressed: HighContrastLightSemanticColors.secondaryButton.pressed.text,
  checkboxBackgroundChecked: HighContrastLightSemanticColors.checkBox.checked.background,
  checkboxBackgroundHovered: HighContrastLightSemanticColors.checkBox.checked.hoverBackground,
  checkBoxBorder: HighContrastLightSemanticColors.checkBox.rest.border,
  checkboxBorderChecked: HighContrastLightSemanticColors.checkBox.checked.border,
  checkboxBorderCheckedHovered: HighContrastLightSemanticColors.checkBox.checked.hoverBorder,
  checkBoxCheck: HighContrastLightSemanticColors.checkBox.rest.check,
  checkBoxCheckedFocus: HighContrastLightSemanticColors.checkBox.rest.focus,
  checkBoxCheckHover: HighContrastLightSemanticColors.checkBox.rest.hover,
  checkBoxCheckedDisabledBackground: HighContrastLightSemanticColors.checkBox.disabled.background,
  checkBoxDisabled: HighContrastLightSemanticColors.checkBox.disabled.border,
  checkBoxIndeterminateBackground: HighContrastLightSemanticColors.checkBox.rest.check,
  checkBoxIndeterminateDefaultChecked: HighContrastLightSemanticColors.checkBox.checked.default,
  choiceGroupUncheckedDotHover: HighContrastLightSemanticColors.choiceGroup.circle.hover,
  commandBarBorder: HighContrastLightSemanticColors.commandBar.border,
  datePickerDisabledBorder: HighContrastLightSemanticColors.datePicker.disabled.border,
  datePickerSelectionBackground: HighContrastLightSemanticColors.primaryButton.hover.background,
  datePickerSelectionText: HighContrastLightSemanticColors.datePicker.rest.text,
  disabledBackground: CommonSemanticColors.backgrounds.disabled,
  disabledBodyText: HighContrastLightSemanticColors.text.disabled,
  errorBackground: HighContrastLightSemanticColors.controlOutlines.error,
  errorText: HighContrastLightSemanticColors.text.error,
  focusBorder: HighContrastLightSemanticColors.controlOutlines.accent,
  inputBackground: HighContrastLightSemanticColors.background,
  inputBorder: HighContrastLightSemanticColors.secondaryButton.rest.border,
  inputBorderHovered: HighContrastLightSemanticColors.secondaryButton.hover.border,
  inputBorderPressed: HighContrastLightSemanticColors.secondaryButton.pressed.border,
  inputPlaceholderText: HighContrastLightSemanticColors.text.placeholder,
  inputText: HighContrastLightSemanticColors.text.value,
  link: HighContrastLightSemanticColors.text.hyperlink,
  linkBackgroundHovered: HighContrastLightSemanticColors.text.hyperlinkBackgroundHovered,
  linkHovered: HighContrastLightSemanticColors.text.hyperlinkHovered,
  listBackground: HighContrastLightSemanticColors.background,
  listHeaderBackgroundPressed: HighContrastLightSemanticColors.item.hover,
  listItemBackgroundChecked: HighContrastLightSemanticColors.item.select,
  listItemBackgroundCheckedHovered: HighContrastLightSemanticColors.item.select,
  listItemBackgroundHovered: HighContrastLightSemanticColors.item.hover,
  listItemBackgroundSelected: StyleConstants.transparent,
  listItemBackgroundSelectedHovered: HighContrastLightSemanticColors.item.selectHovered,
  listText: HighContrastLightSemanticColors.text.list,
  menuItemBackgroundHovered: HighContrastLightSemanticColors.primaryButton.hover.background,
  menuItemBackgroundPressed: HighContrastLightSemanticColors.primaryButton.hover.background,
  primaryButtonBackground: HighContrastLightSemanticColors.primaryButton.rest.background,
  primaryButtonBackgroundDisabled: HighContrastLightSemanticColors.disabledButton.background,
  primaryButtonBackgroundHovered: HighContrastLightSemanticColors.primaryButton.hover.background,
  primaryButtonBackgroundPressed: HighContrastLightSemanticColors.primaryButton.pressed.background,
  primaryButtonBorder: HighContrastLightSemanticColors.primaryButton.rest.border,
  primaryButtonBorderDisabled: HighContrastLightSemanticColors.disabledButton.text,
  primaryButtonText: HighContrastLightSemanticColors.primaryButton.rest.text,
  primaryButtonTextDisabled: HighContrastLightSemanticColors.disabledButton.text,
  primaryButtonTextFocused: HighContrastLightSemanticColors.primaryButton.focus.text,
  primaryButtonTextHovered: HighContrastLightSemanticColors.primaryButton.hover.text,
  primaryButtonTextPressed: HighContrastLightSemanticColors.primaryButton.pressed.text,
  primaryCompoundButtonBorder: HighContrastLightSemanticColors.primaryButton.rest.border,
  radioButtonPillBorderDisabled: HighContrastLightSemanticColors.radioButton.circle.borderDisabled,
  radioButtonPillCheckedHover: HighContrastLightSemanticColors.radioButton.pill.checkedHover,
  radioButtonPillUncheckedDisabled: HighContrastLightSemanticColors.radioButton.pill.uncheckedDisabled,
  radioButtonPillUncheckedHover: HighContrastLightSemanticColors.radioButton.pill.uncheckedHover,
  radioButtonPillDisabled: HighContrastLightSemanticColors.radioButton.pill.disabled,
  radioButtonThumbUnchecked: HighContrastLightSemanticColors.radioButton.circle.uncheckedRest,
  radioButtonThumbUncheckedDisabled: HighContrastLightSemanticColors.radioButton.circle.checkedDisabled,
  radioButtonThumbCheckedDisabled: HighContrastLightSemanticColors.radioButton.circle.checkedDisabled,
  rowBorder: HighContrastLightSemanticColors.radioButton.circle.checkedDisabled,
  tabHover: HighContrastLightSemanticColors.tabs.hover,
  variantBorder: HighContrastLightSemanticColors.controlOutlines.rest,
  // extended
  controlAccent: HighContrastLightSemanticColors.controlOutlines.accent,
  controlOutline: HighContrastLightSemanticColors.controlOutlines.rest,
  controlOutlineDisabled: HighContrastLightSemanticColors.controlOutlines.disabled,
  controlOutlineHovered: HighContrastLightSemanticColors.controlOutlines.hover,
  iconButtonBackground: HighContrastLightSemanticColors.primaryButton.hover.background,
  iconButtonFill: HighContrastLightSemanticColors.text.icon,
  iconButtonFillHovered: HighContrastLightSemanticColors.primaryButton.hover.text,
  labelText: HighContrastLightSemanticColors.text.label,
  statusDefaultBackground: HighContrastLightSemanticColors.statusBar.background.default,
  statusDefaultBorder: HighContrastLightSemanticColors.statusBar.border.default,
  statusErrorBackground: HighContrastLightSemanticColors.statusBar.background.error,
  statusErrorBorder: HighContrastLightSemanticColors.statusBar.border.error,
  statusErrorText: HighContrastLightSemanticColors.text.body,
  statusErrorIcon: HighContrastLightSemanticColors.statusBar.icon.error,
  statusInformationBackground: HighContrastLightSemanticColors.statusBar.background.information,
  statusInformationText: HighContrastLightSemanticColors.text.body,
  statusInformationIcon: HighContrastLightSemanticColors.statusBar.icon.default,
  statusLink: HighContrastLightSemanticColors.statusBar.link,
  statusSuccessBackground: HighContrastLightSemanticColors.statusBar.background.okay,
  statusSuccessBorder: HighContrastLightSemanticColors.statusBar.border.okay,
  statusSuccessText: HighContrastLightSemanticColors.text.body,
  statusSuccessIcon: HighContrastLightSemanticColors.statusBar.icon.okay,
  statusWarningBackground: HighContrastLightSemanticColors.statusBar.background.warning,
  statusWarningBorder: HighContrastLightSemanticColors.statusBar.border.warning,
  statusWarningText: HighContrastLightSemanticColors.text.body,
  statusWarningIcon: HighContrastLightSemanticColors.statusBar.icon.warning,
  teachingBubbleBackground: HighContrastLightSemanticColors.teachingBubble.rest.background,
  teachingBubblePrimaryButtonHover: HighContrastLightSemanticColors.teachingBubble.hover.primaryButtonBackground,
  teachingBubbleSecondaryBackground: HighContrastLightSemanticColors.teachingBubble.rest.secondaryBackround,
  teachingBubbleText: HighContrastLightSemanticColors.teachingBubble.rest.text,
  textFieldBorderDisabled: HighContrastLightSemanticColors.text.disabled,

  // temporary work around for high contrast themes
  choiceGroupContainerBorder: '1px',
  choiceGroupContainerBorderStyle: 'dashed',
  listUnderline: 'underline',
  linkBorderStyle: 'dashed',
};

export const AzureThemeHighContrastLight: ITheme = createTheme({
  fonts: {
    medium: {
      fontFamily: StyleConstants.fontFamily,
      fontSize: FontSizes.size13,
    },
  },
  palette: {
    themePrimary: HighContrastLightSemanticColors.controlOutlines.accent,
    neutralPrimary: HighContrastLightSemanticColors.text.body,
    neutralDark: HighContrastLightSemanticColors.text.body,
    neutralLight: HighContrastLightSemanticColors.shimmer.secondary, // shimmer elements
    neutralLighter: HighContrastLightSemanticColors.shimmer.primary, // shimmer elements
    neutralLighterAlt: HighContrastLightSemanticColors.item.hover, // nav highlight
    neutralQuaternaryAlt: HighContrastLightSemanticColors.item.select, // expand button on list controls
    neutralSecondary: HighContrastLightSemanticColors.text.label, // persona
    white: HighContrastLightSemanticColors.background, // shimmer elements
  },
  semanticColors: highContrastLightExtendedSemanticColors,
});
