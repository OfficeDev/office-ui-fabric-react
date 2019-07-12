let { createConfig, mergeStylesSerializer } = require('@uifbaric/build/jest/jest-resources');
let path = require('path');

const config = createConfig({
  setupFiles: [path.resolve(path.join(__dirname, 'config', 'tests.js'))],
  snapshotSerializers: [mergeStylesSerializer]
});

module.exports = config;
