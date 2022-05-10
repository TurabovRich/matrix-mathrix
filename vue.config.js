const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // base: '/some/'
  publicPath: process.env.NODE_ENV === 'production'
  ? '/production-sub-path/'
  : '/'
})
