// styles-breadcrumb / flexbox-grid does not have all of these dependencies, but it still works
// either because the modules are lazily required (& not used by packages)
// or because node_modules are hoisted - either way: it is not a problem

const compilePlugins = [
  require('stylelint'),
  require('postcss-each'),
  require('postcss-custom-properties')({
    preserve: false
  }),
  require('postcss-calc'),
  require('postcss-custom-media')({
    importFrom: 'src/partials/_media-queries.css'
  }),
  require('postcss-percentage')
]

const srcPlugins = [
  require('stylelint'),
  require('postcss-each'),
  require('postcss-percentage')
]

module.exports = exports = {
  compilePlugins,
  srcPlugins
}
