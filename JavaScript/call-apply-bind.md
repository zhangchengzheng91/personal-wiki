# call-apply-bind.md

## 分析 3 个方法的作用

* 改变 this 指向

    将这个方法添加到调用对象上，根据执行对象内部方法，this 指向对象的原理，此时在 fn 的内部 this 指向当前对象

* 传入参数

    可以直接使用 ES6 的扩展运算符，或者直接使用 arguments 变量
    
* call、apply 返回函数结果，bind 返回新函数

    call、apply return func
    
    bind return () => func

    * 返回一个函数，可以使用闭包
    * 因为返回的新函数也可以使用 new 操作符，所以在新函数内部需要判断是否使用了 new 操作符

## 手动实现 call apply

```js
let a = {
  fu: function() {
    console.log(this)
  }
}

a.fn() // Object {fn: function}  

Function.prototype.myCall = function(obj, ...args) {
  console.log(obj)
  obj._fn_ = this // 在 obj 上添加 _fn_ 属性，值是 this（要调用此方法的那个函数对象）
  const result = obj._fn_(...args) // 在 obj 上调用函数，那函数的 this 值就是 obj
  delete obj._fn_ // 再删除 obj 的 _fn_ 属性，去除影响
  return result
}

let test = {
  name: 'test'
}

let other = {
  name: 'other',
  fn: function() {
    console.log(this.name)
  }
}

other.fn()
other.fn.call(test)
other.fn.myCall(test)
```

## 手动实现 bind

```js
Function.prototype.myBind = function(obj, ...arg1) {
  const self = this
  return (...arg2) => {
    return self.apply(obj, arg1.arg1.concat(arg2))
  }
}
```

## 参考连接

* [简书-<JS>手动实现call, apply, bind](https://www.jianshu.com/p/3b69fb0d4c2f)
