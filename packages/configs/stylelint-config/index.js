'use strict';

module.exports = {
  extends: [ 'stylelint-config-recommended-vue', 'stylelint-config-standard', 'stylelint-config-rational-order' ],
  ignoreFiles: [
    'dist/**/*'
  ],
  plugins: ['./plugins/declaration-block-single-line.js'],
  rules: {
    'indentation': 2,
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'no-descending-specificity': null,
    'rule-empty-line-before': [
      'always',
      {
        'ignore': [ 'after-comment', 'first-nested' ]
      }
    ],
    'unit-no-unknown': true,
    'property-no-unknown': [
      true,
      {
        'ignoreProperties': [ '/tap-highlight-color/', 'string' ]
      }
    ],
    'selector-max-id': 0,
    'selector-pseudo-class-no-unknown': true,
    'max-empty-lines': [
      2,
      {
        'ignore': [ 'comments' ]
      }
    ],
    'selector-list-comma-newline-after': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-property-value-disallowed-list': {
      "border": ["none"],
      "border-top": ["none"],
      "border-bottom": ["none"],
      "border-right": ["none"],
      "border-left": ["none"]
    },
    'declaration-property-unit-allowed-list': {
      'font-size': ['em', 'px', 'rem', '%'],
      '/^animation/': 's',
      'line-height': []
    },
    'color-function-notation': null,
    'alpha-value-notation': 'number',
    'declaration-block-single-line-max-declarations': 1,
    'shorthand-property-no-redundant-values': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'max-nesting-depth': 2,
    '@novicell/declaration-block-single-line': true,
    'max-empty-lines': 1,
    'function-url-quotes': null,
    'selector-class-pattern': '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
    "function-no-unknown": [
      true,
      {
        "ignoreFunctions": [ "@" ]
      }
    ]
  }
};
