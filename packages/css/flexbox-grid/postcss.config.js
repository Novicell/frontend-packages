const path = require("path");

const rootPath = path.resolve('');

module.exports = {
  entry: {
    grid: './src/grid.css',
    demo: './src/demo.css'
  },
  output: {
    path: `${rootPath}/dist`,
    filename: '[name].css'
  },
  plugins: [
    require('stylelint'),
    require('postcss-each'),
    require('postcss-nested'),
    require('postcss-color-function'),
    require('postcss-custom-properties')({
      preserve: process.env.NODE_ENV !== 'compile'
    }),
    require('postcss-calc'),
    require('postcss-custom-media')({
      importFrom: 'src/partials/_media-queries.css'
    })
  ]
}
