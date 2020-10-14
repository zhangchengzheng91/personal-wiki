# webpack 打包库和组件

webpack 除了可以用来打包应用，也可以用来打包 js 库

实现一个大整数加法库的打包

1. 需要打包压缩版【开发阶段】和非压缩版【线上打包】两个版本
1. 支持 AMD/CJS/ESM 模块引入

一般来说 rollup 更适合打包库和组件，相对 webpack 更加纯粹。而且使用 rollup 相对更加简单。
但是 webpack 因为功能比较强大，所以使用场景也是非常多的。

## 库的目录结构和打包要求

打包输出的库名称：
1. 为压缩版本 large-number.js
1. 压缩版本 large-number.min.js

```tree
/dist
    -large-number.js
    -large-number.min.js
-webpack.config.js
-package.json
-index.js
/src
    -index.js
```

## 支持的使用方式
1. 支持 ES module
```javascript
import * as largeNumber from 'large-number'
largeNumber.add('999', '1')
```
1. 支持 CJS
```javascript
const largeNumber = require('large-number')
largeNumber.add('999', '1')
```
1. 支持 AMD
```javascript
require(['large-number'], function(largeNumber) {
    largeNumber.add('999', '1')
})
```
1. 可以直接通过 script 引入
```html
<script src=""></script>
<script>
  largeNumber.add('999', '1')
  window.largeNumber.add('999', '1')
</script>
```

## 如何将库暴露出去？

1. library: 指定库的全局变量
1. libraryTarget: 支持库引入方式

```javascript
module.exports = {
  mode: 'none',
  entry: {
    "large-number": './src/index.js',
    'large-number.min': './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'largeNumber',
    libraryExport: 'default', // 如果不设置，使用时 (new largeNumber()).default
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
     minimizer: [
      new TerserPlugin({ // 会同时压缩 ES6 的语法，uglify 遇到 ES6 的语法会报错
        include: /\.min\.js$/
      })
    ]
  }
}
```

## 设置入口文件

package.json 的 main 字段为 index.js

```javascript
if (process.env.NODE_ENV === 'production') {
  exports = require('./dist/large-number.min.js')
} else {
  exports = require('./dist/large-number.js')
}
```

同时修改 package.json
```json
{
  "main": "json",
  "script": {
    "build": "../node_modules/.bin/webpack --config webpack.config.js",
    "prepublish": "npm run build" // 每次发布之前自动构建
  }
}
```

## 发布 package

```bash
npm publish
```

## 登录 npm 验证发布的包

## 补充

1. 补充 README.md 的使用文档
1. 增加单元测试

