# Tapable 插件架构与 Hooks 设计

Tapable 水龙头

## webpack 的本质

webpack 可以将其理解是一种基于事件流的编程规范，一些列的插件运行。

调用 complier 过程：

webpack 内部实例化 compiler 

```js
// 核心对象 Complier 继承 Tapable
class Complier extends Tapable {

}

// 核心对象 Compilation 继承 Tapable
class Compilation extends Tapable {

}
```

## Tapable 是什么？

Tapable 是一个类似与 Node.js 的 EventEmitter 的库，主要控制钩子函数的发布与
订阅，控制着 webpack 的插件系统。

Tapable 库暴露了很多 Hook 类，为插件提供挂载的钩子

```js
const {
  SyncHook,                 // 同步钩子
  SyncBailHook,             // 同步熔断钩子
  SyncWaterfallHook,        // 同步流水钩子
  SyncLoopHook,             // 同步循环钩子
  AsyncParallelHook,        // 异步并发钩子
  AsyncParallelBailHook,    // 异步并发熔断钩子
  AsyncSeriesHook,          // 异步串行钩子
  AsyncSerierBailHook,      // 异步串行熔断钩子
  AsyncSerierWaterfallHook, // 异步串行流程钩子
} = require('tapable')
```

## Tapable hooks 类型

|type|function|
|:---|:---|
|Hook|所有钩子的后缀|
|Waterfall|同步方法，但是它会传值给下一个函数|
|Bail|熔断：当函数有任何返回值，就会在当前执行函数停止|
|Loop|监听函数，返回 true 表示继续执行，返回 undefined 表示结束循环|
|Sync| 同步方法|
|AsyncSeries| 异步串行钩子|
|AsyncParallel| 异步并行执行钩子|

## Tapable 的使用

### 创建一个 hook

Tapable 暴露出来的都是类方法，new 一个类方法获得我们需要的钩子

class 接受数组参数 options，非必传。类方法会根据传参，接受同样数量的参数。

```js
const hook1 = new SyncHook(['arg1', 'arg2', 'arg3'])
```

### hook 的绑定与执行

Tabpack 提供了同步&异步绑定钩子的方法，并且他们都有绑定事件和执行事件对应的方法。

绑定类似于 EventEmiter 当中的 on; 执行类似于 EventEmiter 当中的 emit; 

|Async*|Sync*|
|:---|:---|
|绑定：tapAsync/tapPromise/tap|绑定：tap|
|执行：callAsync/promise|执行 call|

### hook 的基本用法示例

```js
const hook1 = new SyncHook(['arg1', 'arg2', 'arg3'])

// 绑定事件到 webpack 事件流
hook1.tap('hook1', (arg1, arg2, arg3) => console.log(arg1, arg2, arg3))
// 执行绑定事件
hook1.call(1, 2, 3) // 1 2 3
```

### 实际例子演示

定义一个 Car 方法， 在内部 hooks 上新建钩子。分别是同步钩子 accelerate、brake，
一个异步钩子 calculateRoutes

使用钩子对应的绑定和执行方法

calculateRoutes 使用 tapPromise 可以返回一个 promise 对象

```js

```
