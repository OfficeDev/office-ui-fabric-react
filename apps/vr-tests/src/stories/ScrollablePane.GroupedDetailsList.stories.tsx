/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Screener, { Steps } from 'screener-storybook/src/screener';
import { storiesOf } from '@storybook/react';
import { FabricDecorator } from '../utilities';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import {
  DetailsList,
  DetailsListLayoutMode,
  IDetailsHeaderProps,
  Selection,
  IColumn,
  ConstrainMode,
  IDetailsFooterProps,
  DetailsRow,
  IGroup
} from 'office-ui-fabric-react/lib/DetailsList';
import { IRenderFunction } from 'office-ui-fabric-react/lib/Utilities';
import { TooltipHost, ITooltipHostProps } from 'office-ui-fabric-react/lib/Tooltip';
import { ScrollablePane, IScrollablePane, ScrollbarVisibility } from 'office-ui-fabric-react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { lorem } from 'office-ui-fabric-react/lib/utilities/exampleData';
import { SelectionMode } from 'office-ui-fabric-react/lib/utilities/selection/index';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { getTheme } from 'office-ui-fabric-react/lib/Styling';
import { createGroups } from 'office-ui-fabric-react/lib/utilities/exampleData';

const columnMidWidth = 200;
const columnMaxWidth = 300;
const _columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Test 1',
    fieldName: 'test1',
    minWidth: columnMidWidth,
    maxWidth: columnMaxWidth,
    isResizable: true,
    ariaLabel: 'Operations for name'
  },
  {
    key: 'column2',
    name: 'Test 2',
    fieldName: 'test2',
    minWidth: columnMidWidth,
    maxWidth: columnMaxWidth,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
  {
    key: 'column3',
    name: 'Test 3',
    fieldName: 'test3',
    minWidth: columnMidWidth,
    maxWidth: columnMaxWidth,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
  {
    key: 'column4',
    name: 'Test 4',
    fieldName: 'test4',
    minWidth: columnMidWidth,
    maxWidth: columnMaxWidth,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
  {
    key: 'column5',
    name: 'Test 5',
    fieldName: 'test5',
    minWidth: columnMidWidth,
    maxWidth: columnMaxWidth,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
  {
    key: 'column6',
    name: 'Test 6',
    fieldName: 'test6',
    minWidth: columnMidWidth,
    maxWidth: columnMaxWidth,
    isResizable: true,
    ariaLabel: 'Operations for value'
  }
];

interface IItem {
  key: number;
  test1: string;
  test2: string;
  test3: string;
  test4: string;
  test5: string;
  test6: string;
}
let _groups: IGroup[];
class ScrollablePaneDetailsListStory extends React.Component<
  {},
  {
    items: {}[];
  }
  > {
  private _scrollablePane = React.createRef<IScrollablePane>();
  private _selection: Selection;
  private readonly _items: IItem[];

  constructor(props: {}) {
    super(props);

    const items: IItem[] = [];
    _groups = createGroups(100, 0, 0, 1, 0, '', true);
    // Populate with items for demos.
    for (let i = 0; i < 100; i++) {
      items.push({
        key: i,
        test1: i === 0 ? lorem(7) : lorem(2),
        test2: lorem(2),
        test3: lorem(2),
        test4: lorem(2),
        test5: lorem(2),
        test6: lorem(2)
      });
    }

    this._items = items;

    this.state = {
      items: items
    };
  }

  public render(): JSX.Element {
    const { items } = this.state;

    return (
      <div
        style={{
          height: '80vh',
          position: 'relative',
          maxHeight: 'inherit',
          width: '800px'
        }}
      >
        <Fabric>
          <ScrollablePane componentRef={this._scrollablePane} scrollbarVisibility={ScrollbarVisibility.auto} style={{ maxWidth: '800px', border: '1px solid #edebe9' }}>
            {/* providing backgroundColor as no parent element for the test has this property defined */}
            <Sticky stickyPosition={StickyPositionType.Header} stickyBackgroundColor={getTheme().palette.white}>
              <h1 style={{ margin: '0px' }}>Item List</h1>
            </Sticky>
            <MarqueeSelection selection={this._selection}>
              <DetailsList
                items={items}
                groups={_groups}
                columns={_columns}
                setKey="set"
                layoutMode={DetailsListLayoutMode.fixedColumns}
                constrainMode={ConstrainMode.unconstrained}
                onRenderDetailsHeader={onRenderDetailsHeader}
                onRenderDetailsFooter={onRenderDetailsFooter}
                selection={this._selection}
                selectionPreservedOnEmptyClick={true}
              />
            </MarqueeSelection>
          </ScrollablePane>
        </Fabric>
      </div>
    );
  }
}

function onRenderDetailsHeader(props: IDetailsHeaderProps, defaultRender?: IRenderFunction<IDetailsHeaderProps>): JSX.Element {
  return (
    <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced={true}>
      {defaultRender!({
        ...props,
        onRenderColumnHeaderTooltip: (tooltipHostProps: ITooltipHostProps) => <TooltipHost {...tooltipHostProps} />
      })}
    </Sticky>
  );
}

function onRenderDetailsFooter(props: IDetailsFooterProps, defaultRender?: IRenderFunction<IDetailsFooterProps>): JSX.Element {
  return (
    <Sticky stickyPosition={StickyPositionType.Footer} isScrollSynced={true}>
      <div style={{ display: 'inline-block' }}>
        <DetailsRow
          columns={props.columns}
          item={{
            key: 'footer',
            test1: 'Total 1',
            test2: 'Total 2',
            test3: 'Total 3',
            test4: 'Total 4',
            test5: 'Total 5',
            test6: 'Total 6'
          }}
          itemIndex={-1}
          selection={props.selection}
          selectionMode={(props.selection && props.selection.mode) || SelectionMode.none}
          viewport={props.viewport}
        />
      </div>
    </Sticky>
  );
}

function hasText(item: IItem, text: string): boolean {
  return `${item.test1}|${item.test2}|${item.test3}|${item.test4}|${item.test5}|${item.test6}`.indexOf(text) > -1;
}

storiesOf('ScrollablePane Grouped Details List', module)
  .addDecorator(FabricDecorator)
  .addDecorator(story => (
    <Screener
      steps={new Screener.Steps()
        .snapshot('default: scrollbars should be visible', { cropTo: '.testWrapper' })
        .executeScript("document.getElementsByClassName('ms-ScrollablePane--contentContainer')[0].scrollTop = 100")
        .snapshot('Scrollbars visibility when header is sticky', { cropTo: '.testWrapper' })
        .executeScript("document.getElementsByClassName('ms-ScrollablePane--contentContainer')[0].scrollTop = 99999")
        .snapshot('Scrollbars visibility after scrolling down to the bottom', { cropTo: '.testWrapper' })
        .executeScript("document.getElementsByClassName('ms-ScrollablePane--contentContainer')[0].scrollTop = 0")
        .snapshot('Scrollbars visibility after scrolling up to the top', { cropTo: '.testWrapper' })
        .executeScript("document.getElementsByClassName('ms-ScrollablePane--contentContainer')[0].scrollLeft = 100")
        .snapshot('Scrollbars visibilty after scrolling left', { cropTo: '.testWrapper' })
        .executeScript("document.getElementsByClassName('ms-ScrollablePane--contentContainer')[0].scrollTop = 100")
        .snapshot('Scrollbars visibility when header is sticky and scrollLeft is non-zero', { cropTo: '.testWrapper' })
        .executeScript("document.getElementsByClassName('ms-ScrollablePane--contentContainer')[0].scrollTop = 99999")
        .snapshot('Scrollbars visibility after scrolling down to the bottom with non-zero scrollLeft', { cropTo: '.testWrapper' })
        .executeScript("document.getElementsByClassName('ms-ScrollablePane--contentContainer')[0].scrollTop = 0")
        .snapshot('Scrollbars visibility after scrolling up to the top with non-zero scrollLeft', { cropTo: '.testWrapper' })
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory('ScrollablePane scrollbars visibility', () => (
    <ScrollablePaneDetailsListStory />
  ));
