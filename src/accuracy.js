function Accuracy() {
}

Accuracy.prototype.draw = function (ctx) {
  ctx.font = "40px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("100%", 870, 100);
};

module.exports = Accuracy;