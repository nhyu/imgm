
/**
 * 图片的配置
 * @typedef {Object} ConfigImage
 * @property {string} ConfigImage.img 图片资源
 * @property {string} [ConfigImage.sx] 选取图片的x坐标
 * @property {string} [ConfigImage.sy] 选取图片的y坐标
 * @property {string} [ConfigImage.sw] 选取图片的宽度
 * @property {string} [ConfigImage.sh] 选取图片的高度
 * @property {string} [ConfigImage.x]  放到画布上的x坐标
 * @property {string} [ConfigImage.y]  放到画布上的y坐标
 * @property {string} [ConfigImage.w]  放到画布上的图像的宽度（伸展或缩小图像）
 * @property {string} [ConfigImage.h]  放到画布上的图像的高度（伸展或缩小图像）
 * TODO: 增加透明度
 */

/**
 * 文字的配置
 * @typedef {Object} ConfigText
 * @property {string} ConfigImage.text 要添加的文字
 */
/**
 * 图片输出的类型
 * @typedef {"image/png"|"image/jpeg"|"image/webp"} outputType
 */

/**
 * 图拼合并工具
 * @module ImageMerge
 */
export default class ImageMerge {

    /**
     * 创建图片合并工具的实例
     * @param {ConfigImage|ConfigText|Array<ConfigImage>|Array<ConfigText>} [config] 要合并图片的配置
     * @param {number} [width] 画布的宽度
     * @param {number} [height] 画布的高度
     */
    constructor(config, width = 0, height = 0) {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        // 备份所有图片资源
        this.imgs = [];
        // 画布的宽度
        this.width = width;
        // 画布的高度
        this.height = height;

        // 如果构造函数中就传入了配置，则在初始化完成后直接去处理
        [].concat(config).forEach((item = {}) => {
            if (item.img) {
                this.add(item);
            } else if (item.text) {
                this.text(item);
            }
        });
    }

    /**
     * 添加图片
     * @public
     * @param {ConfigImage|Array<ConfigImage>} config 要合并图片的配置
     * @returns {ImageMerge}
     */
    add(config) {
        const configs = [].concat(config);

        const loads = configs.map(
            (conf) => this.loadImg(conf.img)
                .then((image) => {
                    const {
                        sx = 0,
                        sy = 0,
                        sw = image.width,
                        sh = image.height,
                        x = 0,
                        y = 0,
                        w = sw,
                        h = sw,
                    } = conf;
                    return Promise.resolve({ image, config: { sx, sy, sw, sh, x, y, w, h } });
                })
        );
        this.imgs.push(...loads);
        return this;
    }

    /**
     * 添加文字
     * @public
     * @returns {ImageMerge}
     */
    text() {
        // TODO: 还需要支持添加文字
        return this;
    }

    /**
     * 开始绘制
     * @public
     * @param {Object} putParam 绘制参数
     * @param {outputType} [putParam.putType=image/png] 绘制参数
     * @param {number} [putParam.width] 画布的宽度
     * @param {number} [putParam.height] 画布的高度
     * @param {number} [putParam.dpi] 每英寸点数
     * @returns {Promise} 异步绘制
     */
    draw({ putType = "image/png", width = 0, height = 0, dpi = 96 }) {
        return Promise.all(this.imgs)
            .then((imgs) => {
                const { w, h } = imgs.reduce((pre, { config: { x, y, w, h } }) => ({
                    w: Math.max(pre.w, x + w),
                    h: Math.max(pre.h, y + h),
                }), { w: 0, h: 0 });
                this.canvas.width = width || this.width || w;
                this.canvas.height = height || this.height || h;

                imgs.forEach(img => this.drawImg(img));
                return this.canvas.toDataURL(putType, dpi);
            })
            .catch(err => {
                throw Error(err);
            });
    }

    /**
     * 加载图片
     * @private
     * @param {string} img 图片的地址
     * @returns {Promise} 加载图片的Promise
     */
    loadImg(img) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = reject;
            image.src = img;
        });
    }

    /**
     * 把图片画到画布上
     * @private
     * @returns {void}
     */
    drawImg({ image, config }) {
        const { sx, sy, sw, sh, x, y, w, h } = config;
        this.ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
    }
}
