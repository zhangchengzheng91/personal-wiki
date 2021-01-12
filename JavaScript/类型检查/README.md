# 类型检查小工具

typeof 返回的值不一定准确
```js
var str1 = 'hello'
typeof str1 // "string"
str1 instanceof String // true

var str2 = new String('world')
typeof str2 // "object"
str2 instanceof String // true

var arr = [0, 1, 2]
var tom = { age: 18 }
typeof arr // "object"
typeof tom "object"
arr instanceof Array // true
arr instanceof Object // true
tom instanceof Object // true
```

```js
const isOfType = (() => {
  // create a plain object with no prototype
  const type = Object.create(null);

  // check for null type
  type.null = x => x === null;
  // check for undefined type
  type.undefined = x => x === undefined;
  // check for nil type. Either null or undefined
  type.nil = x => type.null(x) || type.undefined(x);
  // check for strings and string literal type. e.g: 's', "s", `str`, new String()
  type.string = x => !type.nil(x) && (typeof x === 'string' || x instanceof String);
  // check for number or number literal type. e.g: 12, 30.5, new Number()
  type.number = x => !type.nil(x)
    && (// NaN & Infinity have typeof "number" and this excludes that
      (!isNaN(x) && isFinite(x)
        && typeof x === 'number'
      ) || x instanceof Number);
  // check for boolean or boolean literal type. e.g: true, false, new Boolean()
  type.boolean = x => !type.nil(x) && (typeof x === 'boolean' || x instanceof Boolean);
  // check for array type
  type.array = x => !type.nil(x) && Array.isArray(x);
  // check for object or object literal type. e.g: {}, new Object(), Object.create(null)
  type.object = x => ({}).toString.call(x) === '[object Object]';
  // check for provided type instance
  type.type = (x, X) => !type.nil(x) && x instanceof X;
  // check for set type
  type.set = x => type.type(x, Set);
  // check for map type
  type.map = x => type.type(x, Map);
  // check for date type
  type.date = x => type.type(x, Date);

  return type;
})();
```

建议直接使用 Object.prototype.toString.call() 方法判断

|调用|结果|
|:---|:---|
|Object.prototype.toString.call(true)|"[object Boolean]"|
|Object.prototype.toString.call(123)|"[object Number]"|
|Object.prototype.toString.call('123123')|"[object String]"|
|Object.prototype.toString.call(new String('hello'))|"[object String]"|
|Object.prototype.toString.call(null)|"[object Null]"|
|Object.prototype.toString.call(undefined)|"[object Undefined]"|
|Object.prototype.toString.call(Symbol())|"[object Symbol]"|
|Object.prototype.toString.call({})|"[object Object]"|
|Object.prototype.toString.call(function() {})|"[object Function]"|
|Object.prototype.toString.call([])|"[object Array]"|
|Object.prototype.toString.call(new Error())|"[object Error]"|
|Object.prototype.toString.call(new RegExp())|"[object RegExp]"|
|Object.prototype.toString.call(Math)|"[object Math]"|
|Object.prototype.toString.call(JSON)|"[object JSON]"|
|Object.prototype.toString.call(document)|"[object HTMLDocument]"|
|Object.prototype.toString.call(window)|"[object Window]"|
|Object.prototype.toString.call(new Map())|"[object Map]"|
|Object.prototype.toString.call(new Set())|"[object Set]"|


参考链接：
1. [你应该了解的25个JS技巧](https://mp.weixin.qq.com/s/IFmzGyz3MWOYj80qrq1Uig)
1. [如何写出一个惊艳面试官的深拷贝?](https://zhuanlan.zhihu.com/p/83412609)
