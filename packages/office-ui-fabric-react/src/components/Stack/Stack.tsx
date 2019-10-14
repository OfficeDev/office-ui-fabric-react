/** @jsx withSlots */
import * as React from 'react';
import { withSlots, createComponent, getSlots } from '../../Foundation';
import { getNativeProps, htmlElementProperties, warnDeprecations } from '../../Utilities';
import { styles } from './Stack.styles';
import { IStackComponent, IStackProps, IStackSlots } from './Stack.types';
import { StackItem } from './StackItem/StackItem';
import { IStackItemProps } from './StackItem/StackItem.types';

const StackItemType = (<StackItem /> as React.ReactElement<IStackItemProps>).type;

const StackView: IStackComponent['view'] = props => {
  const { as: RootType = 'div', disableShrink, wrap, ...rest } = props;

  warnDeprecations('Stack', props, {
    gap: 'tokens.childrenGap',
    maxHeight: 'tokens.maxHeight',
    maxWidth: 'tokens.maxWidth',
    padding: 'tokens.padding'
  });

  const stackChildren: (React.ReactChild | null)[] = React.Children.map(
    props.children,
    (child: React.ReactElement<IStackItemProps>, index: number) => {
      if (!child) {
        return null;
      }

      if (_isStackItem(child)) {
        const defaultItemProps: IStackItemProps = {
          shrink: !disableShrink
        };

        return React.cloneElement(child, {
          ...defaultItemProps,
          ...child.props
        });
      }

      return child;
    }
  );

  const nativeProps = getNativeProps<React.HTMLAttributes<HTMLDivElement>>(rest, htmlElementProperties);

  const Slots = getSlots<IStackProps, IStackSlots>(props, {
    root: RootType,
    inner: 'div'
  });

  if (wrap) {
    return (
      <Slots.root {...nativeProps}>
        <Slots.inner>{stackChildren}</Slots.inner>
      </Slots.root>
    );
  }

  return <Slots.root {...nativeProps}>{stackChildren}</Slots.root>;
};

function _isStackItem(item: React.ReactNode): item is StackItem {
  // In theory, we should be able to just check item.type === StackItemType.
  // However, under certain unclear circumstances (see https://github.com/OfficeDev/office-ui-fabric-react/issues/10785),
  // the object identity is different despite the function body being the same.
  return (
    !!item &&
    typeof item === 'object' &&
    !!(item as React.ReactElement).type &&
    (item as React.ReactElement).type.toString() === StackItemType.toString()
  );
}

const StackStatics = {
  Item: StackItem
};

export const Stack: React.StatelessComponent<IStackProps> & {
  Item: React.StatelessComponent<IStackItemProps>;
} = createComponent(StackView, {
  displayName: 'Stack',
  styles,
  statics: StackStatics
});

export default Stack;
