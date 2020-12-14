const path = require('path')
// const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin')
const { styles } = require('@ckeditor/ckeditor5-dev-utils')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  outputDir: 'ui',
  filenameHashing: true,
  lintOnSave: 'error',
  // parallel: false,
  configureWebpack: {
    // plugins: [
    //   new CKEditorWebpackPlugin({
    //     language: 'en'
    //   })
    // ]
  },
  transpileDependencies: [
    /ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/
  ],
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude
      /* ckeditor icon文件 */
      .add(path.join(__dirname, 'node_modules', '@ckeditor'))
      .end()
    /* ckeditor icon文件 */
    config.module
      .rule('cke-svg')
      .test(/ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/ )
      .use('raw-loader')
      .loader('raw-loader')
    config.module
      .rule('cke-css')
      .test(/ckeditor5-[^/\\]+[/\\].+\.css$/)
      .use('postcss-loader')
      .loader('postcss-loader')
      .tap(() => (
        styles.getPostCssConfig({
          themeImporter: {
            themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
          },
          minify: true
        })
      ))
  }
}
