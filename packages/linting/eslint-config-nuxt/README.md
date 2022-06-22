# Novicell ESLint config

![npm](https://img.shields.io/npm/v/@novicell/eslint-config-nuxt)

This is an ESLint config for all Nuxt.js projects.

## How to install
1.
    ```bash
    npm i @novicell/eslint-config-nuxt
    ```

2. Create a `.eslintrc.json` in the root of the project
3. Add the following 👇
    ```json
    {
      "extends": "@novicell/eslint-config-nuxt",
      "rules": {
        // Your project specific rules or overrides
      }
    }
    ```
4. Add lint scripts to `package.json`
    ```json
    "scripts": {
      "eslint": "eslint --ext .js,.vue --ignore-path .gitignore .",
      "eslint:fix": "eslint --ext .js,.vue --ignore-path .gitignore . --fix",
    }
    ```
5. Make VS Code autofix issues on save (optional)
   * Create a `.vscode` folder in root and add `settings.json` to it
   * Add the following
   ```json
    {
      "css.validate": false,
      "less.validate": false,
      "scss.validate": false,
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
      }
    }

   ```
6. Configure webpack to autofix eslint issues during build (optional)
    ```javascript
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|ts)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        });
      }
    }
    ```

## Contribution

Looking to contribute something? Here's how you can help. Please take a moment to review our [contribution guidelines](https://github.com/Novicell/novicell-frontend/wiki/Contribution-guidelines) in order to make the contribution process easy and effective for everyone involved.

## License

The Novicell CSS Utils is licensed under the MIT license. (http://opensource.org/licenses/MIT)
