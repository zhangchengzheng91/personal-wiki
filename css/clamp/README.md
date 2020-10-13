# clamp

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clamp)

clamp() 函数的作用是把一个值限制在一个上限和下限之间，当这个值超过最小值和最大值的范围时，
在最小值和最大值之间选择一个值使用。它接收三个参数：最小值、首选值、最大值。 clamp() 被用
在 \<length\>、\<frequency\>、\<angle\>、\<time\>、\<percentage\>、\<number\>、
\<integer\> 中都是被允许的。

clamp(MIN, VAL, MAX) 其实就是表示 max(MIN, min(VAL, MAX))

clamp() 函数接收三个用逗号分隔的表达式作为参数，按最小值、首选值、最大值的顺序排列。

当首选值比最小值要小时，则使用最小值。

当首选值介于最小值和最大值之间时，用首选值。

当首选值比最大值要大时，则使用最大值。

clamp()之后，一行代码可以达到和媒体查询一样的效果。
