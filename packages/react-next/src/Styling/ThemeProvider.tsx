import * as React from 'react';
import { ThemeProvider as ReactThemeProvider, ThemeProviderProps } from '@fluentui/react-theme-provider';
import { Customizations, ISettings } from 'office-ui-fabric-react/lib/Utilities';
import { convertLegacyTheme } from './convertLegacyTheme';

export { ThemeProviderProps } from '@fluentui/react-theme-provider';

/**
 * A wrapper of ThemeProvider from react-theme-provider package.
 *
 * It also updates the theme when Customizations changes, which ensures backward compatibility with legacy ways of
 * providing theme (e.g. loadTheme, Customizations.applySettings).
 */
export const ThemeProvider: React.FunctionComponent<ThemeProviderProps & {
  ref?: React.Ref<HTMLDivElement>;
}> = props => {
  const [customizationSettings, setCustomizationSettings] = React.useState(getGlobalCustomizationSettings());

  const onCustomizationChange = React.useCallback(() => {
    const globalSettings = getGlobalCustomizationSettings();
    setCustomizationSettings(globalSettings);
  }, []);

  React.useEffect(() => {
    Customizations.observe(onCustomizationChange);

    return () => Customizations.unobserve(onCustomizationChange);
  }, []);

  const legacyTheme = customizationSettings.theme;
  const theme = props.theme || convertLegacyTheme(legacyTheme);

  return <ReactThemeProvider {...props} theme={theme} />;
};

function getGlobalCustomizationSettings(): ISettings {
  return Customizations.getSettings(['theme'], undefined);
}
