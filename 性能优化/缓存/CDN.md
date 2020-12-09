# CDN 缓存

1. CDN 的定义

    CDN：Content Delivery Network/Content Ddistribute Network，即内容分发网络
    
1. CDN 的解析过程

    1. 没有 CDN  

        1. 用户在浏览器访问栏中输入要访问的域名
        2. **浏览器向DNS服务器请求对该域名的解析**
        3. DNS服务器返回该域名的IP地址给浏览器
        4. 浏览器使用该IP地址向服务器请求内容
        5. 服务器将用户请求的内容返回给浏览器
        
    1. 有 CDN
    
        1. 用户在浏览器中输入要访问的域名。
        2. **浏览器向DNS服务器请求对域名进行解析。由于CDN对域名解析进行了调整，DNS服务器会最终将域名的解析权交给CNAME指向的CDN专用DNS服务器**
        3. **CDN的DNS服务器将CDN的负载均衡设备IP地址返回给用户**
        4. 用户向CDN的负载均衡设备发起内容URL访问请求。
        5. CDN负载均衡设备会为用户选择一台合适的缓存服务器提供服务。
        选择的依据包括：根据用户IP地址，判断哪一台服务器距离用户最近；根据用户所请求的URL中携带的内容名称，判断哪一台服务器上有用户所需内容；查询各个服务器的负载情况，判断哪一台服务器的负载较小。
        基于以上这些依据的综合分析之后，负载均衡设置会把缓存服务器的IP地址返回给用户。
        6. 用户向缓存服务器发出请求。
        7. 缓存服务器响应用户请求，将用户所需内容传送到用户。
        
## CDN 缓存策略

一般是根据 http 的 Cache-Control 字段

## CDN 回源

回源：CDN 请求真实服务的过程

1. 用户在 CDN 上的内容未找到
1. CDN 上的资源已过期

## CDN 缓存时间的长短

默认情况下，每个文件在 24 小时以后自动过期，可以通过以下两种形式修改默认行为：
    1. 要更改所有匹配相同路径模式的文件的缓存持续时间，可以更改缓存行为的最短 TTL(Time-To-Live)、最长 TTL 和默认 TTL 的 CloudFront 设置。
    1. 要更改单个文件的缓存持续时间，您可以配置源以向文件中添加 Cache-Control max-age 或 Cache-Control s-maxage 指令或者 Expires 标头字段。

## 参考链接
1. [关于CDN与缓存（浏览器和CDN）](https://www.cnblogs.com/blogbyhuer/p/9335257.html)
1. [管理内容保留在缓存中的时间长度（过期）](https://docs.aws.amazon.com/zh_cn/AmazonCloudFront/latest/DeveloperGuide/Expiration.html)
