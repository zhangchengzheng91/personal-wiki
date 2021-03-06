# prototype-chain 原型链


每个函数都有一个原型对象，原型对象都包含一个指向构造函数的指针【
prototype.constructor】，而实例都包含一个指向原型对象内部的指针【__proto__】。
假如，让原型对象等于另一个对象的实例，此时的原型对象将包含一个指向另一个原型
的指针，相应地，另一个原型中也包含指向另一个构造函数的指针。假如另一个原型又
是另一个类型的实例，那么上述关系依然成立，如此层层递进，就构成了实例与原型的
链条。这就是原型链。

```js
function Fruits() {
  this.category = 'fruits'
}

Fruits.prototype.getCategory = function() {
  return this.category
}

function Apple() {
  this.name = 'apple'
}

Apple.prototype = new Fruits()
Apple.prototype.getName = function() {
  return this.name
}

var instance = new Apple()
instance.getCategory() // 'fruits'
instance.getName() // 'apple'
instance.__proto__ === Fruits.prototype // false
instance.__proto__ === Apple.prototype // true
```

继承实现：将子类型的 prototype 指向超类型的一个实例。子类型的实例将继承超类型的所有
的属性和方法【私有属性和公有属性】。

注意：instance.constructor 现在指向 Fruits。这是因为 Apple.prototype
中的 constructor 被重写了的缘故。

确定原型与实例的关系
```js
// instanceof 关键字: 如果实例与原型链中出现过的构造函数，返回 true
instance instanceof Apple // true
instance instanceof Fruits // true
instance instanceof Object // true

Apple instanceof Fruits // false

Apple instanceof Object // true
Fruits instanceof Object // true
```
```js
// isPrototypeOf(): 只要是原型链中出现过的原型，返回 true
Object.prototype.isPrototypeOf(instance) // true
Fruits.prototype.isPrototypeOf(instance) // true
Apple.prototype.isPrototypeOf(instance) // true

Object.prototype.isPrototypeOf(Fruits) // true
Object.prototype.isPrototypeOf(Apple) // true

Fruits.prototype.isPrototypeOf(Apple) // false
Apple.prototype.isPrototypeOf(Fruits) // false
```

存在的问题：
1. 超类型中的属性中存在引用值类型
1. 在创建子类型的实例时，不能向超类型的构造函数中传递参数。【实际上，应该说在没有
办法不影响所有对象实例的情况下，给超类型的构造函数传递参数】
