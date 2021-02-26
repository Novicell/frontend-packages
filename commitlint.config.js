module.exports = {
  extends: [
    "@commitlint/config-conventional",
    "@commitlint/config-lerna-scopes"
  ],
  rules: {
    "header-max-length": [0, "always"]
  },
  ignores: [
    (msg) => msg.includes('Publish')
  ]
}
