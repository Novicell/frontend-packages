const mergeObjects = require('lodash.merge');

let defaultConfig = {
  'postcss-import': {},
  'postcss-inline-media': {},
  'postcss-nested': {},
  'postcss-calc': {},
  'postcss-preset-env': {
    stage: 2,
    preserve: process.env.NODE_ENV !== 'production',
    importFrom: ['assets/css/_mediaqueries.css', 'assets/css/_variables.css'],
    features: {
      'color-function': { unresolved: 'warn' },
      'custom-media-queries': {},
      'custom-properties': {
        disableDeprecationNotice: true,
      }
    },
    browsers: ['>= 5% in DK']
  },
  'postcss-reporter': {
    clearReportedMessages: true
  }
}

function postcssObjectConfig(userConfig) {
  const config = mergeObjects(defaultConfig, userConfig);

  return {
    'postcss-import': {
      ...config['postcss-import']
    },
    'postcss-inline-media': {
      ...config['postcss-inline-media']
    },
    'postcss-nested': {
      ...config['postcss-nested']
    },
    'postcss-calc': {
      ...config['postcss-calc']
    },
    'postcss-preset-env': {
      ...config['postcss-preset-env']
    },
    'postcss-reporter': {
      ...config['postcss-reporter']
    }
  }
}

function postcssArrayConfig(userConfig) {
  const postcssImport = require('postcss-import');
  const postcssInlineMedia = require('postcss-inline-media');
  const postcssNested = require('postcss-nested');
  const postcssCalc = require('postcss-calc');
  const postcssPresetEnv = require('postcss-preset-env');
  const postcssReporter = require('postcss-reporter');

  const config = mergeObjects(defaultConfig, userConfig);

  return [
    postcssImport({
      ...config['postcss-import']
    }),
    postcssInlineMedia({
      ...config['postcss-inline-media']
    }),
    postcssNested({
      ...config['postcss-nested']
    }),
    postcssCalc({
      ...config['postcss-calc']
    }),
    postcssPresetEnv({
      ...config['postcss-preset-env']
    }),
    postcssReporter({
      ...config['postcss-reporter']
    })
  ]
}


const postcssModule = module.exports = postcssObjectConfig;
postcssModule.postcssArrayConfig = postcssArrayConfig;
