# Authentication

## 权限模式

### 客户端验证

客户端先展示一个 loading 页面，然后去请求用户数据，获取用户数据之后，将 loading 页面切换**未授权页面**、**授权页面**，还是**重定向**

### 服务端验证

直接在服务端获取用户数据返回给客户端，这样在客户端可以消除 **未授权页面与授权页面** 或者 **未授权页面与重定向页面** 之间的切换【闪动】

在 getServerSideProps 方法中，从 req 读取用户信息，做权限判断，然后根据用户信息做各种处理。然后确定是返回**未授权页面**、**授权页面**，还是**重定向**