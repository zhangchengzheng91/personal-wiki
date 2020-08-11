# 解析 css less

解析 CSS

css-loader 用于加载 .css 文件，并且转换成 commonjs 对象

style-loader 将样式通过 <style> 标签插入到 head 中

```javascript
const path = require('path')

module.exports = {
  ...,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']  
      } 
    ]
  },
  ...,
}
```

解析 less 和 sass

less-loader 将 less 转换成 css

> less-loader 需要依赖 less，所以 npm install less less-loader

> loader 链式调用，从右到左

```javascript
module.exports = {
  ...,
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]  
  }
}
```
