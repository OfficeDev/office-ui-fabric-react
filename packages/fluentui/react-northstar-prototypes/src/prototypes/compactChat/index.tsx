import * as React from 'react';

import { ComponentPrototype, PrototypeSection } from '../Prototypes';
import { CompactChatWithAuthor } from './CompactChatWithAuthor';
import { CompactChatWithReactions } from './CompactChatWithReactions';
import { CompactChatWithReadReceipts } from './CompactChatWithReadReceipts';
import { CompactChatWithBadges } from './CompactChatWithBadges';
import { CompactChatErrorState } from './CompactChatErrorState';
import { CompactChatWithDetails } from './CompactChatWithDetails';
import { CompactChatSlots } from './CompactChatSlots';

export default () => (
  <PrototypeSection title="Compact chat density">
    <ComponentPrototype
      title="Compact chat messages"
      description="Compact chat messages have the author floating in the text"
    >
      <CompactChatWithAuthor />
    </ComponentPrototype>
    <ComponentPrototype
      title="Compact chat messages with reactions and action menu"
      description="Chat messages can have reactions and an action menu on hover"
    >
      <CompactChatWithReactions />
    </ComponentPrototype>
    <ComponentPrototype
      title="Compact chat messages with details"
      description="Chat messages can show edited and translated status"
    >
      <CompactChatWithDetails />
    </ComponentPrototype>
    <ComponentPrototype
      title="Compact chat messages with read receipt"
      description="Chat messages can show sent and read receipt status"
    >
      <CompactChatWithReadReceipts />
    </ComponentPrototype>
    <ComponentPrototype
      title="Compact chat messages with badges"
      description="Chat messages can have badges for importance and at-mentions"
    >
      <CompactChatWithBadges />
    </ComponentPrototype>
    <ComponentPrototype
      title="Compact chat messages with error state"
      description="Chat messages can display an error state if sending failed"
    >
      <CompactChatErrorState />
    </ComponentPrototype>
    <ComponentPrototype
      title="Compact chat messages slots"
      description="Slots are positioned differently in compact compared to cozy messages"
    >
      <CompactChatSlots />
    </ComponentPrototype>
  </PrototypeSection>
);
