# CSS 命名规范

### BEM

CSS Modules 的命名规范是从 BEM 扩展而来的。BEM 把样式氛围 3 个级别，具体如下所示：

**Block**: 对应模块名，如 Dialog。

**Element**: 对应模块中的节点名：Confirm Button。

**Modifer**: 对应节点相关的状态，如 disabled 和 heightlight。

BEM 最终得到的 class 名为 button-confirm-height。其中 - 连接符可以自定义

在组件化的架构中，建议参考 antd 这套成熟的组件库。

以 button 组件为例：
.ant-btn 控制按钮通用样式
.ant-btn-lg 控制按钮的大小
.ant-btn-primary 控制按钮类型
.ant-btn-loading 控制按钮的 loading 效果
......
通过多个 class 组合来控制一个 button 的样式，实现关注点分离。

### BPF

最令人头疼的 CSS 命名规范发生在业务当中的 class 命名。由于业务的复杂性，且大部分没有规律可行。所以参考 BEM 衍生了 BPF。

**Business**: 对应的业务名称 KYC

**Position**: 在当前模块当中，处于页面的位置：header，banner，main 等

**Function**: 当前页面中的功能：如 title、history 等。

通过 BPF 是想只通过一个 class 来实现样式的效果。精准实现样式效果的控制。
