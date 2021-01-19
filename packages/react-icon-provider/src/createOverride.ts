import { IIconSubset } from '@fluentui/style-utilities';

/**
 * Creates a custom icon override.
 * @param icons - Icon map with .
 */
export function createIconOverride(iconSet: { [key: string]: string | JSX.Element }): IIconSubset {
  const subset: IIconSubset = {
    icons: iconSet,
  };
  return subset;
}
