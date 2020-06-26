import * as React from 'react';
import { ButtonProps, ButtonSlots, ButtonSlotProps } from './Button.types';
import { compose, mergeProps } from '@fluentui/react-compose';
import { useButton } from './useButton';

export const ButtonBase = compose<'button', ButtonProps, ButtonProps, {}, {}>(
  (props, ref, options) => {
    const { state } = options;
    const { children } = state;
    const { slots, slotProps } = mergeProps<ButtonProps, ButtonProps, ButtonSlots, ButtonSlotProps>(state, options);

    return (
      <slots.root ref={ref} {...slotProps.root}>
        {props.loading && <slots.loader {...slotProps.loader} />}
        {props.icon && props.iconPosition !== 'after' && <slots.icon {...slotProps.icon} />}
        {!props.iconOnly && <span>{children}</span>}
        {props.icon && props.iconPosition === 'after' && <slots.icon {...slotProps.icon} />}
      </slots.root>
    );
  },
  {
    displayName: 'ButtonBase',
    handledProps: [
      'circular',
      'fluid',
      'iconOnly',
      'iconPosition',
      'inverted',
      'loader',
      'loading',
      'primary',
      'secondary',
      'size',
      'tokens',
    ],
    slots: {
      icon: 'span',
      loader: 'span',
    },
    state: useButton,
  },
);

ButtonBase.defaultProps = {
  as: 'button',
};
