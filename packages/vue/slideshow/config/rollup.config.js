const { sharedPlugins } = require('../../sharedConfig/rollup.config')

export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: {
        name: 'NcSlideshow',
        exports: 'named',
    },
    plugins: sharedPlugins
};
