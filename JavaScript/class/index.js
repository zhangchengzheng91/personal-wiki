const METHOD_NAME = 'getArea'
const PRIVATE_FUNC = Symbol('这是一个私有方法')

class Point {
  // 静态方法，不会被实例继承，只能通过类调用
  // 静态方法可以于非静态方法重名
  // 父类的静态方法可以被子类继承
  static bar() {
    // this 指向类，而非实例
    this.baz();
  }
  static baz() {
    console.log('hello');
  }
  baz() {
    console.log('world');
  }

  // 静态私有属性，只能在内部调用
  static #totallyRandomNumber = 4;

  static #computeRandomNumber() {
    return FakeMath.#totallyRandomNumber;
  }


  // [提案]在类的内部定义类的静态属性
  static myStaticProp = 42;
  // 可以在最顶层定义实例的私有属性，而非 constructor 函数当中;只能定义常量
  count = 10
  // z = z error
  // 定义实例的私有属性
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  // 对应 ES5 的原型方法，不可枚举;
  // ES5 中原型上的方法是可枚举的
  // Object.keys(Point.prototype) = []
  // Object.getOwnPropertyNames(Point.prototype) // ["constructor","toString","toValue"]
  toString() {

  }

  // 对应 ES5 的原型方法，不可枚举
  toValue() {

  }

  // 取值函数，对某个属性的取值进行拦截 point.prop // 'getter'
  get prop() {
    return 'getter'
  }

  // 存值函数，对某个属性的存值进行拦截 point.prop = 123 // 'setter 123'
  set prop(value) {
    console.log('setter ', value)
  }

  // 属性表达式
  [METHOD_NAME]() {
    return '属性表达式'
  }

  // 私有方法:通过别名的方式实现
  _bar() {

  }
  // 私有方法：将私有方法移除类实现
  _foo(foo) {
    return bar.call(this, foo)
  }
  // 私有方法：Symbol
  [PRIVATE_FUNC]() {

  }
  // 私有方法：#
  #sum() {

  }
  // [提案]私有属性
  #count = 1
}

function bar() {

}

// 定义类的静态属性
Point.prop = 1

const point = new Point(1, 2)

// 存值函数和取值函数是设置在属性的 Descriptor 对象上的
const descriptor = Object.getOwnPropertyDescriptor(
  Point.prototype, "prop"
)

'get' in descriptor // true
'set' in descriptor // true

point[METHOD_NAME]() // "属性表达式"
point.getArea() // "属性表达式"

function PointES5(x, y) {
  this.x = x
  this.y = y
}

PointES5.prototype.toString = function() {

}

PointES5.prototype.toValue = function() {

}

Object.keys(PointES5.prototype) // ["toString", "toValue"]
Object.getOwnPropertyNames(PointES5.prototype) //  ["constructor", "toString", "toValue"]
