const Performance = require("./performance");

function Game(backgroundLayer, performanceLayer, gameLayer) {
  this.backgroundCtx = backgroundLayer.getContext("2d");
  this.performanceCtx = performanceLayer.getContext("2d");
  this.gameCtx = gameLayer.getContext("2d");
  this.performanceObj = new Performance(gameLayer.getContext("2d"), performanceLayer.getContext("2d"));

  let game = this;
  gameLayer.addEventListener("mousedown", function (e) {
    game.checkIfTargetsClicked(gameLayer, e);
  });
}

Game.prototype.checkIfTargetsClicked = function (canvas, event) {
  let rect = canvas.getBoundingClientRect();
  let x = Math.floor(event.clientX - rect.left);
  let y = Math.floor(event.clientY - rect.top);
  this.performanceObj.targets.forEach(target => target.checkClicked(this.gameCtx, [x, y]));
};

Game.prototype.draw = function () {
  let currentGame = this;
  const background = new Image();
  background.onload = function () {
    currentGame.backgroundCtx.drawImage(background, 0, 0, 1024, 682, 0, 0, 1000, 550);
    currentGame.performanceObj.draw(currentGame.performanceCtx);
  };
  background.src = "background.jpg";
}

module.exports = Game;