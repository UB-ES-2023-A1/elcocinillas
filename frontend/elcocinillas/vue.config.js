const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  publicPath: process.env.PUBLIC_PATH || '/elcocinillas'
});
