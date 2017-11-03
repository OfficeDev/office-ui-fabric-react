import * as React from 'react';
import {
  ExampleCard,
  IComponentDemoPageProps,
  ComponentPage,
} from '@uifabric/example-app-base';

import A11yManager from './a11yManager/A11yManager';
import ArrowNavigation from './a11yManager/ArrowNavigation';

export class A11yPage extends React.Component<IComponentDemoPageProps, {}> {
  public componentDidMount(): void {
    const a11yManager: A11yManager = A11yManager.create(document.body, {
      prefix: 'a11y'  // only reads attributes starting with data-a11y-...
    });
    a11yManager.registerNavigationMode(ArrowNavigation);
  }

  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CommandBar'
        componentName='CommandBarExample'
        exampleCards={
          <div>
            <ExampleCard title='Arrow Navigation Example'>
              <div>
                <button>Element Before</button>
                <div data-a11y-navigationmode='Arrow'>
                  <button>Item 1</button><button>Item 2</button><button>Item 3</button><button>Item 4</button>
                </div>
                <button>Element After</button>
              </div>
            </ExampleCard>
          </div>
        }
        /* tslint:disable:max-line-length */
        overview={
          <div>
            <p>
              CommandBar is a surface that houses commands that operate on the content of the window, panel, or
              parent region it resides above. They are one of the most visible and recognizable ways to surface
              commands, and can be an intuitive method for interacting with content on the page. However, if
              overloaded or poorly organized, they can be difficult to use and hide valuable commands from your
              user. CommandBars can also display a search box for finding content; hold simple commands as well
              as menus; and display the status of ongoing actions.
            </p>
            <p>
              Commands should be sorted in order of importance, from left to right or right to left depending on
              the culture. Secondarily, organize commands in logical groupings for easier recall. CommandBars work
              best when they display no more than 5-7 commands. This helps users quickly find your most valuable
              features. If you need to show more commands, consider using the overflow menu. If you need to
              render status, or viewing controls, these go on the right side of the CommandBar (or left side if
              in a left to right experience). Do not display more than 2-3 items on the right side as it will
              make the overall CommandBar difficult to parse.
            </p>
            <p>
              All command items should have an icon and a label. Commands can render as labels only as well. In
              smaller widths, commands can just use icon only, but only for the most recognizable and frequently
              used commands. All other commands should go into an overflow where text labels can be shown.
            </p>
          </div>
        }
        /* tslint:enable:max-line-length */
        bestPractices={
          <div />
        }
        dos={
          <div>
            <ul>
              <li>Sort commands in order of importance from left to right or right to left depending on the culture.</li>
              <li>Organize commands into logical groupings.</li>
              <li>Display no more than 5-7 commands.</li>
              <li>Use overflow to house less frequently-used commands.</li>
              <li>In small breakpoints, only have the most recognizable commands render as icon only.</li>
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li>Fill the command bar completely from left to right.</li>
              <li>Use icons only for commands in larger widths.</li>
              <li>Display more than 2-3 items on the right side of the bar (or left side in left to right experiences).</li>
            </ul>
          </div>
        }
        related={
          <a href='https://dev.office.com/fabric-js/Components/CommandBar/CommandBar.html'>Fabric JS</a>
        }
        isHeaderVisible={ this.props.isHeaderVisible }
      />
    );
  }

}
