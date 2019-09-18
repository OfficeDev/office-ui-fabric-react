// @ts-check

const path = require('path');
const webpack = require('webpack');
// This script shouldn't depend on @uifabric/build since it's meant as a utility for other packages
// (potentially outside our repo)

/**
 * Add Monaco-related webpack configuration to an existing config object.
 * @param {webpack.Configuration & { [key: string]: any }} config - Webpack config to merge the monaco config into.
 * `entry` must be an object (or not provided) for this to work.
 * @param {boolean} [includeAllLanguages] - If true, include all language contributions in the main
 * Monaco bundle and add entry configs for CSS/HTML/JSON workers in addition to TS. If false (default),
 * only include TS features.
 * @returns {webpack.Configuration & { [key: string]: any }} The merged config
 */
function addMonacoWebpackConfig(config, includeAllLanguages) {
  const { entry, output, resolve } = config;
  if (!entry || typeof entry !== 'object') {
    throw new Error(`config.entry passed to addMonacoWebpackConfig must be an object. Got: ${JSON.stringify(entry)}`);
  }

  // Somewhat based on https://github.com/microsoft/monaco-editor/blob/master/docs/integrate-esm.md
  return {
    ...config,
    entry: {
      .../** @type {webpack.Entry} */ (entry),
      'editor.worker': '@uifabric/monaco-editor/esm/vs/editor/editor.worker.js',
      'ts.worker': '@uifabric/monaco-editor/esm/vs/language/typescript/ts.worker.js',
      ...(includeAllLanguages
        ? {
            'css.worker': '@uifabric/monaco-editor/esm/vs/language/css/css.worker.js',
            'html.worker': '@uifabric/monaco-editor/esm/vs/language/html/html.worker.js',
            'json.worker': '@uifabric/monaco-editor/esm/vs/language/json/json.worker.js'
          }
        : {})
    },
    output: {
      ...output,
      globalObject: 'self' // required for monaco--see https://github.com/webpack/webpack/issues/6642
    },
    resolve: {
      ...resolve,
      alias: {
        ...resolve.alias,
        // Alias monaco-editor imports to either monacoBundle.js (to include all language features)
        // or monacoCoreBundle.js (to include only the editor and TS). Either of these bundle files
        // also attempts to set up the global MonacoEnvironment.
        '@uifabric/monaco-editor$': path.resolve(__dirname, '../lib', includeAllLanguages ? 'monacoBundle.js' : 'monacoCoreBundle.js')
      }
    }
  };
}

module.exports = { addMonacoWebpackConfig };
