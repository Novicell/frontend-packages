// Vue component Rollup config from Vue docs: https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html#How-do-I-configure-the-Rollup-build
import commonjs from '@rollup/plugin-commonjs' // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue' // Handle .vue SFC files
import buble from '@rollup/plugin-buble' // Transpile/polyfill with reasonable browser support
// import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: {
        name: 'NcBreadcrumb',
        exports: 'named',
    },
    plugins: [
        nodeResolve(),
        postcss(),
        commonjs(),
        // css({ output: 'css/styles.css' }), // Virker til separat css-bundle
        // css(), // Css bliver ikke bundlet med i js, uanset om `vue.css` er sat true eller false
        //? Prøv at konfigurere `rollup-plugin-postcss` og brug `postcss-import` til at få imports til at virke i <style> inden vue injecter css (ikke-importeret css bliver bundlet med i .js per default)
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
            template: {
                isProduction: true,
            },
        }),
        buble(), // Transpile to ES5
    ],
};
