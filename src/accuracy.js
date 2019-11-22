function Accuracy(performanceCtx) {
  this.totalTargets = 0;
  this.totalHits = 0;
  this.totalMisses = 0;
  this.performanceCtx = performanceCtx;
}

Accuracy.prototype.getAccuracy = function () {
  let accuracyVal = this.totalHits / (this.totalTargets + this.totalMisses);
  if (!isFinite(accuracyVal)) accuracyVal = 1;
  return ((accuracyVal) * 100).toString().slice(0,4) || 0;
};

Accuracy.prototype.draw = function () {
  const ctx = this.performanceCtx;
  ctx.font = "40px Arial";
  ctx.fillStyle = "white";
  ctx.clearRect(820, 70, 200, 32);
  ctx.fillText(`${this.getAccuracy()}%`, 850, 100);
};

Accuracy.prototype.addTarget = function () {
  this.totalTargets += 1;
};

Accuracy.prototype.addHit = function () {
  this.totalHits += 1;
  this.draw();
};

Accuracy.prototype.addMiss = function () {
  this.totalMisses += 1;
  this.draw();
};

module.exports = Accuracy;