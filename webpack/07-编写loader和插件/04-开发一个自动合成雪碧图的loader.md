# 开发一个自动合成雪碧图的loader

支持的语法：

// 同一个样式文件当中，有两处样式 URL 携带 ?_sprite，则合成一张图片

background: url('a.png?_sprite')
background: url('b.png?_sprite')

background: url('sprite.png')

## 准备知识：如何将两张图片合成一张图片

使用 [spritesmith](https://www.npmjs.com/package/spritesmith) 

```js
// spritesmith 使用示例
const sprites = ['./images/1.jpg', './images/2.jpg']

Spritesmith.run({ src: sprites }, function handleResult(err, result) {
  const { image, coordinates, properties } = result
})
```
