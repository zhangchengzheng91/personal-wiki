# entry

用来指定 webpack 的打包入口

![webpack-image.png](./webpack-image.png)

依赖图的入口是 entry。

对于非代码，比如图片、字体依赖也会不断加入到依赖图中

## entry 基本用法
```javascript
// 单入口： entry 是一个字符串
// 单页应用
module.exports = {
  entry: '[filepath]'
}

// 多入口: entry 是一个对象
// 多页应用
module.exports = {
  entry: {
    app: '[filepath]',
    mian: '[filepath]'
  }
}
```
