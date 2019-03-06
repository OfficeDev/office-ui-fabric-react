/** @jsx withSlots */
import { DirectionalHint, Stack, Text } from 'office-ui-fabric-react';
import { withSlots, getSlots, ISlots, IPropsWithChildren } from '../../Foundation';
import { getNativeProps, buttonProperties } from '../../Utilities';
import { Icon } from '../../utilities/factoryComponents';

import { IButtonComponent, IButtonProps, IButtonSlots, IButtonViewProps } from './Button.types';
import { ButtonMenu } from './ButtonMenu/ButtonMenu';

export const ButtonView: IButtonComponent['view'] = props => {
  const { disabled, menu: Menu, expanded, menuType, menuTarget, onMenuDismiss, onClick, split, ...rest } = props;

  // TODO: 'href' is anchor property... consider getNativeProps by root type
  const buttonProps = { ...getNativeProps(rest, buttonProperties) };

  const Slots = getSlots<IButtonProps, IButtonSlots>(props, {
    root: _deriveRootType(props),
    stack: Stack,
    icon: Icon,
    content: Text,
    menu: ButtonMenu,
    menuIcon: Icon,

    primaryActionContainer: Stack,
    secondaryActionContainer: 'span',
    splitDivider: 'span'
  });

  return (
    <Slots.root
      type="button" // stack doesn't take in native button props
      role="button"
      onClick={split ? undefined : onClick}
      {...buttonProps}
      aria-disabled={disabled}
    >
      {split ? renderSplitButton(props, Slots) : renderButton(props, Slots)}

      {expanded && Menu && (
        <Slots.menu
          menuType={menuType}
          target={menuTarget}
          onDismiss={onMenuDismiss}
          items={[]}
          directionalHint={DirectionalHint.bottomRightEdge}
        />
      )}
    </Slots.root>
  );
};

function renderButton(props: IPropsWithChildren<IButtonViewProps>, Slots: ISlots<Required<IButtonSlots>>): JSX.Element {
  const { icon, content, children, menu: Menu } = props;

  return (
    <Slots.stack horizontal as="span" gap={8} verticalAlign="center" horizontalAlign="center" verticalFill>
      {icon && <Slots.icon />}
      {content && <Slots.content />}
      {children}
      {Menu && (
        <Stack.Item>
          <Slots.menuIcon iconName="ChevronDown" />
        </Stack.Item>
      )}
    </Slots.stack>
  );
}

function renderSplitButton(props: IPropsWithChildren<IButtonViewProps>, Slots: ISlots<Required<IButtonSlots>>): JSX.Element {
  const { icon, content, children, onClick, onSecondaryActionClick } = props;

  return (
    <Slots.stack horizontal as="span" gap={8} verticalAlign="stretch" horizontalAlign="center" verticalFill>
      <Slots.primaryActionContainer
        horizontal
        as="span"
        gap={8}
        verticalAlign="center"
        horizontalAlign="center"
        verticalFill
        onClick={onClick}
      >
        {icon && <Slots.icon />}
        {content && <Slots.content />}
        {children}
      </Slots.primaryActionContainer>

      <Slots.splitDivider />

      <Slots.secondaryActionContainer onClick={onSecondaryActionClick}>
        <Slots.menuIcon iconName="ChevronDown" />
      </Slots.secondaryActionContainer>
    </Slots.stack>
  );
}

function _deriveRootType(props: IButtonViewProps): keyof JSX.IntrinsicElements {
  return !!props.href ? 'a' : 'button';
}
