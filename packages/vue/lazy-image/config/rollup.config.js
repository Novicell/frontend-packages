// Vue component Rollup config from Vue docs: https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html#How-do-I-configure-the-Rollup-build
import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import typescript from "rollup-plugin-typescript2";
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support

export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: {
        name: 'LazyImage',
        exports: 'named',
    },
    plugins: [
        commonjs(),
        typescript({
            useTsconfigDeclarationDir: true,
            clean: true,
            objectHashIgnoreUnknownHack: true,
        }),
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