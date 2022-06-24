let defaultConfig = {
  'postcss-import': {},
  'postcss-nested': {},
  'postcss-calc': {},
  'postcss-preset-env': {
    stage: 2,
    preserve: process.env.NODE_ENV !== 'production',
    importFrom: ['assets/css/_mediaqueries.css', 'assets/css/_variables.css'],
    features: {
      'color-mod-function': { unresolved: 'warn' },
      'custom-media-queries': {}
    },
    browsers: ['>= 5% in DK']
  },
  'postcss-reporter': {
    clearReportedMessages: true
  }
}

export default function postcssObjectConfig(userConfig) {
  const config = {
    ...defaultConfig,
    ...userConfig
  }

  return {
    'postcss-import': {
      ...config['postcss-import']
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

export function postcssArrayConfig(userConfig) {
  const postcssImport = require('postcss-import');
  const postcssNested = require('postcss-nested');
  const postcssCalc = require('postcss-calc');
  const postcssPresetEnv = require('postcss-preset-env');
  const postcssReporter = require('postcss-reporter');

  const config = {
    ...defaultConfig,
    ...userConfig
  }

  return [
    postcssImport({
      ...config['postcss-import']
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
