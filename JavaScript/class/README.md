# 类(class)

```js
// ES5 实现构造函数
function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return '(' + this.x + ', ' + this.y + ')'
}

var point = new Point(1, 2)
point.toString() // "(1, 2)"
typeof Point // "function"
Point === Point.prototype.constructor // true

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
```

```js
// ES6 类
class Point {
  constructor(x, y) { // 构造方法
    this.x = x
    this.y = y  
  }
  
  toString() {
    return '(' + this.x + ', ' + this.y + ')'
  }
}

var point = new Point(1, 2)
point.toString() // "(1, 2)"
typeof Point // "function"t
Point === Point.prototype.constructor // true

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
```

||构造函数|类|
|:---|:---|:---|
||几可以使用 new 调用，也可以不使用 new 调用| 只能使用 new 调用，否则会报错|
||||
||||

## 取值函数(getter) 和 存值函数(setter)

```js
class MyClass {
  constructor() {}
 
  get prop() {
    return 'getter'
  }
  
  set prop(value) {
    console.log(`setter: ${value}`)
  } 
}

var myclass = new MyClass()
myclass.prop // 'getter'
myclass.prop = 3 // setter: 3
myclass.prop // 3

var descriptor = Object.getOwnPropertyDescriptor(
  MyClass.prototype, 'prop'
)
'get' in descriptor // true
'set' in descriptor // true
```

```js
// 类的静态方法
class Foo {
  static classMethod() {
    return 'hello'
  }
}

class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too'
  }
}

Bar.classMethod()
```

```diff
function addTwoNumbers (num1, num2) {
  - return 1 + 2
  + return num1 + num2
}
```











```
