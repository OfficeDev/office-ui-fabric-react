import * as React from 'react';
import { compose, mergeProps } from '@fluentui/react-compose';
import { ButtonBase } from '../Button/ButtonBase';
import { MenuButtonProps } from './MenuButton.types';
import { useMenuButton } from './useMenuButton';

export const MenuButtonBase = compose<'button', MenuButtonProps, MenuButtonProps, {}, {}>(
  (props, ref, options) => {
    const { state } = options;
    const { slots, slotProps } = mergeProps(state, options);

    const { children, expanded, iconOnly } = state;

    return (
      <>
        <slots.root ref={ref} {...slotProps.root}>
          {!iconOnly && <span>{children}</span>}
          <slots.menuIcon {...slotProps.menuIcon} />
          {expanded && <slots.menu {...slotProps.menu} />}
        </slots.root>
      </>
    );
  },
  {
    displayName: 'MenuButtonBase',
    handledProps: [
      'circular',
      'disabled',
      'fluid',
      'iconOnly',
      'inverted',
      'loading',
      'menu',
      'menuIcon',
      'primary',
      'secondary',
      'size',
    ],
    slots: {
      root: ButtonBase,
      menu: 'span',
      menuIcon: 'span',
    },
    state: useMenuButton,
  },
);

MenuButtonBase.defaultProps = {
  as: 'button',
};
