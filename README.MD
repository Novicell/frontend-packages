# Novicell Frontend Packages
The official lerna docs can be found [here](https://github.com/lerna/lerna "lerna Github") for an overview over the different commands.

## Creating a package
Create a new package with:
```bash
> lerna create
```
or more commonly by copying another package and appropriating the package.json.

## package.json
All package's `package.json` should have at least the following props:
```json
"name"
"files"
"main"
"private"
```
### name
Should be scoped with the prefix `@novicell/`, e.g.: `@novicell/css-utils`. This is the name of the package on NPM and the name used to install and import the package. The first part of the package's name should also reflect what type of package this is followed by a hyphen: `@novicell/{type}-{name}`. For example:

Vue components
```json
"name": "@novicell/vue-breadcrumb"
```

Css packages
```json
"name": "@novicell/css-utils"
```

Non-distributed styling for components
```json
"private": true,
"name": "@novicell/styles-breadcrumb"
```

### files
Should be set to an array specifying the directories and/or files to distribute with your package (without this specified, all of the source code will be packaged). In most, if not all cases use a `dist` folder, and if you need to package source code for the user to compile themselves, put it in the `dist/src/` folder.
### main
This is the entrypoint to your package, i.e. the file that is fetched when the package is imported. This file will be located somewhere in your `dist` folder, e.g.: `"main": "dist/all.css"`.
### private
Defaults to `false`. Set this property to `true` if you only have internal dependencies of this package, and it does not need to be published to NPM.

## Checking a package
To make sure that the `package.json` is formatted correctly and that the recommended / required setup is present, you can run `/repoScripts/check-package`. This script will distinguish between obligatory and optional properties on the package.json etc, e.g. is `"name"` prefixed with the `@novicell/` scope (obligatory) and does the package build to `dist/` (preferred, but optional).

The script is called with `node` (from anywhere) or `npm run check-package` (from the repo root scope), and the path to the `package.json` as the only argument. Example:

`/`
```bash
> node repoScripts/check-package packages/vue/breadcrumb/package.json
```
or from anywhere outside of a sub-package's scope:

`/`
```bash
> npm run check-package -- packages/vue/breadcrumb/package.json
```

This script should be updated to reflect our standards for different types of packages whenever we add new types of content to this monorepo.

## Scripts
To make sure we can run commands on all packages at the same time with `lerna run <script>` we have a convention for naming important scripts inside `package.json`.

```json
"wipe" // deletes the `dist` folder. Should not be confused with `lerna clean` which deletes `node_modules`.
"build" // should call whichever commands are required to generate publish-ready code in the `dist` folder.
"lint" // should be the script to lint and/or fix code errors.
"test" // should be used to run the packages' tests.
"prepublishOnly" // should run your `build` command (`npm run build`). This commands is run automatically when publishing packages with lerna, removing the necessity for building every package manually before publishing.
```

### Shared scripts
To be able to run shared scripts **you are required to have bash installed on your system and available in your `PATH` variable.**

When the same script is used in several places, we migrate them to a `scripts` folder as a bash script (or node etc.). A local package's script then point towards the common script and specifies how to run it (bash or node etc.) like this:

`./flexbox-grid/package.json`
```json
{
  "wipe": "bash ../../../scripts/wipe",
  "build:dist": "bash ../scripts/build/dist src/grid.css",
  "build": "bash ../scripts/build/index",
}
```

`./scripts/build/dist`
```bash
#!/usr/bin/env bash

# Called from inside packages, will compile PostCSS into css
printf "🧱 Building Compiled CSS: %s 🧱" "${PWD##*/}"

# Default to build every css file in src/, otherwise use first command line arg
INFILE="src/*.css"
if [[ "$1" != "" ]]; then
    INFILE="$1"
fi

npm run lint:fix && cross-env NODE_ENV=compile parcel build $INFILE --no-content-hash --no-source-maps --no-cache
```

You can add *global* scripts to `/scripts/`.

You can add *scoped* scripts to a package's parent dir, e.g. `/packages/css/scripts/`.

You can add *unique* scripts in the package's `package.json` or in a `scripts/` directory inside the package.

Scripts should be located and named in accordance with the `npm run` script that calls it. E.g. if your scripts inside `package.json` are the same as above, the directory structure would look like this:

`/`
```
├── packages
|  ├── css-utils
|  |  └── package.json
|  └── scripts
|     └── build
|        ├── index
|        └── dist
└── scripts
   └── wipe
```
**Note:** With a script that does not share a prefix with another script, you do not have to create a subfolder for the script inside the scripts directory, you can just name the file the same as the script. In the above case where there are several `build` scripts, you will use the `:` to denote a filepath, where the base `build` script will then be the `index` file inside the `build` directory (much alike how `pages` work for Nuxt).

### Global scripts
Scripts that are usually used for manipulating the whole repo at the same time and scripts that does not necessarily have anything to do with any specific packages are available in the repo's root scope (`/package.json`) through `npm run`. The scripts here reflect the correct way to use the interfaces lerna provides us, such as publishing with conventional changelogs and bootstrapping with hoisting, so we do not forget to do these things the correct way. There are also interfaces for common operations such as rebuilding everything.

These scripts live inside `/repoScripts` to distinguish them from the scripts that you would run from inside a specific package. **When in doubt**, use these scripts instead of using the provided `lerna <command>`.

## Config files
To avoid duplications and to make sure that our environments are as alike as possible we should also hoist configuration files to as big a scope as possible. For example: we use stylelint for every CSS package inside `/packages/css/`. For this case we have created the `config` directory `/packages/css/config/` that contains base-configurations for every CSS-package. E.g.:

`/packages/css/`
```
├── css-utils
|  └── .stylelintrc.json <- package-specific config
└── config
   └── .stylelintrc.json <- extendable base-config
```

The configurations inside `*/config/` are implemented by either importing them and weaving them into the local configuration (for `*.js`) or by using the module-specific 'extends'-syntax.

## Adding dependencies
```bash
> lerna add <package> --scope <scope>
```

When adding a dependency to a package only use `npm i <package>` if the package is external to the monorepo. This is to make sure symlinks are created when a dependency is internal to the monorepo. The catch-all way to add packages with lerna is to use `lerna add <package>[@version]`. The default behaviour is to add the package to all packages - to add it only to a single package use the `--scope=<package>` flag. Doing so will look for local packages first and add a symlinked folder in `node_modules`, but if the package is a third party module it will install it normally as with `npm i`. You can also write the dependency in your package.json and use [bootstrapping](#bootstrapping "Bootstrapping") to create the symlinks manually.

`lerna add` does not hoist dependencies when bootstrapping, so to make sure that everything behaves as expected, it is strongly recommended to run the following afterwards:

```bash
> lerna clean && lerna bootstrap --hoist
```

**Note:** `lerna add` can only add one package at a time.

### Examples:
```bash
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

### Hoisting quirk
When installing dependencies with `lerna bootstrap --hoist` ([reference](#bootstrapping)), binaries used to run any and all dependencies in a local package will still be kept inside the local package's `node_modules/.bin` directory, so an `npm run` command can still find the module. This, however, is dependent on the direct dependency being in the local `package.json`. Thus, a dependency's (or devDependecy's) dependency binary **will not** by default be present inside the local package's `node_modules/.bin`, as it would normally if your dependency depends on it.

**This means:** You will have to be explicit with which packages you package uses. If (for example) `stylelint-config-standard` (which depends on `stylelint`) is installed and you want to use a command like `stylelint "src/**/*.css"` **you will have to** specify `stylelint` as a dependency or devDependency in your package as well.

## Bootstrapping
```bash
> lerna link && lerna bootstrap --hoist
```
is the equivalent of `npm i` in that it installs all dependencies with the added benefit of checking if any dependencies are present in the monorepo first and creating symlinks where possible while also making sure the dependencies are hoisted to reduce duplicate files. Hoisting makes sure we have a central `node_modules` for common libraries. Refrain from using `npm i` to install all dependencies for a package since this will neither hoist dependencies or create symlinks. To make sure we bootstrap and hoist the correct way, you can from the root repo scope (everywhere that is not inside another package) run:
```bash
> npm run bootstrap
```
Which will execute the script `/repoScripts/bootstrap`.

**Note:**

Bootstrapping by itself should also created internal dependency symlinks, but this can be buggy with private packages. To fix this, we just manually link interdependencies first.

### Symlinks
```bash
> lerna link
```
does the same as bootstrapping, except it only symlinks internal dependencies and does not install third party packages.

**Note:**
Symlinked packages are mirrors of the linked package, which means that an update to the files in one package does not necessitate re-linking during development, the update is instant. In the depending package's `node_modules` you will also have access to all of the linked dependency's files (including configs and source code), even though the package might only expose its `dist` folder when published. This means that you *can* use (for example) source code from the dependency project in the depending project during development if the depending project can compile the source code, but these files wil not be accessible to the depending package when published.

## Cleaning up
If the dependencies are acting wonky, using:
```bash
> lerna clean
```
will delete all `node_modules` in the repo. `--scope=<package>` can be used to select individual packages.
Likewise:
```bash
> lerna run wipe
```
or, from the root scope:
```bash
> npm run wipe-all
```
will clean out all `dist` folders. Scoping also applies when using `lerna run wipe`.

To quickly clean out all `node_modules` and `dist/` folders as well as re-bootstrap and rebuild all dependencies and packages, you can from the root scope run:
```bash
> npm run reset <scope>
```
which will execute `/repoScripts/reset`. Adding a scope does not require calling `--scope` first.

## Running arbitrary commands
```bash
> lerna run <script>
```
can be used to run any script in all packages (with optional scoping) as [seen previously](#cleaning-up "Cleaning up"), which is also why it is important to always [name the scripts the same thing in every package](#scripts "Scripts").
```bash
lerna run build
```
will automatically figure out the order in which to build packages on the basis of a package's dependencies.

Adding the `--stream` flag will stream the output of all of the run scripts to your terminal. To add parameters to the run scripts you will need to add `--`. E.g.:
```bash
> lerna run lint --stream --scope=@novicell/flexbox-grid -- --fix
```
In the above example both `--stream` and `--scope` are passed to `lerna run`, but `--fix` is passed on to the `lint` script.

## Versioning, changelogs & publishing
Versioning can only take place on `master` / `main` or feature branches (`feat/*` / `feature/*`) to make sure that we don't bump version number for every little change.

From the root scope:
```bash
> npm run publish
```
or from anywhere:
```bash
> lerna publish --conventional-commits
```
will automatically include a versioning step, and as such it is not a requirement to use `lerna version`. It will also automatically run the `"prepublishOnly"` script in packages, which should build the packages before publishing. You will also need to login to NPM with the command `npm login`.

Publishing/versioning packages this way also creates [changelogs automatically](#conventional-commits), which is why it is important to publish packages in this fashion. Scoping is not (usually) applicable when publishing, since this would break interdependency versioning.

It is not necessary to publish changes when refactoring (when no bugs are fixed or no features are added) or just fixing small bugs, that can be bundled together in a bigger release at a later point. This also means that if you run `npm run publish` you may see unpublished changes to other packages than the one you have worked on. If changes are specifically not meant to be published yet they should be put on a separate branch so the next publish will not catch them as well.

It is worth mentioning, that every change should at least bump a patch version, even though it did not change any functionality or fix any bugs (even if it is only in the development environment). This is to respect if a consumer of the package absolutely does not want any changes to their packages, since everything carries a risk of breaking something.

### Conventional commits
When making changes to the packages, we use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/ "Conventional Commits Spec") to help us with automatic versioning and changelogs. This means that we do not have to think about versioning and updating the changelog when publishing, as long as we format our commit messages correctly. See [the rules](https://www.npmjs.com/package/@commitlint/config-conventional/v/9.0.0 "NPM @commitlint/config-conventional") for more details.

#### Message formatting
You will have to include an empty line between the summary, description, and footer when writing a multiline message. When committing a breaking change you MUST add the `BREAKING CHANGE` footer, and optionally (recommended) use a bang (`!`) after the type (and scope if there is any) to give attention to the breaking change:

👿:
```bash
> git commit -m "feat!: something is not backwards compatible"
```

👿:
```bash
> git commit -m "BREAKING CHANGE: something is not backwards compatible"
```

😁:
```bash
> git commit
feat!: something is not backwards compatible

description goes here

BREAKING CHANGE: the thing that broke compatibility
```

Scopes specified in the parentheses are the package's name (not folder name), but with `@novicell/` omitted. Several scopes can be specified with commas: `feat(vue-breadcrumb,css-utils):` (no spaces between), and a repository-scale scope can be specified by omitting the scope entirely: `feat:`.

#### commitlint
Too see if your commit message is formatted correctly, test it with commitlint:

This will pass:
```bash
> echo 'feat(vue-breadcrumb): added more features' | npx commitlint
```
or for multiline commit messages - just omit the last `'` on the first line:
```bash
> echo 'feat(vue-breadcrumb)!: added more features
>
> this is an in-depth description of the features added
>
> BREAKING CHANGE: this one feature needs to bump the major version of the package' | npx commitlint
```
**Note:**

When using `!` to call attention to a breaking change with `commitlint`, you will have to `echo` with single ticks, e.g.: `echo 'feat(vue-breadcrumb)!: something is not backwards compatible'`.

## Testing
It is recommended to add a `"test"` script to your package.json that calls the shared testing script for that type of package ([read more])(#shared-scripts). Tests can of course be run regularly with `npm run test` (single package) or `lerna run test` (all packages), but testing is also done automatically before every commit.

Testing on every commit is done for 3 reasons:

1. It is easier to fix a problem immediately instead of at a later point.
2. The person creating the problem is in the best position to fix it.
3. In a monorepo with interdependecies, one change can affect multiple packages. Waiting to test until pushing or merging into master might bunch together a whole lot of problems that are harder to fix than incrementally fixing small problems.

If it is necessary to commit changes where tests are failing, you can manually disable the tests (**by commenting them out or using `.skip()` in jest etc.**). Alternatively you can run `git commit` with the `--no-verify` flag, but this will also skip the hook that calls `commitlint`. This means, that if you use the `--no-verify` flag, you will have to [manually check your commit message](#commitlint) before committing your changes, e.g.:

```bash
> MSG='fix(vue-breadcrumb): commitlint compliant message' && echo "$MSG" | npx commitlint && git commit -m "$MSG" --no-verify
```

**It is recommended** to just disable the tests to ensure that changelogs will be generated correctly etc, but the above example *will work for single-line commit messages*.

## Storybook
To see all components for a framework you can (from the root scope) run the command:
`/`
```bash
> npm run <framework>-storybook
```
E.g.:
`/`
```bash
> npm run vue-storybook
```
This will run the bash script `/repoScripts/storybook/vue`.

## New package - what do?
To create and publish a new package you will often have to go through the following steps:
1. Copy an existing package and edit the `package.json` as specified in [package.json](#package.json "package.json") and write the code.
2. Add dependencies with `lerna add @novicell/<package> --scope=@novicell/<this-package>` - Bootstrapping and symlinking comes automatically - if you change/break things refer to [Bootstrapping](#bootstrapping "Bootstrapping") and [Cleaning up](#cleaning-up "Cleaning up").
3. Commit the package with [Conventional Commits](#conventional-commits "Conventional Commits").
4. Login to NPM with `npm login`.
5. Publish (and build) the package with `lerna publish --conventional-commits`
6. Sip espresso ☕

### Major version zero
When creating a package that is not yet stable, they should have a major version 0, e.g.: `0.1.0`. According to the semver specs, every change at this stage could be breaking, so a breaking change will not bump the major version automatically to `1.0.0`. When your package is stable you can commit the changes as you normally would with a correctly formatted commit message, but instead of versioning with the flag `--conventional-commits` you should use:
```bash
> lerna version --conventional-graduate --amend
```
or
```bash
> lerna publish --conventional-graduate --amend
```
and choose a custom version number (`1.0.0`).

**Note:**

Alternatively you should be able to omit `--amend` and include the formatted commit message with `-m` (same syntax as with git) instead of committing your changes first.
### Making changes
When making changes to a package, it is commonly a good idea to clear out the changed package's `dist` folder and `node_modules` since bootstrapping will only add dependencies, not remove them if they have been changed in `package.json` manually instead of being removed with `npm uninstall`. After this, you can bootstrap and build the package again so that any depending packages have access to the newly created distribution-files for testing before ultimately committing the changes and potentially publishing.
