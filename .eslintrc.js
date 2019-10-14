'use strict';

const prettier = require('./prettier.config');

module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src', './'],
      },
    },
  },
  parser: '@typescript-eslint/parser',

  /**
   * rules
   */
  rules: {
    'prettier/prettier': ['error', prettier],

    'no-unused-vars': 'off',
    'no-use-before-define': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': [
      2,
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'context',
          'req',
          'request',
          'res',
          'result',
          'response',
          '$scope',
        ],
      },
    ],

    /**
     * react
     */
    'react/sort-comp': [
      1,
      {
        order: [
          'static-methods',
          'instance-variables',
          '/^ref.*$/',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set|remove)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'state',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    "react/jsx-filename-extension": [2, { "extensions": ['tsx']}],
    "react/destructuring-assignment": [0, "always", { "ignoreClassFields": true }],

    /**
     * @typescript-eslint
     */
    "@typescript-eslint/no-use-before-define": 0,

    // todo check it
    "@typescript-eslint/explicit-function-return-type": [0, {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true,
    }],

    "@typescript-eslint/no-empty-interface": 0,

    "@typescript-eslint/no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": true,
    }],

    /**
     *
     */
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'jsx-a11y/media-has-caption': 0,

    // FIXME must = 2
    "jsx-a11y/anchor-has-content": 2,

    'no-plusplus': 0,
    'no-continue': 0,
  },
};
