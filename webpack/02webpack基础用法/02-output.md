# output

output 用来告诉 webpack 如何将编译后的文件输出到磁盘

output 的路径必须是一个绝对路径，不能是相对路径

```javascript
// 单入口配置
module.exports = {
  entry: '[filepath]',
  output: {
    filename: '[bundle_name]',
    path: '[bundle_path]'
  }
}

// 多入口配置
module.exports = {
  entry: {
    app: '[app_file]',
    search: '[search_file]',
  },
  output: {
    filename: '[name].js', // 通过占位符确保文件名称唯一
    path: '[bundle_path]'
  }
}
```
