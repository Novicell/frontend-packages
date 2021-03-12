module.exports = {
  "stories": [
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../../**/*.stories.js"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}

// const { configure } = require('@storybook/vue');
// // automatically import all files ending in *.stories.js
// const req = require.context(
//   '../',
//   true,
//   /\.stories\.js$/
// );
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }
// configure(loadStories, module);
