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

eval("function Accuracy(performanceCtx) {\n  this.totalTargets = 0;\n  this.totalHits = 0;\n  this.totalMisses = 0;\n  this.stopped = false;\n  this.performanceCtx = performanceCtx;\n}\n\nAccuracy.prototype.getAccuracy = function () {\n  let accuracyVal = this.totalHits / (this.totalTargets + this.totalMisses);\n  if (!isFinite(accuracyVal)) accuracyVal = 1;\n  return ((accuracyVal) * 100).toString().slice(0,4) || 0;\n};\n\nAccuracy.prototype.draw = function () {\n  const ctx = this.performanceCtx;\n  ctx.font = \"40px Arial\";\n  ctx.fillStyle = \"white\";\n  if (!this.stopped) {\n    ctx.clearRect(820, 70, 200, 32);\n    ctx.fillText(`${this.getAccuracy()}%`, 850, 100);\n  }\n};\n\nAccuracy.prototype.addTarget = function () {\n  this.totalTargets += 1;\n};\n\nAccuracy.prototype.addHit = function () {\n  this.totalHits += 1;\n  this.draw();\n};\n\nAccuracy.prototype.addMiss = function () {\n  this.totalMisses += 1;\n  this.draw();\n};\n\nmodule.exports = Accuracy;\n\n//# sourceURL=webpack:///./src/accuracy.js?");

/***/ }),

/***/ "./src/combo.js":
/*!**********************!*\
  !*** ./src/combo.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Combo(performanceCtx, health) {\n  this.combo = 0;\n  this.performanceCtx = performanceCtx;\n  this.health = health;\n}\n\nCombo.prototype.draw = function () {\n  const ctx = this.performanceCtx;\n  ctx.font = \"60px Arial\";\n  ctx.fillStyle = \"white\";\n  ctx.clearRect(20, 480, 1000, 100);\n  ctx.fillText(`x${this.combo}`, 20, 540);\n};\n\nCombo.prototype.addCombo = function () {\n  const ctx = this.performanceCtx;\n  this.combo += 1;\n  if (this.combo % 10 === 0) this.health.gainHp();\n  this.draw(ctx);\n}\n\nCombo.prototype.resetCombo = function () {\n  const ctx = this.performanceCtx;\n  this.combo = 0;\n  this.draw(ctx);\n}\n\nmodule.exports = Combo;\n\n//# sourceURL=webpack:///./src/combo.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Performance = __webpack_require__(/*! ./performance */ \"./src/performance.js\");\n\nfunction Game(backgroundLayer, performanceLayer, gameLayer) {\n  this.backgroundCtx = backgroundLayer.getContext(\"2d\");\n  this.performanceCtx = performanceLayer.getContext(\"2d\");\n  this.gameCtx = gameLayer.getContext(\"2d\");\n  this.performanceObj = new Performance(gameLayer.getContext(\"2d\"), performanceLayer.getContext(\"2d\"));\n\n  let game = this;\n  gameLayer.addEventListener(\"mousedown\", function (e) {\n    game.checkIfTargetsClicked(gameLayer, e);\n  });\n}\n\nGame.prototype.checkIfTargetsClicked = function (canvas, event) {\n  let rect = canvas.getBoundingClientRect();\n  let x = Math.floor(event.clientX - rect.left);\n  let y = Math.floor(event.clientY - rect.top);\n  let completeMiss = true;\n  Object.values(this.performanceObj.targets).forEach(target => {\n    if (target.checkClicked(this.gameCtx, [x, y])) {\n      completeMiss = false;\n    }\n  });\n  if (completeMiss) {\n    this.performanceObj.combo.resetCombo();\n    this.performanceObj.accuracy.addMiss();\n    this.performanceObj.healthbar.loseHp();\n  }\n};\n\nGame.prototype.draw = function () {\n  let currentGame = this;\n  const background = new Image();\n  background.onload = function () {\n    currentGame.backgroundCtx.drawImage(background, 0, 0, 2560, 1600, 0, 0, 1000, 550);\n    currentGame.performanceObj.draw(currentGame.performanceCtx);\n  };\n  background.src = \"macwallpaper.jpg\";\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/healthbar.js":
/*!**************************!*\
  !*** ./src/healthbar.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Healthbar(performanceCtx, performanceObj) {\n  this.hp = 8;\n  this.performanceCtx = performanceCtx;\n  this.performanceObj = performanceObj;\n}\n\nconst healthbar = new Image();\n\nHealthbar.prototype.getBar = function () {\n  const healthbarObj = this;\n  switch (healthbarObj.hp) {\n    case 8:\n      return [0, 0];\n    case 7:\n      return [0, 100];\n    case 6:\n      return [0, 190];\n    case 5:\n      return [0, 290];\n    case 4:\n      return [0, 340];\n    case 3:\n      return [0, 440];\n    case 2:\n      return [0, 530];\n    case 1:\n      return [0, 580];\n    default:\n      return [0, 630];\n  };\n}\n\nHealthbar.prototype.draw = function () {\n  const ctx = this.performanceCtx;\n  healthbar.src = \"healthbar.png\";\n  let healthbarObj = this;\n  healthbar.onload = function () {\n    ctx.clearRect(5, 5, 500, 41);\n    ctx.drawImage(healthbar, healthbarObj.getBar()[0], healthbarObj.getBar()[1], 1051, 41, 5, 5, 500, 41);\n  };\n};\n\nHealthbar.prototype.loseHp = function () {\n  const ctx = this.performanceCtx;\n  this.hp -= 1;\n  this.draw(ctx);\n  if (this.hp < 1) {\n    this.performanceObj.timer.stopped = true;\n    this.performanceObj.accuracy.stopped = true;\n  }\n}\n\nHealthbar.prototype.gainHp = function () {\n  const ctx = this.performanceCtx;\n  if (this.hp < 8) {\n    this.hp += 1;\n    this.draw(ctx);\n  }\n}\n\nmodule.exports = Healthbar;\n\n//# sourceURL=webpack:///./src/healthbar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  let backgroundLayer = document.getElementById(\"background\");\n  let performanceLayer = document.getElementById(\"performance\");\n  let gameLayer = document.getElementById(\"game\");\n\n  let game = new Game(backgroundLayer, performanceLayer, gameLayer);\n  game.draw();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/performance.js":
/*!****************************!*\
  !*** ./src/performance.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Healthbar = __webpack_require__(/*! ./healthbar */ \"./src/healthbar.js\");\nconst Combo = __webpack_require__(/*! ./combo */ \"./src/combo.js\");\nconst Timer = __webpack_require__(/*! ./timer */ \"./src/timer.js\");\nconst Accuracy = __webpack_require__(/*! ./accuracy */ \"./src/accuracy.js\");\nconst TargetSpawner = __webpack_require__(/*! ./targetSpawner */ \"./src/targetSpawner.js\");\n\nfunction Performance(gameCtx, performanceCtx) {\n  this.gameCtx = gameCtx;\n  this.healthbar = new Healthbar(performanceCtx, this);\n  this.combo = new Combo(performanceCtx, this.healthbar);\n  this.timer = new Timer();\n  this.accuracy = new Accuracy(performanceCtx);\n  this.targets = {};\n  this.targetsSpawned = 0;\n  this.difficultyStart();\n}\n\nPerformance.prototype.draw = function (ctx) {\n  this.healthbar.draw(ctx);\n  this.combo.draw(ctx);\n  this.timer.draw(ctx);\n  this.accuracy.draw(ctx);\n};\n\nPerformance.prototype.difficultyStart = function () {\n  let firstTargetSpawner = new TargetSpawner(this.gameCtx, this, this.timer);\n  firstTargetSpawner.start();\n  let beginDifficulty = setInterval(() => {\n    let newTargetSpawner = new TargetSpawner(this.gameCtx, this, this.timer);\n    newTargetSpawner.start();\n  }, 15000);\n}\n\nmodule.exports = Performance;\n\n//# sourceURL=webpack:///./src/performance.js?");

/***/ }),

/***/ "./src/target.js":
/*!***********************!*\
  !*** ./src/target.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Target(id, pos, combo, accuracy, health, performance) {\n  this.id = id;\n  this.pos = pos;\n  this.size = 3;\n  this.iconCol = getRandomIconPos()[0];\n  this.iconRow = getRandomIconPos()[1];\n  this.timer = null;\n  this.combo = combo;\n  this.accuracy = accuracy;\n  this.health = health;\n  this.performance = performance;\n  this.accuracy.addTarget();\n}\n\nconst vendorIcons = new Image();\n\nconst getRandomIconPos = () => {\n  let row = Math.floor(Math.random() * 9) * 32;\n  let col = Math.floor(Math.random() * 10) * 32;\n  return [col, row];\n};\n\nTarget.prototype.draw = function (ctx, timer, clickedSize) {\n  const x = this.pos[0];\n  const y = this.pos[1];\n  const iconCol = this.iconCol;\n  const iconRow = this.iconRow;\n  const size = this.size;\n  if (this.size < 2) {\n    ctx.clearRect(x - 2, y - 2, (clickedSize || 0) + 5, (clickedSize || 0) + 5);\n    delete this.performance.targets[this.id];\n    if (!clickedSize) {\n      this.health.loseHp();\n      this.accuracy.addMiss();\n      this.combo.resetCombo();\n    }\n    delete target;\n    clearInterval(timer);\n  } else {\n    ctx.clearRect(x - 2, y - 2, size + 5, size + 5);\n    //first two is x,y pos on spritesheet\n    //second two is h/w on spritesheet\n    //third two is x,y pos on canvas\n    //last two are h/w on canvas\n    ctx.drawImage(vendorIcons, iconRow, iconCol, 32, 32, x, y, size, size);\n    vendorIcons.src = \"vendor-icons.png\";\n  }\n};\n\nTarget.prototype.spawn = function (ctx) {\n  let target = this;\n  let growthDirection = \"out\";\n  var timer = setInterval(function () {\n    if (growthDirection === \"out\") {\n      if (target.size % 2 === 0) target.pos = [target.pos[0] - 1, target.pos[1] - 1];\n      target.size += 1;\n      if (target.size > 100) growthDirection = \"in\";\n    } else {\n      if (target.size % 2 === 0) target.pos = [target.pos[0] + 1, target.pos[1] + 1];\n      target.size -= 1;\n    }\n    target.draw(ctx, timer);\n  }, 20);\n  this.timer = timer;\n};\n\nTarget.prototype.checkClicked = function (ctx, clickedPos) {\n  const x = this.pos[0];\n  const y = this.pos[1];\n  const size = this.size;\n  const xClickableLimit = x + size;\n  const yClickableLimit = y + size;\n  const clickedX = clickedPos[0];\n  const clickedY = clickedPos[1];\n  if (clickedX >= x && clickedX <= xClickableLimit && clickedY >= y && clickedY <= yClickableLimit) {\n    this.clickedOn(ctx);\n    return true;\n  }\n};\n\nTarget.prototype.clickedOn = function (ctx) {\n  const clickedSize = this.size;\n  this.combo.addCombo();\n  this.accuracy.addHit();\n  this.size = 0;\n  this.draw(ctx, this.timer, clickedSize);\n}\n\nmodule.exports = Target;\n\n//# sourceURL=webpack:///./src/target.js?");

/***/ }),

/***/ "./src/targetSpawner.js":
/*!******************************!*\
  !*** ./src/targetSpawner.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Target = __webpack_require__(/*! ./target */ \"./src/target.js\");\n\nfunction TargetSpawner(gameCtx, performance, timer) {\n  this.gameCtx = gameCtx;\n  this.performance = performance;\n  this.timer = timer;\n  this.stopped = false;\n}\n\nTargetSpawner.prototype.start = function () {\n  let spawnInterval = setInterval(() => {\n    this.spawnTarget();\n  }, Math.floor(Math.random() * 10000) + 1000);\n};\n\nconst getRandomPosition = () => (\n  [Math.floor(Math.random() * 950) + 30, Math.floor(Math.random() * 380) + 110]\n) \n\nTargetSpawner.prototype.spawnTarget = function () {\n  let newTarget = new Target(this.performance.targetsSpawned, getRandomPosition(), this.performance.combo, this.performance.accuracy, this.performance.healthbar, this.performance);\n  newTarget.spawn(this.gameCtx);\n  this.performance.targets[this.performance.targetsSpawned] = newTarget;\n  this.performance.targetsSpawned += 1;\n};\n\nmodule.exports = TargetSpawner;\n\n//# sourceURL=webpack:///./src/targetSpawner.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Timer() {\n  this.seconds = 0;\n  this.stopped = false;\n  this.secToDisplay = function () {\n    let minutes = Math.floor(this.seconds / 60);\n    let seconds = this.seconds % 60;\n    if (minutes < 1 && seconds < 10) return `00:0${seconds}`;\n    if (minutes < 1) return `00:${seconds}`;\n    if (minutes < 10 && seconds < 10) return `0${minutes}:0${seconds}`;\n    if (minutes < 10) return `0${minutes}:${seconds}`;\n    if (seconds < 10) return `${minutes}:0${seconds}`;\n    return `${minutes}:${seconds}`;\n  }\n}\n\nTimer.prototype.draw = function (ctx) {\n  let timerObj = this;\n  var timer = setInterval(function () {\n    if (!timerObj.stopped) {\n      timerObj.seconds += 1\n      ctx.font = \"60px Arial\";\n      ctx.fillStyle = \"white\";\n      ctx.clearRect(845, 0, 200, 60);\n      ctx.fillText(`${timerObj.secToDisplay()}`, 845, 50);\n    }\n    }, 1000);\n};\n\nmodule.exports = Timer;\n\n//# sourceURL=webpack:///./src/timer.js?");

/***/ })

/******/ });