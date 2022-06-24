const postcssConfig = require('../../index.js');

module.exports = {
  ...postcssConfig({
    'postcss-preset-env': {
      importFrom: ['assets/_mediaqueries.css', 'assets/_variables.css'],
    }
  })
}
