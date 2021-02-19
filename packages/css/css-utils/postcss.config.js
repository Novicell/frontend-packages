const { compilePlugins, srcPlugins } = require('../config/postcss')

module.exports = {
  plugins: process.env.NODE_ENV === 'compile' ?
  [
    ...compilePlugins,
    require('postcss-custom-media')({
      importFrom: 'src/partials/_media-queries.css'
    })
  ] : srcPlugins
}
