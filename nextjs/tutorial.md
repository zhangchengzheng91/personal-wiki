# tutorial

1. [预渲染和数据请求](https://nextjs.org/learn/basics/data-fetching)

    1. 支持两种形势的预渲染
        
        1. SSG (Static Generation)
        
            构建时直接生成 HTML 文件，每个请求重复利用 HTML，方便 CDN 缓存
            
            getStaticProps: 即可以读取系统文件、读取数据库、XHR 等
            
            Tips: getStaticProps 只能在 pages 目录下使用，在其他的位置使用会报错
            
            SSG 依赖 data 的两种情形：
            
                1. 当前页面的内容，依赖额外的数据 getStaticProps
                
                    1. 数据可以在用户请求之前就可以用来渲染页面
                    1. 数据来源于 headless CMS
                    1. 数据可以被公共的缓存，而不是用户特定
                    1. 页面一定是被预渲染的，并且犹豫 CDN 的原因，速度会更快
                    
                1. 当前页面的路径，依赖额外的数据 getStaticPaths
                
                    build 页面的路径依赖三方数据。
                    
                    这里主要是用来处理动态路由中，页面 404 的情况 { fallback: false }
                    
                        fallback: false 在 paths 较少的情况下或者不是频繁更新的情况下，比较有用，每次增加新的 path，必须重新 build
                        
                        fallback: true，getStaticProps 的行为将会改变
                        
                            1. 只有在 getStaticPaths 中返回的 paths 才会 SSG，而不是 getStaticProps 就会 SSG
                            1. 未 SSG 的页面，不会返回 404，而是会在第一次请求的时候
                            1. 在后台，next.js 将会静态生成对应请求的 html 和 json，这个是包含在 getStaticProps 中的
                            1. 当生成结束，浏览器将会说到对应路径的 json，然后自动重新渲染页面。从用户的角度，页面将会从 fallback page 变换成整张页面
                            1. 与此同时，next.js 把这个路径加入到预渲染页面的列表。之后相同的请求，将会直接使用已经生成的页面。同构建时候的效果一样
                            
                            如果 fallback: true，那么可以通过 router.isFallback 属性去判断，从而自定义 fallback 页面
                            
                            使用场景：
                            
                                存在大量的 SSG 页面，构建时间非常非常长，可以选择将部分页面 SSG，其他的页面首次请求的时候 SSG。这样既能保证用户体验，又能保证构建速度
                            
                                fallback: true 不会自动更新 SSG 的页面，必须配合 revalidate:1 一起使用            
                                
                        fallback: blocking，getStaticPaths 中未返回的 paths 请求时，将会等待生成 html (类似与 SSR)，然后缓存起来。getStaticProps 的行为：
                        
                            1. getStaticPaths 返回的 paths 会走 SSG 的流程
                            1. getStaticPaths 未返回的 paths 将不会返回 404 的页面，而是在第一次请求的时候触发 SSR 然后返回生成的 html
                            1. 当这些结束之后，浏览器将会收到 html。从用户的角度，页面将会从 loading 页面过渡到完整的页面，不会有闪动。
                            1. 与此同时，next.js 把这个路径加入到预渲染页面的列表。之后相同的请求，将会直接使用已经生成的页面。同构建时候的效果一样
                            
                            fallback: blocking 不会自动更新 SSG 的页面，必须配合 revalidate:1 一起使用
                            
                1. getServerSideProps(SSR)
                    
                    每次请求都回去 fetch 数据。在每次请求的时候都会被调用， Time to first byte (TTFB) 将会比 getStaticProps 慢，且不能被 CDN 缓存。
                    
                    如果不需要预渲染数据，建议将 fetch 放到客户端
                    
            建议使用 SSG 的页面：
            
                1. 市场推广页、落地页
                1. 博客文章页
                1. 商品列表
                1. 帮助页面、文档页、用户协议页面
                
                只要是用户请求之前就能预渲染的页面，都可以使用 SSG
                
            SSG 的局限性：
           
                如果使用 SSG 的页面有频繁的数据更新，那么意味着要频繁的 build，可以使用以下两种方式来提升性能
                
                1. SSG + CSR 相结合：不频繁变动的页面使用 SSG，频繁变动的页面使用 CSR
                1. 直接使用 SSR 替换 SSG
            
        1. SSR (Server-side Redering)
        
            在接收到请求时生成 HTML，然后返回 HTML。
            
            getServerSideProps: 在每次请求的时候都会被调用， Time to first byte (TTFB) 将会比 getStaticProps 慢，且不能被 CDN 缓存。

        1. CSR (Client-side Rendering)

            1. 预渲染部分的静态资源不需要额外的数据
            1. 当页面加载完成之后，客户端 fetch 额外的数据

    1. 其他
        
        1. SWR (stable-while-revalidate)

1. [动态路由](https://nextjs.org/learn/basics/dynamic-routes)

    1. getStaticPaths 返回所有支持的路径
    ```js
    // pages/posts/[id].js
    export async function getStaticPaths() {
       return {
         paths: [
           {
             params: {
               id: 'ssg-ssr' // 注意这个 key
             }
           }, {
             params: {
               id: 'ssg-ssr'
             }
           },
         ],
         fallcack: false // 如果路径不在以上的 paths 列表中，则返回 404 页面
       }
    }
    ```
   
1. [API Routes](https://nextjs.org/learn/basics/api-routes)



product 

title

User

firstName lastName

Address

type line1 line2 city state zip

Product.User = Product.belongsTo(User);
User.Addresses = User.hasMany(Address);
