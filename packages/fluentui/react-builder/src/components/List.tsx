import * as _ from 'lodash';
import * as React from 'react';
import { Box, Input, Tree } from '@fluentui/react-northstar';
import { SearchIcon, TriangleDownIcon, TriangleEndIcon } from '@fluentui/react-icons-northstar';
import { ComponentInfo } from '../componentInfo/types';
import { componentInfoContext } from '../componentInfo/componentInfoContext';
import { EXCLUDED_COMPONENTS, COMPONENT_GROUP } from '../config';

export type ListProps = {
  onDragStart?: (componentInfo: ComponentInfo, e: MouseEvent) => void;
  style?: React.CSSProperties;
};

export const List: React.FunctionComponent<ListProps> = ({ onDragStart, style }) => {
  const [filter, setFilter] = React.useState<string>('');

  const filterRegexp = new RegExp(filter, 'i');

  const handleMouseDown = React.useCallback(
    componentInfo => e => {
      if (onDragStart) onDragStart(componentInfo, e);
    },
    [onDragStart],
  );

  const handleFilterChange = React.useCallback((e, { value }) => {
    setFilter(value);
  }, []);

  const [supportedComponents, unsupportedComponents] = React.useMemo(
    () =>
      _.partition(_.values(componentInfoContext.byDisplayName), ({ displayName }) => {
        return displayName.match(filterRegexp) && !EXCLUDED_COMPONENTS.some(name => name === displayName);
      }),
    [filterRegexp],
  );

  const titleComponent = (
    Component,
    {
      content,
      expanded,
      hasSubtree,
      treeSize,
      selectable,
      selectableParent,
      selectionIndicator,
      accessibility,
      ...rest
    },
  ) => {
    return (
      <div {...rest}>
        {expanded ? <TriangleDownIcon /> : <TriangleEndIcon />}
        {content}
      </div>
    );
  };

  const treeObj: Record<string, any> = React.useMemo(
    () =>
      Object.keys(COMPONENT_GROUP).reduce((acc, key) => {
        return {
          ...acc,
          [key]: {
            id: key,
            title: {
              children: titleComponent,
              content: key,
            },
            items: supportedComponents
              .filter(info => COMPONENT_GROUP[key].includes(info.isChild ? info.parentDisplayName : info.displayName))
              .map(info => ({
                id: info.displayName,
                title: (
                  <Box
                    key={info.displayName}
                    onMouseDown={handleMouseDown(info)}
                    styles={{
                      padding: '0.25rem 0.75rem',
                      cursor: 'pointer',
                      ':hover': {
                        background: '#ddd',
                        borderLeft: '2px solid #000',
                      },
                      borderLeft: '2px solid transparent',
                      marginLeft: '2px',
                    }}
                  >
                    {info.displayName.split('.')[1]}
                  </Box>
                ),
              })),
          },
        };
      }, {}),
    [handleMouseDown, supportedComponents],
  );
  const treeItems = Object.values(treeObj).filter(treeItem => treeItem.items.length > 0);

  return (
    <div
      role="complementary"
      aria-label="Available components"
      style={{
        ...style,
        boxShadow: '1px 0px 3px rgba(0, 0, 0, 0.2)',
        userSelect: 'none',
        marginTop: '1rem',
      }}
    >
      <Input
        fluid
        icon={<SearchIcon />}
        clearable
        placeholder="Search..."
        onChange={handleFilterChange}
        value={filter}
      />
      {filter ? <Tree items={treeItems} activeItemIds={treeItems.map(e => e.id)} /> : <Tree items={treeItems} />}
      {unsupportedComponents
        .filter(info => info.displayName.match(filterRegexp))
        .map(info => (
          <Box
            key={info.displayName}
            styles={{
              padding: '0.2em 0.5em',
              background: '#eee',
              color: '#888',
            }}
          >
            {info.displayName}
          </Box>
        ))}
    </div>
  );
};
