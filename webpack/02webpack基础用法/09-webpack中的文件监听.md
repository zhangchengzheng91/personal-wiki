# webpack 中的文件监听

文件监听是在发现源码发生变化时，自动重新构建出新的输出文件。

webpack 开启监听模式，有两种方式：
1. 启动 webpack 命令时，带上 --watch 参数，唯一缺陷：每次需要手动刷新浏览器
1. 在配置 webpack.config.js 中设置 watch:true

文件监听的原理分析：

轮询判断文件的最后编辑时间是否变化

某个文件发生了变化，并不会立刻告诉监听者，而是先缓存起来，等 aggregateTimeout

```javascript
module.exports = {
    ...,
    watch: true, // 默认 false，也就是不开启
        watchOptions: { // 只有开启监听模式时，watchOptions 才有意义
        ignored: /node_modules/, // 默认为空，不监听的文件或者文件夹，支持正则匹配
        aggregateTimeout: 300, // 监听到变化后会等 300ms 再去执行，默认 300ms
        poll: 1000, // 判断文件是否发生变化时通过不停询问系统指定文件有没有变化实现的，1000ms 询问一次
    },
    ...,
}
```
