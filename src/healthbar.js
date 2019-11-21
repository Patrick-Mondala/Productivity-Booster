function Healthbar(hp) {
  this.hp = hp;
}

Healthbar.prototype.draw = function (ctx) {
  const healthbar = new Image();
  healthbar.src = "healthbar.png";
  healthbar.onload = function () {
    ctx.drawImage(healthbar, 0, 0, 1051, 41, 5, 5, 500, 41);
  };
};

module.exports = Healthbar;