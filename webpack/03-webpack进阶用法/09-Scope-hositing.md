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

老师帮忙确认一下以下理解是否正确：
可以简单的把scope hoisting理解为是把每个模块被webpack处理成的模块初始化函数整理到一个统一的包裹函数里，
也就是把多个作用域用一个作用域取代，以减少内存消耗并减少包裹块代码，从每个模块有一个包裹函数变成只有一个
包裹函数包裹所有的模块，但是有一个前提就是，当模块的引用次数大于1时，比如被引用了两次或以上，那么这个效果
会无效，也就是被引用多次的模块在被webpack处理后，会被独立的包裹函数所包裹。

理解的完全正确。Scope housting对模块的引用次数大于1次是不产生效果的，这个其实也很好理解，如果一个模块引
用次数大于1次，那么这个模块的代码会被内联多次，从而增加了打包出来的js bundle的体积。
