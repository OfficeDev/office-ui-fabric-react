import * as React from 'react';
import { ContextualMenu, DirectionalHint, Text } from 'office-ui-fabric-react';
import { FontIcon } from '../../../utilities/factoryComponents';

import { Button } from '../Button';
import { IMenuButtonComponent } from './MenuButton.types';

export const MenuButtonSlots: IMenuButtonComponent['slots'] = props => ({
  root: 'div',
  button: Button,
  icon: FontIcon,
  content: Text,
  menuArea: 'div',
  menu: ContextualMenu,
  menuIcon: FontIcon
});

export const MenuButtonView: IMenuButtonComponent['view'] = (props, slots) => {
  const {
    slotProps,
    children,
    disabled,
    onClick,
    allowDisabledFocus,
    keytipProps: keytips,
    expanded,
    onMenuDismiss,
    menuButtonRef,
    styles,
    ...rest
  } = props;
  let { keytipProps } = props;
  const { root, button, menuArea, menu, menuIcon, ...buttonSlotProps } = slotProps;

  if (keytipProps && menu) {
    keytipProps = {
      ...keytipProps,
      hasMenu: true
    };
  }

  return (
    <slots.root ref={menuButtonRef} {...root as any}>
      <slots.button
        aria-expanded={expanded}
        onClick={onClick}
        disabled={disabled}
        allowDisabledFocus={allowDisabledFocus}
        keytipProps={keytipProps}
        {...rest}
        {...buttonSlotProps}
        {...button}
      >
        {children}
        <slots.menuArea {...menuArea}>
          <slots.menuIcon iconName="ChevronDown" {...menuIcon} />
        </slots.menuArea>
      </slots.button>
      {expanded && (
        <slots.menu
          target={menuButtonRef && menuButtonRef.current}
          onDismiss={onMenuDismiss}
          items={[]}
          directionalHint={DirectionalHint.bottomRightEdge}
          {...menu}
        />
      )}
    </slots.root>
  );
};
