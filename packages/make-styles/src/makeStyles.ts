import { createCSSVariablesProxy } from './runtime/createCSSVariablesProxy';
import { reduceToClassNameForSlots } from './runtime/reduceToClassNameForSlots';
import { resolveStyleRules } from './runtime/resolveStyleRules';
import {
  CSSClassesMapBySlot,
  CSSRulesByBucket,
  MakeStyles,
  MakeStylesOptions,
  MakeStylesStyleFunctionRule,
  MakeStylesStyleRule,
  StyleBucketName,
} from './types';

export type StylesBySlots<Slots extends string, Tokens> = Record<Slots, MakeStylesStyleRule<Tokens>>;

/**
 * Calls resolveStyleRules() for each slot, is also used by build time transform.
 */
export function resolveStyleRulesForSlots<Slots extends string, Tokens>(
  stylesBySlots: StylesBySlots<Slots, Tokens>,
  unstable_cssPriority: number,
): [CSSClassesMapBySlot<Slots>, CSSRulesByBucket] {
  const tokensProxy = createCSSVariablesProxy() as Tokens;

  const classesMapBySlot = {} as CSSClassesMapBySlot<Slots>;
  const cssRules: CSSRulesByBucket = {};

  // eslint-disable-next-line guard-for-in
  for (const slotName in stylesBySlots) {
    const slotStyles: MakeStyles =
      typeof stylesBySlots[slotName] === 'function'
        ? (stylesBySlots[slotName] as MakeStylesStyleFunctionRule<Tokens>)(tokensProxy)
        : stylesBySlots[slotName];
    const [cssClassMap, cssRulesByBucket] = resolveStyleRules(slotStyles, unstable_cssPriority);

    classesMapBySlot[slotName] = cssClassMap;

    (Object.keys(cssRulesByBucket) as StyleBucketName[]).forEach(styleBucketName => {
      cssRules[styleBucketName] = (cssRules[styleBucketName] || []).concat(cssRulesByBucket[styleBucketName]!);
    });
  }

  return [classesMapBySlot, cssRules];
}

export function makeStyles<Slots extends string, Tokens>(
  stylesBySlots: StylesBySlots<Slots, Tokens>,
  unstable_cssPriority: number = 0,
) {
  const insertionCache: Record<string, boolean> = {};

  let classesMapBySlot: CSSClassesMapBySlot<Slots> | null = null;
  let cssRules: CSSRulesByBucket | null = null;

  let ltrClassNamesForSlots: Record<Slots, string> | null = null;
  let rtlClassNamesForSlots: Record<Slots, string> | null = null;

  function computeClasses(options: MakeStylesOptions): Record<Slots, string> {
    const { dir, renderer } = options;

    if (classesMapBySlot === null) {
      [classesMapBySlot, cssRules] = resolveStyleRulesForSlots(stylesBySlots, unstable_cssPriority);
    }

    const isLTR = dir === 'ltr';
    // As RTL classes are different they should have a different cache key for insertion
    const rendererId = isLTR ? renderer.id : renderer.id + 'r';

    if (isLTR) {
      if (ltrClassNamesForSlots === null) {
        ltrClassNamesForSlots = reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    } else {
      if (rtlClassNamesForSlots === null) {
        rtlClassNamesForSlots = reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    }

    if (insertionCache[rendererId] === undefined) {
      renderer.insertCSSRules(cssRules!);
      insertionCache[rendererId] = true;
    }

    return isLTR ? (ltrClassNamesForSlots as Record<Slots, string>) : (rtlClassNamesForSlots as Record<Slots, string>);
  }

  return computeClasses;
}
