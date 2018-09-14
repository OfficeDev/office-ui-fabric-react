import * as React from 'react';
import { INavGroupProps, INavStyles, INavLink, INavStyleProps } from './Nav.types';
import { NavLink } from './NavLink';
import { NavLinkGroup } from './NavLinkGroup';
import { getStyles } from './Nav.styles';
import { classNamesFunction } from 'office-ui-fabric-react/lib/Utilities';

const getClassNames = classNamesFunction<INavStyleProps, INavStyles>();
const classNames = getClassNames(getStyles);

class NavigationGroup extends React.Component<INavGroupProps, {}> {
  constructor(props: INavGroupProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { groupIndex, groupName, links } = this.props;
    const nestingLevel = 0;

    return (
      <ul role="list" key={groupIndex}>
        {this._renderGroupName(groupName, groupIndex)}
        {links.map((link: INavLink, linkIndex: number) => {
          return this._renderLinks(link, nestingLevel, linkIndex);
        })}
      </ul>
    );
  }

  private _renderGroupName(groupName: string | undefined, groupIndex: number): React.ReactElement<{}> | null {
    // The default group heading will not show even if it is supplied
    // because it is redundant
    if (!groupName || groupIndex === 0) {
      return null;
    }

    const { isNavCollapsed } = this.props;

    return (
      <>
        <li className={classNames.navGroupDivider} />
        {!isNavCollapsed ? <li className={classNames.navGroupTitle}>{groupName}</li> : null}
      </>
    );
  }

  private _renderLinks(link: INavLink, nestingLevel: number, linkIndex: number): React.ReactElement<{}> | null {
    if (!link) {
      return null;
    }

    const { isNavCollapsed } = this.props;
    const keyIndex = nestingLevel.toString() + linkIndex.toString();

    return (
      <>
        {!!link.links && link.links ? (
          <li role="listitem" key={keyIndex}>
            <NavLinkGroup key={keyIndex} isExpanded={link.isExpanded} isNavCollapsed={isNavCollapsed} link={link} />
          </li>
        ) : (
          <li role="listitem" key={keyIndex}>
            <NavLink
              key={keyIndex}
              isNavCollapsed={isNavCollapsed}
              id={link.name}
              name={link.name}
              href={link.url}
              target={link.target}
              onClick={link.onClick}
              ariaExpanded={!isNavCollapsed}
              dataValue={link.name}
              ariaLabel={link.ariaLabel}
              primaryIconName={link.icon}
              hasNestedMenu={false}
              isNested={false}
              role="menuitem"
            />
          </li>
        )}
      </>
    );
  }
}

export const NavGroup = NavigationGroup;
