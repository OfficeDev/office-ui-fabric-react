import { mergeStyles } from './mergeStyles';
import { concatStyleSets } from './concatStyleSets';
import { IStyle } from './IStyle';

/**
 * Allows you to pass in 1 or more sets of areas which will return a merged
 * set of classes.
 *
 * @public
 */
export function mergeStyleSets<T>(
  ...cssSets: ({[P in keyof T]?: IStyle } | null | undefined)[]
): T {
  const classNameSet: Partial<T> = {};
  let cssSet = cssSets[0];

  if (cssSet) {
    if (cssSets.length > 1) {
      cssSet = concatStyleSets(...cssSets);
    }
    for (const prop in cssSet) {
      if (cssSet.hasOwnProperty(prop)) {
        // tslint:disable-next-line:no-any
        (classNameSet as any)[prop] = mergeStyles(cssSet[prop] as IStyle);
      }
    }
  }

  return classNameSet as T;
}
