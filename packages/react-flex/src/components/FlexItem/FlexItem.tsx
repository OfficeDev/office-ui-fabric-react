import * as React from 'react';
import { compose, createClassResolver, mergeProps } from '@fluentui/react-compose';
import { FlexItemProps, FlexItemSlots, FlexItemSlotProps } from './FlexItem.types';
import * as classes from './FlexItem.scss';
// import { useContext } from 'react';
// import { FlexContext } from '../Flex';

export const FlexItem = compose<'div', FlexItemProps, FlexItemProps, {}, {}>(
  (props, ref, options) => {
    // const disableShrink = useContext(FlexContext);
    const { children } = props;

    const { state } = options;
    const { slots, slotProps } = mergeProps<FlexItemProps, FlexItemProps, FlexItemSlots, FlexItemSlotProps>(
      state,
      options,
    );

    return <slots.root {...slotProps.root}>{children}</slots.root>;
  },
  {
    displayName: 'FlexItem',
    classes: createClassResolver(classes),
    handledProps: [
      'align',
      'fluid',
      'push',
      'tokens',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ] as any,
    overrideStyles: true,
  },
);

FlexItem.defaultProps = {
  as: 'div',
};
