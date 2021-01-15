module.exports = {
  plugins: process.env.NODE_ENV === 'compile' ?
  [
    require('postcss-each'),
    require('postcss-custom-properties')({
      importFrom: 'src/partials/_variables.css',
      preserve: false
    }),
    require('postcss-calc'),
    require('postcss-custom-media')({
      importFrom: 'src/partials/_media-queries.css'
    })
  ] :
  [
    require('postcss-each')
  ]
}
