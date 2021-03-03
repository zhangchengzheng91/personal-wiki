# Deployment

基于 Vercel 平台部署 next.js 服务。

all in one:
* CDN
* Jamstack
* Serverless

## DPS(Develop, Preview, Ship) 工作流


## 针对 next.js 专门的优化

Vercel 由 next.js 团队开发，可以为 next.js 提供第一优先级的支持

1. 每一个页面即可以使用 SSG 可以使用 SSR 
1. SSG 的页面和静态资源等，可以使用 Vercel's Edge Network
1. SSR 和 API Routes 支持 serverless

## 支持域名，环境变量，https 等

## 自动更新

部署服务，自动使用最新版本的 next.js。

next/link 可以预加载旧版本的页面，整个页面刷新或者 multiple client-side transitions,将会展示最新版本的页面

## 其他的主机选项

### Node.js Server

可以部署在任何安装了 Node.js 的主机上

### Static Html Export
