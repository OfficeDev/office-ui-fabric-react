import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { KeyCodes, getNativeProps, divProperties, classNamesFunction, warn } from '../../Utilities';
import { CommandButton } from '../../Button';
import { IPivotProps, IPivotStyleProps, IPivotStyles, IPivot } from './Pivot.types';
import { IPivotItemProps } from './PivotItem.types';
import { FocusZone, FocusZoneDirection, IFocusZone } from '../../FocusZone';
import { PivotItem } from './PivotItem';
import { Icon } from '../../Icon';
import { css } from 'office-ui-fabric-react';
import { useId, useControllableValue } from '@uifabric/react-hooks';
import { useOverflow } from './useOverflow';
import { IContextualMenuItem } from '../../ContextualMenu';

const getClassNames = classNamesFunction<IPivotStyleProps, IPivotStyles>({
  useStaticStyles: true,
});

const COMPONENT_NAME = 'Pivot';

type PivotLinkCollection = {
  links: IPivotItemProps[];
  keyToIndexMapping: { [key: string]: number };
  keyToTabIdMapping: { [key: string]: string };
};

const getTabId = (props: IPivotProps, pivotId: string, itemKey: string, index: number): string => {
  if (props.getTabId) {
    return props.getTabId(itemKey, index);
  }
  return pivotId + `-Tab${index}`;
};

// Gets the set of PivotLinks as array of IPivotItemProps
// The set of Links is determined by child components of type PivotItem
const getLinkItems = (props: IPivotProps, pivotId: string): PivotLinkCollection => {
  const result: PivotLinkCollection = {
    links: [],
    keyToIndexMapping: {},
    keyToTabIdMapping: {},
  };

  React.Children.forEach(React.Children.toArray(props.children), (child: React.ReactChild, index: number) => {
    if (isPivotItem(child)) {
      const { linkText, ...pivotItemProps } = child.props;
      const itemKey = child.props.itemKey || index.toString();
      result.links.push({
        headerText: linkText,
        ...pivotItemProps,
        itemKey: itemKey,
      });
      result.keyToIndexMapping[itemKey] = index;
      result.keyToTabIdMapping[itemKey] = getTabId(props, pivotId, itemKey, index);
    } else if (child) {
      warn('The children of a Pivot component must be of type PivotItem to be rendered.');
    }
  });
  return result;
};

const isPivotItem = (item: React.ReactNode): item is PivotItem => {
  return ((item as React.ReactElement)?.type as React.ComponentType)?.name === PivotItem.name;
};

export const PivotBase: React.FunctionComponent<IPivotProps> = React.forwardRef(
  (props: IPivotProps, ref: React.Ref<HTMLDivElement>) => {
    const { componentRef } = props;
    const pivotId: string = useId('Pivot');
    let linkCollection = getLinkItems(props, pivotId);
    const focusZoneRef = React.useRef<IFocusZone>(null);
    const divProps = getNativeProps<React.HTMLAttributes<HTMLDivElement>>(props, divProperties);
    const [selectedKey, setSelectedKey] = useControllableValue(props.selectedKey, props.defaultSelectedKey);
    let classNames: { [key in keyof IPivotStyles]: string };

    React.useImperativeHandle(componentRef as React.RefObject<IPivot>, () => ({
      focus: () => {
        focusZoneRef.current?.focus();
      },
    }));

    const renderLinkContent = (link: IPivotItemProps): JSX.Element => {
      const { itemCount, itemIcon, headerText } = link;
      return (
        <span className={classNames.linkContent}>
          {itemIcon !== undefined && (
            <span className={classNames.icon}>
              <Icon iconName={itemIcon} />
            </span>
          )}
          {headerText !== undefined && <span className={classNames.text}> {link.headerText}</span>}
          {itemCount !== undefined && <span className={classNames.count}> ({itemCount})</span>}
        </span>
      );
    };

    const renderPivotLink = (
      renderLinkCollection: PivotLinkCollection,
      link: IPivotItemProps,
      renderPivotLinkSelectedKey: string | null | undefined,
      className?: string,
    ): JSX.Element => {
      const { itemKey, headerButtonProps, onRenderItemLink } = link;
      const tabId = renderLinkCollection.keyToTabIdMapping[itemKey!];
      let linkContent: JSX.Element | null;
      const isSelected: boolean = renderPivotLinkSelectedKey === itemKey;

      if (onRenderItemLink) {
        linkContent = onRenderItemLink(link, renderLinkContent);
      } else {
        linkContent = renderLinkContent(link);
      }

      let contentString = link.headerText || '';
      contentString += link.itemCount ? ' (' + link.itemCount + ')' : '';
      // Adding space supplementary for icon
      contentString += link.itemIcon ? ' xx' : '';
      return (
        <CommandButton
          {...headerButtonProps}
          id={tabId}
          key={itemKey}
          className={css(className || classNames.link, isSelected && classNames.linkIsSelected)}
          onClick={onLinkClick.bind(this, itemKey)}
          onKeyDown={onKeyDown.bind(this, itemKey)}
          aria-label={link.ariaLabel}
          role="tab"
          aria-selected={isSelected}
          name={link.headerText}
          keytipProps={link.keytipProps}
          data-content={contentString}
        >
          {linkContent}
        </CommandButton>
      );
    };

    const onLinkClick = (itemKey: string, ev: React.MouseEvent<HTMLElement>): void => {
      ev.preventDefault();
      updateSelectedItem(itemKey, ev);
    };

    const onKeyDown = (itemKey: string, ev: React.KeyboardEvent<HTMLElement>): void => {
      if (ev.which === KeyCodes.enter) {
        ev.preventDefault();
        updateSelectedItem(itemKey);
      }
    };

    const updateSelectedItem = (itemKey: string, ev?: React.MouseEvent<HTMLElement>): void => {
      setSelectedKey(itemKey);
      linkCollection = getLinkItems(props, pivotId);
      if (props.onLinkClick && linkCollection.keyToIndexMapping[itemKey] >= 0) {
        const selectedIndex = linkCollection.keyToIndexMapping[itemKey];
        const item = React.Children.toArray(props.children)[selectedIndex];
        if (isPivotItem(item)) {
          props.onLinkClick(item, ev);
        }
      }
    };

    const renderPivotItem = (itemKey: string | undefined, isActive: boolean): JSX.Element | null => {
      if (props.headersOnly || !itemKey) {
        return null;
      }

      const index = linkCollection.keyToIndexMapping[itemKey];
      const selectedTabId = linkCollection.keyToTabIdMapping[itemKey];
      return (
        <div
          role="tabpanel"
          hidden={!isActive}
          key={itemKey}
          aria-hidden={!isActive}
          aria-labelledby={selectedTabId}
          className={classNames.itemContainer}
        >
          {React.Children.toArray(props.children)[index]}
        </div>
      );
    };

    const isKeyValid = (itemKey: string | null | undefined): boolean => {
      return itemKey !== undefined && itemKey !== null && linkCollection.keyToIndexMapping[itemKey] !== undefined;
    };

    const getSelectedKey = () => {
      if (isKeyValid(selectedKey)) {
        return selectedKey;
      }
      if (linkCollection.links.length) {
        return linkCollection.links[0].itemKey;
      }
      return undefined;
    };

    const { theme, linkSize, linkFormat } = props;
    classNames = getClassNames(props.styles!, {
      theme: theme!,
      linkSize,
      linkFormat,
    });

    const renderedSelectedKey = getSelectedKey();
    const items = linkCollection.links.map(l => renderPivotLink(linkCollection, l, renderedSelectedKey));

    const [overflowIndex, setOverflowIndex] = React.useState<number | undefined>(undefined);
    const overflowMenuButtonRef = React.useRef<HTMLElement>();
    const setOverflowMenuButtonRef = (button: React.Component | null) => {
      const node = ReactDOM.findDOMNode(button);
      overflowMenuButtonRef.current = node instanceof HTMLElement ? node : undefined;
    };

    const overflowMenuItems: IContextualMenuItem[] = [];
    if (overflowIndex !== undefined) {
      for (let i = overflowIndex; i < linkCollection.links.length; i++) {
        const link = linkCollection.links[i];
        overflowMenuItems.push({
          key: link.itemKey || `${i}`,
          onRender: renderPivotLink.bind(this, linkCollection, link, renderedSelectedKey, classNames.linkInMenu),
        });
      }
    }

    useOverflow(overflowMenuButtonRef, {
      onOverflowIndexChanged: setOverflowIndex,
      isPinned: (ele: HTMLElement) => ele.className.includes(classNames.linkIsSelected),
      setOverflowMenuButtonVisible: (ele: HTMLElement, visible: boolean) => {
        const menu = ele.querySelector(`.${classNames.overflowMenu}`);
        if (menu instanceof HTMLElement) {
          menu.style.visibility = visible ? 'visible' : 'hidden';
        }
      },
    });

    return (
      <div role="toolbar" {...divProps} ref={ref}>
        <FocusZone
          componentRef={focusZoneRef}
          direction={FocusZoneDirection.horizontal}
          className={classNames.root}
          role="tablist"
        >
          <div>
            {items}
            <CommandButton
              className={classNames.overflowMenu}
              ref={setOverflowMenuButtonRef}
              menuProps={{ items: overflowMenuItems, alignTargetEdge: true, doNotLayer: true }}
              menuIconProps={{ iconName: 'More' }}
            />
          </div>
        </FocusZone>
        {renderedSelectedKey &&
          linkCollection.links.map(
            link =>
              (link.alwaysRender === true || renderedSelectedKey === link.itemKey) &&
              renderPivotItem(link.itemKey, renderedSelectedKey === link.itemKey),
          )}
      </div>
    );
  },
);
PivotBase.displayName = COMPONENT_NAME;
