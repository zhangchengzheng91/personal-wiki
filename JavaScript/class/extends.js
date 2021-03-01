class Point {
  static toString() {
    // 在子类的静态方法中，this 指向子类
    return `${this} toString`
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    // super 代表父类构造函数，用来新建父类的 this 对象
    // 子类必须在 constructor 中调用 super
    // 子类自己的 this 对象，必须先通过父类的构造函数完成塑造，得到与父类相同的实例属性和方法，然后再对其加工，加上子类的属性和方法
    // 如果不调用，将得不到 this 对象
    // 1. super 当函数调用，代表父类构造函数，返回子类实例;只能在 constructor 当中调用
    // super(x, y) 相当于 A.prototype.constructor.call(this, x, y)
    super(x, y) // 调用父类的 constructor(x, y)
    // 4. super 当对象使用，进行赋值操作时，super 指向当前实例
    super.y = 3
    this.color = color
  }

  static toString() {
    // 3. super 当对象调用，在静态方法中，指向父类
    return super.toString()
  }

  toString() {
    // 2. super 当对象调用，在原型中，指向父类的原型对象
    return this.color + ' ' + super.toString() // 调用父类的 toString() 方法
  }
}

const cp = new ColorPoint(1, 2, 'red')

// 从子类获取父类
Object.getPrototypeOf(ColorPoint) // Point
