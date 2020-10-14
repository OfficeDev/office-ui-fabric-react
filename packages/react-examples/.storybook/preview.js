// @ts-check
import * as React from 'react';
import { initializeIcons } from '@uifabric/icons';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withPerformance } from 'storybook-addon-performance';
import { withCompatKeytipLayer, withKeytipLayer, withStrictMode, withThemeProvider } from '@fluentui/storybook';

addDecorator(withPerformance);
addDecorator(withInfo());
addDecorator(withA11y());
addDecorator(withKnobs({ escapeHTML: false }));
if (
  [
    'react-button',
    'react-cards',
    'react-checkbox',
    'react-image',
    'react-link',
    'react-next',
    'react-slider',
    'react-tabs',
    'react-text',
    'react-toggle',
  ].includes('PACKAGE_NAME')
) {
  addDecorator(withThemeProvider);
  addDecorator(withStrictMode);
}
if (['react-next'].includes('PACKAGE_NAME')) {
  addDecorator(withKeytipLayer);
}
if (['@fluentui/react'].includes('PACKAGE_NAME')) {
  addDecorator(withCompatKeytipLayer);
}
addParameters({
  a11y: {
    manual: true,
  },
});

initializeIcons();

configure(loadStories, module);

/**
 * @typedef {{
 *   default: { title: string };
 *   [subStoryName: string]: React.FunctionComponent | { title: string };
 * }} Story
 * @typedef {{ [exportName: string]: React.ComponentType }} ComponentModule
 */
function loadStories() {
  /** @type {Map<string, Story>} */
  const stories = new Map();

  /** @type {__WebpackModuleApi.RequireContext[]} */
  const contexts = [
    // This will be updated by preview-loader with the actual current package name
    require.context('../src/PACKAGE_NAME', true, /\.(Example|stories)\.tsx$/),
  ];

  // @ts-ignore
  if ('PACKAGE_NAME' === '@fluentui/react') {
    // For the @fluentui/react storybook, also show the examples of re-exported component packages.
    // preview-loader will replace REACT_ DEPS with the actual list.
    // Note that the regex intentionally goes only one directory below the package name
    // (the first `\w+`, which will be the component name) to avoid picking up "next" examples
    // which are under src/pkg-name/ComponentName/next/ComponentName.
    contexts.push(require.context('../src', true, /(REACT_DEPS)\/\w+\/[\w.]+\.(Example|stories)\.tsx$/));
  }

  for (const req of contexts) {
    req.keys().forEach(key => {
      generateStoriesFromExamples({ key, stories, req });
    });
  }

  // convert stories Set to array
  return [...stories.values()].sort((s1, s2) => (s1.default.title > s2.default.title ? 1 : -1));
}

/**
 * @param {{ key: string, stories: Map<string, Story>, req: (key: string) => ComponentModule }} options
 */
function generateStoriesFromExamples({ key, stories, req }) {
  const nameMatcher = /\.\/([^/]+)\//;
  const matches = key.match(nameMatcher);
  if (!matches) {
    return;
  }

  const componentName = matches[1];

  if (!stories.has(componentName)) {
    stories.set(componentName, {
      default: {
        title: componentName,
      },
    });
  }

  const storyName = key
    .substr(key.lastIndexOf('/') + 1)
    .replace('.tsx', '')
    .replace(/\./g, '_');

  const story = stories.get(componentName);
  const exampleModule = req(key);

  for (let moduleExport of Object.keys(exampleModule)) {
    const ExampleComponent = exampleModule[moduleExport];
    const subStoryName = moduleExport || storyName;

    if (typeof ExampleComponent === 'function') {
      if (ExampleComponent.prototype.render) {
        // class component
        story[subStoryName] = () => React.createElement(ExampleComponent);
      } else {
        // function component
        story[subStoryName] = /** @type {React.FunctionComponent} */ (ExampleComponent);
      }
    }
  }
}
