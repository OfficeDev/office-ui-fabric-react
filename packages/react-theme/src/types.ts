export type NeutralColorTokens = {
  // https://www.figma.com/file/KB9oUjMKen2cKnyPG7RgdS/Design-tokens-superset?node-id=1963%3A17486
  neutralForeground1: string;
  neutralForeground2: string;
  neutralForeground2Hover: string;
  neutralForeground2Pressed: string;
  neutralForeground2Selected: string;
  brandForeground2Hover: string;
  brandForeground2Pressed: string;
  brandForeground2Selected: string;
  neutralForeground3: string;
  neutralForeground3Hover: string;
  neutralForeground3Pressed: string;
  neutralForeground3Selected: string;
  brandForeground3Hover: string;
  brandForeground3Pressed: string;
  brandForeground3Selected: string;
  neutralForeground4: string;
  neutralForegroundDisabled: string;
  brandForeground: string;
  brandForegroundHover: string;
  brandForegroundPressed: string;
  brandForegroundSelected: string;
  neutralForegroundInverted: string;
  neutralForegroundInvertedAccessible: string;
  neutralBackground1: string;
  neutralBackground1Hover: string;
  neutralBackground1Pressed: string;
  neutralBackground1Selected: string;
  neutralBackground2: string;
  neutralBackground2Hover: string;
  neutralBackground2Pressed: string;
  neutralBackground2Selected: string;
  neutralBackground3: string;
  neutralBackground3Hover: string;
  neutralBackground3Pressed: string;
  neutralBackground3Selected: string;
  neutralBackground4: string;
  neutralBackground4Hover: string;
  neutralBackground4Pressed: string;
  neutralBackground4Selected: string;
  neutralBackground5: string;
  neutralBackground5Hover: string;
  neutralBackground5Pressed: string;
  neutralBackground5Selected: string;
  neutralBackground6: string;
  neutralBackgroundDisabled: string;
  neutralStrokeAccessible: string;
  neutralStrokeAccessibleHover: string;
  neutralStrokeAccessiblePressed: string;
  neutralStrokeAccessibleSelected: string;
  neutralStroke1: string;
  neutralStroke1Hover: string;
  neutralStroke1Pressed: string;
  neutralStroke1Selected: string;
  neutralStroke2: string;
  neutralStroke3: string;
  neutralStrokeDisabled: string;
  strokeAccessible: string;
  strokeAccessibleInteractive: string;
  strokeAccessibleDisabled: string;
  neutralShadowAmbient: string;
  neutralShadowKey: string;
  neutralShadowAmbientLighter: string;
  neutralShadowKeyLighter: string;
  neutralShadowAmbientDarker: string;
  neutralShadowKeyDarker: string;
};

export type SharedColorTokens = {
  background1: string;
  background2: string;
  background3: string;
  foreground1: string;
  foreground2: string;
  foreground3: string;
  borderActive: string;
  border2: string;
};

export type ColorVariants = {
  shade50: string;
  shade40: string;
  shade30: string;
  shade20: string;
  shade10: string;
  primary: string;
  tint10: string;
  tint20: string;
  tint30: string;
  tint40: string;
  tint50: string;
  tint60: string;
};

export type GlobalSharedColors = {
  darkRed: ColorVariants;
  burgundy: ColorVariants;
  cranberry: ColorVariants;
  red: ColorVariants;
  darkOrange: ColorVariants;
  bronze: ColorVariants;
  pumpkin: ColorVariants;
  orange: ColorVariants;
  peach: ColorVariants;
  marigold: ColorVariants;
  yellow: ColorVariants;
  gold: ColorVariants;
  brass: ColorVariants;
  brown: ColorVariants;
  darkBrown: ColorVariants;
  lime: ColorVariants;
  forrest: ColorVariants;
  seafoam: ColorVariants;
  lightGreen: ColorVariants;
  green: ColorVariants;
  darkGreen: ColorVariants;
  lightTeal: ColorVariants;
  darkTeal: ColorVariants;
  cyan: ColorVariants;
  steel: ColorVariants;
  lightBlue: ColorVariants;
  blue: ColorVariants;
  royalBlue: ColorVariants;
  darkBlue: ColorVariants;
  cornflower: ColorVariants;
  navy: ColorVariants;
  lavender: ColorVariants;
  purple: ColorVariants;
  darkPurple: ColorVariants;
  orchid: ColorVariants;
  grape: ColorVariants;
  berry: ColorVariants;
  lilac: ColorVariants;
  pink: ColorVariants;
  hotPink: ColorVariants;
  magenta: ColorVariants;
  plum: ColorVariants;
  lightGray: ColorVariants;
  gray: ColorVariants;
  silver: ColorVariants;
  platinum: ColorVariants;
  darkGray: ColorVariants;
  charcoal: ColorVariants;
};

export type BrandColors = {
  teams: ColorVariants;
  web: ColorVariants;
};

export type FontSizes = {
  base: {
    100: number;
    200: number;
    300: number;
    400: number;
    500: number;
    600: number;
  };
  hero: {
    700: number;
    800: number;
    900: number;
    1000: number;
  };
};

export type LineHeights = FontSizes;

export type FontWeights = {
  regular: number;
  medium: number;
  semibold: number;
};

export type FontFamilies = {
  base: string;
  monospace: string;
  numeric: string;
};

export type BorderRadius = {
  none: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  circular: string;
};

export type StrokeWidths = {
  thin: number;
  thick: number;
  thicker: number;
  thickest: number;
};

type ShadowTokenValue = {
  ambient: string;
  key: string;
};

export type ShadowTokens = {
  shadow2: ShadowTokenValue;
  shadow4: ShadowTokenValue;
  shadow8: ShadowTokenValue;
  shadow16: ShadowTokenValue;
  shadow28: ShadowTokenValue;
  shadow64: ShadowTokenValue;
};
