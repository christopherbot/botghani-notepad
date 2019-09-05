module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  extends: [
    'airbnb-base',
    'plugin:react/recommended',
  ],

  globals: {
    shallow: 'readonly',
    mount: 'readonly',
    render: 'readonly',
    env: 'readonly',
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: [
    'react',
  ],

  rules: {
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'implicit-arrow-linebreak': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'max-len': [2, 120],
    'no-console': 1,
    'no-param-reassign': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    semi: [1, 'never'],
  },

  settings: {
    'import/resolver': {
      alias: [
        ['~', './'],
      ],
      'babel-module': {},
    },
  },
}
