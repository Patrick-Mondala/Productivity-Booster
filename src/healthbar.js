function Healthbar(performanceCtx) {
  this.hp = 8;
  this.performanceCtx = performanceCtx;
}

const healthbar = new Image();

Healthbar.prototype.getBar = function () {
  const healthbarObj = this;
  switch (healthbarObj.hp) {
    case 8:
      return [0, 0];
    case 7:
      return [0, 100];
    case 6:
      return [0, 190];
    case 5:
      return [0, 290];
    case 4:
      return [0, 340];
    case 3:
      return [0, 440];
    case 2:
      return [0, 530];
    case 1:
      return [0, 580];
    case 0:
      return [0, 630];
    default:
      return [0,0];
  };
}

Healthbar.prototype.draw = function () {
  const ctx = this.performanceCtx;
  healthbar.src = "healthbar.png";
  let healthbarObj = this;
  healthbar.onload = function () {
    ctx.clearRect(5, 5, 500, 41);
    ctx.drawImage(healthbar, healthbarObj.getBar()[0], healthbarObj.getBar()[1], 1051, 41, 5, 5, 500, 41);
  };
};

Healthbar.prototype.loseHp = function () {
  const ctx = this.performanceCtx;
  this.hp -= 1;
  this.draw(ctx);
}

Healthbar.prototype.gainHp = function () {
  const ctx = this.performanceCtx;
  this.hp += 1;
  this.draw(ctx);
}

module.exports = Healthbar;