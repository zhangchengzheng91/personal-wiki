# UI 在线编辑功能

存在的问题分:

1. react-router 配置多级路由时，访问这个多级路由，并刷新页面，html 文件中的 script 引用路径会发生变化，
导致页面不能正常渲染【开发环境】
    解决方式：在模版文件的 head 中增加
    ```html
     <base href="/" />
    ```
   [Unexpected token < error in react router component](https://stackoverflow.com/questions/29718481/unexpected-token-error-in-react-router-component)
1. 
1. 
1. 
