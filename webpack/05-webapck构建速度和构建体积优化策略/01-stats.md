# 初级分析：使用 webpack 内置的 stats

## stats 构建的统计信息

构建总共消耗时间，构建之后的资源体积大小

## package.json 中使用 stats

```json
{
  "scritps": {
    "build:stats": "webpack --env production --json > stats.json"
  }
}
```

## Node.js 中使用

```js
const webpack = require('webpack')
const config = require('./webpack.config.js')

webpack(config, (err, stats) => {
  if (err) {
    return console.error(err)
  }
  if (stats.hasErrors()) {
    return console.error(stats.toString('error-only'))
  }
  console.log(stats)
})
```

颗粒度太粗，看不出问题所在。

无法解析文件过大原因
