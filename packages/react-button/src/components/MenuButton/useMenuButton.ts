import * as React from 'react';
import { resolveShorthand } from '@fluentui/react-utilities';
import { MenuButtonProps, MenuButtonSlots, MenuButtonState } from './MenuButton.types';
import { useButton } from '../Button/useButton';
import { ChevronDownIcon } from './DefaultIcons';

/**
 * Consts listing which props are shorthand props.
 */
export const menuButtonShorthandProps: Array<keyof MenuButtonSlots> = ['children', 'icon', 'menuIcon'];

/**
 * Redefine the component factory, reusing button factory.
 */
export const useMenuButton = (props: MenuButtonProps, ref: React.Ref<HTMLElement>): MenuButtonState => {
  const buttonState = useButton(props, ref);
  return {
    ...buttonState,
    components: {
      ...buttonState.components,
      menuIcon: ChevronDownIcon,
    },
    menuIcon: resolveShorthand(props.menuIcon),
  };
};
