const Game = require("./game");

document.addEventListener("DOMContentLoaded", function () {
  let backgroundLayer = document.getElementById("background");
  let performanceLayer = document.getElementById("performance");
  let gameLayer = document.getElementById("game");
  let menu = document.getElementById("menu");
  let playButton = document.getElementById("play-button");
  let game = new Game(backgroundLayer, performanceLayer, gameLayer);
  game.draw();

  playButton.addEventListener("mousedown", function (e) {
    game.stop();
    game = new Game(backgroundLayer, performanceLayer, gameLayer);
    e.preventDefault();
    menu.setAttribute("style", "display: none");
    game.start();
  });
});