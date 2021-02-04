// TODO: move to react-docsite-components once Site moves

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { setBaseUrl, ThemeProvider } from '@fluentui/react';
import { initializeIcons } from '@fluentui/font-icons-mdl2/lib/index';
import {
  INavPage,
  ISiteDefinition,
  currentFabricBreakpoint,
  handleRedirects,
} from '@fluentui/react-docsite-components/lib/index2';
import { Route, Router } from '@fluentui/react-docsite-components';
import { Site } from '../components/Site/index';
import { hasUHF, isLocal } from './location';

// Polyfill needed by FeedbackList
import 'whatwg-fetch';

import '../styles/styles.scss';

const corePackageData = require<any>('office-ui-fabric-core/package.json');
const corePackageVersion: string = (corePackageData && corePackageData.version) || '9.2.0';

// Initialize
initializeIcons();

declare let Flight: any; // Flight & CDN configuration
declare let __webpack_public_path__: string; // eslint-disable-line @typescript-eslint/naming-convention

if (!isLocal && Flight.baseCDNUrl) {
  __webpack_public_path__ = Flight.baseCDNUrl;
}

setBaseUrl(process.env.NODE_ENV !== 'production' ? './dist/' : __webpack_public_path__);

let rootElement: HTMLElement;

export function createSite<TPlatforms extends string>(
  siteDefinition: ISiteDefinition<TPlatforms>,
  defaultRouteComponent?: React.ComponentType | React.ComponentType[],
) {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    _onLoad();
  } else {
    window.onload = _onLoad;
  }
  window.onunload = _onUnload;

  function _getBreakpoint(): void {
    currentFabricBreakpoint();
  }

  function _createRoutes(pages: INavPage<TPlatforms>[]): JSX.Element[] {
    let routes: JSX.Element[] = [];
    pages.forEach((page: INavPage<TPlatforms>) => {
      // Create a route for each page and its children.
      // Categories don't have an actual corresponding URL but may have children.
      if (page.url && (page.component || page.getComponent)) {
        routes.push(
          <Route key={page.url} path={page.url} component={page.component} getComponent={page.getComponent} />,
        );
      }
      if (page.platforms) {
        Object.keys(page.platforms).forEach((plat: TPlatforms) => {
          const platformPages: INavPage<TPlatforms>[] = page.platforms && page.platforms[plat];
          routes = routes.concat(_createRoutes(platformPages || []));
        });
      }
      if (page.pages) {
        routes = routes.concat(_createRoutes(page.pages));
      }
    });
    return routes;
  }

  function _getSiteRoutes() {
    const routes: JSX.Element[] = _createRoutes(siteDefinition.pages);

    // Add the default route
    if (defaultRouteComponent) {
      if (Array.isArray(defaultRouteComponent)) {
        defaultRouteComponent.forEach((Component, index) => {
          routes.push(<Route key={`default${index}`} component={Component} />);
        });
      } else {
        routes.push(<Route key="home" component={defaultRouteComponent} />);
      }
    }

    return routes;
  }

  function _onLoad(): void {
    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    handleRedirects(siteDefinition.redirects);

    // Load the app into this element.
    rootElement = rootElement || document.getElementById('main');
    _getBreakpoint();

    const renderSite = (props: {}) => <Site siteDefinition={siteDefinition} hasUHF={hasUHF} {...props} />;

    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <Route component={renderSite}>{_getSiteRoutes()}</Route>
        </Router>
      </ThemeProvider>,
      rootElement,
    );
  }

  function _onUnload() {
    if (rootElement) {
      ReactDOM.unmountComponentAtNode(rootElement);
    }
  }
}

function addCSSToHeader(fileName: string): void {
  const headEl = document.head;
  const linkEl = document.createElement('link');

  linkEl.type = 'text/css';
  linkEl.rel = 'stylesheet';
  linkEl.href = fileName;
  headEl.appendChild(linkEl);
}

addCSSToHeader(
  'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/' +
    corePackageVersion +
    '/css/fabric.min.css',
);
