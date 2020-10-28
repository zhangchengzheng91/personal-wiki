# 使用Tree Shaking擦除无用的 JavaScript 和 CSS

## tree shaking

### 概念

一个模块可能有多个方法，只要其中的某个方法使用到了，则整个文件都会被打包到 bundle 里面
去，tree shaking 就是只把用到的方法打入 bundle，没用到的方法会在 uglify 阶段被擦除
掉

### 使用

webpack 默认支持。在 .babelrc 里面设置 modules: false 即可

production mode 的情况下默认开启

### 要求

必须是 ES6 的语法，CJS 的方式不支持

## 无用的 CSS 如何删除掉？

方案一：purifyCSS: 遍历代码，识别已经用到的 CSS class

方案二：uncss: HTML 需要通过 jsdom 加载，所有的样式通过 PostCSS 解析，通过
document.querySelector 来识别在 html 文件里面不存在的选择器

## 在 webpack 中如何使用 PurifyCSS ?

使用 purgecss-webpack-plugin 和 mini-css-extract-plugin 配合使用。

```js
const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new PurgecssPlugin({
      path: glob.sync(`${PATHS}.src/**/*`, { nodir: true  })
    })
  ]
}
```
