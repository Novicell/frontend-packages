# Novicell Frontend Packages
The official lerna docs can be found [here](https://github.com/lerna/lerna "lerna Github") for an overview over the different commands.
## Creating a package
Create a new package with `lerna create`, or more commonly by copying another package and appropriating the package.json.

## `package.json`
- **`"name"`** should be scoped with the prefix `@novicell/`, e.g.: `@novicell/css-utils`. This is the name of the package on NPM and the name used to install and import the package.
- **`"files"`** should be set to an array specifying the directories and/or files to distribute with your package (without this specified, all of the source code will be packaged). In most, if not all cases use a `dist` folder, and if you need to package source code for the user to compile themselves, put it in the `dist/src/` folder. The common property will look like this: `"files": [ "dist" ]`.
- **`"main"`** is the entrypoint to your package, i.e. the file that is fetched when the package is imported. This file will be located somewhere in your `dist` folder, e.g.: `"main": "dist/all.css"`.
- **`"private"`** defaults to `false`. Set this property to `true` if you only have internal dependencies of this package, and it does not need to be published to NPM.

### Scripts
To make sure we can run commands on all packages at the same time with `lerna run <script>` we have a convention for naming important scripts.

- **`"build"`** should call whichever commands are required to generate publish-ready code in the `dist` folder.
- **`"lint"`** should be the script to lint and/or fix code errors.
- **`"test"`** should be used to run the packages' tests.
- **`"prepublishOnly"`** should run your `build` command (`npm run build`). This commands is run automatically when publishing packages with lerna, removing the necessity for building every package manually before publishing.
- ~~**`"wipe"`** should use `rimraf` to delete the `dist` folder. Should not be confused with `lerna clean` which deletes `node_modules`~~ **not yet implemented**.

## Adding dependencies
When adding a dependency to a package only use `npm i <package>` if the package is external to the monorepo. This is to make sure symlinks are created when a dependency is internal to the monorepo. The catch-all way to add packages with lerna is to use `lerna add <package>[@version]`. The default behaviour is to add the package to all packages - to add it only to a single package use the `--scope=<package>` flag. Doing so will look for local packages first and add a symlinked folder in `node_modules`, but if the package is a third party module it will install it normally as with `npm i`. You can also write the dependency in your package.json and use [bootstrapping](#bootstrapping "Bootstrapping") to create the symlinks manually.

**Note:**
`lerna add` can only add one package at a time.


### Examples:
```
# Adds the module-1 package to the packages in the 'prefix-' prefixed folders
lerna add module-1 packages/prefix-*

# Install module-1 to module-2
lerna add module-1 --scope=module-2

# Install module-1 to module-2 in devDependencies
lerna add module-1 --scope=module-2 --dev

# Install module-1 to module-2 in peerDependencies
lerna add module-1 --scope=module-2 --peer

# Install module-1 in all modules except module-1
lerna add module-1

# Install babel-core in all modules
lerna add babel-core
```

## Bootstrapping
`lerna add <package>` will automatically bootstrap your packages.
`lerna bootstrap` is the equivalent of `npm i` in that it installs all dependencies with the added benefit of checking if any dependencies are present in the monorepo first and creating symlinks where possible. Refrain from using `npm i` to install all dependencies for a package. As with `lerna add`, you can also use the `--scope=<package>` flag when bootstrapping to only install dependencies for a single package.

Although it is tempting to add the `--hoist` flag to combat duplicate dependencies taking up too much space, there are a few dependencies (such as stylelint) that will only look for their files in the local package's `node_modules` which makes it a bigger hassle to use than not.

### Symlinks
`lerna link` does the same as bootstrapping, except it only symlinks internal dependencies and does not install third party packages.

**Note:**
Symlinked packages are mirrors of the linked package, which means that an update to the files in one package does not necessitate re-linking during development, the update is instant. In the depending package's `node_modules` you will also have access to all of the linked dependency's files (including configs and source code), even though the package might only expose its `dist` folder when published. This means that you *can* use (for example) source code from the dependency project in the depending project during development if the depending project can compile the source code, but these files wil not be accessible to the depending package when published.

## Cleaning up
If the dependencies are acting wonky, using `lerna clean` will delete all `node_modules` in the repo. `--scope=<package>` can be used to select individual packages.
~~Likewise `lerna run wipe` will clean out all `dist` folders in the repo (if the script has been specified in the individual packages) - scoping applies here as well.~~

~~To quickly reset all dependencies and builds, you can run:~~ **wipe not yet implemented**
```
lerna run wipe && lerna clean && lerna bootstrap && lerna run build
```

## Running arbitrary commands
`lerna run <script>` can be used to run any script in all packages (with optional scoping) as [seen previously](#cleaning-up "Cleaning up"), which is also why it is important to always [name the scripts the same thing in every package](#scripts "Scripts"). `lerna run build` will automatically figure out the order in which to build packages on the basis of a package's dependencies.

## Versioning, changelogs & publishing
`lerna publish --conventional-commits` will automatically include a versioning step, and as such it is not a requirement to use `lerna version`. It will also automatically run the `"prepublishOnly"` script in packages, which should build the packages before publishing. You will also need to login to NPM with the command `npm login`.

### Conventional commits
When making changes to the packages, we use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/ "Conventional Commits Spec") to help us with automatic versioning and changelogs. This means that we do not have to think about versioning and updating the changelog when publishing, but that we should take a bit more time to make sure our commit messages follow the convention so that all of these will be included when a package is released.

Read and understand [the specs](https://www.conventionalcommits.org/en/v1.0.0/ "Conventional Commits Spec") to see how to format your commit messages. Specific to this monorepo is that scopes are important for the changelogs. E.g.:
```
feat(@novicell/css-utils): Added postcss support

Uncompiled postcss is now available in dist/src
```
The previous example specifies a feature, which will bump the minor version automatically of the changed package, that has also been specified in the parenthesis scope so that the changelog for that package will display the postcss support change with the longer message.

## New package - what do?
To create and publish a new package you will often have to go through the following steps:
1. Copy an existing package and edit the `package.json` as specified in [package.json](#package.json "package.json") and write the code.
2. Add dependencies with `lerna add @novicell/<package> --scope=@novicell/<this-package>` - Bootstrapping and symlinking comes automatically - if you change/break things refer to [Bootstrapping](#bootstrapping "Bootstrapping") and [Cleaning up](#cleaning-up "Cleaning up").
3. Commit the package with [Conventional Commits](#conventional-commits "Conventional Commits").
4. Login to NPM with `npm login`.
5. Publish (and build) the package with `lerna publish --conventional-commits`
6. Sip espresso ☕

### Making changes
When making changes to a package, it is commonly a good idea to clear out the changed package's `dist` folder and `node_modules` since bootstrapping will only add dependencies, not remove them if they have been changed in `package.json` manually instead of being removed with `npm uninstall`. After this, you can bootstrap and build the package again so that any depending packages have access to the newly created distribution-files for testing before ultimately committing the changes and potentially publishing.
