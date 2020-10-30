# Mobile Optimization and Performance Review

##  Remove unused CSS

    生产环境 CSS 89.2 KB unused coverage 81.9%
    
    [https://web.dev/unused-css-rules/?utm_source=lighthouse&utm_medium=unknown](https://web.dev/unused-css-rules/?utm_source=lighthouse&utm_medium=unknownhttps://web.dev/unused-css-rules/?utm_source=lighthouse&utm_medium=unknown)
    
    产生原因：
    
    1. 三方库 normalize.css 样式表中某些样式没有用到 6.14 KB. line 1 - 315
    1. 样式乱入：首页混入其他页面的 css，例如：googleAuthStep2、ChangeGoogleAuthModal、device_management_container， fee_and_limits 【这个问题主要集中在 security、KycVerification、FeesAndLimits、CoinSwitchModal、Europe/KycLevel1、LimitDescription 页面】
    1、首页加载了所有组件的样式，不乱当前页面是否使用这个样式
    1. layout 布局样式【media 等】【不解决】
    1. 一个页面加载两套样式: header 中同时包含了 desktop 和 mobile 的样式 【不解决】
    1. 未渲染的 UI 加载的样式，默认为 unuse css 【NoticeBar】
    
    解决方式：
    
    1. 开启 css 压缩 optimize-css-assets-webpack-plugin. 89.2KB -> 54.3 KB
    1. 移除乱入样式
    
##  Remove unused JavaScript
    
    1. _app.js   34.5 KB unused coverage 88.2%
    
    [https://web.dev/remove-unused-code/?utm_source=lighthouse&utm_medium=unknown](https://web.dev/remove-unused-code/?utm_source=lighthouse&utm_medium=unknown)

## Diagnosis

### Minimize main thread work
    
    [https://web.dev/mainthread-work-breakdown/?utm_source=lighthouse&utm_medium=unknown](https://web.dev/mainthread-work-breakdown/?utm_source=lighthouse&utm_medium=unknown)

### Does not use passive listeners to improve scrolling performance

    [Does not use passive listeners to improve scrolling performance](Does not use passive listeners to improve scrolling performance)

### Avoid an excessive DOM size

    [https://web.dev/dom-size/?utm_source=lighthouse&utm_medium=unknown](https://web.dev/dom-size/?utm_source=lighthouse&utm_medium=unknown)

    DOM 嵌套太深

    1. 影响网络传输效率和加载性能
    1. 执行时间
    1. 内存性能
        document.querySelectorAll('div')，可能会把设备内存瞬间沾满
        
### Serve static assets with an efficient cache policy

    [https://web.dev/uses-long-cache-ttl/?utm_source=lighthouse&utm_medium=unknown](https://web.dev/uses-long-cache-ttl/?utm_source=lighthouse&utm_medium=unknown)

    静态资源 http 缓存
    
    包括图片、字体、三方服务的静态文件
    
    
## Others Improvements

###  Avoid interstitials 【避免插页式广告】 

###  App Download Interstitials 【app 下载插入式广告】

##  Fix lazy-loaded content

    [https://developers.google.com/search/docs/guides/lazy-loading](https://developers.google.com/search/docs/guides/lazy-loading)

    [https://developers.google.com/search/docs/guides/lazy-loading](https://developers.google.com/search/docs/guides/lazy-loading)
