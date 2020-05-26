import { ChatMessageHeaderStylesProps } from '../../../../components/Chat/ChatMessageHeader';
import { ComponentSlotStylesPrepared, ICSSInJSStyle } from '@fluentui/styles';
import { ChatMessageVariables } from './chatMessageVariables';
import { screenReaderContainerStyles } from '../../../../utils/accessibility/Styles/accessibilityStyles';

const chatMessageHeaderStyles: ComponentSlotStylesPrepared<ChatMessageHeaderStylesProps, ChatMessageVariables> = {
  root: ({ props: p, theme: { siteVariables } }) => {
    return {
      width: '100%',
      // overflow: 'hidden',
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      lineHeight: siteVariables.lineHeightSmall,
      ...(p.hasReactionGroup && { justifyContent: 'space-between', lineHeight: siteVariables.lineHeightMedium }),
      ...((p.attached === 'bottom' || p.attached === true) &&
        !p.hasReactionGroup &&
        (screenReaderContainerStyles as ICSSInJSStyle)),
    };
  },
};

export default chatMessageHeaderStyles;
