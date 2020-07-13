import * as React from 'react';
import participants from './participantData';
import presenters from './presentersData';

import themeOverrides from './styles';
import { List, Provider, Tree, Text, Flex, Button, Input, Header, teamsDarkTheme } from '@fluentui/react-northstar';
import { CloseIcon, LinkIcon, TriangleDownIcon, TriangleEndIcon } from '@fluentui/react-icons-northstar';
import { PrototypeSection, ComponentPrototype } from '../Prototypes';

const ParticipantsList = () => <List navigable items={participants} />;

const PresentersList = () => <List navigable items={presenters} />;

const titleRenderer = (Component, { content, expanded, open, hasSubtree, ...restProps }) => (
  <Component expanded={expanded} hasSubtree={hasSubtree} {...restProps}>
    {expanded ? <TriangleDownIcon /> : hasSubtree ? <TriangleEndIcon /> : ''}
    <Text size="small" content={content}></Text>
  </Component>
);

const treeItems = [
  {
    id: 'participants',
    title: 'Currently in this meeting',
    items: [<ParticipantsList />],
  },
  {
    id: 'invite',
    title: 'Invite others from conversation (25)',
    items: [<PresentersList />],
  },
];

const RosterPrototype: React.FC = () => {
  return (
    <PrototypeSection title="Roster">
      <ComponentPrototype>
        <Provider theme={teamsDarkTheme}>
          <Provider theme={themeOverrides}>
            <Flex column variables={{ isContainer: true }}>
              <Flex space="between" padding="padding.medium" variables={{ isCallingRosterSectionTitle: true }}>
                <Header as="h3" content="Participants" />
                <Button variables={{ isCloseButton: true }} icon={<CloseIcon />} title="Close" iconOnly text />
              </Flex>
              <Flex padding="padding.medium" hAlign="center" variables={{ isRosterSearch: true }}>
                <Input fluid placeholder="Search..." />
                <Button variables={{ isSearchButton: true }} icon={<LinkIcon />} title="Search" iconOnly text />
              </Flex>
              <Tree
                items={treeItems}
                renderItemTitle={titleRenderer}
                defaultActiveItemIds={['participants', 'invite']}
              ></Tree>
            </Flex>
          </Provider>
        </Provider>
      </ComponentPrototype>
    </PrototypeSection>
  );
};

export default RosterPrototype;
