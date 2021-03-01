# `Vue Packages`

We store the Vue packages in here, they can depend on both Vanilla, Core packages, and eachother.

## Testing
Vue packages use jest & vue-test-utils for testing.

The following packages are required in the devDependencies of the package (so the binaries are not hoisted):
```
@vue/cli-plugin-unit-jest
@vue/cli-service
@vue/test-utils
```

See [vue-test-utils documentation](https://vue-test-utils.vuejs.org/ "vue-test-utils") for information about how to mount and test Vue components.

## Development-server
For the development server to work, you will need to install the following package as a devDependency:
```
@vue/cli-service-global
```

Running the development server:
```bash
> npm run dev
```
This command does not serve the component directly, but rather the wrapper file, demo.vue:
```
├── dev
|  └── demo.vue
└── src
   └── nc-link.vue
```
This allows you to inject props, set classes, and change other things in the component's environment.
