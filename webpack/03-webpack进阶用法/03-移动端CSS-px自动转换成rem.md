# 移动端CSS-px自动转换成rem

浏览器的分辨率：


CSS 媒体查询实现响应式布局

```css
@media srceen and (max-width:980px){
	.header: {
		width: 900px;
	}
}
@media srceen and (max-width:480px){
	.header: {
		width: 400px;
	}
}
@media srceen and (max-width:350px){
	.header: {
		width: 300px;
	}
}
```

缺陷：需要写多套适配样式代码

rem 是什么？

W3C 对 rem 的定义： font-size of the root element

rem 是相对单位

px 是绝对单位

移动端 CSS px 自动转换成 rem

使用 px2rem-loader，**可以尝试 postcss 的 rem 插件。

页面渲染时计算根元素的 font-size

```javascript
module.exports = {
	...,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					{
						'loader': 'px2rem-loader', // px2rem-loader 应该放在 less-loader 之后，不然嵌套的时候，build 会报错
						options: {
							remUnit: 75,
							remPrecision: 8,
						}
					}
					'less-loader',
				]
			}
		]
	}
	...,
}
```

如果不想实现 px 2 rem 的转化，可以在样式后面增加注释：

```css
.page {
	font-size: 12px; /*no*/
	width: 375px; /*no*/
	height: 40px;
}
```

推荐阅读：<br/>
[知乎：为什么很多web项目还是使用 px，而不是 rem？](https://www.zhihu.com/question/313971223/answer/628236155)
