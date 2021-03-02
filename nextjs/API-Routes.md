# API Routes

使用 next.js 实现 web API 的功能。

Tips:
* API Routers 由文件系统构建而成
* 路由文件保存在 pages/api 目录下
* 支持 Dynamic API Routes，路由参数匹配规则同 Routing 相同
    * Dynamic API Routes 的参数保存在 req.query 当中。包括 params

## API middlewares

提供默认 middlewares format req 的相关信息：cookies、body(bodyParser)、query

### 支持自定义 middlewares

1. 在路由文件直接定义一个 config
    ```js
    export const config = {
      api: {
        bodyParser: {
          sizeLimit: '1mb',
        }
      }
    }
    ```
   
1. externalResolver 将当前文件交给 express 等处理
    ```js
    export const config = {
      api: {
       externalResolver: true,
      }
    }
    ```
   
### 支持 Connect / Express middlewares

[文档](https://nextjs.org/docs/api-routes/api-middlewares#connectexpress-middleware-support)

## Response Helpers

The response (res) includes a set of Express.js. 可以参考 express 的文档试试。
