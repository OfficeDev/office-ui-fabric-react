import { createTheme, Theme } from '@fluentui/theme';
import { CommonSemanticColors, LightSemanticColors } from './AzureColors';
import { IExtendedSemanticColors } from './IExtendedSemanticColors';
import { FontSizes } from './AzureType';
import * as StyleConstants from './Constants';
import { AzureStyleSettings } from './AzureStyleSettings';

const lightExtendedSemanticColors: Partial<IExtendedSemanticColors> = {
  bodyBackground: LightSemanticColors.background,
  bodyDivider: CommonSemanticColors.dividers.lineSeparator,
  bodyText: LightSemanticColors.text.body,
  bodyTextHovered: LightSemanticColors.text.bodyHovered,
  buttonBackground: LightSemanticColors.secondaryButton.rest.background,
  buttonBackgroundChecked: LightSemanticColors.secondaryButton.pressed.background,
  buttonBackgroundCheckedHovered: LightSemanticColors.secondaryButton.hover.background,
  buttonBackgroundDisabled: LightSemanticColors.disabledButton.background,
  buttonBackgroundHovered: LightSemanticColors.secondaryButton.hover.background,
  buttonBackgroundPressed: LightSemanticColors.secondaryButton.pressed.background,
  ButtonBorderDisabled: LightSemanticColors.disabledButton.background,
  buttonText: LightSemanticColors.secondaryButton.rest.text,
  buttonTextChecked: LightSemanticColors.secondaryButton.pressed.border,
  buttonTextCheckedHovered: LightSemanticColors.secondaryButton.hover.border,
  buttonTextDisabled: LightSemanticColors.disabledButton.text,
  buttonTextHovered: LightSemanticColors.secondaryButton.hover.color,
  buttonTextPressed: LightSemanticColors.secondaryButton.pressed.text,
  checkboxBackgroundChecked: LightSemanticColors.checkBox.checked.background,
  checkboxBackgroundHovered: LightSemanticColors.checkBox.checked.hoverBackground,
  checkBoxBorder: LightSemanticColors.checkBox.rest.border,
  checkboxBorderChecked: LightSemanticColors.checkBox.checked.border,
  checkboxBorderCheckedHovered: LightSemanticColors.checkBox.checked.hoverBorder,
  checkBoxCheck: LightSemanticColors.checkBox.rest.check,
  checkBoxCheckedFocus: LightSemanticColors.checkBox.rest.focus,
  checkBoxCheckHover: LightSemanticColors.checkBox.rest.hover,
  checkBoxCheckedDisabledBackground: LightSemanticColors.checkBox.disabled.background,
  checkBoxDisabled: LightSemanticColors.checkBox.disabled.border,
  checkBoxIndeterminateBackground: LightSemanticColors.checkBox.rest.check,
  checkBoxIndeterminateDefaultChecked: LightSemanticColors.checkBox.checked.default,
  choiceGroupUncheckedDotHover: LightSemanticColors.choiceGroup.circle.hover,
  commandBarBorder: LightSemanticColors.commandBar.border,
  datePickerDisabledBorder: LightSemanticColors.datePicker.disabled.border,
  datePickerSelectionBackground: LightSemanticColors.datePicker.rest.selected,
  datePickerSelectionText: LightSemanticColors.datePicker.rest.text,
  disabledBackground: CommonSemanticColors.backgrounds.disabled,
  disabledBodyText: LightSemanticColors.text.disabled,
  errorBackground: LightSemanticColors.controlOutlines.error,
  errorText: LightSemanticColors.text.error,
  focusBorder: LightSemanticColors.controlOutlines.accent,
  inputBackground: LightSemanticColors.background,
  inputBorder: LightSemanticColors.secondaryButton.rest.border,
  inputBorderHovered: LightSemanticColors.controlOutlines.hover,
  inputBorderPressed: LightSemanticColors.secondaryButton.pressed.border,
  inputPlaceholderText: LightSemanticColors.text.placeholder,
  inputText: LightSemanticColors.text.value,
  link: LightSemanticColors.text.hyperlink,
  linkBackgroundHovered: LightSemanticColors.text.hyperlinkBackgroundHovered,
  linkHovered: LightSemanticColors.text.hyperlinkHovered,
  listBackground: LightSemanticColors.background,
  listHeaderBackgroundPressed: LightSemanticColors.item.hover,
  listItemBackgroundChecked: LightSemanticColors.item.select,
  listItemBackgroundCheckedHovered: LightSemanticColors.item.select,
  listItemBackgroundHovered: LightSemanticColors.item.hover,
  listItemBackgroundSelected: LightSemanticColors.item.hover,
  listItemBackgroundSelectedHovered: LightSemanticColors.item.selectHovered,
  listText: LightSemanticColors.text.body,
  menuItemBackgroundHovered: LightSemanticColors.item.hover,
  menuItemBackgroundPressed: LightSemanticColors.item.select,
  primaryButtonBackground: LightSemanticColors.primaryButton.rest.background,
  primaryButtonBackgroundDisabled: LightSemanticColors.disabledButton.background,
  primaryButtonBackgroundHovered: LightSemanticColors.primaryButton.hover.background,
  primaryButtonBackgroundPressed: LightSemanticColors.primaryButton.pressed.background,
  primaryButtonBorder: LightSemanticColors.primaryButton.rest.border,
  primaryButtonBorderDisabled: LightSemanticColors.primaryButton.disabled.border,
  primaryButtonText: LightSemanticColors.primaryButton.rest.text,
  primaryButtonTextDisabled: LightSemanticColors.disabledButton.text,
  primaryButtonTextFocused: LightSemanticColors.primaryButton.focus.text,
  primaryButtonTextHovered: LightSemanticColors.primaryButton.hover.text,
  primaryButtonTextPressed: LightSemanticColors.primaryButton.pressed.text,
  primaryCompoundButtonBorder: LightSemanticColors.primaryButton.rest.background,
  radioButtonPillBorderDisabled: LightSemanticColors.radioButton.circle.borderDisabled,
  radioButtonPillCheckedHover: LightSemanticColors.radioButton.pill.checkedHover,
  radioButtonPillUncheckedDisabled: LightSemanticColors.radioButton.pill.uncheckedDisabled,
  radioButtonPillUncheckedHover: LightSemanticColors.radioButton.pill.uncheckedHover,
  radioButtonPillDisabled: LightSemanticColors.radioButton.pill.disabled,
  radioButtonThumbUncheckedDisabled: LightSemanticColors.radioButton.pill.disabled,
  radioButtonThumbCheckedDisabled: LightSemanticColors.radioButton.circle.checkedDisabled,
  rowBorder: LightSemanticColors.detailsRow.border,
  tabHover: LightSemanticColors.tabs.hover,
  variantBorder: CommonSemanticColors.dividers.lineSeparator,
  // extended
  commandBarButtonText: LightSemanticColors.commandBar.button.root.color,
  commandBarButtonTextDisabled: LightSemanticColors.commandBar.button.disabled.color,
  commandBarButtonTextHover: LightSemanticColors.commandBar.button.hover.color,
  controlAccent: LightSemanticColors.controlOutlines.accent,
  controlBackground: LightSemanticColors.controlOutlines.background,
  controlOutline: LightSemanticColors.controlOutlines.rest,
  controlOutlineDisabled: LightSemanticColors.controlOutlines.disabled,
  controlOutlineHovered: LightSemanticColors.controlOutlines.hover,
  iconButtonFill: LightSemanticColors.primaryButton.rest.background,
  iconButtonFillHovered: LightSemanticColors.primaryButton.hover.background,
  labelText: LightSemanticColors.text.label,
  statusDefaultBackground: LightSemanticColors.statusBar.background.default,
  statusDefaultBorder: LightSemanticColors.statusBar.border.default,
  statusErrorBackground: LightSemanticColors.statusBar.background.error,
  statusErrorBorder: LightSemanticColors.statusBar.border.error,
  statusErrorText: LightSemanticColors.text.body,
  statusErrorIcon: LightSemanticColors.statusBar.icon.error,
  statusInformationBackground: LightSemanticColors.statusBar.background.information,
  statusInformationText: LightSemanticColors.text.body,
  statusInformationIcon: LightSemanticColors.statusBar.icon.default,
  statusSuccessBackground: LightSemanticColors.statusBar.background.okay,
  statusSuccessBorder: LightSemanticColors.statusBar.border.okay,
  statusSuccessText: LightSemanticColors.text.body,
  statusSuccessIcon: LightSemanticColors.statusBar.icon.okay,
  statusLink: LightSemanticColors.statusBar.link,
  statusWarningBackground: LightSemanticColors.statusBar.background.warning,
  statusWarningBorder: LightSemanticColors.statusBar.border.warning,
  statusWarningText: LightSemanticColors.text.body,
  statusWarningIcon: LightSemanticColors.statusBar.icon.warning,
  teachingBubbleBackground: LightSemanticColors.teachingBubble.rest.background,
  teachingBubbleBorder: LightSemanticColors.teachingBubble.rest.border,
  teachingBubblePrimaryButtonHover: LightSemanticColors.teachingBubble.hover.primaryButtonBackground,
  teachingBubbleSecondaryBackground: LightSemanticColors.teachingBubble.rest.secondaryBackround,
  teachingBubbleText: LightSemanticColors.teachingBubble.rest.text,
  textFieldBorderDisabled: LightSemanticColors.disabledButton.background,

  // temporary work around for high contrast themes
  choiceGroupContainerBorder: '0px',
  callOutBorderStyle: 'solid',
  choiceGroupContainerBorderStyle: 'solid',
  listUnderline: 'none',
  linkBorderStyle: 'dashed',
};

export const AzureThemeLight: Theme = createTheme({
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
    themePrimary: LightSemanticColors.controlOutlines.accent,
    neutralPrimary: LightSemanticColors.text.body,
    neutralDark: LightSemanticColors.text.body,
    neutralLight: LightSemanticColors.shimmer.secondary, // shimmer elements
    neutralLighter: LightSemanticColors.shimmer.primary, // shimmer elements
    neutralLighterAlt: LightSemanticColors.item.hover, // nav highlight
    neutralQuaternaryAlt: LightSemanticColors.item.select, // expand button on list controls
    neutralSecondary: LightSemanticColors.text.label, // persona
    white: LightSemanticColors.background, // shimmer elements
  },
  semanticColors: lightExtendedSemanticColors,
});

AzureThemeLight.components = AzureStyleSettings(AzureThemeLight);
