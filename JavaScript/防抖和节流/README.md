# 防抖和节流

函数防抖和截流，都是控制时间触发频率的方法

## 应用场景

* 输入框持续输入，将输入的内容二次处理：format、远程校验【密码强度】、模糊搜索
* 多次触发点击事件
* onScroll
* 鼠标移动，mousemove
* 视窗大小变化 resize

## 防抖

当持续触发事件的时候，函数是完全不执行的，等最后一个触发结束的一段时间之后，再去执行。

debounce 方法的电梯。如果电梯里有人进来，等待15秒。如果又人进来，15秒等待重新计时，直到15秒超时，开始运送。

```js
// delay 延迟执行时间
// 如果事件一直触发，那么永远不会触发事件
function debounce(func, delay) {
	let timeout
  return function() {
    clearTimeout(timeout) // 如果持续触发，那么就清除定时器，定时器的回调就不会执行
    timeout = setTimeout(() => {
      func.apply(this, arguments)
    }, delay)
  }
}

// 使用节流来加强防抖
function debounce(fn, time) {
    let oldTime = 0,
        timer = null;
    return () => {
        const nowTime = new Date()
        if (nowTime - oldTime < time) {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                oldTime = nowTime
                fn()
            }, time);
        } else {
            // 用户重复触发，到达事件节点 还是会去执行事件
            oldTime = nowTime
            fn()
        }
    }
}
```

## 节流

一段时间内，只执行一次

throttle 方法的电梯。保证如果电梯第一个人进来后，15秒后准时运送一次，不等待。如果没有人，则待机。

```js
// 第一次不执行
function throttle(func, delay) {
  let run = true
  return function () {
    if (!run) {
      return  // 如果开关关闭了，那就直接不执行下边的代码
    }
    run = false // 持续触发的话，run一直是false，就会停在上边的判断那里
    setTimeout(() => {
      func.apply(this, arguments)
      run = true // 定时器到时间之后，会把开关打开，我们的函数就会被执行
    }, delay)
  }
}

// 第一次会执行
function throttle(func, delay) {
	let oldTime = 0
	let timer = null
	return function() {
		const newTime = new Date()
		if (nowTime - oldTime >= delay) {
			func()
			oldTime = newTime
		}
	}
}
```

参考连接:
* [知乎-函数的防抖和节流是个啥？？？](https://zhuanlan.zhihu.com/p/72923073)
* [知乎-前端性能优化-图片懒加载（防抖、节流）](https://zhuanlan.zhihu.com/p/100415787)
* [知乎-【 js 性能优化】underscore throttle 与 debounce 节流](https://zhuanlan.zhihu.com/p/26054718)
