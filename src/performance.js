const Healthbar = require("./healthbar");
const Combo = require("./combo");
const Timer = require("./timer");
const Accuracy = require("./accuracy");
const TargetSpawner = require("./targetSpawner");

function Performance(gameCtx, performanceCtx) {
  this.gameCtx = gameCtx;
  this.healthbar = new Healthbar(performanceCtx, this);
  this.combo = new Combo(performanceCtx, this.healthbar);
  this.timer = new Timer();
  this.accuracy = new Accuracy(performanceCtx);
  this.targets = {};
  this.targetSpawners = [];
  this.targetsSpawned = 0;
  this.stopped = false;
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