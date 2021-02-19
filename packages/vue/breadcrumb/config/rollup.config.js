import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

const { plugins } = require('../../config/rollup')

export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: {
        name: 'NcBreadcrumb',
        exports: 'named',
    },
    plugins: [ // Order matters
        nodeResolve(),
        postcss(), //! Gives annoying linting warnings, but will most likely be removed soon
        ...plugins,
    ]
};
