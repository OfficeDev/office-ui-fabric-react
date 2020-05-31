// @ts-check
module.exports = {
  extends: ['../../scripts/eslint/v7'],
  root: true,
  rules: {
    'import/no-webpack-loader-syntax': 'off', // ok in this project
    'react/forbid-component-props': 'off',
  },
};
