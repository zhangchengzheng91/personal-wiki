# 使用动态 Polyfill 服务

## 构建体积优化：动态 Polyfill

babel-polyfill React 16 官方推荐 不采用
1. 包体积 200K，难以单独抽离 Map、Set
1. 项目里 React 是单独引用 CDN，如果要用它，需要单独构建一份在 react 前加载

babel-plugin-transform-runtime 能只 polyfill 用到的类或方法，相对体积较小

不能 poly 原型上的方法，不适用于业务项目的复杂开发环境

自己写 Map、Set 的 Ployfill （es6-shim ）｜ 定制化高，体积小
1. 重复造轮子，容易在日后年久失修成为坑 
1. 即使体积小，依然所有用户都要加载

polyfill-service | 只给用户返回需要的 polyfill，社区维护

部分国内奇葩的浏览器 UA 可能无法识别（但可以降级返回所有的 polyfill）

## Polyfill Service 原理

识别 User Agent，下发不同的 Polyfill

## 如何动态使用 Polyfill service

polyfill.io 官方提供的服务
```html
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
```

基于官方自建 polyfill 服务
```html
//huayang.qq.com/polyfill_service/v2/polyfill.min.js?unknown=polyfill&features=Promise,Map,Set
```
