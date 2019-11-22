const Healthbar = require("./healthbar");
const Combo = require("./combo");
const Timer = require("./timer");
const Accuracy = require("./accuracy");
const TargetSpawner = require("./targetSpawner");

function Performance(gameCtx, performanceCtx, game) {
  this.gameCtx = gameCtx;
  this.performanceCtx = performanceCtx;
  this.healthbar = new Healthbar(performanceCtx, this, game);
  this.combo = new Combo(performanceCtx, this.healthbar);
  this.timer = null;
  this.accuracy = new Accuracy(performanceCtx);
  this.targets = {};
  this.targetSpawners = [];
  this.targetsSpawned = 0;
  this.stopped = false;
}

Performance.prototype.gameStart = function () {
  this.timer = new Timer();
  this.timer.draw(this.performanceCtx);
  this.healthbar.draw();
  this.accuracy.draw();
  this.combo.draw();
  let firstTargetSpawner = new TargetSpawner(this.gameCtx, this, this.timer);
  this.targetSpawners.push(firstTargetSpawner);
  firstTargetSpawner.start();
  let performance = this;
  let beginDifficulty = setInterval(() => {
    if (!performance.stopped) {
      let newTargetSpawner = new TargetSpawner(this.gameCtx, this, this.timer);
      performance.targetSpawners.push(newTargetSpawner);
      newTargetSpawner.start();
    }
  }, 15000);
}

module.exports = Performance;