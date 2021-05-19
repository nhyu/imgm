# imgm 图片合并工具

使用 JS 合并图片、合并精灵图

## Install

> 功能为完善，请自行 copy 代码进行开发。

<!-- > $ `npm install imgm -S` -->

## Usage

```js
const im = new ImageMerge();
im.add({
  img: "./image/body.png",
  sx: 0,
  sy: 0,
  sw: 256,
  sh: 256,
  x: 0,
  y: 0,
  w: 256,
  h: 256,
});
im.add([{ img: "./image/eyes.png" }, { img: "./image/mouth.png" }]);
im.draw().then((image) => {
  console.log("output image:", image);
  const img = new Image();
  img.src = image;
  document.body.appendChild(img);
});
```

> 示例可以参考 [example/index.html](https://github.com/nhyu/imgm/blob/dev/example/index.html)

## API

### add(config) - 添加图片

- config {Object|Array} 增加图拼啊的配置，可以是单个配置，也可以是多个配置的数组
  - config.img {string} 【必填】图片
  - config.sx {number|string} 从图片的 x 开始选取图片
  - config.sy {number|string} 从图片的 y 开始选取图片
  - config.sw {number|string} 选取图片的宽度
  - config.sh {number|string} 选取图片的高度
  - config.x {number|string} 选取的图片放置到画布的 x 坐标
  - config.y {number|string} 选取的图片放置到画布的 y 坐标
  - config.w {number|string} 选取的图片放置到画布占的宽度
  - config.h {number|string} 选取的图片放置到画布占的高度

### text() - 添加文字

> 待开发

### draw({putType, width, height, dpi}) - 绘制

- putType {string} 【默认值：'image/png'】
- width {number} 【默认值：0】画布的宽度，值为 0 时则不使用次参数
- height {number} 【默认值：0】画布的高度，值为 0 时则不使用次参数
- dpi {number} 【默认值：96】每英寸像素点数

返回值是一个 Promise 对象。

## License

[MIT](https://preco.mit-license.org/)
