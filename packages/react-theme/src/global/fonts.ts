import { FontFamilies, FontSizes, FontWeights, LineHeights } from '../types';

export const fontSizes: FontSizes = {
  base: {
    100: '10px',
    200: '12px',
    300: '14px',
    400: '16px',
    500: '20px',
    600: '24px',
  },
  hero: {
    700: '28px',
    800: '32px',
    900: '40px',
    1000: '68px',
  },
};

export const lineHeights: LineHeights = {
  base: {
    100: '14px',
    200: '16px',
    300: '20px',
    400: '22px',
    500: '28px',
    600: '32px',
  },
  hero: {
    700: '36px',
    800: '40px',
    900: '52px',
    1000: '92px',
  },
};

export const fontWeights: FontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
};

// TODO find asset urls
export const fontFamilies: FontFamilies = {
  base:
    "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
  monospace: "Consolas, 'Courier New', Courier, monospace",
  numeric: 'Bahnschrift, $fontFamily-base',
};
