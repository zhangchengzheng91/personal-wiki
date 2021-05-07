# 使用 Promise 兼容 callback

> 这真是一次有意义的奇妙之旅

```js
// 将这个函数修改为 promise 的形式
function asyncFunc(callback) {
  const data = {
    name: 'tom',
    age: 18
  }
  setTimeout(() => {
    callback(data)
  }, 1000)
}

// 可以使用 async 方式调用
function promiseFunc() {
  return new Promise(resolve => {
    function callback(data) {
      resolve(data)
    }
    asyncFunc(callback)
  })
}
```
