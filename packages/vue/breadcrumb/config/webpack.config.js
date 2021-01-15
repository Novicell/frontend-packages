const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.resolve(__dirname + './../src/index.js'),
  output: {
    path: path.resolve(__dirname + './../dist'),
    filename: 'NcBreadcrumb.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'css-loader',
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
}
