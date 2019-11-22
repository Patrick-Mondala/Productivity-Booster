const Healthbar = require("./healthbar");
const Combo = require("./combo");
const Timer = require("./timer");
const Accuracy = require("./accuracy");
const TargetSpawner = require("./targetSpawner");

function Performance(gameCtx, performanceCtx) {
  this.healthbar = new Healthbar(performanceCtx);
  this.combo = new Combo(performanceCtx, this.healthbar);
  this.timer = new Timer();
  this.accuracy = new Accuracy(performanceCtx);
  this.targets = {};
  this.targetSpawner = new TargetSpawner(gameCtx, this, this.timer);
  this.targetSpawner.start();
}

Performance.prototype.draw = function (ctx) {
  this.healthbar.draw(ctx);
  this.combo.draw(ctx);
  this.timer.draw(ctx);
  this.accuracy.draw(ctx);
};

module.exports = Performance;