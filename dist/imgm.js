/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_webpack@4.42.1@webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */\nmodule.exports = __webpack_amd_options__;\n\n/* WEBPACK VAR INJECTION */}.call(this, {}))\n\n//# sourceURL=webpack:///(webpack)/buildin/amd-options.js?");

/***/ }),

/***/ "./node_modules/_webpack@4.42.1@webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/ImageMerge.js":
/*!***************************!*\
  !*** ./src/ImageMerge.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ImageMerge; });\n/**\n * 图片的配置\n * @typedef {Object} ConfigImage\n * @property {string} ConfigImage.img 图片资源\n * @property {number|string} [ConfigImage.sx] 选取图片的x坐标\n * @property {number|string} [ConfigImage.sy] 选取图片的y坐标\n * @property {number|string} [ConfigImage.sw] 选取图片的宽度\n * @property {number|string} [ConfigImage.sh] 选取图片的高度\n * @property {number|string} [ConfigImage.x]  放到画布上的x坐标\n * @property {number|string} [ConfigImage.y]  放到画布上的y坐标\n * @property {number|string} [ConfigImage.w]  放到画布上的图像的宽度（伸展或缩小图像）\n * @property {number|string} [ConfigImage.h]  放到画布上的图像的高度（伸展或缩小图像）\n * TODO: 增加透明度\n */\n\n/**\n * 文字的配置\n * @typedef {Object} ConfigText\n * @property {string} ConfigImage.text 要添加的文字\n */\n\n/**\n * 图片输出的类型\n * @typedef {\"image/png\"|\"image/jpeg\"|\"image/webp\"} outputType\n */\n\n/**\n * 图拼合并工具\n * @module ImageMerge\n */\nclass ImageMerge {\n\n    /**\n     * 创建图片合并工具的实例\n     * @param {ConfigImage|ConfigText|Array<ConfigImage>|Array<ConfigText>} [config] 要合并图片的配置\n     * @param {number} [width] 画布的宽度\n     * @param {number} [height] 画布的高度\n     */\n    constructor(config, width = 0, height = 0) {\n        this.canvas = document.createElement('canvas');\n        this.ctx = this.canvas.getContext('2d');\n\n        // 备份所有图片资源\n        this.imgs = [];\n        // 画布的宽度、高度\n        this.canvasWidth = width;\n        this.canvasHeight = height;\n\n        // 如果构造函数中就传入了配置，则在初始化完成后直接去处理\n        [].concat(config).forEach((item = {}) => {\n            if (item.img) {\n                this.add(item);\n            } else if (item.text) {\n                this.text(item);\n            }\n        });\n    }\n\n    /**\n     * 添加图片\n     * @public\n     * @param {ConfigImage|Array<ConfigImage>} config 要合并图片的配置\n     * @returns {ImageMerge}\n     */\n    add(config) {\n        const configs = [].concat(config);\n\n        const loads = configs.map(\n            (conf) => this.loadImg(conf.img)\n                .then((image) => {\n                    const {\n                        sx = 0,\n                        sy = 0,\n                        sw = image.width - sx,\n                        sh = image.height - sy,\n                        x = 0,\n                        y = 0,\n                        w = sw,\n                        h = sw,\n                    } = conf;\n                    return Promise.resolve({ image, config: { sx, sy, sw, sh, x, y, w, h } });\n                })\n        );\n        this.imgs.push(...loads);\n        return this;\n    }\n\n    /**\n     * 添加文字\n     * @public\n     * @returns {ImageMerge}\n     */\n    text() {\n        // TODO: 还需要支持添加文字\n        console.error('这个API还没开发完成。');\n        return this;\n    }\n\n    /**\n     * 开始绘制\n     * @public\n     * @param {Object} putParam 绘制参数\n     * @param {outputType} [putParam.putType='image/png'] 绘制参数\n     * @param {number} [putParam.width] 画布的宽度\n     * @param {number} [putParam.height] 画布的高度\n     * @param {number} [putParam.dpi] 每英寸点数\n     * @returns {Promise} 异步绘制\n     */\n    draw({ putType = \"image/png\", width = 0, height = 0, dpi = 96 } = {}) {\n        return Promise.all(this.imgs)\n            .then((imgs) => {\n                const { w, h } = imgs.reduce((pre, { config: { x, y, w, h } }) => ({\n                    w: Math.max(pre.w, x + w),\n                    h: Math.max(pre.h, y + h),\n                }), { w: 0, h: 0 });\n                this.canvas.width = width || this.canvasWidth || w;\n                this.canvas.height = height || this.canvasHeight || h;\n\n                imgs.forEach(img => this.drawImg(img));\n                return this.canvas.toDataURL(putType, dpi);\n            })\n            .catch(err => {\n                throw Error(err);\n            });\n    }\n\n    /**\n     * 加载图片\n     * @private\n     * @param {string} img 图片的地址\n     * @returns {Promise} 加载图片的Promise\n     */\n    loadImg(img) {\n        return new Promise((resolve, reject) => {\n            const image = new Image();\n            image.onload = () => resolve(image);\n            image.onerror = reject;\n            image.src = img;\n        });\n    }\n\n    /**\n     * 把图片画到画布上\n     * @private\n     * @returns {void}\n     */\n    drawImg({ image, config }) {\n        const { sx, sy, sw, sh, x, y, w, h } = config;\n        this.ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ImageMerge.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ImageMerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageMerge */ \"./src/ImageMerge.js\");\n\n\nif ( true && module.exports) {\n    _ImageMerge__WEBPACK_IMPORTED_MODULE_0__[\"default\"].default = _ImageMerge__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    module.exports = _ImageMerge__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n} else if (typeof define === 'function' && typeof __webpack_require__(/*! !webpack amd options */ \"./node_modules/_webpack@4.42.1@webpack/buildin/amd-options.js\") === 'object' && __webpack_require__(/*! !webpack amd options */ \"./node_modules/_webpack@4.42.1@webpack/buildin/amd-options.js\")) {\n    define('ImageMerge', [], function () {\n        return ImageMerge;\n    });\n} else {\n    window.ImageMerge = _ImageMerge__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.42.1@webpack/buildin/harmony-module.js */ \"./node_modules/_webpack@4.42.1@webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });