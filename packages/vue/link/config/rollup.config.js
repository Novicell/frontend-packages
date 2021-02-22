const { plugins } = require('../../config/rollup')

export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: {
        name: 'NcLink',
        exports: 'named',
    },
    plugins
};
