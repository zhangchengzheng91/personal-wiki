# 编写一个简易的 webpack

## 目的

1. 对构建工具的作用和功能更加清晰
1. 提升编码能力

## 基本知识储备

### 模块化: 增强代码的可读性和维护性

从 匿名闭包 到 angularJS 的依赖注入 到 nodejs 的 commonjs 规范，再到 AMD，再到 ES6

模块化的原因：

1. 传统的网页开发转变成 Web Apps 开发
1. 代码复杂度在逐步提高
1. 分离的 JS 文件/模块，便于后续代码的维护性
1. 部署时希望把代码优化成几个 HTTP 请求

常见的几种模块化方式

```js
// ES module 静态
import * as largeNumber from 'large-number'

largeNumber.add('999', '1')

// CJS 动态
const largeNumber = require('large-number')
largeNumber.add('999', '1')

// AMD
require(['large-number'], function(largeNumber) {
  largeNumber.add('999', '1')
})
```

### AST 语法树

抽象语法树（abstract syntax tree）或者语法树（syntax tree），是源代码的抽象
语法结构的树状表现，这里特指编程语言的源代码。树上的每个节点都表示源代码中的一种
结构。

应用场景：
1. 模版引擎
1. ES6 转换 ES5，TypeScript 转 JavaScript

在线 Demo: [https://esprima.org/demo/parse.html)[https://esprima.org/demo/parse.html](https://esprima.org/demo/parse.html)[https://esprima.org/demo/parse.html)

### 复习 webpack 打包机制

1. 打包出来的是一个 IIFE(匿名闭包)
1. modules 是一个数组。每一项是一个模块初始化函数
1. __webpack_require 用来加载模块，返回 module.exports
1. 通过 WEBPACK_REQIURE_METHOD(0) 启动程序

## 手动实现一个简易的 webpack

1. 可以将 ES6 语法转换成 ES5 语法
    1. 通过 babylon 生成 AST
    1. 通过 babel-core 将 AST 重新生成源码
1. 可以分析模块之间的依赖关系
    1. 通过 babel-traverse 的 ImportDeclaration 方法获取依赖属性
1. 生成 JS 文件可以在浏览器中运行
