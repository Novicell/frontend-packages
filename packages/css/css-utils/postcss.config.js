module.exports = {
  plugins: process.env.NODE_ENV === 'compile' ?
  [
    require("stylelint"),
    require('postcss-each'),
    require('postcss-custom-properties')({
      preserve: false
    }),
    require('postcss-calc'),
    require('postcss-custom-media')({
      importFrom: 'src/partials/_media-queries.css'
    }),
    require('postcss-percentage')
  ] :
  [
    require("stylelint"),
    require('postcss-each'),
    require('postcss-percentage')
  ]
}
