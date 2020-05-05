import createManager from '../createManager';
import { Manager, ManagerConfig } from '../types';
import { ShorthandCollection, CarouselItemProps, getOrGenerateIdFromShorthand } from '@fluentui/react-northstar';

export type CarouselActions = {
  updateActiveIndex: (activeIndex: number | string, prevActiveIndex: number) => void;
  updateAriaLiveOn: (ariaLiveOn: boolean) => void;
  updateItemIds: (itemIds: string[]) => void;
  updateShouldFocusContainer: (shouldFocusContainer: boolean) => void;
  updateIsFromKeyboard: (isFromKeyboard: boolean) => void;
};

export type CarouselState = {
  activeIndex: number | string;
  prevActiveIndex: number;
  ariaLiveOn: boolean;
  itemIds: string[];
  shouldFocusContainer: boolean;
  isFromKeyboard: boolean;
  items?: ShorthandCollection<CarouselItemProps>;
};

export type CarouselManager = Manager<CarouselState, CarouselActions>;

export const createCarouselManager = (
  config: Partial<ManagerConfig<CarouselState, CarouselActions>> = {},
): CarouselManager =>
  createManager<CarouselState, CarouselActions>({
    ...config,
    state: {
      activeIndex: 0,
      prevActiveIndex: -1,
      ariaLiveOn: false,
      itemIds: [],
      shouldFocusContainer: false,
      isFromKeyboard: false,
      ...config.state,
    },
    actions: {
      updateActiveIndex: (activeIndex, prevActiveIndex) => () => ({
        activeIndex,
        prevActiveIndex,
        itemIds: config.state.items?.map((item, index) =>
          getOrGenerateIdFromShorthand('carousel-item-', item, config.state.itemIds[index]),
        ),
      }),
      updateAriaLiveOn: ariaLiveOn => () => ({ ariaLiveOn }),
      updateItemIds: itemIds => () => ({ itemIds }),
      updateShouldFocusContainer: shouldFocusContainer => () => ({ shouldFocusContainer }),
      updateIsFromKeyboard: isFromKeyboard => () => ({ isFromKeyboard }),
      ...config.actions,
    },
  });
