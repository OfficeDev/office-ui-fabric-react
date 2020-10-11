import * as React from 'react';
import VirtualizedStickyTree from './VirtualizedStickyTree';
import { PrototypeSection, ComponentPrototype } from '../Prototypes';
import { AutoSizer } from 'react-virtualized';
import { mergeThemes, Provider, teamsTheme } from '@fluentui/react-northstar';
import getItems from './itemsGenerator';

// generate items that suits the use case of teams channels next to chat window
const getTeamsChannelItems = (() => getItems(3, 30, 2))();

// generate items that suits the use case of attendees in a teams meeting
const getTeamsMeetingItems = (() => {
  const items = getItems(5, 20, 1);
  items.forEach(item => {
    if (item.items) {
      item.title = `${item.title} (${item.items.length})`;
    }
  });
  return items;
})();

export default () => (
  <PrototypeSection title="Virtualized StickyTree">
    <ComponentPrototype
      title="Virtualized Tree with sticky header"
      description="Tree with its content virtualized, and 1st level header sticky"
    >
      <Provider
        theme={mergeThemes(teamsTheme, {
          componentStyles: {
            TreeItem: {
              root: ({ props: p }) => ({
                width: '100%',
                // borderBottom: '1px solid grey',
                // boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: 'aliceblue',
                ...(p.level === 1 && {
                  background: 'orange',
                }),
              }),
            },
          },
        })}
      >
        <div
          style={{
            display: 'grid',
            gridGap: '20px',
            gridTemplateColumns: '1fr 1fr',
            height: '100vh',
          }}
        >
          <div>
            <AutoSizer>
              {({ height, width }) => (
                <VirtualizedStickyTree
                  stickyItemSize={20}
                  itemSize={40}
                  height={height}
                  width={width}
                  items={getTeamsChannelItems}
                />
              )}
            </AutoSizer>
          </div>
          <div>
            <VirtualizedStickyTree
              stickyItemSize={20}
              itemSize={30}
              height={500}
              width={200}
              items={getTeamsMeetingItems}
              displayChildrenNum={true}
            />
          </div>
        </div>
      </Provider>
    </ComponentPrototype>
  </PrototypeSection>
);
