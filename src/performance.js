const Healthbar = require("./healthbar");
const Combo = require("./combo");
const Timer = require("./timer");
const Accuracy = require("./accuracy");
const TargetSpawner = require("./targetSpawner");

function Performance(gameCtx, performanceCtx) {
  this.gameCtx = gameCtx;
  this.healthbar = new Healthbar(performanceCtx);
  this.combo = new Combo(performanceCtx, this.healthbar);
  this.timer = new Timer();
  this.accuracy = new Accuracy(performanceCtx);
  this.targets = {};
  this.targetsSpawned = 0;
  this.difficultyStart();
}

Performance.prototype.draw = function (ctx) {
  this.healthbar.draw(ctx);
  this.combo.draw(ctx);
  this.timer.draw(ctx);
  this.accuracy.draw(ctx);
};

Performance.prototype.difficultyStart = function () {
  let firstTargetSpawner = new TargetSpawner(this.gameCtx, this, this.timer);
  firstTargetSpawner.start();
  let beginDifficulty = setInterval(() => {
    let newTargetSpawner = new TargetSpawner(this.gameCtx, this, this.timer);
    newTargetSpawner.start();
  }, 15000);
}

module.exports = Performance;