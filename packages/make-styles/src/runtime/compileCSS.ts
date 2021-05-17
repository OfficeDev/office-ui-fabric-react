import { compile, middleware, prefixer, rulesheet, serialize, stringify } from 'stylis';

import { globalPlugin } from './stylis/globalPlugin';
import { hyphenateProperty } from './utils/hyphenateProperty';

export interface CompileCSSOptions {
  className: string;

  pseudo: string;
  media: string;
  support: string;

  property: string;
  value: number | string;
  unstable_cssPriority: number;

  rtlClassName?: string;
  rtlProperty?: string;
  rtlValue?: number | string;
}

function repeatSelector(selector: string, times: number) {
  return new Array(times + 2).join(selector);
}

export function compileCSSRules(cssRules: string): string[] {
  const rules: string[] = [];

  serialize(
    compile(cssRules),
    middleware([
      globalPlugin,
      prefixer,
      stringify,

      // 💡 we are using `.insertRule()` API for DOM operations, which does not support
      // insertion of multiple CSS rules in a single call. `rulesheet` plugin extracts
      // individual rules to be used with this API
      rulesheet(rule => rules.push(rule)),
    ]),
  );

  return rules;
}

export function compileCSS(options: CompileCSSOptions): [string /* ltr definition */, string? /* rtl definition */] {
  const {
    className,
    media,
    pseudo,
    support,
    property,
    rtlClassName,
    rtlProperty,
    rtlValue,
    value,
    unstable_cssPriority,
  } = options;

  const classNameSelector = repeatSelector(`.${className}`, unstable_cssPriority);
  const cssDeclaration = `{ ${hyphenateProperty(property)}: ${value}; }`;

  let rtlClassNameSelector: string | null = null;
  let rtlCSSDeclaration: string | null = null;

  if (rtlProperty && rtlClassName) {
    rtlClassNameSelector = repeatSelector(`.${rtlClassName}`, unstable_cssPriority);
    rtlCSSDeclaration = `{ ${hyphenateProperty(rtlProperty)}: ${rtlValue}; }`;
  }

  let cssRule = `${classNameSelector}${pseudo} ${cssDeclaration};`;

  if (rtlProperty) {
    cssRule = `${cssRule}; ${rtlClassNameSelector}${pseudo} ${rtlCSSDeclaration};`;
  }

  if (media) {
    cssRule = `@media ${media} { ${cssRule} }`;
  }

  if (support) {
    cssRule = `@supports ${support} { ${cssRule} }`;
  }

  return compileCSSRules(cssRule) as [string, string?];
}
