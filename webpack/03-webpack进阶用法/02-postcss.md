# postcss

CSS3 的属性为什么需要前缀？

浏览器标准未统一

Trident(-ms) Geko(-moz) Webkit(-webkit) Presto(-o)

举个例子：【如何在编写 CSS 不需要添加前缀】
```css
.box {
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	-o-border-radius: 10px;
	border-radius: 10px;
}
```

PostCSS 插件 autoprefixer 自动补齐 CSS3 前缀

使用 autoprefixer 插件

根据 Can I Use 规则 [https://caniuse.com/](https://caniuse.com/)

```javascript
module.exports = {
	...,
	rules: [
		{
			test: /\.css$/,
			use:[
				'style-loader',
				'css-loader',
				'less-loader',
				{
          loader: 'postcss-loader',
          options: {
            plugins: [
              require('autoprefixer')({
                browsers: ['last 2 version', '> 1%', 'IOS 7']
              })
            ]
          }
        }
			]
		}
	]
}
```

postcss-loader 执行顺序必须保证在 css-loader 之前，建议还是放在 less或者 sass 等预处理器
之后更好。即 loader 顺序：

less-loader -> postcss-loader -> css-loader -> style-loader 或者 MiniCssExtractPlugin.loader

其实 postcss-loader 放在 less-loader 之前问题也不大，平时使用的 less 里面的语法基本不会和
 autoprefixer 处理产生冲突的。
