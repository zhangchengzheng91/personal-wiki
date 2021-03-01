# Headless CMS

## 含义

简答来说，Headless CMS 就是一个独立的后台，只负责存储一个网站的内容，并提供 API 供你读取资料，但是不提供前端显示的界面。也就是说，存储内容的 CMS 跟显示内容的前端是分开的。

举个例子，headless CMS 就像是 Wordpress 去掉前端网页显示的部分。有一个后台，让你可以新增文章，或是其他你自己定义的资料类别，但是它只负责存储你的资料，你必须自己开发前端的部分并使用 CMS 的 API 来拿到资料，显示内容。

## 优势

1. 可以定制化资料形式

    原资料格式：
    ```json
    {
       "图片": "image",
       "名字": "text"
    }
    ```
    定制化的资料格式：
    ```json
    {
        作者: author,
        标题: text,
        內容: richText
    }
    ```
   
    定制完之后，你就可以在后台自由增加新的 author，或者新的 post。然后只要你在前端调用 API 拿到这些资料，并写好要怎么显示资料就完成了。这让你网站外观的自由度非常大，可以定制化非常多的东西。

1. 速度快

    由于前端是自己开发，所以 unuse code 的数量会非常少。
    
    以 Wordpress 为例，因为要应对更多的情境【包括自适应样式等】，势必要做非常多的选项，让使用者可以在后台调整，但通常使用者不会用到所有的功能。所以 Wordpress 会包含多余的代码，所以效率比较低。
    
    可以使用 SPA 框架来做前端展示页面，做到按需加载。同时 SPA 自身的优势，做到局部刷新，用户体验更好。
    
    可以使用 next.js 框架，解决 SPA 在 client 端调用 API 获取资料的问题。 可以减少白屏时间，提升 SEO。
    
1. 跨平台支持

    同一个后台可以同时服务于 PC、APP、穿戴设备 等客户端。
    
1. 实时更新

    前端通过 API 获取内容，只要 headless CMS 当中的内容更新，那么前端页面可以实时获取到最新的内容，不需要重新发布服务。

## 劣势

1. UI 设计
    
    既然是前端开发，那么需要一个设计稿。不是开箱即用。
    
1. 前端开发工作

    需要掌握前端开发的技能

1. 生态

    以 Wordpress 为例，不仅仅是一个 Wordpress 那么简单，还包括插件。如果是 headless CMS 需要自己手动去重新实现这些插件，还需要花费大量的时间。
    
1. 对于不擅长技术的运营人员，修改能容不能实时呈现

1. 无法进行用户个性化定制 --> headless CMS 和 hybrid CMS 混合使用

1. 发布流程比较繁琐
    
## 比较好用的 headless CMS 框架

1. [strapi](https://strapi.io/)

## 评价

这个东西好像在繁体字地区比较火，查的资料好多都是繁体字。。。

## headless CMS 主要要解决的问题

内容的多端呈现，实现内容和展示的分离。

### 参考链接：
1. [為何我不用wordpress？headless CMS的好處](https://tw.jamesku.cc/headless-cms)
1. [什么是 Headless CMS 以及如何从同一个地方采集数据](https://www.gatsbyjs.cn/docs/headless-cms/)
1. [前端百花齊放 無頭CMS興起](https://www.it-square.hk/archives/9801)
1. [CaaS: 内容是新的基础设施 Content-as-a-Service](https://zhuanlan.zhihu.com/p/86848252)
1. [Headless CMS 详细介绍](http://quanzhan.applemei.com/webStack/TXpNNU13PT0=)
1. [sitecore 数字营销资源](https://www.sitecore.com/zh-cn/knowledge-center/digital-marketing-resources/what-is-a-headless-cms)
