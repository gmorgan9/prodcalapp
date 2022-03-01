const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'Calendar App',
    themeColor: '#3D89BA'
  }
})
