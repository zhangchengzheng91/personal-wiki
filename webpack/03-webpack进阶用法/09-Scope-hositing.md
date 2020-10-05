# Scope hoisting 使用和原理分析

现象：构建后的代码存在大量闭包代码

会导致的问题：
1. 大量函数闭包包裹代码，导致体积增大啊（模块越多越明显）
1. 运行代码是创建的函数作用域变多，内存开销变大

模块转化分析
1. 被 webpack 转换后的模块会带上一层包裹
1. import 会被转换成 __webpack_require

进一步分析 webpack 的模块机制
1. 打包出来的是一个 IIFE（匿名闭包）
1. modules 是一个数组，每一项是一个模块初始化函数
1. __webpack_require 用来加载模块，返回 module.exports
1. 通过 WEBPACK_REQUIRE_METHOD(0) 启动程序

scope hoisting 原理

原理：将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当重命名一些变量以防止
变量名冲突

对比：通过 scope hoisting 可以减少函数声明代码的内存开销【借鉴 roll up】

scope hoisting 使用

webpack mode 为 production 默认开启

必须是 ES6 语法，CJS 不支持

```javascript
module.exports = {
  ...,
  mode: 'production',
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(), // webpack 3 需要手动引入
  ],
  ...,
}
```
