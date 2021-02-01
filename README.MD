# Novicell Frontend Packages

## Package Setup
### package.json
- **`"name"`** should be scoped with the prefix `@novicell/`, e.g.: `@novicell/css-utils`. This is the name of the package on NPM and the name used to install and import the package.
- **`"files"`** should be set to an array specifying the directories and/or files to distribute with your package (without this specified, all of the source code will be packaged). In most, if not all cases use a `dist` folder, and if you need to package source code for the user to compile themselves, put it in the `dist/src/` folder. The common property will look like this: `"files": [ "dist" ]`.
- **`"main"`** is the entrypoint to your package, i.e. the file that is fetched when the package is imported. This file will be located somewhere in your `dist` folder, e.g.: `"main": "dist/all.css"`.
- **`"private"`** defaults to `false`. Set this property to `true` if you only have internal dependencies of this package, and it does not need to be published to NPM.

#### Scripts
To make sure we can run commands on all packages at the same time with `lerna run` there is a convention for naming important scripts.

- **`"build"`** should call whichever commands are required to generate production-ready code in the `dist` folder.
- **`"lint"`** should be the script to lint and/or fix code errors.
- **`"prepublishOnly"`** should run your `build` command (`npm run build`). This commands is run automatically when publishing packages with lerna, removing the necessity for building every package manually before publishing.

## Workflow Commands
