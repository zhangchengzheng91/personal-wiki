# fetch

fetch 以返回 Promise 方式替代 XMLHttpRequest 实现的异步请求。可以使代码书写显得更简介。

## 如何终止一个 fetch 请求

DOM API AbortControllerr 和 AbortSignal.

终止 fetch 会同时终止请求和响应，并抛出new DOMException('Aborted', 'AbortError')错误。另外，同一个 AbortSignal对象（上例中的signal）可以用于取消多个fetch请求。

http status 为 cancel 

若果多个 fetch 使用同一个 signal，触发 abortController.abort() 会终止所有的 fetch

```js
const abortController = new AbortController()
const signal = abortController.signal
signal.addEventListener('abort', function() {
  console.log(signal.aborted) // true
})

abortController.abort()
```

```js
// 1. 创建一个 AbortController 实例
const abortController = new AbortController()
// 2. 该实例具有 signal 属性
const signal = abortController.signal
// 3. 将 signal 传递给 fetch option 的 signal
const init = {
  signal,
  method: 'get'
}
fetch('http://localhost:3060/xhr', init)
    .then(response => console.log(response))
    .catch(err => {
        // 这里可以捕获 abort error
        if (err.name === 'AbortError') {
            console.log('fetch was aborted')
        } else {
            console.error('Oops!', err)
        }
    })

// 2s 后取消请求
setTimeout(() => {
    // 4. 调用 AbortController 的 abort 属性来取消所有使用该信号的 fetch。
    abortController.abort()
}, 1000 * 2)
```

## 如何终止一个 XMLHttpRequest 请求

```js
var xhr = new XMLHttpRequest()
var method = 'get'
var url = 'http://localhost:3060/xhr'
xhr.open(method, url, false)

xhr.onreadystatechange = function (res) {
  console.log(res.currentTarget.readyState)
  console.log(res.currentTarget.response)
}

xhr.send()

// 取消请求
xhr.abort()
```

参考连接

* [MDN AbortController](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController)
* [如何终止 Fetch 请求？](https://my.oschina.net/u/173474/blog/4461505)
* [掘金-如何取消 Fetch 请求](https://juejin.cn/post/6844904113130438663)
