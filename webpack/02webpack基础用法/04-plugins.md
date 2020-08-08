# plugins

插件用于优化 bundle 文件的优化，资源管理和环境变量注入

> 任何 loaders 完成不了的工作，都可以通过 plugins 去完成

作用于整个构建过程

常见 plugins：

| 名称 | 描述 |
|:--|:--|
| optimization.splitChunks【CommonsChunkPlugin】 | 将 chunks 相同的模块代码提取成公共 js |
| CleanWebpackPlugin | 清理构建目录 |
| mini-css-extract-plugin【ExtractTextWebpackPlugin】 | 将 css 从 bundle 文件里面提取成一个独立的 css 文件 |
| CopyWebpackPlugin | 将文件或者文件夹拷贝到构建的输出目录 |
| HtmlWebpackPlugin | 创建 html 文件去承载构建输出的 bundle，多页面打包较常用 |
| UglifyjsWebpackPlugin | 压缩 js |
| ZipWebpackPlugin | 将打包出的资源生成一个 zip 包 |

plugins 用法
```javascript
module.exports = {
  ...,
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'    
    })
  ],
  ...
}
```
