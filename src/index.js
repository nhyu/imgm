import ImageMerge from './ImageMerge';

if (typeof module !== 'undefined' && module.exports) {
    ImageMerge.default = ImageMerge;
    module.exports = ImageMerge;
} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define('ImageMerge', [], function () {
        return ImageMerge;
    });
} else {
    window.ImageMerge = ImageMerge;
}
