import { nodeResolve } from '@rollup/plugin-node-resolve'

const { sharedPlugins } = require('../../sharedConfig/rollup.config')

export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: {
        name: 'NcBreadcrumb',
        exports: 'named',
    },
    plugins: [ // Order matters
        nodeResolve(),
        ...sharedPlugins,
    ]
};
