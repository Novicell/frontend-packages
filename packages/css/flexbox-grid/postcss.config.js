const path = require("path");
const { compilePlugins, srcPlugins } = require('../config/postcss');

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
  plugins: process.env.NODE_ENV === 'compile' ?
  [
    ...compilePlugins,

    require('postcss-color-function'),
    require('postcss-custom-media')({
      importFrom: 'src/partials/_media-queries.css'
    }),
  ] : srcPlugins
}
