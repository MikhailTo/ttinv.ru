const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'quasar'
  ],
  chainWebpack: config => {
    config.module.rule('pdf')
      .test(/\.(pdf)(\?.*)?$/)
      .use('file-loader')
        .loader('file-loader')
        .options({
          name: './src/assets/pdf/[name].[hash:8].[ext]'
        })

  },
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
})
