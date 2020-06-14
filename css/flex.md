> 参考链接：[阮一峰的网络日志 >> Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

![](./assets/flex.png)
 
| 容器属性||
|:---|:---|
|flex-direction:主轴的方向|row \| row-reverse \| column \| column-reverse||
|flex-wrap:换行|nowrap \| wrap \| wrap-reverse|
|flex-flow|\<flex-direction\> \|\| \<flex-wrap\>简写形式
|justify-content:主轴上的对齐方式|flex-start \| flex-end \| center \| space-between \| space-around
|align-items:交叉轴上的对齐方式|flex-start \| flex-end \| center \| baseline \| stretch
|align-content:多根轴线的对齐方式|flex-start \| flex-end \| center \| space-between \| space-around \| stretch
     
|项目属性||
|:---|:---|
|order:项目的排列顺序|数值越小，排列越靠前，默认为0|
|flex-grow:项目的放大比例|默认为0，即如果存在剩余空间，也不放大|
|flex-shrink:项目的缩小比例|默认为1，即如果空间不足，该项目将缩小|
|flex-basis:在分配多余空间之前，项目占据的主轴空间|\<length> \| auto|
|flex|\<flex-grow> \|\| \<flex-shrink> \|\| \<flex-basis>简写形式，快捷值：auto \| none
|align-self:允许单个项目有与其他项目不一样的对齐方式|auto \| flex-start \| flex-end \| center \| baseline \| stretch
