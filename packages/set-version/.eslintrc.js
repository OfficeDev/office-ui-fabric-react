// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['../../scripts/eslint/v7'],
  root: true,
  rules: {
    'deprecation/deprecation': 'off',
    'prefer-const': 'off',
  },
};
