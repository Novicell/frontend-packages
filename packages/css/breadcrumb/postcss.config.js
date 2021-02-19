const { compilePlugins, srcPlugins } = require('../config/postcss')

module.exports = {
  plugins: process.env.NODE_ENV === 'compile' ? compilePlugins : srcPlugins
}
