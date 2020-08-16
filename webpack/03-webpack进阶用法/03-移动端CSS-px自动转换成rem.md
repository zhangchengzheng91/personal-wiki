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

使用 px2rem-loader

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
					'less-loader',
					{
						'loader': 'px2rem-loader',
						options: {
							remUnit: 75,
							remPrecision: 8,
						}
					}
				]
			}
		]
	}
	...,
}
```
