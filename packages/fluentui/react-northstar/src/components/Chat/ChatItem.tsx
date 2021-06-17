import { Accessibility } from '@fluentui/accessibility';
import {
  ComponentWithAs,
  getElementType,
  useAccessibility,
  useFluentContext,
  useStyles,
  useTelemetry,
  useUnhandledProps,
} from '@fluentui/react-bindings';
import * as customPropTypes from '@fluentui/react-proptypes';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import { FluentComponentStaticProps, ShorthandValue } from '../../types';
import {
  ChildrenComponentProps,
  childrenExist,
  commonPropTypes,
  createShorthandFactory,
  rtlTextContainer,
  UIComponentProps,
} from '../../utils';
import { Box, BoxProps } from '../Box/Box';
import { ChatItemContextProvider } from './chatItemContext';
import { chatLayout, useChatLayoutContext } from './chatLayoutContext';

export interface ChatItemSlotClassNames {
  message: string;
  gutter: string;
}

export const chatItemClassName = 'ui-chat__item';
export const chatItemSlotClassNames: ChatItemSlotClassNames = {
  message: `${chatItemClassName}__message`,
  gutter: `${chatItemClassName}__gutter`,
};

export interface ChatItemProps extends UIComponentProps, ChildrenComponentProps {
  /**
   * Accessibility behavior if overridden by the user.
   */
  accessibility?: Accessibility<never>;

  /** Controls item's relation to other chat items. */
  attached?: boolean | 'top' | 'bottom';

  /** Chat items can have a gutter. */
  gutter?: ShorthandValue<BoxProps>;

  /** Indicates whether the content is positioned at the start or the end. */
  contentPosition?: 'start' | 'end';

  /** Chat density layout. Is automatically set by the Chat. */
  layout?: chatLayout;

  /** Chat items can have a message. */
  message?: ShorthandValue<BoxProps>;
}

export type ChatItemStylesProps = Pick<ChatItemProps, 'attached' | 'contentPosition' | 'layout'>;

/**
 * A ChatItem is container for single entity in Chat (e.g. message, notification, etc).
 */
export const ChatItem: ComponentWithAs<'li', ChatItemProps> & FluentComponentStaticProps<ChatItemProps> = props => {
  const context = useFluentContext();
  const { setStart, setEnd } = useTelemetry(ChatItem.displayName, context.telemetry);
  setStart();

  const chatLayout = useChatLayoutContext();
  const {
    accessibility,
    attached,
    children,
    className,
    contentPosition,
    design,
    gutter,
    layout = chatLayout,
    message,
    styles,
    variables,
  } = props;

  const getA11Props = useAccessibility(accessibility, {
    debugName: ChatItem.displayName,
    rtl: context.rtl,
  });
  const { classes, styles: resolvedStyles } = useStyles<ChatItemStylesProps>(ChatItem.displayName, {
    className: chatItemClassName,
    mapPropsToStyles: () => ({
      attached,
      layout,
      contentPosition,
    }),
    mapPropsToInlineStyles: () => ({
      className,
      design,
      styles,
      variables,
    }),
    rtl: context.rtl,
  });

  const renderContent = () => {
    const gutterElement = Box.create(gutter, {
      defaultProps: () =>
        getA11Props('gutter', {
          className: chatItemSlotClassNames.gutter,
          styles: resolvedStyles.gutter,
        }),
    });
    const messageElement = Box.create(message, {
      defaultProps: () =>
        getA11Props('message', {
          className: chatItemSlotClassNames.message,
          styles: resolvedStyles.message,
        }),
    });

    return (
      <ChatItemContextProvider value={{ attached }}>
        {contentPosition === 'start' && gutterElement}
        {messageElement}
        {contentPosition === 'end' && gutterElement}
      </ChatItemContextProvider>
    );
  };

  const ElementType = getElementType(props);
  const unhandledProps = useUnhandledProps(ChatItem.handledProps, props);

  const element = (
    <ElementType
      {...getA11Props('root', {
        className: classes.root,
        ...rtlTextContainer.getAttributes({ forElements: [children] }),
        ...unhandledProps,
      })}
    >
      {childrenExist(children) ? children : renderContent()}
    </ElementType>
  );
  setEnd();

  return element;
};

ChatItem.displayName = 'ChatItem';

ChatItem.defaultProps = {
  as: 'li',
  contentPosition: 'start',
  attached: false,
};
ChatItem.propTypes = {
  ...commonPropTypes.createCommon({ content: false }),
  attached: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf<'top' | 'bottom'>(['top', 'bottom'])]),
  contentPosition: PropTypes.oneOf(['start', 'end']),
  gutter: customPropTypes.itemShorthand,
  layout: PropTypes.oneOf<chatLayout>(['comfy', 'compact']),
  message: customPropTypes.itemShorthand,
};
ChatItem.handledProps = Object.keys(ChatItem.propTypes) as any;

ChatItem.create = createShorthandFactory({ Component: ChatItem, mappedProp: 'message' });
