/** @jsx createElementWrapper */
import { ContextualMenu } from 'office-ui-fabric-react';
import { createElementWrapper, getSlots } from '../../Foundation';
import { Stack } from '../../Stack';
import { createTheme } from '../../Styling';
import { getNativeProps, buttonProperties } from '../../Utilities';
import { Icon, Text } from '../../utilities/factoryComponents';

import { IButtonComponent, IButtonSlots, IButtonViewProps } from './Button.types';
import { Button } from './Button';

export const ButtonView: IButtonComponent['view'] = props => {
  const { menu: Menu, children, content, icon, expanded, disabled, onMenuDismiss, menuTarget, renderTestButton, ...rest } = props;

  // TODO: 'href' is anchor property... consider getNativeProps by root type
  // const buttonProps = { ...getNativeProps(rest, buttonProperties), href: props.href };
  // const buttonProps = { ...getNativeProps(props, ['button'], ['icon']) };
  const buttonProps = { ...getNativeProps(rest, buttonProperties) };

  // TODO: is there a way to avoid use of 'typeof props' to make this cleaner?
  const Slots = getSlots<typeof props, IButtonSlots>(props, {
    root: _deriveRootType(props),
    stack: Stack,
    icon: Icon,
    content: Text,
    menu: ContextualMenu,
    menuIcon: Icon,
    button: Button
  });

  // TODO: Callout: It doesn't make sense for a component to ever pass a theme to a Slot, right?
  //        How could a component's theme ever override global/contextual theme? It doesn't make sense.
  //        The only thing that can override a global/contextual theme is a user's slot props object for a given slot.
  //        If component's can't pass theme, using testTheme here should cause a type error when passed to a Slot.
  const testTheme = createTheme({
    semanticColors: {
      buttonText: 'orange'
    }
  });

  // TODO: David's codepen automatically doesn't show an icon without having to check for icon prop presence
  // TODO: determine final arguments for Stack slot based on workarounds in styles and differences in codepen
  // TODO: checks for content should be moved to component (i.e. Icon shouldn't render anything if it doesn't have input like iconName)
  return (
    <Slots.root
      type="button" // stack doesn't take in native button props
      role="button"
      {...buttonProps}
      aria-disabled={disabled}
    >
      <Slots.stack horizontal as="span" gap={8} verticalAlign="center" horizontalAlign="center" verticalFill>
        {icon && <Slots.icon theme={testTheme} />}
        {content && <Slots.content />}
        {renderTestButton && <Slots.button />}
        {children}
        {Menu && (
          <Stack.Item>
            <Slots.menuIcon iconName="ChevronDown" />
          </Stack.Item>
        )}
      </Slots.stack>
      {expanded && Menu && <Slots.menu target={menuTarget} onDismiss={onMenuDismiss} items={[]} />}
    </Slots.root>
  );
};

// TODO: test with split button approach.
//        should split button be another component?
//        can Button's slots be manipulated to create an HOC split button?
// {split && (
// <Slot as='span' userProps={splitContainer}>
//   <Slot as={Divider} userProps={divider} />
//   <Slot as={Icon} userProps={menuChevron} />
// </Slot>
// )}

function _deriveRootType(props: IButtonViewProps): keyof JSX.IntrinsicElements {
  return !!props.href ? 'a' : 'button';
}
