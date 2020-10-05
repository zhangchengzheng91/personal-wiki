# tree shaking 的使用原理和分析

概念：1 个模块可能有多个方法，只要其中的某个方法用到了，则整个文件都会被打到 bundle
里面去，tree shaking 就是只把用到的方法打入 bundle，没用的方法会在 uglify 阶段被
擦除掉。

使用：webpack 默认支持，在 .babelrc 里面设置 modules: false 即可;
mode: production 的情况下默认开启

要求：必须是 ES6 的语法，CJS 的方式不支持。

## DCE(Death Code Elimination)
1. 代码不会被执行，不可到达
1. 代码执行的结果不会被用到
1. 代码只会影响死变量（只读不写）
```javascript
if (false) {
  console.log('this is death code')
}
```

## tree shaking 原理
利用 ES6 模块的特点：
1. 只能做哦为模块顶层的语句出现
1. import 的模块名只能是字符串
1. import binding 是 immutable 的

代码擦除: uglify 阶段删除无用的代码

tree shaking 实现方式：

webpack 当中设置 mode = production，在 .babelrc 文件中配置 env

如果你要把es6转成es5，同时又要开启tree shaking,需要在.babelrc里面设置modules:false,
不然babel默认会把es6转成commonjs规范写法，这样就不能进行tree shaking了。

```json
{
  "presets": [
    [
      "env",  {
        "modules": false
      }
    ],
    "react"
  ]
}
```

如果代码有副作用，tree shaking 会失效。

副作用这个概念来源于函数式编程(FP)，纯函数是没有副作用的，也不依赖外界环境或者改变外界环境。纯函数的概念是：接受相同的输入，任何情况下输出都是一样的。

非纯函数存在副作用，副作用就是：相同的输入，输出不一定相同。或者这个函数会影响到外部变量、外部环境。

函数如果调用了全局对象或者改变函数外部变量，则说明这个函数有副作用。
