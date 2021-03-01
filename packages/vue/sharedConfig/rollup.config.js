const commonjs = require('@rollup/plugin-commonjs')
const vue = require('rollup-plugin-vue')
const buble = require('@rollup/plugin-buble')


const sharedPlugins = [
  commonjs(),
  // css({ output: 'css/index.css' }), // Til separat css-bundle
  vue({
    css: true, // Dynamically inject css as a <style> tag
    compileTemplate: true, // Explicitly convert template to render function
    template: {
      isProduction: true,
    },
  }),
  buble(), // Transpile to ES5
]

module.exports.sharedPlugins = exports.sharedPlugins = sharedPlugins
