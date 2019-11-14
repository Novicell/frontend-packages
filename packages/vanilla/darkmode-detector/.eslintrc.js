module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint",
        "prefer-arrow"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/array-type": "warn",
        "@typescript-eslint/ban-types": "warn",
        "@typescript-eslint/class-name-casing": "warn",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/consistent-type-definitions": "warn",
        "@typescript-eslint/explicit-member-accessibility": [
            "warn",
            {
                "accessibility": "explicit",
                "overrides": {
                    "constructors": "off"
                },
            }
        ],
        "@typescript-eslint/indent": [
            "warn",
            2
        ],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/member-delimiter-style": [
            "off",
            "error",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-misused-new": "warn",
        "@typescript-eslint/no-namespace": "warn",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-use-before-declare": "off",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/prefer-namespace-keyword": "warn",
        "@typescript-eslint/quotes": [
            "warn",
            "single"
        ],
        "@typescript-eslint/semi": [
            "off",
            null
        ],
        "@typescript-eslint/space-within-parens": [
            "off",
            "never"
        ],
        "@typescript-eslint/triple-slash-reference": "warn",
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/unified-signatures": "warn",
        "arrow-body-style": "warn",
        "arrow-parens": [
            "off",
            "as-needed"
        ],
        "camelcase": "off",
        "capitalized-comments": "warn",
        "complexity": "off",
        "constructor-super": "warn",
        "curly": "warn",
        "dot-notation": "off",
        "eol-last": "off",
        "eqeqeq": [
            "warn",
            "smart"
        ],
        "guard-for-in": "warn",
        "id-blacklist": "off",
        "id-match": "off",
        "import/order": "off",
        "linebreak-style": "off",
        "max-classes-per-file": [
            "warn",
            1
        ],
        "max-len": "off",
        "new-parens": "off",
        "newline-per-chained-call": "off",
        "no-bitwise": "warn",
        "no-caller": "warn",
        "no-cond-assign": "warn",
        "no-console": "warn",
        "no-debugger": "warn",
        "no-empty": "warn",
        "no-eval": "warn",
        "no-extra-semi": "off",
        "no-fallthrough": "off",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "off",
        "no-multiple-empty-lines": "off",
        "no-new-wrappers": "warn",
        "no-shadow": [
            "warn",
            {
                "hoist": "all"
            }
        ],
        "no-throw-literal": "warn",
        "no-trailing-spaces": "off",
        "no-undef-init": "warn",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "warn",
        "no-unused-expressions": "warn",
        "no-unused-labels": "warn",
        "no-var": "warn",
        "object-shorthand": "warn",
        "one-var": [
            "warn",
            "never"
        ],
        "prefer-arrow/prefer-arrow-functions": "warn",
        "prefer-const": "warn",
        "quote-props": "off",
        "radix": "warn",
        "space-before-function-paren": "off",
        "spaced-comment": "warn",
        "use-isnan": "warn",
        "valid-typeof": "off",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "jsdoc-format": true,
                    "no-reference-import": true
                }
            }
        ]
    }
};
