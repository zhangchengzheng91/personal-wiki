# CSS

CSS 模块化遇到了哪些问题？
    
CSS 模块化重要的是解决了一下两个问题：CSS 样式的导入和导出。灵活按需导入以便复用代码，导出时要能够隐藏内部
作用域，以免造成全局污染。Sass、Less、PostCSS 等试图解决 CSS 编程能力弱的问题，但并没有解决模块化的这个问
题。



上述问题只凭 CSS 自身死无法解决的，如果通过 JavaScript 来管理 CSS，就很好解决。因此 Vjuex 给出的解决方案
是完全的 CSS in JS，但这相当于完全抛弃 CSS，在 JavaScript 中以 hash 映射来写 CSS，但这种做法未免有些激
进，知道出现了 CSS Modules。

CSS Modules

    Inline Style。这种方案彻底抛弃 CSS，使用 JavaScrpt 或者 JSON 来写样式，能给 CSS 提供 JavaScript 同
    样强大的模块化功能。􏳯􏳅􏲵但缺点同样明显
    
CSS Modules 内部通过 ICSS 了来解决样式的导入和导出这两个问题，分别对应 **:import** 和 **:export** 两个新
增伪类。

```css
:import("path/to/dep.css") {
    localAlias: keyFromDep;
    /*......*/
}

:export {
    exportedKey: exportedValue;
    /*......*/
}
```

但直接使用这两个关键字编程太烦琐，项目中很少会直接使用他们，我们需要用的是 JavaScript 来管理 CSS 的能力。
结合 webpack 的 css-loader，就可以在 CSS 中定义样式，在 JavaScript 文件中导入。

**启用 CSS Modules

启用 CSS Modules 的代码如下：

```javascript
// webpack.config.js
css?modules&localIdentName=[name]__[local]-[hash:base64:5]
```

加上 modules 即为启用，其中 localIdentName 是设置生成样式的命名规则。

下面我们直接看怎么引用 CSS，webpack 又是怎么转化 class 名的：

```css
/* components/Button.css */
.normarl{
    /* normal 相关的所有样式 */
}

.disabled {
    /* disabled 相关的所有样式 */
}
```

将以上 CSS 保存好，然后用 import 的方法在 JavaScript 文件中引用：
```javascript
// components/Button.js
import styles from './Button.css'

console.log(styless)
//{
//  normal: 'button--normal-abc5436',
//  disabled: 'button--disabled-def884',
//}
buttonElem.outerHtml = `<button class=${styles.normal}>Submit</button>`
// <button class="button--normal-abc5436">Submit</button>
```

通过这些处理，CSS Modules 实现了一下几点：
1. 所有样式都是局部化，结局了命名冲突和全局污染问题
1. class 名的生成规则灵活配置，可以以此来压缩 class 名
1. 只需引用组件的 JavaScript，就能搞定组件的所有 JavaScript 和 CSS
1. 依然是 CSS，学习成本几乎为零。

**样式默认局部**

使用 CSS Modules 后，就相当于给每个 class 名外加了 **:local**，以此来实现局部化。如果想切换
到全局模式，可以使用 **:global** 包裹。

```css
.nomarl {
    color: green;
}

/* 以上与下面等价 */
:local(.normal) {
    color: green;
}

/* 定义全局样式 */
:global(.btn) {
    color: red;
}

/* 定义多个全局样式 */
:global {
    .link {
        color: green;
    }
    .box {
        color: yellow
    }   
}
```

** 使用 compose 来组合样式

对于样式复用，CSS Modules 只提供了唯一的方式来处理---compose 组合。示例代码如下：

```css
/* components/Button.css */
.base {
    /* 所有通用的样式 */
}

.normal {
    composes: base;
    /* normal 的其他样式 */
}

.disabled {
    composes: base;
    /* disabled 的其他样式 */
}
```
```javascript
import styles from './Button.css'
buttonElem.outerHTML = `<button class=${styels.normal}>Submit</button>`
// <button class='button-base-abc53 button-normal'>Submit</button>
```

由于在 .normal 中组合了 .base，所以编译后的 normal 会变成两个 class。

此外，compose 还可以组合外部文件中的样式：

```css
/* setting.css */
.primary-color {
    color: red;
}

/* components/Button.css */
.base {
     /* 所有通用的样式 */
}

.primary {
    composes: base;
    composes: $primary-color from './setting.css';
    /* primary 的其他样式 */
}
```

对于大多数项目，有了 composes 后，已经不再需要啊预编译处理器了。但如果想用的话，由于 composes 不是标准的 CSS 语法，
编译时会报错，此事就只能使用预编译器自己的语法来做样式复用。

** class 命名技巧 **

CSS Modules 的命名规范是从 BEM 扩展而来的。BEM 把样式氛围 3 个级别，具体如下所示：

**Block**: 对应模块名，如 Dialog。

**Element**: 对应模块中的节点名：Confirm Button。

**Modifer**: 对应节点相关的状态，如 disabled 和 heightlight。

BEM 最终得到的 class 名为 dialog__confirm-button--heightlight。使用双符号__ 和 -- 是为了与区块内单词的分隔符区分开来。
虽然开起来有些奇特，但 BEM 被非常多的大型项目采用。

CSS Modules 中 CSS 文件名恰好对应 Block 名，只需要再考虑 Element 和 Modifier 即可。BEM 对应到 CSS Modules 的做法是：

```css
/* dialog.css */
.ConfirmButton--disabled {}
```

我们也可以不遵循完整的命名规范，使用小驼峰的写法把 Block 和 Modifier 放到一起：

```css
/* dialog.css */
.disablConfirmButton {}
```

**实现 CSS 与 JavaSCript 变量共享**

上面提到的 **:export** 关键字可把 CSS 中的变量数据到 JavaScript 中，例如：

```css
/* config.css */
$primary-color: #f40;

:export {
  primaryColor: $primary-color;
}
```
```javascript
/* app.js */
import style from './config.css'

console.log(style.primaryColor) // #f40
```

CSS Modules 使用技巧

CSS Modules 是对现有 CSS 做减法。为了追求简单可控，作者建议遵循如下原则：

1. 不使用选择器，只使用 class 来定义样式名
1. 不层叠多个 class，只使用一个 class 把所有样式定义好
1. 所有样式通过 composes 组合来实现复用
1. 不嵌套

其中前两条原则相当于削弱了样式中最灵活的部分，初学者很难接受。第一条实践起来难度不大，但第二条模块状态过多时，class 数量
将成倍上升。

上面之所以说"建议"，是因为 CSS Modules 并不强制我们一定这么做。这听起来有些矛盾。由于多数 CSS 项目存在身后的历史遗留问
题，过多的限制意味这增加迁移成本和与外部合作的成本。初期使用肯定有一些折衷。幸运的是，CSS Modules 这点做的很好。下面我们
列举一些常见问题。

** 如果我对一个元素使用多个 class 呢？ **

样式照样生效。

** 如果我在一个 style 文件中使用同名 class 呢？ **

这些同名 class 编译后虽然可能是随机码，但仍是同名的

** 如果我在 style 文件中使用了 id 选择器、伪类和标签选择器呢？ **

所有这些选择器不被转换，原封不动地出现在编译后的 CSS 中。也就是说，CSS Modules 只会切换 class 相关的样式。

** 外部如何覆盖局部样式 **

当生成混淆的 class 名后，可以解决命名冲突问题，但因为无法预知最终的 class 名，不能通过一般选择器覆盖。我们现在在项目
中的实践是可以给相关组件关键点加上 data-role 属性，然后通过属性选择器来覆盖样式：

```jsx
// dialog.js
return (
  <div className={styles.root} data-role='dialog-root'>
    <a className={styles.disabledConfirm} data-role='dialog-confirm-btn'>Confirm</a>
    ......
  </div>
)
```
```css
/* dialog.css */
[data-role='dialog-root'] {
    // override-style
}
```

** 如何与全局样式共存 **

前端项目不可避免地引入 normalize.css 或其他一类全局 CSS 文件，使用 webpack 可以让全局样式和 CSS Modules 的局部样
式和谐共存。下面是具体项目中使用的 webpack 部分配置代码。

```javascript
const webpack = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      exclude: path.resolve(__dirname, 'src/styles'),
      loader: 'style!css?module$localIdentName=[name]__[local]!sass?sourceMap=true'
    }, {
      test: /\.scss$/,
      inculed: path.resolve(__dirname, 'src/styles'),
      loader: 'style!css!sass?sourceMap=true'
    }]
  }
}
```

```javascript
/* src/app.js */
import './styles/app.scss'
import Component from './view/Component'

/* src/view/Component.js */
import './Component.scss'

```

这样所有全局样式都放到 src/styles/app.scss 中引入就可以了，其他所有目录（包括 src/views）中的样式都是局部的。

CSS Modules 很好地解决了 CSS 目前面临的模块化难题。支持与预编译语言搭配使用，能充分利用现有技术，同时也能和全局样
式灵活搭配。CSS Modules 大的实现也属轻量级，未来有标准解决方案后，可以低成本迁移。

5. CSS Modules 结合 React 实践

在 className 出直接使用 class 名即可：

```css
/* dialog.css */
.root {}
.confirm {}
.disabledConfirm {}
```
```jsx
// dialog.js
import React, { Component } from 'react'
import classnames from 'classnames'
import styles from './dialog.css'

class Dialog extends Component {
  render() {
    const cs = classnames({
      confirm: !this.state.disabled,
      disabledConfirm: this.state.disabled,
    })
    
    return (
      <div className={styles.root}>
        <a className={styles[cx]}>Confirm</a>
        ......
      </div>
    )
  }
}
```

注意，一般把组件最外层节点对应的 class 名称为 root。

React 本身处理样式与其他 View 库并没有太多区别，主要是直接操作样式或操作 classname 间接操作样式的不同罢了。
而与 CSS Modules 的深度结合可能是 React 的一大特点。想想一下 CSS 模块化的远景，我们离成熟的 Web 组件化梦想的道路
越来月接近了。

如果不想频繁的输入 styles.**，可以使用 react-css-modules 库。它通过高阶组件的形式来避免重复输入 style.**。我们来
重写上述例子：

```jsx
import React, { Component } from 'react'
import classnames from 'classnames'
import CSSModules from 'react-css-modules'
import styles from './dialog.css'

class Dialog extends Component {
  render() {
    const cs = classnames({
      confirm: !this.state.disabled,
      disabledConfirm: this.state.disabled,
    })
    
    return (
      <div styleName="root">
        <a styleName={cx}>Confirm</a>
        ......
      </div>
    )
  }
}

export default CSSModules(Dialog, styles)
```

此外，对比原始的 CSS Modules，有几个以下优点：
1. 我们不用再关注是否使用驼峰来命名 class 名
1. 我们不用每一次使用 CSS Modules 的时候都关联 styles 对象
1. 使用 CSS Modules，容易使用 :global 去解决特殊情况，使用 react-css-modules 可写成
    ```html
     <div className="golbal-css" styleName="local-module"></div>
    ```
    这种形式轻松应对全局和局部样式
1. 当 styleName 关联了一个 undefined CSS Modules 是，我们会得到一个警告
1. 我们可以强迫使用单一的 CSS Modules

