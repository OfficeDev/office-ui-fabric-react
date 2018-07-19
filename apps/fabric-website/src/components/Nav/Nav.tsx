import * as React from 'react';

import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { IconButton, Button } from 'office-ui-fabric-react/lib/Button';
import { CollapsibleSection, CollapsibleSectionTitle } from '../../../../../packages/experiments/lib/components/CollapsibleSection';

import { getPathMinusLastHash } from '../../utilities/pageroute';
import * as stylesImport from './Nav.module.scss';
const styles: any = stylesImport;
import { INavProps, INavPage } from './Nav.types';
import { css } from 'office-ui-fabric-react/lib/Utilities';

export interface INavState {
  searchQuery: string;
  filterState: boolean;
}

export class Nav extends React.Component<INavProps, INavState> {
  constructor(props: INavProps) {
    super(props);

    this.state = {
      searchQuery: '',
      filterState: true
    };
  }

  public render(): JSX.Element {
    let { pages } = this.props;

    if (!pages) {
      return null;
    }

    const links = pages ? this._renderLinkList(pages, false) : null;

    return (
      <FocusZone>
        <nav className={styles.nav} role="navigation">
          {links}
        </nav>
      </FocusZone>
    );
  }

  private _renderLinkList(pages: INavPage[], isSubMenu: boolean): React.ReactElement<{}> {
    const { filterState } = this.state;

    const links: React.ReactElement<{}>[] = pages
      .filter(page => !page.hasOwnProperty('isHiddenFromMainNav'))
        .map((page: INavPage, linkIndex: number) => {
          if(page.isCategory && !filterState) {
            return (
              //TODO: Add filter here to alphabetized
              <span>
                {page.pages.map((innerPage:INavPage, innerLinkIndex) => this._renderLink(innerPage, innerLinkIndex))}
              </span>
            );
          }
          return (page.isCategory && filterState) ? this._renderCategory(page, linkIndex) : this._renderLink(page, linkIndex);
        });

    return (
      <ul className={css(styles.links, isSubMenu ? styles.isSubMenu : '')} aria-label="Main website navigation">
        {links}
      </ul>
    );
  }

  private _renderCategory(page: INavPage, categoryIndex: number): React.ReactElement<{}> {
    if(page.isCategory && page.pages) {
      return (
        <div key={categoryIndex} className={css(styles.section, _hasActiveChild(page) && styles.hasActiveChild)}>
          <CollapsibleSection
            titleAs={CollapsibleSectionTitle}
            titleProps={{ text: page.title }}
            defaultCollapsed={!_hasActiveChild(page)}
          >
            {page.pages.map((page: INavPage, indexNumber: number) => this._renderLink(page, indexNumber))}
          </CollapsibleSection>
        </div>
      );
    }
  }

  private _renderLink(page: INavPage, linkIndex: number): React.ReactElement<{}> {
    const ariaLabel = page.pages ? 'Hit enter to open sub menu, tab to access sub menu items.' : '';
    const title = page.title === 'Fabric' ? 'Home page' : page.title;
    const childLinks = page.pages ? this._renderLinkList(page.pages, true) : null;
    const { searchQuery } = this.state;
    const searchRegEx = new RegExp(searchQuery, 'i');
    const text = page.title;
    let linkText = <>{text}</>;

    // Highlight search query within link.
    if (!!searchQuery) {
      const matchIndex = text.toLowerCase().indexOf(searchQuery.toLowerCase());
      if (matchIndex >= 0) {
        const before = text.slice(0, matchIndex);
        const match = text.slice(matchIndex, matchIndex + searchQuery.length);
        const after = text.slice(matchIndex + searchQuery.length);
        const highlightMatch = <span className={styles.matchesFilter}>{match}</span>;
        linkText = (
          <>
            {before}
            {highlightMatch}
            {after}
          </>
        );
      }
    }

    return (
      <span>
        {this._getSearchBox(title)}
        <li
          className={css(
            styles.link,
            _isPageActive(page) ? styles.isActive : '',
            _hasActiveChild(page) ? styles.hasActiveChild : '',
            page.isHomePage ? styles.isHomePage : '',
            page.className ? styles[page.className] : ''
          )}
          key={linkIndex}
        >
          {!(page.isUhfLink && location.hostname !== 'localhost') &&
          (page.isFilterable ? searchRegEx.test(page.title) : true) && (
            <a href={page.url} onClick={this._onLinkClick} title={title} aria-label={ariaLabel}>
              {linkText}
            </a>
          )}
          {childLinks}
        </li>
      </span>
    );
  }

  private _onLinkClick = (ev: React.MouseEvent<{}>) => {
    if (this.props.onLinkClick) {
      return this.props.onLinkClick(ev);
    }
    this.setState({
      searchQuery: '',
      //expandAll: false
    });
  };

  private _getSearchBox(val) {
    if (val === 'Components') {
      return (
        <div style={{ display: 'flex' }}>
          <SearchBox
            placeholder="Filter Components"
            underlined={true}
            styles={{
              root: {
                marginBottom: '5px',
                width: '180px',
                backgroundColor: 'transparent',
              },
              iconContainer:{
                display: 'none'
              },
              field: {
                backgroundColor:'transparent',
                color: 'white'
              },
              clearButton: {
                selectors: {
                  '.ms-Button': {
                    color: 'white'
                  }
                }
              }
            }}
            onChange={this._onChangeQuery.bind(this)}
          />
          <IconButton
              iconProps={{iconName: 'filter'}}
              style={{ color:'white', marginLeft: '5px' }}
              menuIconProps={{iconName:''}}
              menuProps={{
                items: [
                  {
                    key: 'categories',
                    text: 'Categories',
                    iconProps: {iconName: 'org'},
                    onClick: this._setCategories.bind(this)
                  },
                  {
                    key: 'alphabetized',
                    text: 'A to Z',
                    iconProps: {iconName: 'Ascending'},
                    onClick: this._setAlphabetized.bind(this)
                  }
                ]
              }}
            />
        </div>
      );
    }
  }

  private _onChangeQuery(newValue): void {
    this.setState({
      searchQuery: newValue
    });
  }

  private _setCategories(): void {
    this.setState({
      filterState: true
    });
  }

  private _setAlphabetized(): void {
    this.setState({
      filterState: false
    });
  }
}

 // A tag used for resolving links.
const _urlResolver = document.createElement('a');

function _isPageActive(page: INavPage): boolean {
  if (!page.url) {
    return false;
  }
  _urlResolver.href = page.url || '';
  const target: string = _urlResolver.href;
  let path = location.href;

  if (location.protocol + '//' + location.host + location.pathname === target) {
    return true;
  }

  const hashCount = path.split('#').length - 1;
  if (hashCount > 1) {
    path = getPathMinusLastHash(path);
  }

  if (path === target) {
    return true;
  }

  return false;
}

function _hasActiveChild(page: INavPage): boolean {
  let hasActiveChild: boolean = false;

  if (page.pages) {
    page.pages.forEach(childPage => {
      if (_isPageActive(childPage)) {
        hasActiveChild = true;
      }

      // Is a grandchild page active?
      // @todo: This logic is the same as above. Could be simplified by moving
      //        into another function, which would support many levels of nav.
      if (childPage.pages) {
        childPage.pages.forEach(grandchildPage => {
          if (_isPageActive(grandchildPage)) {
            hasActiveChild = true;
          }
        });
      }
    });
  }

  return hasActiveChild;
}
