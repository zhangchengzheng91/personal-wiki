# Promise

特点：
1. 对象的状态不受外界的影响。包含三种状态：pending, fulfilled, rejected。只有异步
操作的结果可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
1. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。

缺点：
1. 无法取消 Promise，一旦建立它就会理解执行，无法中途取消。
1. 如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。
1. 当处于 pending 状态时，无法得知目前紧张到哪一个阶段（刚刚开始还是即将完成）

如果某些事件不断地发生，一般来说，使用 Stream 模式是比部署 Promise 更好到选择。


```js
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1
```

立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。

## Promise.race() 其中一个返回，其他的是否会继续执行？


- [使用Promise兼容callback](javaScript/Promise/使用Promise兼容callback.md)

