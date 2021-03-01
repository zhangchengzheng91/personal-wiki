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
