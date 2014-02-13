
Package.describe({
  summary: "server-side yaml parser plugin for meteor.js"
});


Package._transitional_registerBuildPlugin({
  name: "yaml",
  use: [],
  sources: [
    "plugin/yaml-loader.js"
  ],
  npmDependencies: {
    // see: https://github.com/jeremyfa/yaml.js
    "yamljs": "0.1.3"
  }
});
