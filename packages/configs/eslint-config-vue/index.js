'use strict';

module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  'rules': {
    'camelcase': 'off',
    'no-extra-boolean-cast': 'off',
    'vue/no-v-html': 'off',
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'always'
      }
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      'registeredComponentsOnly': false,
      'ignores': ['transition', 'client-only', 'component', 'transition-group']
    }],
    'vue/comment-directive': 'off',
    'semi': ['error', 'always'],
    'vue/singleline-html-element-content-newline': 'off'
  }
};
