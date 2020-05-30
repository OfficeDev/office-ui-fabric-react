import * as React from 'react';
import { IProcessedStyleSet, ITheme } from '../../Styling';
import { classNamesFunction, getRTL, composeRenderFunction } from '../../Utilities';
import { SelectionMode } from '../../utilities/selection/index';
import { Check } from '../../Check';
import { Icon } from '../../Icon';
import { GroupSpacer } from './GroupSpacer';
import { Spinner } from '../../Spinner';
import { FocusZone, FocusZoneDirection } from '../../FocusZone';
import {
  IGroupHeaderStyleProps,
  IGroupHeaderStyles,
  IGroupHeaderProps,
  IGroupHeaderCheckboxProps,
} from './GroupHeader.types';

const getClassNames = classNamesFunction<IGroupHeaderStyleProps, IGroupHeaderStyles>();

export interface IGroupHeaderState {
  isCollapsed: boolean;
  isLoadingVisible: boolean;
}

export class GroupHeaderBase extends React.Component<IGroupHeaderProps, IGroupHeaderState> {
  public static defaultProps: IGroupHeaderProps = {
    expandButtonProps: { 'aria-label': 'expand collapse group' },
  };

  private _classNames: IProcessedStyleSet<IGroupHeaderStyles>;

  constructor(props: IGroupHeaderProps) {
    super(props);

    this.state = {
      isCollapsed: (this.props.group && this.props.group.isCollapsed) as boolean,
      isLoadingVisible: false,
    };
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public UNSAFE_componentWillReceiveProps(newProps: IGroupHeaderProps): void {
    if (newProps.group) {
      const newCollapsed = newProps.group.isCollapsed;
      const isGroupLoading = newProps.isGroupLoading;
      const newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(newProps.group);

      this.setState({
        isCollapsed: newCollapsed || false,
        isLoadingVisible: newLoadingVisible || false,
      });
    }
  }

  public render(): JSX.Element | null {
    const {
      group,
      groupLevel,
      viewport,
      selectionMode,
      loadingText,
      // eslint-disable-next-line deprecation/deprecation
      isSelected = false,
      selected = false,
      indentWidth,
      onRenderTitle = this._onRenderTitle,
      onRenderGroupHeaderCheckbox,
      isCollapsedGroupSelectVisible = true,
      expandButtonProps,
      expandButtonIcon,
      selectAllButtonProps,
      theme,
      styles,
      className,
      groupedListId,
      compact,
      ariaPosInSet,
      ariaSetSize,
      useFastIcons,
    } = this.props;

    const defaultCheckboxRender = useFastIcons ? this._fastDefaultCheckboxRender : this._defaultCheckboxRender;

    const onRenderCheckbox = onRenderGroupHeaderCheckbox
      ? composeRenderFunction(onRenderGroupHeaderCheckbox, defaultCheckboxRender)
      : defaultCheckboxRender;

    const { isCollapsed, isLoadingVisible } = this.state;

    const canSelectGroup = selectionMode === SelectionMode.multiple;
    const isSelectionCheckVisible = canSelectGroup && (isCollapsedGroupSelectVisible || !(group && group.isCollapsed));
    const currentlySelected = selected || isSelected;

    const isRTL = getRTL(theme);

    this._classNames = getClassNames(styles, {
      theme: theme!,
      className,
      selected: currentlySelected,
      isCollapsed,
      compact,
    });

    if (!group) {
      return null;
    }
    return (
      <div
        className={this._classNames.root}
        style={viewport ? { minWidth: viewport.width } : {}}
        onClick={this._onHeaderClick}
        aria-expanded={!group.isCollapsed}
        aria-label={group.ariaLabel || group.name}
        aria-level={groupLevel !== undefined ? groupLevel + 1 : undefined}
        aria-setsize={ariaSetSize}
        aria-posinset={ariaPosInSet}
        data-is-focusable={true}
      >
        <FocusZone className={this._classNames.groupHeaderContainer} direction={FocusZoneDirection.horizontal}>
          {isSelectionCheckVisible ? (
            <button
              type="button"
              className={this._classNames.check}
              role="checkbox"
              aria-checked={currentlySelected}
              data-selection-toggle={true}
              onClick={this._onToggleSelectGroupClick}
              {...selectAllButtonProps}
            >
              {onRenderCheckbox({ checked: currentlySelected, theme }, onRenderCheckbox)}
            </button>
          ) : (
            selectionMode !== SelectionMode.none && <GroupSpacer indentWidth={indentWidth} count={1} />
          )}

          <GroupSpacer indentWidth={indentWidth} count={groupLevel!} />

          <div className={this._classNames.dropIcon}>
            <Icon iconName="Tag" />
          </div>
          <button
            type="button"
            className={this._classNames.expand}
            onClick={this._onToggleCollapse}
            aria-expanded={!group.isCollapsed}
            aria-controls={group && !group.isCollapsed ? groupedListId : undefined}
            {...expandButtonProps}
          >
            <Icon
              className={this._classNames.expandIsCollapsed}
              iconName={expandButtonIcon || (isRTL ? 'ChevronLeftMed' : 'ChevronRightMed')}
            />
          </button>

          {onRenderTitle(this.props, this._onRenderTitle)}

          {isLoadingVisible && <Spinner label={loadingText} />}
        </FocusZone>
      </div>
    );
  }

  private _onToggleCollapse = (ev: React.MouseEvent<HTMLElement>): void => {
    const { group, onToggleCollapse, isGroupLoading } = this.props;
    const { isCollapsed } = this.state;

    const newCollapsed = !isCollapsed;
    const newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(group!);

    this.setState({
      isCollapsed: newCollapsed,
      isLoadingVisible: newLoadingVisible as boolean,
    });
    if (onToggleCollapse) {
      onToggleCollapse(group!);
    }

    ev.stopPropagation();
    ev.preventDefault();
  };

  private _onToggleSelectGroupClick = (ev: React.MouseEvent<HTMLElement>): void => {
    const { onToggleSelectGroup, group } = this.props;

    if (onToggleSelectGroup) {
      onToggleSelectGroup(group!);
    }

    ev.preventDefault();
    ev.stopPropagation();
  };

  private _onHeaderClick = (): void => {
    const { group, onGroupHeaderClick, onToggleSelectGroup } = this.props;

    if (onGroupHeaderClick) {
      onGroupHeaderClick(group!);
    } else if (onToggleSelectGroup) {
      onToggleSelectGroup(group!);
    }
  };

  private _defaultCheckboxRender(checkboxProps: IGroupHeaderCheckboxProps) {
    return <Check checked={checkboxProps.checked} />;
  }

  private _fastDefaultCheckboxRender(checkboxProps: IGroupHeaderCheckboxProps) {
    return <FastCheck theme={checkboxProps.theme} checked={checkboxProps.checked} />;
  }

  private _onRenderTitle = (props: IGroupHeaderProps): JSX.Element | null => {
    const { group } = props;

    if (!group) {
      return null;
    }

    return (
      <div className={this._classNames.title}>
        <span>{group.name}</span>
        {
          // hasMoreData flag is set when grouping is throttled by SPO server which in turn resorts to regular
          // sorting to simulate grouping behaviors, in which case group count is the number of items returned
          // so far. That's the reason we need to use "+" to show we might have more items than count
          // indicates.
        }
        <span className={this._classNames.headerCount}>
          ({group.count}
          {group.hasMoreData && '+'})
        </span>
      </div>
    );
  };
}

const FastCheck = React.memo((props: { theme?: ITheme; checked?: boolean; className?: string }) => {
  return <Check theme={props.theme} checked={props.checked} className={props.className} useFastIcons />;
});
