# loaders

webpack 开箱即用只支持 JS 和 JSON 两种文件类型，通过 loaders 去支持其他文件类型并且把他们转换成
有效的模块，并且可以添加到依赖图中。

本身是一个函数，接受源文件座位一个参数，返回转换的结果。每个 loader 一般只做一件事。

.less 文件经过 less-loader 处理成 .css 文件，css-loader 将 .css 文件转换成 commonjs 对方放到
js 里面，最后页面渲染的时候要想把样式显示出来，需要借助 style-loader 或者 MiniCssExtractPlugin.loader
把 css 插入到 html 里面的 style 或者以 link 外部 css 的方式。

loader 之间是否存在叠加处理，这个就看 loader 点的作者了，可以把 loader 的指责分的更细。比如把
 url-loaer 的功能拆分成 file-loader 和一个用 base64 的 loader，也可以一个 loader 做几件事情。
 这里，更倾向把 loader 指责划分更细和清楚。

常见的 loaders：

| 名称 | 描述 |
|:--|:--|
| babel-loader | 转换 ES6、ES7 等 JS 新特性语法 |
| css-loader | 支持 .css 文件的加载和解析|
| less-loader | 将 .less 文件转换成 .css |
| ts-loader | 将 ts 转换成 js |
| file-loader | 进行图片、字体等的打包 |
| raw-loader | 将文件以字符串的形势导入 |
| thread-loader | 多进程打包 js 和 css |

loaders 的用法
```javascript
const path = require('path')

module.exports = {
  entry: '[file_name]',
  output: {
    filename: '[filename]',
    path: '[output_path]'
  },
  module: {
    rules: [
      {
        test: /\.txt$/, // test 指定匹配规则
        use: 'raw-loader' // use 指定使用的 loader 名称
      }
    ] 
  }
}
```
