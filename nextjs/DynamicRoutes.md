# Dynamic Routes

## 参数类型

最终参数位置：router.query

|参数形式|示例|解析结果|最终参数|
|:---|:---|:---|:---|
|[pid]|pages/post/[pid].js<br/><br/><br/>pages/post/[pid]/[comment].js|/post/abc<br/>/post/1<br/>/post/abc?foo=bar<br/>/post/abc/a-comment|{pid: abc}<br/>{pid: 1}<br/>{pid: abc, foo: bar}<br/>{ "pid": "abc", "comment": "a-comment" }|
|[...slug]|pages/post/[...slug].js|**/post**<br/>/post/a<br/>/post/a/b<br/>/post/a/b/c|**404**<br/>{ "slug": ["a"] }<br/>{ "slug": ["a", "b"] }<br/>{ "slug": ["a", "b", "c"] }|
|[[...slug]]|pages/post/[[...slug]].js|**/post**<br/>/post/a<br/>/post/a/b|**{ }**<br/>{ "slug": ["a"] }<br/>{ "slug": ["a", "b"] }<br/>|

## 匹配优先级

|参数形式|/post/create|/post/1 <br/> /post/abc | /post/1/2<br/> /post/a/b/c |
|:---|:---|:---|:---|
|pages/post/create.js|✔️|✖️|✖️|
|pages/post/[pid].js|✖️|✔️|✖️|
|pages/post/[...slug].js|✖️|✖️|✔️|

## 浅路由(Shallow Routing)

```js
router.push(currentPath, newPath, { shallow: true })

// 浅路由生效，两次的 pathname 相同
router.push('/?counter=10', undefined, { shallow: true })

// 浅路由不生效 "/" !== "/about"
router.push('/?counter=10', '/about?counter=10', { shallow: true })
```

改变路由，但是只执行一次 componentDidMount 生命周期，包括 getServerSideProps, getStaticProps, getInitialProps。

**只有在相同 pathname 的情况下才能生效**

## 路由的跳转方式

1. 声明式 <Link to='/path'/>
1. 编程式 router.push('/path')、router.replace('/path')

    如果是 replace，会替换掉浏览器浏览记录中的当前记录

## 参考链接

1. [vue 路由知识点梳理及应用场景整理](https://www.cnblogs.com/linxue/p/10293893.html)
