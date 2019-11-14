const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './lib/index.ts'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            // { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.ts$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
};
