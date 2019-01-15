/** @jsx withSlots */
import * as React from 'react';
import { withSlots, createStatelessComponent, getSlots } from '../../Foundation';
import StackItem from './StackItem/StackItem';
import { IStackItemProps } from './StackItem/StackItem.types';
import { IStackComponent, IStackProps, IStackSlots, IStackStyles } from './Stack.types';
import { styles } from './Stack.styles';
import { mergeStyles } from '../../Styling';
import { getNativeProps, htmlElementProperties } from '../../Utilities';

const StackItemType = <StackItem />.type;

const view: IStackComponent['view'] = props => {
  const { as: RootType = 'div', shrinkItems, wrap, ...rest } = props;

  const stackChildren: (React.ReactChild | null)[] = React.Children.map(
    props.children,
    (child: React.ReactElement<IStackItemProps>, index: number) => {
      if (!child) {
        return null;
      }

      const defaultItemProps: IStackItemProps = {
        shrink: shrinkItems,
        className: child.props ? child.props.className : undefined
      };

      if (child.type === StackItemType) {
        // If child is a StackItem, we need to pass down the className of ITS first child to the StackItem for mergeStylesSet to work
        // TODO: how will this be affected by mergeStyleSets being removed from createComponent?
        const children = child.props ? child.props.children : undefined;
        const stackItemFirstChildren = React.Children.toArray(children) as React.ReactElement<{ className?: string }>[];
        const stackItemFirstChild = stackItemFirstChildren && stackItemFirstChildren[0];

        // pass down both the className on the StackItem as well as the className on its first child
        let mergedClassName = defaultItemProps.className;
        if (stackItemFirstChild && stackItemFirstChild.props && stackItemFirstChild.props.className) {
          mergedClassName = mergeStyles(mergedClassName, stackItemFirstChild.props.className);
        }

        return React.cloneElement(child, {
          ...defaultItemProps,
          ...child.props,
          className: mergedClassName
        });
      }

      return child;
    }
  );

  const nativeProps = getNativeProps(rest, htmlElementProperties);

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

const StackStatics = {
  Item: StackItem,
  defaultProps: {}
};
type IStackStatics = typeof StackStatics;

export const Stack: React.StatelessComponent<IStackProps> & {
  Item: React.StatelessComponent<IStackItemProps>;
} = createStatelessComponent<IStackProps, IStackStyles, {}, IStackStatics>({
  displayName: 'Stack',
  styles,
  view,
  statics: StackStatics
});

export default Stack;
