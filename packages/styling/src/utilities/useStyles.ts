import * as React from 'react';
import { mergeStyleSets, IStyleSet, IProcessedStyleSet } from '@uifabric/merge-styles';
import { ITheme } from '../interfaces/ITheme';
import { useCustomizationSettings } from '@uifabric/utilities';
import { getTheme } from '../styles/theme';

export function useStyles<TStyleSet extends IStyleSet<TStyleSet>>(
  styleFunction: (theme: ITheme) => TStyleSet,
  dependencies?: React.DependencyList,
): IProcessedStyleSet<TStyleSet> {
  const theme = useCustomizationSettings(['theme']).theme || getTheme();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useMemo(() => mergeStyleSets(styleFunction?.(theme)) as IProcessedStyleSet<TStyleSet>, dependencies);
}
