# webpack 启动过程分析

## 开始：从 webpack 命令行说起

## 查找 webpack 入口文件

在命令行运行命令以后，npm 会让命令行工具进入 node_modules/.bin 目录查找是否存在
webpack.sh 或者 webpack.cmd 文件，如果存在，就执行；不存在，就抛出错误。

webpack package.json 文件
```json
{
   "bin": {
      "webpack": "bin/webpack.js"
   }
}
```

实际的入口是: node_modules/webpack/bin/webpack.js

## 分析 webpack 的入口文件：webpack.js

```js
process.exitCode = 0 // 1. 正常执行返回
const runCommand = (command, args) => {} // 2. 运行某个命令
const isInstalled = packageName => {} // 3. 判断某个包是否安装
const CLIs = [] // 4. webpack 可用 CLI：webpack-cli 和 webpack-command
const installedClis = CLIs.filter(cli => cli.installed) // 5. 判断是否两个 CLI 都安装了
if (installedClis.length === 0) { // 6.根据安装数量进行处理
  
} else if (installedClis.length === 1) {

} else {

}
```

## 启动后结果

webpack 最终找到 webpack-cli || webpack-command 这个 npm 包，并且最终执行CLI
