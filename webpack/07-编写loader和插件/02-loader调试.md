# 使用 loader-runner 高效进行 loader 调试

## loader-runner 介绍

定义：loader-runner 允许你在不安装 webpack 的情况下运行 loaders

作用：

1. 作为 webpack 的依赖，webpack 中使用它执行 loader
1. 进行 loader 的开发和测试


## loader-runner 的使用
```js
import { runLoader } from 'loader-runner'

runLoader({
  resource: '/abs/path/to/file.text?query',  // String 资源的绝对路径（可以增加查询字符串）
  loaders: ['/abs/path/to/loader.js?query'],   // String[] loader 的绝对路径（可以增加查询字符串）
  context: { minimzie: true },   // 基础上下文之外的额外 loader 上下文
  readResource: fs.readFile(fs), // 读取资源函数
}, function(err, result) {
  
})
```

## 开发一个 raw-loader

将一个文件内容转化为 string

```js
// src/raw-loader.js

module.exports = function(source) {
  const json = JSON.stringify(source)
    .replace(/\u2028/g, '\\u2028') // 为了安全起见，ES6 模版字符串问题
    .replace(/\u2029/g, '\\u2029')


  return `export default ${json}`
}
```

##  使用 runner-loader 调试 loader

```js
// run-loader.js
const fs = require('fs')
const path = require('path')
const { runLoaders } = require('loader-runner')

runLoaders({
  resource: './demo.txt',
  loaders: [path.resolve(__dirname, './loader/raw-loader')],
  readSource: fs.readFile.bind(fs)
}, (err, result) => {
  err ? console.log(err) : console.log(result)
})
```

运行查看结果
```bash
node run-loader.js
```
