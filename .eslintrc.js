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
    semi: 0,
    'arrow-parens': 0,
    'no-console': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
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
