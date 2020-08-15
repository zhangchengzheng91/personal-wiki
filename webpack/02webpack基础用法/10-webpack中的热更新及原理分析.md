# webpack 中的热更新及原理分析

热更新: webpack-dev-server

WDS 不刷新浏览器

WDS 不输出文件，而是放在内存中

使用 HotModuleReplacementPlugin 插件

```json
"script": {
	"dev": "webpack-dev-server --open" // --open 构建完成之后自动开启浏览器
}
```
```javascript
module.exports = {
	...,
	plugins: [
    new webpack.HotModuleReplacementPlugin() // 热更新插件
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 内容目录，默认为当前目录
    hot: true, // 使 HotModuleReplacementPlugin 插件生效
    port: 8080 // 服务端口
  },
  ...
}
```

注意点：
1. 查看当前所有构建结果
		http://localhost:8080/webpack-dev-server
1. 构建结果中，默认自带 html 文件，这里存在一个细节问题：
	在这个 html 文件中，是一个纯净的 html 文件。具体表现为：除了基本的 head 和 body 标签，只额外增加了一个
	script 标签，来引入对应构建之后的 js 文件。

	在一般情况是没有问题：例如我在 js 文件中只做了一个 document.write 的处理，那么结果可以正常展示。

	但是，如果你在 js 文件中引用了 html 中的某个 element，例如:
	```javascript
	ReactDOM.render(
		<div>this is React<div/>,
		document.getElementById('root')
  )
	```
	这时候，如果浏览页面，会发现页面是空白的。这是因为，在这个 html 文件中，寻在不到 \<div id="root"\>\</div\>,
	所以，看不到正确的 this is React 结果。

	如果想要 DOM 元素正确渲染，引入 HtmlWebpackPlugin 插件，生成正确的 html 文件即可。


热更新：使用 webpack-dev-middleware

WDM 将 webpack 输出的文件传输个服务器

使用于灵活的定制场景

```javascript
const express = require('express')
const webpack = require('webapck')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}))

app.listen(3000, function() {
	console.log('Example app listening on port 3000')
})
```

热更新的原理分析：

webpack Compiler： 将 JS 编译成 bundle

HMR Server 将热更新的文件输出给 HMR runtime

Bundle server 提供文件在浏览器访问

HMR runtime 会被注入到浏览器，更新文件的变化

bundle.js 构建输出的文件
