function Combo() {
}

Combo.prototype.draw = function (ctx) {
  ctx.font = "60px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("x50", 20, 540);
};

module.exports = Combo;