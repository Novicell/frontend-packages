const { sharedPlugins } = require('../../sharedConfig/rollup.config')

export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: {
        name: 'NcCta',
        exports: 'named',
    },
    plugins: [ // Order matters
        ...sharedPlugins,
    ]
};
