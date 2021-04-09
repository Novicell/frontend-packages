module.exports = {
  plugins: process.env.NODE_ENV === 'compile' ?
  [
    require("stylelint"),
    require('postcss-nested'),
  ] :
  [
    require("stylelint"),
  ]
}
