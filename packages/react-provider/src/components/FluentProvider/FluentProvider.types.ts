import * as React from 'react';
import { ComponentProps } from '@fluentui/react-utilities';
import { PartialTheme, Theme } from '@fluentui/react-theme';
import { FluentContextValue } from '@fluentui/react-shared-contexts';

export interface FluentProviderProps extends ComponentProps, React.HTMLAttributes<HTMLElement> {
  /** Sets the direction of text & generated styles. */
  dir?: 'ltr' | 'rtl';

  /** Provides the document, can be undefined during SSR render. */
  targetDocument?: Document | undefined;

  theme?: PartialTheme | Theme;
}

export interface FluentProviderState extends FluentProviderProps {
  /**
   * Ref to the root slot
   */
  ref: React.MutableRefObject<HTMLElement>;
  context: FluentContextValue;
}
