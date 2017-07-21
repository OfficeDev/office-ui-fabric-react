import { GlobalSettings } from '@uifabric/utilities/lib/GlobalSettings';
import { fontFace } from '../glamorExports';
import { mergeStyles } from './mergeStyles';
import { FontWeights } from '../styles/DefaultFontStyles';
import { IRawStyle } from '../interfaces/IRawStyle';
import { IFontFace } from '../interfaces/IFontFace';

export interface IIconSubset {
  fontFace: IFontFace;
  style: IRawStyle;
  icons: {
    [key: string]: string;
  };
}

export interface IIconSubsetRecord extends IIconSubset {
  isRegistered?: boolean;
  className?: string;
}

export interface IIconRecord {
  code: string;
  subset: IIconSubsetRecord;
  className?: string;
}

export interface IIconRecords {
  [key: string]: IIconRecord;
}

const ICON_SETTING_NAME = 'icons';
const _icons: IIconRecords = GlobalSettings.getValue(ICON_SETTING_NAME, {});

/**
 * Registers a given subset of icons.
 *
 * @param iconSubset - the icon subset definition.
 */
export function registerIcons(iconSubset: IIconSubset): void {
  let subset = {
    ...iconSubset,
    isRegistered: false,
    className: undefined
  };
  let { icons } = iconSubset;

  for (const iconName in icons) {
    if (icons.hasOwnProperty(iconName)) {
      const code = icons[iconName];

      _icons[iconName] = {
        code,
        subset,
        className: undefined
      };
    }
  }
}

/**
 * Gets an icon definition. If an icon is requested but the subset has yet to be registered,
 * it will get registered immediately.
 *
 * @public
 * @param name - Name of icon.
 */
export function getIcon(name: string): IIconRecord {
  let icon: IIconRecord = _icons[name];
  let { subset } = icon;

  if (!subset.isRegistered) {
    // Register font face for given icons.
    fontFace(subset.fontFace);

    // Generate a base class name for the given font.
    subset.className = mergeStyles(
      subset.style,
      {
        fontFamily: subset.fontFace.fontFamily,
        fontWeight: subset.fontFace.fontWeight || FontWeights.regular,
        fontStyle: subset.fontFace.fontStyle || 'normal'
      }).toString();

    subset.isRegistered = true;
  }

  return icon;
}

/**
 * Gets all icon definitions.
 *
 * @public
 */
export function getAllIcons(): IIconRecords {
  return _icons;
}

/**
 * Gets a given registered icon's class name to inject.
 *
 * @public
 * @param name - Name of icon.
 */
export function getIconClassName(name: string): string {
  let icon = getIcon(name);

  if (icon) {
    if (!icon.className) {
      icon.className = mergeStyles([
        icon.subset.className,
        {
          ':after': {
            content: `"${icon.code}"`
          }
        }
      ]).toString();
    }

    return icon.className;
  }

  return '';
}
