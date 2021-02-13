// @ts-check
const { createConfig } = require('@fluentui/scripts/jest/jest-resources');

module.exports = createConfig({
  useEnzyme: true,
  disableIconWarnings: true,
  useMergeStylesSerializer: true,
});
