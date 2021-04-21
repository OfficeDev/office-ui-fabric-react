import { getTabsterAttribute, Types } from 'tabster';
import { useTabster } from './useTabster';

export interface UseArrowNavigationGroupOptions {
  /**
   * Focus will navigate vertically or horizontally, defaults to horizontally
   * @defaultValue vertical
   */
  axis?: 'vertical' | 'horizontal';
  /**
   * Focus will cycle to the first/last elements of the group without stopping
   */
  circular?: boolean;
}

/**
 * A hook that returns the necessary tabster attributes to support arrow key navigation
 * @param options - Options to configure keyboard navigation
 */
export const useArrowNavigationGroup = (options?: UseArrowNavigationGroupOptions) => {
  // A tabster instance is not necessary to generate tabster attributes
  // but calling the hook will ensure that a tabster instance exists internally and avoids consumers doing the same
  useTabster();

  return getTabsterAttribute({
    focusable: {
      mover: {
        axis: axisToMoverAxis(options?.axis ?? 'vertical'),
        navigationType: Types.MoverKeys.Arrows,
        cyclic: !!options?.circular,
      },
    },
  });
};

function axisToMoverAxis(axis: UseArrowNavigationGroupOptions['axis']) {
  switch (axis) {
    case 'horizontal':
      return Types.MoverAxis.Horizontal;
    case 'vertical':
    default:
      return Types.MoverAxis.Vertical;
  }
}
