import { Avatar, Chat, ChatItemProps, ShorthandCollection } from '@fluentui/react-northstar';
import * as React from 'react';
import { LikeIcon, MoreIcon } from '@fluentui/react-icons-northstar';

const actionMenu = {
  iconOnly: true,
  inline: false,
  items: [
    { key: 'like', className: 'likeIcon', icon: <LikeIcon />, title: 'Like' },
    { key: 'more', className: 'moreIcon', icon: <MoreIcon />, title: 'More' },
  ],
};

const items: ShorthandCollection<ChatItemProps> = [
  {
    attached: 'top',
    contentPosition: 'end',
    message: (
      <Chat.Message actionMenu={actionMenu} content="Hello" author="Cecil Folk" timestamp="Yesterday, 10:15 PM" mine />
    ),
    key: 'message-0',
  },
  {
    gutter: <Avatar image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobinCounts.jpg" />,
    message: (
      <Chat.Message actionMenu={actionMenu} content="Hi" author="Robin Counts" timestamp="Yesterday, 10:15 PM" />
    ),
    key: 'message-1',
  },
];

const ChatExample = () => <Chat items={items} />;

export default ChatExample;
