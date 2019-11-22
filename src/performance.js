const Target = require("./target");
const Healthbar = require("./healthbar");
const Combo = require("./combo");
const Timer = require("./timer");
const Accuracy = require("./accuracy");

function Performance(gameCtx, performanceCtx) {
  this.healthbar = new Healthbar(performanceCtx);
  this.combo = new Combo(performanceCtx, this.healthbar);
  this.timer = new Timer();
  this.accuracy = new Accuracy(performanceCtx);
  let testTarget = new Target([500, 200], this.combo, this.accuracy, this.healthbar);
  testTarget.spawn(gameCtx);
  this.targets = [testTarget];
}

Performance.prototype.draw = function (ctx) {
  this.healthbar.draw(ctx);
  this.combo.draw(ctx);
  this.timer.draw(ctx);
  this.accuracy.draw(ctx);
};

module.exports = Performance;