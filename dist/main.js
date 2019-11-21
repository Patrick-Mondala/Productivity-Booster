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

/***/ "./src/accuracy.js":
/*!*************************!*\
  !*** ./src/accuracy.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Accuracy() {\n}\n\nAccuracy.prototype.draw = function (ctx) {\n  ctx.font = \"40px Arial\";\n  ctx.fillStyle = \"white\";\n  ctx.fillText(\"100%\", 870, 100);\n};\n\nmodule.exports = Accuracy;\n\n//# sourceURL=webpack:///./src/accuracy.js?");

/***/ }),

/***/ "./src/combo.js":
/*!**********************!*\
  !*** ./src/combo.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Combo() {\n}\n\nCombo.prototype.draw = function (ctx) {\n  ctx.font = \"60px Arial\";\n  ctx.fillStyle = \"white\";\n  ctx.fillText(\"x50\", 20, 540);\n};\n\nmodule.exports = Combo;\n\n//# sourceURL=webpack:///./src/combo.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Target = __webpack_require__(/*! ./target */ \"./src/target.js\");\nconst Healthbar = __webpack_require__(/*! ./healthbar */ \"./src/healthbar.js\");\nconst Combo = __webpack_require__(/*! ./combo */ \"./src/combo.js\");\nconst Timer = __webpack_require__(/*! ./timer */ \"./src/timer.js\");\nconst Accuracy = __webpack_require__(/*! ./accuracy */ \"./src/accuracy.js\");\n\nfunction Game(backgroundLayer, performanceLayer, gameLayer) {\n  this.backgroundCtx = backgroundLayer.getContext(\"2d\");\n  this.performanceCtx = performanceLayer.getContext(\"2d\");\n  this.gameCtx = gameLayer.getContext(\"2d\");\n\n  gameLayer.addEventListener(\"mousedown\", function (e) {\n    getMousePosition(gameLayer, e);\n  });\n}\n\nfunction getMousePosition(canvas, event) {\n  let rect = canvas.getBoundingClientRect();\n  let x = Math.floor(event.clientX - rect.left);\n  let y = Math.floor(event.clientY - rect.top);\n  console.log(\"Coordinate x: \" + x,\n    \"Coordinate y: \" + y);\n}\n\nGame.prototype.draw = function () {\n  let currentGame = this;\n  const background = new Image();\n  background.onload = function () {\n    currentGame.backgroundCtx.drawImage(background, 0, 0, 1024, 682, 0, 0, 1000, 550);\n\n    let healthbar = new Healthbar(100);\n    healthbar.draw(currentGame.performanceCtx);\n\n    let combo = new Combo();\n    combo.draw(currentGame.performanceCtx);\n\n    let timer = new Timer();\n    timer.draw(currentGame.performanceCtx);\n\n    let accuracy = new Accuracy();\n    accuracy.draw(currentGame.performanceCtx);\n\n    let target = new Target([600, 200], 40);\n    target.draw(currentGame.gameCtx);\n  };\n  background.src = \"background.jpg\";\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/healthbar.js":
/*!**************************!*\
  !*** ./src/healthbar.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Healthbar(hp) {\n  this.hp = hp;\n}\n\nHealthbar.prototype.draw = function (ctx) {\n  const healthbar = new Image();\n  healthbar.src = \"healthbar.png\";\n  healthbar.onload = function () {\n    ctx.drawImage(healthbar, 0, 0, 1051, 41, 5, 5, 500, 41);\n  };\n};\n\nmodule.exports = Healthbar;\n\n//# sourceURL=webpack:///./src/healthbar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  let backgroundLayer = document.getElementById(\"background\");\n  let performanceLayer = document.getElementById(\"performance\");\n  let gameLayer = document.getElementById(\"game\");\n\n  let game = new Game(backgroundLayer, performanceLayer, gameLayer);\n  game.draw();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/target.js":
/*!***********************!*\
  !*** ./src/target.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Target(pos, size) {\n  this.pos = pos;\n  this.size = size;\n}\n\nconst getRandomIconPos = () => {\n  let row = Math.floor(Math.random() * 9) * 32;\n  let col = Math.floor(Math.random() * 10) * 32;\n  return [col, row];\n}\n\nTarget.prototype.draw = function (ctx) {\n  const x = this.pos[0];\n  const y = this.pos[1];\n  const iconCol = getRandomIconPos()[0];\n  const iconRow = getRandomIconPos()[1];\n  const size = this.size;\n  const vendorIcons = new Image();\n  vendorIcons.onload = function () {\n    //first two is x,y pos on spritesheet\n    //second two is h/w on spritesheet\n    //third two is x,y pos on canvas\n    //last two are h/w on canvas\n    ctx.drawImage(vendorIcons, iconRow, iconCol, 32, 32, x, y, size, size);\n  };\n  vendorIcons.src = \"vendor-icons.png\";\n};\n\nmodule.exports = Target;\n\n//# sourceURL=webpack:///./src/target.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Timer() {\n  this.seconds = 0;\n  this.secToDisplay = function () {\n    let minutes = Math.floor(this.seconds / 60);\n    let seconds = this.seconds % 60;\n    if (minutes < 1 && seconds < 10) return `00:0${seconds}`;\n    if (minutes < 1) return `00:${seconds}`;\n    if (minutes < 10 && seconds < 10) return `0${minutes}:0${seconds}`;\n    if (minutes < 10) return `0${minutes}:${seconds}`;\n    return `${minutes}:${seconds}`;\n  }\n}\n\nTimer.prototype.draw = function (ctx) {\n  let timerObj = this;\n  var timer = setInterval(function () {\n    timerObj.seconds += 1\n    ctx.font = \"60px Arial\";\n    ctx.fillStyle = \"white\";\n    ctx.clearRect(845, 0, 200, 60);\n    ctx.fillText(`${timerObj.secToDisplay()}`, 845, 50);\n  }, 1000);\n};\n\nmodule.exports = Timer;\n\n//# sourceURL=webpack:///./src/timer.js?");

/***/ })

/******/ });