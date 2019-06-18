/** @jsx withSlots */
import { Stack, Text, KeytipData } from 'office-ui-fabric-react';
import { withSlots, getSlots } from '../../Foundation';
import { getNativeProps, anchorProperties, buttonProperties } from '../../Utilities';
import { Icon } from '../../utilities/factoryComponents';

import { IButtonComponent, IButtonProps, IButtonRootElements, IButtonSlots, IButtonViewProps } from './Button.types';

export const ButtonView: IButtonComponent['view'] = props => {
  const { icon, content, children, disabled, onClick, allowDisabledFocus, ariaLabel, keytipProps, buttonRef, ...rest } = props;

  const { slotType, htmlType, propertiesType } = _deriveRootType(props);

  // TODO: 'href' is anchor property... consider getNativeProps by root type
  const buttonProps = { ...getNativeProps(rest, propertiesType) };

  const Slots = getSlots<IButtonProps, IButtonSlots>(props, {
    root: slotType,
    stack: Stack,
    icon: Icon,
    content: Text
  });

  const _onClick = (ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>) => {
    if (!disabled && onClick) {
      onClick(ev);

      if (ev.defaultPrevented) {
        return;
      }
    }
  };

  const Button = (keytipAttributes?: any): JSX.Element => (
    <Slots.root
      type={htmlType}
      role="button"
      onClick={_onClick}
      {...buttonProps}
      {...keytipAttributes}
      disabled={disabled && !allowDisabledFocus}
      aria-disabled={disabled}
      tabIndex={!disabled || allowDisabledFocus ? 0 : undefined}
      aria-label={ariaLabel}
      ref={buttonRef}
    >
      <Slots.stack horizontal as="span" tokens={{ childrenGap: 8 }} verticalAlign="center" horizontalAlign="center" verticalFill>
        <Slots.icon />
        <Slots.content />
        {children}
      </Slots.stack>
    </Slots.root>
  );

  return keytipProps ? (
    <KeytipData keytipProps={keytipProps} disabled={disabled && !allowDisabledFocus}>
      {(keytipAttributes: any): JSX.Element => Button(keytipAttributes)}
    </KeytipData>
  ) : (
    Button()
  );
};

interface IButtonRootType {
  slotType: IButtonRootElements;
  htmlType: 'link' | 'button';
  propertiesType: string[];
}

function _deriveRootType(props: IButtonViewProps): IButtonRootType {
  return !!props.href
    ? { slotType: 'a', htmlType: 'link', propertiesType: anchorProperties }
    : { slotType: 'button', htmlType: 'button', propertiesType: buttonProperties };
}
