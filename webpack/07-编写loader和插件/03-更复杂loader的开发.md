# 更复杂 loader 的开发

## loader 的参数获取

通过 loader-utils 的 getOptions 方法获取

```js
const loaderUtils = require('loader-utils')

module.exports = function(content) {
  const { name } = loaderUtils.getOptions(this)
}
```

## loader 异常处理

1. loader 内直接通过 throw 抛出

```js
throw new Error('loader error')
```

1. 通过 this.callback 传递错误
 
```js
this.callback(
  err: Error || null,
  content: string | Buffer,
  sourceMap: SourceMap,
  meta
)
```

## loader 的异步处理

通过 this.async 来返回一个异步函数。第一个参数是 Error，第二个参数是处理的结果。

示例代码

```js
module.exports = function(input) {
  const callback = this.async()
  
  setTimeout(() => {
    callback(null, input)
  }, 5000)
}
```

## loader 当中使用缓存

webpack 中默认开启 loader 缓存
    可以使用 this.cacheable(false) 关掉缓存
    
缓存条件：loader 的结果在相同的输入下有确定的输出
    有依赖的 loader 无法使用缓存


## loader 如何进行文件输出

通过 this.emitFile 进行文件写入

```js
const loaderUtils = require('loader-utils')

module.exports = function(content) {
  const url = loaderUtils.interpolateName(this, '[hash].[ext]', {
    content
  })
  
  // 此处的 emitFile 是 webpack 内部的 hooks，不是 loader 当中的this 提供的方法
  this.emitFile(url, content)

  const exportPath = `__webpack_pubilc_path+${JSON.stringify(url)}`
  
  return `export default ${exportPath}`
}
```
