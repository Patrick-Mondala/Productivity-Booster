function Combo(performanceCtx, health) {
  this.combo = 0;
  this.performanceCtx = performanceCtx;
  this.health = health;
}

Combo.prototype.draw = function () {
  const ctx = this.performanceCtx;
  ctx.font = "60px Arial";
  ctx.fillStyle = "white";
  ctx.clearRect(20, 480, 1000, 100);
  ctx.fillText(`x${this.combo}`, 20, 540);
};

Combo.prototype.addCombo = function () {
  const ctx = this.performanceCtx;
  this.combo += 1;
  if (this.combo % 10 === 0) this.health.gainHp();
  this.draw(ctx);
}

Combo.prototype.resetCombo = function () {
  const ctx = this.performanceCtx;
  this.combo = 0;
  this.draw(ctx);
}

module.exports = Combo;