import { useContext } from 'react';
import { useCustomizationSettings } from '@uifabric/utilities';
import { ITheme } from '@fluentui/theme';
import { ThemeContext } from './ThemeContext';
import { Theme } from './types';
import { createTheme } from './createTheme';

/**
 * Get theme from CustomizerContext or Customizations singleton.
 */
function useCompatTheme(): ITheme {
  return useCustomizationSettings(['theme']).theme;
}

/**
 * React hook for programmatically accessing the theme.
 */
export const useTheme = (): Theme => {
  const theme = useContext(ThemeContext);
  const legacyTheme = useCompatTheme();

  return theme || legacyTheme || createTheme();
};
