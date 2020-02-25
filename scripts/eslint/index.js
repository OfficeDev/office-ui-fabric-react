module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'import', 'react-hooks', '@fluentui'],
  env: {
    browser: true,
    'jest/globals': true
  },
  rules: {
    // False positive on arg types:
    // https://github.com/typescript-eslint/typescript-eslint/issues/46
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],

    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    'no-shadow': 'off', // https://github.com/microsoft/fluent-ui-react/pull/1261#pullrequestreview-231005092
    'no-unused-vars': 'off', // we use @typescript-eslint/no-unused-vars instead
    semi: ['error', 'always'],
    // TODO: investigate and re-enable where appropriate
    'import/extensions': 'off',

    // Temporary disabled rules
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'import/export': 'off',
    'import/first': 'off',
    'import/order': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-default': 'off',
    'import/no-useless-path-segments': 'off',
    'import/prefer-default-export': 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-pascal-case': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/no-children-prop': 'off',
    'react/no-array-index-key': 'off',
    'react/no-find-dom-node': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/forbid-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/no-multi-comp': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
    'react/no-string-refs': 'off',
    'react/no-render-return-value': 'off',
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'dot-notation': 'off',
    'global-require': 'off',
    'guard-for-in': 'off',
    'lines-between-class-members': 'off',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-case-declarations': 'off',
    'no-empty': 'off',
    'no-continue': 'off',
    'no-extra-boolean-cast': 'off',
    'no-fallthrough': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-return-await': 'off',
    'no-return-assign': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-properties': ['off', { object: 'Math', property: 'pow' }],
    'no-restricted-syntax': 'off',
    'no-throw-literal': 'off',
    'no-sparse-arrays': 'off',
    'no-undef': 'off',
    'no-undef-init': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'no-useless-return': 'off',
    'no-empty-function': 'off',
    'no-useless-constructor': 'off',
    'no-useless-escape': 'off',
    'no-use-before-define': 'off',
    'operator-assignment': 'off',
    'prefer-destructuring': 'off'
  },
  overrides: [
    {
      files: '**/jest.config.js',
      rules: {
        'global-require': 'off'
      }
    },
    {
      files: '**/test/**/*.{ts,tsx}',
      rules: {
        'import/no-extraneous-dependencies': 'off'
      }
    },
    {
      files: '**/*.tsx',
      rules: {
        '@fluentui/no-visibility-modifiers': 'error'
      }
    },
    {
      files: '**/*.{ts,tsx}',
      rules: {
        'no-dupe-class-members': 'off'
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
