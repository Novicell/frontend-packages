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
`lerna bootstrap --hoist` is the equivalent of `npm i` in that it installs all dependencies with the added benefit of checking if any dependencies are present in the monorepo first and creating symlinks where possible while also making sure the dependencies are hoisted to reduce duplicate files. Refrain from using `npm i` to install all dependencies for a package since this will neither hoist dependencies or create symlinks. As with `lerna add`, you can also use the `--scope=<package>` flag when bootstrapping to only install dependencies for a single package.

### Symlinks
`lerna link` does the same as bootstrapping, except it only symlinks internal dependencies and does not install third party packages.

**Note:**
Symlinked packages are mirrors of the linked package, which means that an update to the files in one package does not necessitate re-linking during development, the update is instant. In the depending package's `node_modules` you will also have access to all of the linked dependency's files (including configs and source code), even though the package might only expose its `dist` folder when published. This means that you *can* use (for example) source code from the dependency project in the depending project during development if the depending project can compile the source code, but these files wil not be accessible to the depending package when published.

## Cleaning up
If the dependencies are acting wonky, using `lerna clean` will delete all `node_modules` in the repo. `--scope=<package>` can be used to select individual packages.
~~Likewise `lerna run wipe` will clean out all `dist` folders in the repo (if the script has been specified in the individual packages) - scoping applies here as well.~~

~~To quickly reset all dependencies and builds, you can run:~~ **wipe not yet implemented**
```
lerna run wipe && lerna clean && lerna bootstrap --hoist && lerna run build
```

## Running arbitrary commands
`lerna run <script>` can be used to run any script in all packages (with optional scoping) as [seen previously](#cleaning-up "Cleaning up"), which is also why it is important to always [name the scripts the same thing in every package](#scripts "Scripts"). `lerna run build` will automatically figure out the order in which to build packages on the basis of a package's dependencies.

Adding the `--stream` flag will stream the output of all of the run scripts to your terminal. To add parameters to the run scripts you will need to do add `--`. E.g.:
```
lerna run lint --stream --scope=@novicell/flexbox-grid -- --fix
```
In the above example both `--stream` and `--scope` are passed to `lerna run`, but `--fix` is passed on to the `lint` script.

## Versioning, changelogs & publishing
`lerna publish --conventional-commits` will automatically include a versioning step, and as such it is not a requirement to use `lerna version`. It will also automatically run the `"prepublishOnly"` script in packages, which should build the packages before publishing. You will also need to login to NPM with the command `npm login`.

It is not necessary to publish changes when refactoring (when no bugs are fixed or no features are added) or just fixing small bugs, that can be bundled together in a bigger release at a later point. This also means that if you run `lerna publish --conventional-commits` you may see unpublished changes to other packages. If changes are specifically not meant to be published yet they should be put on a separate branch so the next publish will not catch them as well.

### Conventional commits
When making changes to the packages, we use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/ "Conventional Commits Spec") to help us with automatic versioning and changelogs. This means that we do not have to think about versioning and updating the changelog when publishing, as long as we format our commit messages correctly. See [the rules](https://www.npmjs.com/package/@commitlint/config-conventional/v/9.0.0 "NPM @commitlint/config-conventional") for more details.

#### Message formatting
You will have to include an empty line between the summary, description, and footer when writing a multiline message. When committing a breaking change, use a bang (`!`) after the type (and scope if there is any) or add the `BREAKING CHANGE` footer.

🙂:
```
> git commit -m "feat!: something is not backwards compatible"
```
😁:
```
> git commit
feat: something is not backwards compatible

description goes here

BREAKING CHANGE: the thing that broke compatibility
```
👿:
```
git commit -m "BREAKING CHANGE: something is not backwards compatible"
```

Scopes specified in the parentheses are the package's name (not folder name), but with `@novicell/` omitted. Several scopes can be specified with commas: `feat(vue-breadcrumb,css-utils):`, and a repository-scale scope can be specified by omitting the scope entirely: `feat:`.

#### commitlint
Too see if your commit message is formatted correctly, test it with commitlint:

This will pass:
```
> echo 'feat(vue-breadcrumb): added more features' | npx commitlint
```
or for multiline commit messages - just omit the last `'` on the first line:
```
> echo 'feat(vue-breadcrumb): added more features
>
> this is an in depth description of the features added
>
> BREAKING CHANGE: this one feature needs to bump the major version of the package' | npx commitlint
```
**Note:**
When using `!` to indicate a breaking change with `commitlint`, you will have to echo with single ticks, e.g.: `echo 'feat(vue-breadcrumb)!: something is not backwards compatible'`.

### Override default behaviour
If for some reason the version numbers do not behave as expected or you need to manually version and publish packages, it is possible to change a version number manually by editing the `package.json`. When committing this change, you can use the flag `--no-verify` to circumvent commitlint and husky:
```
> git commit -m "non-compliant commit message" --no-verify
```
To then publish the package without implicitly calling `lerna version` you can use:
```
> lerna publish from-package
```

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