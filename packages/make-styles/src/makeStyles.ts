import { createCSSVariablesProxy } from './runtime/createCSSVariablesProxy';
import { resolveClassesBySlots } from './runtime/resolveClassesBySlots';
import { resolveStyleRules } from './runtime/resolveStyleRules';
import { MakeStylesOptions, MakeStylesStyleFunctionRule, MakeStylesStyleRule, ResolvedStylesBySlots } from './types';

export function makeStyles<Slots extends string, Tokens>(
  stylesBySlots: Record<Slots, MakeStylesStyleRule<Tokens>>,
  unstable_cssPriority: number = 0,
) {
  let resolvedStyles: ResolvedStylesBySlots<Slots> | null = null;
  let resolvedClasses: Record<Slots, string> | null = null;
  const insertionCache: Record<string, boolean> = {};

  function computeClasses(options: MakeStylesOptions): Record<Slots, string> {
    const { dir, renderer } = options;

    if (resolvedStyles === null) {
      resolvedStyles = {} as ResolvedStylesBySlots<Slots>;

      const tokensProxy = createCSSVariablesProxy() as Tokens;

      // eslint-disable-next-line guard-for-in
      for (const slotName in stylesBySlots) {
        const slotStyles = stylesBySlots[slotName];
        const preparedSlotStyles =
          typeof slotStyles === 'function'
            ? (slotStyles as MakeStylesStyleFunctionRule<Tokens>)(tokensProxy)
            : slotStyles;

        resolvedStyles[slotName] = resolveStyleRules(preparedSlotStyles, unstable_cssPriority);
      }
    }

    // As RTL classes are different they should have a different cache key for insertion
    const rendererId = dir === 'ltr' ? renderer.id : renderer.id + 'r';

    if (resolvedClasses === null || insertionCache[rendererId] === undefined) {
      resolvedClasses = resolveClassesBySlots(resolvedStyles, dir, renderer);
      insertionCache[rendererId] = true;
    }

    return resolvedClasses;
  }

  return computeClasses;
}
