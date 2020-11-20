# loader 的链式调用和执行顺序

## 一个最简单的 loader 代码结构

定义： loader 只是一个导出为函数的 JavaScript 模块

```js
module.exports = function(source) {
  // 做一些处理，返回一个处理之后的 source
  return source
}
```

## 多 loader 时的执行顺序

多个 loader 串行执行，从右往左

```js
module.exports = {
  ...,
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]  
      }
    ]
  }
}
```

## 函数组合的两种情况

为什么 loader 的执行顺序是从右往左？

Unix 中的 pipeline

Compose(webpack 采取的是这种)

```js
compose = (f, g) => (...args) => f(g(...args))
```

## 通过一个例子验证 loader 的执行顺序

