const Game = require("./game");

document.addEventListener("DOMContentLoaded", function () {
  let backgroundLayer = document.getElementById("background");
  let performanceLayer = document.getElementById("performance");
  let gameLayer = document.getElementById("game");

  let game = new Game(backgroundLayer, performanceLayer, gameLayer);
  game.draw();
});