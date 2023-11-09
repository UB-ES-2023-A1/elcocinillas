const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  publicPath: 'https://elcocinillas.azurewebsites.net',
});
