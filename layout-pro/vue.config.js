const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  // pages: {
  //   index: {
  //     entry: 'examples/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html'
  //   }
  // },
  chainWebpack: (config) => {
    // svg
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
