const Target = require("./target");
const Healthbar = require("./healthbar");
const Combo = require("./combo");
const Timer = require("./timer");
const Accuracy = require("./accuracy");

function Game(backgroundLayer, performanceLayer, gameLayer) {
  this.backgroundCtx = backgroundLayer.getContext("2d");
  this.performanceCtx = performanceLayer.getContext("2d");
  this.gameCtx = gameLayer.getContext("2d");

  gameLayer.addEventListener("mousedown", function (e) {
    getMousePosition(gameLayer, e);
  });
}

function getMousePosition(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  let x = Math.floor(event.clientX - rect.left);
  let y = Math.floor(event.clientY - rect.top);
  console.log("Coordinate x: " + x,
    "Coordinate y: " + y);
}

Game.prototype.draw = function () {
  let currentGame = this;
  const background = new Image();
  background.onload = function () {
    currentGame.backgroundCtx.drawImage(background, 0, 0, 1024, 682, 0, 0, 1000, 550);

    let healthbar = new Healthbar(100);
    healthbar.draw(currentGame.performanceCtx);

    let combo = new Combo();
    combo.draw(currentGame.performanceCtx);

    let timer = new Timer();
    timer.draw(currentGame.performanceCtx);

    let accuracy = new Accuracy();
    accuracy.draw(currentGame.performanceCtx);

    let target = new Target([600, 200], 40);
    target.draw(currentGame.gameCtx);
  };
  background.src = "background.jpg";
}

module.exports = Game;