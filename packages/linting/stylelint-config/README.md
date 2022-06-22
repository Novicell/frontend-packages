# Novicell Stylelint config

![npm](https://img.shields.io/npm/v/@novicell/stylelint-config)

This is an Stylelint config for all projects written with either vanilla CSS or PostCSS.

## How to install
1.
    ```bash
    npm i @novicell/stylelint-config
    ```

2. Create a `.stylelintrc.json` in the root of the project
3. Add the following 👇
    ```json
    {
      "extends": "@novicell/stylelint-config",
      "rules": {
        // Your project specific rules or overrides
      }
    }
    ```
4. Add lint scripts to `package.json`
    ```json
    "scripts": {
      "stylelint": "stylelint '**/*.{css,vue}'",
      "stylelint:fix": "stylelint '**/*.{css,vue}' --fix"
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
        "source.fixAll.stylelint": true,
      }
    }

   ```
6. Use [StylelintWebPackPLugin](https://webpack.js.org/plugins/stylelint-webpack-plugin/). to fix your issues on build (optional)

## Contribution

Looking to contribute something? Here's how you can help. Please take a moment to review our [contribution guidelines](https://github.com/Novicell/novicell-frontend/wiki/Contribution-guidelines) in order to make the contribution process easy and effective for everyone involved.

## License

The Novicell CSS Utils is licensed under the MIT license. (http://opensource.org/licenses/MIT)
