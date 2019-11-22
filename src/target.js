function Target(id, pos, combo, accuracy, health, performance) {
  this.id = id;
  this.pos = pos;
  this.size = 3;
  this.iconCol = getRandomIconPos()[0];
  this.iconRow = getRandomIconPos()[1];
  this.timer = null;
  this.combo = combo;
  this.accuracy = accuracy;
  this.health = health;
  this.performance = performance;
  this.accuracy.addTarget();
}

const vendorIcons = new Image();

const getRandomIconPos = () => {
  let row = Math.floor(Math.random() * 9) * 32;
  let col = Math.floor(Math.random() * 10) * 32;
  return [col, row];
};

Target.prototype.draw = function (ctx, timer, clickedSize) {
  const x = this.pos[0];
  const y = this.pos[1];
  const iconCol = this.iconCol;
  const iconRow = this.iconRow;
  const size = this.size;
  if (this.size < 2) {
    ctx.clearRect(x - 2, y - 2, (clickedSize || 0) + 5, (clickedSize || 0) + 5);
    delete this.performance.targets[this.id];
    if (!clickedSize) {
      this.health.loseHp();
      this.accuracy.addMiss();
      this.combo.resetCombo();
    }
    delete target;
    clearInterval(timer);
  } else {
    ctx.clearRect(x - 2, y - 2, size + 5, size + 5);
    //first two is x,y pos on spritesheet
    //second two is h/w on spritesheet
    //third two is x,y pos on canvas
    //last two are h/w on canvas
    ctx.drawImage(vendorIcons, iconRow, iconCol, 32, 32, x, y, size, size);
    vendorIcons.src = "vendor-icons.png";
  }
};

Target.prototype.spawn = function (ctx) {
  let target = this;
  let growthDirection = "out";
  var timer = setInterval(function () {
    if (growthDirection === "out") {
      if (target.size % 2 === 0) target.pos = [target.pos[0] - 1, target.pos[1] - 1];
      target.size += 1;
      if (target.size > 90) growthDirection = "in";
    } else {
      if (target.size % 2 === 0) target.pos = [target.pos[0] + 1, target.pos[1] + 1];
      target.size -= 1;
    }
    target.draw(ctx, timer);
  }, 20);
  this.timer = timer;
};

Target.prototype.checkClicked = function (ctx, clickedPos) {
  const x = this.pos[0];
  const y = this.pos[1];
  const size = this.size;
  const xClickableLimit = x + size;
  const yClickableLimit = y + size;
  const clickedX = clickedPos[0];
  const clickedY = clickedPos[1];
  if (clickedX >= x && clickedX <= xClickableLimit && clickedY >= y && clickedY <= yClickableLimit) {
    this.clickedOn(ctx);
    return true;
  }
};

Target.prototype.clickedOn = function (ctx) {
  const clickedSize = this.size;
  this.combo.addCombo();
  this.accuracy.addHit();
  this.size = 0;
  this.draw(ctx, this.timer, clickedSize);
}

module.exports = Target;