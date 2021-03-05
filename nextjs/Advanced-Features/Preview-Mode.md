# Preview Mode

主要使用场景为：SSG 开发环境

## 操作方式

## Step 1: 创建 API Route

```js
// pages/api/previres.js
export default function(req, res) {
  // ...

  // 将是否开启预览模式的标识设置到浏览器的 cookies.__next_preview_data
  res.setPreviewData({})
  // ...
}
```

## Step2: 使用定制路径访问

通用的使用方式：

1. 创建 secret token string 
1. 拼写 URL
    ```js
    https://<your-site>/api/preview?secret=<token>&slug=<path>
    ```
1. 在 API Route 中配置

    ```js
    export default async function preview(req, res) {
        // Check the secret and next parameters
        // This secret should only be known to this API route and the CMS
        if (req.query.secret !== 'MY_SECRET_TOKEN' || !req.query.slug) {
          return res.status(401).json({ message: 'Invalid token' })
        }
        
        // Fetch the headless CMS to check if the provided `slug` exists
        // getPostBySlug would implement the required fetching logic to the headless CMS
        const post = await getPostBySlug(req.query.slug)
        
        // If the slug doesn't exist prevent preview mode from being enabled
        if (!post) {
          return res.status(401).json({ message: 'Invalid slug' })
        }
        
        // Enable Preview Mode by setting the cookies
        res.setPreviewData({})
        
        // Redirect to the path from the fetched post
        // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
        res.redirect(post.slug)
    }
    ```
   
   ## Step2: Update 'getStaticProps'，使其支持预览模式
   
   
