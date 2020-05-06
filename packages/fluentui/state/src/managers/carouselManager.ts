import createManager from '../createManager';
import { Manager, ManagerConfig } from '../types';

export type CarouselActions = {
  updateActiveIndex: (activeIndex: number | string, prevActiveIndex: number) => void;
  updateAriaLiveOn: (ariaLiveOn: boolean) => void;
  updateShouldFocusContainer: (shouldFocusContainer: boolean) => void;
  updateIsFromKeyboard: (isFromKeyboard: boolean) => void;
};

export type CarouselState = {
  activeIndex: number | string;
  prevActiveIndex: number;
  ariaLiveOn: boolean;
  shouldFocusContainer: boolean;
  isFromKeyboard: boolean;
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
      shouldFocusContainer: false,
      isFromKeyboard: false,
      ...config.state,
    },
    actions: {
      updateActiveIndex: (activeIndex, prevActiveIndex) => () => ({ activeIndex, prevActiveIndex }),
      updateAriaLiveOn: ariaLiveOn => () => ({ ariaLiveOn }),
      updateShouldFocusContainer: shouldFocusContainer => () => ({ shouldFocusContainer }),
      updateIsFromKeyboard: isFromKeyboard => () => ({ isFromKeyboard }),
      ...config.actions,
    },
  });
