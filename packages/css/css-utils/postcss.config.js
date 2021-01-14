module.exports = {
  plugins: process.env.NODE_ENV === 'compile' ?
  [
    require('postcss-each'),
    require('postcss-custom-media')
  ] :
  [
    require('postcss-each'),
  ]
}
