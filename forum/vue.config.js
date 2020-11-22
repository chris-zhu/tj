// const path = require('path')

module.exports = {
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:1324",
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         "^/api": '/api'
  //       }
  //     }
  //   }
  // },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = `+ dog`
        return args
      })
  },
  // outputDir: path.resolve(__dirname, '../server/public/web'),
  assetsDir: 'static',
  productionSourceMap: false
}