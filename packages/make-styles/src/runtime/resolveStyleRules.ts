import { convert, convertProperty } from 'rtl-css-js/core';
import { expand } from 'inline-style-expand-shorthand';

import { HASH_PREFIX, RTL_PREFIX } from '../constants';
import { MakeStyles, MakeStylesResolvedRule } from '../types';
import { compileCSS } from './compileCSS';
import { compileKeyframeRule } from './compileKeyframeRule';
import { hashString } from './utils/hashString';
import { generateCombinedQuery } from './utils/generateCombinedMediaQuery';
import { isMediaQuerySelector } from './utils/isMediaQuerySelector';
import { isNestedSelector } from './utils/isNestedSelector';
import { isRawStyle } from './utils/isRawStyle';
import { isSupportQuerySelector } from './utils/isSupportQuerySelector';
import { normalizeNestedProperty } from './utils/normalizeNestedProperty';

export function resolveStyleRules(
  styles: MakeStyles,
  unstable_cssPriority: number = 0,
  pseudo = '',
  media = '',
  support = '',
  result: Record<string, MakeStylesResolvedRule> = {},
): Record<string, MakeStylesResolvedRule> {
  const expandedStyles = (expand(styles) as unknown) as MakeStyles;
  const properties = Object.keys(expandedStyles);

  // TODO: => for-in loop
  properties.forEach(property => {
    const value = expandedStyles[property];

    // eslint-disable-next-line eqeqeq
    if (value == null) {
      return;
    } else if (typeof value === 'string' || typeof value === 'number') {
      // uniq key based on property & selector, used for merging later
      const key = pseudo + media + support + property;

      // trimming of values is required to generate consistent hashes
      const classNameHash = hashString(pseudo + media + support + property + value.toString().trim());
      const className = HASH_PREFIX + classNameHash + (unstable_cssPriority === 0 ? '' : unstable_cssPriority);

      const css = compileCSS({
        className,
        media,
        pseudo,
        property,
        support,
        value,
        unstable_cssPriority,
      });

      const rtl = convertProperty(property, value);
      const flippedInRtl = rtl.key !== property || rtl.value !== value;

      if (flippedInRtl) {
        const rtlCSS = compileCSS({
          className: RTL_PREFIX + className,
          media,
          pseudo,
          property: rtl.key,
          support,
          value: rtl.value,
          unstable_cssPriority,
        });

        // There is no sense to store RTL className as it's "r" + regular className
        result[key] = [className, css, rtlCSS];
      } else {
        result[key] = [className, css];
      }
    } else if (isRawStyle(value)) {
      if (isNestedSelector(property)) {
        resolveStyleRules(
          value,
          unstable_cssPriority,
          pseudo + normalizeNestedProperty(property),
          media,
          support,
          result,
        );
      } else if (isMediaQuerySelector(property)) {
        const combinedMediaQuery = generateCombinedQuery(media, property.slice(6).trim());

        resolveStyleRules(value, unstable_cssPriority, pseudo, combinedMediaQuery, support, result);
      } else if (isSupportQuerySelector(property)) {
        const combinedSupportQuery = generateCombinedQuery(support, property.slice(9).trim());

        resolveStyleRules(value, unstable_cssPriority, pseudo, media, combinedSupportQuery, result);
      } else if (property === 'animationName') {
        const animationNames = Array.isArray(value) ? value : [value];
        let keyframeCSS = '';
        let keyframeRtlCSS = '';
        const animationName: string = animationNames
          .map(val => {
            const keyframe = compileKeyframeRule(val);
            const name = HASH_PREFIX + hashString(keyframe);
            keyframeCSS += `@keyframes ${name}{${keyframe}}`;

            const rtlKeyframe = compileKeyframeRule(convert(val));
            if (keyframe !== rtlKeyframe) {
              keyframeRtlCSS += `@keyframes ${RTL_PREFIX + name}{${rtlKeyframe}}`;
            }

            return name;
          })
          .join(' ');

        // TODO: support RTL
        // TODO: support prefix - call Stylis for prefixing
        result[animationName] = [animationName, keyframeCSS, keyframeRtlCSS || undefined];

        resolveStyleRules({ animationName }, unstable_cssPriority, pseudo, media, support, result);
      }
    }
  });

  return result;
}
