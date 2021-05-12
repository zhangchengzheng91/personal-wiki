# function-vs-arrow-function 区别

1. 语法更加简洁、清晰

1. this

    箭头函数不会创建自己的 this，所以他没有 this，它只会从自己的作用域链的上一层继承 this。
    
    functuin 的 this
    
    1. 如果该函数是一个构造函数，this 指针指向一个新对象
    1. 在严格模式的函数调用下，this 指向 undefined
    1. 如果该函数是一个对象的方法，则它的 this 指针指向这个对象
    1. 等等
    
    通过 call 或 apply 调用
    
    由于箭头函数没有自己的 this，通过 call 或 apply 方法调用一个函数时，只能传递参数（不能绑定this），他们的第一个参数会被忽略。
    
    ```js
    var adder = {
      base : 1,
    
      add : function(a) {
        var f = v => v + this.base;
        return f(a);
      },
    
      addThruCall: function(a) {
        var f = v => v + this.base;
        var b = {
          base : 2
        };
    
        return f.call(b, a);
      }
    };
    
    console.log(adder.add(1));         // 输出 2
    console.log(adder.addThruCall(1)); // 仍然输出 2
    ```

1. arguments

    箭头函数不绑定 arguments 对象

    ```js
    var arguments = [1, 2, 3];
    var arr = () => arguments[0];
    
    arr(); // 1
    
    function foo(n) {
      // 隐式绑定 foo 函数的 arguments 对象. arguments[0] 是 n,即传给foo函数的第一个参数
      var f = () => arguments[0] + n;
      return f();
    }
    
    foo(1); // 2
    foo(2); // 4
    foo(3); // 6
    foo(3,2);//6
   
    // 箭头函数要获取所有的参数，可以使用剩余参数...
    var bar = (...arg) => arg
   bar(1); // [1]
   bar(2); // [2]
   bar(3); // [3]
   bar(3,2);// [3, 2]
    ```

1. 使用箭头函数作为方法

    ```js
   'use strict';
   var obj = {
     i: 10,
     // 用箭头函数定义的方法，this 实际继承的它定义时所处的全局执行环境中的 this
     b: () => console.log(this.i, this),
     // 方法 c 使用普通函数定义，普通函数作为对象的方法调用时，this 指向它所在的对象
     c: function() {
       console.log( this.i, this)
     }
   }
   obj.b();
   // undefined, Window{...}
   obj.c();
   // 10, Object {...}
    ```
1. 使用 new 操作符

    箭头函数使用 new 操作符会报错
    
    function 使用 new 会返回一个对象
    
    ```js
    var A = (name) => {
       this.name = name
    }
   
    function Func(name) {
       this.name = name
    }
     
    var a = new A('tom') // Uncaught TypeError: A is not a constructor
    var func = new Func('tom') // {name: "tom"}
    ```
   
1. prototype

    ```js
    var a = (name) => {
       this.name = name
    }
   
    function func(name) {
       this.name = name
    }
     
    a.prototype // undefined
    func.prototype // {constructor: ƒ}
    ```

1. yield

    箭头函数不能用作函数生成器
    
1. 变量声明提升

    ```js
    console.log(func)
    function func() {}
    ```

参考连接: 

* [MDN - 箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
